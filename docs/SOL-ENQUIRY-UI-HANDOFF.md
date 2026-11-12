# Sol handoff — homepage enquiry UI

12 November 2026. Read `AGENTS.md`, `EKOTINT-PROJECT-HANDOVER.md`, `ENQUIRY-UI-REFERENCES.md` and relevant installed Next.js guides. Preserve all local changes. No push, Site upload or publication; public version 16 remains unchanged.

The user chose **“Prepare the demo UI only for now”**, with no service configured. Astra implemented UI; tests/typecheck/browser QA/build are unrun and delegated to Sol. Fix focused defects without redesign or adding backend/transmission.

## Current scope

- Homepage brief/save/download is replaced by `HomeEnquiryForm.tsx`: required name/phone, optional email, project/notes, selected product and optional **Preferred colour**. Change colour offers colour/saved ideas and optional HEX; Help me choose leaves the shade open.
- Homepage project/product/search/saved-ideas entry points now open the enquiry dialog. Enquiry-only styles in `homepage.css` add a lavender top border, paired desktop fields, stacked mobile fields, a colour summary and call/edit actions; other dialogs keep their existing styling.
- Submit enters the local **“Your enquiry is ready.”** state, with product/colour summary, phone link and Edit details. It does not send or persist an enquiry, generate a download or claim delivery.
- Forced Exterior Yellow and automatic initial-studio defaults are removed. Only a deliberate valid URL colour or user selection through hero/palette/search/saved preview, studio favourites/custom HEX/picker or save action carries into a new enquiry. Initial/default scene colour yields no preferred colour. The form's changes/help state are local and do not overwrite the studio or global saved colours.
- CEO **02:16:35** motivates enquiry/colour context and **02:24:18** questions generic versus product-specific colours. The optional-preference controls follow the user's approval and do not establish availability. UI-only scope remains; real submission is pending. Brighto contact/All Weather text-reference dates/limits are in the reference doc.
- Deferred catalogue/product prototypes are untouched. Older homepage brief/download handoff steps are historical; do not restore that flow or demo-status labels during QA.

## Focused validation

1. Run `npm run typecheck`, `git diff --check` and `npm run build`; fix actual defects. Use Ekotint's preview on port 3023 and avoid the unrelated service on 3000. If stopping the owned dev process for a build, restore the preview afterward.
2. Open enquiries through homepage product cards, search, header/generic project actions and saved-ideas actions. Confirm product artwork/name/series/finish and project default match the selected product, while generic enquiries do not retain a previous product. Verify saved colour ideas appear when present and their long text wraps.
3. Check empty required name/phone and malformed optional email validation; empty email is accepted. Preferred colour/HEX must be optional, allowing submission without a preference or with Help me choose. Partial/invalid HEX must not silently become a selection or replace a valid preference; supported valid HEX must normalize correctly. Check labels, phone keyboard/autocomplete and lengths. Do not add service/destination/phone-format policy for QA.
4. Fill contact/project/notes, select swatches/saved ideas and custom HEX, then submit. Check the ready summary matches the selected name/HEX or no-preference/help state and retains the product. Edit must preserve entered values and local preference/help state in the mounted form; resubmission must keep context. Check focus/announcement, swatch selection, keyboard order, Escape/close and return focus. Closing/reopening may reset the form; do not imply persistence.
5. Check 320, 390, 768 and 1440px: modal scrolling, field stacking, expanded colour controls, swatch/saved-idea/HEX wrapping, focus and mobile keyboards. Preserve the surrounding homepage, Roof coating layout, price/pack note, review-label removal and disabled upload/SAM UI.
6. Fresh load without deliberate colour selection must yield no preference for Eko Shade, Exterior, Interior and generic enquiries: no forced yellow or initial default. Separately exercise valid URL colour, hero/palette/search/saved-preview, studio favourites/custom HEX/picker and save actions; each deliberate choice should carry to a new enquiry. Passive hero autoplay must not count as a choice. Change/clear/Help me choose within the form and verify global studio HEX/before-after/favourites remain unchanged. Check new product/generic enquiry for leaked local state, preserving product/project metadata through all changes. The exterior photo remains unchanged.
7. Confirm submitting does not issue an enquiry fetch/API/email, write enquiry/contact data to localStorage/sessionStorage, generate a brief download or claim “sent”/delivery. Existing saved-colour storage may remain; do not confuse that with enquiry persistence. Preserve any pre-existing legacy brief data rather than deleting it. No real phone call is needed to verify the `tel:` target.
8. Record results and limitations in the handover; keep local preview ready for review. No push, upload or publication.

## Pending integration and inputs

An agreed enquiry service/destination, real delivery/error handling and delivery testing remain unimplemented. Do not add them without a new scoped request. Client-approved product/colour compatibility and a real shade catalogue, actual prices/packs and genuine review material/portraits remain pending. Current colours are ideas, not verified availability. This UI does not resolve those inputs, enable upload/SAM or change catalogue prototypes.
