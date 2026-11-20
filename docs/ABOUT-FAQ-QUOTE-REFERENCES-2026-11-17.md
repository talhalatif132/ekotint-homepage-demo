# About, FAQ and quote-page research — 17 November 2026

## Request and scope

User proposed About, FAQ and Get a Quote pages, then asked to check the existing references. After the Brighto/Benjamin Moore comparison, the user explicitly requested other industries too and an explanation of how Ekotint could build these pages. No message time was supplied; date is Asia/Karachi. These are the user's requests, not new CEO instructions. This task researches and proposes structure only; no application/UI edits, tests, builds, submissions, source push or publication.

Current context: the 15 November release is already live, and the 16 November source backup was verified on private GitHub main at `9609605d0fe5ef41e2ea56ac838bf6cd1872ee08`. Earlier deployment approvals are fulfilled. Future UI work remains local for review; Astra handles UI and Sol handles tests/build.

## Official reference review

Public page text, links and exposed form controls reviewed on 17 November 2026. This was not a rendered desktop/mobile visual audit or an end-to-end transaction test. No forms were submitted, messages sent or appointments booked. The quote-flow research was delegated for a parallel read-only check; root also opened Andersen and Caesarstone.

| Reference and field | Observed structure | Ekotint interpretation, not a copied feature |
| --- | --- | --- |
| [IKEA story](https://www.ikea.com/global/en/our-business/how-we-work/story-of-ikea/) — furniture | Company origins, founder imagery, purpose, product stories and links to fuller history. | A short visual company story with verified information and a clear connection to the paint range. No invented history or factory/team imagery. |
| [IKEA FAQ](https://www.ikea.com/us/en/customer-service/faq/) — furniture/retail | Questions grouped by practical topics, including orders, missing/damaged items and kitchen services, with related help routes. | Group paint questions by visitor task. Answers link to products, technical documents or an enquiry, rather than one undifferentiated list. Search is an optional later enhancement, not claimed as a verified FAQ-page feature. |
| [Dyson support](https://www.dyson.com/support) — appliances | Task routes such as troubleshooting/repair/contact; users can identify their machine by serial number or category to reach relevant help. | Product-aware help: link a product page to relevant FAQ content and carry its name into an enquiry. Do not copy account/serial-number requirements or promise unsupported services. |
| [Andersen Request a Quote](https://www.andersenwindows.com/request-a-quote) — windows/doors | Step 1 of 3 asks homeowner versus trade professional; quote is supplied through a local representative. Later-step fields were not exposed. | Offer a guided project enquiry and allow visitors who need advice to proceed. Audience segmentation is useful only if it changes sales handling. This is not evidence of an instant price calculator. |
| [Caesarstone Canada Get a Quote](https://www.caesarstone.ca/get-a-quote/) — stone surfaces | Explains form → team contact → quote/consultation before the form. Visible name/email/phone/postal-code inputs, up to three colours and JPG/PDF design plans. Some dropdown labels are not exposed. | Explain what happens next, retain selected paint/shade and allow notes. Attachments can follow when storage/delivery is implemented. Its two-business-day promise belongs to Caesarstone, not Ekotint. |

Additional inspected [Cambria consultation](https://www.cambriausa.com/consultation) describes appointment/call-based advice and referrals; dynamic fields were not readable. Treat consultation and quote requests as different purposes, not a demonstrated instant quote.

Existing paint-reference check on 17 November: [Brighto About](https://brightopaints.com/pages/about-us), [FAQ](https://brightopaints.com/pages/f-a-qs) and [Contact](https://brightopaints.com/pages/contact) exist. [Benjamin Moore sitemap](https://www.benjaminmoore.com/en-us/sitemap) lists company/history, FAQ, contact, store and representative routes. No dedicated quote page was found in the pages/navigation/search checked; this is a bounded finding, not proof none exists anywhere.

## Proposed Ekotint pages

These are design recommendations, not implemented behavior or reference-site claims.

**About — `/about/`:** existing shared header/footer; a restrained image-led introduction; short approved company story; current paint applications/ranges; real manufacturing/process/team material when supplied; closing Explore paints and Request a Quote actions. Keep typography, plum/ivory palette and spacing consistent with the accepted homepage. Use existing lifestyle photography as atmosphere only; do not imply it depicts the factory or actual client projects. Omit history, awards, certifications, sustainability guarantees and numerical achievements unless approved and supported.

**FAQ — `/faq/`:** short introduction; four topic groups (Choosing paint, Colours and previews, Preparation and painting, Quotes and purchasing); approximately 12–15 concise questions in keyboard-accessible expandable rows. Include direct links to relevant products/TDS and a visible Ask the team route. Search can be added if the library grows. Draft answers must reflect actual Ekotint products/services. Do not borrow Brighto expiry/coat counts or other brands' policies. Delivery, returns, prices, response times and product-specific technical advice require client approval before being presented as company commitments.

**Request a Quote — `/get-a-quote/`:** recommend a single page with three clearly labelled groups, rather than requiring a wizard for a small form. Desktop: short introduction and selected-paints summary beside the form; mobile: compact summary above it.

1. Project: application/surface, city and optional area with units or Not sure. No full street address needed at initial enquiry.
2. Paints: prefill product, chosen shade, pack and quantity from product/cart when available; allow Help me choose without selecting a product. Distinguish a preview colour idea from confirmed availability.
3. Contact: name and reachable contact method, optional alternative email/phone, project notes. Keep required fields minimal and clearly labelled. Use a supported preferred-contact choice only; no unverified WhatsApp number.

Suggested heading: Request a Quote. Suggested explanation: Tell us what you're painting. Our team can help confirm the right product, quantity and pricing. Submission action: Request my quote. Explain that the team reviews the request; do not display an invented instant estimate. A confirmation appears only after a real successful server acknowledgement, with an error/retry state if it fails. Staff follow-up time must be agreed before promising one. Quote attachments are optional future work, separate from the disabled paint-photo visualiser upload.

Navigation recommendation: About in main navigation, FAQ in shared footer and contextual product help, Request a Quote as a clear primary action. Keep Contact for general questions. Product/cart quote actions retain choices so visitors do not re-enter them. Proposed implementation order: quote flow, About, FAQ; content collection can happen in parallel.

## Inputs and implementation boundary

**Later user override, 17 November:** after authorising implementation, the user requested frontend only with no email/service and clarified the intended litre/colour instant-estimate experience. Root is implementing a local illustrative calculator using explicitly labelled placeholder rates, with no real-price/service claim; matching the existing purple theme is an explicit requirement. The human-reviewed-only recommendation below is historical for that original plan. Manufacturer rates/coverage/pack rules are still required for real estimates. Current implementation/QA scope: `SOL-QUOTE-PAGE-HANDOFF.md`.

Before final content: approved company background/real photos and confirmed technical/sales answers. Before a functioning quote launch: recipient inbox/handling process, supported contact methods and a working submission endpoint/service, tested independently of the static page build. Current enquiry only prepares local UI state and does not send. The static-export frontend needs an external submission service or a separately hosted endpoint; no credentials in client code. No specific provider is selected by this research.

Verified prices, coverage, coat counts, packs, shade availability and delivery rules remain incomplete, so an instant total/calculator is not proposed now. Existing published demo limitations remain. This document is context, not approval to publish, connect a provider or send a real enquiry. Once UI implementation is requested, reread this research and client notes, implement locally and update the Sol handoff for focused validation/build.
