# Wide image-led hero assets — 13 November 2026

The user's latest hero direction asks for a large full-width room image with short copy instead of the crowded left-column composition. The earlier supplied CEO transcript at **02:19:45** preferred the fourth/dark-purple living-room slide, and **02:35:00** requested brand-aligned image colours. These are recorded CEO/user statements, not a conversation the assistant participated in. The integrating agent handles page layout, reference-site notes and the Sol handoff.

This asset-only task preserves the existing dark-purple landscape first image and creates three wide versions from the previously generated brand-colour portrait scenes. No original asset was overwritten. No external photography or reference-site imagery was copied. These remain original AI-created room inspiration, not photographs of completed Ekotint customer projects or evidence of paint availability.

## Method and inspection

- Read the local imagegen skill and prompting guide; used the **built-in image_gen tool** in edit mode with one referenced local image per call. No CLI/API fallback.
- Inspected all three portrait targets with view_image before editing; inspected the three generated outputs afterward for composition, furniture completeness, style and visible text/logos.
- Requested a single 16:9 landscape composition, ideally 2048 × 1152. All three actual tool outputs are **1672 × 941** (approximately 16:9); use these actual dimensions in markup.
- Copied PNG masters from the default generated_images destination into output/imagegen. Encoded the website siblings with the installed Sharp package using WebP quality **88**, width cap **2048**, without enlargement. Actual dimensions remain 1672 × 941; no crop or creative image edit was performed by Sharp.
- The corporate HEX values in the prompts guide wall hue under simulated natural room lighting. These photographs are not calibrated physical shade samples; exact RGB pixel matching was not asserted.
- Output inspection is asset review only. **No browser QA, typecheck, tests or build were run.** Nothing pushed, uploaded to Sites or published. Responsive crop/overlay testing remains with Sol.

## Assets and composition

| Website asset | Actual size | WebP bytes | PNG master bytes |
| --- | --- | ---: | ---: |
| public/images/hero-wide-blue-dining-v1.webp | 1672 × 941 | 129570 | 1931096 |
| public/images/hero-wide-lavender-bedroom-v1.webp | 1672 × 941 | 179556 | 2355998 |
| public/images/hero-wide-magenta-reading-v1.webp | 1672 × 941 | 162658 | 2105836 |

### blue-dining

- Edit target: `public/images/hero-brand-blue-dining.webp` (1024 × 1536).
- Built-in generated original: `/Users/sam/.codex-account2/generated_images/01a1cf41-f8b4-7001-b4f7-c16dc0095eb3/exec-afe1125e-1f26-4fad-ac81-b9f0b76141fe.png`.
- Preserved project master: `output/imagegen/hero-wide-blue-dining-v1.png`.
- Website sibling: `public/images/hero-wide-blue-dining-v1.webp`.
- Observed composition: Dining group around 63% horizontal; alcove around 80%; left third is largely uninterrupted blue wall.
- Suggested starting crop: desktop `50% 50%`; narrow screens around `64% 50%` to retain the furniture. These are composition suggestions, not browser-verified values. Full cover crops cannot preserve every object at every screen ratio.

Exact built-in edit prompt:

```text
Use case: precise-object-edit.
Asset type: full-width paint-brand homepage hero photograph.
Input image: the supplied local blue dining-room photograph is the edit target.
Primary request: expand and recompose this same interior into ONE panoramic landscape photograph, 16:9 composition, ideally 2048 by 1152 pixels. Recreate the room beyond the existing portrait edges; do not crop the portrait into a thin strip.
Preserve: the recognizable round walnut pedestal dining table, two walnut chairs with cream seats, blue arched wall alcove with walnut shelves, trailing green plant, neutral ceramics, light stone floor and warm natural daylight. Keep the coherent warm editorial photographic style and real wood/fabric texture.
Composition: pull the camera back for a full spacious room view. Place the whole dining group and arched alcove predominantly in the centre-right two thirds, showing complete table and chair legs. Extend an uninterrupted matte blue wall through the left third, including the lower-left region, with quiet low-detail space suitable for a small HTML headline overlay. Daylight may enter from outside the far-left frame; do not add a bright window over the left text space. The image itself contains no text.
Palette: retain Ekotint brand blue #2D56A4 as the dominant painted-wall colour under believable sunlight/shadow; warm cream, walnut and stone furnishings unchanged.
Avoid: people, lettering, logos, watermarks, multiple panels, excessive new objects, distorted furniture, floating objects, extreme wide-angle distortion, repeating texture, cutting off the dining furniture.
```

