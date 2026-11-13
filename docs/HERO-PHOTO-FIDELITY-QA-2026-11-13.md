# Hero photo fidelity — focused local QA

13 November 2026. Sol read AGENTS.md, current handover, motion handoff and Sites local preview guide. Scope: preserve the current five photos after the user's “dont edit the pics” correction. No app/asset edits, dependency installs, build, publishing or server shutdown.

Existing preview 127.0.0.1:3023 returned HTTP 200. Existing Chrome/Puppeteer inspected natural autoplay at 1440×900 and390×844 for31 seconds each. All five scenes loaded in the specified order: lavender bedroom → lavender exterior → purple living → yellow exterior-detail-v2 → blue dining. Desktop uses wide bedroom/dining; mobile uses existing portrait bedroom/dining. Every observed image had complete=true and nonzero natural dimensions. All ten browser-loaded responses matched their local public image files byte-for-byte, including both exterior files at both sizes. No page errors.

Computed checks passed for every scene: image→picture→hero→main→home-site→body→html have filter:none, backdrop-filter:none, opacity:1 and mix-blend-mode:normal. Hero/picture/image before/after pseudos all have content:none and background-image:none. No photo overlay remains. Photo fit is cover. Desktop positions are50%50%,50%50%,50%55%,50%50%,50%50%; mobile positions50%50%,72%50%,60%50%,65%50%,50%50%. These match the existing source crop settings.

Headline stays at x79.1875/y393.828125 desktop and x23.390625/y637.8125 mobile across scenes and captured transition samples. Background clip is text; headline ink variables follow ivory/plum/ivory/plum/ivory. Both incoming/outgoing pictures retain opacity1, with actual horizontal transforms across the viewport and computed0.8s animation duration. Persistent entering/leaving classes after completion are expected animation fill/state behaviour; not treated as a failure.

Natural, unmodified-page screenshots:

- `/private/tmp/hero-natural-lavender-1440.png`
- `/private/tmp/hero-natural-yellow-1440.png`
- `/private/tmp/hero-natural-lavender-390.png`
- `/private/tmp/hero-natural-yellow-390.png`

Raw runtime evidence: `/private/tmp/hero-photo-qa.json`; script `/private/tmp/hero-photo-qa.cjs`. First capture attempt used an invalid one-picture-only settled condition; corrected to active loaded image with completed incoming transform. No application change was needed.

Limits: focused photo-preservation verification only, not full motion/accessibility/network/contrast regression. No typecheck or build run. Runtime equality establishes current-file fidelity, not historical approval of earlier generated assets or true4K quality. Human visual review remains with root/user. Local only; fresh publication approval required.

Root completion audit: inspected all four exterior screenshots above; the pale wash is gone and photo colours remain natural. The five tracked interior wide/portrait WebP files are byte-identical to Git HEAD. Existing exterior sources/crops match those present before the text-colour refinement, and their served bytes match disk as verified above. No asset files were edited or regenerated during the colour refinement/correction. This verification turn made documentation changes only. User visual preference review and broader QA remain separate; the specific no-photo-change/overlay-removal correction is verified.
