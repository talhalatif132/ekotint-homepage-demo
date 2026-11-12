# Sol handoff — hero order, palette and autoplay

**Later decisions take priority:** read `CEO-FEEDBACK-STATUS.md` and the current enquiry, typography, section-navigation, studio-upload and inspiration-removal handoffs before using this older checklist. Its inspiration-gallery preservation, homepage brief/save/download or forced-yellow/default-colour instructions are historical where present; do not restore them. Preserve unchanged hero checks, with current optional enquiry preference and user-approved gallery removal. No publication authorization.

12 November 2026. Read `AGENTS.md`, `EKOTINT-PROJECT-HANDOVER.md`, `HERO-BRAND-REFERENCES.md` and `image-prompts/hero-brand-palette.md`, plus relevant installed Next.js guides. Preserve existing local changes. No push, Site upload or publication; public version 16 remains the approved homepage.

The user requested Astra for UI and Sol for tests/build. Astra has not run typecheck, tests, browser QA or build for this refinement. Sol should validate the concrete changes and fix focused defects without redesigning.

## UI scope

- Final slide order: previous fourth dark-purple living room → brand-blue dining → lavender bedroom → magenta reading. Preserve the living-room image `hero-purple-room.webp` (1536 × 1024).
- Align hero slide colours/background tints/gradients with the client brand palette recorded in the handover: blue `#2D56A4`, purple `#816FB0`, magenta `#B14E9B`. These are brand references, not certified product shades.
- Wall-only image edits for the dining, bedroom and reading hero scenes are saved as `public/images/hero-brand-blue-dining.webp` (173,214 bytes), `hero-brand-lavender-bedroom.webp` (182,752 bytes), `hero-brand-magenta-reading.webp` (116,234 bytes); each is 1024 × 1536. PNG copies are in `output/imagegen/` under matching stems. Original assets and the separate room-inspiration section's images/copy are preserved. Exact prompts/provenance are in the image-prompt doc, with manifest and gradients in the hero reference doc.
- Resettable five-second automatic advance; resting the pointer over the hero must not stop it. Manual navigation, including the current dot, resets the timeout without overriding explicit Pause. Keyboard `focus-visible` pauses until leave or Play; Play clears that focus pause. Keep reduced-motion, hidden-tab, navigation-dropdown, modal and mobile-menu guards.
- Keep existing links, hero-to-studio colour selection, palette saving and all unrelated UI. Preserve the user's latest removal of review disclaimer/Design preview/Example price badges; do not restore them during QA. Prices and the pack/final-price note remain.
- Studio follow-up: a separate **Ekotint colours** row below the four existing favourites exposes blue `#2D56A4`, lavender `#816FB0` and magenta `#B14E9B`. Shared `brandShades` supplies hero/studio, and existing selection logic updates the room, HEX, selected name/circle and save state. Check keyboard access, titles, `aria-pressed` and wrapping; custom input/favourites remain. The row follows the user's screenshot request; CEO **02:35:00** provides broader branding rationale and **02:19:45** the studio-flow context. The official Benjamin Moore text-only recheck/provenance limits are appended in the reference doc.

The CEO's **02:19:45** preference motivates the darker initial slide; **02:35:00** requests autoplay and branding alignment. The user's latest instruction determines the first-slide reorder and use of the attached palette. Competitor references were limited to official text/DOM structure, not copied assets or verified timing. Details are in the reference doc.

## Later main-palette follow-up

The user subsequently requested Blues, Lavender and Magenta family tabs after Purples/Neutrals, then explicitly limited Blues to four shades. Read `SOL-COLOUR-PALETTE-HANDOFF.md` for the final 28-visible/32-known colour model and focused checks. The studio Ekotint colours row and this hero implementation remain.

## Focused validation

1. Run `npm run typecheck`, `git diff --check` and `npm run build`; fix actual defects without broadening scope. Avoid the unrelated service on port 3000. If a build requires stopping Ekotint's own dev process, restore the normal local preview on port 3023 afterward.
2. Review 320, 390, 768, 1100 and 1440px. Confirm a fresh load starts on the previous fourth dark-purple/living-room story, all four slides appear in the intended order, and the initial image/colour does not briefly jump from the former first slide. Check image crops, actual dimensions/aspect ratios, loading, layout stability, overlays, legibility, gradient clipping, floating palette card and transitions. Confirm eager/preload choices serve the actual first slide rather than an obsolete order.
3. Observe repeated five-second advances with the pointer resting over noninteractive hero space. Check arrows, every dot, selecting the current dot and touch swipe, including rapid navigation; each manual action should restart the timeout without permanently disabling playback or overriding explicit Pause. Verify four-slide wraparound, current-dot state and displayed/next colour information stay synchronized.
4. Check explicit Pause/Play state and accessible labels. Pause must persist until Play, including across manual navigation; ordinary pointer use must not toggle it accidentally. Verify keyboard focus visibly reaches controls and pauses changes until focus leaves or Play clears the focus pause. Reduced-motion users must not auto-advance, hidden tabs must not accumulate jumps, and navigation dropdowns/modals/mobile menu must suspend updates appropriately. Resume should wait the normal interval rather than jump immediately.
5. Verify hero colour card/links open the existing studio at the expected selected HEX and scroll position, plus Explore colours/Find your finish and saved-colour behaviour. Click and keyboard-activate each new Ekotint swatch; verify exact HEX, wall update, selected name/circle, `aria-pressed`, picker and saved-colour state remain synchronized. Check all three against the shared hero values, responsive wrapping and focus visibility, plus the four original favourites and custom HEX input. Do not alter the studio's original renderer source, wall mask or product compatibility model.
6. Confirm the separate room-inspiration section retains its original photographs and poetic copy, and the header, products, pricing, reviews, contact and single technical-PDF download are preserved. No visible demo-status labels should return; underlying review/price placeholders remain unapproved and internally separate.
7. Record results and any precise limitations in the handover. Keep the local preview ready for the user's review; do not push, upload or publish.

## Pending inputs and previous work

Actual prices/pack sizes, approved customer reviews and permitted profile portraits remain pending. The hero illustrations do not settle named-shade availability or product compatibility. Follow `SOL-PRICING-TRUST-HANDOFF.md` for any still-unrun earlier checks; avoid duplicate validation where prior results exist. Publication requires the user's explicit approval of the new local result.
