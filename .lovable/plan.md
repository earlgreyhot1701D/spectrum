## What went wrong
The reference image already has the title, paragraphs, and button rendered into the pixels. When I used it as a background AND overlaid live text, everything doubled. When I removed the background, you lost the artwork. Neither matched the reference.

## Fix
1. Use AI image editing to produce a **clean version of the reference** with the text/button removed but the gallery scene, mosaic, stained glass, and torn-canvas shards intact. Save as a new CDN asset.
2. Set that clean image as the full-bleed background of `/`.
3. Re-render the live text on top so layout/copy match the reference exactly:
   - "Spectrum" in a serif that visually matches the reference (Cormorant Garamond is close; if needed I'll swap to Cormorant SC or Cinzel for a closer match).
   - Two cream paragraphs with the ember-colored "Tonight, a gallery waits to be restored." line.
   - Small gold ornament between them.
4. Button: this is the one spot where your earlier correction conflicts with the reference. The reference shows a **cream-filled plaque with gold border and inner gold hairline**. Your earlier instruction was **transparent background, gold border only**.

## One decision I need from you
Which wins for the BEGIN RESTORATION button?
- **A. Match the reference exactly** — cream-filled plaque, gold border, inner gold hairline, small ornament beneath.
- **B. Keep your override** — transparent background, gold border only (current behavior).

## Font question
Do you want me to try a closer serif match (e.g. Cinzel or EB Garamond) if Cormorant Garamond still reads as "different"? Or keep Cormorant Garamond?

Once you answer, I'll generate the cleaned background, swap it in, and align the typography.