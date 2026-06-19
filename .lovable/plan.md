Add one new TanStack Router route file for the lesson screen.

1. Create `src/routes/lesson.$id.tsx`
   - Import `createFileRoute` from `@tanstack/react-router`
   - Export `Route = createFileRoute("/lesson/$id")({...})`
   - Component: placeholder `<div>` with text "Lesson"
   - Styling: `min-h-screen bg-[#1a1a1a] text-[#f3ead3] p-8` (identical to existing placeholder routes)

2. TanStack Router will auto-register the new route in `routeTree.gen.ts` on next dev/build.

No other files are modified. No dependencies installed.