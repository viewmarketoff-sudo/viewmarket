---
name: Perplexity Research
description: Intelligent problem solving, architectural advice, and error debugging using Perplexity MCP.
---

# Perplexity Research Skill

Use this skill to solve complex problems, research technologies, and find architectural best practices.

## ⚠️ CRITICAL OPERATIONAL RULE

**DO NOT run any of the following commands unless the user EXPLICITLY requests them:**

- `npm run build` or any build commands
- `npm run dev` or any development servers
- `npm run lint` or any lint servers
- Any other build/development/lint processes

**Why**: These commands should only be executed when the user specifically asks for verification, deployment preparation, or testing. Auto-running them wastes resources and disrupts the workflow.

## Communication Protocol (CRITICAL)

1.  **Plan**: "I will research how to [Problem] and find the best solution." **Then immediately execute.**
2.  **Execute** (without waiting for approval): Perform search and reasoning autonomously.
3.  **Report**:
    - **The Answer**: (Simple summary) "The best way is to use [Library X]."
    - **Why**: "It is faster and easier to use." (Avoid technical deep dives unless asked)

**IMPORTANT**: Do NOT ask for user approval before executing. Present the plan and proceed immediately.

## 1. Error Investigation

**Trigger**: "Fix this error", "Why is this crashing?".
**Workflow**:

1.  **Analyze**: Copy the error message.
2.  **Search**:
    ```json
    {
      "tool": "mcp_perplexity_perplexity_search",
      "args": { "query": "Next.js 14 error: Hydration failed because..." }
    }
    ```
3.  **Synthesize**: Combine search results with codebase context.

## 2. Technology Selection & Comparison

**Trigger**: "What is the best library for...", "Should I use X or Y?".
**Workflow**:

1.  **Reason**:
    ```json
    {
      "tool": "mcp_perplexity_perplexity_reason",
      "args": {
        "messages": [
          {
            "role": "user",
            "content": "Compare Recharts vs Visx for high performance dashboards"
          }
        ]
      }
    }
    ```

## 3. Real-time Information

**Trigger**: "Is there a new version of...", "Check for latest docs".
**Workflow**:

1.  **Search**:
    ```json
    {
      "tool": "mcp_perplexity_perplexity_search",
      "args": {
        "query": "latest supabase javascript client breaking changes v2"
      }
    }
    ```
