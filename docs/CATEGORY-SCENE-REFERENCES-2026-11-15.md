# Category-relevant product imagery — 15 November 2026

## User and CEO instructions

The supplied CEO translation says Exterior still shows indoor settings, Roof Coating should show roofs, and every category should represent its purpose for the client demo. No original voice-message timestamp supplied. User confirmed the shared product-page preview screenshot as the likely target, then instructed “ok do that”. This authorises local implementation, not publishing. The assistant did not participate in the original CEO conversation.

The first four new assets (bare grey roof, isolated grey gate, timber close-up, unfinished grey wall) were explicitly rejected: user answered “I don’t like them—change them.” They then supplied the existing lavender courtyard hero and praised the existing beautiful interior, saying exterior/roof options looked rough. Revised direction: match the existing warmth, lavender/blue architecture, green planting and sunlight. Keep the interior image and hero intact. Rejected drafts are not consumed by the project.

## Reference review and limits

- https://brightopaints.com/collections/exterior — official search extraction reviewed15November: exterior products and Roof Topcoat are separate relevant use cases.
- https://brightopaints.com/products/brighto-flexi-roof-topcoat — official page opened15November, description explicitly identifies a roof-protection system. Text/product imagery links informed choosing a flat roof scene; no Brighto photo, technical/performance claim, palette or code was copied. No rendered competitor layout/motion audit for this task.
- https://www.dulux.co.uk/en/articles/dulux-weathershield-exterior-paint-colour-guide and https://www.dulux.com.pk/en/decorating-tips-and-advice/house-and-wall-paint-colours-faqs — official search excerpts support separate masonry/wood/metal contexts. Direct page opens returned403; excerpts only, not a full visual review.
- Primary visual references are the user's existing `hero-exterior-lavender-courtyard-v4.webp` and `hero-room.webp`, both inspected locally. Revised raster assets are original built-in imagegen outputs, not downloaded competitor photographs or actual client project evidence.

## Scene decisions

- Interior: existing sunlit sofa/wall unchanged.
- Exterior product pages: new lavender courtyard, colour on clear facade only; entry/wood/planting preserved. **Latest user correction:** for the homepage Exterior modal, restore the original beige `premium-exterior.webp` photo from the user's second screenshot, with its original Exterior inspiration caption. This static popup image does not imply current colour application; selected shade and direct product-page link remain. Interior popup stays unchanged.
- Roof coating/Eko Shade: revised v3 natural stone-toned flat rooftop with an ivory pavilion and olive planting; colour on roof plane only, preserving pavilion, sky and greenery. User explicitly rejected the saturated lavender/pergola v2 scene as cartoonish.
- Eko Gleam/Assez Gloss Enamel: revised v3 photographic-style satin steel gate in an ivory garden entrance, replacing the artificial-looking v2 lavender gate.
- Epoxy: restored the approved original room image as wall-coating inspiration. User questioned the gate choice and its relevance. Client evidence recorded in CLIENT-HOMEPAGE-CONTENT.md identifies TDS page8 as supporting interior/exterior concrete/wood/metal; this is broader than a garden-gate-only visual. No claim that every exposed gate or flooring system is supported. Additional official research https://www.brightopaints.ae/products/brighto-epoxy-shield-top-coat and https://www.international-pc.com/en/products/epoxy-primer-70rs confirms metal protective-coating contexts for those specific products; not proof of Ekotint gate suitability. Existing approval of the beautiful room informs the restored photo, not a new invented specification.
- Synthetic Varnish: natural walnut entrance; static natural timber, no fake opaque HEX repainting. Project-colour controls retained with explicit wording.
- Hardener/Eko PrimeOxide: static finished coating-system inspiration, with compatibility guidance; no claim that hardener itself supplies a colour or unverified substrate specification.
- Primer/putties: existing beautiful finished-wall room, explicitly labelled as finishing-coat inspiration over a prepared base. No new claim that primer/putty is the coloured finish, and no rejected rough wall image.

