# Homepage content from client PDFs

Received 11 November 2026. These notes concern the local homepage review. Publication requires the user's explicit approval, as recorded in AGENTS.md.

## Sources

- `Ekotint Details.pdf`, seven pages: brand name/slogan, brand colour palette, Assez packs and Eko Shade roof coating.
- `Ekotint premium Product.pdf`, five pages: Premium Water Matt, Semi Plastic Emulsion, Primer Emulsion, Wall Putty and Weather Paint.
- `Ekotint premium Product File2.pdf`, five pages: Premium Epoxy, Eko PrimeOxide, 2K Hardener, Synthetic Varnish and Eko Gleam.
- `TDS For Web.pdf`, nine pages: technical sheets and the telephone/address used on the homepage. The original nine-page PDF is available through the homepage technical guide link.

## Artwork

The original embedded JPEGs and their matching PDF soft masks were decoded together and exported as transparent, lossless WebP assets in `public/images/client/`. Empty transparent margins were removed and large images reduced for web delivery without upscaling. Original lettering, packaging design and colours were retained. Existing AI room scenes remain labelled as illustrative inspiration.

Brand swatches sampled from the supplied palette are blue `#2D56A4`, purple `#816FB0` and magenta `#B14E9B`. The established deep purple remains the interactive text/button colour for readability; the source colours appear as brand accents.

## Naming and scope checks

- Details page 5 is captioned “HYDRA-MATT” but its pack clearly reads “CLIMA SHIELD”. Use the packaging name for that asset.
- TDS page 4 explicitly names “EkoMatt (Water Matt)”; page 3 names “EkoGleam (Gloss Enamel)”; page 8 names “EkoRoest (Epoxy)”. These explicit parenthetical names support the corresponding short homepage descriptions.
- The TDS exterior sheet is called “Weather Shield”. Do not automatically equate that name with either Clima Shield or Weather Paint. The Clima Shield homepage summary uses the text printed on its supplied pack.
- Product pack sizes, prices, warranties and the final category hierarchy are not established by these PDFs. No invented quantities, prices, certifications, reviews or general health claims were added.
- The supplied brand palette is a corporate identity palette, not an official named paint shade card. Existing room colour names/HEX examples remain illustrative, and custom colour selection remains available.
- Catalogue and product-detail routes are left for the later phase. Homepage calls to action stay within the homepage, the local project brief, the supplied technical guide or the phone contact.

## Header contact addition — 11 November 2026

The user supplied utility-bar references and requested a fuller header. Added `support@ekotintpaints.com` as a `mailto:` link, matching the email published on [Ekotint’s contact page](https://ekotintpaint.com/contact-us/) and homepage when reviewed in this session. This confirms the published address, not email delivery. The client TDS phone `021-35121487` and Karachi address retain precedence over the older website’s different phone number. No social profiles, store-locator data or translated pages were supplied by this change.

## Product grouping verification — 12 November 2026

Re-read the three original product PDFs and the nine-page TDS, compared their rendered packaging pages, and checked `src/lib/homepage-content.ts`. The two Premium files contain ten products in the same Premium Series; Details contains five Assez packs and one Eko Shade roof-coating pack. PDF filenames do not define separate series. Details page 5 still has the Hydra-Matt caption/Clima Shield pack mismatch.

The homepage's five tabs are provisional browsing filters introduced during implementation, not a client-approved category hierarchy:

| Current filter | Current products |
| --- | --- |
| Interior | Water Matt; Hydra-Matt; Semi Plastic Emulsion in both Premium and Assez |
| Exterior | Clima Shield; Weather Paint |
| Wood & metal | Epoxy; Eko Gleam; Synthetic Varnish; Assez Gloss Enamel; 2K Hardener |
| Roof coating | Eko Shade |
| Preparation | Primer Emulsion; Wall Putty in both Premium and Assez; Eko PrimeOxide |

Evidence and limits: TDS page 4 explicitly supports interior Water Matt; page 9 interior Semi Plastic Emulsion; page 6 interior/exterior Primer Emulsion; page 1 interior Wall Putty; page 3 interior/exterior Eko Gleam on walls, wood and metal; page 8 interior/exterior Epoxy on concrete, wood and metal. Hydra-Matt and Clima Shield pack descriptions identify interior and exterior respectively. Eko Shade's PDF explicitly identifies roof coating. Weather Paint's exterior placement, Synthetic Varnish's wood placement, Eko PrimeOxide's preparation placement and 2K Hardener's grouping are provisional inferences from product names/types, not complete client technical confirmation. The supplied Weather Shield TDS cannot be silently assigned to Weather Paint or Clima Shield.

The current `category` field permits only one group per product. This is too restrictive for multi-use products: Epoxy, Eko Gleam and Primer Emulsion have documented overlapping uses. Future catalogue modelling should separate series, environment, surface and product role, supporting multiple applicable tags. 2K Hardener should be represented as a compatible coating-system component, not an independently applied wood/metal finish; the specific system and ratio need client confirmation. Final top-level categories/subcategories still require the client's hierarchy. This verification made no application or deployment changes.

### Promotional heading and repeat inventory check

The user subsequently requested a promotional heading while explicitly preserving the UI. Updated only the finishing-section H2 to “Featured finishes.” below the existing Premium Series eyebrow. The remaining layout, styling, products and interactions are unchanged. Repeat comparison with the original three product PDFs found all 16 supplied packs represented with unique identities and existing image files. Browser verification confirmed both Semi Plastic Emulsion entries under Interior, each opening a brief with the correct Premium/Assez series and image. Current filter counts are Interior 4, Exterior 2, Wood & metal 5, Roof coating 1, Preparation 4; all 16 image URLs returned HTTP 200. Desktop 1440px and mobile 390px checks passed without horizontal overflow or page errors. These checks confirm inventory/rendering, not new client approval of provisional application mappings. No publication was performed for this local heading update.
