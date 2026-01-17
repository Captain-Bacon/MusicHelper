# Claude Code: IAM & Subagents - Implementation-Critical Summary

**Focus**: System mechanics, constraints, edge cases, and decision criteria that affect implementation.

---

## IAM & Permissions System

### Permission Tier Model

- **Read-only tools** (File reads, Grep): No approval required
- **Bash commands**: Require approval; "Yes, don't ask again" cached permanently per project directory and command
- **File modification** (Edit/Write): Require approval; cached until session end (not persistent)

**Implication**: File edits require re-approval after session restart, but approved Bash commands persist—design workflows accordingly.

### Bash Permission Pattern Matching

**Critical limitation**: Wildcard patterns have significant bypass vectors.

| Pattern Type | Rule | Bypasses |
|---|---|---|
| Prefix match with `:*` | `Bash(npm run build:*)` | Only works at END of pattern |
| Wildcard `*` | Can appear anywhere | Matches any character sequence |

**Common bypass patterns that WILL NOT be caught**:

- Options before URL: `curl -X GET http://github.com/...` won't match `curl http://github.com/...`
- Different protocol: `curl https://github.com/...` won't match `curl http://github.com/...`
- Redirects: `curl -L http://bit.ly/xyz` (redirects to blocked domain)
- Variables: `URL=http://github.com && curl $URL` circumvents pattern
- Extra whitespace/formatting changes

**Design principle**: Bash patterns are for convenience, not security. Use alternative restrictions:

- **WebFetch domain filtering** for URL restrictions: `WebFetch(domain:github.com)`
- **Custom instructions** via CLAUDE.md for behavioral guidance
- **Hooks** for runtime permission validation

### Read & Edit Permission Paths

**Path syntax varies by context** (this is the non-obvious behavior):

| Pattern | Interpretation | Example |
|---|---|---|
| `//path` | Absolute filesystem root | `Read(//Users/alice/secrets/**)` → `/Users/alice/secrets/**` |
| `~/path` | Home directory | `Read(~/Documents/*.pdf)` → `/Users/alice/Documents/*.pdf` |
| `/path` | **Relative to settings file location** (NOT filesystem root) | `Edit(/src/**)` → `<settings-file-dir>/src/**` |
| `path` or `./path` | Relative to current working directory | `Read(*.env)` → `<cwd>/*.env` |

**Common mistake**: `/Users/alice/file` is NOT an absolute path—it's relative to settings file. Must use `//Users/alice/file`.

Pattern syntax follows **gitignore specification** with glob support (`**`, `*`, `?`).

### Permission Modes

| Mode | Behavior | Use Case |
|---|---|---|
| `default` | Standard prompts on first use per tool | Interactive workflows |
| `acceptEdits` | Auto-accepts file edit permissions | Safe refactoring tasks |
| `plan` | Read-only exploration | Analysis without modification |
| `dontAsk` | Auto-denies tools unless pre-approved | Enforcing constraints |
| `bypassPermissions` | Skips all permission checks | Requires safe environment; use rarely |

**Critical constraint**: If parent uses `bypassPermissions`, subagents cannot override it—it takes precedence.

### Permission Precedence (Highest to Lowest)

1. **Managed settings** (`managed-settings.json`) — organizational policies, cannot be overridden
2. **CLI arguments** (`--add-dir`, `--disallowedTools`)
3. **Local project settings** (`.claude/settings.local.json`)
4. **Shared project settings** (`.claude/settings.json`)
5. **User settings** (`~/.claude/settings.json`)

**Implication**: Teams can enforce policies that cannot be circumvented by individual users or projects.

### Tool-Specific Permission Rules

**Bash**: Supports prefix (`:*`) and wildcard (`*`) matching with limitations (see above).

**Read & Edit**: Use gitignore patterns; apply to all built-in file-reading/writing tools (Grep, Glob, Edit, Write).

**WebFetch**: Domain-based filtering `WebFetch(domain:example.com)`.

**MCP**: Tool namespacing available:

