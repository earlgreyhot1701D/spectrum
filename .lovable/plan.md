## Goal
Build the Spectrum landing page to match the provided reference image precisely, plus stub routes for the remaining pages. No nav, header, footer, or extra chrome.

## Stack (existing — no changes)
- React 19 + TypeScript + Vite 7 + TanStack Start + TanStack Router
- Tailwind CSS v4
- Framer Motion (new: `bun add framer-motion@^11`)

## Routes
Create route files so TanStack Router generates these URLs:
- `/` — Landing page (full implementation)
- `/gallery/:id` → file `src/routes/gallery.$id.tsx`
- `/reveal/:id` → file `src/routes/reveal.$id.tsx`
- `/final` → file `src/routes/final.tsx`
- `/credits` → file `src/routes/credits.tsx`

Each stub route renders only `<div>{PageName}</div>` on background `#1a1a1a`.

## Landing page (`src/routes/index.tsx`)
Full-viewport `<section>` with:
- Background: `landing-page.png` as `bg-cover` with dark overlay
- Centered stack:
  - Title "Spectrum" in Cormorant Garamond, color `#f3ead3`, size `clamp(80px, 12vw, 180px)`
  - Thin gold hairline divider (`#c9a84c`)
  - Two cream paragraphs (`#f3ead3`)
  - Small gold ornament
  - Accent line (`#d97a5e`)
  - "BEGIN RESTORATION" button: **transparent background**, 1px gold border (`#c9a84c`), cream text, uppercase, `tracking-[0.3em]`
- Framer Motion staggered fade-in-up entrance animation
- No nav, no header, no footer, no icons

## Global styles (`src/styles.css`)
- Background: `#1a1a1a`
- Body font: Inter (Google Fonts)
- CSS vars: `--cream: #f3ead3`, `--gold: #c9a84c`, `--ember: #d97a5e`

## Folder structure
```
public/
  artwork/
  audio/
src/
  assets/
    landing-page.png
  components/
    SpectrumHero.tsx
  routes/
    index.tsx
    gallery.$id.tsx
    reveal.$id.tsx
    final.tsx
    credits.tsx
  styles.css
```

## Fonts
Load Cormorant Garamond and Inter via `<link>` in `src/routes/__root.tsx` `head().links`.

## Title
Update `__root.tsx` title to "Spectrum".

## Verification
- Landing page at `/` matches reference image
- All other routes render placeholder divs on `#1a1a1a`
- Zero TypeScript errors, zero console errors