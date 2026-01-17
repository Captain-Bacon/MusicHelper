# Claude Code API & Subagents Technical Reference

## Permission System

### Tiered Permission Model
- **Read-only**: No approval required (File reads, Grep, Glob)
- **Bash Commands**: Requires approval; permanently stored per project directory + command
- **File Modification**: Requires approval; persists until session end

### Permission Modes
| Mode | Behavior |
|------|----------|
| `default` | Prompts on first use of each tool |
| `acceptEdits` | Auto-accepts file edits for session |
| `plan` | Read-only exploration; no file or command execution |
| `dontAsk` | Auto-denies unless pre-approved via rules |
| `bypassPermissions` | Skips all permission checks (requires safe environment) |

**Critical**: If parent uses `bypassPermissions`, it takes absolute precedence and cannot be overridden by subagent settings.

### Permission Rule Format
Rules use pattern: `Tool` or `Tool(optional-specifier)`

#### Bash Permission Patterns
- `Bash(npm run build)` - Exact match
- `Bash(npm run test:*)` - Prefix match (`:*` only works at end)
- `Bash(npm *)` - Wildcard at end (any sequence)
- `Bash(* install)` - Wildcard at start/middle

**Pattern Limitations & Bypasses**:
- Options before URL: `curl -X GET http://github.com/...` bypasses `curl http://github.com/:*`
- Protocol changes: `curl https://github.com/...` bypasses http-only rules
- Redirects: `curl -L http://bit.ly/xyz` can redirect elsewhere
- Variables: `URL=http://github.com && curl $URL` bypasses literal matching
- Extra spaces: String matching fails with spacing variations
- Operator chaining: `safe-cmd && other-cmd` bypasses prefix rules on `safe-cmd:*`

**Mitigation**: Use `WebFetch(domain:github.com)` for URL filtering, or document allowed patterns via CLAUDE.md.

#### Read & Edit Patterns (gitignore spec)
| Pattern | Scope | Example | Matches |
|---------|-------|---------|---------|
| `//path` | Absolute filesystem root | `Read(//Users/alice/secrets/**)` | `/Users/alice/secrets/**` |
| `~/path` | Home directory | `Read(~/.zshrc)` | `/Users/alice/.zshrc` |
| `/path` | Relative to settings file | `Edit(/src/**/*.ts)` | `<settings-dir>/src/**/*.ts` |
| `path` or `./path` | Relative to current directory | `Read(src/**)` | `<cwd>/src/**` |

**Critical Distinction**: `/Users/alice/file` is NOT an absolute path—use `//Users/alice/file` for filesystem root.

#### Tool-Specific Rules
- **WebFetch**: `WebFetch(domain:example.com)`
- **MCP**: `mcp__puppeteer`, `mcp__puppeteer__*`, `mcp__puppeteer__puppeteer_navigate`
- **Subagents**: `Task(Explore)`, `Task(Plan)`, `Task(Verify)`

### Settings Precedence (highest → lowest)
1. Managed settings (`managed-settings.json`)
2. CLI arguments
3. Local project settings (`.claude/settings.local.json`)
4. Shared project settings (`.claude/settings.json`)
5. User settings (`~/.claude/settings.json`)

**Architectural Impact**: Managed settings cannot be overridden; organizational policies enforce at top level.

### Working Directories
- **Default access**: Directory where Claude launched
- **Extend at startup**: `--add-dir <path>` flag
- **Extend during session**: `/add-dir` command
- **Persistent**: `additionalDirectories` in settings files

Files in additional directories inherit same permission rules as original directory.

---

## Subagents Architecture

### Core Mechanics
Subagents are isolated AI assistants that:
- Run in separate context windows with custom system prompts
- Have independent permissions and tool access restrictions
- Preserve main conversation context by isolating exploration/implementation output
- Cannot spawn other subagents (only main conversation can delegate)
- Each invocation starts fresh; must be resumed to retain history

### Built-in Subagents
| Name | Model | Tools | Purpose |
|------|-------|-------|---------|
| **Explore** | Haiku (fast) | Read-only only | Codebase search & analysis |
| **Plan** | - | - | Planning (specific details not documented) |
| **General-purpose** | - | - | Default delegation target |

