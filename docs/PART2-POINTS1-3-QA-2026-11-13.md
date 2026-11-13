# Part 2 points 1–3 QA — 13 November 2026

Local only; no publication. No application code changed by Sol.

## Previous source checkpoint — superseded desktop layout

Before the user's later request to fit the desktop overview into one screen:

- `npm run typecheck`, `git diff --check`, `npm run build`: PASS, exit 0; 23/23 static pages.
- Bounded Chrome run: PASS. Clima Shield, Water Matt and Semi Plastic Emulsion at 1440/1280/1024 had exactly 0px scene/summary top/bottom difference. At 390/320 the scene/details stacked; no page overflow; support below both; disabled future upload; 50px swatch targets/40px discs.
- Swatch click, valid #AABBCC wall repaint, before opacity toggle and 4L colour/pack cart smoke passed.
- ArrowRight selected Shade guide; current custom HEX appeared; return action focused Choose your colour.
- Water Matt page4, Eko Gleam page3, Primer Emulsion page6, Epoxy page8 had correct anchors and HTTP200. Clima Shield mailto decoded to exact product/Assez Series request with percent-encoded spaces.
- Actually opened homepage Interior chooser: exactly one .hcs-backdrop, no inputs/asides/buttons in backdrop.
- Evidence `/private/tmp/part2-qa.json`; viewport captures `/private/tmp/part2-1440.png`, `/private/tmp/part2-390.png`. Desktop capture inspected and actual room photograph visible. The 1000px-high desktop capture still cut off the lower overview, motivating the user's subsequent compact-layout request; alignment alone does not prove screen fit.
- A subsequent all-twelve fallback run was stopped on root instruction when compact-layout work began; no result claimed.

## Current status

The compact desktop revision is complete. Final checks below supersede the previous desktop layout checkpoint.

Exact missing TDS files/mappings, genuine prices/availability remain client inputs. Keep all changes local; do not publish or implement points4–13.

## Compact source — fresh measured screen fit

Fresh Chrome run completed all 18 cases: Epoxy, Clima Shield and Semi Plastic Emulsion at four desktop viewports and 390x844/320x800. All desktop scene/summary edges match exactly. Measurements were taken after default navigation and scrollTo(0,0), without hiding content. All three products have these desktop results:

| Viewport | Scene/summary top | Scene/summary bottom | Add to cart bottom |
| --- | --- | --- | --- |
| 1440x900 |196.39|716.39|639.20|
| 1366x768 |196.39|697.23|637.05|
| 1280x800 |196.39|716.39|634.55|
| 1024x768 |196.39|695.58|627.52|

Both panels and purchase CTA fit above the viewport bottom in all twelve desktop cases. All eighteen cases have no page overflow and retain 50px targets/40px swatch discs. Mobile naturally stacks and scrolls. Evidence: `/private/tmp/part2-fit-qa.json`; Epoxy viewport captures `/private/tmp/part2-fit-1440.png`, `part2-fit-1366.png`, `part2-fit-1280.png`, `part2-fit-1024.png`. Sol and root inspected1366x768: actual photograph and complete details/purchase controls visible without clipping.

Fresh typecheck, diff whitespace check and final webpack production build PASS (exit0, 23/23 static pages).

Fresh compact-source interaction rerun PASS: swatch/valid HEX repaint, before toggle, 4L colour/pack cart smoke, ArrowRight Shade guide selection, selected colour summary, settled explicit return activation focusing Choose your colour, four PDF anchors/HTTP200, exact Clima Shield/Assez Series mailto and actual opened homepage Interior chooser (one backdrop, no extra controls). Evidence: `/private/tmp/part2-compact-interactions.json`.

Long-title captures `/private/tmp/part2-long-1366.png` and `/private/tmp/part2-long-390.png` were inspected by root and accepted: full desktop photo/details/packs/swatches/HEX/purchase controls, natural mobile stack. Sol initially suspected an incomplete rendered image from tool display; root inspection of the actual file confirmed complete content and resolved that concern.

Limits: the first fresh pointer activation of Return during automatic scrolling failed its focus assertion; settled DOM activation under reduced motion passed. A supplemental keyboard Enter check completed before the stop instruction took effect: PASS exit0, activeElement `semi-plastic-emulsion-colour-heading`, visible heading top370.95/bottom396.55 at1366x768 (`/private/tmp/part2-keyboard-focus.json`). Fresh real pointer activation was not repeated. Only Clima Shield was checked at runtime for missing-TDS mailto; the other eleven request links were not separately validated in the final compact source. No full cart regression, broader homepage/hero checks, browser-native PDF page navigation or official shade/price availability validation. No further checks were run after that completed supplemental command.

## Median layout checkpoint — final user refinement

After the user requested a balance between the original tall overview and the crowded compact view, root widened/tallened the photo and grouped summary metadata, colours and ordering with more space. Fresh measured QA covered Epoxy and long Semi Plastic Emulsion, each at1440x900,1366x768,1024x768 and390x844 (eight cases).

| Desktop viewport | Scene/summary top | Both bottoms | Add to cart bottom |
| --- | --- | --- | --- |
|1440x900|196.39|836.39|764.20|
|1366x768|196.39|756.39|684.20|
|1024x768|196.39|756.39|684.20|

All six desktop cases retain exactly matching scene/summary edges; both panels and purchase CTA fit within the viewport. Both390mobile cases naturally stack. All eight have no page overflow,50px swatch targets and40px discs. No hidden content was introduced for testing. The768px-high cases have11.61px below the overview, so shorter screens/browser zoom may scroll naturally.

Evidence `/private/tmp/part2-median-qa.json`; fresh Epoxy viewport captures `/private/tmp/part2-median-1440.png`, `part2-median-1366.png`, `part2-median-1024.png`, `part2-median-390.png`. Root visually accepted1440/1366 as balanced, complete photo/details/purchase controls. Fresh typecheck and whitespace checks PASS. Final median webpack production build PASS, exit0,23/23 static pages. Sol inspected390mobile capture: real photo, natural stack and readable packs with no horizontal clipping.

Earlier compact interaction/TDS/cart/keyboard results above are historical; these behaviours were not repeated after the median CSS/grouping change because their logic was unchanged. No broad regression or publication.
