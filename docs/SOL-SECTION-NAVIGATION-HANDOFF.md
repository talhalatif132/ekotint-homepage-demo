# Sol handoff — section navigation landing points

12 November 2026. Read `AGENTS.md`, `EKOTINT-PROJECT-HANDOVER.md`, `SECTION-NAVIGATION-REFERENCES.md` and relevant installed Next.js guides. Preserve local changes. No push, Site upload or publication; public version 16 remains unchanged.

The user approved direct landings at functional content: Paints & coatings → product tabs/cards; Colour studio → upload toolbar/room image/controls beneath the sticky header. Introductory headings/copy stay in normal page flow, and the current typography choice must remain untouched. CEO **02:19:45**/**02:25:52** motivate clear navigation/studio relationships; the exact landing points are the user's current direction.

Implementation: native URLs stay unchanged. `#paints` now sits on `.product-toolbar`; `#colour-studio` sits on `.studio-workspace`, containing `#custom-colour` upload toolbar + studio layout. Header `ResizeObserver` supplies `--home-header-height`; homepage-only document scroll padding is header + 8px and target scroll margins are cleared to avoid double offsets. `studioVisit` targets the workspace with measured header/reduced-motion handling; protective-finishes scrolling uses the corrected product target. The observer/CSS variable are cleaned up/restored on unmount; no global click interception is introduced.

Astra has not run tests, typecheck, browser QA or build. Sol validates/fixes focused defects without redesign:

1. Run `npm run typecheck`, `git diff --check` and `npm run build`. Use Ekotint's preview on port 3023, avoid the unrelated service on 3000, and restore the owned local preview afterward if stopped for build.
2. In both **Refined and Original** typography at 320, 390, 768, 1024 and 1440px, activate desktop/mobile/footer Paints & coatings and Colour studio routes. Product tabs/cards and studio toolbar/room/controls should begin just beneath the actual sticky header, without being hidden or preceded by the old large heading gap. On mobile, preserve normal stacking rather than requiring every studio control in one viewport.
3. Repeat the same link/hash while already at its destination, navigate between sections, resize across header breakpoints and switch typography modes. Verify current header height/offset and menu-close timing do not produce a stale offset or jump to the old intro. Intro headings must still be present when manually scrolling upward.
4. Test direct `#paints`, `#colour-studio` and `#custom-colour` loads, refresh and back/forward/history, including preserved local product/catalogue links where applicable. Check unique destination IDs, unchanged URLs and correct initial landing after content/fonts settle. Navigate away from the homepage and verify header observer/CSS-variable cleanup does not leave a stale offset on other local routes.
5. Check keyboard activation/focus visibility and reduced-motion preference. A scroll must not trap focus, lose the active controls or force smooth animation for reduced motion. Preserve the Refined/Original choice and development-only comparison controls.
6. Check product filters and selected-product enquiry actions, hero/palette/saved-colour paths to studio, custom HEX preview/save/before-after and the disabled upload/Coming soon state. Existing selected colour and optional enquiry preference must not be reset by navigation. No file input, upload/SAM or enquiry service should become enabled.
7. Record results/limitations in the handover and keep local preview ready. Do not push, upload or publish.

Pending client/service inputs and other focused UI handoffs remain unchanged. This navigation refinement does not approve a final typography choice, add catalogue features or authorize publication.
