# Six Featured products — focused Sol QA

Root visually inspected the corrected decoded desktop start/end captures and the loaded mobile end capture: all six products are reachable with compact cards and legible names/prices. Premature desktop screenshots are excluded from visual evidence.

13 November2026. Exact-source typecheck, git diff whitespace check and webpack production build pass (23/23 static pages). Local preview3023 reused; no source edits, dependencies, publishing or port3000 actions.

At1440×900 and390×900, actual Featured count is6 in order: Water Matt, Clima Shield, Epoxy, Eko Shade, Eko Gleam, Primer Emulsion. All six image responses complete with naturalWidth1753, and all six decode successfully at row end. No page horizontal overflow.

1440: row1250px, card227.52px/gap24px, maximum five desktop slots retained. Initial previous disabled/next enabled. Next reaches scrollLeft251=max251 and exposes Primer Emulsion; next disables. Previous returns0 and disables.390: next reaches1073=max1073 and disables; previous reduces scrollLeft to944 with next enabled again. Changing filters resets scrollLeft0 at both widths. Unchanged category counts: Interior4, Exterior2, Wood & metal5, Roof1, Preparation4; returning Featured gives6/reset0.

Evidence: `/private/tmp/featured-six-qa.json`, script `/private/tmp/featured-six-qa.cjs`. Use corrected desktop captures `/private/tmp/featured-six-decoded-start-1440.png` and `/private/tmp/featured-six-decoded-end-1440.png`, plus `/private/tmp/featured-six-end-390.png`. Original desktop start/end captures were premature and showed blank packs; exclude them from visual evidence. Recapture used instant scrolling, visible image complete/nonzero checks, decode, two animation frames and600ms before awaited screenshot. All six had naturalWidth1753 and rendered y338.69; final Primer x1128.53 within viewport. Script `/private/tmp/featured-six-recapture.cjs`. Human composition review remains with root.

Bounded scope: reduced-motion pointer navigation and filter reset checked; broader strip/hover/keyboard/cart regressions were not repeated for this one-data-item change. This now exercises actual six-item production data, superseding the previous source-only six-plus limitation. Manufacturer prices/pack inputs remain pending internally. Local only; publication requires fresh approval.
