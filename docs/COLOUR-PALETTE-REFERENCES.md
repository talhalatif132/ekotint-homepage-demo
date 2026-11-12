# Colour-family additions — discussion and references

12 November 2026, Asia/Karachi. Local UI/source work only.

## User and CEO requests

- CEO **02:24:18** asked whether more colour-family tabs could be added and whether shades were generic or linked to products. CEO **02:25:52** asked what clicking a shade does and how it connects to the room preview. These are recorded CEO/user statements; the assistant was not a participant in their original conversation.
- The user asked to include the three brand colours from the screenshot, then clarified: after Purples and Neutrals, add Blue, Lavender and Magenta **with their shades**, rather than a separate Ekotint colours tab.
- The user then explicitly limited Blues to **four shades**. Final visible family order: **Purples → Neutrals → Blues → Lavender → Magenta → Greens → Earth tones**. Four cards per family, 28 visible entries total; Purples remains the initial family.

## Colour provenance

Exact corporate base colours reuse the existing shared brandShades and recorded client-PDF sampling: Blue #2D56A4, Lavender #816FB0, Magenta #B14E9B. No fresh PDF extraction is claimed. Nine additional light/soft/deep tones are authored illustrative screen-colour variations, not additional colours supplied or approved by the client. Light/soft tones blend 72%/38% white in encoded RGB; deep tones retain 78% of each encoded channel. This is digital palette authoring, not a physical paint-mixing formula.

| Family | Base and three variations |
| --- | --- |
| Blues | Ekotint Blue #2D56A4; Airy Blue #C4D0E6; Soft Cobalt #7D96C7; Midnight Blue #234380 |
| Lavender | Ekotint Lavender #816FB0; Lavender Veil #DCD7E9; Soft Lavender #B1A6CE; Deep Lavender #655789 |
| Magenta | Ekotint Magenta #B14E9B; Petal Magenta #E9CDE3; Soft Magenta #CF91C1; Deep Magenta #8A3D79 |

Original Purples, Neutrals, Greens and Earth tones remain unchanged. The four former generic Blues are excluded from the visible palette/search, but retained in original shades[] and knownShades for old favourites, studio favourites and linked/custom HEX recognition. No stored colours are deleted. The original index-based hero/default/favourite references remain intact.

## Reference checked

[Benjamin Moore — Colors by Family](https://www.benjaminmoore.com/en-us/paint-colors/color-families), checked **12 November 2026** via text extraction. The page groups named colours into families. It informs only family-based browsing; no visual/interaction audit, copied card layout, competitor shade names/codes or borrowed brand colours. Ekotint's existing arched cards, save controls, responsive grid and room-preview action remain its own existing UI.

## Scope and validation

Main family tabs and header family menu now share seven families and a named representative-swatch map. The existing studio Ekotint colours row intentionally remains. Preview/save use the existing handlers. Visible search uses the 28-entry palette; saved legacy names, URL HEX and custom HEX recognition use the 32-entry known-colour list. Corporate colours do not establish product compatibility or an official paint shade card; existing illustrative palette copy remains.

Source review only; tests, typecheck, browser QA and build remain unrun for Sol under AGENTS.md. Read SOL-COLOUR-PALETTE-HANDOFF.md. No push, Site upload or publication; approved public version 16 is unchanged. Preserve all unrelated pending hero, pricing and review UI.
