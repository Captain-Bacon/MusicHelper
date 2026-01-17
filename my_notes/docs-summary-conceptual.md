# Claude Code System Mechanics & Constraints

## IAM and Permissions

### Permission Precedence (Highest to Lowest)

1. Managed settings (`managed-settings.json`)
2. Command line arguments
3. Local project settings (`.claude/settings.local.json`)
4. Shared project settings (`.claude/settings.json`)
5. User settings (`~/.claude/settings.json`)

### Bash Permission Patterns - Limitations

**Bypassable patterns:**

- `Bash(curl http://github.com/:*)` can be bypassed by: options before URL, different protocol, redirects via shortened URLs, shell variables, extra spaces
- `:*` wildcard only works at end of pattern for prefix matching
- `*` wildcard can appear anywhere but still bypassed by wrapper techniques

**Reliable URL filtering:** Use `WebFetch(domain:github.com)` instead of Bash patterns for URL control

### Read/Edit Pattern Matching Pitfall

- `/path` is relative to settings file location, NOT filesystem root
- `//path` is required for absolute filesystem paths
- Examples:
  - `Edit(/docs/**)` matches `<project>/docs/`, not `/docs/`
  - `Read(//tmp/file)` matches absolute path `/tmp/file`
  - Pattern like `/Users/alice/file` is NOT absolute—use `//Users/alice/file`

### Permission Modes

- `default` - Standard prompting
- `acceptEdits` - Auto-accept file edits for session
- `plan` - Read-only exploration (Plan Mode)
- `dontAsk` - Auto-denies unless pre-approved
- `bypassPermissions` - Skips all checks (requires safe environment)

**Critical:** If parent uses `bypassPermissions`, this takes precedence and cannot be overridden by subagent

### Tool-Specific Pattern Syntax

- `WebFetch(domain:example.com)` - Domain-based fetching
- `mcp__puppeteer` - Any tool from server
- `mcp__puppeteer__*` - Wildcard for all server tools
- `mcp__puppeteer__tool_name` - Specific tool from server
- `Task(AgentName)` - Control subagent access (add to deny array to block)

### Credential Storage

- macOS: Encrypted Keychain
- Refresh interval: Default 5 minutes or on HTTP 401
- Set `CLAUDE_CODE_API_KEY_HELPER_TTL_MS` environment variable for custom refresh

## Subagents

### Built-in Subagents

- **Explore**: Haiku model, read-only tools only (denied Write/Edit), quick/medium/very thorough modes
- **Plan**: Plan mode subagent
- **General-purpose**: Default subagent for unspecified tasks

### Subagent Scope & Priority

1. `--agents` CLI flag (session only)
2. `.claude/agents/` (project - check into version control for team use)
3. `~/.claude/agents/` (user - all projects)
4. Plugin's `agents/` directory (lowest priority)

**When duplicates exist in different locations, higher priority wins**

### Subagent Configuration Constraints

- Only `name` and `description` fields are required
- Subagents cannot spawn other subagents (use Skills or chain from main conversation instead)
- Subagents receive only their system prompt + basic environment (working directory), NOT full Claude Code system prompt
- If `disallowedTools` conflicts with `tools`, disallowed takes precedence

### Subagent Model Defaults

- Field value `inherit` uses main conversation's model
- Omitted field defaults to `sonnet`
- Aliases supported: `sonnet`, `opus`, `haiku`

### Foreground vs Background Execution

- **Foreground**: Blocks main conversation, permission prompts pass through
- **Background**: Concurrent, auto-denies unpre-approved permissions, MCP tools unavailable
- If background subagent fails due to missing permissions, resume in foreground to retry
- Disable all background tasks: Set `CLAUDE_CODE_DISABLE_BACKGROUND_TASKS=1` environment variable

### Subagent Tool Inheritance Behavior

- If `tools` field is omitted, subagent inherits ALL tools from main conversation (including MCP)
- `tools` field acts as allowlist
- `disallowedTools` field acts as denylist, removes from inherited list
- Both can be specified together

### Hook Scoping

- **Subagent frontmatter hooks**: Run only while that subagent is active, cleaned up when finished
- **Settings.json hooks**: Run in main session when subagents start/stop
- `Stop` hooks in frontmatter automatically convert to `SubagentStop` events
- Hook events:
  - `PreToolUse` / `PostToolUse` - Before/after tool execution
  - `SubagentStart` / `SubagentStop` - Subagent lifecycle
  - `Stop` - When subagent finishes

### Subagent Context Persistence

- Each subagent invocation creates fresh instance with new context
- Resumed subagents retain full conversation history (all tool calls, results, reasoning)
- Transcripts stored separately: `~/.claude/projects/{project}/{sessionId}/subagents/agent-{agentId}.jsonl`
- Main conversation compaction does NOT affect subagent transcripts
- Subagent transcripts cleaned up based on `cleanupPeriodDays` setting (default: 30 days)

### Automatic Delegation Logic

- Claude decides when to delegate based on:
  - Task description in request
  - `description` field in subagent config
  - Current context
- To encourage proactive delegation, include "use proactively" in description
- Explicit requests override automatic logic: "Use the test-runner subagent to..."

### Permission Mode Interaction with Subagents

- Subagents inherit permission context from main conversation
- Can override with own `permissionMode` field
- Exception: If parent uses `bypassPermissions`, this ALWAYS takes precedence

### Disable Specific Subagents

- Use `permissions.deny` array with format `Task(subagent-name)`
- Also supports CLI flag: `--disallowedTools "Task(Explore)"`

## State Management & Context

### Subagent Compaction

- Auto-triggered when context approaches limit
- Uses same logic as main conversation
- Compaction events logged in transcript: `"type": "system", "subtype": "compact_boundary"`
- `preTokens` field shows token count before compaction

### MCP Tool Availability

- Available in foreground subagents
- NOT available in background subagents
- Must be explicitly allowed in `tools` field or via inheritance

## Common Implementation Patterns

### When Main Conversation Is Better

- Task needs frequent back-and-forth or iterative refinement
- Multiple phases share significant context
- Making quick, targeted changes
- Latency matters (subagents start fresh)

### When Subagents Are Better

- Task produces verbose output not needed in main context
- Need specific tool restrictions or permission enforcement
- Work is self-contained with summarizable results
- Want to preserve main conversation context
- Need parallel investigation (multiple subagents simultaneously)

### Workflow Chains

- Subagents can't spawn other subagents
- Chain multiple subagents from main conversation: main → subagent A → results → subagent B
- Use Skills for nested reusable workflows in main conversation

### Parallel Subagents

- Multiple subagents can run simultaneously
- Effective for independent investigations (auth, database, API modules)
- All results return to main conversation
- Risk: Many detailed results consume significant context
