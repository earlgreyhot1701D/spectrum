# Spectrum — Codex Build Instructions v1.6

**Status:** Approved for Production  
**Audience:** AI Coding Agents (primary: Codex), Human Contributors  
**Supersedes:** Codex Build Instructions v1.5  
**Changes in v1.6:** Pre-approved dependency list added. Dependency hard stop removed — Codex may install from approved list without asking. Build report format added. Codex writes to docs/build-report.md after each milestone.

---

## Mission

Build a polished MVP of Spectrum.

Spectrum is an interactive gallery experience celebrating LGBTQIA+ identity, community, and belonging through art and discovery.

**The objective is to build the game described in the project documentation.**  
**The objective is not to invent a different game.**

---

## Required Reading

Read all of these before writing any code:

```
docs/prd.md
docs/gallery-content.md
```

All implementation decisions must align with these documents. `prd.md` is the primary source of truth.

---

## Token Budget Controls

These rules exist to prevent runaway agent loops and unnecessary token spend. They are non-negotiable.

### Hard Stop Rules

**STOP and report to the human if any of these occur:**

1. **You have made 3 attempts to fix the same error and it is still failing.** Do not attempt a 4th fix. Report what you tried and what failed.

2. **You need a dependency not on the Pre-Approved Dependency List below.** Stop. State the package name, why you need it, and what alternative exists. Do not install without human approval.

3. **You are about to modify a file outside the current milestone scope.** Stop. State which file and why. Do not modify without human approval.

4. **TypeScript errors exceed 5.** Stop. List the errors. Do not attempt bulk fixes.

5. **You have been working on a single component for more than 3 iterations.** Stop. Report what is blocking you.

6. **You are uncertain what to build.** Stop. Ask. Do not guess and implement.

### Pre-Approved Dependency List

You may install any of the following without asking. No other packages may be installed without human approval.

```
framer-motion       — animations (already installed)
tailwindcss         — styling (already installed)
@tanstack/react-router — routing (already installed)
clsx                — conditional classnames
```

That is the complete approved list. If you need something not on it, stop and report.

### Loop Prevention

Before starting any task, state:
- What file you are about to create or modify
- What the expected output is
- How you will verify it worked

After completing any task, state:
- What you built
- What the self-check result was (PASS or FAIL)
- What the next task is

If a self-check fails, fix it once. If it fails again, stop and report.

### Scope Lockdown

You are working on **one milestone at a time**. If you finish a milestone and the self-check passes, stop and report completion. Do not begin the next milestone without human confirmation.

Do not refactor code outside the file you are currently implementing. If you see something wrong in another file, note it in your report. Do not fix it.

---

## Self-Check Protocol

Every milestone has a self-check. Run it before declaring the milestone complete. Report each item as PASS or FAIL.

**If any item is FAIL:** fix it, re-run the check, report again. If it fails twice, stop and report to human.

**Self-check format:**
```
MILESTONE 0 SELF-CHECK
[ ] Can navigate / → /gallery/1 → /reveal/1 → /lesson/1 — PASS/FAIL
[ ] 4 questions display and each reveals one overlay section — PASS/FAIL
[ ] Wrong answer shows correct answer and explanation — PASS/FAIL
[ ] Full artwork visible after question 4 — PASS/FAIL
[ ] Zero console errors — PASS/FAIL
[ ] Zero TypeScript errors — PASS/FAIL
RESULT: PASS / FAIL
```

Do not mark a milestone complete unless all items are PASS.

---

## Build Report

After every milestone — whether it passes or fails — write a report to `docs/build-report.md`. Do not skip this step. This file is how the human reviews what happened without reading every line of code.

### Report format

```markdown
# Spectrum — Build Report

## Milestone [N] — [Name]
**Status:** COMPLETE / BLOCKED  
**Date:** [date]

### What was built
- [list of files created or modified]

### Self-check results
- [ ] [check item] — PASS/FAIL
- [ ] [check item] — PASS/FAIL

### Dependencies installed
- [package name] — [reason], or "None"

### Issues encountered
- [description of any problems and how they were resolved], or "None"

### Notes for next milestone
- [anything the human should know before continuing]
```

Append each milestone report to the file. Do not overwrite previous reports. The full file is a running log of the build.

---

When documents appear to conflict, follow this order:

1. `prd.md`
2. `gallery-content.md`
3. `codex-build-instructions.md`

Do not invent new requirements. Do not add features not specified.

---

## Core Principle

> The artwork is the hero. The interface supports the artwork.

When a decision must be made between more UI and more art, choose the art.

---

## Scope Control

Build only the MVP.

