---
name: Context7 Docs
description: Accurate, up-to-date documentation and code examples from Context7 MCP.
---

# Context7 Documentation Skill

Use this skill to fetch authoritative documentation and examples for libraries, frameworks, and APIs.

**Core Rule**: DO NOT HALLUCINATE SYNTAX. If you are unsure, QUERY THE DOCS.

## ⚠️ CRITICAL OPERATIONAL RULE

**DO NOT run any of the following commands unless the user EXPLICITLY requests them:**

- `npm run build` or any build commands
- `npm run dev` or any development servers
- `npm run lint` or any lint servers
- Any other build/development/lint processes

**Why**: These commands should only be executed when the user specifically asks for verification, deployment preparation, or testing. Auto-running them wastes resources and disrupts the workflow.

## Communication Protocol (CRITICAL)

1.  **Plan**: "I will check the documentation for [Library] to see how to do [Task]." **Then immediately execute.**
2.  **Execute** (without waiting for approval): Manage library resolution and queries internally.
3.  **Report**:
    - **Learned**: "I found the correct way to do it." (Summarize briefly)
    - **Action**: "I will now implement this pattern."

**IMPORTANT**: Do NOT ask for user approval before executing. Present the plan and proceed immediately.

## 1. Documentation Lookup

**Trigger**: "How do I use...", "Syntax for...", "Explain this library".
**Workflow**:

1.  **Resolve Library**:
    ```json
    {
      "tool": "mcp_context7_resolve-library-id",
      "args": { "query": "shadcn ui", "libraryName": "shadcn/ui" }
    }
    ```
2.  **Query**:
    ```json
    {
      "tool": "mcp_context7_query-docs",
      "args": {
        "libraryId": "<RESOLVED_ID>",
        "query": "how to use Form component with Zod"
      }
    }
    ```
3.  **Report**: "Found documentation for Form components."

## 2. Best Practices Check

**Trigger**: Integrating a new feature or refactoring.
**Example**:

- "What is the best way to handle auth in Next.js 14?"
- Use `resolve-library-id` ("next.js") -> `query-docs` ("authentication patterns app router").