### lavender-bedroom

- Edit target: `public/images/hero-brand-lavender-bedroom.webp` (1024 × 1536).
- Built-in generated original: `/Users/sam/.codex-account2/generated_images/01a1cf41-f8b4-7001-b4f7-c16dc0095eb3/exec-05f0e297-5638-48c2-ad7e-e761be8f75b8.png`.
- Preserved project master: `output/imagegen/hero-wide-lavender-bedroom-v1.png`.
- Website sibling: `public/images/hero-wide-lavender-bedroom-v1.webp`.
- Observed composition: Bed around 65% horizontal; window at right; left third is a broad lavender wall.
- Suggested starting crop: desktop `50% 50%`; narrow screens around `64% 50%` to retain the furniture. These are composition suggestions, not browser-verified values. Full cover crops cannot preserve every object at every screen ratio.

Exact built-in edit prompt:

```text
Use case: precise-object-edit.
Asset type: full-width paint-brand homepage hero photograph.
Input image: the supplied local lavender-bedroom photograph is the edit target.
Primary request: expand and recompose this same interior into ONE panoramic landscape photograph, 16:9 composition, ideally 2048 by 1152 pixels. Recreate the room beyond the existing portrait edges; do not crop the portrait into a thin strip.
Preserve: the recognizable low cream upholstered bed, layered natural linen bedding and cushions, single rust accent cushion, walnut bedside table, small ceramic vessel, pale stone floor, woven rug and sheer cream curtains by the right window. Keep warm editorial interior photography, natural material texture and morning light.
Composition: pull the camera back for a complete bedroom context. Place the bed and bedside furniture predominantly in the centre-right two thirds, keeping the bed as a complete recognizable form. Extend a quiet uninterrupted lavender wall into the left third and lower-left region for a small HTML headline overlay. Keep the right window/curtains at the far right, with soft sunlight. The image itself contains no text.
Palette: use Ekotint lavender #816FB0 for the dominant painted wall under believable room light; retain cream linen, walnut and warm stone. No strongly contrasting extra wall colours.
Avoid: people, lettering, logos, watermarks, multiple panels, excessive new objects, hotel advertising, distorted beds, floating furniture, extreme wide-angle distortion, repeating textures, chopping the bed with the frame.
```

### magenta-reading

- Edit target: `public/images/hero-brand-magenta-reading.webp` (1024 × 1536).
- Built-in generated original: `/Users/sam/.codex-account2/generated_images/01a1cf41-f8b4-7001-b4f7-c16dc0095eb3/exec-99a4f9ca-cbf0-459a-91d8-f9431ebc086e.png`.
- Preserved project master: `output/imagegen/hero-wide-magenta-reading-v1.png`.
- Website sibling: `public/images/hero-wide-magenta-reading-v1.webp`.
- Observed composition: Chair around 59% horizontal and side table around 77%; left third is clear magenta wall; a doorway is retained near the middle-left.
- Suggested starting crop: desktop `50% 50%`; narrow screens around `60% 50%` to retain the furniture. These are composition suggestions, not browser-verified values. Full cover crops cannot preserve every object at every screen ratio.

Exact built-in edit prompt:

```text
Use case: precise-object-edit.
Asset type: full-width paint-brand homepage hero photograph.
Input image: the supplied local magenta reading-corner photograph is the edit target.
Primary request: expand and recompose this same interior into ONE panoramic landscape photograph, 16:9 composition, ideally 2048 by 1152 pixels. Recreate the room beyond the existing portrait edges; do not crop the portrait into a thin strip.
Preserve: the recognizable soft cream curved lounge chair and cushion, walnut sculptural pedestal side table with a small neutral ceramic bowl, large timber-framed right window, natural tree view and warm stone tiled floor. Keep the same quiet editorial room style with natural fabric/wood texture and afternoon sunlight.
Composition: pull the camera back to a spacious complete reading corner. Place the chair, side table and right window predominantly in the centre-right two thirds, with the chair and table fully visible. Extend a broad uninterrupted matte magenta wall into the left third, including the lower-left region, for a short HTML headline overlay. Keep foliage/window shadows mostly towards the centre/right so the left is calm. The image itself contains no text.
Palette: retain Ekotint magenta #B14E9B for the dominant painted wall with believable light/shadow; cream, walnut and warm stone unchanged.
Avoid: people, lettering, logos, watermarks, multiple panels, excessive new objects, distorted furniture, floating objects, extreme wide-angle distortion, repeating textures, cutting off the lounge chair.
```

