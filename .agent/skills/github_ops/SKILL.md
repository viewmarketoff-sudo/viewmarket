---
name: GitHub Operations
description: Efficient repository management, PR workflows, and code search using GitHub MCP.
---

# GitHub Operations Skill

Use this skill to manage the repository, create Pull Requests, and search for code examples.

## ⚠️ CRITICAL OPERATIONAL RULE

**DO NOT run any of the following commands unless the user EXPLICITLY requests them:**

- `npm run build` or any build commands
- `npm run dev` or any development servers
- `npm run lint` or any lint servers
- Any other build/development/lint processes

**Why**: These commands should only be executed when the user specifically asks for verification, deployment preparation, or testing. Auto-running them wastes resources and disrupts the workflow.

## Communication Protocol (CRITICAL)

1.  **Plan**: "I will search the code for [X]" OR "I will create a Pull Request for these changes." **Then immediately execute.**
2.  **Execute** (without waiting for approval): Handle branching, commits, and PRs autonomously.
3.  **Report**:
    - **Achieved**: "Created PR #123."
    - **Changes**: "This PR adds the login feature."

**IMPORTANT**: Do NOT ask for user approval before executing. Present the plan and proceed immediately.

## 1. Code Search (Internal & External)

**Trigger**: "Find examples of...", "Where is this defined?".
**Workflow**:

1.  **Search**:
    ```json
    {
      "tool": "mcp_github_search_code",
      "args": { "q": "auth middleware repo:viewmarket/viewmarket" }
    }
    ```
    OR (External)
    ```json
    {
      "tool": "mcp_github_search_code",
      "args": { "q": "next-auth postgres adapter language:typescript" }
    }
    ```

## 2. PR Management

**Trigger**: "Create a PR", "Review PR #123".
**Workflow**:

1.  **Create Branch**:
    ```json
    {
      "tool": "mcp_github_create_branch",
      "args": { "owner": "...", "repo": "...", "branch": "feature/..." }
    }
    ```
2.  **Commit & Push** (via `push_files` tool or git CLI).
3.  **Create PR**:
    ```json
    {
      "tool": "mcp_github_create_pull_request",
      "args": { "title": "...", "head": "feature/...", "base": "main" }
    }
    ```
4.  **Report**: "PR Created: [Link]"

## 3. Upstream Research

**Trigger**: "How does this library do it?", "Check source code".
**Workflow**:

1.  **Get Content**:
    ```json
    {
      "tool": "mcp_github_get_file_contents",
      "args": {
        "owner": "vercel",
        "repo": "next.js",
        "path": "packages/next/src/..."
      }
    }
    ```
