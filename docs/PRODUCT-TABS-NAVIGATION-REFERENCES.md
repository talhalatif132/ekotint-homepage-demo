# Product information tabs and related-paint navigation

14 November 2026, Asia/Karachi.

## User instructions

The user supplied the Wall Putty Reviews-tab screenshot and asked why the section had been added. The assistant explained that the CEO's Part 2 point 8 asked to research separating company/product reviews, and that adding an extra tab was an implementation interpretation. The user explicitly replied **“hide it”**. This supersedes the earlier visible fourth-tab implementation; the user did not ask to hide homepage customer reviews.

During the same task the user supplied the More from Ekotint row screenshot and said **“when i click one of then it immedeat go the upward section it should be ease in some thing like that”**. Implement eased upward movement into the newly selected paint's preview. These supplied messages have no timestamps beyond this session date. The assistant read the CEO/user discussion and did not participate in the original CEO conversation.

## Implementation

- Shared current-product template filters Reviews out of the visible tabs and does not render its panel. Renderer, styles and separate review collections remain available behind `showProductReviews = false`; homepage review content/playback stays unchanged.
- Related-paint links retain real URLs and selected colour context, with `scroll={false}` to avoid Next's immediate page-position handling. `onNavigate` records only a genuine same-tab client navigation. The destination consumes a single in-memory intent after mounting, focuses the new product heading without scrolling, then calls native smooth scrolling to the top. Reduced motion uses immediate scrolling.
- The one-shot intent is not persisted or included in URLs. Popstate clears it so Back/Forward retain native restoration. Consuming inside the animation-frame callback allows the development effect setup/cleanup cycle without losing the navigation intent. Initial direct visits, modified/new-tab links and other links do not request this scroll.
- No images, product order, carousel arrows/hover, price/pack/cart, other information panels or homepage layout changed.

## References checked 14 November 2026

- [Brighto Plastic Emulsion](https://brightopaints.com/products/plastic-emulsion): existing reference for product information groups and related products. Reviewed official extracted text only; no claim that Brighto has this precise scroll timing or transition, and no new fourth tab is justified by the reference.
- Installed Next documentation: `node_modules/next/dist/docs/01-app/03-api-reference/02-components/link.md`, onNavigate and scroll sections. Confirms `scroll={false}` and that onNavigate excludes modifier-key/new-tab, download and external-link actions. CSS guide `01-app/01-getting-started/11-css.md` was also read; no new CSS system is introduced.
- [MDN Window.scrollTo](https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo): native smooth/instant options. Browser controls the easing/duration; no fixed-duration or competitor-motion claim is made.

## Validation

Sol typecheck, whitespace check and webpack static build passed (23/23 pages). Focused browser evidence verifies three tabs/no product Reviews panel, tab endpoints/wrapping, selected-colour carry-over, repeated pointer/keyboard navigation, intermediate upward movement with final top/H1 focus, reduced-motion instant fallback, 390/320 fit and recorded Back/Forward restoration. Root inspected the three-tab capture. Modifier/new-tab runtime testing was inconclusive in headless Chrome; unrelated direct navigation and broad regressions remain unrun. Exact evidence and harness limits: `PRODUCT-TABS-NAVIGATION-QA-2026-11-14.md`. New work is local for review: no GitHub source push or website deployment. Existing GitHub backup/author choice remains unchanged.
