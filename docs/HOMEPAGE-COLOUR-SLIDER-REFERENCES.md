# Homepage structure, circle palette and reviews — 13 November 2026

This is a new local UI pass after the first Vercel publication. The current live deployment remains `dpl_6NSAPEMRpHgW9qKFzKxG8qQtiBe8` at https://ekotint-paints-demo.vercel.app; do not claim this newer local work was published.

## User / CEO context

The user supplied new CEO feedback and screenshots on 13 November (screenshot filenames approximately 03:24–03:42):

- Hide the entire Good questions / Great beginnings FAQ and technical-guidance block; a separate page is planned. Do not create that page yet.
- Place the colour section immediately beneath Explore Ekotint paints, including its cards and disabled collection button.
- Replace the large arched cards with compact circle sliders under Interior / Exterior, opening a product chooser on click. Replace the promotional heading with useful centred wording.
- Make the tabs show different colours and centre the arrow buttons on the discs rather than the full text-and-disc row.
- Explain Brighto's code/name labels and include a pale vanilla idea. Display genuine Ekotint codes only when supplied; use original names/HEX in this digital prototype.
- Replace the single oversized review with multiple cards visible (reference examples showed two and three/four) and automatic movement.

Earlier recorded CEO messages **02:24:18 / 02:25:52 / 02:32:55** explain the concern about colour/product context and the Brighto reference. Earlier **02:26:59** described FAQs broadly as acceptable; the user's newer instruction supersedes that for homepage placement. The assistant read those records; it did not participate in the original CEO conversation. The precise current requirements above come from the user, not an invented transcript.

## Reference review and limits

Official [Brighto homepage](https://brightopaints.com/) and [Plastic Emulsion](https://brightopaints.com/products/plastic-emulsion), reviewed 13 November 2026 through text and raw HTML, confirm circle-based interior/exterior shade selection leading to a product slider. The supplied screenshots establish the visible interaction/geometry; no competitor product checkout was exercised. We reuse the relationship (colour → contextual product choice), not competitor assets, copy, code or brand styling.

The product list maps **3-1-2 to Hush Rose**, **3-9-1 to Vanilla Slices** and **4-30-2 to Bayou**. These are Brighto shade identifiers, not supplied Ekotint codes. The visible homepage `3-9-1` circle uses inline RGB `(252, 238, 222)`, HEX `#FCEEDE`. Other theme configuration lists include a conflicting alternative value, so this is treated only as a screen-colour reference. Ekotint's prototype adds the original idea name **Soft Vanilla**, with HEX `#FCEEDE`; no physical match or official paint-code claim is made. No other competitor shade codes/names are added as Ekotint catalogue data.

An attempted Brighto `/faqs` URL was inaccessible; no standalone FAQ content/design claim is derived from that failed request. Hiding the existing block follows the user's explicit instruction. Review layout follows the supplied multi-card reference, preserving existing local copy rather than copying its unrelated business/driver testimonials or fabricating ratings.

## Final colour / structure implementation

- `homeSectionVisibility.advice=false` removes the entire FAQ section and its wrapper from rendering, preserving copy/CSS for a future page. Paint advice shortcuts in homepage/header/footer/mobile/legacy shell share the flag. The review trust shortcut links to the real technical PDF, and the legacy catalogue help link to Contact; no dead visible advice anchor remains.
- `HomeColourPalette` renders directly after products, headed **Explore Ekotint colours**. The original 28 visible ideas remain, with Soft Vanilla added: 29 total, plus four older Blues retained in known/saved/URL lookup data. Original indexed `shades[]` is unchanged. Existing brand base HEX values and four total Blues remain.
- Interior has 16 softer/neutrals/lilac/rose ideas; Exterior has 13 stone/green/earth/deeper ideas, with no overlap between these curated display sets. This is design curation, not manufacturer-confirmed shade availability. Switching surfaces resets family filtering; header family navigation switches surface if necessary to show its ideas. Family search and saved/custom colours remain.
- Native horizontal scroll/snap and previous/next controls support pointer, keyboard and touch. ResizeObserver aligns arrows to the measured disc centre. Reduced motion uses immediate scrolling.
- The shared homepage dialog now renders `HomeColourProductChooser` for circle/search/saved shade selection. Interior cycles the four current Interior products, Exterior the two current Exterior products. Name/HEX/save/product/price/CTA stay connected. Interior uses the existing controlled room as decorative backdrop; Exterior the original exterior image, explicitly illustrative. No extra colour editor, invented compatibility, real order or backend is introduced.
- Product links carry HEX and colourName into the existing product page. Soft Vanilla is also present in its swatch ideas through a shared constant. No copied Brighto code is substituted for a real Ekotint identifier.

## Validation and publication

Sol typecheck and focused local browser checks passed for the colour/structure work; see `HOMEPAGE-COLOUR-SLIDER-QA-2026-11-13.md` for exact evidence and harness limits. Root viewed the desktop palette and chooser captures. Review-carousel validation is recorded separately after its source implementation. No production build or new deployment has been performed for this local pass. A future approved release must rebuild and refresh the Vercel staging folder; the currently prepared/published static folder is the previous baseline.

## Final deployment checkpoint

The user later explicitly requested removing Share your experience, sharpening the guidance/contact links and deploying. This completed combined release is now READY at https://ekotint-paints-demo.vercel.app (deployment `dpl_B5XdG3iNzHyzQYKcmq8CGPzCLtjr`). Source/behaviour and fresh production build passed the focused Sol checks; see both colour-slider and reviews-carousel QA reports. Root verified public HTTP/content after deployment. Earlier local-only statements describe the preparation phase, not the current live state. Future changes need new publication approval.
