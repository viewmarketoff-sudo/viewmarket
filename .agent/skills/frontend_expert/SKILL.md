---
name: Frontend Expert
description: Expert workflows for Next.js 14, TypeScript, Tailwind, and Shadcn/UI frontend development.
---

# Frontend Expert Skill

Use this skill to build premium, performant, and accessible UI components in Next.js 14.

## Communication Protocol (CRITICAL)

1.  **Plan**: "I will create a [Component Name] that allows users to [Action]." (Show a design thought if needed).
    - _Design Check_: "I'll use a [Layout Strategy] with [Colors/Style]."
2.  **Execute**: Handle file creation, styling, and integration autonomously.
3.  **Report**:
    - **Visual**: [Show Screenshot via Chrome DevTools]
    - **Achieved**: "The [Component] is now interactive and responsive."

## 1. Component Creation (Atomic/Shadcn)

**Trigger**: "Create a button", "Add a card", "Build the hero section".
**Workflow**:

1.  **Check Primitives**: Does a Shadcn primitive exist? (e.g., `ui/button`, `ui/card`).
2.  **Compose**: Create features in `src/components/[feature-name]`.
3.  **Style**:
    - Use `cn()` for class merging.
    - Apply standard spacing tokens (`p-4`, `gap-2`).
    - Enforce mobile-first responsive design (`w-full md:w-auto`).
4.  **Verify**:
    - Is it accessible? (Tab index, aria-labels).
    - Does it work on mobile?

## 2. Scalable Architecture (One Codebase)

**Trigger**: "Create a new page", "Structure this feature", "Where does this code go?".
**Workflow**:

1.  **Monolith Rule**: ALL code lives in `src/`. No external backend repos.
2.  **Folder Structure**:
    - **Routes**: `src/app/(group)/page.tsx`.
    - **Backend**: `src/actions/[feature].ts` (Server Actions).
    - **UI**: `src/components/features/[feature]/...`.
3.  **Data Fetching**:
    - **Server**: Fetch directly in `page.tsx` or `layout.tsx`.
    - **Client**: Pass data via props. Avoid `useEffect` fetching if possible.

## 3. Interactive Features (Hooks/State)

**Trigger**: "Make the dropdown work", "Add filter logic".
**Workflow**:

1.  **Hook Separation**:
    - Logic -> Custom Hook (`useFilter.ts`).
    - UI -> Component (`FilterBar.tsx`).
2.  **Server Actions**:
    - **Strict Typing**: Ensure Action returns `Promise<Result<T>>`.
    - **Call**: Invoke via `useTransition` or `form action`.

## 4. Performance & Polish

**Trigger**: "Make it faster", "It feels sluggish", "Polish the UI".
**Workflow**:

1.  **Images**: Replace `<img>` with `next/image` + `blurDataURL`.
2.  **Fonts**: Ensure `next/font` is performing preloading.
3.  **Suspense**: Wrap heavy markers with `<Suspense fallback={<Skeleton />}>`.
4.  **Animations**: Add `framer-motion` for subtle entry/exit animations (micro-interactions).