### Do Not Build
- User accounts
- Authentication
- Databases
- Save systems
- Multiplayer
- Achievements
- Timers
- Scores
- Leaderboards
- Audio
- Social sharing
- Analytics
- Any puzzle or drag-and-drop mechanic

Spectrum is intentionally small. Respect the scope.

---

## Approved Technology Stack

The following are installed and approved for use:

```
React 19 + TypeScript
Vite 7
TanStack Router v1 (file-based routing)
TanStack Start v1 (Lovable's build platform — do not remove)
Tailwind CSS v4
Framer Motion v11
```

Deployment target: Lovable (spectrum-gallery.lovable.app). Vercel post-jam.

Do not replace the stack. Do not add libraries without clear justification.

### Router Convention

This project uses **TanStack Router**, not React Router DOM. Route files live in `src/routes/`. TanStack uses `$id` instead of `:id` in filenames — the resulting URLs are identical.

```
src/routes/index.tsx           → /
src/routes/gallery.$id.tsx     → /gallery/:id
src/routes/reveal.$id.tsx      → /reveal/:id
src/routes/lesson.$id.tsx      → /lesson/:id   ← NEW, must be created
src/routes/final.tsx           → /final
src/routes/credits.tsx         → /credits
src/routes/__root.tsx          → app root
```

Use TanStack Router `<Link>` and `useParams()` for navigation and params. Do not import from `react-router-dom`.

### Installed But Do Not Use

The following packages are installed by the Lovable scaffold but are not part of Spectrum. Do not import them. Do not build features that depend on them.

```
@radix-ui/* (all packages)
@tanstack/react-query
recharts
react-hook-form
@hookform/resolvers
zod
date-fns
embla-carousel-react
react-day-picker
react-resizable-panels
input-otp
cmdk
sonner
vaul
lucide-react
class-variance-authority
```

If a component needs an icon, use an inline SVG. Do not import from lucide-react.

---

## Build Workflow Context

The repository was scaffolded by Lovable. The scaffold includes:
- TanStack Router file-based routing
- Landing page fully implemented at `src/routes/index.tsx`
- All other routes are empty placeholder shells
- Tailwind CSS v4 configured
- Framer Motion v11 installed
- Cormorant Garamond and Inter fonts loaded via Google Fonts in `__root.tsx`
- Global background color `#1a1a1a`
- Landing page background image at `public/artwork/landing-page.png`

**One route is missing from the scaffold:** `src/routes/lesson.$id.tsx` must be created.

Codex picks up from this scaffold. Do not restructure what Lovable created unless it directly conflicts with this document.

**Explicit guardrail:** Do not refactor code outside the component or file you are currently implementing.

---

## The Core Mechanic

Each gallery has 4 multiple choice questions. The artwork starts hidden behind a dark overlay divided into 4 sections. Each question answered — right or wrong — removes one overlay section via Framer Motion fade, revealing that portion of the artwork.

### On Correct Answer
- Overlay section fades out
- Brief confirmation: "That's right."
- Auto-advance after 1.5 seconds

### On Wrong Answer
- Overlay section still fades out (no punishment)
- Correct answer highlighted
- Explanation text displays (2-3 sentences)
- Auto-advance after 3 seconds

After question 4 the full artwork is visible. A "Continue" button appears navigating to `/lesson/:id`.

---

## Data Shape

All gallery content lives in `src/data/galleries.ts`. This is the only source of gallery data. No hardcoded content in components.

```typescript
type Question = {
  question: string;
  options: [string, string, string, string];
  correctIndex: 0 | 1 | 2 | 3;
  explanation: string;
};

type Gallery = {
  id: string;
  title: string;
  theme: string;
  introText: string;
  artworkPath: string;
  questions: Question[];    // exactly 4
  lessonText: string;
  lessonCredit: string;
  nextGallery: string | null;
};
```

Seed `src/data/galleries.ts` with placeholder content for all 5 galleries on first pass. Real content comes from `docs/gallery-content.md`.

---

## Milestone Order

Complete each milestone fully before moving to the next. Do not skip ahead.

---

### Milestone 0 — Vertical Slice

**Goal:** One fully playable path through Gallery 1.

Build:
```
/ → /gallery/1 → /reveal/1 → /lesson/1
```

Tasks:
- Create `src/routes/lesson.$id.tsx`
- Implement `src/data/galleries.ts` with Gallery 1 placeholder data (4 questions)
- Build `GalleryIntro` component — title, intro text, "Enter Gallery" button
- Build `RevealExperience` component — artwork with 4-section overlay, question panel, multiple choice buttons, feedback states, progress indicator
- Build `LessonScreen` component — full artwork, lesson text, credit, continue button
- Wire Gallery 1 end to end

