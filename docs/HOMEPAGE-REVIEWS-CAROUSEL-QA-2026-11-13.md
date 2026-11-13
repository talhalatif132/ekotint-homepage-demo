# Reviews carousel QA — 13 November 2026

Sol focused QA on `http://127.0.0.1:3023`, preserving the UI source. The user subsequently authorized deployment after removing “Share your experience” and strengthening the three trust links; root owns packaging/publication. No deployment or settings action was performed by this QA agent.

## Passed

- Final `npm run typecheck` and `git diff --check` after the latest CTA/CSS changes.
- Browser card counts: 1440px = 3, 1920px = 4, 900px = 2, 390px = 1. Document width matched viewport width at all four sizes.
- Off-screen position held during a 5.2-second wait. In-view/no-hover auto state (`aria-live="off"`) advanced from 1–3 to 2–4 after the five-second interval; manual Next then advanced to 3–5.
- Pause held its position for 5.2 seconds. Play resumed movement. Reduced-motion preference disabled the playback button and held position for 5.2 seconds. Keyboard End followed by Next wrapped to the beginning.
- Six story records and the supplied technical-guide href remain in the DOM. FAQ/advice stays absent and the colour section remains immediately after products.
- No page errors during the successful focused responsive/playback sequence.
- Source check after root’s final polish confirmed the Share your experience CTA is absent, trust-link headings are 15px/600/#3e2a4c, supporting text 14px/500/#4d3d5a, and leading icon strokes 1.65. The existing six demo records/avatars remain; source does not add star ratings.

The first in-view timer assertion was too early because the harness allowed a long smooth page scroll. A narrow diagnostic using instant scroll and the actual auto-state guard confirmed advancement; no source fix was needed. Hover, keyboard-focus and document-hidden guards were inspected in source, but were not each subjected to a separate five-second timing run. Carousel native swipe was not separately exercised in this focused run.

Captures: `/private/tmp/ekotint-local-reviews-1440.png`, `/private/tmp/ekotint-local-reviews-390.png`. Successful browser result: `/private/tmp/ekotint-reviews-qa-final.json`. The initial harness failure remains separately in `/private/tmp/ekotint-reviews-qa.json`; it is superseded by the diagnostic and successful focused run.

## Release build checkpoint

`npm run build` (`next build --webpack`) passed, including its fresh TypeScript check and 23/23 static generation tasks. Fresh `out/index.html` contains the circle palette and compact reviews and omits both the Share your experience CTA and advice section. All 16 current product HTML exports are present. `out/` is ready for root’s same current-routes-only packaging; older catalogue index and three older-only product exports still need filtering as documented in the prior release QA.

Only the owned 3023 preview PID 70678 was stopped for the build. `npm run dev` was restarted on 3023 in tool session 86081. Port 3000 was untouched. No app source edits were made by QA.
