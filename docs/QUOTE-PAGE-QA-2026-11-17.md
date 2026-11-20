# Quote page local QA — 17 November 2026

## Final build completion — Sol

This completion supersedes the earlier **NOT STARTED** build status and next-Sol build instructions below; the browser evidence and its limits remain unchanged. Source was frozen during these sequential final checks:

- `npm run typecheck`: **PASS**, exit0 (`tsc --noEmit`, session48045).
- `git diff --check`: **PASS**, exit0, no output.
- `npm run build`: **PASS**, exit0, session20090; `next build --webpack`, Next.js16.4.3. Compiled in10.0s; build TypeScript completed in11.4s; generated **24/24 static pages**. Route output includes `/`, `/_not-found`, `/get-a-quote`, `/products` and19 generated `/products/[slug]` paths (WaterMatt, ClimaShield, Epoxy plus16 more).
- Existing preview3023 remained running and was never stopped/restarted by this final-build agent. Local `curl` returned308 at `/get-a-quote`; following the canonical redirect returned **HTTP200**. The sandbox initially blocked loopback access; the same read-only request succeeded with native escalation.

No browser QA or broad suite was rerun, no application source changed, and port3000 was untouched. The prior final-source browser limitations below are still unverified. No dependency install, push or deployment occurred. Local review remains required before explicit publication approval.

Sol QA only. No application source changes, dependencies, backend, email/service calls, push or deployment were made. Port3000 was untouched. All work is local; publication still requires explicit approval after local review.

## Earlier browser agent status — build status superseded above

- `npm run typecheck`: **PASS** on the final text/decimal litre-input source (tool session49868 completed exit0). Two earlier typechecks also passed.
- `git diff --check`: **PASS**, including after the final litre-input patch.
- At this earlier agent handoff, webpack production build had **NOT STARTED**. The final build agent subsequently completed it successfully; the completion above is authoritative.
- Local preview3023 was originally listener PID16063. An attempted sandboxed `kill -TERM 16063` failed with `operation not permitted`; the escalated retry remained pending approval and was aborted. This agent did not successfully stop or restart the preview. Recheck its listener before continuing.

## Completed focused browser evidence

Existing Puppeteer package `/Users/sam/shipping-v1/node_modules/puppeteer` and installed Google Chrome were reused; nothing installed. Tests used `http://127.0.0.1:3023`, `domcontentloaded`, explicit hydrated submit-enabled/React-handler checks and reduced motion. No homepage `networkidle` wait was used.

Main evidence: `/private/tmp/quote-qa-2026-11-17.json`, harness `/private/tmp/quote-qa-2026-11-17.cjs`. The JSON records31 completed assertions before the final litre-input type change; it also records the terminal harness expectation failure described below. These passes are focused runtime evidence, not an all-green final-source browser suite:

- Fresh quote page has blank product and litres.
- Initial and calculated layouts have no horizontal overflow at1440,390 and320px.
- Direct query preserves WaterMatt product, exact colour name, uppercased HEX, and3×4L→12L with source pack/quantity wording.
- WaterMatt placeholder rate2850/L×10L→PKR28,500;2.5L→PKR7,125; WaterMatt10L plus ClimaShield4L→PKR42,300.
- Litres edits clear stale results; colour change has no surcharge.
- Empty, zero, negative, excessive10000.01, scientific1e2 and overprecision1.234 litres do not produce an estimate.
- Malformed HEX blocks calculation with an error. Help-me-choose paint produces a pending amount instead of a fabricated zero.
- Project/personal fields can remain empty. Copy success includes estimate and optional details; simulated clipboard denial exposes selected read-only fallback text.
- Optional personal details were absent from the URL, localStorage and sessionStorage after calculation/copy. No application mutation requests or page errors were recorded during these completed checks.
- Multiple validated cart lines carry exact colours and pack×quantity litres. Invalid cart product is discarded. Legacy item without pack retains blank litres rather than a false default.
- Cart estimate link is present. Later cart changes do not overwrite quote edits. A valid direct product query takes precedence over cart selections.
- Shared category preview responds correctly for ClimaShield exterior, EkoShade roof, EkoGleam metal and SyntheticVarnish wood. Roof presents exactly White, LightGrey, LightTan and Tan; preview fallback is White/#FFFFFF.

