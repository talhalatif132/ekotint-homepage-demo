# CEO slider condition and centred colour chooser

15 November 2026, Asia/Karachi. User supplied WhatsApp screenshots: CEO at01:23 requested automatic sliders and “Centre align krdo / Modal ko”; at01:25 clarified products and the lower colours, first checking Brighto and only adding autoplay where the reference does it, otherwise leaving it for now. The user authorised implementation with “ok plz do it then”. These are supplied screenshot timestamps; the assistant did not participate in the original CEO conversation. Earlier Part2 points7–13 and the latest handover were reread. This work is local review only; the preceding Vercel publishing approval was fulfilled by the14November release.

## Actual reference check

Checked https://brightopaints.com/ on15November using current HTML/inline configuration and Sol's read-only desktop1440 browser inspection. The reference differs by slider:

- Six product-grid Swiper instances had runtime autoplay disabled, with active index0 unchanged over8seconds. Product Slick selectors `.product_slider` / `.product_slider_ex` also had autoplay false and unchanged index0.
- Lower interior/exterior colour tracks `#shades_int` / `#shades_ext` had Slick autoplay true,2000ms,6visible; indices advanced3→12 over8seconds. The visible Interior track moved. Exterior runtime index advanced while its panel was hidden, so this is not a claim of visible Exterior motion.
- Hero movement was explicitly excluded from the decision. Library defaults and mere arrow presence were not treated as autoplay evidence.

Temporary evidence: `/private/tmp/brighto-slider-inspect.json`; raw official HTML `/private/tmp/brighto-home-2026-11-15.html`. Text-only web extraction also loaded, but cannot establish timed behaviour. Mobile Brighto behaviour was not checked.

## Implementation decision

Apply the condition per slider: retain manual product navigation; add autoplay to colour ideas only. Ekotint advances one colour after a five-second dwell for reading, rather than copying Brighto's quicker multi-item timing. Existing arrow/swipe controls remain. No card duplication or extra slider library.

**Latest user override:** after seeing automatic one-by-one movement, user requested “skip2” with Exterior-circle screenshot. Current cadence advances TWO measured item pitches per autoplay/arrow action, preserving five-second dwell and safe end clamp/wrap. This direct instruction supersedes the one-colour choice above; it is not a Brighto count claim. Final focused validation combined with review-link deletion in SOL-REVIEW-LINKS-HANDOFF.md.

The colour timer runs only while its row is visible and overflowing. It resets after scrolling/manual interaction and palette changes; pauses for keyboard focus, touch/pointer drag, open homepage overlays, hidden document and reduced motion. At the end it returns instantly to the first colour. This avoids a long animated rewind. Listeners/observers/timer clean up on unmount or context changes. It does not auto-select colours or open the modal.

The chooser gets explicit viewport-centred grid placement, bounded internal scrolling and a vertically balanced right pane for both two- and four-paint results. Text remains left aligned. Existing images, widths, max-heights, title, product links/selected HEX, Close/Escape/backdrop and focus cleanup remain. No hero, review, product-detail, contact or catalogue changes.

Installed Next CSS Modules/global-CSS guide and use-client reference were read; changes stay in the existing client component and chooser-scoped styles. No new dependencies.

Sol typecheck/whitespace/webpack build passed (23/23 pages), as did actual colour timing/motion/focus checks and all eight settled desktop/mobile popup geometry cases (exact viewport centre, no horizontal overflow). Root inspected and accepted desktop Exterior/mobile Interior captures. Exact test and harness limits, including unrun guards and the immediate query-effect colour snapshot, are recorded in `SLIDERS-MODAL-QA-2026-11-15.md`. No client input blocks the conditional decision or local implementation. No push/deployment.
