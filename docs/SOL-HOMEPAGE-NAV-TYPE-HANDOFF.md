# Sol handoff — sharper homepage navigation

14 November 2026, Asia/Karachi. Local preview 3023; unrelated 3000 untouched. Astra implements; Sol handles focused browser/build validation. No push or deployment.

## Request and reference review

The user supplied two header crops and said the homepage labels were very light while the product-page labels were sharp, asking for the same sharpness on the homepage. The direct reference is the existing product header (`HomePaintShell.tsx` / `home-paint-shell.css`): Manrope 15px, weight600, #39313e. Message date14November; no finer timestamp supplied. CEO Part1 initially accepted the header/top strip, so this later correction is limited to navigation type, rather than a header redesign. Reread the Part1 attachment's opening header feedback and latest project handover; the assistant did not participate in the CEO discussion.

External reference rechecked14November: https://brightopaints.com/ . Official extracted text confirms its simple product/contact navigation structure only; it does not establish rendered font metrics. The user's product-page screenshot and local product styles determine this change. Installed Next CSS guide (`node_modules/next/dist/docs/01-app/01-getting-started/11-css.md`, Global CSS section) was read before editing; selectors remain scoped to the homepage because imported styles can persist across routes.

## Change

Only `src/app/hero-minimal.css`: homepage desktop links and Explore colours button now match product navigation at15px/600/#39313e (previous13px/500). Both Refined/Original comparison modes retain the stronger navigation. Narrow desktop at1001–1100px uses14px with the same weight/colour; mobile menu breakpoint is unchanged. Explicit hover/open-menu brand colour is retained without specificity conflicts. Header geometry, labels, logo, utility strip, icons, hero and product header are unchanged.

## Focused validation

- At1440px, compare actual homepage/product computed navigation font family, size, weight and colour; inspect a homepage header capture. Check the Refined/Original comparison class does not revert the navigation. Normal/hover/open Explore colours and visible keyboard focus should remain usable.
- At1024px, confirm14px/600 labels fit, no overlaps/page overflow. At390px, desktop nav stays hidden and the existing menu still opens; no mobile typography change is intended. No broad cart/hero/shade regression or new test suite for this CSS edit.
- One final webpack build and whitespace check. Typecheck is optional because no TS/TSX changed in this task; record any unrun validation honestly. Preserve preview3023. Write `HOMEPAGE-NAV-TYPE-QA-2026-11-14.md`; no application-source edits to make checks pass. Own any browser approval request and report pending yields promptly. Keep bounded.

## Final validation checkpoint

Sol whitespace check and webpack build passed (23/23 static pages, including framework TypeScript stage). Standalone typecheck was not repeated for this CSS-only change. At 1440px, both homepage comparison modes exactly matched the product navigation's computed Manrope / 15px / 600 / #39313e. Hover/open brand colour and visible keyboard focus passed; 1024px used 14px with no overflow, and 390px retained the hidden desktop navigation and working mobile menu. Root inspected `/private/tmp/homepage-nav-1440.png`; its purple rectangle is genuine keyboard focus. Exact evidence/limits: `HOMEPAGE-NAV-TYPE-QA-2026-11-14.md`. No broad hero/cart/shade regression, physical-device check or exhaustive geometry matrix was repeated.

No pending implementation or client input. Source remains local and unpushed/unpublished.

Copy/paste Sol prompt: Read docs/SOL-HOMEPAGE-NAV-TYPE-HANDOFF.md. Compare homepage navigation with the product header, check desktop/mobile fit and hover/focus, then build. Keep local; no push or deployment.

Copy/paste Sol prompt for later edits: Read docs/SOL-HOMEPAGE-NAV-TYPE-HANDOFF.md and its final QA report. After further header changes, recheck navigation styling and responsive fit. Keep local; no push or deployment.
