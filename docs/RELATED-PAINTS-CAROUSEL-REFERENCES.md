# Related paints — hover and navigation

14 November 2026, Asia/Karachi. Local review only; no publication approval.

## User direction

The user supplied a screenshot of the product-page More from Ekotint row and asked that the pictured products hover like the homepage, with arrows for more choices. No message timestamp was supplied. The screenshot identifies related paint cards; the request’s word colours is interpreted as additional paint choices in that row. The existing main colour chooser remains separate. The assistant read the supplied CEO/user discussion and did not participate in the original CEO conversation.

Earlier CEO sections3–4 request a bucket approaching the viewer rather than an upward lift, and navigation arrows for overflow. See `CEO-STRIP-PRODUCT-REFINEMENTS.md` for that provenance. The latest instruction extends the established homepage treatment to current product-detail related cards.

## Implementation

- New `HomeRelatedPaints.tsx` and CSS module replace the fixed five-card section in the shared current16-product detail template. All15 other existing paints are browsable, ordered by same primary category then series, retaining the former first-five order. No products, colours, prices or availability claims are invented.
- Wide desktop keeps five cards. Tablet uses three/two; mobile exposes one card with a useful next-card peek. Measured overflow controls show Previous/Next paints, disabled at the ends, moving complete pages/cards. Native scrolling, row ArrowLeft/ArrowRight/Home/End and focus outlines remain. No autoplay.
- Image hover/focus matches the existing homepage’s800px perspective, translateZ48px plus scale1.035,360ms easing and soft grounding shadow. There is no upward translation. Dedicated image space and row gutters accommodate enlargement. Touch/reduced-motion stays neutral. Original transparent pack files and lettering remain untouched.
- Related links preserve an explicitly chosen colour HEX/name; initial unselected links remain plain product paths. Back to paints remains a real homepage link. The accepted median preview, colour controls, packs/cart, tabs, contact, hero order and shared footer are outside this change.

## References and limits

[Brighto Plastic Emulsion](https://brightopaints.com/products/plastic-emulsion) was rechecked through official extracted page text on14 November. It retains product/colour-information context; its related-row heading was not available in this extraction. The user’s earlier Brighto product-page screenshot supplies the visible recommendation-row reference. No current rendered animation/control measurement or copied competitor code/assets is claimed. Exact hover parameters come from the already-reviewed Ekotint homepage source (`product-presentation.css`), not a guessed competitor animation. The new component uses Ekotint’s established palette/type and small image-only enlargement.

Installed Next client-component/CSS guidance and the retained Sites local-preview workflow were read. No dependency or hosting changes.

## Validation

**Final Sol typecheck, whitespace check and webpack build passed (23/23 pages).** Focused Epoxy browser checks passed:15 related products/five desktop slots, Next beyond the first five, disabled ends, Home/End/arrow keys, exact forward-hover transform without upward translation, reduced-motion neutral state, selected/unselected links and no page overflow at390/320. All15 pack assets loaded in the bounded eager-image harness; natural lazy-loading timing was not verified. Root inspected desktop normal/hover and mobile captures and accepted the composition for local review. Exact evidence and unrun limits: `RELATED-PAINTS-CAROUSEL-QA-2026-11-14.md`; current handoff: `SOL-RELATED-PAINTS-CAROUSEL-HANDOFF.md`. UI agents did not run app tests/build; no full16-route or broad cart/homepage regression is claimed.

No new client input blocks this interaction. Actual manufacturer prices, approved shade compatibility, genuine reviews and real services remain separate pending inputs. Keep the work local; fresh user review/publication approval is required.
