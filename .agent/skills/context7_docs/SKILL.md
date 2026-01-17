---
name: Context7 Docs
description: Accurate, up-to-date documentation and code examples from Context7 MCP.
---

# Context7 Documentation Skill

Use this skill to fetch authoritative documentation and examples for libraries, frameworks, and APIs.

**Core Rule**: DO NOT HALLUCINATE SYNTAX. If you are unsure, QUERY THE DOCS.

## Communication Protocol (CRITICAL)

1.  **Plan**: "I will check the documentation for [Library] to see how to do [Task]."
2.  **Execute**: Manage library resolution and queries internally.
3.  **Report**:
    - **Learned**: "I found the correct way to do it." (Summarize briefly)
    - **Action**: "I will now implement this pattern."

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
