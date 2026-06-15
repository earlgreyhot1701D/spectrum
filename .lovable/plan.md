# Polish landing page: responsiveness + tokens

Scope: `src/routes/index.tsx` only. No visual redesign — the button, fonts, and layout stay as they are. These are three best-practice fixes.

## 1. Make the button responsive
- Wrap the motion button in a container with `width: 100%; max-width: 360px`.
- Change the button itself from fixed `width: 360, height: 110` to `width: 100%` with `aspect-ratio: 360 / 110` so it scales down proportionally on narrow screens.
- Give the inner SVG `width="100%" height="100%"` and keep its `viewBox="0 0 360 110"` so the notched plaque + hairline frame scale cleanly.
- The text + palmette stay absolutely centered via the existing flex wrapper; no size changes needed since they're centered, not pinned to pixel offsets.

## 2. Let body text reflow naturally
- Remove the hard `<br />` tags inside the two `<p>` blocks under the title.
- Give each paragraph a `maxWidth` (around `34rem` / `36rem` to roughly preserve the current line lengths on desktop) and `marginInline: "auto"` so they stay centered and wrap on their own at narrow widths.

## 3. Use the existing color tokens
Replace the hardcoded hex values currently inlined in JSX with the CSS variables already defined in `src/styles.css`:
- `#f3ead3` → `var(--spectrum-cream)` (plaque fill)
- `#c9a84c` → `var(--spectrum-gold)` (plaque + hairline strokes, palmette)
- `#3a2f1d` → keep as-is only if no matching token exists; otherwise swap to the closest ink/foreground token in `styles.css`.
- `#d97a5e` ember accent (if present in current file) → `var(--spectrum-ember)`.

I'll first read `src/styles.css` to confirm the exact token names before substituting, so no class or var name is invented.

## Out of scope (deferred)
- #4 (button has no onClick / destination) — will come in a follow-up as you mentioned.
- No font-system refactor, no markup restructuring, no copy changes.
