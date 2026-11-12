# Hero brand refinement — discussion and references

**Current-status override:** read `CEO-FEEDBACK-STATUS.md` and the later dedicated enquiry/navigation/inspiration-removal notes first. This document preserves earlier hero/image provenance; its original gallery-preservation and exterior forced-yellow brief/save instructions are historical, superseded by gallery removal and optional enquiry preference. Do not restore those old behaviours. Current dedicated Sol handoffs take priority; no publication is authorized.

12 November 2026, Asia/Karachi. Local UI work only; no publication approval.

## CEO and user rationale

Reread the supplied CEO conversation recorded in section 12 of `EKOTINT-PROJECT-HANDOVER.md`. Original attachment: `/Users/sam/.codex-account2/attachments/24a5fa26-2d11-47f9-ad6a-8603a6b1276d/Pasted text.txt`. These are the CEO/user's recorded statements; the assistant was not a participant in that exchange.

- **CEO, 02:19:45:** preferred the fourth, dark-purple option because its text was clearer and the living-room image looked better; questioned how slides two and three fit the branding.
- **CEO, 02:35:00:** requested automatic advance every few seconds and colours/gradients aligned with the supplied branding. Said the other two or three pictures could change if needed.
- **User, latest task:** explicitly move the previous fourth slide to first and match the other slide colours to the attached brand palette. This resolves the older uncertainty about the initial slide for this local implementation.

The existing handover records client swatches blue `#2D56A4`, purple `#816FB0` and magenta `#B14E9B`, previously sampled from `Ekotint Details.pdf` slide 2. This task uses those recorded values and the user's consistent palette screenshot; it does not claim a fresh PDF extraction. They are identity colours, not verified paint shades or product-colour compatibility data.

## Official reference pages checked

Both pages were checked **12 November 2026** through available text/DOM extraction:

