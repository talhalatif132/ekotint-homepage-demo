# Part 2 — points 4, 5 and 6

13 November 2026, Asia/Karachi. Local review only; no publishing approval.

## User direction and scope

The user explicitly supplied these three points after the product-page work:

- Point 4 accepts “The Right Starting Point” and its three items for now. Keep that section visible and unchanged; a later decision may remove it.
- Point 5 asks for automatic review movement and removal of visible pause/other navigation controls.
- Point 6 asks for a more premium footer, consistent throughout the website, and better logo presentation against its background.

The original complete translation is `/Users/sam/.codex-account2/attachments/4ab5f073-ae8e-4f1b-b8d4-d08a84501558/Pasted text.txt`. No timestamps were supplied for these statements. The assistant read the CEO/user exchange and did not participate in it. Points 7–13, including review taxonomy, hiding other homepage sections and contact redesign, remain outside this task.

## Implemented locally

- Kept the entire existing confidence/starting-point section and its three items unchanged. Existing visibility decisions elsewhere remain unchanged.
- `HomeCustomerStories.tsx` retains the responsive multi-card review layout and automatic five-second advancement/wrap. Removed visible Pause/Play, previous/next and numeric navigation controls. Native scrolling/swipe/keyboard access and unobtrusive reading, visibility and OS motion-preference guards remain. Sample and approved review data remain separate; this task does not make the existing preview content genuine.
- Added one `HomeSiteFooter.tsx` and scoped CSS module for the homepage, 16 current product pages and preserved catalogue/older detail prototypes. Removed the three competing footer renderers. One dark plum layout now groups the authentic logo, essential navigation and existing contact information, with an understated project action and Back to top.
- The existing715×289 transparent logo has dark lettering. CSS reverses its lettering for the dark footer and overlays its original gradient symbol, avoiding a white rectangle. An independent source review caught a straight clip overlapping the black lettering; a stepped clip now follows the symbol's upper/lower extents. This is a display treatment of the supplied artwork, not an independently approved new logo asset. The source PNG/header logo remain unchanged.
- Footer destinations use existing homepage anchors, telephone/email and supplied TDS PDF. No new privacy/newsletter/social/store/backend routes or links exposing the disabled catalogue were invented. Homepage and legacy project actions retain their existing respective modal handlers; current product pages link to the actual homepage contact section. Saved colours remain accessible through the existing homepage header.
- The original imagery/palettes disclosure is shortened to one quiet footer line. No review content, manufacturer claims, product selection, hero, product-panel spacing or prices are changed.

## References reviewed

Official pages checked on 13 November 2026:

- [Brighto Paints](https://brightopaints.com/): extracted footer text groups useful navigation and company information. This supports a concise, recognisable site-wide navigation group. Its newsletter and unrelated commercial links were not copied because this project has no corresponding service/pages.
- [Benjamin Moore](https://www.benjaminmoore.com/en-us): extracted page text groups testimonials with attribution and separates lower-page tools/site information. This supports retaining the quote/name hierarchy while simplifying the surrounding controls.

These were text/DOM extraction reviews, not rendered visual or animation measurements. Neither source establishes competitor autoplay cadence, hidden controls, inverse logo styling or exact footer geometry. The removal of visible controls comes directly from the supplied CEO/user instruction. The plum/inverse-lettering treatment follows Ekotint’s existing palette and the user's logo-background feedback; no competitor logo, colour catalogue, review copy or claims were copied.

Installed Next 16.4 CSS/client-component guidance and the retained Sites local-preview workflow were read. CSS modules isolate the shared footer from older global footer styles. No dependency or deployment changes.

## Validation and pending inputs

### Review autoplay correction — 14 November 2026

Following the nine-review addition, the user reports “why revie are not sliding?” No message timestamp was supplied. Read against the supplied CEO Part 2 point 5 direction (automatic reviews without visible controls), this motivates removing the whole-section hover stop. Source inspection confirmed that `onPointerEnter` set `hovered`, which blocked the timer until pointer leave. Previous nine-card QA checked autoplay with the pointer outside; it did not establish normal mouse-over playback. Removed only hover state/handlers and their timer/live-region conditions. Keyboard focus, OS reduced motion, visibility and offscreen guards remain; the nine records and visual layout are unchanged. The assistant read these statements, not participated in the original CEO exchange.

Technical references reviewed on 14 November: [W3C Pointer Events — pointerenter](https://w3c.github.io/pointerevents/#the-pointerenter-event) and [boundary events caused by layout changes](https://w3c.github.io/pointerevents/#boundary-events-caused-by-layout-changes), with [MDN pointerenter documentation](https://developer.mozilla.org/en-US/docs/Web/API/Element/pointerenter_event) as a secondary cross-check. These explain element/descendant hit boundaries and stationary-pointer boundary changes; they inform diagnosis only, not carousel design or cadence. No new competitor visual/animation review was performed for this isolated event-handler correction; earlier Brighto/Benjamin Moore design-reference limits above remain. **Sol final typecheck/diffcheck/build23/23 passed.** Actual mouse-over movement passed at1440 (two successive steps) and390; nine cards/no controls/no page overflow and focus/reduced-motion stops passed. Exact evidence/limits: `REVIEWS-AUTOPLAY-FIX-QA-2026-11-14.md`. Mobile was viewport/mouse emulation; wrap/offscreen/hidden-tab and broad regressions were not repeated. Genuine reviews are still a client input, not a blocker for the local fix. No publishing.

### Nine-review follow-up — 14 November 2026

The user asked “add 3 more review so he can start move”. Added three original fictional preview entries, taking the local carousel from six to nine; the empty genuine-review array remains untouched. Existing responsive layout, five-second autoplay, wrap and reading/motion guards are unchanged. New entries use the established decorative avatar fallback rather than referring to nonexistent image files or duplicating named portraits. The source change is only the three sample records.

[Benjamin Moore](https://www.benjaminmoore.com/en-us) was rechecked through official extracted page text on14 November. It retains testimonial quote/name attribution, informing the retained structure only; no wording, identities, performance claims or carousel timing were copied. This is a user-directed content-count change, not a new testimonial-verification or rendered competitor audit. **Sol final typecheck/diffcheck/build23/23 passed**, along with actual1440/390 nine-card count/automatic advance/no controls/no page overflow and three valid SVG fallback checks. No image HTTP errors. Evidence/limits: `REVIEWS-NINE-QA-2026-11-14.md`; previous broader reading/motion-guard checks remain historical because this follow-up changes only three records. No further content input blocks the local preview; genuine reviews remain pending and nothing is approved for publication.

Implementation and independent source review complete. **Sol final typecheck, whitespace check and production build passed (23/23 pages).** Focused browser checks passed across four footer consumers at1440/390/320px: one shared footer, decoded logo, no page overflow and correct real destinations. Homepage project action, product contact link, PDF HTTP200 and Back to top passed. Actual desktop review advancement/wrap and hover/focus/reduced-motion/offscreen guards passed; no visible review controls. Root inspected homepage desktop/mobile and current-product desktop captures, confirming readable inverse lettering and retained gradient symbol. Exact evidence and limits are in `PART2-POINTS4-6-QA-2026-11-13.md`; the handoff is `SOL-PART2-POINTS4-6-HANDOFF.md`. Hidden-tab/mobile review playback, native swipe/card-count matrix and legacy planning activation were not separately reverified; no broad regression or service delivery claim.

No missing input blocks this local UI work. Genuine reviews and manufacturer pricing/shade/TDS data remain separate client inputs; actual enquiry/photo/order services remain deferred. Local visual review and fresh publication approval are still required.
