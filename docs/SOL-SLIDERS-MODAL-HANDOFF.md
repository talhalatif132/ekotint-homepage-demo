# Sol handoff — conditional colour autoplay and modal centring

Latest timing override (15 November): user requested reducing the delay “to30percent”; root stated5seconds→1.5seconds. Shared HomeColourPalette setTimeout now1500ms for both surfaces; current TWO-shade movement unchanged, along with all interaction/motion/visibility guards. This supersedes all prior five-second timing notes below. `git diff --check`/source review only in this task; Sol should verify in-view Interior/Exterior resume after approximately1.5seconds idle following scroll settlement, two-step movement and reduced-motion pause, then typecheck/build once. No broad retest, push or deployment.

Latest modal-only confirmation: user clarified the product boxes were understood and requested only centring the modal. The existing working-tree CSS already satisfies this; root inspected its diff, saved desktop capture and eight-case geometry evidence. No application changes, new tests/build, push or deployment in this confirmation task. Retain the previously recorded QA limits; no repeat checks needed without source changes.

15 November 2026. Read AGENTS.md, latest handover and `SLIDERS-MODAL-REFERENCES-2026-11-15.md`. Astra implements; Sol validates/builds. Preview3023; unrelated3000 untouched. Local only: do not deploy/push. Earlier publication approval was fulfilled.

## Settled implementation

- `HomeColourPalette.tsx`: five-second one-item scroll autoplay, instant wrap, view/overflow/reduced-motion/document/keyboard-focus/pointer guards and timer reset on scrolling. No hover pause. Existing arrows/swipe remain; original observer/reset still handles surface/family changes.
- `page.tsx`: passes paused=true whenever homepage modal/mobile menu is open.
- `colour-chooser.css`: explicit viewport-centred overlay/dialog, bounded scrolling and vertically balanced right pane; left-aligned content retained, enquiry action retains intrinsic width.
- `HomeProductCarousel.tsx` unchanged: Brighto's actual products were manual; only lower colour tracks autoplay. Your reference browser evidence informed this condition, not a guess from the hero.

## Focused checks

1. At1440/390, actual in-view Interior row moves after5seconds, then again; resting pointer does not pause. Exterior surface change resets to beginning and also autoplays. No duplicate cards/automatic selection. Original arrows work and manual scrolling restarts a full dwell. One end-to-start wrap check. Products remain manual with arrows.
2. Reduced motion prevents auto movement. Keyboard focus-visible within colour rail and open chooser pause it; changing palette/family cancels stale timers and a non-overflow row stays still. Offscreen row does not advance. Keep timing harness bounded and relative to settled scroll events; no exhaustive timing matrix required.
3. Interior/four-paint and Exterior/two-paint chooser at1440×900,1366×768 and390/320 widths: viewport-centre error <=2px, no page/inner horizontal overflow, right content balanced on desktop. Small/short screens retain internal scroll access to all choices/enquiry and reachable Close. Inspect desktop Exterior and one mobile capture. Do not centre the text itself or resize images to satisfy a harness.
4. Close/Escape/backdrop/focus return and one actual View paint selected-colour arrival remain. Keep the modal visible until route commit. No broad cart/hero/review tests or external services; no new suite. Use explicit hydration/readiness before clicking, DOMContentLoaded rather than networkidle on autoplay pages, based on the last release harness limits.
5. Typecheck, whitespace check and one final webpack build after source settles. Write `SLIDERS-MODAL-QA-2026-11-15.md` with actual results/capture paths/limits. Own browser approval and report pending yield promptly. No app edits to make tests pass; report defects to root.

## Final checkpoint

Sol typecheck/whitespace/webpack build23/23 passed. Colour timing, wrap, reduced motion and keyboard pause passed. Eight settled Interior/Exterior geometry cases passed at1440/1366/390/320 with exact centre/no horizontal overflow; root accepted desktop/mobile captures. See `SLIDERS-MODAL-QA-2026-11-15.md` for DOM-activation layout testing, unrun guards and immediate arrival-colour snapshot limits. No additional broad retesting is requested. No client inputs block this change. Manufacturer compatibility/reviews/services remain separate deferrals. Existing disabled catalogue/upload and current published site remain. Local only; no push/deployment.

Copy/paste Sol prompt: Read docs/SOL-SLIDERS-MODAL-HANDOFF.md and docs/SLIDERS-MODAL-QA-2026-11-15.md. Validation/build passed; preserve recorded limits and only retest if source changes. Keep local; no push or deployment.

## Latest user step-size correction

User now supplies the Exterior circles screenshot: “these are ssliding one one one it shoudl skip 2”. Root interprets as moving TWO shades per transition, clearly communicated to user, not skipping two then moving three. Shared twoColourSteps measures actual item width+gap×2; autoplay and both arrow directions use it for Interior/Exterior at all sizes. Existing five-second dwell, clipping at final remainder, instant wrap/reset, guards and product/manual distinction retained. Earlier one-item cadence is superseded by this explicit request. Official Brighto reference already checked15November; exact two-step count comes from user, not an invented competitor claim.

Combine final focused check with SOL-REVIEW-LINKS-HANDOFF.md: at1440 hydrated Interior/Exterior verify one autoplay movement and arrows advance two measured pitches (end remainder may clamp),390 arrow fit, reduced-motion manual stays available. No full guard matrix/chooser retries. One typecheck/whitespace/build and export absence of removed review links, retained review cards/contact order. Record actual runtime limits if local hydration fails; no repeated unbounded retries. Local only, no push/deploy.

Final combined results: type/whitespace/build23/23 passed; actual hydrated1440 Interior/Exterior auto+Next moved388px for193.92px pitch,390 reduced manual267px for134.05px pitch (snap/rounding tolerance), no overflow. Static export confirms removed review-link labels, retained9reviews/contact order. Exact evidence/limits: SLIDERS-MODAL-QA-2026-11-15.md. No broad retest required. Old Exterior-popup runtime image capture remains unverified; source/build restoration verified. Copy/paste Sol prompt: Read docs/SOL-SLIDERS-MODAL-HANDOFF.md and docs/SOL-REVIEW-LINKS-HANDOFF.md. Final checks passed; retain recorded limits and only retest new changes. Local only, no push or deployment.
