---
name: Supabase Operations
description: Standardized workflows for managing Supabase database, auth, and edge functions using MCP tools. Enforces "Action-First" protocol and migration-based schema changes.
---

# Supabase Operations Skill

This skill defines the canonical workflows for interacting with the View Market Supabase project.

## ⚠️ CRITICAL OPERATIONAL RULE

**DO NOT run any of the following commands unless the user EXPLICITLY requests them:**

- `npm run build` or any build commands
- `npm run dev` or any development servers
- `npm run lint` or any lint servers
- Any other build/development/lint processes

**Why**: These commands should only be executed when the user specifically asks for verification, deployment preparation, or testing. Auto-running them wastes resources and disrupts the workflow.

**Core Principle**: ZERO HESITATION for constructive actions.

- **AUTO-EXECUTE (Constructive)**: Creating tables, adding columns, defining policies, fixing schemas, or inserting data. **Do not ask for permission.** Just do it.
- **REQUIRE APPROVAL (Destructive)**: Dropping tables, dropping columns, or bulk data deletion. **Ask first.**

**Authentication Context**:

- **Provider**: NextAuth.js.
- **Supabase Role**: Data storage ONLY (specifically `profiles` table for user credentials/data).
- **Constraint**: Do NOT use Supabase Auth (GoTrue/`auth.users`) for application logic unless integrating with NextAuth Adapter. Focus on the `profiles` table.

## Communication Protocol (CRITICAL)

1.  **Plan**: Explain the _intent_ in simple English (e.g., "I will add a 'phone_number' field to user profiles"). **Then immediately execute (if constructive).**
2.  **Execute** (without waiting for approval for constructive actions): Handle all SQL and migrations autonomously.
3.  **Report**: explicitly state:
    - **Before**: "Users couldn't save phone numbers."
    - **After**: "Added `phone_number` column to `profiles`."
    - **Achieved**: "Users can now save contact details."

**IMPORTANT**: For CONSTRUCTIVE actions (creating tables, adding columns, etc.), do NOT ask for approval. Present the plan and execute immediately. For DESTRUCTIVE actions (dropping tables, deleting data), ask first.

## 1. Schema Management (Migrations)

**Trigger**: User asks to create tables, add columns, change policies, or fix schema errors.
**Rule**:

- **Constructive**: EXECUTE IMMEDIATELY. Use `apply_migration`.
- **Destructive**: Confirm with user, then use `apply_migration`.
- **Method**: NEVER use raw SQL (`execute_sql`) for DDL. ALWAYS use `apply_migration`.

**Workflow**:

1.  **Draft SQL**: Create the SQL statement (e.g., `CREATE TABLE...`, `create policy...`).
2.  **Name Migration**: Create a descriptive snake_case name (e.g., `add_products_table`, `fix_rls_profiles`).
3.  **Execute**:
    ```json
    {
      "tool": "mcp_supabase_apply_migration",
      "args": {
        "project_id": "<CURRENT_PROJECT_ID>",
        "name": "<migration_name>",
        "query": "<SQL_STATEMENT>"
      }
    }
    ```
4.  **Report**: "Migration `add_products_table` applied successfully."

## 2. Data & Ad-Hoc Operations

**Trigger**: User asks to query data, update specific rows, or check database state.
**Rule**: Use for data manipulation (DML) or read-only queries.

**Workflow**:

1.  **Execute**:
    ```json
    {
      "tool": "mcp_supabase_execute_sql",
      "args": {
        "project_id": "<CURRENT_PROJECT_ID>",
        "query": "SELECT * FROM public.products WHERE ..."
      }
    }
    ```

## 3. Debugging & Maintenance

**Trigger**: User reports an error ("500 error", "Database error") or general health check.

**Workflow**:

1.  **Check Advisors** (Security/Performance):
    ```json
    {
      "tool": "mcp_supabase_get_advisors",
      "args": { "project_id": "<CURRENT_PROJECT_ID>", "type": "security" }
    }
    ```
2.  **Check Logs** (Find the root cause):
    ```json
    {
      "tool": "mcp_supabase_get_logs",
      "args": { "project_id": "<CURRENT_PROJECT_ID>", "service": "postgres" }
    }
    ```

## 4. Edge Functions

**Trigger**: User asks to deploy or update a server-side function.

**Workflow**:

1.  **Verify Files**: Ensure `index.ts` and `deno.json` exist.
2.  **Deploy**:
    ```json
    {
      "tool": "mcp_supabase_deploy_edge_function",
      "args": {
        "project_id": "<CURRENT_PROJECT_ID>",
        "name": "<function-slug>",
        "entrypoint_path": "supabase/functions/<function-slug>/index.ts",
        "verify_jwt": true,
        "files": [...]
      }
    }
    ```

## 5. Cost & Project Management

**Trigger**: Creating a new project or branch.
**Rule**: Always confirm cost before creation.

**Workflow**:

1.  `mcp_supabase_get_cost`
2.  `mcp_supabase_confirm_cost` (Present this to user)
3.  `mcp_supabase_create_project` OR `mcp_supabase_create_branch`
