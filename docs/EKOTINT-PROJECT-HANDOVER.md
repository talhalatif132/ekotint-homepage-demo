# Ekotint Paints — shared project handover

**Snapshot: 12 November 2026, Asia/Karachi.**

**Current publication authorization:** after reviewing the cooler-yellow image locally, the user explicitly said “now publish”. This authorizes publication of the current homepage with `premium-exterior-yellow-v2.webp`, the “Featured finishes.” heading, and the existing disabled “Explore all products” button. Preserve the approved UI and public audience; continue excluding deferred catalogue/detail routes. Publication result will be recorded after the native service responds. Future changes still require explicit approval.

**Latest completed request:** “Explore all products” is disabled and the homepage was republished successfully as **version 15**. Source: `c782f41f36ec8cc393db7cbf31b71f78fc24e5db`. Native deployment: `appgdep_6af4bb7ed38881919d8cb7ab6e5939bb` (`succeeded`). URL: https://ekotint-paints-studio-demo.talhabinlatif4.chatgpt.site/ . The CTA stays visible with no click action. Astra's remaining UI is preserved and deferred product routes remain excluded. Future changes still require explicit publication approval.

**Latest local follow-up (12 November):** the user approved the existing UI and requested a promotional heading plus a repeat PDF inventory check, specifically mentioning Semi Plastic Emulsion. Changed only the finishing section's heading from “The finishing touch.” to “Featured finishes.”, retaining “THE PREMIUM SERIES”, the same markup, classes, styling, cards, images and interactions. Rechecked all 16 product records against the three original product PDFs: Premium 10, Assez 5, Eko Shade 1. Both Semi Plastic Emulsion variants were already present and each was verified in the Interior filter and project brief with its correct series and image. Browser checks passed at 1440px and 390px; all 16 pack images returned HTTP 200, no page errors or horizontal overflow. No suitability reclassification was made; provisional mappings remain documented. This heading update is local only; the public demo remains version 15 until explicitly approved for publication.

**First local gold image (12 November, superseded locally):** after discussing the yellow/gold Eko Shade packaging and white lid, the user requested that palette for the existing exterior picture locally. Edited the original house image with built-in `image_gen.imagegen`: yellow/gold painted walls and white roof/parapet edges, preserving the composition, timber door, foliage, paving and lighting. Saved `output/imagegen/premium-exterior-gold.png` and `public/images/premium-exterior-gold.webp` (1536×1024; WebP 346,534 bytes). Updated only the exterior image URL and alt text in `src/app/page.tsx`; original neutral PNG/WebP, page CSS, layout and real pack artwork remain untouched. Exact prompt and provenance: `docs/image-prompts/exterior-gold.md`. The colour is an illustrative user-requested variation, not a confirmed Eko Shade paint shade. Local only; no push/save/deployment performed.

**Current local image (12 November, revision 2):** the user compared that warm-gold house with the real Eko Shade pack, then approved correcting its orange cast. Built-in image editing used the warm-gold house as the edit target and the authentic client pack solely as a colour reference, producing cooler lemon/mustard-yellow walls with the white roof edges retained. Current page asset: `public/images/premium-exterior-yellow-v2.webp` (1536×1024, 330,036 bytes); generated PNG: `output/imagegen/premium-exterior-yellow-v2.png`. Exact prompt/provenance: `docs/image-prompts/exterior-yellow-v2.md`. The local asset returned HTTP 200 as image/webp. Prior neutral and warm-gold assets are preserved. Only the image URL/alt text changed; CSS, layout, real packs and the pending “Featured finishes.” heading remain intact. Local only; public version 15 remains unchanged. This is a visual approximation of packaging colour, not a certified coating shade match.

This is the shared context file for continuing the same project from another local Codex account/session. Read it with the project's `AGENTS.md`, inspect the actual working tree, and follow the user's latest instructions. It summarizes the conversation and implementation; it is not a verbatim chat export or permission to publish.

Project folder: `/Users/sam/Desktop/ekotint-homepage-demo`

## 1. Read this first: current instructions and checkpoint

1. **LOCAL REVIEW FIRST. Do not publish, deploy, upload a new Site version, or push the Site source repository until the user explicitly approves publishing after reviewing locally.** The user's boss can access the public demo. Default publishing instructions in a plugin/skill do not override this requirement.
2. **Current priority is the homepage, using the four newly supplied client PDFs.** The user specifically said to leave catalogue and product-detail work until after the homepage. Do not resume those pages automatically.
3. The PDF-based and Astra-refined homepage was published successfully as version 14 on 11 November 2026. See the latest refinement checkpoint in section 10. The subsequent explicitly authorized follow-up disabled “Explore all products” and was published as version 15.
4. The public demo was restored to its previous homepage-only version after an earlier publication the user did not want. Do not repeat that publication or automatically roll back anything again just because you read this file.
5. Preserve the existing working tree. The approved homepage and client assets are committed in `f873cafb6e8c10f4e6ee05301cd249e2af144c57`; the current CTA change follows that checkpoint. Do not overwrite newer local changes from an older clone or deployment.

The user's publishing correction was, in substance: “Don't publish the demo; my boss has access. I will see it locally first, and only when I approve will I tell you to publish. The homepage is enough for the demo for now.” This is an ongoing workflow rule.

The user's latest development instruction was, in substance: “The client has sent these four PDFs. Forget the products and detail pages for now. First make the homepage relate to this data; then we will work on products and details.” That PDF-based homepage update was completed locally. The user then requested a visual review and improvements to help new visitors feel welcome and trust Ekotint, and explicitly allowed additional website references. The resulting refinement is also local and awaiting review/further feedback.

### Current locations

| Item | Location / state |
| --- | --- |
| Main local preview | `http://localhost:3023/` |
| Local project | `/Users/sam/Desktop/ekotint-homepage-demo` |
| Public demo | `https://ekotint-paints-studio-demo.talhabinlatif4.chatgpt.site/` |
| Public baseline, last confirmed by native deployment result | Saved version **15**, homepage only; “Explore all products” disabled |
| Latest published homepage source | `c782f41f36ec8cc393db7cbf31b71f78fc24e5db` |
| Latest homepage changes | “Explore all products” is now a native disabled button, with no click handler and subdued readable styling |
| Catalogue prototype | `/products/` locally; older 10-product data, deferred |
| Product-detail prototype | `/products/water-matt/` and nine other local routes; deferred |

