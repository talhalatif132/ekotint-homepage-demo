# Hero headline colours — local review

13 November 2026, Asia/Karachi. Local source only; not published.

**Superseded by user's colour revert:** the latest clarification is “just revertback the text color ... like before”. Constant white `#fff` text and the original soft shadow/focus outline are restored on every slide. Per-story colours, CSS ink variables, keyed headline, text clipping/colour animation and associated container units were removed. The text wording and natural photos remain unchanged. The implementation discussion/table below is historical and must not be reinstated automatically. Brighto and Benjamin Moore official homepage text was rechecked on 13 November for this UI task; no new reference-driven design was adopted and no rendered reference colour audit is claimed. Latest revert has source review only; browser/typecheck/build checks remain with Sol. No missing inputs; no publication.

**Latest user correction:** the user supplied screenshots of washed-out exteriors and said **“all aura destroyed dont edit the pics”**. The initial supporting light gradients were rejected and removed immediately, along with all other hero photo overlays on desktop/mobile. No photo tints, washes, filters, opacity changes or asset edits are part of the final implementation. Preserve the original image appearance; future readability changes must affect the lettering only unless the user changes this constraint.

## User/CEO context

The supplied CEO feedback asks for a clean, image-led hero with minimal text. The user approved “From your front door to your favourite room.” and subsequently reported that white lettering did not suit every background, supplying the yellow-house screenshot and asking to change the text colour according to each slide. These are untimed messages supplied in this conversation; the assistant did not participate in the CEO conversation. This task adjusts that approved headline's presentation, not its wording.

## Implementation

Each of the existing five stories now supplies only a headline colour:

| Slide | Headline | Photo appearance |
| --- | --- | --- |
| Lavender bedroom, first | Warm ivory `#FFF9F2` | Original, no overlay |
| Lavender/blue house | Deep plum `#30203D` | Original, no overlay |
| Purple living room | Warm ivory `#FFF7EF` | Original, no overlay |
| Yellow house | Deep plum `#30203D` | Original, no overlay |
| Blue dining room | Cool ivory `#F5F2FF` | Original, no overlay |

All hero/picture pseudo-element overlays were removed for desktop and mobile. The photo assets, object-fit, crops, colours and brightness are untouched by this refinement. A faint 1px/3px shadow is applied to headline glyphs only; it is disabled in forced colours. All five desktop image assets and both distinct portrait assets were inspected directly; this is asset review, not a browser/contrast audit. No image files were changed. A separate read-only source review confirmed no remaining image overlay/filter/opacity/blending rules.

One stationary semantic `h1` remains. In browsers supporting text background clipping and container units, a two-colour background clipped to its glyphs moves at the same 800ms/cubic easing as the photo boundary. `200cqw` covers the outgoing and incoming hero widths; the 5.5cqw desktop / 6cqw mobile offset accounts for the headline's left inset. This makes the text over the outgoing photo retain its old colour while text over the incoming photo uses the new colour, without fading through low-contrast intermediate grey, duplicate headings or new timers. The keyed headline restarts this colour boundary when the image changes. A solid active colour is the fallback; reduced motion disables the boundary animation, and forced colours use system text/canvas colours. No extra slider controls were introduced.

The Find your paint button retains its white surface and plum label. Its focus outline uses the active headline colour. Five-image order, first purplish scene, existing autoplay/decode guards, header and all product/cart/colour work are preserved.

## References checked — 13 November 2026

- [Brighto](https://brightopaints.com/): rechecked official homepage text/image structure and clear paint-shopping actions, alongside the user's supplied clean-hero screenshots. The text extraction does not verify its rendered text colours, contrast, CSS or animation.
- [Benjamin Moore](https://www.benjaminmoore.com/en-us): rechecked concise headline/product actions alongside imagery. This supports retaining the minimal composition; no competitor slogan, palette or layout was copied. Not a rendered colour audit.
- [MDN background-clip](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/background-clip) and [container queries/units](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Containment/Container_queries): implementation references for a single glyph-clipped headline and hero-relative animation geometry.

The actual colour choices come from direct review of Ekotint's images and the user's yellow-house feedback, not an assertion about competitors' computed styles.

## Validation and handoff

**Subsequent focused verification completed:** Sol's `HERO-PHOTO-FIDELITY-QA-2026-11-13.md` proves current desktop/mobile served bytes equal the local files, all five images load with existing crops, and computed image/ancestor/pseudo styles contain no overlays or colour/opacity/filter/blend treatment. Root inspected yellow and lavender at both sizes and confirmed natural colours. This supersedes “browser checks unrun” below for photo preservation only; full contrast/accessibility/motion/network regression and typecheck/build were not run.

Source/asset review only. No app tests, typecheck, build, browser screenshots or measured contrast validation were run for this change; these remain with Sol under the user's work split. Review all five desktop/mobile scenes and every light↔dark transition, including resize/scrollbar geometry, forced colours and reduced motion. Confirm one accessible headline, no clipped text and original photo vibrancy. If mobile readability needs work, adjust the text only; do not restore photo overlays or edit image assets. See `docs/SOL-HERO-MOTION-HANDOFF.md`.

No additional copy or asset input is required for this request. Overall visual review and fresh publication approval remain pending. Do not push, deploy or publish.