- `mcp__puppeteer` — all tools from puppeteer server
- `mcp__puppeteer__*` — wildcard syntax
- `mcp__puppeteer__puppeteer_navigate` — specific tool

**Task (Subagents)**: Control which subagents can be used:

- `Task(Explore)`, `Task(Plan)`, `Task(Verify)` — add to `deny` array or use `--disallowedTools` CLI flag

### Working Directory Access

Default: Claude has access to files in launch directory only.

Extend access via:

- **Startup**: `--add-dir <path>` CLI argument
- **Runtime**: `/add-dir` slash command
- **Persistent**: `additionalDirectories` in settings

Files in additional directories follow same permission rules—readable without prompts, edits follow permission mode.

### Credential Management

- **Storage**: macOS Keychain (encrypted)
- **Supported types**: Claude.ai credentials, Claude API, Azure Auth, Bedrock Auth, Vertex Auth
- **Custom keys**: `apiKeyHelper` setting runs shell script to return API key
- **Refresh**: Default 5 minutes or on HTTP 401; customize via `CLAUDE_CODE_API_KEY_HELPER_TTL_MS` env var

---

## Subagents Architecture

### Context Window & Resource Isolation

**Each subagent runs in its own context window** with:

- Custom system prompt
- Specific tool access (restricted via allowlist or denylist)
- Independent permissions (inherited from parent, then overridden)

**Critical behavioral difference from main conversation**:

- Subagents cannot spawn other subagents (prevents infinite nesting)
- Each invocation creates fresh context instance—state does not persist between calls
- To "resume" a subagent, explicitly ask Claude to continue previous work; it will reference prior conversation

### Automatic Delegation Logic

Claude decides when to delegate based on:

1. Task description in your request
2. Subagent `description` field (explicit intent matching)
3. Current conversation context

Can also force explicit delegation: `"Use the code-reviewer subagent to review X"`

### Built-in Subagents

**Explore**

- Model: Haiku (fast, low-latency)
- Tools: Read-only (Grep, Glob, Read denied Write/Edit)
- Purpose: File discovery, codebase search
- When: Claude needs to search/understand codebase without making changes
- Benefit: Keeps exploration results out of main conversation context

**Plan** (used during plan mode)

- Model: Inherits from main conversation
- Tools: Read-only
- Purpose: Codebase research before presenting plan
- Constraint: Prevents infinite nesting while gathering context

**General-purpose**

- Model: Inherits from main conversation
- Tools: All tools
- Purpose: Complex research, multi-step ops, code modifications
- When: Task requires both exploration AND modification

**Helper agents**: statusline-setup (Sonnet), Claude Code Guide questions (Haiku)

### Foreground vs. Background Execution

**Foreground** (blocking):

- Blocks main conversation until complete
- Permission prompts and clarifying questions passed through to user
- Use when: frequent back-and-forth needed, latency-sensitive, multiple phases share context

**Background** (concurrent):

- Runs while you continue working
- Inherits parent permissions; auto-denies anything not pre-approved
- If permission denied: tool call fails, subagent continues (soft failure)
- If clarifying question needed: call fails, can resume in foreground
- Use when: task produces verbose output, work is self-contained, can return summary

**Claude decides automatically** based on task, but can override:

- Ask: "Run this in the background"
- Press: Ctrl+B to background running task
- Disable globally: Set `CLAUDE_CODE_DISABLE_BACKGROUND_TASKS=1` env var

### Permission Model for Subagents

**Inheritance with override mechanism**:

- Subagents inherit parent conversation's permissions
- Can override with own `permissionMode` (except see below)
- `bypassPermissions` in parent: **cannot be overridden by child** — takes absolute precedence

**Permission modes available to subagents**:

- `default`: Standard checks with prompts
- `acceptEdits`: Auto-accept file edits
- `dontAsk`: Auto-deny unless pre-approved
- `bypassPermissions`: Skip all checks (use carefully)
- `plan`: Read-only

### Tool Access Control

**Two approaches**:

1. **Allowlist** (`tools` field): Specify exactly which tools to grant
   - If omitted, inherits all tools from parent
   - Example: `tools: [Read, Grep, Glob, Bash]`

