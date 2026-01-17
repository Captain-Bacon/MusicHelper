# Claude Code: IAM & Subagents — Mechanics & Constraints

## Recipe Analogy: What Changes Implementation

**Technique that matters**: Include the mechanics that alter behavior.
**Explanatory scaffolding**: Exclude why it works; focus on the constraint that fails if ignored.

---

## IAM: Tool-Specific Permission Rules

### Bash Permission Patterns: Silent Bypasses (Critical)

**The constraint that changes outcomes:**

- Prefix matching with `:*` **only works at pattern end**. `Bash(npm run test:*)` works; `Bash(test:* anything)` does not.
- `*` wildcard can appear anywhere but matches **any sequence** — beware false positives.

**How pattern matching fails** (patterns that look safe but aren't):

```
Bash(curl http://github.com/:*)      # Can bypass via:
  → curl -X GET http://github.com/...   (options before URL)
  → curl https://github.com/...         (different protocol)
  → curl -L http://bit.ly/xyz           (HTTP redirects)
  → URL=http://github.com && curl $URL  (variable substitution)
  → curl http://github.com              (extra spaces)
```

**Result**: URL-based Bash rules are fragile. Use `WebFetch(domain:github.com)` instead or document safe patterns in CLAUDE.md.

**Shell operator awareness**: `safe-cmd &&` other-cmd won't match `Bash(safe-cmd:*)` — Claude understands operators, but this is an exception, not the rule.

### File Permission Path Syntax: Gotchas

**The paths that look right but aren't:**

| Pattern | Resolved To | Use Case |
|---------|-------------|----------|
| `//path` | Absolute filesystem root | Hardcoded system paths |
| `~/path` | User home directory | Credentials, shell configs |
| `/path` | **Relative to settings file**, NOT project root | Project-local src/ |
| `path` or `./path` | Relative to current directory | Same as `/path` in most cases |

**Gotcha**: `/docs/**` in settings ≠ `/docs/` at filesystem root. It means `<settings-file-dir>/docs/**`.

### Permission Hierarchy (Tight Precedence)

Highest → Lowest:
1. **Managed settings** (organizational policy, cannot override)
2. CLI arguments
3. `.claude/settings.local.json` (project-specific)
4. `.claude/settings.json` (shared project)
5. `~/.claude/settings.json` (user)

**Result**: Org policy > everything else. Local user settings won't override `.claude/settings.local.json`.

### Read & Edit Rule Semantics

- **Read rules**: Applied with "best-effort" to all file-reading tools (Grep, Glob, etc.), not strictly enforced.
- **Edit rules**: Strictly enforced on Edit/Write tools.
- Both follow **gitignore specification** with four distinct pattern types.

### Permission Modes: Behavioral State Machine

| Mode | Behavior | File Edits | Bash | Permission Prompts |
|------|----------|-----------|------|-------------------|
| `default` | Standard | Prompt per session | Prompt per session | Yes |
| `acceptEdits` | Auto-approve edits | Auto-approve | Prompt per session | Yes for other tools |
| `plan` | Read-only exploration | Denied | Denied | No (plan mode) |
| `dontAsk` | Auto-deny unpre-approved | Denied | Denied if not pre-approved | No |
| `bypassPermissions` | Skip all checks | No prompts | No prompts | **No — full bypass** |

**Constraint**: If parent uses `bypassPermissions`, subagents inherit it and cannot override.

### Tool-Specific Permission Syntax

**Format**: `Tool(optional-specifier)`

Supported:
- `Bash(npm run build)` — exact command match
- `Bash(npm *)` — prefix match
- `Bash(* install)` — suffix match
- `WebFetch(domain:example.com)` — domain filter
- `mcp__server-name` or `mcp__server-name__tool-name` — MCP tools
- `Task(AgentName)` — subagent control

---

## Subagents: Context, Delegation, and Edge Cases

### Automatic Delegation: How Claude Decides

**Claude delegates when:**
1. Subagent `description` field matches task semantics
2. Task description or explicit request ("Use X subagent")
3. Include "proactively" in description to encourage automatic use

**The gotcha**: Delegation decision is semantic, not rule-based. Vague descriptions cause unpredictable behavior.

### Subagent Scope & Priority (Conflict Resolution)

**When multiple subagents share the same name**, highest priority wins:

1. `--agents` CLI flag (session-only, highest)
2. `.claude/agents/` (project, version-controllable)
3. `~/.claude/agents/` (user, all projects)
4. Plugin's `agents/` directory (lowest)

**Result**: Project subagents override user subagents; CLI flag overrides both.

### Frontmatter Configuration: Required vs. Optional

**Required fields**:
- `name` (lowercase letters and hyphens)
- `description` (when Claude should use this)

**Optional fields** (affect behavior if omitted):
- `tools` — omitted = inherits all tools from parent
- `disallowedTools` — applied after `tools` (can further restrict)
- `model` — omitted = defaults to `sonnet` (unless configured otherwise)
- `permissionMode` — omitted = inherits parent
- `skills` — full content injected at startup (subagents don't inherit parent skills)
- `hooks` — lifecycle hooks for this subagent only

**Key constraint**: Subagents receive only their own system prompt, NOT the full Claude Code system prompt.

### Execution Modes: Foreground vs. Background

**Foreground** (blocking):
- Permission prompts passed through to user
- Supports interactive clarification (e.g., `AskUserQuestion`)
- Slower, but fully capable

**Background** (concurrent):
- Auto-denies unpre-approved permissions
- MCP tools **not available** in background
- Tool failures don't stop subagent (soft failures)
- Cannot ask clarifying questions

**Result**: Background subagents fail silently on permission issues; foreground ones ask.

**Can resume**: Failed background subagent can be resumed in foreground with `"Continue that work"`.

### Tool Access Inheritance & Restriction

**Default behavior**: Subagents inherit all tools from parent (including MCP tools).

**Allowlist semantics** (`tools` field):
- Specify only tools you want
- All others denied (even if parent has them)
- Example: `tools: Read, Grep, Glob, Bash` denies Write/Edit

**Denylist semantics** (`disallowedTools` field):
- Removes from either inherited set or explicit `tools` list
- Applied after `tools` field
- Example: `tools: Bash` + `disallowedTools: Bash` = no Bash access

**Precedence**: Explicit `tools` field > inherit all > `disallowedTools` filtering

### Model Selection & Defaults

- **Aliases**: `sonnet`, `opus`, `haiku`, or `inherit`
- **Omitted**: Defaults to `sonnet` (not inherited from parent)
- **inherit**: Forces same model as main conversation
- **Subagent context size**: Each starts fresh (no shared token limit with parent)

### Permission Modes in Subagents

**Key constraint**: If parent uses `bypassPermissions`, subagent cannot override it (parent takes precedence).

**Subagent-level override**: Subagent's `permissionMode` overrides parent mode **except** when parent is `bypassPermissions`.

### Hooks: Scoped Lifecycle Events

**In subagent frontmatter** (run only while that subagent active):
- `PreToolUse` (before tool execution)
- `PostToolUse` (after tool execution)
- `Stop` (when subagent finishes, auto-converted to `SubagentStop`)

**In project `settings.json`** (run in main session):
- `SubagentStart` (when any subagent begins)
- `SubagentStop` (when any subagent ends)

**Hook matcher syntax**: `PreToolUse` hooks use tool name (e.g., `Bash`, `Edit|Write`). `SubagentStart`/`SubagentStop` use agent name.

**Exit codes for `PreToolUse` hooks**:
- `0` = approve
- `2` = block (deny tool call, pass error to Claude via stderr)
- Other = approval (non-zero treated as success except `2`)

### Context Persistence & Compaction

**Within session**:
- Subagent transcripts stored separately in `~/.claude/projects/{project}/{sessionId}/subagents/agent-{agentId}.jsonl`
- Full conversation history preserved when resumed
- Main conversation compaction doesn't affect subagent transcripts

**Cross-session**:
- Subagent transcripts persist; can resume same subagent from previous session
- Default cleanup: 30 days (`cleanupPeriodDays` setting)

**Auto-compaction**: When subagent context approaches limit, older messages are summarized. Compaction events logged with `compactMetadata.preTokens`.

**Key constraint**: Subagents cannot spawn other subagents. Chain them from main conversation if multi-level delegation needed.

### Disabling Specific Subagents

**In settings**:
```json
{
  "permissions": {
    "deny": ["Task(Explore)", "Task(custom-agent)"]
  }
}
```

**Via CLI**:
```bash
claude --disallowedTools "Task(Explore)"
```

**Result**: Prevents automatic delegation to named subagents.

---

## Skills vs. Subagents: When to Use Each

| Feature | Skill | Subagent |
|---------|-------|----------|
| Runs in | Main conversation context | Isolated context |
| Preserves context | Yes (adds to main) | No (fresh start) |
| Tool restrictions | No | Yes |
| Permission override | No | Yes |
| Reusable across projects | Yes (if user-level) | Yes (if user-level) |
| Model choice | Main model only | Can override |
| Output volume | Stays in main context | Isolated, summary returns |

**Use Subagents when**: High-volume output, tool restrictions needed, or cost optimization (e.g., Haiku for exploration).
**Use Skills when**: Reusable prompts/workflows that should enrich main conversation, not isolate it.

---

## Built-in Subagents: Behavior & Restrictions

### Explore (Read-only Research)

- **Model**: Haiku (fast, low-latency)
- **Tools**: Read-only only (Denied: Write, Edit)
- **Thoroughness levels**: `quick`, `medium`, `very thorough`
- **Use case**: Codebase discovery without context pollution in main conversation

### Plan (Read-only Analysis)

- **Mode**: `plan` (analysis without execution)
- **Execution**: Cannot run Bash, cannot modify files

### General-purpose

- Inherits parent conversation's tools
- Uses default `sonnet` model unless overridden

---

## Hooks: Real-World Constraints

### PreToolUse Hook Input Schema

Claude Code passes JSON via stdin:

```json
{
  "tool_input": {
    "command": "npm install lodash",
    ...
  },
  ...
}
```

**Extract with**: `jq -r '.tool_input.command // empty'`

### Validation Script Exit Codes

- `0` = approve tool call
- `2` = block tool call (error message via stderr)
- Non-2 non-zero = approval (don't rely on this)

### Real Example: Read-Only SQL Validator

```bash
#!/bin/bash
INPUT=$(cat)
COMMAND=$(echo "$INPUT" | jq -r '.tool_input.command // empty')

# Block write operations
if echo "$COMMAND" | grep -iE '\b(INSERT|UPDATE|DELETE|DROP|CREATE|ALTER|TRUNCATE)\b' > /dev/null; then
  echo "Blocked: Write operations not allowed" >&2
  exit 2
fi
exit 0
```

**Key**: Exit with `2` and stderr message to block. Exit `0` for approval.

---

## CLI-Defined Subagents (Session-Only)

```bash
claude --agents '{
  "code-reviewer": {
    "description": "Review code...",
    "prompt": "You are...",
    "tools": ["Read", "Grep", "Glob"],
    "model": "sonnet"
  }
}'
```

**Result**: Exists only for that session; highest priority if name conflicts.

---

## Environment Variables & Config

- `CLAUDE_CODE_DISABLE_BACKGROUND_TASKS=1` — disables background subagent execution
- `CLAUDE_CODE_API_KEY_HELPER_TTL_MS` — custom refresh interval for `apiKeyHelper` (default: 5min or HTTP 401)

---

## Credential Management (Storage & Retrieval)

**macOS**: Credentials stored in encrypted Keychain.

**Supported types**: Claude.ai, Claude API, Azure Auth, Bedrock Auth, Vertex Auth.

**Custom scripts**: `apiKeyHelper` setting can run shell script returning API key.

**Refresh**: Called every 5 minutes or on HTTP 401 (configurable via env var).

---

## Summary: Implementation-Altering Constraints

1. **Bash patterns are bypassable** — `/curl http://github.com:*/` fails easily. Use WebFetch domains.
2. **Relative path resolution is unintuitive** — `/docs/**` in settings ≠ filesystem `/docs/`. Prefix with `//` for absolute.
3. **Subagent hierarchy is strict** — Project > User > Plugin. CLI flag wins all.
4. **Tools inheritance is all-or-nothing** — Omit `tools` = inherit all. Specify `tools` = denylist everything else.
5. **Background subagents fail silently** — No MCP tools, auto-deny unpre-approved permissions.
6. **Hooks use exit code `2` to block** — Non-2 exit codes don't block; `2` blocks + stderr message.
7. **Subagents can't nest** — No chaining subagents within subagents. Use Skills or chain from main.
8. **Permission modes have precedence** — Parent `bypassPermissions` cannot be overridden by subagent.
