# Hero motion, image quality and copy review

13 November 2026. Latest local implementation; the user selected option 9 below. No new publication approval. Application/browser QA remains with Sol.

**Latest scene follow-up:** courtyard is now fifth/last, recoloured from yellow to dusty lavender/soft blue by explicit user request to match the other four after rejecting light-yellow v3. White headline wording/style remains. `image-prompts/hero-courtyard-palette-v4.md` and the latest Sol handoff supersede older order/asset notes below.

**Latest colour-only revert:** the user explicitly clarified restoring the old text colour. The hero now uses fixed white `#fff` on every slide again; adaptive ivory/plum/animated text clipping has been removed. Wording stays “From your front door / to your favourite room.” and photos remain natural and untouched. See the latest `SOL-HERO-MOTION-HANDOFF.md` entry; fresh runtime/build checks are unrun for this small revert.

**Later same-day presentation follow-up:** the user requested slide-specific text colours after supplying the white-on-yellow screenshot. See `HERO-COLOUR-CONTRAST-REVIEW.md` for the implemented ivory/plum palette, moving-picture gradients, synchronized ink boundary and dated reference/validation limits. Approved headline wording remains unchanged.

The CEO's latest untimed hero-text feedback questioned “Make room for colour / Explore paints” and asked for an improved presentation before locking the hero. The user then requested actual horizontal sliding, not a timed appearance/fade, and an image-quality review, especially the yellow house. After the temporary “Beautiful colour. Inside and out.” preview, the user explicitly asked for 5–10 choices researched across paint websites. The user's subsequent direct instruction was **“From your front door to your favourite room. add this”** (13 November session, no message time supplied). This approves option 9 and is implemented with a line break after “door”. The assistant read the supplied CEO/user discussion, not a participant in the CEO conversation.

## Source implementation and quality findings

- `src/app/page.tsx` retains the outgoing image while mounting the incoming one, keyed by image path so the outgoing loaded DOM image is reused. Only two full-size pictures are present. `hero-minimal.css` translates them horizontally from 0→−100% and 100%→0 over 800ms, without a fade or opacity animation. Each frame retains its own desktop/mobile crop; outgoing alt/accessibility content is hidden. The five-image order/3 interiors+2 exteriors/purplish-first/no visible controls remain.
- Next-image `decode()` begins in advance. After the five-second dwell the transition waits for successful decoding, retaining the current picture on a load/decode failure. Effect cancellation/version guards prevent stale async advancement; focus/overlay/background/reduced-motion guards remain. Reduced-motion CSS overrides both entering/leaving animation specificity.
- User-selected headline is **From your front door / to your favourite room.** with the existing **Find your paint** action to `#paints`. It stays still while images move. Existing responsive typography, image order, motion and controls are unchanged by this copy-only follow-up.
- The yellow source was **1672×941**, as were most new wide hero sources; the purple living room is 1536×1024. Large high-density displays can require enlargement. A builtin generation edit requested finer detail/native 4K while preserving the house; actual output remained **1672×941**, so do not claim a genuine 4K/native-resolution upgrade or that enlargement creates original detail. The selected revised image has finer generated material detail and is delivered losslessly, not artificially resized.
- New master: `output/imagegen/hero-exterior-yellow-detail-v2.png`; runtime: `public/images/hero-exterior-yellow-detail-v2.webp`, **2,093,438 bytes**, full 1672×941. Decoded pixel fidelity to its new master is checked separately from application/runtime QA. Earlier yellow/source assets remain. Exact prompt and builtin provenance: `docs/image-prompts/hero-yellow-detail.md`.

## Reference review — 13 November

Reviewed official page text, not a rendered browser/CSS/font/animation audit:

Brighto and Benjamin Moore were rechecked on 13 November for the selected-copy follow-up. Their short messaging and clear product actions inform the existing minimal presentation; the user's selected wording controls this change. No competitor wording or layout was imported, and the recheck does not validate Ekotint's rendered wrapping/contrast.

- [Brighto](https://brightopaints.com/): image-led brand presentation, paint products/prices and browsing by use. Horizontal-slide direction comes from the user's direct request and supplied screenshots; no exact animation timing copied or verified.
- [Benjamin Moore](https://www.benjaminmoore.com/en-us): concise brand/product headline plus clear colour/product actions.
- [Jotun Pakistan](https://www.jotun.com/pk-en/decorative): colour collections, indoor/outdoor inspiration and personal-home guidance.
- [Asian Paints](https://www.asianpaints.com/): short transformation messaging plus practical painting/colour actions.
- Dulux Pakistan direct URL returned403; not treated as a successful page review.
- [MDN translateX](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/transform-function/translateX) and [image decode](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/decode) informed horizontal movement/decoded-image handoff.

These informed concise, welcoming Ekotint directions, not quotation or reuse of competitor slogans. No uniqueness/trademark clearance is claimed for common marketing phrasing.

## Ten options presented for approval — option 9 selected

1. Colour that feels like home.
2. Your home. Your kind of colour.
3. Bring your space to life.
4. A fresh look. A new beginning.
5. Your colour. Our chemistry.
6. Give your home a fresh start.
7. Beautiful spaces begin with colour.
8. A little colour. A whole new feeling.
9. From your front door to your favourite room.
10. Make every space your own.

The assistant recommended option 1; the user instead selected **option 9**, which is now implemented. The text selection is approved; overall hero visual/quality validation remains outstanding. This does not authorize publication.

No application tests/typecheck/build/browser visual checks were run for this revision; Sol handoff: `docs/SOL-HERO-MOTION-HANDOFF.md`. Asset/source inspection is not proof of perceived large-screen sharpness, smooth animation or accessibility conformance.
