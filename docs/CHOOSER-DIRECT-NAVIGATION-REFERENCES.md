# Colour chooser: direct product navigation

14 November 2026, Asia/Karachi.

The user supplied the Soft Linen paint-chooser screenshot and reported: “when i click on view paint forst the model will close homepage will show then it will go the products page it should not close the model it should go direct”. No message timestamp was supplied beyond this session date. This is a direct user correction to the earlier CEO Part 2 point 7 shade-to-product flow; the assistant did not participate in the original CEO discussion.

The product Link called the parent close callback synchronously on click. Removing that callback keeps the current chooser mounted while Next prepares navigation; the homepage and portal unmount together when the product route commits. The real product URL and selected HEX/name query remain. The parent still owns explicit Close, Escape, backdrop dismissal and body-scroll cleanup. No delay, image change, additional colour section or custom routing is introduced.

Reference reviewed 14 November 2026: https://brightopaints.com/products/plastic-emulsion. Official extracted text was checked as the existing paint-detail/shade journey reference. This review does not establish Brighto's rendered modal behaviour or timing. This correction follows the user's observed problem, rather than a competitor animation claim.

Installed Next guide read before editing: `node_modules/next/dist/docs/01-app/03-api-reference/02-components/link.md`, onNavigate/onClick section. It distinguishes real client navigation from modifier/new-tab clicks; the unchanged native Link now has no early-close click side effect. The installed use-link-status guide was also consulted; no pending indicator or new dependency is required for this correction.

Sol final typecheck, whitespace check and webpack build passed (23/23 static pages). At 1440px pointer and 390px keyboard Enter, a held Water Matt response of at least 500ms retained the chooser, homepage URL and body lock; release loaded Water Matt with Soft Vanilla/#FCEEDE, no modal portal and restored scrolling. Close/Escape/backdrop dismissal passed; the backdrop check used a targeted native event. The first harness cleanup race was corrected and the bounded retry passed. All-shade/product, modifier/new-tab, explicit focus-return and broad regression coverage were not repeated; exact limits: `CHOOSER-DIRECT-NAVIGATION-QA-2026-11-14.md`. All changes remain local, with no source push or deployment.