**Explore Behaviors**:
- Delegates when searching/understanding code without changes
- Keeps verbose output out of main context
- Accepts thoroughness hints: `quick`, `medium`, `very thorough`

### Subagent Definition Format
Markdown files with YAML frontmatter:
```yaml
---
name: code-reviewer              # Required: lowercase, hyphens
description: Reviews code        # Required: when to delegate
tools: Read, Grep, Glob          # Optional: allowlist (inherits all if omitted)
disallowedTools: Write, Edit     # Optional: denylist (removes from inherited)
model: sonnet|opus|haiku|inherit # Optional: defaults to sonnet
permissionMode: default|acceptEdits|dontAsk|bypassPermissions|plan
skills: [skill-name]             # Optional: full skill content injected
hooks:                           # Optional: lifecycle hooks
  PreToolUse:
    - matcher: "Bash"
      hooks:
        - type: command
          command: "./validate.sh"
---

System prompt in Markdown...
```

**Frontmatter Fields**:
- `name`: Unique identifier (required)
- `description`: When Claude delegates; include "use proactively" for automatic invocation
- `tools`: Allowlist (inherits all if omitted)
- `disallowedTools`: Denylist (subtracted from inherited)
- `model`: Alias or `inherit`; defaults to `sonnet`
- `permissionMode`: Overrides parent (if parent uses `bypassPermissions`, cannot be overridden)
- `skills`: Full content injected at startup (subagents don't inherit parent skills)
- `hooks`: PreToolUse, PostToolUse, Stop events

**Context Injection**: Subagents receive only their system prompt + basic env details (working directory), NOT the full Claude Code system prompt.

### Scope & Precedence
| Location | Scope | Priority | Creation |
|----------|-------|----------|----------|
| `--agents` CLI flag | Session only | 1 (highest) | JSON at launch |
| `.claude/agents/` | Project | 2 | Interactive or manual |
| `~/.claude/agents/` | User (all projects) | 3 | Interactive or manual |
| Plugin `agents/` | Where plugin enabled | 4 (lowest) | Installed plugin |

**Distribution**: Project-level subagents in version control for team collaboration.

### Tool Inheritance & Restrictions
- **Default**: Subagents inherit all tools from main conversation (including MCP)
- **Allowlist (`tools` field)**: Only specified tools available; ignores inherited
- **Denylist (`disallowedTools` field)**: Removes specific tools from inherited/specified set
- **Both present**: `tools` defines allowlist, `disallowedTools` further restricts

### Permission Mode Behavior
Subagents have independent permission contexts but inherit parent restrictions:

| Mode | Subagent Behavior |
|------|-------------------|
| `default` | Standard permission checking |
| `acceptEdits` | Auto-accept file edits |
| `dontAsk` | Auto-deny (pre-approved rules still work) |
| `bypassPermissions` | Skip all checks (if parent uses this, cannot be overridden) |
| `plan` | Read-only only |

### Hook Integration
Two scopes:
1. **Subagent frontmatter**: Hooks run only while subagent active; cleaned up on finish
   - PreToolUse: Before tool execution
   - PostToolUse: After tool execution
   - Stop: When subagent finishes
2. **Settings.json**: Respond to subagent lifecycle in main session
   - SubagentStart: When subagent begins
   - SubagentStop: When subagent completes

**Hook Input (JSON via stdin)**:
```json
{
  "tool_input": {
    "command": "the actual command or input"
  }
}
```

**Exit Codes**:
- `0`: Allow operation
- `2`: Block operation (stderr message returned to Claude)

### Delegation Logic
Claude decides to delegate based on:
- Task description in your request
- Subagent's `description` field
- Current conversation context
- Proactive hints ("use immediately after writing code")

**Explicit delegation** always works:
```
Use the code-reviewer subagent to analyze authentication.js
```

### Execution Modes

#### Foreground (Blocking)
- Blocks main conversation until complete
- Permission prompts and clarifying questions pass through to user
- Subagent can ask for input

#### Background (Concurrent)
- Runs while main conversation continues
- Inherits parent permissions; auto-denies unpre-approved tools
- MCP tools not available in background
- If permission/clarification needed: tool call fails but continues

**Configuration**: Set `CLAUDE_CODE_DISABLE_BACKGROUND_TASKS=1` to disable background functionality.

### Context Management

#### Resumption
- Each invocation starts fresh; ask Claude to resume for continuity
- Resumed subagents retain full conversation history (tool calls, results, reasoning)
- Picks up exactly where stopped (not fresh start)

**Finding Agent ID**: Stored in `~/.claude/projects/{project}/{sessionId}/subagents/agent-{agentId}.jsonl`

#### Auto-Compaction
- Subagents support automatic compaction like main conversation
- Summarizes older messages when context approaches limit
- Compaction events logged in transcripts:
```json
{
  "type": "system",
  "subtype": "compact_boundary",
  "compactMetadata": {
    "trigger": "auto",
    "preTokens": 167189
  }
}
```

#### Transcript Persistence
- Main conversation compaction doesn't affect subagent transcripts (separate files)
- Subagent transcripts persist within session; can resume after restart
- Auto-cleanup based on `cleanupPeriodDays` setting (default: 30 days)

### Disabling Subagents
```json
{
  "permissions": {
    "deny": ["Task(Explore)", "Task(my-custom-agent)"]
  }
}
```

Or CLI: `claude --disallowedTools "Task(Explore)"`

---

## Critical Edge Cases & Non-Obvious Behaviors

### Permission System
1. **Bash pattern gotchas**: String matching is literal; options, redirects, and variables bypass rules
2. **Path confusion**: `/path` is relative to settings file, not filesystem root; use `//path` for absolute
3. **Both tools AND disallowedTools**: If both specified, allowlist takes precedence, then denylist removes
4. **bypassPermissions override**: If parent uses it, subagent cannot override to stricter mode
5. **Read rules on built-ins**: Applied "best-effort" to Grep, Glob; Edit rules apply to all edit tools

### Subagent Context
1. **System prompt isolation**: Subagents receive ONLY their custom prompt + env details; NOT full Claude Code system
2. **No nested subagents**: Subagents cannot spawn other subagents; must chain from main or use Skills
3. **Skills not inherited**: Parent skills not available in subagents; must explicitly inject via `skills` field
4. **Background tool failure != task failure**: If background subagent lacks permission, that tool call fails silently; other tools continue
5. **MCP unavailable in background**: Background subagents cannot use MCP tools

### Delegation & Automation
1. **Description matters**: Claude matches task requests against subagent descriptions; vague descriptions rarely trigger auto-delegation
2. **Fresh context each invocation**: Each new delegation starts blank; must resume to retain history
3. **Results return to main**: All subagent output returns to main conversation (can be verbose; consider isolation benefit)

---

## Implementation Patterns

### When to Use Subagents vs Main Conversation
**Use Subagents for**:
- Verbose output isolation (tests, logs, documentation)
- Tool restriction enforcement
- Parallel independent research
- Specialized domain work with custom prompts

**Use Main Conversation for**:
- Frequent iteration/back-and-forth
- Multi-phase workflows sharing deep context
- Quick targeted changes
- When latency is critical

### Security Considerations
- **Pattern matching limitations**: Bash rules easily bypassed; use domain-based rules (WebFetch) where possible
- **Read rule best-effort**: Not guaranteed on all read tools; explicit deny list more reliable
- **Hook validation**: Use PreToolUse hooks for dynamic validation of specific operations (e.g., read-only SQL)
- **Managed settings enforcement**: Use for org-wide policies; cannot be overridden by users

### Common Workflow Patterns
1. **High-volume isolation**: Run tests/docs in subagent, return summary only
2. **Parallel research**: Multiple subagents explore independent areas simultaneously
3. **Sequential chains**: Main conversation coordinates subagents in sequence (each passes results to next)
4. **Conditional validation**: Use PreToolUse hooks with exit code 2 to allow some operations while blocking others
