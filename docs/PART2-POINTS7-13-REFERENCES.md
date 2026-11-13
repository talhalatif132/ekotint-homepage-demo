# Part 2 — points 7–13: implementation and references

14 November 2026, Asia/Karachi. Local review only; no publication approval.

## User direction and precedence

The user supplied the complete CEO feedback for points7–13, first requested an explanation, then explicitly instructed: “dont check status for now plz start work i shared the chat with u”. This authorizes implementation of the remaining frontend work. No timestamps were supplied for these statements; the assistant read the CEO/user discussion and did not participate in the original CEO conversation. The earlier full Part2 translation is retained at `/Users/sam/.codex-account2/attachments/4ab5f073-ae8e-4f1b-b8d4-d08a84501558/Pasted text.txt`.

- Point7: selecting a shade should lead to the paints actually available in that shade, with a simpler premium presentation. The CEO questioned an “Accessories” label. Current source has no Accessories text/category; it contains the Assez paint series. Do not invent tools/accessory products or claim a particular mishearing as fact. The new chooser presents plain product names/finishes without range-label clutter.
- Point8: distinguish individual-product feedback from company/overall customer experiences; research industry practice before choosing an approach.
- Point9: hide the manufacturer/People Behind Your Paint block, yellow exterior feature and Featured finishes/enamel block temporarily, retaining source for later decisions. This supersedes point4’s earlier keep-for-now instruction for the starting-point items contained in the manufacturer block.
- Point10: refine contact presentation and use consistent contact details.
- Points11–12: primary sequence Hero → Paint products/categories → Interior/Exterior colour ideas → Customer reviews → Contact → Footer. Keep established product-page refinements and polish the remaining journey.
- Point13: complete desktop frontend for local review, then await client approval/data before later adjustments/publication. No new backend, category inventory, manufacturer compatibility or real-review data is implied.

The user separately deferred the old live domain's Dangerous-warning/status investigation. No further status research or hosting/security changes are part of this task.

## Implemented frontend

### Shade-to-product journey

`HomeColourProductChooser.tsx` now shows the complete relevant paint selection together: four Interior candidates or two Exterior candidates, each with a small original pack image, product name, finish and direct product link. It retains a sample-room preview, selected colour name/HEX, save control and a contextual enquiry action. Removed the one-product-at-a-time carousel, large bucket overlay, repeated prices and repeated series labels from this chooser. Only duplicate product names receive a series prefix, distinguishing Assez Semi Plastic Emulsion from Premium Semi Plastic Emulsion. Existing source image files and hero imagery are untouched. Exterior imagery is labelled inspiration, not a recoloured proof.

`home-shade-products.ts` separates verified manufacturer relationships from surface browsing. A confirmed entry requires matching HEX/surface, product IDs and a recorded source; the matching product IDs appear. A confirmed relationship overrides the provisional primary category, so a finish with overlapping uses is not silently omitted; primary-category filtering is used only for unconfirmed browsing. Explicit confirmed-empty entries produce an empty result. Unknown shades fall back to clearly labelled Paints to explore, with a concise request to confirm the shade. **The real compatibility collection is empty because the client has not supplied it.** Category or arbitrary HEX alone cannot establish availability, and no fictitious matrix is populated. The frontend handles confirmed results; the client must supply approved relationships before those claims can be displayed. This is shade compatibility, not live stock checking. Product links preserve chosen colour/name; enquiries preserve the selected colour preference. Current detail HEX, 1/4/16L, quantity/cart, upload placeholder and sample-room controls remain.

### Reviews

Official references support using both types for distinct purposes: homepage company experiences, product-page feedback attached to the exact product. `home-reviews.ts` has separate typed company/product collections, required product ID on product entries, and approved-status/permission/source gates. Homepage reads only company records; product pages read only their own product records. No automatic copying or aggregate rating is added. The nine previously authorised fictional homepage samples remain separate in their existing local preview array, without new quotes/stars/verified claims. Genuine collections are empty. The legacy empty `homeCustomerReviews` export is retained with a migration comment.

Added a fourth Reviews tab to the shared16-product template, with an honest empty state and the existing product enquiry action. Existing arrow/Home/End tab navigation includes the new tab; mobile tab overflow is contained. This is a renderer/data separation, not review submission, moderation service or storage.

### Visibility, order and contact

