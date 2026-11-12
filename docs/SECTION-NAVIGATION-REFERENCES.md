# Section navigation landing points

12 November 2026. User-approved local UI refinement; no publication approval.

## User and CEO context

The user requested that **Paints & coatings** land directly at the product tabs/cards below the sticky header, and **Colour studio** land at the upload toolbar/room image/controls rather than the large introductory heading/gap. The introductory content remains available when scrolling normally. This task changes navigation destinations, not the choice between Refined/Original typography.

Reread the supplied CEO/user discussion: **02:19:45** describes hero “Try this colour” reaching the studio and the Explore colours/Find your finish routes; **02:25:52** asks for a clear relationship between the upper palette and lower room/controls, with prepared and personal-photo paths. These support navigation clarity, but the precise landing points come from the user's current screenshots/request. The assistant read that recorded discussion and was not a participant in it.

## Technical reference

[MDN `scroll-margin-top`](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/scroll-margin-top), checked **12 November 2026** through documentation text (the older `/Web/CSS/scroll-margin-top` URL redirects here), describes a top scroll-area outset. It informs accounting for the sticky header at a destination rather than adding a decorative blank region. This is technical reference material, not a claim that a competitor uses the same navigation behaviour or a visual/interaction audit. The exact header offset/landing logic is an Ekotint implementation choice.

## Scope and validation

The refinement uses the existing native links/URLs. `#paints` moves from the padded section to `.product-toolbar`. `#colour-studio` moves from the intro section to a plain `.studio-workspace` wrapper containing the upload toolbar (`#custom-colour`) and existing studio layout. Headings remain outside those targets for normal scrolling; desktop/mobile/footer and prototype URLs do not change.

A `ResizeObserver` measures the sticky header into document CSS variable `--home-header-height`, with cleanup/restoration on unmount. Homepage-only `html:has(.home-site)` scroll padding uses header height + 8px, while target scroll margins are cleared to avoid the former doubled offset. The selected-colour `studioVisit` scroll now targets the workspace using the same measured header + 8px and reduced-motion preference. Protective-finishes navigation uses the relocated `#paints` target and respects reduced motion. Native anchor/history behaviour remains; no global click interception or hardcoded scroll coordinates are added.

Palette/filter behaviour, studio selection/preview, disabled upload, optional enquiry colour, hero and typography comparison remain intact. No service, file upload or SAM work is added. Tests/typecheck/browser QA/build remain unrun and delegated to Sol in `SOL-SECTION-NAVIGATION-HANDOFF.md`. Existing local work remains preserved; no push, Site upload or publication, and public version 16 remains unchanged.
