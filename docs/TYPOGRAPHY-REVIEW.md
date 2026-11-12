# Homepage typography comparison

12 November 2026. User-approved local UI comparison; no publication approval.

## Discussion and rationale

At **02:37:31** in the supplied conversation, the CEO requested a review of font families, sizes and weights: try a more elegant/professional alternative, then revert if the result is worse. The user first asked for advice and subsequently said **“ok do that”**, approving implementation of the proposed comparison. This approval supersedes the earlier advice-only checkpoint for typography; it does not authorize publication. The assistant read the CEO/user exchange and was not a participant in it.

The refinement is an Ekotint design judgment rather than a claim that serif type is objectively poor. It tests a quieter Manrope hierarchy, fewer repeated italic display accents and more readable supporting copy while retaining the original for comparison.

## Font provenance and scope

Existing local `@font-face` definitions in `src/app/globals.css` provide:

| Family | Existing file | Declared weights/style |
| --- | --- | --- |
| Manrope | `/fonts/manrope.woff2` | 400–700, normal |
| Cormorant | `/fonts/cormorant-regular.woff2` | 400, normal |
| Cormorant | `/fonts/cormorant-italic.woff2` | 400, italic |

Original styling uses Manrope for body/navigation/products and Cormorant for display accents, review quotations and some caption/tagline treatments. These are observations from the local source, not newly downloaded fonts or a competitor-font identification.

`src/app/typography.css` adds a scoped `.typography-refined` layer on the homepage wrapper and portalled dialogs. Refined mode uses Manrope for body/display text, consistent 600 headings, roughly 16px body copy and 12–14px supporting hints where appropriate, with responsive sizing. Original CSS/fonts remain available as the fallback/comparison; preserved catalogue pages do not receive a global restyle. No new font, package or persistence is added.

`HomeTypographyComparison.tsx` supplies compact bottom-right Refined/Original controls, defaulting to Refined. The review bar is gated by `process.env.NODE_ENV === "development"` and hidden while a modal or mobile menu is open; it is not a production customer-facing control. Original removes the refinement class to restore pre-task typography. Changing modes is temporary local state and does not alter product data or homepage functionality.

## References and review limits

[Brighto](https://brightopaints.com/) and [Benjamin Moore](https://www.benjaminmoore.com/en-us) were rechecked **12 November 2026** through available text. This exposed content structure, not verified font families, computed sizes or rendered typography. No CSS/computed-font or visual audit is claimed, and no competitor fonts/assets were copied. The font choice and hierarchy come from the existing Ekotint font files, CEO request and user-approved recommendation. Any additional reference observations are limited to their documented method.

[Google Fonts' Manrope metadata](https://github.com/google/fonts/blob/main/ofl/manrope/METADATA.pb), checked **12 November 2026**, identifies the upstream family as normal sans-serif, variable 200–800, under OFL. The project retains its existing local font binary and `@font-face` range 400–700; the refinement uses 400/500/600 rather than introducing another download/version or dependency. Upstream metadata informs family classification, while the actual project declaration remains the source for local usage. The typography treatment is an original comparison.

## Validation and remaining decision

Tests/typecheck/browser QA/build are unrun by Astra and delegated to Sol in `SOL-TYPOGRAPHY-HANDOFF.md`. No claim of pixel-perfect layout or passed accessibility checks is made. The user still needs to assess Refined versus Original locally; preserve both until that decision. Previous functional work and pending client/service inputs remain unchanged. No push, Site upload or publication; public version 16 remains the approved hosted checkpoint.
