# Product tabs/navigation QA — 14 November 2026

Local only; no source edits, push or deployment. Existing auto-dirty next-env.d.ts preserved.

Final typecheck, diff whitespace check and webpack build PASS, exit0;23/23 static pages.

Wall Putty and Primer Emulsion browser assertions passed: exactly Description/Shade guide/Technical information; no product Reviews panel. End selects Technical information; ArrowRight wraps to Description; ArrowLeft wraps back. SelectedHEX/name persisted across related-product URLs. Initial pointer and keyboard Enter navigations reached correct H1 focus/end0 and had intermediate upward positions.

Robust arrival-aware diagnostics PASS exit0 (`/private/tmp/product-nav-diagnostic.json`): Wall Putty→Primer native scrollTo top0/behavior smooth invoked783ms after click,20intermediate positions; reverse navigation invoked519ms after click,18intermediates. Both started1184px down, ended0 and focused product H1. Reduced-motion navigation called behavior instant after459ms, ended0 with no intermediate easing. Sampler continued until destination URL/H1 focus and stable0 (15s bound).

Earlier fixed2.2s/6s samplers produced inconsistent failures and an initial reduced500ms assertion ran before route arrival. These are retained as inconclusive harness observations, superseded by destination-aware evidence. Diagnostic spy wrappers accumulated between runs, so identical duplicate call records in later cases are harness logging duplication, not evidence of duplicate application calls.

Limits: fresh390/320 layout, modifier/new-tab behaviour, unrelated direct navigation and reliable Back/Forward restoration were not completed in the final robust run. Earlier run traversed Back/Forward without error but did not persist enough restoration evidence to claim a pass. Existing responsive carousel evidence remains historical. No live-domain/browser-engine matrix, broad cart/hero regression or new screenshot. Source guards for popstate and onNavigate modifier exclusion were reviewed, not substituted for runtime passes.

## Final focused follow-up

390/320 runtime checks PASS: three tabs and no page overflow. Back/Forward actual-position evidence now recorded: destination Primer Emulsion was0 immediately before Back; Back restored Wall Putty1184 exactly; Forward restored Primer0, matching its pre-Back position. Evidence `/private/tmp/product-nav-history.json`. A prior run assumed Forward must be0 without preserving its pre-Back snapshot and failed; final recorded comparison supersedes that assumption.

Representative three-tab capture `/private/tmp/product-three-tabs.png`. Modifier/new-tab check remains INCONCLUSIVE: headless Meta+click did not emit the expected popup target within10seconds; no successful modifier result claimed. Follow-up process therefore exited1 at that final popup wait, after the recorded mobile/history checks passed. No further harness cycles or rebuild; application source unchanged. Unrelated direct-visit intent clearing was source-reviewed only. Earlier unrun mobile/history notes above are superseded by these results.