Shared renderer accepts scene metadata and surface masks; keeps the single existing swatch/HEX/save/cart flow. Descriptions, stage labels, accessible text, before label and disabled upload wording follow the scene. Original median layout/hero/pack artwork/availability gates remain. Scene image masks are illustrative, not product test evidence. Confirm physical shade/product suitability remains visible.

## Assets and validation

Current selected masters: `output/imagegen/category-scenes-v2/{exterior,wood}-v2.png` and `output/imagegen/category-scenes-v3/{roof,metal}-v3.png`; matching runtime files in `public/images/previews/`, each1536x1024, WebP quality94. Original/rejected masters preserved without edits. Exact built-in prompts and paths: `image-prompts/category-scenes-v2.json` and `image-prompts/category-scenes-v3.json`. No CLI/API image generation or new dependency. Searches for real rooftop reference images returned largely tiled/deck terraces or third-party property images without established reuse rights; none downloaded or used. The new assets remain generated illustrations of use, not real client project photographs.

Initial Sol typecheck/whitespace/build23/23 and all16 route mappings/assets plus focused HEX/before/chooser/cart checks passed: `CATEGORY-SCENES-QA-2026-11-15.md`. Root inspected desktop captures. User then questioned white/pale outdoor colour response and showed Soft Vanilla/Chalk White turning near-white; subsequently rejected roof/gate realism. The first balanced-response pass/build passed, with exterior/gate captures inspected, but v2 roof/gate visual acceptance is superseded. Current v3 replacement and Epoxy restoration need final focused validation.

Current outdoor transfer uses source-specific base-luminance references (facade .70, roof .70, gate .46) and bounded shadow gain .65–1.0, normalising against reference×1.15. It adds no white reflection blend and never brightens beyond the chosen channel, preserving pale-colour identity instead of clipping cream to white. Existing interior/preparation/Epoxy room lighting curve and all accepted interior/exterior image files remain. Final narrow capture/build scope: `SOL-CATEGORY-SCENES-HANDOFF.md`.

Sol v3 type/whitespace/build23/23 and focused pale roof/dark+pale enamel/restored Epoxy/Exterior captures passed. Root inspected and accepted roof Soft Vanilla, blue enamel and restored Epoxy; final user modal-only restore passed source/whitespace/build23/23 checks, while two bounded browser activation attempts timed out before image assertions. No runtime capture of the restored popup is claimed; details in the QA report. Later two-step slider browser checks did hydrate successfully, but did not repeat the old-popup image assertion. Product scene decisions remain; no hero/accepted image edits.

No client input blocks this local visual correction; actual shade availability, price/packs, twelve technical sheets and genuine reviews remain separate client inputs. Do not push/deploy; previous publication approval was fulfilled.

## Roof coating question after imagery acceptance

User now accepts the roof image but questions generic colours and asks interior roof versus exterior roof. Inspected the supplied Eko Shade pack at `public/images/client/hd-eko-shade-v1.webp`: label explicitly reads Water & Heat proof Roof Coating. Original client Details PDF product placement was already recorded in CLIENT-HOMEPAGE-CONTENT.md. Classification is the exterior rooftop application, not an interior ceiling paint. https://www.roofcoatings.org/faqs/ was opened15November and describes exposed roof surfaces, UV/waterproofing protection and manufacturer-specific requirements; this supports general context, not Ekotint shade/traffic/performance certification.

The nine current swatches are general illustrative design colours, not a supplied Eko Shade colour range. No verified Eko Shade shade card/TDS was provided. Do not claim these are available roof finishes, or replace them with invented white/grey stock choices. User's latest question received explanation only; roof palette/source still unchanged pending a specific correction instruction. Actual confirmed roof colours remain a client input. New unrelated request to remove review-link strip is handled in SOL-REVIEW-LINKS-HANDOFF.md.
