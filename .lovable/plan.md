## Why (the principles)

**Button sizing**
- A primary CTA should be roughly the width of the body copy it follows (or narrower), never wider than the headline. Current plaque is 360px wide × 110px tall — taller than two lines of body text, which makes it feel like a billboard instead of an invitation.
- Touch targets need ~44px min height, but 56–64px is plenty for a hero CTA. 110px is ~2x what's needed.
- Aspect ratio for pill/plaque CTAs lives around 4.5:1 to 6:1. Current 3.27:1 reads as a "box," not a "button."
- Margin above a CTA should match the rhythm of the section, not exceed it. `mt-12` (48px) after a 32px gap feels disconnected.

**Typography hierarchy**
- Good hierarchy needs *three* clear tiers (display / body / accent), each separated by both **size** and **weight/treatment** — not size alone.
- The current page has the H1 at ~168px and body at 16px, with no mid-tier — a 10x jump. The eye has nothing to rest on.
- Body line-length should be 45–75 characters. Current `max-w 34rem` ≈ 65ch ✓ (good).
- Line-height 1.9 on 16px body is too airy for short paragraphs (1.5–1.7 is the sweet spot for Inter at this size).
- Letter-spacing `0.38em` on the button label is extreme — 0.18–0.24em is the editorial standard for small-caps CTAs. Past 0.3em, readability drops.
- Mixing Cormorant Garamond (serif display) in the BUTTON label fights its own hierarchy — buttons usually use the body/sans family so they read as UI, not as a second headline.

## What to change

### 1. Button — shrink and re-proportion
- `maxWidth: 360` → **`260`**
- `aspectRatio: "360 / 110"` → **`"260 / 64"`** (~4:1, classic plaque ratio)
- SVG `viewBox` stays `0 0 360 110` with `preserveAspectRatio="none"` (already correct — strokes will scale, which is acceptable here, but consider switching to `viewBox="0 0 260 64"` and redrawing the notch path for crisper corners).
- `mt-12` → **`mt-8`** (32px), and remove the palmette ornament *inside* the button — it competes with the label in a smaller plaque. Keep the standalone palmette above the button if you want the ornament.

### 2. Button label — calmer treatment
- Font family: Cormorant Garamond → **`Inter, sans-serif`** (UI element, not a second headline)
- Letter-spacing: `0.38em` → **`0.22em`**
- Font-size: `clamp(13px, 1.6vw, 16px)` → **`clamp(11px, 1.1vw, 13px)`** (small-caps style)
- Font-weight: `500` → **`600`** (compensates for smaller size)

### 3. Typography hierarchy — add a mid-tier
The two body paragraphs currently read identically. Differentiate:
- **First paragraph** (the brand promise): bump to **`clamp(16px, 1.2vw, 19px)`**, `line-height: 1.6`, `opacity: 1`. This becomes the "subhead" tier.
- **Second paragraph** ("Throughout history…"): keep at 16px, `line-height: 1.65`, `opacity: 0.75`. This becomes the supporting tier.
- **Ember line** ("Tonight, a gallery waits…"): make it feel like a tagline — `font-style: italic`, `letter-spacing: 0.02em`, keep ember color, `mt-2`.

### 4. Rhythm fixes
- Headline → ornament `mt-1` ✓ keep
- Ornament → first paragraph `mt-10` → **`mt-6`** (tighter coupling to headline)
- First paragraph → star ornament `mt-8` → **`mt-12`** (the star is a *section break*, deserves more air)
- Star → second paragraph `mt-8` → **`mt-6`**
- Second paragraph → ember line `mt-3` ✓ keep
- Ember line → button `mt-12` → **`mt-8`**

### 5. Headline — minor refinement
- `font-size: clamp(72px, 11vw, 168px)` → **`clamp(64px, 10vw, 144px)`** (168px is oversized on ultra-wide; 144px still feels grand and gives the body more presence)
- `letter-spacing: -0.005em` → **`-0.02em`** (Cormorant at display size benefits from slight negative tracking)

## Technical scope
- Edits limited to `src/routes/index.tsx` (style objects + className margins).
- No new dependencies, no CSS variable changes, no layout restructure.
- Out of scope: button onClick/destination, dark/light mode, mobile-specific tweaks beyond what `clamp()` handles.
