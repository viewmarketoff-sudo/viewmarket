# View Market - AI Agent Rules

## 1. ⚡ Communication Protocol (NON-TECHNICAL)

**Goal**: Result-oriented workflow for a non-coding user.

1.  **PLAN (Simple English)**: Explain _what_ you will do and _why_. **Get Approval.**
2.  **EXECUTE (Autonomous)**: Handle all technical details (coding, db, git) without nagging.
3.  **REPORT (Visual)**: Show "Before vs After".
    - **Visual**: Screenshots for UI.
    - **Functional**: "Users can now [Action]."

## 2. Technical Stack & Architecture

- **Structure**: **Scalable Monolith** (Single Codebase).
- **Stack**: Next.js 14 (App Router), TypeScript, Tailwind, Supabase (DB Only), NextAuth.
- **Security Rule**: **"Zero Leakage"**. Logic lives in `src/actions/` (Server Actions).

## 3. Agent Skills Registry

Load these `.agent/skills/[name]/SKILL.md` files for specialized tasks.

| Skill                | Use When...                   | Key Rule                               |
| :------------------- | :---------------------------- | :------------------------------------- |
| **Fullstack Expert** | Building end-to-end features. | DB -> Backend -> UI (Phase 1-2-3).     |
| **Frontend Expert**  | Building UI/Components.       | Server Components by Default.          |
| **Supabase Ops**     | DB Changes & Data.            | **Migrations ONLY** for schema.        |
| **Chrome DevTools**  | Verifying UI & Debugging.     | **Visual Verification** (Screenshots). |
| **GitHub Ops**       | PRs & Code Search.            | **Master of Git** (Branches/PRs).      |
| **Context7 Docs**    | Checking Syntax.              | **Don't Guess** - Query Docs.          |
| **Perplexity**       | Researching Solutions.        | **Find Best Practice** before coding.  |

## 4. Development Rules

### Architecture (The "One Codebase" Rule)

- **`src/app`**: Routes & Pages (Server Components).
- **`src/actions`**: **The Backend**. Secure Server Actions with Zod validation.
- **`src/components`**: Feature-based UI (`src/components/features/[feature]`).
- **`supabase/`**: DB Migrations.

### Security (Non-Negotiable)

- **No API Keys in Client**: Never use `NEXT_PUBLIC_` for secrets.
- **Validation**: Zod validate EVERY input on the server (`src/actions`).
- **Auth**: Check `auth()` session in every Server Action.

### Action-First Protocol

- **Constructive**: Creating tables/features -> **Auto-Execute**.
- **Destructive**: Deleting data -> **Ask First**.

## 5. Global Code Standards

- **Naming**: `PascalCase` for Components, `kebab-case` for files/folders.
- **Type Safety**: No `any`. Share types (DB -> UI) strictly.
- **Imports**: Use `@/` alias. Group: Built-in -> External -> Internal.
