# Sol handoff — hide product Reviews and ease related-product navigation

14 November 2026. Read `AGENTS.md`, newest handover entry and `PRODUCT-TABS-NAVIGATION-REFERENCES.md`. Local preview 3023; leave unrelated port 3000 untouched. Astra implements; Sol owns validation/build. No source push, deployment or external-domain status check.

## Changes

- `HomePaintProductView.tsx`: Reviews trigger and panel are gated off, source/data retained. Three visible information tabs; keyboard indexing uses that visible list. A one-shot related-product navigation effect focuses the new H1 without a jump and smoothly scrolls to top, with reduced-motion instant fallback. H1 is programmatically focusable.
- `HomeRelatedPaints.tsx`: existing product URLs/colour context retained; native client navigation uses `scroll={false}` and onNavigate intent.
- `home-product-navigation.ts`: in-memory one-shot product ID, clears on consume and Back/Forward; no storage, URL flag, timeout delay or custom history manipulation.

## Focused checks

1. Wall Putty and a second current product: exactly Description / Shade guide / Technical information; Reviews trigger, panel and empty message absent. Other panels work; ArrowLeft/Right wrap, Home/End reach visible endpoints. Homepage review carousel unchanged.
2. Normal motion at desktop and mobile: scroll down to related paints, click a card and sample document scroll over animation frames. New title/URL must be correct; start below preview, intermediate positions should show upward easing, end at top with product H1 focused. Repeat another related click and keyboard Enter. No delayed second jump. Explicit HEX/name carry-over retained; initial unselected links stay plain.
3. Reduced motion reaches the new product immediately. Back/Forward preserve restoration without a stale custom scroll. Modifier/new-tab navigation leaves original page position unchanged; no source intent persists into unrelated navigation/direct visit.
4. Representative 390/320 widths: information tabs and related row remain usable without page overflow. Existing related arrows/forward hover and main colour/pack/cart need only focused smoke if these changes could affect them. No full broad regression unless evidence justifies it.
5. Typecheck, whitespace check and webpack static build after source settled. Inspect current-product output for absent Reviews panels if helpful. Preserve preview when building. Report actual passes, failures and unrun checks; no invented manual results.

Write `PRODUCT-TABS-NAVIGATION-QA-2026-11-14.md`, with one representative capture if useful and exact timing/scroll evidence. If a browser approval is required, Sol owns that one request and should report the pending yield promptly; build can proceed separately. Do not write app source to make tests pass.

Copy/paste prompt: Read docs/SOL-PRODUCT-TABS-NAVIGATION-HANDOFF.md. Verify three product tabs and smooth related-paint navigation, colour context, reduced motion and history; then typecheck/build. Keep local; no push or deployment.

## Final validation checkpoint

Sol typecheck/diff/build passed (23/23 pages). Focused browser checks passed for three visible tabs/no product Reviews panel, keyboard tab wrapping/endpoints, repeated pointer/Enter related navigation with actual intermediate upward scroll positions, final top/H1 focus, selected-colour URLs, reduced-motion instant fallback, 390/320 no overflow and recorded Back/Forward restoration. Root accepted `/private/tmp/product-three-tabs.png`; the focus rectangle is genuine keyboard focus. Exact scroll evidence and prior harness timing failures are in `PRODUCT-TABS-NAVIGATION-QA-2026-11-14.md`. Headless modifier/new-tab testing remained inconclusive (popup target wait), and unrelated direct navigation/broad service/cart/hero regressions were not repeated. No application defect established by the harness timeouts; no further cycles were run. No pending required implementation or client input; new UI remains local and unpushed/unpublished.

Copy/paste Sol prompt for subsequent edits: Read docs/SOL-PRODUCT-TABS-NAVIGATION-HANDOFF.md and its final QA report. If source changes, recheck affected tabs/navigation and typecheck/build. Keep local; no push or deployment.
