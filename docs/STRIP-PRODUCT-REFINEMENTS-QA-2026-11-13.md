# Strip and product refinements — Sol QA

13 November2026. Local only; no publication. Read current AGENTS/handoff/CEO sections3–4 notes. Existing Chrome/Puppeteer and preview3023 used; no dependencies installed, UI edits, server stop or port3000 actions.

## Verified

- Typecheck and git diff whitespace check pass. Initial webpack production build passes all23 generated pages. Final copy-only revision received a second typecheck/whitespace check; final exact-source webpack build also passes23/23 static pages.
- Browser matrix320/390/768/1024/1440, all six categories: count5 Featured/4 Interior/2 Exterior/5 Wood & metal/1 Roof/4 Preparation. Both Semi Plastic entries remain in Interior. No page horizontal overflow. Tab gaps28/32/56px match phone/tablet/desktop. Every category starts scrollLeft0. Overflow rows show navigation with previous disabled at start and next disabled at exact scroll end. Pointer next reaches the end; buttons stay within viewport. Fitting categories have no buttons. Wide desktop shows five Featured; Roof matches card width/height of other categories (227.52×311.58 desktop,220×296.58 at390). No roof split panel.
- Desktop hover computes matrix3d scale1.035/Z48 and Ytranslation0. Switching reduced motion while hovered computes identity, neutralising legacy lift/shrink. Focus styles exist; actual strip keyboard entry and next Tab reach real links.
- Strip has two equal1857.64px groups and3715.28px track,62s animation. Repeat is aria-hidden with all six tabindex−1. Hover pauses. Focus removes animation, hides repeat, wraps all real links within viewport.390 reduced motion likewise static, repeat hidden, all six links within21.44–368.56px and no overflow. Four hash destinations exist; telephone URL correct; technical PDF target_blank and HTTP200. Source visibility listener pauses hidden pages; no actual background-tab test performed.
- Main row has no repeated Pack size text and one central note. Final source copy is “Contact Ekotint for current prices and pack sizes.” after root removed Demo prefix to preserve the prior user instruction. Featured amounts remain2850/3450/4950/4250/1750 internally illustrative. Explore all products remains disabled. WaterMatt and EkoShade detail routes HTTP200. Product links point to actual routes.
- No browser page errors observed.

## Capture correction and evidence

Initial captures were premature after scroll, before lazy product images loaded; they must NOT be used as visual pass evidence. Recaptured after visible images complete/nonzero natural dimensions and decode. All Featured and Roof image records are complete, display:block, opacity1 with nonzero rendered dimensions in `/private/tmp/strip-products-images.json`.

Use these decoded captures:

- `/private/tmp/strip-products-ready-1440.png`
- `/private/tmp/strip-products-ready-390.png`
- `/private/tmp/strip-products-roof-ready-1440.png`
- `/private/tmp/strip-products-roof-ready-390.png`
- `/private/tmp/strip-only-1440.png` (element-only strip capture; prior strip-moving capture scrolled to products and is not strip evidence)

Root visually inspected all four decoded Featured/Roof desktop/mobile captures and the actual element-only strip capture. Packs are visible, uniform, compact and retain their original art; labels/prices remain legible. This visual check does not extend the unrun interaction coverage below.

Raw evidence `/private/tmp/strip-products-qa.json`, `/private/tmp/strip-products-extra.json`, `/private/tmp/strip-products-images.json`; scripts use matching names under `/private/tmp`.

## Bounded limitations

No fake sixth Featured record added; six-plus overflow cap source-reviewed only. No full62s seam observation, actual hidden-tab test, full keyboard traversal, native swipe/trackpad test,800/801 boundary capture or live accessibility-tree audit. No selected-colour query arrival/cart transaction regression this turn; existing callback wiring source retained. Focus wrapping increases strip height by design. Root reviewed resting composition/sharpness in decoded captures; no separate hover screenshot was retained and final user visual approval remains pending. No claim of complete accessibility or all-route regression. Actual manufacturer prices/packs remain pending. Fresh approval required before publishing.
