# Sol handoff: chooser to product without homepage flash

14 November 2026. Read AGENTS.md, latest handover and `CHOOSER-DIRECT-NAVIGATION-REFERENCES.md`. Astra implements; Sol handles focused validation/build. Preview 3023; leave unrelated 3000 untouched. Local only; no push, publication or external-domain status check.

## Change

`HomeColourProductChooser.tsx` no longer closes the chooser in product Link onClick. Its unused onClose prop and the callback supplied from `src/app/page.tsx` are removed. Next retains the chooser until route commit. URLs/HEX/name, parent Close/Escape/backdrop/focus/body cleanup, other modal actions and prior product navigation work remain.

## Focused validation

1. Homepage → Interior Soft Linen chooser → Water Matt: hold the product navigation response briefly (a controlled browser intercept is appropriate), then click View paint. While pending, assert the chooser is still visible, current homepage URL remains and body scroll remains locked. Release navigation; assert the actual product URL, correct title and exact selected HEX/name. No stale portal/body lock after arrival. Repeat using keyboard Enter, preferably a second paint; keep the harness bounded and measure relative to route arrival.
2. Explicit Close, Escape and backdrop still dismiss the chooser and restore scrolling. Real Link/new-tab semantics are retained by source; one bounded browser modifier check is optional, do not repeat the previous inconclusive popup-wait loop.
3. One representative 390px chooser journey if useful; no broad visual/cart/hero regression for this small handler removal. No new test suite is requested.
4. Typecheck, whitespace check and one webpack static build after source settled; preserve/restore preview if needed. Report actual passes, failures and unrun limits in `CHOOSER-DIRECT-NAVIGATION-QA-2026-11-14.md`. Do not edit app source to make tests pass. If browser approval is required, own that request and report the pending yield promptly.

No client input blocks this correction. Manufacturer shade availability and deferred services remain separate. Prior related-product smooth-scroll and hidden product Reviews must remain.

Copy/paste Sol prompt: Read docs/SOL-CHOOSER-DIRECT-NAVIGATION-HANDOFF.md. Check that View paint keeps the chooser visible until the product page loads, carries the selected colour, and leaves no modal/scroll lock; verify dismissal, then typecheck/build. Local only; no push or deployment.

## Final validation checkpoint

Sol typecheck/whitespace/build passed (23/23 static pages). Actual held-request checks passed at 1440px pointer and 390px Enter: chooser/homepage path/body lock retained for at least 500ms, then Water Matt and exact Soft Vanilla/#FCEEDE arrived, with no portal or body lock left behind. Close/Escape/backdrop dismissal passed. Backdrop used a native targeted event; no physical-pointer dismissal/focus-return assertion or all-product/broad regression. The initial interception cleanup race was a harness error; one corrected retry passed. See `CHOOSER-DIRECT-NAVIGATION-QA-2026-11-14.md` for evidence and exact limits. No pending implementation/client input; no push or deployment.

Copy/paste Sol prompt for later edits: Read docs/SOL-CHOOSER-DIRECT-NAVIGATION-HANDOFF.md and its final QA report. After further changes, recheck affected chooser navigation and cleanup, then typecheck/build. Keep local; no push or deployment.
