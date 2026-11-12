# Minimal hero/header — discussion and references

13 November 2026, Asia/Karachi. Local UI refinement only; no publication approval.

## Latest direction and earlier CEO context

The user relayed that the CEO rejected the crowded hero/header and supplied Benjamin Moore short-copy and Brighto full-width screenshots, asking for a full-screen room scene with minimal text. A subsequent explicit correction restores the phone/email utility strip and makes **picture 2 of the three new wide previews—the lavender bedroom—first**. The clean main navigation/full-bleed minimal scene remain. This supersedes the former split hero/large colour card/project CTA and the earlier utility-removal/dark-first choices, without cancelling product, palette, studio, enquiry or later client-data work.

Four stories, brand alignment and five-second autoplay retain the earlier CEO **02:35:00** direction. His **02:19:45** dark-fourth preference motivated the previous dark-first version; the user's latest 13 November correction now explicitly changes the initial scene to lavender. Final order is **lavender bedroom → purple living room → blue dining → magenta reading**, preserving the other scenes' relative order. The specific minimal layout/strip restoration/order follow the current user direction; no new timestamp was supplied for the CEO's latest rejection. The assistant read the recorded discussion and was not a participant in it.

## References checked, 13 November 2026

The user's supplied screenshots are the primary visual evidence for the requested direction. Official page text was also checked:

| Official page | Available reference information | What informed this change / limits |
| --- | --- | --- |
| [Brighto](https://brightopaints.com/) | Image-led slide entries with a primary action in extracted content. | Supports a simple scene-first entry. The user's screenshot supplies the visual reference; text extraction does not verify CSS, exact viewport sizing, fonts, animation or current responsive layout. |
| [Benjamin Moore](https://www.benjaminmoore.com/en-us) | Short headline/supporting content and two links in the extracted entry content. | Supports concise copy/hierarchy. Ekotint intentionally uses its own single action; no claim of copying a one-button Benjamin Moore design or verifying rendered typography. |

No competitor imagery, logos, fonts, copy or code are reused. Client brand colours remain Ekotint's prior supplied palette. The exact headline, button and header simplification are project design choices responding to the user.

## Current implementation scope

The new scoped `src/app/hero-minimal.css`, imported after the earlier styles, supports a full-bleed room scene with one short headline, **“Make room for colour.”**, and one **Explore paints** CTA to `#paints`. The old left copy column, paragraph/eyebrow/collection line, large colour box, scene label/story caption and next-scene peek are removed. Four stories, lavender bedroom first, brand-related scenes and compact `.immersive-*` Pause/arrows/dots remain, with keyboard/reduced-motion/visibility guards. The next art-directed image is preloaded now that the old peek no longer mounts it.

The original utility markup is restored, including phone/email, tagline, location, advice and contact links. It uses the existing **44px desktop/40px mobile** strip with `--home-utility-height`. The clean main header keeps logo/simple navigation/Contact → `#contact`/search/saved/mobile access; its large Plan your project CTA stays removed. Navigation collapses at 1000px, while header height is **84px above 800px/72px at or below 800px**, measured by the existing observer.

Hero height is `100svh` minus the actual sticky header and utility strip, retaining the existing 480px minimum (360px in the short-viewport rule at max-height 600px). Section anchor offsets remain **sticky-header height + 8px only**, because the utility strip scrolls away. Image `<picture>` uses the portrait alternatives at widths ≤800px. Contact email also remains in the contact card; Sol must check 320px header fit and email wrapping. Studio/palette/products/enquiry stay preserved. The removed hero colour card is not restored; Colour studio remains in navigation.

The preserved purple living-room image remains `hero-purple-room.webp` (1536 × 1024), now second. Three versioned wide assets serve the other desktop stories; mobile retains the existing portrait blue/lavender/magenta edits (1024 × 1536):

| Story | Desktop asset in `public/images/` | Actual dimensions | WebP bytes | Mobile asset in `public/images/` |
| --- | --- | --- | ---: | --- |
| Blue dining | `hero-wide-blue-dining-v1.webp` | 1672 × 941 | 129,570 | `hero-brand-blue-dining.webp` |
| Lavender bedroom | `hero-wide-lavender-bedroom-v1.webp` | 1672 × 941 | 179,556 | `hero-brand-lavender-bedroom.webp` |
| Magenta reading | `hero-wide-magenta-reading-v1.webp` | 1672 × 941 | 162,658 | `hero-brand-magenta-reading.webp` |

The built-in image tool expanded the existing room edits; originals remain preserved. Matching PNG masters are in `output/imagegen/`; exact prompts, generation paths and asset-only inspection limits are in `docs/image-prompts/hero-wide-minimal.md`. These AI-created rooms are illustrative brand scenes, not completed client projects or calibrated paint samples. Asset inspection does not constitute browser crop/overlay QA.

The temporary development-only typography comparison is retained as an inline review bar after the footer, preventing a floating control over the entry scene. Refined/Original compares the remaining typography; Original does not restore the removed crowded hero/header composition.

## Validation and restrictions

Tests/typecheck/browser QA/build are unrun by Astra and delegated to Sol in `SOL-HERO-MINIMAL-HANDOFF.md`. Do not infer contrast, crop or accessibility success from source changes or asset inspection. No push, Site upload, deployment or publication; public version 16 remains unchanged.
