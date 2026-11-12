# Customer-review UI — discussion and references

12 November 2026. Local design work; not publication approval.

## What the CEO and user discussed

Source: the cleaned CEO conversation supplied by the user, reproduced in section 12 of `EKOTINT-PROJECT-HANDOVER.md`. Original attachment: `/Users/sam/.codex-account2/attachments/24a5fa26-2d11-47f9-ad6a-8603a6b1276d/Pasted text.txt`.

- **CEO, 02:26:59:** after the hero, customers should see products, reviews, prices and category browsing. This motivated the original position directly after the homepage products; the later user question about early placement prompted the revised position documented below.
- **CEO, 02:32:55:** Brighto demonstrates clear product/price presentation. It is the CEO's reference for a more understandable customer journey.
- **CEO, 02:46:37:** customer reviews are missing; add credibility and trust. This motivates the clearly named Customer Reviews area.
- **User, this chat:** make the review UI beautiful; always reread the relevant chat and record the CEO/user rationale and reference websites.
- **User, subsequent clarification:** “ok write fake review they will share with ys soon”. Implemented as explicitly fictional design samples, not genuine endorsements. Original request for genuine reviews remains dependent on real source material.
- **User, latest correction:** “we dont need photos”; the stock interiors used similar colours and depicted homes they considered uncommon in Pakistan. The audience is Pakistani, so the review carousel now uses a text-only layout. This supersedes the earlier request to add internet photos.
- **User, subsequent placement question:** questioned why reviews appeared so early and asked to check other websites. This motivates comparing actual page sequences and moving reviews nearer the final contact section.
- **User, subsequent colour correction:** the warm review background does not match the purplish Ekotint theme. This motivates the lavender/plum review palette below.
- **User, subsequent avatar request:** use avatars instead of initials such as FH/BA. Initially interpreted as illustrations, then clarified with a screenshot to mean circular photographic avatars. This does not restore room photos.
- **User, latest local-preview visibility request:** remove the fictional-content sentence, “Design preview” label and “Example price” badges because they confuse the demo audience. Keep demo setup/status in internal notes rather than homepage copy. This supersedes earlier visible-label instructions for the local preview only.

The assistant read this conversation; it was not a participant in the original CEO/user exchange.

## Websites checked and what informed the work

