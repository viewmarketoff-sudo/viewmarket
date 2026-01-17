---
name: Fullstack Expert
description: End-to-end scalable development for Next.js Monolith. Orchestrates Database, Backend (Server Actions), and Frontend with strict security.
---

# Fullstack Expert Skill

Use this skill to build complete features (DB + Backend + Frontend) in the View Market monolith.

**Core Goal**: A clean, scalable, single codebase where **SECURITY IS PARAMOUNT**.
**Security Rule**: "Zero Leakage". No sensitive logic, API keys, or raw data queries in Client Components. All business logic must live in **Server Actions**.

## ⚠️ CRITICAL OPERATIONAL RULE

**DO NOT run any of the following commands unless the user EXPLICITLY requests them:**

- `npm run build` or any build commands
- `npm run dev` or any development servers
- `npm run lint` or any lint servers
- Any other build/development/lint processes

**Why**: These commands should only be executed when the user specifically asks for verification, deployment preparation, or testing. Auto-running them wastes resources and disrupts the workflow.

## Communication Protocol (Non-Technical)

1.  **Plan**: "I will build the [Feature] by creating the database table, the secure backend logic, and the user interface." **Then immediately execute.**
2.  **Execute** (without waiting for approval):
    - **Step 1**: Database (Schema & Data).
    - **Step 2**: Backend (Secure Server Actions).
    - **Step 3**: Frontend (UI Components).
3.  **Report**:
    - **Feature**: "The [Feature] is ready."
    - **Security Check**: "Verified that all logic is hidden on the server."
    - **Visual**: [Screenshot]

**IMPORTANT**: Do NOT ask for user approval before executing. Present the plan and proceed immediately.

## 1. End-to-End Feature Build

**Trigger**: "Build the checkout flow", "Create the user dashboard", "Add product reviews".
**Workflow**:

### Phase 1: Database (Supabase)

- **Action**: Use `supabase_ops` to create tables/migrations.
- **Rule**: Define Row Level Security (RLS) immediately.

### Phase 2: The "Hidden" Backend (Server Actions)

- **Location**: `src/actions/[feature].ts`.
- **Action**: Create `async function` with `'use server'`.
- **Security**:
  - **Validation**: Validate ALL inputs with Zod.
  - **Auth Check**: `const session = await auth(); if (!session) throw new Error...`
  - **Return**: Return only safe data (DTOs), never raw DB objects.

### Phase 3: The Frontend (UI)

- **Location**: `src/components/features/[feature]/...`
- **Action**: Use `frontend_expert` workflows.
- **Integration**: Call Server Action from `useTransition` or `<form action={...}>`.
- **Constraint**: NEVER write SQL or fetch logic in the Component itself.

## 2. Security Audit (Vulnerability Check)

**Trigger**: "Is this safe?", "Check for exploits", "Audit the code".
**Workflow**:

1.  **Server-Only Check**: Ensure no API keys or secrets start with `NEXT_PUBLIC_`.
2.  **Network Check**: Verify that sensitive data is NOT visible in the Chrome DevTools Network tab (payloads should be opaque or minimal).
3.  **Input Check**: Verify Zod validation exists for every mutation.

## 3. Scalability Refactor

**Trigger**: "Clean up the code", "Structure is messy".
**Workflow**:

1.  **Colocate**: Move loose components into `src/components/features/[name]`.
2.  **Extract Logic**: Move heavy logic from UI to `src/actions` or `src/hooks`.
3.  **Type Sharing**: Ensure Frontend uses valid Types generated from Backend/DB.
