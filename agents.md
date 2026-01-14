# View Market - AI Agent Rules

## Context

Trading platform | Next.js 16 App Router, React 18, TypeScript 5 | Tailwind + shadcn/ui + Radix | Recharts, lightweight-charts | Zod validation

## Commands

`npm run dev` | `npm run build` | `npm run lint:fix` | `npm run prettier:fix`

**⚠️ DO NOT run any commands (dev, build, lint, etc.) unless user explicitly requests it.**

---

## MCP Servers (IMPORTANT)

### Supabase MCP → Database Operations

**USE FOR**: All database work - queries, migrations, tables, RLS policies, edge functions

- `mcp_supabase_execute_sql` → Run SQL queries directly
- `mcp_supabase_apply_migration` → Create tables, policies, indexes
- `mcp_supabase_list_tables` → Check existing schema
- `mcp_supabase_generate_typescript_types` → Generate types after schema changes
- `mcp_supabase_deploy_edge_function` → Deploy serverless functions
- `mcp_supabase_get_logs` → Debug issues
- `mcp_supabase_get_advisors` → Security/performance checks

**→ Always use Supabase MCP for DB operations, never write raw SQL in code files**

### Context7 MCP → Documentation & Code Examples

**USE FOR**: Finding docs, code examples, API references for any library/framework

1. `mcp_context7_resolve_library_id` → Find library ID first
2. `mcp_context7_query_docs` → Query docs with specific questions

**→ Use when needing current docs for Next.js, React, Tailwind, shadcn, or any package**

### Playwright MCP → Browser Testing

**⚠️ ONLY use when user explicitly asks to test in browser**

- `mcp_mcp_playwright_browser_navigate` → Open URLs
- `mcp_mcp_playwright_browser_snapshot` → Get page structure
- `mcp_mcp_playwright_browser_click` → Click elements
- `mcp_mcp_playwright_browser_type` → Type text
- `mcp_mcp_playwright_browser_take_screenshot` → Capture screenshots

**→ DO NOT use Playwright unless user specifically requests browser testing**

### Perplexity MCP → Web Search & Verification

**USE FOR**: Searching web, confirming information, finding current data

- `mcp_perplexity_ask_perplexity_ask` → AI-powered search with context

**→ Use when needing to verify info, search for solutions, or get current data**

### GitHub MCP → Repository Operations

**USE FOR**: GitHub repo operations when user requests

- `mcp_github_get_file_contents` → Read files from repos
- `mcp_github_search_code` → Search code across GitHub
- `mcp_github_create_pull_request` → Create PRs
- `mcp_github_list_issues` → List/search issues
- `mcp_github_push_files` → Push code changes

**→ Use when user asks to interact with GitHub repos**

## Structure

```
src/app/          → Pages, layouts, route handlers
src/components/ui → shadcn primitives
src/components/   → Feature components
src/lib/          → Utilities (cn helper)
src/hooks/        → Custom hooks
src/utils/        → Icons, images
```

## Code Style

- **Naming**: dirs=`lowercase-dashes` | components=`PascalCase` | vars=`isLoading, hasError`
- **Imports**: `@/` alias, grouped: builtin → external → internal → relative
- **TypeScript**: interfaces > types, no enums (use `as const`), no `any`
- **Exports**: named exports, no default
- **File order**: Component → Subcomponents → Helpers → Constants → Types

## Components

- Functional components only, no classes
- Use `cn()` for class merging
- Composition over prop drilling
- `forwardRef` for UI primitives with `displayName`
- CVA for variants

## Server vs Client

- **Default**: Server Components (RSC)
- **`'use client'`**: Only for useState, useEffect, event handlers, browser APIs
- Keep client components at leaf nodes
- Fetch data in Server Components, pass to Client as props

## Security (CRITICAL)

- **Server-only**: API keys, DB queries, secrets → never in client bundle
- **`import 'server-only'`** in sensitive modules
- **Server Actions** for mutations (hidden from Network tab)
- **DTOs**: Return only needed fields, never raw DB objects
- **Validation**: Zod on server, client validation is UX only
- **Auth check** in every Server Action
- **No `NEXT_PUBLIC_`** for secrets

## Data Fetching

```tsx
// Server Component fetches
async function Page() {
  const data = await db.query(); // Server-only
  return <ClientComponent data={data} />;
}

// Server Action for mutations
("use server");
export async function action(formData: FormData) {
  const user = await getCurrentUser();
  if (!user) unauthorized();
  const validated = Schema.safeParse(formData);
  if (!validated.success)
    return { errors: validated.error.flatten().fieldErrors };
  return await mutate(validated.data);
}
```

## Error Handling

- Guard clauses + early returns (errors first, happy path last)
- `error.tsx` for boundaries (Client Component)
- `loading.tsx` for Suspense states
- Expected errors → return as values | Unexpected → let boundaries catch
- User-friendly messages, log internals

## Performance

- Minimize `'use client'`, `useEffect`, `useState`
- `<Image>` with `priority` for LCP, always set dimensions
- `dynamic()` for heavy components, `ssr: false` for client-only libs
- `<Suspense>` wrap client components
- Cache with `unstable_cache`, revalidate strategies

## Accessibility

- Semantic HTML: `<button>`, `<nav>`, `<main>`, `<label htmlFor>`
- ARIA only when HTML insufficient
- Keyboard accessible: `onKeyDown` for Enter/Space
- Visible `:focus-visible` outlines
- 4.5:1 contrast ratio
- `aria-live` for dynamic content

## Testing

- RTL: `getByRole`, `getByLabelText` (accessible queries)
- Test keyboard navigation with `userEvent`
- Validate Server Actions: auth, validation errors
- `eslint-plugin-jsx-a11y` + `@axe-core/react`