The main harness then expected Epoxy scene key `interior`; actual shared metadata correctly uses `coating` for wall-coating inspiration. Its12-second wait timed out. This is a harness expectation error, not a reproduced UI defect; the final follow-up expectation was corrected, but it was not reached in a completed run.

## Captures and acceptance limits

Main captured initial/result screenshots (1440×1000 desktop;390/320×844 mobile):

- `/private/tmp/quote-initial-{1440,390,320}-{first,full}.png`
- `/private/tmp/quote-result-{1440,390,320}-{first,full}.png`

These main result captures predate moving the estimate above the decorative desktop scene. Do not treat them as the final reordered desktop acceptance images.

Final clean initial captures were completed after the layout refinements:

- `/private/tmp/quote-final-initial-1440-first.png` and `-full.png`
- `/private/tmp/quote-final-initial-390-first.png` and `-full.png`
- `/private/tmp/quote-final-initial-320-first.png` and `-full.png`

These three final initial checks found no overflow. Their exact latest-run metrics and additional diagnostic attempts were written to `/private/tmp/quote-followup-2026-11-17.json` by `/private/tmp/quote-followup-2026-11-17.cjs`; later aborted attempts may overwrite that diagnostics file, so use the main JSON for the31-check record. No completed final reordered-result capture is claimed. Initial earlier captures containing a native required-selection tooltip are superseded by the clean final-initial files.

## Final source changes and browser limits

Root subsequently accepted leading-dot parser notation, darkened helper text, compacted the mobile introduction, and moved the estimate before the decorative desktop preview. A leading-dot keyboard attempt left the input empty; root changed litres from native `type=number` to text with decimal input mode, pattern, strict parser/range checks and field error state. Typecheck and whitespace pass after that change. The intended `.5`/`0.5` runtime confirmation on the final text input remains **UNVERIFIED**: the follow-up harness again observed blank input after mobile full-page screenshots, indicating unreliable focus/click routing. It did not establish that the final text-input implementation rejects `.5`. Later prepared harness changes use explicit focus/select and desktop viewport, but that rerun was aborted without a completed result.

One follow-up also hit a12-second hydration timeout during HMR/source updates; this is a harness timing limit. Several Chrome starts were intermittent; bounded attempts used15/30-second launch timeouts. No new browser was installed. Root explicitly stopped further retries.

Still unverified on the final source: final `.5`/`0.5` and invalid-input runtime recheck; optional malformed email inside a collapsed details group; actual shared header/footer/product-to-quote/mobile-nav journeys; final hidden Reviews/disabled upload/catalogue preservation browser assertions; final desktop result capture. Source inspection found the expected links, shared scenes and existing gates, but source inspection is not a runtime pass. No physical-device, cross-browser, comprehensive accessibility or real clipboard-permission integration test is claimed. Clipboard coverage used deterministic success/denial stubs.

## Earlier process handoff — final build completed above

No build process was started. Final typecheck session49868 completed. Earlier browser sessions1361 and67776 completed with recorded results; follow-up sessions70160,65459,27367 and73472 timed out/finished their harness and closed their owned browser in `finally`. The last proposed browser execution was aborted before it returned a process/session ID. The escalated preview-stop request was also aborted before any session/result. No successful server mutation is claimed.

The later final-build agent completed all sequential checks without stopping the preview. No further listener inspection or rebuild is required for unchanged source. A future Sol should reuse this evidence and focus only on the unverified browser edges above. Do not deploy or push. Prices remain explicitly reused demo amounts treated as placeholder per-litre rates; manufacturer pricing/pack/shade inputs are unconfirmed and this frontend sends no enquiry.

Root accepted the clean final initial desktop1440/mobile390/320 captures listed above. This acceptance covers their visual layout only; it does not change the recorded final-result/browser limits.