**Self-check before marking complete:**
- [ ] Can navigate from `/` to `/gallery/1` to `/reveal/1` to `/lesson/1`
- [ ] Each of the 4 questions reveals one overlay section
- [ ] Wrong answer shows correct answer and explanation
- [ ] Full artwork visible after question 4
- [ ] Zero console errors
- [ ] Zero TypeScript errors

Do not build additional galleries until Milestone 0 self-check passes.

---

### Milestone 1 — All Galleries

**Goal:** All 4 galleries playable with real content.

Tasks:
- Wire Gallery 2, 3, 4 using the same components (data-driven, no new components)
- Replace placeholder content in `src/data/galleries.ts` with real content from `docs/gallery-content.md`
- Confirm `/gallery/2` → `/reveal/2` → `/lesson/2` → `/gallery/3` progression works
- Confirm Gallery 4 lesson navigates to `/final`

**Self-check before marking complete:**
- [ ] All 4 galleries playable end to end
- [ ] Correct content displays per gallery
- [ ] Progression from Gallery 4 reaches `/final`
- [ ] Zero console errors
- [ ] Zero TypeScript errors

---

### Milestone 2 — Final Experience

**Goal:** Complete flow including final screen and credits.

Tasks:
- Implement `/final` — Belonging artwork, closing copy, "View Credits" button
- Implement `/credits` — title, creator credit, "Play Again" button returning to `/`
- Confirm full game flow works start to finish

**Self-check before marking complete:**
- [ ] Full game completable in one sitting
- [ ] Credits display "AI Assisted. Human Approved. Powered by NLP."
- [ ] Play Again returns to landing page
- [ ] Zero console errors
- [ ] Zero TypeScript errors

---

### Milestone 3 — Polish

Tasks:
- Framer Motion transitions between screens (fade in/out)
- Reduced motion support (`prefers-reduced-motion` — skip all animations when set)
- Responsive layout check (mobile + desktop)
- Accessibility pass — semantic HTML, keyboard navigation, WCAG AA contrast

---

## UX Rules

- No punishment
- No losing
- No stress
- No speed requirements

Wrong answers still reveal the art. The experience is discovery, not a test.

---

## Design Rules

The game should feel like:
- A gallery
- An exhibition
- An art experience

The game should not feel like:
- A quiz app
- A dashboard
- A mobile game
- A SaaS application

---

## Accessibility Requirements

Required in MVP:
- Semantic HTML (`button`, `main`, `section`, `header`)
- All interactive elements keyboard accessible
- Reduced motion respected (`prefers-reduced-motion`)
- Readable contrast (WCAG AA minimum)
- Answer options are `<button>` elements, not divs

---

## Code Quality Requirements

- TypeScript compiles cleanly — zero errors
- No console errors
- No dead code
- No unused dependencies
- No unnecessary abstractions
- Favor readability

---

## Acceptance Criteria

### Landing Page
- Loads without errors
- "BEGIN RESTORATION" button navigates to `/gallery/1`
- Background image visible, no UI chrome

### Gallery Intro
- Gallery title and intro text display correctly
- "Enter Gallery" button navigates to `/reveal/:id`

### Reveal Experience
- Artwork displays with 4-section dark overlay
- Questions display one at a time
- Selecting an answer reveals one overlay section
- Correct answer: confirmation message, auto-advance after 1.5s
- Wrong answer: correct answer highlighted, explanation shown, auto-advance after 3s
- Progress indicator shows current question (e.g. "1 of 4")
- After question 4: "Continue" button appears

### Lesson Screen
- Full artwork displayed with no overlay
- Lesson text and credit display correctly
- "Continue" navigates to next gallery or `/final`

### Final Screen
- Belonging artwork displays
- Closing copy displays
- "View Credits" navigates to `/credits`

### Credits
- "AI Assisted. Human Approved. Powered by NLP." displays
- "Play Again" returns to `/`

### Deployment
- Builds without errors
- No runtime errors in production

---

## Definition of Done

Spectrum is complete when a player can:

1. Enter the gallery from the landing page
2. Move through all 4 galleries answering questions
3. Watch each artwork reveal itself
4. Read the lesson for each gallery
5. Reach the final screen and credits

Without errors. In under 15 minutes.

---

## Non-Negotiable Principle

Do not optimize for features.  
Do not optimize for complexity.  
Do not optimize for novelty.

> Optimize for clarity, beauty, and completion.  
> A finished Spectrum is more valuable than an ambitious unfinished Spectrum.  
> Ship the restoration journey.

---

*AI Assisted. Human Approved. Powered by NLP.*