At handover, port 3023 had a Next.js listener. A process ID is temporary: check the listener before starting another server. **Port 3000 has been used by the unrelated Shipping/ParcelChannel project; do not stop it to make room for Ekotint.**

## 2. People, business context and project history

- Ekotint Paints is the client. **Zentix Stack is the agency/proposal author**, not the brand to put in the customer's website header.
- The user said the project was won. The client considered their existing website too poor to show other people and asked for a much more premium experience.
- The user's CEO relays requirements and coordinates with the client. The client assigned a designer for images, PDFs and content, and another relevant person for business/product requirements.
- The user initially had **not shared the demo with the client**. Do not call the design client-approved because a demo exists or the user liked an implementation. The boss having access to the public link is a separate fact.

### Condensed chronology

| Stage | What happened and why it matters |
| --- | --- |
| Existing website audit/proposal | The conversation covered inconsistent UI, forms, navigation, FAQs, downloads, calculator, product data, mobile behaviour, SEO and accessibility. The old site was WordPress/WooCommerce/Elementor. Next.js + TypeScript was proposed. |
| Proposal edits | The user asked for readable formatting, numbering, costs, Safepay information and reference links. Zentix Stack's name/logo were discussed for the proposal. The user also removed some content; do not reconstruct removed bullets from older chat text. |
| Project won / first demo | The user wanted a very premium homepage, explicitly in Next.js. They asked where the code/images were, how the hosted link worked, and for a local preview. |
| Repeated visual feedback | The user asked for slightly darker text across the page, clearer footer/FAQ labels, larger CTA text and more breathing room. Product pack artwork looked dull; they wanted it cleaner/sharper while preserving all text and colours. |
| CEO's later directions | Requirements were arriving slowly. Start frontend with available information, collect the next requirements in small batches, use Benjamin Moore and other references, and begin with white/purple branding. |
| Stronger design request | The user supplied many Benjamin Moore screenshots and said merely changing our colours was insufficient. They wanted the quality of layout, typography, imagery and interactions improved, with original Ekotint execution. |
| Local catalogue/detail prototypes | A catalogue and reusable product-detail design were built, using 10 then-public products. These were initially published as version 13. |
| Publishing correction | The user explicitly required local review before any publication. Version 12 was restored publicly; the local catalogue/detail work was retained. The rule was added to `AGENTS.md`. |
| Client PDFs received, 11 Nov | Four PDFs supplied brand assets, higher-resolution packs, additional coatings and technical guidance. The user redirected the immediate task to the homepage only. |
| Client homepage update | The homepage uses original client pack exports and 16 pack variants, with updated ranges, roof/protective sections, technical guide, FAQs and phone/address. Local only. |
| Homepage refinement | The user requested stronger visual polish and visitor trust. Added a hero colour card, clearer type/spacing, early contact/technical-guide links, a grounded brand introduction and a contact section. Project briefs are explicitly local and no longer require personal details. See section 10. |

### Audit-date discrepancy to preserve

Earlier pasted proposal text described a public review on 14 October 2026. The later revised PDF says **16 October 2026**. When discussing the actual submitted proposal, use its wording or clarify the discrepancy; do not silently merge the dates.

## 3. What the CEO and client asked for

These are requirements relayed by the user in the chat, rather than a fresh independently verified client interview.

### Working process

- Collect requirements **step by step**, not a huge list at once.
- Start from available content, build useful frontend work, request the next missing items while working.
- The CEO wanted to start on Monday. A WhatsApp group was formed on a Friday, but brand/content replies were slow. A noisy 10–15 minute call produced some requirements; the CEO did not want another unnecessary meeting.
- Development order: **frontend UI first → functionality/integrations → AI features last**.
- Initial requirements message requested a few representative/main products, permission to reuse existing content, optional named shades, and any preferred room/exterior images.
- “Main products” meant a small representative starting selection, not a permanent restriction of the catalogue to 3–5 products.

### Branding and design

- White was suggested as the main background; the client mentioned purple in the logo/packaging.
- The CEO mentioned exploring two or three sample palettes, including white/gold, but **no completed client approval of multiple concepts is established here**. The working direction is white/purple.
- The user wants a “9+” level of visual polish. Treat this as a quality target, not an objectively measured score or approval.
- Strong room photography, confident typography, thoughtful spacing, clear readable copy and polished mobile layouts matter. A generic grid or a colour-only reskin does not satisfy the intent.
- Avoid text that becomes pale, tiny or hard to read. The user repeatedly called this out in footer links, colour-family labels, helper text, FAQs and the project CTA.
- Preserve the exact pack text, logo and colours. Do not generate new product lettering or substitute an AI-redrawn container.

### Product organisation

- The CEO reported two top-level business categories. One was **Industrial**; he did not remember the second name.
- The client should provide the full category hierarchy, ideally in Excel. It may have multiple nested subcategories before the products.
- The eventual system must let staff create/manage categories, subcategories and products dynamically.
- **The final business hierarchy is still not confirmed by the four PDFs.** Premium/Assez are supplied series; current homepage surface filters are a browsing design, not proof of the final admin category tree.
- On 12 November the user asked how the five homepage tabs were categorized. Rechecked the original PDFs/TDS and current mappings; see the product-grouping verification in `docs/CLIENT-HOMEPAGE-CONTENT.md`. Several mappings are provisional, the one-category model omits documented overlapping uses, and 2K Hardener needs component/system treatment. Verification only; no application or publishing changes were authorized by that question.

### Colour manufacturing and imagery

- The user corrected the idea of requiring a fixed shade card: Ekotint is a manufacturer and can make custom colours. Named shade collections are optional.
- Keep a colour picker and six-digit HEX input for exploration. Do not restrict the experience to the three corporate brand colours or pretend illustrative palette names are official shade codes.
- Physical shade, product options and manufacturability still need Ekotint's confirmation. A screen preview is not a guaranteed physical match.
- The user explicitly allowed original AI-created room/exterior inspiration if suitable photos were not supplied. Actual product packs now come from the client's PDFs.

## 4. Competitors, references and design decisions

These are historical design-reference conclusions from the conversation/research. Revisit the live sites if a new task requires a current audit, pricing or functional comparison.

