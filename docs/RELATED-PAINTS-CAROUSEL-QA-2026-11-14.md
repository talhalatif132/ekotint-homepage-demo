# Related paints carousel QA — 14 November 2026

Local only; no publication. Sol changed no application source.

Final typecheck, whitespace check and webpack production build PASS, exit0;23/23 static pages. Focused Epoxy Chrome run PASS exit0. Evidence `/private/tmp/related-qa.json`; harness `/private/tmp/related-qa.cjs`.

- Fifteen other current products render; category/series ordering starts Eko Gleam, Synthetic Varnish, Hardener, Assez Gloss Enamel, Water Matt. All15pack images loaded. Desktop row1344px, card241.59px and28px gaps produce five slots.
- Next moved scrollLeft1348 beyond the first five. End disabled Next; Home disabled Previous. ArrowRight advanced one card; ArrowLeft returned to zero. No autoplay introduced in source.
- Hover computed matrix: scale1.035, translateZ48px, translateY0; parent perspective800px. Reduced motion computed transform none. Selected colour/name query persists on all15links; fresh unselected product produces pure paths.
-390/320 have no page overflow; mobile peek remains. No pageerror events.

Viewport captures `/private/tmp/related-desktop.png`, `/private/tmp/related-hover.png`, `/private/tmp/related-mobile.png`, after settled scroll and loaded packs. Root owns final visual review.

Initial harness stalled awaiting offscreen lazy-image decode and was stopped; no app failure claimed. Successful retry explicitly loaded images eagerly and bounded decode to5seconds. This validates assets, not their natural lazy-load timing. Physical touch/swipe, touch hover neutrality, tablet widths, all16product routes and broad cart/homepage regression were not repeated. Touch neutrality is source-enforced by hover media query. No data/price/assets/publication changes.

Root reviewed the desktop normal/hover and mobile captures and accepted the related-row composition for local user review. User publication approval remains absent.