- [Brighto homepage](https://brightopaints.com/), accessed 12 November 2026: product names and prices appear together under its best-selling product section. Supports the existing product-first placement from the CEO discussion. No review text was exposed in the homepage text extraction; no Brighto testimonials were copied.
- [COAT reviews](https://coatpaints.com/pages/reviews), accessed 12 November 2026: a dedicated reviews destination and a visible review-count entry make reviews a recognisable part of the brand's navigation. Used as a structural reference for clearly identifying the review area. The dynamic review widget was not available in the extracted page; this was not a full visual/widget audit. The three-card layout, plum highlight and typography treatment are original Ekotint design choices, not a reproduction of a verified COAT layout.
- A public search for Ekotint reviews returned directory summaries but no usable original customer quotes. No directory ratings or review counts were imported. Lick/Trustpilot search results were also considered but not used as design or testimonial content.

No competitor reviews, identities, ratings, claims, logos or assets were reused.

## Latest pricing refinement, 12 November 2026

The user asked whether the prices looked good, then approved the proposed smaller type and aligned price/action row (“ok do that”). Product names remain primary; a full-width divider separates the name/description from the bottom price and plus action. Main-card prices reduce from 24px to 22px, with stretched cards aligning footers per grid row; Featured finishes retains 20px prices. The shared note is shortened to **“Pack size to be confirmed”** until real packs arrive. No amount, product-brief action or badge-removal decision changes.

Reread the supplied discussion: CEO **02:32:55** requests clear product names/prices and **02:46:37** asks why customers must open details to see a price. These motivate accessible card pricing; the specific visual refinement is user-approved. [Brighto's official homepage](https://brightopaints.com/) was checked **12 November 2026** through name/Rs-price text extraction only. No visual spacing audit, copied layout or borrowed prices. All displayed demo amounts remain arbitrary/unapproved; actual prices and packs are pending. Tests/typecheck/browser QA/build remain unrun and delegated to Sol; no push or publication.

## Latest local-preview label override, 12 November 2026

Following the user's explicit visibility request, the review disclaimer and “Design preview” label are removed, along with the associated `aria-describedby`, “Example price” badges and unused CSS. PKR amounts remain; the original longer pack/final-price note has since been shortened to “Pack size to be confirmed” by the pricing refinement above. Do not restore the removed labels during Sol QA. Earlier disclosure/badge descriptions below are historical in this respect.

The six fictional reviews/names, placeholder portraits and arbitrary demo prices remain separate internally and unapproved; the genuine-review array is empty. These are not genuine customer endorsements or actual offers. Approved reviews/portraits and actual prices/packs remain necessary before production use. This is a local-preview presentation change, with no publication authorization.

[Brighto's official homepage](https://brightopaints.com/) was rechecked **12 November 2026**, using text extraction for product-name/Rs-price pairing. No testimonial, rating or palette was copied, and no visual audit is claimed. CEO **02:32:55** motivates clear prices and **02:46:37** motivates trust content; removing labels follows the user's latest request, not the CEO. Tests/typecheck/browser QA/build remain unrun and delegated to Sol; no push, Site upload or publication.

## Current avatar correction — photographic circles, 12 November 2026

The user's screenshot clarifies the desired circular profile-photo/name placement. Only that presentation informed the change; no screenshot review text, identity or stars were copied. Six portrait files from RandomUser are stored locally and assigned only to the fictional preview IDs. The photographed people are not identified by the fictional names and are not represented as verified Ekotint customers. Genuine reviews use a generic decorative SVG silhouette until approved portraits are available. The 56px circles use `object-fit: cover`, a 2px white border and purple outline; image alternative text is empty because the attribution name is adjacent. No runtime remote image calls or portrait library is added. No image editing was performed.

Checked **12 November 2026**: [RandomUser](https://randomuser.me/), a demo-user service, and its [copyright page](https://randomuser.me/copyright). The provider describes its portraits in an authorized UI Faces section; this is the provider's provenance statement, not independent verification that a portrait depicts a customer or permission to attribute an endorsement to that person. The photos are local design placeholders only.

| Local file in `public/images/reviews/` | Portrait source |
| --- | --- |
| `avatar-1.jpg` | https://randomuser.me/api/portraits/women/44.jpg |
| `avatar-2.jpg` | https://randomuser.me/api/portraits/men/32.jpg |
| `avatar-3.jpg` | https://randomuser.me/api/portraits/women/65.jpg |
| `avatar-4.jpg` | https://randomuser.me/api/portraits/men/11.jpg |
| `avatar-5.jpg` | https://randomuser.me/api/portraits/women/68.jpg |
| `avatar-6.jpg` | https://randomuser.me/api/portraits/men/76.jpg |

The earlier avatar update introduced the disclosure “Fictional names and reviews; profile photos are placeholders. Genuine customer stories to follow.” The latest local-preview override above removes it. Lavender theme, six-story controls and placement before contact remain unchanged. The CEO's **02:46:37** trust request motivates the section; the photographic avatar choice follows the user. Genuine reviews and approved portraits remain pending. Tests/build/browser QA are unrun and delegated to Sol; no push or publication.

## Previous avatar interpretation — original inline SVG, 12 November 2026

The initial avatar interpretation replaced initials with six stable illustrated-bust variants selected by review ID. That implementation is superseded by the photographic circles above; only a generic SVG fallback remains. The reviewer text name remains the accessible attribution.

[DiceBear Personas](https://www.dicebear.com/styles/personas/) was checked **12 November 2026** through its text documentation for the flat-vector avatar idea only. No artwork, assets or code were copied. This illustration choice follows the user; the CEO's **02:46:37** request concerns trust content, not avatars. Genuine review content remains pending. Tests/build/browser QA are unrun and delegated to Sol; no push or publication.

## Latest palette correction — lavender/plum, 12 November 2026

The user requested a closer match to Ekotint's purplish theme. The review viewport now uses pale lavender `#f1e9f6` with inset border `#e0d2e8`, brand text for the quotation, accent `#765388`, initials background `#e3d4ec` and inactive dots `#bda9ca`. The surrounding section stays white. Placement, six text-only stories, disclosure and controls remain intact.

[Brighto's official homepage](https://brightopaints.com/) was rechecked **12 November 2026** through text extraction only. No palette or visual audit was performed, and no competitor colours were copied. This palette comes from the existing Ekotint theme and the user's correction. The CEO's **02:46:37** request motivates the trust section, not these colour choices. Tests/build/browser QA remain unrun and delegated to Sol, including colour and contrast review; no push or publication.

## Current placement — after Advice/FAQ, before contact, 12 November 2026

The review section now follows Advice/FAQ and immediately precedes the final `#contact` section. The former position immediately after the main product grid reflected the CEO's **02:26:59** products/reviews/prices grouping. The user's latest question prompted a new placement review; the CEO's **02:46:37** credibility/trust rationale still applies. The assistant read these supplied statements and did not participate in the original CEO/user conversation.

Official sites checked **12 November 2026**, using their available DOM/text order:

| Official page | Extracted sequence relevant to reviews | What it informs |
| --- | --- | --- |
| [Nobel Paints Pakistan](https://www.nobelpaints.pk/) | Before & After → Testimonials → Contact Us → footer | A Pakistani-market example of testimonials near the contact section. |
| [Petal Paints](https://petal-paints.com/) | Products → shades → room inspiration → featured products → contact form → testimonials → footer | A second later-page review placement, though its contact form precedes testimonials. |
| [Backdrop](https://www.backdrophome.com/) | Collections → review invitation → gallery link/footer | Later-page review-related content; the invitation is not treated as a testimonial carousel. |
| [Clare](https://www.clare.com/) | Hero/brand benefits → “Loved by thousands” reviews → “Our paint picks” | An earlier-review counterexample; there is no universal correct position. |

These are text/DOM extraction observations, not screenshot audits or guarantees of every rendered responsive layout. COAT, Lick and Brighto extraction did not expose matching review content for this placement comparison; that does **not** prove those sites lack reviews. No competitor quote, rating, customer identity or review widget is copied.

Placing Ekotint's reviews after Advice/FAQ and before contact is an Ekotint design judgment: the visitor can browse the content and then encounter trust material near the contact decision. Nobel/Petal provide relevant later-page examples, while Clare demonstrates a valid different sequence. The six-story text-only component remains intact. Top padding changes from 10px/0px to 64px desktop/44px mobile to separate the relocated section from Advice/FAQ. This work does not reorder other sections or change the review content.

Tests/typecheck/browser QA/build remain unrun and delegated to Sol. The handoff requests section-order, spacing and anchor-scroll checks in addition to the existing carousel validation. No push or publication.

## Current correction — no review photos, 12 November 2026

Reread the supplied CEO discussion and user's correction before this UI task. The CEO's **02:26:59** direction establishes the products/reviews/prices customer journey, and **02:46:37** requests reviews to add credibility and trust. The latest user direction determines how the section is presented: remove the stock interiors and make the review area text-only for the Pakistani audience. The assistant is documenting the CEO/user's conversation, not describing its own participation in it.

The carousel retains six fictional previews, a single clear fictional-content notice, previous/next arrows, direct-selection dots, swipe, left/right keyboard controls and reduced-motion behaviour. Image markup/data and photo-specific styles are removed. The genuine-review collection remains empty until approved material arrives; no ratings, verified badges or customer-count claims are added. Previously downloaded photos are preserved on disk but are **unused**, and must not be mistaken for an active design requirement.

[Brighto's official homepage](https://brightopaints.com/), checked **12 November 2026**, is the local-market reference for this correction. Available text exposes Rs/PKR product prices, Interior/Exterior/Wood/Stains categories and the Karachi-only Boom Series. This supplies local-market context; removing review photos follows the user's direction. The review was limited to text extraction, and no customer-review widget was visually reviewed or copied. The text-only quotation layout is an original Ekotint design choice; no Brighto testimonial, customer identity or review claim is reused.

No tests, typecheck, browser QA or build were run for this change. Those tasks remain with Sol in `SOL-PRICING-TRUST-HANDOFF.md`. No push or publication.

## Previous photo-led redesign — six-story carousel, 12 November 2026

The user rejected the three rectangular sample cards and initially asked for a different design, internet photos, less repetitive sample wording and a slider for six reviews. This photo-led presentation is now historical, superseded by the text-only correction above; the six-story navigation is retained.

References checked again for this task:
- [COAT reviews](https://coatpaints.com/pages/reviews): reviewed the reviews destination structure; the dynamic widget was not exposed in text extraction. No claim of a visual carousel audit or copying its layout.
- [Lick journal](https://lick.com/blogs/news) (redirected from `https://www.lick.com/uk/blog`): room-based navigation informed pairing room imagery with everyday-home story themes. The split photo/quote layout, serif quotation, pagination and controls are original choices. No testimonial text was copied.

### Historical photo provenance — files preserved, unused

Three locally downloaded room photos by **Alex Tyson**, previously used across six fictional slides and now unused. Each source page identified the image as free under the Unsplash License when accessed 12 November 2026. These were illustrative interiors, not Ekotint customer projects; no stock person's identity was attached to an endorsement. They are retained only to preserve existing local assets and provenance.

| Local file in public/images/reviews | Source page | Download image ID |
| --- | --- | --- |
| soft-living.jpg | https://unsplash.com/photos/a-living-room-filled-with-furniture-and-a-white-table-fo4n2TTKM_Q | photo-1722764389489-5bcc731d43c6 |
| light-living.jpg | https://unsplash.com/photos/a-living-room-filled-with-furniture-and-a-large-window-8eDPkJAWFbs | photo-1723257133428-fc8f16185cf0 |
| quiet-living.jpg | https://unsplash.com/photos/a-living-room-filled-with-furniture-and-a-large-window-ONZK17Qx1r8 | photo-1723257132099-bf6b62b8a9e0 |

Downloaded from images.unsplash.com with `auto=format&fit=crop&w=1000&q=82`. No remote image dependency at runtime.

### Previous implementation — historical

The earlier `HomeCustomerStories.tsx` implementation showed six fictional stories when the genuine collection was empty. One clear notice above the slider stated that names/reviews were fictional and photos illustrative; repetitive card labels and generic “Sample customer” names were removed. Genuine data stayed empty and separate. No ratings, verified badges or claims of actual customer totals were added; pagination counted only displayed slides. The current notice no longer refers to photos because the photos have been removed.

The previous desktop layout presented one split photo/quotation story at a time; mobile stacked the image and quotation. The current layout is text-only. Native horizontal scroll snapping, arrows, six direct-selection dots, keyboard left/right, a live position indicator, no automatic playback, reduced-motion navigation, inert inactive slides and resize alignment remain. Genuine entries replace the demo with source attribution and also use the text-only layout.

Existing prices, guidance and contact links are preserved. No tests, typecheck, browser review or build were run, respecting the user's Astra-UI / Sol-validation split. See `SOL-PRICING-TRUST-HANDOFF.md`. No publishing or pushes.