| Reference | What was discussed / useful inspiration | Boundary |
| --- | --- | --- |
| [Benjamin Moore](https://www.benjaminmoore.com/en-us) | The client's/CEO's remembered reference and the user's strongest screenshot reference. Colour-changing hero background, large room photography, next-slide preview, colour name/code, carousel arrows, product-family tabs, pack photography, generous colour swatches, inspiration cards, information/“why us” rows and a full footer. | Learn from composition and customer journeys; do not copy brand assets, text, layouts verbatim or claim their product facts for Ekotint. |
| [Benjamin Moore colour samples](https://www.benjaminmoore.com/en-us/c/color-samples) | Clear product cards and filters such as family, sheen and opacity; practical product browsing. | Real Ekotint filters must follow client data, not borrowed categories/prices. |
| [Brighto Paints](https://brightopaints.com/) / [collections](https://brightopaints.com/collections) | Paint-industry product organisation, browsing by surface/use, product information and technical/shade resources. Its structure was discussed as a useful local-market comparison alongside Benjamin Moore. | A previous browser load was incomplete/timed out; do not present this as a full verified functional/mobile audit. |
| [Caparol](https://www.caparol.com/) | The client also supplied this reference link. It belongs in the reference set for future review. | No complete Caparol audit is documented in this checkpoint; do not invent conclusions that were never established. |
| BEHR, Sherwin-Williams, Dulux, Jotun, Asian Paints | Earlier proposal examples for prepared scenes/uploads, surface selection, colour comparison/advice, saving/sharing projects, inspiration/dealers, and organised shade browsing. | These were inspiration/proposal references, not implemented integrations. |

Optional earlier reference board, verified to exist when this file was created:

`/Users/sam/Desktop/Ekotint-Premium-Design-References.html`

The agreed execution is an original Ekotint experience: white/deep purple, expressive serif accents alongside clean Manrope typography, large original room imagery, crisp real packs, illustrative colour discovery and a working prepared-room preview. Do not reduce “inspired by Benjamin Moore” to a purple recolour of a basic template.

Specific user feedback to preserve:

- “Try it” and palette selections should land with the colour-studio heading just below the sticky header, without the large preceding decorative gap.
- The user queried the smaller middle inspiration image. The layout is deliberately staggered/editorial; do not claim an accidental loading issue. Discuss/change it if requested.
- The user wanted “Explore all products →” under the homepage paints and better CTA size/spacing. **Latest instruction (11 November): keep this button visible but disabled, with no click action.** Homepage filters remain available; the deferred catalogue stays unpublished.
- The dark test colour `#2C150C` was previously too washed out. Preserve the improved wall-lighting renderer and its furniture mask.

## 5. Source documents and which ones take precedence

### Latest four client PDFs — all verified present

| File | Absolute path | Contents |
| --- | --- | --- |
| TDS For Web.pdf | `/Users/sam/Downloads/TDS For Web.pdf` | 9 technical sheets, telephone and address. |
| Ekotint Details.pdf | `/Users/sam/Downloads/Ekotint Details.pdf` | 7 slides: brand identity/palette, Assez packs and Eko Shade roof coating. |
| Ekotint premium Product.pdf | `/Users/sam/Downloads/Ekotint premium Product.pdf` | 5 Premium pack slides. |
| Ekotint premium Product File2.pdf | `/Users/sam/Downloads/Ekotint premium Product File2.pdf` | 5 additional Premium coating/finishing packs. |

The paths contain spaces: quote them in shell commands. Do not edit or overwrite the client's originals.

### Project proposal and older text

- Latest supplied revised proposal: `/Users/sam/Downloads/Zentix_Stack_Ekotint_Paints_Proposal_Revised_v3_Readable.pdf` — 8 pages. This is the better source for the submitted scope than an earlier pasted draft.
- Older pasted proposal: `/Users/sam/.codex/attachments/1ca71436-8317-4cee-b0e2-e03eece7eb24/Pasted text.txt` — verified present, but tied to the older Codex home and not necessary for day-to-day continuation.
- Earlier Google Doc link: `https://docs.google.com/document/d/1Ra-7BN81CbsrzzrviluO__aYKb2RV2AUAT6DwTYJqhY/edit?tab=t.0`. Formatting, numbering and edit access were discussed in the chat. **Current contents and account permissions were not rechecked for this handover.** Do not assume the second account can edit it.

Authority order: latest explicit user instruction → supplied revised project scope/client PDFs for their respective facts → verified current code → older chat drafts or public-site content. Flag conflicts; do not silently restore removed text or invent a product mapping.

## 6. Client data extracted for the homepage

### Brand and contact

- Name: **Ekotint Paints**.
- Slogan: **The Perfect Chemistry**.
- Corporate swatches sampled from the supplied palette: blue `#2D56A4`, purple `#816FB0`, magenta `#B14E9B`; common colours shown were black/grey/white.
- These are **brand identity colours**, not a three-colour paint catalogue.
- The UI retains deep purple for readable interactive text/buttons; supplied colours appear as accents.
- Telephone from the TDS: **021-35121487**, link `tel:+922135121487`.
- Header email: **support@ekotintpaints.com**, as published on the existing [contact page](https://ekotintpaint.com/contact-us/) when reviewed 11 November 2026. Stored in `homeContact`; email delivery was not tested. The TDS phone remains authoritative despite the older website showing a different phone.
- Address from the TDS: **E-9, Sector 31D, P&T Society, Industrial Area Korangi, Karachi**.
- The TDS prints `www.ekotintpaints.com` (plural), whereas the old reviewed site is `ekotintpaint.com` (singular). Do not assume these domains are interchangeable or silently change domain/DNS settings. The updated homepage uses the supplied phone contact.

### Sixteen supplied pack variants now represented locally

| Series | Pack name | Homepage asset |
| --- | --- | --- |
| Premium | Water Matt | `public/images/client/water-matt.webp` |
| Premium | Semi Plastic Emulsion | `public/images/client/premium-semi-plastic.webp` |
| Premium | Primer Emulsion | `public/images/client/primer-emulsion.webp` |
| Premium | Wall Putty | `public/images/client/wall-putty.webp` |
| Premium | Weather Paint | `public/images/client/weather-paint.webp` |
| Premium | Epoxy | `public/images/client/epoxy.webp` |
| Premium | Eko PrimeOxide | `public/images/client/eko-prime-oxide.webp` |
| Premium | 2K Hardener | `public/images/client/hardener.webp` |
| Premium | Synthetic Varnish | `public/images/client/synthetic-varnish.webp` |
| Premium | Eko Gleam | `public/images/client/eko-gleam.webp` |
| Assez | Wall Putty | `public/images/client/assez-wall-putty.webp` |
| Assez | Semi Plastic Emulsion | `public/images/client/semi-plastic-emulsion.webp` |
| Assez | Hydra-Matt | `public/images/client/hydra-matt.webp` |
| Assez | Clima Shield | `public/images/client/clima-shield.webp` |
| Assez | Gloss Enamel | `public/images/client/assez-gloss-enamel.webp` |
| Roof coating | Eko Shade | `public/images/client/eko-shade.webp` |

The two Wall Putty and two Semi Plastic Emulsion packs are different series variants; do not collapse them just because the names match. The older catalogue uses some different IDs/naming.

### Technical sheets and naming issues

| TDS page | Printed heading |
| --- | --- |
| 1 | Wall Putty |
| 2 | EkoFlat (Matt Enamel) |
| 3 | EkoGleam (Gloss Enamel) |
| 4 | EkoMatt (Water Matt) |
| 5 | EkoPlast (Plastic Emulsion) |
| 6 | Primer Emulsion |
| 7 | Weather Shield |
| 8 | EkoRoest (Epoxy) |
| 9 | Semi Plastic Emulsion |

- `Ekotint Details.pdf` page 5 is captioned “HYDRA-MATT”, but the actual pack says **CLIMA SHIELD**. The homepage uses the pack name.
- Explicit parenthetical mappings support EkoMatt/Water Matt, EkoGleam/Gloss Enamel and EkoRoest/Epoxy references. Confirm exact series/product association before publishing detailed specifications for a variant.
- **Do not equate Weather Shield with Clima Shield or Weather Paint without confirmation.** The homepage Clima Shield description uses the text on its own supplied pack.
- EkoFlat and EkoPlast appear in technical sheets but do not have corresponding separately identified pack artwork in the 16-pack homepage set. Do not fabricate artwork or assume another pack is the same product.
- Putty coverage is expressed in **m²/kg**, while coating sheets use **m²/L per coat**. Do not apply one global rate or confuse units in a future estimator.
- Coverage, dilution, coats, drying times and substrate information belong to the specific technical sheet. Existing public-site/calculator assumptions are not a substitute.
- Some product presentations only supply the pack/name. They do not establish mixing ratios, warranties or every application. Do not manufacture missing technical claims, general zero-VOC claims, certifications or numerical cooling promises.
- Prices, real available pack sizes, final category hierarchy and order/lead-time rules remain unconfirmed in this bundle.

Supporting files already in the project:

- [`CLIENT-HOMEPAGE-CONTENT.md`](CLIENT-HOMEPAGE-CONTENT.md) — source/naming decisions.
- [`CLIENT-ASSET-INVENTORY.json`](CLIENT-ASSET-INVENTORY.json) — all 16 assets, PDF/page origin, source dimensions and export dimensions.
- `public/documents/ekotint-technical-data-sheets.pdf` — exact copy of the client's original 9-page TDS; 254,374 bytes when verified.

### Image preparation

The client PDFs contained higher-resolution embedded product JPEGs and original soft masks. Those were decoded together, transparent empty margins removed, and exported as transparent lossless WebP without upscaling. This preserves real lettering/design/colours and is preferable to AI-redrawing the packs or trying to invent detail from the old blurry website images.

Room/exterior images are original AI-created inspiration from the earlier demo. Their provenance notes are in `public/images/ASSET-SOURCES.md`, `ASSET-PREMIUM-INTERIORS.md`, `ASSET-PREMIUM-EXTERIOR.md` and related asset notes. Do not describe these rooms as actual completed Ekotint customer projects.

## 7. Current implementation map

Actual installed stack: **Next.js 16.4.3, React 19.3.1, TypeScript**, App Router, local fonts. This is a real local Next.js project, not only a screenshot or a hosted-page editor.

Static export configuration in `next.config.ts`: `output: "export"`, `trailingSlash: true`, unoptimized image delivery, build output `out/`. No database/API server has been wired into this prototype.

| File/directory | Purpose and caution |
| --- | --- |
| `AGENTS.md` | Local-review/publishing rules and installed Next.js documentation requirement. Read first. |
| `src/app/page.tsx` | Current homepage, client interactions, colour studio, search, FAQs and local project brief. |
| `src/app/homepage.css` | Latest homepage-only visual refinements, scoped under `.home-site` and `.home-dialog`; preserve the deferred catalogue styling. |
| `src/app/globals.css` | Existing design plus client-homepage additions near the end. Shared CSS: scope changes carefully. |
| `src/app/layout.tsx` | Fonts/CSS import, title “Ekotint Paints — The Perfect Chemistry”, description, preview `noindex/nofollow`, smooth-scroll attribute. |
| `src/lib/homepage-content.ts` | **Current homepage source of truth:** 16 variants, surface groups, current contact and technical-guide path. |
| `src/components/HomeProductArtwork.tsx` | New homepage renderer for original transparent client exports. Compact framing option for the three-can section. No AI redraw or synthetic lettering. |
| `public/images/client/` | New client-derived assets used by the homepage. |
| `public/documents/` | Local technical PDF download. |
| `src/lib/catalogue.ts` | **Older catalogue prototype data**, 10 old public-site listings. Does not yet match the new client homepage data. |
| `src/app/products/` | Catalogue/detail routes, static params, layout and CSS. Deferred, not updated in the latest homepage task. |
| `src/components/catalogue/` | Older catalogue shell, saved paints, product view, gallery, brief and filters. Deferred. |
| `src/components/ProductArtwork.tsx` | Older original-PNG/SVG silhouette + mild convolution renderer, still used by older catalogue pages. Do not confuse it with the new homepage renderer. |
| `src/components/Icon.tsx` | Shared icon component. |
| `.openai/hosting.json` | Existing Site identity/static manifest. Preserve it. |

### What the latest homepage does

- Four original room stories in the editorial hero, with pause/next/previous controls and coordinated colours. Current hero says “Your space. Your colour. Our chemistry.”
- Real client packs, default featured **Water Matt, Clima Shield and Epoxy**.
- Surface filters: Featured, Interior, Exterior, Wood & metal, Roof coating, Preparation.
- Counts in the current homepage data: Interior 4; Exterior 2; Wood & metal 5; Roof coating 1; Preparation 4; total 16.
- “Explore all products” expands all 16 **on this homepage**; the button can return to featured finishes.
- An exterior feature includes Clima Shield and an Eko Shade roof callout.
- A “For the finer details” section presents Eko Gleam, Synthetic Varnish and Epoxy.
- Existing colour-family palettes, custom picker/HEX input, saved colours and room preview remain.
- Product/pack clicks currently open a **local project brief with the selected coating**, not the deferred product page. Roof/Epoxy clicks choose a relevant project type.
- The technical PDF is downloadable; phone/address use the TDS. The phone is surfaced in the utility strip and confidence links, and a dedicated contact section appears before the footer. The technical PDF now has one download location in Paint advice after user feedback about repetition.
- `#why-ekotint` introduces the manufacturer, mentions the written technical guidance and links to surface browsing and the phone contact; it does not add invented reviews, certifications or longevity claims.
- The hero’s floating palette card opens the existing colour studio. Its colour names remain illustrative.
- Personal name/email fields in the local project brief are optional. The confirmation explicitly says the brief was not sent; a storage failure offers the in-memory download without falsely claiming persistence.
- Search, mobile menu, FAQ accordions and project-brief download work locally.
- Homepage navigation no longer points into `/products/` in this checkpoint.

### What is still a prototype / not implemented

- Brief forms store/download ideas locally; they do **not** send an enquiry or email to Ekotint.
- Saved colours/paints are browser-local; there is no real customer account/cloud persistence.
- No live cart, checkout, payment gateway, COD order processing, staff admin, production workflow, backend database, email delivery, analytics integration or AI chatbot has been implemented by this homepage work.
- A successful form animation or saved brief must not be described as a submitted/received client enquiry.

### Colour-studio behaviour to preserve

- One original prepared room photo (`public/images/hero-room.webp`) is reused. It is not a different image for every colour.
- A fixed SVG wall mask protects furniture and other surfaces. Lighting/luminance is transferred to the selected RGB colour through SVG filters in `page.tsx`.
- Colour changes do not call an image-generation service or a segmentation API. AI-assisted customer uploads are a future feature.
- The original olive room is the renderer's source. Do not replace it with a purple variant without redoing the mask/lighting assumptions.
- Before/after, dark HEX values such as `#2C150C`, palette selection and scroll alignment were checked. Keep the selected HEX and preview in sync.
- The custom picker and HEX input now live inside the room preview panel. Valid changes update the wall immediately without scrolling; partial or invalid HEX edits retain the last valid colour. The `#custom-colour` anchor now targets the combined image/control layout, not a separate strip above it.
- Query links like `/?colour=2C150C#colour-studio` were supported during the earlier connected prototype. Preserve that behaviour if editing routing.
- Illustrative names such as Dusty Lilac, Soft Linen, Still Sage and Blue Hour are not official client shade codes.

### Browser-local storage keys

`ekotint-colours`, `ekotint-project-brief`; older catalogue also uses `ekotint-saved-products` and `ekotint-product-brief`. Do not overwrite or migrate user ideas casually. No credentials should be put in these keys.

## 8. Proposal scope for later phases

The latest eight-page revised proposal is broader than the current homepage prototype:

- Rebuild Home, catalogue/series/category/product pages, Paint Services, Showroom/Dealer Locator, Contact/Get Quote/calculator and FAQs.
- Colour browsing, prepared room/exterior previews, eligible customer-photo uploads, AI-assisted wall selection with manual correction, comparisons, combinations and saved/shared projects.
- Guided paint finder, approved-information chatbot with a route to staff, quantities/pack estimator and relevant quote/sample/consultation enquiries.
- Customer shopping: product options, cart, checkout/delivery details, online payment or COD, account order status/history, revisiting saved projects.
- Ekotint manufactures paint. Fulfilment should allow staff to review orders, confirm requirements, prepare and update status. Do not assume conventional warehouse stock is the business model.
- Staff dashboard: products/categories/finishes/packs/prices/coverage/documents, shades, customers/enquiries, dealers/content/policies, orders/payment status, agreed reports and staff access controls.
- Appropriate notifications, SEO metadata, analytics/Search Console, redirects/migration and workflow testing.

Not assumed in that proposal: manufacturing-system integration, raw-material tracking, courier tracking integration, automated refunds, loyalty programs or other unlisted enterprise functions. Historical account/order migration depends on actual data compatibility.

### Historical costs and payment discussions

- Safepay was explored as an option, not integrated or finally approved. Older draft point numbering was costs 12 / Safepay 13 / references 14; the revised PDF reorganised these sections.
- The revised PDF records an initial Safepay review of 2.9% + PKR 30 for domestic cards, excluding applicable taxes, and an initial UBL requirement flag. **These are historical proposal statements, not confirmed current merchant terms.** Verify official pricing, tax, settlement and the actual merchant agreement before implementation or giving financial guidance.
- An older example gave a PKR 320 fee on PKR 10,000, leaving PKR 9,680 **before taxes/other deductions**. The user asked how much tax; no verified applicable tax rate was established here. Do not invent one.
- Earlier dollar estimates/model names in chat were superseded by the revised proposal's approach: review providers/current plans before setup; costs are separate from development and normally paid by Ekotint.
- Do not restore removed domain-renewal cost lines or a tawk.to vendor/fee just because they appear in old chat. Domain/DNS access can still be required for a future launch; that is different from adding a domain charge.
- SAM 2/Replicate and email-delivery options were discussed as possible future services. Current homepage interactions do not use them.
- A Hostinger-to-OVH renewal/migration question appeared in the chat. No Ekotint hosting migration was implemented through that discussion; do not infer provider/region or change hosting based on it.

## 9. Local, Git and hosting state — keep these distinct

### Last confirmed publication history

- Existing Site project ID: `appgprj_6adb76bec9088191878022e1b0fd2003`.
- Audience at the last native check: public. Preserve its audience; do not create a replacement Site.
- Earlier approved/public homepage baseline: version **12**, source `9d275b624c62feda355b688554a95113af9316b4`.
- Version 12 ID: `appgprj_6adb76bec9088191878022e1b0fd2003~appgver_cca75d2204c48191afb981796d1e40ea`.
- An earlier catalogue/detail build was saved/deployed as version **13**, source `e8f987478e978a55d5927016382afa118e05dceb`. The user then required local review.
- The subsequent restoration of version 12 succeeded. Its rollback deployment ID was `appgdep_6af44d57d6308191a678c0210fc56c88`.
- Version 13 may still exist in saved version/source history. Restoring version 12 did not delete that history or the local work. Do not claim it was erased.
- The PDF-based Astra-refined homepage was subsequently published as **version 14**, source `f873cafb6e8c10f4e6ee05301cd249e2af144c57`, deployment `appgdep_6af4b0f6706881918a03334ba086c90f` (succeeded). Version ID: `appgprj_6adb76bec9088191878022e1b0fd2003~appgver_c3a22f50070081919245cb71c6769e51`.
- Follow-up completed: “Explore all products” disabled and republished as **version 15**, source `c782f41f36ec8cc393db7cbf31b71f78fc24e5db`, version ID `appgprj_6adb76bec9088191878022e1b0fd2003~appgver_ba5b13c8136c8191b9bc7b3793e5698c`, deployment `appgdep_6af4bb7ed38881919d8cb7ab6e5939bb` (`succeeded`). Production build passed and exported HTML confirms a native disabled button. The CTA keeps its label and layout, uses native `disabled`, has no click handler, and has subdued styling with readable white text and no hover movement.

The version 14 deployment result and native Site state were confirmed on 11 November. Recheck if a future task requires current hosting state. **Do not make a deployment merely to verify this document.**

### Practical rules for another account

- Use the same existing folder. Approved homepage/client assets are committed; preserve any newer local changes and the deferred catalogue/detail source when synchronizing or publishing.
- Do not run a source-sync/publishing helper automatically, reset to version 12, stash/delete untracked files, or clean the working tree to make it look tidy.
- Do not push, save/upload a new hosted version or deploy unless the user explicitly approves publication.
- If publication is explicitly requested later, use the existing Site ID and supported Sites workflow, preserve public access, build the exact approved source, and verify the deployment's native result. Do not publish a different checkout or invent deployment success from a local build.
- A second ChatGPT/Codex account may not have the original account's connected Google Docs/Sites access. Missing connector access does not mean the local project is missing or that a new Site should be created.
- No second-account login/profile setup was performed in this conversation. The user pasted a `CODEX_HOME`/VS Code suggestion, but a complete, verified dual-account setup was not finished before the user redirected to the client PDFs. This document is the project-context handoff; it does not transfer authentication or chat history.

## 10. Commands, checks and existing evidence

Run from `/Users/sam/Desktop/ekotint-homepage-demo`:

```sh
# Inspect before editing; keep existing local work.
git status --short

# Local preview, if port 3023 is not already serving this project.
npm run dev

# Checks when appropriate to the code change.
npm run typecheck
npm run build
```

`npm run dev` serves `127.0.0.1:3023`. Before a production build, stop only the owned Ekotint dev process so the build and dev server do not compete for `.next/`. Restore the local preview afterward when the user is reviewing locally. A build is not publication.

`next-env.d.ts` can change automatically between dev and build (`.next/dev/types` versus `.next/types`). Do not treat that generated difference as new business logic. Follow `AGENTS.md`: consult the installed `node_modules/next/dist/docs/` for the APIs being changed; this installed Next.js has newer conventions, including Promise-based route `params`.

### PDF-homepage validation, completed before this handover

- `npm run typecheck`: passed.
- `npm run build`: passed; static pages generated. The build still includes the older retained catalogue routes; that is not an instruction to work on/publish them.
- Chrome desktop inspection at 1440px; responsive checks at 390px, 320px and 768px; no horizontal page overflow or browser errors in the final homepage run.
- Verified default three featured paints; all surface filters and 16-pack expand/return interaction.
- Verified selected Epoxy/Eko Shade in local project briefs and relevant project types.
- Verified search, FAQ opening, valid custom dark HEX preview and before/after.
- Verified the technical download returns `%PDF-`, HTTP 200 and the exact original bytes; verified phone link.
- Local homepage returned HTTP 200 after restoring its dev server.
- No push or deployment was made for the PDF-based homepage update.

### Session resumption check — 11 November 2026

- The continuation session read `AGENTS.md`, this handover and `CLIENT-HOMEPAGE-CONTENT.md`, and inspected the actual working tree and `homepage-content.ts`.
- Existing uncommitted homepage changes, client assets and documentation remain in place; no application files were changed during this check.
- The existing local homepage at `http://127.0.0.1:3023/` returned HTTP 200. A sandboxed request could not connect; the approved check outside the sandbox succeeded, so no replacement server was started.
- No build or browser interaction suite was rerun during resumption; the validation above belongs to the preceding implementation session.
- Next step remains user review of the local homepage. Catalogue/detail work stays deferred. Nothing was pushed, uploaded or published.

### Homepage visual and visitor-confidence refinement — 11 November 2026

**User request for that pass:** review the homepage and improve its beauty and the confidence a new visitor feels. The user also explicitly permitted references from other websites. Local-review/publication restrictions continue unchanged.

Design review found a strong existing photographic/typographic direction, but tiny supporting copy, low prominence of contact/technical information, and project-planning language that could be mistaken for a submitted enquiry. The refinement preserves the white/purple identity, original room images, real pack artwork and all 16 variants.

Changes:

- `src/app/page.tsx`: more prominent interactive hero colour card; early links to the manufacturer introduction, technical guide and phone; a warm-neutral “Beautiful colour. Clear answers.” section; a dedicated phone/address contact panel; clearer customer-facing FAQ copy.
- `src/app/homepage.css`: readable supporting typography, larger interactive controls, more breathing room around product packs, clearer swatch actions and responsive layouts. Styles are scoped to the homepage/dialogs, with reduced-motion support.
- `src/components/Icon.tsx`: additive phone, location and document icons; existing icons retained.
- Local project briefs no longer require a name or email. Confirmation states that no enquiry was sent. When browser storage is unavailable, the brief remains downloadable in the current session and the message explains that it was not saved.
- Colour-family controls use labelled toggle-button semantics instead of incomplete tab semantics. Existing saved-colour keys, prepared-room lighting/mask and dark HEX behaviour are retained.

Reference websites read during this pass: [Benjamin Moore](https://www.benjaminmoore.com/en-us), [Farrow & Ball](https://www.farrow-ball.com/) and [Lick](https://lick.com/). Useful patterns were clear colour/product entry points, direct access to help and product advice, and room-led inspiration. Their images, customer reviews, certifications, commercial terms and product claims were not imported into Ekotint. This was a reference/content review, not a complete competitor audit.

The original client contact details, packaging and technical PDF remain authoritative. No new imagery, dependency, backend, payment, category system or catalogue/detail implementation was added. The public host was neither queried nor changed; nothing was pushed, saved/uploaded to Sites or published.

Validation for this refinement:

- `npm run typecheck` and the final `npm run build`: passed. Static export still retains the deferred catalogue routes locally.
- Existing homepage browser suite passed: all surface filters and the 16-pack toggle, selected Epoxy/Eko Shade project briefs, search, FAQ, dark custom HEX/before-after, phone link and the original 254,374-byte PDF.
- The final production export was served temporarily on loopback and tested in Chrome at **320, 390, 600, 768, 820, 1024, 1440 and 1920px**. No page/header/hero-card horizontal overflow or page JavaScript errors.
- Confirmed hero card → colour studio scroll alignment, saved colour persistence after reload, mobile contact navigation, Escape/focus restoration and anonymous project-brief creation. With storage deliberately unavailable, the message correctly reports no persistence and the downloadable brief contents remain available.
- Desktop/mobile screenshots were visually reviewed. A missing grid declaration in the mobile contact section was corrected, rebuilt and rechecked. Temporary QA browser/server were closed; the normal local dev preview was restored on port 3023.
- Browser review script: `/private/tmp/ekotint-confidence-review.cjs` (`--static` verifies `out/` using a temporary loopback server). It uses the same existing Puppeteer/Chrome installation as the earlier suite. Temporary paths are not essential source.

Latest review screenshots (previous checkpoint screenshots below are retained):

- [Refined desktop hero](handover/2026-11-11-refined-hero.png)
- [Refined product section](handover/2026-11-11-refined-paints.png)
- [Manufacturer introduction](handover/2026-11-11-refined-confidence.png)
- [Contact section](handover/2026-11-11-refined-contact.png)
- [Refined mobile hero](handover/2026-11-11-refined-hero-390.png)
- [Mobile contact section](handover/2026-11-11-refined-contact-mobile.png)

**Next step:** user review at `http://localhost:3023/`. Continue homepage feedback as requested; catalogue/detail work remains deferred, and publication still requires explicit approval.

### Colour studio: controls next to the image — 11 November 2026

**Latest user feedback:** entering a HEX value above the colour studio and scrolling down to inspect the room was frustrating; the controls should be near the image.

- Moved the existing colour picker and HEX field into the studio panel beside the room on desktop and directly below it on mobile. Removed the separate custom-colour strip and the redundant return link.
- Valid six-digit HEX entries, with or without `#` and in either case, now update the room immediately. Picker changes also preview immediately. These edits do not call the scrolling `showShade` flow.
- Partial or invalid input leaves the last valid wall colour intact. Blur/Enter validates the input with an inline message. Presets, the picker, selected-colour details and saved colours remain synchronized; selecting a new valid colour exits before-view.
- Existing `#custom-colour` links now land on the combined image/control layout. External palette/hero choices still use the existing studio scroll alignment.
- Kept the original room image, wall mask, colour transfer and browser storage keys. Changes are limited to `src/app/page.tsx` and `src/app/homepage.css`, plus this documentation and review screenshots.
- `npm run typecheck` and the final `npm run build` passed. Focused Chrome checks passed at 320, 390, 768, 1024 and 1440px: no horizontal overflow; image/input proximity; no scroll when editing; partial/invalid values; case/hash normalization; picker and preset synchronization; before/after and saved colours.
- Focused QA script: `/private/tmp/ekotint-studio-qa.cjs`. Its colour-picker test dispatches the native input event; it does not automate the operating-system picker popup or a real phone keyboard.
- [Desktop studio](handover/2026-11-11-studio-inline-1440.png) · [Mobile studio](handover/2026-11-11-studio-inline-390.png).

Local review remains at `http://localhost:3023/#custom-colour`. Catalogue/detail work remains deferred; no push, upload or publication was performed.

### Technical-sheet link repetition removed — 11 November 2026

The user flagged repeated technical-sheet downloads. Retained a single PDF link in the Paint advice/FAQ section (`#advice`), with the existing page-count description. Removed duplicate PDF links from the utility bar, manufacturer introduction and footer. The middle link below the hero now opens the colour studio instead. The FAQ directs visitors to the one Paint advice link. The original PDF and other existing local work are preserved.

Changed `src/app/page.tsx` and removed the unused utility-link selector from `src/app/homepage.css`. Verified that homepage source contains exactly one `href={homeTechnicalGuide}`; `npm run typecheck` and `git diff --check` passed. This is a small navigation/content correction; the earlier screenshots still show the previous repeated links. No publication or push.

### Fuller header from supplied references — 11 November 2026

The user supplied screenshots of Brighto’s contact/social utility bar and another brand’s dark utility navigation, asking for a more complete header. Implemented a deep-purple utility bar above the existing white navigation:

- Desktop: client-supplied phone, the published support email, the existing slogan, Karachi location, Paint advice and Contact shortcuts.
- Main navigation: added About Ekotint → the existing manufacturer introduction. Existing logo, colour menu, search, saved colours and project-brief action retained.
- Mobile: concise phone, Email us and Karachi links; main navigation still uses the existing mobile menu. Wider utility links and the central tagline are hidden where space is limited.
- Location/Contact lead to the existing contact section; Paint advice leads to the FAQ/advice section, preserving exactly one technical-PDF link.
- Added `email`/`emailHref` to `src/lib/homepage-content.ts` using the address published on `https://ekotintpaint.com/contact-us/`, and a mail icon in `src/components/Icon.tsx`. The TDS phone/address were retained. No email was sent or social/cart/language functionality invented.

Validation: `npm run typecheck` and `git diff --check` passed. Chrome review at 320, 390, 768, 820, 1024, 1100, 1250, 1280, 1440 and 1920px passed with no page/header overflow or page JavaScript errors. Confirmed contact/advice/about anchors, phone/email targets, search, saved-colour dialog, colour dropdown and mobile menu. Exactly one technical-sheet link remains. No production build was rerun for this header-only update; the local dev preview is current.

[Desktop header](handover/2026-11-11-header-1440.png) · [Mobile header](handover/2026-11-11-header-390.png). Temporary review script: `/private/tmp/ekotint-header-qa.cjs`.

Next step is local review at `http://localhost:3023/`. Nothing pushed or published; all preceding local homepage changes remain preserved.

### Softer colour sample cards — 11 November 2026

The user felt the large solid rectangular palette tiles could look better. Reworked only the homepage colour cards in `src/app/page.tsx` and the scoped `src/app/homepage.css`:

- Arched colour swatches sit within warm-white cards with softly rounded corners, a fine border and a subtle shadow. Names and HEX codes now sit below the colour on a consistent, readable background.
- Removed the repeated numbered “THE PALETTE” labels. Added a separated “Preview room” footer with a circular arrow and retained a separate 44px save-heart control.
- Desktop hover gives a small lift and purple arrow treatment; keyboard focus is visible and reduced-motion preferences remain respected. Touch screens do not receive the hover lift.
- Four columns on desktop, two on mobile; smaller spacing/type adjustments keep the 320px layout usable. The existing colour families, exact HEX values, saved-colour persistence, room preview and studio controls are preserved. Removed the now-unused contrast-text helper because labels no longer sit on coloured backgrounds.

Validation: `npm run typecheck`, `npm run build` and `git diff --check` passed. Chrome layout checks covered all five colour families at 320, 390, 600, 768, 820, 1024, 1100, 1440 and 1920px, including overflow, card content containment, exact swatch RGB values and 44px save targets. Keyboard activation/focus, save/remove with reload persistence, desktop/mobile preview updates and the existing studio-heading scroll alignment passed with no page JavaScript errors. Temporary script: `/private/tmp/ekotint-palette-qa.cjs`; its interaction checks were corrected to use keyboard Tab and the actual heading scroll target, then rerun successfully.

[Desktop palette cards](handover/2026-11-11-palette-cards-1440.png) · [Mobile palette cards](handover/2026-11-11-palette-cards-390.png).

Review locally at `http://localhost:3023/#colours`. Existing local work is preserved; nothing pushed, uploaded or published.

### Room-inspiration update undone — 11 November 2026

The user explicitly asked to undo the immediately preceding room-inspiration redesign. Restored the original section heading (“A place to begin. A thousand ways to feel.”), poetic card titles/descriptions, numbered labels, original styling and “Explore the palette” actions that open the matching colour family. Removed the added per-room swatches, selection state and “Try this colour” controls from `src/app/page.tsx` and `src/app/homepage.css`.

The earlier header, arched colour cards, inline HEX studio controls and all other local work remain intact. The temporary `room-ideas` review script/screenshots describe the undone design, not the current page. Typecheck and `git diff --check` passed after restoration. No new production build or browser suite was run for this exact restoration of the previously checked section. Nothing pushed or published.

### Preserved visual checkpoints

### Publication authorization and preferred Astra direction — 11 November 2026

The user first asked to check Astra's work and follow its approach, then explicitly said to stop the review and just publish the current homepage. Do not continue the deferred review or make unsolicited UI changes during this publication. Preserve the fuller header, readable text, warm manufacturer/contact sections, arched palette cards, inline colour-studio controls, original client packs, clear browser-local project-brief wording and the restored original room-inspiration section. This is the preferred direction for subsequent requested homepage work.

Publication status: version 14 succeeded, native deployment `appgdep_6af4b0f6706881918a03334ba086c90f`, source `f873cafb6e8c10f4e6ee05301cd249e2af144c57`. The user stopped further UI review; production build passed. Only the homepage was published. Catalogue/detail source stays preserved locally, and its generated routes were excluded from the artifact. The later request to disable “Explore all products” and republish was completed as version 15 (see section 9). Future changes still require explicit publication approval.

Packaging note: a normal Next build still generates the deferred `/products/` routes. Exclude that generated directory from homepage-only publication, retaining all source. The v14 artifact also omitted unused original image sources while preserving every homepage image, font and technical PDF.

These are internal documentation screenshots of the latest local homepage, not new public assets:

- [Desktop hero](handover/2026-11-11-homepage-desktop.png)
- [Featured client packs](handover/2026-11-11-homepage-paints.png)
- [Mobile hero](handover/2026-11-11-homepage-mobile.png)

Temporary QA/extraction files, if still present:

- `/private/tmp/ekotint-client-homepage-qa.cjs` — the final local browser-check script. It imports Puppeteer from `/Users/sam/shipping-v1/node_modules/puppeteer` and uses the installed Google Chrome application. This import does not make Shipping part of Ekotint.
- `/private/tmp/ekotint-client-docs-nov11/` — extracted text, rendered page previews/contact sheets, image exports and preparation scripts.
- `/private/tmp/ekotint-revised-proposal-v3.txt` — extracted revised proposal text.

Temporary files can disappear. Essential source/decisions are in the actual PDFs, project assets and `docs/`; do not make continuation depend solely on `/private/tmp`.

## 11. How to continue and keep this file useful

1. Read this file and `AGENTS.md` before changing the project.
2. Inspect actual source/working tree, and check whether the preview is already running.
3. Follow the next user request. For now the completed homepage is waiting for review; do not autonomously move to product/detail/backend work.
4. When the user asks for catalogue/detail updates, reconcile the older `catalogue.ts`/old PNG renderer with the 16 client variants and technical-name issues. Preserve series distinctions; do not copy stale specs or confuse the homepage's surface grouping with the final category hierarchy.
5. Request remaining category/price/pack/business rules in small relevant batches when needed, consistent with the CEO's process.
6. Keep work local until explicit publication approval. Do not ask repeatedly for permission for routine local reversible edits; the publishing boundary is the important one.
7. After meaningful progress, update this file's snapshot/current checkpoint, changed files, validation and next step. Both local accounts should read and maintain this same file rather than create conflicting recaps. Preserve the user's restrictions unless the user changes them.

### Copy/paste starter prompt for the other account

```text
Continue my existing Ekotint Paints project in:
/Users/sam/Desktop/ekotint-homepage-demo

First read these local files completely:
1. /Users/sam/Desktop/ekotint-homepage-demo/AGENTS.md
2. /Users/sam/Desktop/ekotint-homepage-demo/docs/EKOTINT-PROJECT-HANDOVER.md
3. /Users/sam/Desktop/ekotint-homepage-demo/docs/CLIENT-HOMEPAGE-CONTENT.md

Inspect the current working tree and preserve my uncommitted changes.
The latest work updates only the homepage using four client PDFs; product/catalogue/detail work is deferred until I ask.
Use the existing local preview on port 3023, or start it if needed.
Do not push, upload a new hosted version or publish/deploy anything until I explicitly approve after local review.
Continue from this checkpoint and keep the handover file updated with meaningful progress.
```

This document stays in `docs/` as internal project context. Do not put it in `public/`, link it from the customer website, or treat it as client-facing proposal copy.
