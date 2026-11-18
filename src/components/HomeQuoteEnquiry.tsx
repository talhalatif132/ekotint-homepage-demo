"use client";

import { useRef, useState, type FormEvent } from "react";
import Icon from "@/components/Icon";
import { homeContact } from "@/lib/homepage-content";
import styles from "./HomeQuotePage.module.css";

type EnquiryEstimate = { summary: string; price: string; paint: string; details?: string };

function emailDraftHref(message: string) {
  const subject = encodeURIComponent("Ekotint paint enquiry");
  const body = encodeURIComponent(message.replace(/\r?\n/g, "\r\n"));
  return `${homeContact.emailHref}?subject=${subject}&body=${body}`;
}

export default function HomeQuoteEnquiry({ estimate }: { estimate: EnquiryEstimate | null }) {
  const trigger = useRef<HTMLButtonElement>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const nameInput = useRef<HTMLInputElement>(null);
  const preparedText = useRef<HTMLTextAreaElement>(null);
  const [prepared, setPrepared] = useState("");
  const [error, setError] = useState("");
  const [copyStatus, setCopyStatus] = useState("");

  function prepareEnquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const fields = new FormData(event.currentTarget);
    const name = String(fields.get("name") ?? "").trim();
    const phone = String(fields.get("phone") ?? "").trim();
    const email = String(fields.get("email") ?? "").trim();
    const question = String(fields.get("question") ?? "").trim();
    if (!name || !question) {
      setError("Enter your name and a question.");
      return;
    }
    if (!phone && !email) {
      setError("Enter an email address or phone number so Ekotint can reply.");
      return;
    }
    const digits = phone.replace(/\D/g, "");
    if (phone && (!/^\+?[\d().\s-]+$/.test(phone) || digits.length < 7 || digits.length > 15)) {
      setError("Enter a valid phone number.");
      return;
    }

    const contact = [`Name: ${name}`, email && `Email: ${email}`, phone && `Phone: ${phone}`].filter(Boolean).join("\n");
    const parts = [contact, question];
    if (estimate && fields.has("includeEstimate")) parts.push(estimate.summary);
    const message = parts.join("\n\n");
    setError("");
    setPrepared(message);
    window.location.assign(emailDraftHref(message));
    requestAnimationFrame(() => preparedText.current?.focus());
  }

  function returnToForm(focus = true) {
    setPrepared("");
    setError("");
    setCopyStatus("");
    if (focus) requestAnimationFrame(() => nameInput.current?.focus());
  }

  async function copyEnquiry() {
    try {
      await navigator.clipboard.writeText(prepared);
      setCopyStatus("Enquiry copied.");
    } catch {
      preparedText.current?.focus();
      preparedText.current?.select();
      setCopyStatus("Copy the selected text.");
    }
  }

  return <>
    <button ref={trigger} className={styles.enquiryTrigger} type="button" aria-haspopup="dialog"
      onClick={() => {
        dialog.current?.showModal();
        nameInput.current?.focus({ preventScroll: true });
      }}>
      Make an enquiry <Icon name="arrow" size={16} />
    </button>
    <dialog ref={dialog} className={styles.enquiryDialog} aria-labelledby="quote-enquiry-title"
      onClose={() => {
        returnToForm(false);
        trigger.current?.focus({ preventScroll: true });
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) dialog.current?.close();
      }}>
      <div className={styles.enquiryLayout}>
        <div className={styles.enquiryContext}>
          {estimate ? <>
            <p>Your estimate</p>
            <strong>{estimate.price}</strong>
            <p>{estimate.paint}</p>
            {estimate.details && <p>{estimate.details}</p>}
          </> : <>
            <p>Email Ekotint</p>
            <span>{homeContact.email}</span>
          </>}
        </div>
        <div className={styles.enquiryInner}>
          <button className={styles.enquiryClose} type="button" aria-label="Close enquiry" onClick={() => dialog.current?.close()}>
            <Icon name="close" size={20} />
          </button>
          <h2 id="quote-enquiry-title">{prepared ? "Your email draft is ready" : <>Ask <em>Ekotint</em></>}</h2>
          <div hidden={!!prepared}>
            <p className={styles.enquiryDescription}>Ask about a paint, price or your project.</p>
            <form className={styles.enquiryForm} onSubmit={prepareEnquiry}>
              <label>
                Your name
                <input ref={nameInput} name="name" autoComplete="name" required maxLength={120} />
              </label>
              <div className={styles.enquiryContactFields}>
                <label>
                  Email address
                  <input name="email" type="email" autoComplete="email" aria-describedby="quote-enquiry-contact" maxLength={180} />
                </label>
                <label>
                  Phone number
                  <input name="phone" type="tel" autoComplete="tel" aria-describedby="quote-enquiry-contact" maxLength={32} />
                </label>
              </div>
              <p className={styles.contactHint} id="quote-enquiry-contact">Provide either an email address or a phone number.</p>
              <label>
                Your question
                <textarea name="question" rows={3} required maxLength={2000} />
              </label>
              {estimate && <label className={styles.enquiryEstimate}>
                <input type="checkbox" name="includeEstimate" defaultChecked /> Include my current estimate
              </label>}
              {error && <p className={styles.error} role="alert">{error}</p>}
              <div className={styles.enquiryActions}>
                <button className={styles.enquiryPrimary} type="submit"><Icon name="mail" size={16} /> Continue to email</button>
                <small>Review and send from your email app.</small>
              </div>
            </form>
          </div>
          {prepared && <div className={styles.enquiryForm}>
            <p className={styles.enquiryDescription}>Send the draft from your email app to {homeContact.email}.</p>
            <label>
              Enquiry to share
              <textarea ref={preparedText} readOnly value={prepared} rows={5} />
            </label>
            <div className={styles.enquiryActions}>
              <a className={styles.enquiryPrimary} href={emailDraftHref(prepared)}><Icon name="mail" size={16} /> Open email draft</a>
              <button className={styles.enquirySecondary} type="button" onClick={copyEnquiry}>Copy enquiry</button>
              <button className={styles.enquiryEdit} type="button" onClick={() => returnToForm()}>Edit details</button>
            </div>
            {copyStatus && <p className={styles.enquiryDescription} role="status">{copyStatus}</p>}
          </div>}
        </div>
      </div>
    </dialog>
  </>;
}