2. **Denylist** (`disallowedTools` field): Remove tools from inherited or specified list
   - Example: `disallowedTools: [Write, Edit]`

**Implication**: Allowlist is more explicit/secure; denylist easier to maintain as parent tools expand.

### Context Management & Limits

**Auto-compaction**: When subagent context approaches limit, Claude summarizes older messages to free space while preserving important context.

**Resume semantics**: Each subagent invocation is fresh; prior context accessed by asking Claude to "continue that code review"—Claude then passes relevant context from transcript.

**Parallel research pattern**: Chain multiple subagents where each completes and returns summary to main conversation; avoids context explosion from verbose output.

### Subagent Configuration

**Frontmatter fields** (Markdown-based definition):

```yaml
name: my-agent
description: "Clear description so Claude knows when to delegate"
tools: [Read, Grep, Glob]  # Allowlist
disallowedTools: [Write, Edit]  # Denylist (alternative)
model: sonnet  # or: opus, haiku, inherit, <omitted=default>
permissionMode: default  # or: acceptEdits, dontAsk, bypassPermissions, plan
skills: [skill-name]
hooks: {}
```

**Model selection logic**:

- Explicitly specified: Use that model
- `inherit`: Use same as main conversation
- Omitted: Uses default configured for subagents (typically sonnet)

### Delegation Decision Factors

Choose subagent when:

- Task produces verbose output you don't need in main context (e.g., test runs, log analysis)
- Want to enforce specific tool restrictions/permissions
- Work is self-contained and can return a summary
- Running high-volume operations (to isolate output)

Choose main conversation when:

- Task needs frequent back-and-forth or iterative refinement
- Multiple phases share significant context (plan → implement → test)
- Making quick, targeted change
- Latency matters (subagents start fresh, need time to gather context)

### Best Practices for Subagent Design

1. **Focused intent**: Each subagent should excel at ONE specific task
2. **Detailed descriptions**: Claude uses description to decide when to delegate; be explicit
3. **Minimal tool access**: Grant only necessary permissions (security + focus)
4. **Version control**: Check project subagents into repo; distribute with team
5. **Model choice**: Use Haiku for read-only research (cost); Sonnet for complex reasoning

### Creation Methods

1. **UI**: `/agents` command (recommended; no restart needed)
2. **Manual**: Markdown files in `.claude/agents/` directory
3. **CLI**: `--agents` flag accepts JSON with same schema as frontmatter
4. **Plugins**: Distribute subagents as part of plugin

### Example Use Cases

**Code reviewer** (read-only):

- Tools: Read, Grep, Glob, Bash (no Write/Edit)
- Model: inherit
- Purpose: Analyze quality, security without modifying

**Debugger** (multi-step analysis):

- Tools: Bash, Read, Write
- Model: Sonnet
- Process: Capture error → identify steps → isolate → fix → verify

**Data scientist**:

- Tools: Bash, Read, Write
- Model: Sonnet
- Constraint: Can analyze but cannot modify data (custom system prompt)

---

## Decision Framework: When Constraints Matter

### Bash Pattern Matching

**Decision point**: Need fine-grained command filtering?

- **Use patterns** if casual safety (pattern `Bash(npm run *)`)
- **Use hooks** if strict security (custom validation logic)
- **Avoid expecting patterns as security** (many bypasses exist)

### Permission Modes

**Decision point**: Running untrusted task or background work?

- **`dontAsk`** for background tasks that must stay within pre-approved boundaries
- **`acceptEdits`** for safe refactoring workflows
- **`bypassPermissions`** only for fully sandboxed/safe operations

### Subagent vs. Main Conversation

**Decision point**: Task is verbose, self-contained, or needs constraints?

- **Subagent** if isolating high-volume output or enforcing tool restrictions
- **Main conversation** if iteration and context-sharing are critical
- **Consider Skills** if you want reusable prompts/workflows in main context

### Tool Allowlist vs. Denylist

**Decision point**: Configuring new subagent?

