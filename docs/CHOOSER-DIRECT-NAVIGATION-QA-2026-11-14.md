# Chooser direct navigation QA — 14 November 2026

Local only; validation made no application-source changes, push or deployment. Final typecheck, diff whitespace check and webpack build PASS, exit0;23/23 static pages.

Focused browser retry PASS, exit0. At1440px using pointer activation and390px using keyboard Enter, intercepted the Water Matt navigation request and held it for at least500ms. While pending: chooser remained present, homepage path remained `/`, body overflow remained hidden. After release: actual Water Matt route arrived with `colour=FCEEDE&colourName=Soft+Vanilla`; painted wall was #FCEEDE, modal portal was absent and body overflow restored. Thus no forced homepage reveal occurred during the held navigation.

Explicit Close, Escape and backdrop dismissal each removed the chooser and restored body scrolling. Backdrop dismissal was a targeted native mousedown event, rather than a physical pointer-position test. Evidence `/private/tmp/chooser-direct-qa.json`; harness `/private/tmp/chooser-direct-qa.cjs`.

Initial run passed its pending-state assertions but crashed at harness request-interception cleanup; corrected retry kept interception active and completed cleanly. This was not an app defect. No new captures, broad cart/hero/related-navigation regression or modifier/new-tab popup loop. Both activation modes used the same representative product/Soft Vanilla rather than every shade/product; explicit Close/Escape/backdrop focus return was not separately asserted. Existing real Link semantics remain source-reviewed. No port3000/server/deployment operations.