Three visibility flags in `homeSectionVisibility` hide the requested blocks while retaining their markup/content/styles. FAQ/advice stays hidden under its existing flag. About links are conditional in homepage desktop/mobile navigation, current product shell, footer and help strip, so hidden sections have no dead navigation. Restoring the manufacturer flag restores its links.

The product section follows the hero and the restored help strip; `#paints` targets the full section so the heading and categories are included. Colours lead directly to reviews, then contact and the existing shared premium footer. The first pass placed the accepted automatic help strip inside contact. The user explicitly rejected that position and asked to undo the move. It is now restored directly below the hero, before products. This latest user instruction overrides the earlier strict adjacency interpretation while preserving the requested major-section order. Its manufacturer link follows the visibility flag, leaving five real links; it does not appear inside contact or beside the footer.

New `HomeContactSection.tsx`/CSS module now uses a rich plum background, light/lavender title, an ivory contact card and one white enquiry action. The user explicitly rejected the initial pale, loose-column presentation as less premium; that first pass is superseded. Tighter vertical spacing and the separate card establish clearer hierarchy while preserving direct phone/email/address and the existing enquiry interaction. Phone **021-35121487** and address **E-9, Sector31D, P&T Society, Industrial Area Korangi, Karachi** retain supplied TDS provenance. Email **support@ekotintpaints.com** remains the previously user-accepted address from the old official contact page review11November; it is not from the TDS and delivery is untested. No hours, WhatsApp number, new form service or domain changes are invented. Header utility details remain intact. Shared dark footer/logo treatment is preserved across current and local legacy routes.

## References reviewed on14 November2026

- [Brighto Plastic Emulsion](https://brightopaints.com/products/plastic-emulsion): product-specific colour/size choices and information tabs inform continuity into a selected paint. The new all-paints chooser is original Ekotint UI, not copied Brighto markup, wording, images or business data. No Ekotint shade availability can be derived from Brighto.
- [Benjamin Moore colour tools](https://www.benjaminmoore.com/en-us/paint-colors): separates colour inspiration, sample-room preview and product/finish guidance. Informs explicit colour-idea vs physical-paint distinction; no competitor shade catalogue or manufacturer claims imported.
- [Sherwin-Williams Emerald Interior](https://www.sherwin-williams.com/homeowners/products/emerald-interior-acrylic-latex-paint): page has a product Ratings & Reviews section and product-review invitation. Extracted rating placeholders do not establish any live review count/score; used only as evidence of product-scoped reviews.
- [Clare homepage](https://www.clare.com/): homepage testimonials describe wider buying/colour-selection/delivery experience, supporting a separate company-experience role. No testimonials, identities or star ratings copied.
- [Brighto contact](https://brightopaints.com/pages/contact) and [Benjamin Moore contact](https://www.benjaminmoore.com/en-us/contact-us): direct support contact and enquiry options inform contact hierarchy only. Contact agent reviewed extracted text/DOM; no competitor details/services adopted.

These were official page text/DOM reviews, not a rendered visual/motion audit or competitor backend investigation. No competitor confirms Ekotint products, compatibility, reviews, prices or delivery. Design follows existing Ekotint assets and palette. Installed Next16 CSS/client-component/link-navigation guidance and the Sites local workflow were read; existing checkout/hosting settings remain.

## Validation and pending inputs

**Final Sol typecheck, whitespace check and webpack build passed (23/23 pages).** Focused fixture/browser checks passed for source-backed shade matching including approved overlapping uses, separate gated review types, all Interior/Exterior choices, colour carry-over into product/enquiry, retained 4L cart/HEX/median desktop fit, Reviews-tab keyboard/empty state, nine-review hover autoplay, hidden blocks/links, six Featured items and disabled controls. Restored strip location and final contact at1440/390/320 passed; real Enter/Escape returns focus to the contact action. Root inspected desktop/mobile chooser and final plum/ivory contact captures. The first pale contact and near-footer strip captures are historical, not accepted final design. Exact evidence/limits: `PART2-POINTS7-13-QA-2026-11-14.md`; current handoff: `SOL-PART2-POINTS7-13-HANDOFF.md`. UI agents did not run app checks/build. No broad sixteen-route or physical-device/service verification was repeated.

No input blocks local frontend review. Actual shade/product relationships, approved customer reviews/permissions, confirmed prices/availability and missing technical sheets remain client inputs. Enquiry/review submission, photo processing and ordering/payment services remain deferred. Keep Explore all products and own-room upload disabled. Local only; do not publish or push source without fresh approval after review.
