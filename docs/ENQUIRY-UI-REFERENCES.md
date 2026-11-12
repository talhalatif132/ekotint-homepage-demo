# Homepage enquiry UI — discussion and reference

12 November 2026. Local UI preview only; no publication approval.

## CEO and user direction

Reread `AGENTS.md`, the current form source and the supplied discussion in section 12 of `EKOTINT-PROJECT-HANDOVER.md`. At **02:16:35**, the CEO questioned the browser-local brief/download flow and said he expected customers to enter details and submit an enquiry to Ekotint. This motivates replacing that homepage flow with enquiry-oriented fields and product/colour context. The assistant read the supplied CEO/user conversation; it did not participate in the original exchange.

The user explicitly chose **“Prepare the demo UI only for now”**. No enquiry service is configured. This authorizes the interface and local ready state, not actual transmission. The CEO's requirement is therefore **partly addressed**: the enquiry presentation is implemented, while real delivery remains pending.

The user subsequently approved optional **Preferred colour**, Change colour with colour/saved ideas and optional HEX, plus Help me choose. Reread CEO **02:16:35**, asking whether a current shade applies to a product, and **02:24:18**, questioning generic versus product-specific colours and the browsing journey. These motivate preference context, not a compatibility claim; the specific controls follow the user's approval.

## Official reference checked

[Brighto contact page](https://brightopaints.com/pages/contact), checked **12 November 2026** through available text extraction, exposes name, email, phone and “Submit Now” fields/action. This informed a simple contact-form structure. No visual audit, copied layout/text/assets or delivery test was performed. Ekotint's required fields and ready/edit/call behaviour follow this project's user direction, not an assumption about Brighto's implementation.

## Current UI and limits

`HomeEnquiryForm.tsx` replaces the homepage brief/save/download flow. Name/phone are required; email and Preferred colour are optional. Change colour offers colour/saved ideas and optional HEX; Help me choose leaves the shade open. Submit enters **“Your enquiry is ready.”** with product/preference summary, Call Ekotint and Edit details. Editing preserves entered values and local colour/help state in the mounted form; closing/reloading does not promise persistence. There is no sent, received or delivery claim.

There is no enquiry fetch/API/email/backend, storage or download. A new enquiry carries only a deliberate valid URL colour or user selection through hero/palette/search/saved preview, studio favourites/custom HEX/picker or save action. Initial/default scene colour is not automatically a preference. Enquiry changes stay local and do not mutate the studio or global saved colours. The former forced Exterior Yellow `#E9D54B` mapping is superseded; its historical sampling provenance remains in `HERO-BRAND-REFERENCES.md`, not as an availability claim or current default.

[Brighto All Weather](https://brightopaints.com/products/all-weather), rechecked **12 November 2026** through text extraction, exposes a product-level Color field with named/code choices. This informs keeping preference beside the product and eventually using a client-approved shade catalogue. No visual/interaction audit or copied names, codes, prices, images or layout. Ekotint's current options are colour ideas, not verified availability for every product.

Older homepage brief/download, save/storage and forced-colour checks are historical. Deferred catalogue/product-page prototypes remain preserved outside this task; the disabled upload/SAM scope is unchanged. Do not restore demo-status labels. Tests/typecheck/browser QA/build remain unrun and delegated to Sol in `SOL-ENQUIRY-UI-HANDOFF.md`. Real transmission needs an agreed service/destination and delivery validation; no push, Site upload or publication.
