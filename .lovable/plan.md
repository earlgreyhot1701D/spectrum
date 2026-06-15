## Button details from the reference (zoomed)
- Cream rectangular plaque, ~3:1 aspect.
- **Outer gold border with small notched corners** (each corner has a tiny diagonal cut/chamfer).
- **Inner gold hairline frame** inset by ~10px, also with matching notched corners.
- "BEGIN RESTORATION" in a refined serif, dark brown ink, wide letter-spacing.
- **Small gold palmette/fan ornament centered below the text**, inside the plaque.
- Soft drop shadow.

## Current state vs target
Current button: cream fill + 1px outer border + 1px inner hairline + ornament rendered OUTSIDE the plaque. Missing the **notched corners** on both frames, and the ornament is below the plaque instead of inside it.

## Fix
Rebuild the button using an inline SVG frame so the notched corners render precisely:

1. Replace the `<button>` markup with a container that holds:
   - An absolutely-positioned SVG drawing two concentric rounded-octagon (notched-rectangle) gold strokes — outer at the plaque edge, inner inset ~10px.
   - The cream fill rendered as the SVG's outer path fill (`#f3ead3`) so the notches cut into the fill, not just the stroke.
   - Centered content: "BEGIN RESTORATION" (Cormorant Garamond, ~15px, letter-spacing 0.35em, color `#3a2f1d`) and the palmette ornament SVG below it.
2. Notch geometry: ~10px diagonal cut at each of the 4 corners, on both frames.
3. Palmette ornament: small fan/sunburst SVG in gold (`#c9a84c`), ~24px wide, sitting ~6px below the text, inside the inner frame.
4. Soft shadow: `0 14px 36px rgba(0,0,0,0.5)`.
5. Keep the existing Framer Motion entrance + hover/tap.
6. Remove the standalone ornament SVG currently rendered below the button.

No other changes — text, paragraphs, title, background all stay as they are.