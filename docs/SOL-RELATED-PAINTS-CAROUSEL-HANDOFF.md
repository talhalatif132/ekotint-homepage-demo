# Sol handoff — related-paint hover and arrows

14 November 2026. Read AGENTS.md, the current handover and `RELATED-PAINTS-CAROUSEL-REFERENCES.md`. Local only; no source push/deploy, external-domain status checks or port3000 changes. Reuse3023. UI agents implement; Sol tests/builds.

## Changed

`HomeRelatedPaints.tsx`/CSS module replace the old fixed five-card row in `HomePaintProductView.tsx`. All15 existing other paints are present, preserving first-five category/series relevance. Five desktop slots,3/2tablet,78%mobile cards. Header Previous/Next controls have measured disabled ends and page increments; native scrolling and row Left/Right/Home/End retained. Forward image hover matches homepage perspective/translateZ48/scale1.035; neutral touch/reduced motion. Optional selectedHEX/name carried to each product link; plain initial paths otherwise. No invented colours/availability, new assets or autoplay.

## Focused checks

1. Representative Epoxy at1440/390,320 overflow. Fifteen distinct products excluding current, former first-five order, five desktop slots, usable mobile peek/44pxcontrols and no page overflow. Additional current product smoke if useful, not full16route regression.
2. Actual Next advances beyond initial five; endpoint Next disables; Previous returns. Row arrow keys move one card, End/Home reach ends; controls aria-controls target correct row. No carousel autoplay.
3. Normal-motion mouse/focus forward enlargement (computed transform and actual bounds) without upward lift, shadow and no clipped image. Reduced-motion neutral hover; touch media condition source/runtime where practical. Capture normal/hover desktop and mobile row for root after lazy images decode.
4. Selected colour query/name on all links and actual navigation arrival; no injected query without explicit selection. Back to paints works. Original asset requests/load and no pageerrors. Main median/cart/colour/tabs remain unchanged; no broad repeat needed.
5. Final typecheck, whitespace check and webpack build once source settled. Sole browser approval owner; report first pending yield immediately and run build independently. Report failures to root; do not mutate app source.

Write `RELATED-PAINTS-CAROUSEL-QA-2026-11-14.md` with exact evidence, captures and unrun limits. Validation was pending at handoff creation; final results follow below. No new client input blocks the UI; actual manufacturer data/reviews/services remain pending separately. No publication.

Copy/paste Sol prompt: Read docs/SOL-RELATED-PAINTS-CAROUSEL-HANDOFF.md. Verify related-paint arrows/end states, forward hover/motion, mobile overflow and selected-colour links, then typecheck/build after further edits. Keep local; do not publish.

## Final checkpoint

Sol final typecheck, whitespace check and webpack build passed,23/23 pages. Focused representative Epoxy checks passed for all15 records/five desktop slots, page/keyboard navigation and end states, homepage-equivalent forward hover (scale1.035,Z48,Y0,perspective800), reduced-motion fallback, colour-link context and390/320 page overflow. Root inspected desktop normal/hover and mobile captures, confirming complete cards and no clipped enlarged image. Report: `RELATED-PAINTS-CAROUSEL-QA-2026-11-14.md`.

The first harness waited on offscreen lazy-image decoding and was stopped; the successful retry explicitly loaded all15 images eagerly with a bounded decode wait. This checks assets and layout, not natural lazy-load timing. Physical touch/swipe, touch-hover runtime, tablet widths, every16product route and broad homepage/cart regressions were not repeated. Touch neutrality remains source-enforced. No further required work remains for this interaction; repeat focused checks only after new changes. No new client input blocks it; manufacturer data/services remain separate. Local only; no publication approval.