- **Allowlist** (`tools`) for security: explicit about what's allowed
- **Denylist** (`disallowedTools`) for convenience: easier to maintain as capabilities expand

### Context Precedence

**Decision point**: Centralizing policies across team?

- **Use managed-settings.json** for organization-wide constraints (cannot be overridden)
- **Use project settings** for team-specific configurations (can be overridden locally)
- **Use user settings** for individual preferences

---

## Trade-offs & Non-Obvious Behaviors

### Bash Permissions

- Trade-off: Simplicity vs. security; patterns easy to use but bypassable
- Implication: Pair with application-level guidance (CLAUDE.md) or hooks

### Subagent Context Isolation

- Trade-off: Fresh context per invocation eliminates state carryover; requires explicit "resume" requests
- Benefit: Prevents context pollution; clear boundaries
- Cost: Latency (subagent must re-gather context on first invocation)

### Permission Mode Precedence

- Parent `bypassPermissions` cannot be overridden: ensures organizational policies hold
- Implication: Always run subagents in "safe" context if they inherit bypassPermissions

### Background Subagent Failures

- Soft failures: Permission denied / clarifying question → tool fails but subagent continues
- Design pattern: Use for tasks that can tolerate individual tool failures; resume in foreground if needed

### Path Resolution Context Sensitivity

- `/src/**` resolves relative to settings file, not filesystem root
- Non-obvious: `/Users/alice/file` is relative to settings, not absolute
- **Must use `//Users/alice/file`** for absolute paths
- Implication: Settings file location affects path interpretation; document this in team policies

### Bash Shell Operator Awareness

- Claude Code understands shell operators (`&&`, `||`, etc.)
- Pattern `safe-cmd:*` will NOT grant permission to `safe-cmd && other-cmd`
- Implication: Overly permissive patterns are harder to accidentally construct; still verify carefully

### Context Compaction in Subagents

- Automatic summarization of older messages when approaching limit
- Non-obvious: May lose granular context; subagent continues but with summarized history
- Design pattern: For long-running subagents, periodically ask for summary to maintain clarity

### Delegation Heuristics

- Claude may or may not delegate based on perceived task fit
- Can force explicit delegation to guarantee subagent use
- Implication: For predictable behavior, be explicit about which subagent to use

---

## Security Implications Affecting Implementation

### Managed Settings Precedence

- Cannot be overridden by user or project settings
- **Use case**: Enforce organization policies that teams cannot bypass
- **Implication**: Deploy managed-settings.json to system directories for centralized control

### Tool Permission Granularity

- Subagents inherit parent permissions with additional restrictions
- **Implication**: Main conversation is highest-privilege context; be selective about what tasks run there

### apiKeyHelper TTL Management

- Default 5-minute refresh interval; can be customized
- **Implication**: Shorter TTL = more secure but more overhead; tune based on security posture

### Background Task Auto-Deny

- Background subagents auto-deny permissions not pre-approved
- **Implication**: Design background workflows to stay within pre-approved tool set; failures are soft

### Hook-Based Permission Validation

- PreToolUse hooks run before permission system; output determines approval
- **Use case**: Custom permission logic beyond simple pattern matching
- **Implication**: Hooks provide escape hatch for complex security policies

---

## Implementation Checklist

- [ ] Understand Bash patterns are convenience, not security; use hooks or domain filtering for strict rules
- [ ] Remember path resolution: `/path` is relative to settings file, use `//path` for absolute
- [ ] Recognize permission mode inheritance: child can override except parent `bypassPermissions`
- [ ] Design subagents with focused intent + detailed descriptions for reliable delegation
- [ ] Use allowlist for security, denylist for convenience in tool access
- [ ] Plan for context limits: auto-compaction summarizes old messages; manage long-running subagents
- [ ] Deploy managed-settings.json for team-wide policies (organization control layer)
- [ ] Use foreground for iterative work, background for isolated high-volume tasks
- [ ] Document path resolution and permission model in team CLAUDE.md
- [ ] Implement hooks for complex permission logic beyond simple pattern matching