| Page | Relevant observation | Use and limits |
| --- | --- | --- |
| [Benjamin Moore](https://www.benjaminmoore.com/en-us) | Room photography is paired with named colour information and Explore Color/Find Products routes. | Structural reference for an understandable room/colour/product entry point. No screenshot audit, copied assets or inferred autoplay interval. |
| [Brighto Paints](https://brightopaints.com/) | Multiple “Slide Image” entries precede products in the extracted content. | A local-market example of a multi-image entry section. Extraction does not establish its actual timing, animation or pause behaviour. No images, copy or code reused. |

The palette comes from Ekotint's client material and user direction, not competitor colours. Hero composition, gradients, timing and controls are Ekotint implementation choices; no competitor feature was represented as visually or functionally audited.

## Implementation scope and provenance

The previous fourth living-room slide becomes the initial hero slide with its image preserved. Three existing hero room images receive wall-only edits through the built-in image-generation tool: blue dining room, lavender bedroom and magenta reading corner. Existing compositions, furniture, daylight and room use are preserved by the editing instructions. The original image files remain available, and the separate room-inspiration section retains its original assets and poetic copy.

Final initial-to-last slide order and asset manifest:

| Order | Story / palette | Asset in `public/images/` | Dimensions | WebP bytes |
| --- | --- | --- | --- | --- |
| 1 | Previous fourth living room; existing deep purple | `hero-purple-room.webp` (preserved original) | 1536 × 1024 | Unchanged |
| 2 | Dining; brand blue `#2D56A4` | `hero-brand-blue-dining.webp` | 1024 × 1536 | 173,214 |
| 3 | Bedroom; brand lavender `#816FB0` | `hero-brand-lavender-bedroom.webp` | 1024 × 1536 | 182,752 |
| 4 | Reading; brand magenta `#B14E9B` | `hero-brand-magenta-reading.webp` | 1024 × 1536 | 116,234 |

Generated PNG copies use the same new asset stems in `output/imagegen/`; tool originals in `generated_images/` are preserved. Exact prompts and generation provenance are recorded separately in `docs/image-prompts/hero-brand-palette.md`. These are illustrative brand-aligned interiors, not client-project photographs or certified coating matches. Source image dimensions are recorded per slide so portrait edits do not inherit the original landscape dimensions.

The surrounding hero gradients follow the story: living room `#503351` → `#49345c`; dining `#edf1f8` → `#e2e9f5`; bedroom `#f1edf7` → `#e6dff0`; reading `#f7edf4` → `#efddee`. Readable text/buttons remain coordinated with each background. Brand-inspired cards use the exact recorded brand HEX values without claiming those colours are verified catalogue shades.

The carousel uses a resettable five-second timeout. Normal pointer rest does not pause it. Manual arrows/dots/swipe restart the timeout, including selecting the current dot, while explicit Pause persists through manual navigation. Keyboard `focus-visible` pauses until focus leaves or Play is chosen; Play clears that focus pause. Reduced-motion, hidden-document, navigation dropdown, modal and mobile-menu guards remain. This corrects the previous whole-hero hover pause and permanent stop after arrows/dots; the old seven-second checkpoint is historical. These are implementation/source observations, not browser-test results.

## Validation and restrictions

Astra handles UI and source edits. Tests, typecheck, browser QA and build remain unrun and delegated to Sol in `SOL-HERO-BRAND-HANDOFF.md`, following the user's standing division of work. Preserve the latest review-label removal and all unrelated local changes. No push, Site upload, deployment or publication; public version 16 remains unchanged. Genuine reviews/portraits, actual prices/packs and other deferred client inputs remain pending under the previous handoff.

## Studio follow-up — Ekotint colours row, 12 November 2026

The user's screenshot pointed to the studio's HEX/favourites area and explicitly requested brand colours there. Reread the relevant discussion: CEO **02:35:00** asks for brand alignment, and **02:19:45** discusses the hero “Try this colour” path into the studio. Neither statement specifically asks for this row; that choice comes from the latest user request.

Added **Ekotint colours** below the four existing favourites, with corporate blue `#2D56A4`, lavender `#816FB0` and magenta `#B14E9B`. A shared `brandShades` constant supplies both hero and studio. The existing handler updates the room preview, HEX, selected name/circle and save state; buttons retain keyboard access, colour titles and `aria-pressed`, with responsive wrapping. Custom input and the four existing favourites remain intact. These brand references do not establish product shade availability.

[Benjamin Moore's official homepage](https://www.benjaminmoore.com/en-us) was rechecked **12 November 2026** through available text exposing colour/room tools. This informs only the general colour-to-room-preview relationship; no visual widget/timing audit, copied artwork or competitor palette. The corporate HEX values come from the prior client-PDF sampling and user's latest screenshot, without claiming a fresh PDF read. Validation remains unrun and delegated to Sol; no push or publication.

## Exterior brief context — house yellow, 12 November 2026

The user clarified that the Eko Shade brief's “Your current colour” should become the yellow seen on the exterior house, rather than changing the photograph. Reread CEO **02:16:35**, which questions whether a current colour applies to the selected product, and **02:32:55**, which asks for clearer product-linked colours/options. Those statements support contextual clarity; they do not confirm any Ekotint shade/product compatibility. The specific yellow association is the user's latest direction.

Exterior and Roof coating products derive `briefColour` as **Exterior Yellow / `#E9D54B` / Exterior inspiration**. The modal and saved/downloaded brief use that same value. Other product briefs and generic briefs continue to use the current studio selection, and the global studio colour remains unchanged. The existing house image is preserved. This is an inspiration preset, not a verified manufactured paint code or availability claim; demo setup wording remains in internal notes as the user requested.

The representative HEX comes from averaging raw RGB in a 32 × 32 sunlit-wall patch (left 700, top 300) of `public/images/premium-exterior-yellow-v2.webp`, whose original dimensions are 1536 × 1024, using Sharp. This pixel sample is a visual approximation affected by lighting and does not certify a coating match. No image editing was performed for this change.

[Brighto All Weather](https://brightopaints.com/products/all-weather) was checked **12 November 2026** through text extraction exposing a product-linked colour selector. Used only as a reference for keeping a selected product and colour context together; no visual/interaction audit, copied shade, price or layout. Tests/typecheck/browser QA/build remain unrun and delegated to Sol in `SOL-EXTERIOR-BRIEF-HANDOFF.md`. No push, Site upload or publication.
