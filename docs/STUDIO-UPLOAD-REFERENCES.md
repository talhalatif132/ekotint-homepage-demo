# Colour Studio photo option — reference notes

Reviewed **12 November 2026**. Local UI work only; no publication.

## Discussion behind the change

- In the supplied CEO/user conversation, **02:19:45 — CEO** asks for customers to upload their own image after arriving in the studio from “Try this colour”.
- **02:25:52 — CEO** asks for clear wording distinguishing a customer's device/mobile photograph from the supplied default picture, and clearer colour-to-scene relationships.
- The user's current scope is to show the own-photo option **disabled for now**, with future SAM integration. This overrides implementing a working upload in this task. The assistant did not participate in the original CEO conversation.

## Official reference

[Benjamin Moore — Personal Color Viewer](https://www.benjaminmoore.com/en-us/color-overview/personal-color-viewer) explicitly presents two starting points: the visitor's own photo or supplied sample rooms. That distinction informed a compact studio toolbar identifying the prepared room and a disabled **“Upload your room photo”** option with **“Coming soon”**.

**Limits:** reviewed browser text extraction only, without a visual or interaction audit. Benjamin Moore's account requirement and desktop/large-tablet limitation are its product constraints, not requirements for Ekotint. No styling, room imagery, upload implementation or paint-rendering technology was copied or verified. SAM is a pending project direction, not a capability established by this reference.

## Scope and validation

The existing prepared-room preview and colour controls remain the working path. This task adds no file input, upload handling, photo processing, network request or SAM integration. Tests, typecheck, browser QA and build are unrun and delegated to Sol; see [Sol handoff](SOL-STUDIO-UPLOAD-HANDOFF.md).
