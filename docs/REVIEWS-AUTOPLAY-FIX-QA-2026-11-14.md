# Reviews autoplay hover fix QA — 14 November 2026

Local only; no publication. Sol changed no application source.

Cause confirmed in previous source: pointer entry anywhere in the reviews section set hovered=true and disabled the five-second timer. The earlier nine-review test kept the pointer outside and therefore did not cover the reported experience. Root removed this hover-only pause; keyboard focus, reduced motion and visibility guards remain.

Final `npm run typecheck`, `git diff --check` and `npm run build`: PASS, exit0; webpack generated23/23 static pages.

Focused browser assertions PASS against existing3023:

- 1440desktop with pointer actually over a visible review card: scrollLeft0→435 after six seconds, then435→869 after another six seconds, confirming timer rearm.
- 390mobile-width viewport with pointer over a visible card:0→359 after six seconds.
- Both widths: nine cards, zero visible review buttons/controls, no page overflow, card:hover confirmed true.
- Desktop keyboard focus stopped movement for5.5seconds. Reduced-motion preference also stopped movement for5.5seconds after focus was removed.

Evidence `/private/tmp/reviews-autoplay-fix-qa.json`; bounded script `/private/tmp/reviews-autoplay-fix-qa.cjs`. Browser required escalation and used session39411. No server actions or source edits.

Limits:390is a mobile viewport with mouse pointer, not a physical touch-device interaction. Wrap, hidden-tab/offscreen guards, native swipe, footer and broad homepage/product regressions were not repeated because this fix only removed hover pausing. Prior evidence for those behaviours remains historical. Review entries remain fictional authorised preview content; genuine customer reviews are still pending. Keep local; do not publish.
