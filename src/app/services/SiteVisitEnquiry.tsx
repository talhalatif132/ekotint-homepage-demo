"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import Icon from "@/components/Icon";
import { homeContact } from "@/lib/homepage-content";
import styles from "./services.module.css";

const projectTypes = ["Interior painting", "Exterior painting", "Interior and exterior", "I’m not sure yet"];

export default function SiteVisitEnquiry() {
  const nameInput = useRef<HTMLInputElement>(null);
  const reviewHeading = useRef<HTMLHeadingElement>(null);
  const reviewText = useRef<HTMLTextAreaElement>(null);
  const [canPrepare, setCanPrepare] = useState(false);
  const [draft, setDraft] = useState("");
  const [copyStatus, setCopyStatus] = useState("");

  useEffect(() => { setCanPrepare(true); }, []);

  function prepareEnquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const fields = new FormData(form);
    const name = String(fields.get("name") ?? "").trim();
    const phone = String(fields.get("phone") ?? "").trim();
    const area = String(fields.get("area") ?? "").trim();
    const project = String(fields.get("project") ?? "");
    const notes = String(fields.get("notes") ?? "").trim();
    const digits = phone.replace(/\D/g, "");

    const fieldsToValidate = [
      { field: "name", valid: Boolean(name), message: "Enter your name." },
      { field: "area", valid: Boolean(area), message: "Enter your city or area." },
      {
        field: "phone",
        valid: /^\+?[\d().\s-]+$/.test(phone) && digits.length >= 7 && digits.length <= 15,
        message: "Enter a valid phone number.",
      },
    ];
    for (const { field, valid, message } of fieldsToValidate) {
      if (!valid) {
        const input = form.elements.namedItem(field) as HTMLInputElement;
        input.setCustomValidity(message);
        input.reportValidity();
        return;
      }
    }

    const lines = ["I’d like to enquire about a painting site visit.", "", `Name: ${name}`, `Phone: ${phone}`, `City or area: ${area}`, `Project: ${project}`];
    if (notes) lines.push("", "Project notes", notes);
    setDraft(lines.join("\n"));
    requestAnimationFrame(() => reviewHeading.current?.focus());
  }

  async function copyEnquiry() {
    try {
      await navigator.clipboard.writeText(draft);
      setCopyStatus("Enquiry copied.");
    } catch {
      reviewText.current?.focus();
      reviewText.current?.select();
      setCopyStatus("Copy the selected text.");
    }
  }

  const emailHref = `${homeContact.emailHref}?subject=Painting%20site%20visit%20enquiry&body=${encodeURIComponent(draft.replace(/\r?\n/g, "\r\n"))}`;

  return (
    <div className={styles.enquiry}>
      <form
        className={styles.enquiryForm}
        method="post"
        hidden={Boolean(draft)}
        onSubmit={prepareEnquiry}
        onInput={(event) => {
          if (event.target instanceof HTMLInputElement) event.target.setCustomValidity("");
        }}
      >
        <label>
          Your name
          <input ref={nameInput} name="name" autoComplete="name" required maxLength={100} />
        </label>
        <label>
          Phone number
          <input name="phone" type="tel" autoComplete="tel" required maxLength={30} />
        </label>
        <label>
          City or area
          <input name="area" autoComplete="address-level2" required maxLength={120} />
        </label>
        <label>
          What needs painting?
          <select name="project" defaultValue="" required>
            <option value="" disabled>Choose a project type</option>
            {projectTypes.map((type) => <option key={type}>{type}</option>)}
          </select>
        </label>
        <label className={styles.fullWidth}>
          <span>Project notes <span className={styles.optional}>Optional</span></span>
          <textarea name="notes" rows={3} maxLength={500} />
        </label>
        <div className={`${styles.enquiryActions} ${styles.fullWidth}`}>
          <button className={styles.primaryAction} type="submit" disabled={!canPrepare}>
            Prepare enquiry
          </button>
          <p>Review your details before sending from your email app.</p>
        </div>
      </form>
      <noscript>Use the phone link to ask Ekotint about a site visit.</noscript>

      {draft && (
        <div className={styles.review}>
          <h3 ref={reviewHeading} tabIndex={-1}>Review your enquiry</h3>
          <p>Open the draft in your email app to send it to Ekotint.</p>
          <label>
            Your message
            <textarea ref={reviewText} value={draft} rows={7} readOnly />
          </label>
          <div className={styles.enquiryActions}>
            <a className={styles.primaryAction} href={emailHref}>
              Open email draft <Icon name="mail" size={17} />
            </a>
            <button className={styles.textAction} type="button" onClick={copyEnquiry}>Copy enquiry</button>
            <button
              className={styles.textAction}
              type="button"
              onClick={() => {
                setDraft("");
                setCopyStatus("");
                requestAnimationFrame(() => nameInput.current?.focus());
              }}
            >
              Edit details
            </button>
          </div>
          <p role="status">{copyStatus}</p>
        </div>
      )}
    </div>
  );
}
