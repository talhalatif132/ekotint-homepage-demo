# Sol handoff — local homepage circles and multi-review carousel

**Published checkpoint:** the user subsequently explicitly approved the final CTA removal/trust-link clarity changes and deployment. All current homepage work is now READY on https://ekotint-paints-demo.vercel.app, deployment `dpl_B5XdG3iNzHyzQYKcmq8CGPzCLtjr`. Both focused local QA reports and the final production build passed. Public homepage/Water Matt/Clima HTTP checks passed; updated homepage HTML matches the approved layout. The earlier local-only / remaining-carousel wording below is historical for this now-completed release. Preserve the verified UI; future publication needs new approval.

13 November 2026. Read AGENTS.md and the latest EKOTINT-PROJECT-HANDOVER.md checkpoint. Preserve all source and the current Vercel baseline. No publication approval for these later local changes; do not push/upload/deploy. No separate FAQ page is authorized yet.

## Completed local colour / structure changes

- FAQ/advice section hidden with shared `homeSectionVisibility.advice=false`; copy/styles retained. Conditional shortcuts and PDF/contact redirects avoid dead visible anchors.
- `HomeColourPalette` directly follows the complete products section. Centred Explore Ekotint colours, Interior/Exterior circle sliders, native scroll/snap, measured arrow centring and preserved saved colours/search/header-family navigation.
- Distinct curated sets: Interior 16, Exterior 13, no overlap. They are digital ideas, not approved product shade ranges. New Soft Vanilla #FCEEDE is shared with product swatches; no competitor shade code/physical match is asserted. 29 current ideas/33 known entries; the original indexed arrays and all old favourites remain.
- `HomeColourProductChooser` uses the existing homepage dialog: four Interior or two Exterior products; product arrows, selected name/HEX/save/example price and real product detail link. Interior controlled-room backdrop; Exterior original illustrative exterior photo. No duplicate editor or new backend.

Changed files: src/app/page.tsx, src/lib/homepage-content.ts, HomeColourPalette.tsx, HomeColourProductChooser.tsx, HomeColourStudio.tsx, HomeCustomerStories.tsx (PDF trust link), catalogue/CatalogueShell.tsx and CatalogueView.tsx, plus new colour-palette.css and colour-chooser.css. Review-carousel work is in HomeCustomerStories.tsx/customer-stories.css. Preserve unrelated previously published work.

## Checks already completed

`HOMEPAGE-COLOUR-SLIDER-QA-2026-11-13.md` records passed typecheck and local browser checks: FAQ/anchor removal, immediate section adjacency, distinct sets, product category filtering/navigation, header-family switching, save/Escape/focus, native swipe, arrow centres within2px at1440/390, no tested view overflow, and actual Soft Vanilla URL/product preview. It records one final main-harness URL assertion separately from the focused successful follow-up. Do not repeat the whole16-product release suite for unchanged details. No production build/new publication was run.

## Focused remaining review-carousel validation

After its implementation is complete: check 3 visible cards at normal desktop,4 at wide desktop,2 tablet,1 mobile; auto advance/wrap, manual arrows, explicit pause/play, hover/focus/visibility/reduced-motion guards, resize/swipe/focus and no page overflow. Preserve existing review copy/avatars and genuine review/data separation. Do not add invented stars/ratings/quotes. Verify the real technical PDF trust link still works and no visible #advice shortcut returned. Run typecheck for final combined source; a fresh production build remains necessary before any later approved publication. Record exact results without claiming unrun checks.

## Pending inputs / scope

Actual shade codes and product compatibility, real prices/packs, genuine customer reviews, upload/SAM, real enquiry delivery/orders/payments remain pending. The existing demo content must not be described in handovers as verified customer evidence. No new separate page, data catalogue, backend or automatic new publication is authorized by this layout task.

## Copy/paste prompt

```text
In /Users/sam/Desktop/ekotint-homepage-demo, read AGENTS.md and docs/SOL-HOMEPAGE-COLOUR-SLIDER-HANDOFF.md. Preserve the checked colour/chooser UI. Validate the final multi-review carousel and run the remaining focused checks; record results. Keep everything local and do not publish without new user approval.
```
