# CEO section 5 — custom colour and room-photo clarity

13 November 2026, Asia/Karachi. Local only; no publication approval.

## Motivation and current UI

The user supplied translated CEO feedback, **5. Explore EcoTint Paints — Choose a Shade to Explore**. No recording/message timestamp was supplied. The CEO accepts the Interior/Exterior palette, arrows and working colour application, then asks for the HEX feature's purpose to be understandable before clicking, and clearer wording/placement for the future photo-upload option for nontechnical visitors. The assistant read this supplied feedback; it did not participate in the original CEO conversation.

The quoted approximate labels Try Your Hexa Color and Upload Your Computer were not literal current source strings. The current product page already exposed its HEX field without an extra click, and its old upload button said Upload your photo. This task improves that current UI; it does not claim to have removed a nonexistent hidden panel or computer-upload feature. The accepted homepage palette/Interior/Exterior navigation is preserved, with no duplicate colour chooser added.

## Local implementation

- Current16-product detail template: an always-visible **Try your own colour** heading and a short explanation appear above the custom inputs: **Pick a colour or enter a HEX code, such as #A493AE, to preview it on the sample room’s walls.** The field is labelled **Colour code (HEX)**. Picker naming, persistent helper association and invalid-code association are accessible before interaction. The validation message gives a concrete example in plain language. Existing automatic repainting, partial-draft handling, swatches, saving, packs and cart remain.
- The full sample-room preview is visibly labelled **Sample living room**. Its existing simulated-lighting note uses the same sample-room wording.
- A separate compact block below the scene note reads **Try colours in your own room** and **Use a room photo to preview paint on your walls.** It contains a native disabled **Upload room photo** button and visible **Coming soon** status. Purpose/status are associated with the button via unique IDs. The toolbar no longer mixes the future action with the active sample scene.
- New HomeRoomPhotoUpload.tsx/module.css scope this presentation; HomeColourStudio renders it only for its full variant. The decorative backdrop in the homepage product chooser gets no upload button or explanatory panel. Old unused upload styles were removed. No image pixels/mask/paint algorithm, upload/file picker, SAM service, backend, account or delivery feature was added.

## References checked — 13 November

- [Benjamin Moore Personal Color Viewer](https://www.benjaminmoore.com/en-us/color-overview/personal-color-viewer): primary page text distinguishes provided sample rooms from the visitor's own room photos and explains their purpose before a start action. This informed the explicit sample-room versus future own-photo distinction. Ekotint wording/layout/code remain original; no account flow, mobile support claim or real upload capability was copied. This was text extraction, not rendered control/breakpoint validation.
- [Dulux Trade visualiser reference](https://www.duluxtradepaintexpert.co.uk/en/services/colour-tools/visualiser-tool): search surfaced a relevant official description, but opening the page returned403. It was not used as rendered evidence or to establish Ekotint functionality.
- Reread installed Next16.4 client/server-component guide and Sites local-preview workflow. Existing project-local review/publication rules override default publishing behaviour.

## Validation and pending scope

UI/source review is complete. Sol final typecheck, whitespace check and webpack build23/23 passed. Focused1440/390/320 browser checks passed for visible helper/error references, valid/partial/invalid HEX behaviour, native colour-input events, disabled upload placement/status/no file input, IDs/no overflow and representative4L cart handoff. Root reviewed desktop helper/upload and mobile upload captures. The actual homepage chooser-backdrop runtime check remains unverified; source conditionality is peer-reviewed. Full-page sticky-header capture artefacts limit mobile helper visual evidence. Exact evidence/limits: COLOUR-FEATURE-CLARITY-QA-2026-11-13.md; current handoff: SOL-COLOUR-FEATURE-CLARITY-HANDOFF.md. No new unit tests were written for copy. No missing input blocks the completed wording/layout. Real photo upload remains deliberately unavailable for future work; manufacturer pricing/availability/shade data remain separate pending inputs. No publication.
