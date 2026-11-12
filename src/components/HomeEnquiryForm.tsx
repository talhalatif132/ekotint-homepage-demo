"use client";

import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import HomeProductArtwork from "@/components/HomeProductArtwork";
import Icon from "@/components/Icon";
import { homeContact, type HomePaint } from "@/lib/homepage-content";

type ColourIdea = { name: string; hex: string };
type HomeEnquiryFormProps = {
  paint: HomePaint | null;
  colour: ColourIdea | null;
  savedColours: ColourIdea[];
  colourOptions: ColourIdea[];
};

function projectForPaint(paint: HomePaint | null) {
  switch (paint?.category) {
    case "Exterior": return "Exterior painting";
    case "Roof coating": return "Roof coating";
    case "Wood & metal": return "Wood & metal finishes";
    case "Preparation": return "Surface preparation";
    default: return "Interior refresh";
  }
}

export default function HomeEnquiryForm({ paint, colour, savedColours, colourOptions }: HomeEnquiryFormProps) {
  const [ready, setReady] = useState(false);
  const [preferredColour, setPreferredColour] = useState<ColourIdea | null>(colour);
  const [chooserOpen, setChooserOpen] = useState(false);
  const [hexDraft, setHexDraft] = useState(colour?.hex ?? "");
  const [hexError, setHexError] = useState("");
  const statusHeadingId = useId();
  const colourPanelId = useId();
  const hexErrorId = useId();
  const colourHelpId = useId();
  const statusRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const hexRef = useRef<HTMLInputElement>(null);
  const colourToggleRef = useRef<HTMLButtonElement>(null);
  const hasSubmitted = useRef(false);
  const knownColours = [...(colour ? [colour] : []), ...savedColours, ...colourOptions];

  useEffect(() => {
    if (ready) {
      hasSubmitted.current = true;
      statusRef.current?.focus({ preventScroll: true });
    } else if (hasSubmitted.current) {
      nameRef.current?.focus({ preventScroll: true });
    }
  }, [ready]);

  function submitEnquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!validateHex(true)) return;
    // UI preview only: no enquiry is transmitted or persisted.
    setReady(true);
  }

  function ideaForHex(hex: string): ColourIdea {
    const known = knownColours.find((idea) => idea.hex.toUpperCase() === hex);
    return { name: known?.name ?? "Custom colour", hex };
  }

  function chooseColour(idea: ColourIdea, closeChooser = false) {
    const next = { ...idea, hex: idea.hex.toUpperCase() };
    setPreferredColour(next);
    setHexDraft(next.hex);
    setHexError("");
    if (closeChooser) {
      setChooserOpen(false);
      colourToggleRef.current?.focus({ preventScroll: true });
    }
  }

  function changeHex(value: string) {
    const draft = value.toUpperCase();
    setHexDraft(draft);
    setHexError("");
    if (!draft.trim()) { setPreferredColour(null); return; }
    const match = /^#?([0-9A-F]{6})$/.exec(draft.trim());
    if (match) setPreferredColour(ideaForHex(`#${match[1]}`));
  }

  function validateHex(focusOnError = false) {
    const draft = hexDraft.trim();
    if (!draft) { setHexError(""); return true; }
    const match = /^#?([0-9A-F]{6})$/i.exec(draft);
    if (!match) {
      setHexError("Enter six HEX digits, for example #816FB0.");
      setChooserOpen(true);
      if (focusOnError) window.requestAnimationFrame(() => hexRef.current?.focus());
      return false;
    }
    chooseColour(ideaForHex(`#${match[1].toUpperCase()}`));
    return true;
  }

  function clearColour() {
    setPreferredColour(null);
    setHexDraft("");
    setHexError("");
    setChooserOpen(false);
    colourToggleRef.current?.focus({ preventScroll: true });
  }

  function colourGroup(label: string, ideas: ColourIdea[]) {
    return <div className="enquiry-colour-group" role="group" aria-label={label}>
      <p className="enquiry-colour-group-label">{label}</p>
      <div className="enquiry-colour-swatches">{ideas.map((idea) => <button type="button" key={`${idea.name}-${idea.hex}`} title={`${idea.name} · ${idea.hex}`} aria-label={`Choose ${idea.name}, ${idea.hex}`} aria-pressed={preferredColour?.hex.toUpperCase() === idea.hex.toUpperCase()} onClick={() => chooseColour(idea, true)}>
        <span style={{ background: idea.hex }} aria-hidden="true">{preferredColour?.hex.toUpperCase() === idea.hex.toUpperCase() && <Icon name="check" size={15} />}</span>
        <span>{idea.name}</span>
      </button>)}</div>
    </div>;
  }

  return <>
    <div hidden={ready}>
      <p className="modal-intro">Tell us about your space, the finish you have in mind and how to reach you.</p>
      {paint && <div className="brief-paint">
        <HomeProductArtwork product={paint} />
        <div><span>{paint.series}</span><strong>{paint.name}</strong><p>{paint.finish}</p></div>
      </div>}
      <form className="brief-form" aria-label="Project enquiry" onSubmit={submitEnquiry}>
        <div className="form-row">
          <label>Your name<input ref={nameRef} name="name" autoComplete="name" placeholder="Your name" required maxLength={120} /></label>
          <label>Phone number<input name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="03XX XXXXXXX" required maxLength={40} /></label>
        </div>
        <div className="form-row">
          <label>Email address (optional)<input name="email" type="email" autoComplete="email" placeholder="you@example.com" maxLength={180} /></label>
          <label>What are you planning?
            <select name="project" defaultValue={projectForPaint(paint)}>
              <option>Interior refresh</option>
              <option>Exterior painting</option>
              <option>Roof coating</option>
              <option>Wood &amp; metal finishes</option>
              <option>Surface preparation</option>
              <option>A whole new home</option>
              <option>Commercial project</option>
              <option>Still exploring</option>
            </select>
          </label>
        </div>
        <label>Tell us about your project (optional)<textarea name="notes" rows={3} placeholder="Your room, surface, measurements or any questions…" maxLength={3000} /></label>
        <fieldset className="enquiry-colour" aria-describedby={colourHelpId}>
          <legend>Preferred colour <span>(optional)</span></legend>
          <div className="brief-selected-colour enquiry-colour-summary">
            {preferredColour ? <span style={{ background: preferredColour.hex }} aria-hidden="true" /> : <span className="enquiry-colour-empty" aria-hidden="true"><Icon name="spark" size={19} /></span>}
            <p>Colour preference<strong>{preferredColour ? `${preferredColour.name} · ${preferredColour.hex}` : "Help me choose"}</strong></p>
            <button className="enquiry-colour-change" ref={colourToggleRef} type="button" aria-expanded={chooserOpen} aria-controls={colourPanelId} onClick={() => setChooserOpen((open) => !open)}>{preferredColour ? "Change colour" : "Choose colour"}<Icon name="chevron" size={15} /></button>
          </div>
          <p className="enquiry-colour-help" id={colourHelpId}>Ekotint can confirm the shade for your chosen finish.</p>
          <div className="enquiry-colour-panel" id={colourPanelId} hidden={!chooserOpen}>
            {savedColours.length > 0 && colourGroup("Saved colours", savedColours)}
            {colourOptions.length > 0 && colourGroup("Colour ideas", colourOptions)}
            <div className="enquiry-colour-custom">
              <label className="enquiry-colour-picker"><span className="sr-only">Pick a preferred colour</span><input type="color" value={preferredColour?.hex ?? "#816FB0"} onChange={(event) => chooseColour(ideaForHex(event.target.value.toUpperCase()))} /></label>
              <label className="enquiry-colour-hex">HEX colour<input ref={hexRef} value={hexDraft} placeholder="#816FB0" maxLength={7} spellCheck={false} autoComplete="off" autoCapitalize="characters" aria-invalid={!!hexError} aria-describedby={hexError ? `${hexErrorId} ${colourHelpId}` : colourHelpId} onChange={(event) => changeHex(event.target.value)} onBlur={() => validateHex()} /></label>
              <button className="enquiry-hex-apply" type="button" onClick={() => validateHex(true)}>Apply <Icon name="check" size={16} /></button>
            </div>
            {hexError && <p className="enquiry-colour-error" id={hexErrorId} role="alert">{hexError}</p>}
            <button className="text-link enquiry-colour-clear" type="button" aria-pressed={preferredColour === null} onClick={clearColour}>Help me choose <Icon name="spark" size={16} /></button>
          </div>
        </fieldset>
        <button className="button button-brand" type="submit">Submit enquiry <Icon name="arrow" size={18} /></button>
      </form>
    </div>
    {ready && <div className="brief-success enquiry-form-status" ref={statusRef} role="status" aria-labelledby={statusHeadingId} tabIndex={-1}>
      <span className="success-circle"><Icon name="check" size={28} /></span>
      <h3 id={statusHeadingId}>Your enquiry is ready.</h3>
      <p>Speak with Ekotint about your paint, colour and project.</p>
      <div className="enquiry-summary">
        {paint && <strong>{paint.name} · {paint.series}</strong>}
        <span>{preferredColour ? `${preferredColour.name} · ${preferredColour.hex}` : "Colour: Help me choose"}</span>
      </div>
      <div className="enquiry-actions">
        <a className="button button-brand brief-call-link" href={homeContact.phoneHref}>Call Ekotint <Icon name="phone" size={18} /></a>
        <button className="text-link" type="button" onClick={() => setReady(false)}>Edit details <Icon name="back" size={18} /></button>
      </div>
    </div>}
  </>;
}
