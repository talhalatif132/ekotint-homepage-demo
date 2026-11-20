"use client";

import Icon from "@/components/Icon";
import { homeContact } from "@/lib/homepage-content";
import styles from "./HomeContactSection.module.css";

type Props = { onEnquiry: () => void };

export default function HomeContactSection({ onEnquiry }: Props) {
  return (
    <section className={styles.section} id="contact" aria-labelledby="contact-heading">
      <div className={styles.inner}>
        <div className={styles.intro}>
          <p className={styles.eyebrow}>Contact Ekotint</p>
          <h2 id="contact-heading">Let’s talk <em>colour.</em></h2>
          <p className={styles.description}>Need help choosing a paint or finding the right finish? Tell us what you’re working on.</p>
          <button className={styles.enquiry} type="button" aria-haspopup="dialog" onClick={onEnquiry}>
            <Icon name="mail" size={19} /> Start an enquiry
          </button>
        </div>

        <div className={styles.details}>
          <a className={styles.contactRow} href={homeContact.phoneHref}>
            <span className={styles.icon}><Icon name="phone" size={20} /></span>
            <span className={styles.contactText}>
              <span className={styles.label}>Call us</span>
              <span className={styles.number}>{homeContact.phone}</span>
            </span>
          </a>
          <a className={styles.contactRow} href={homeContact.emailHref}>
            <span className={styles.icon}><Icon name="mail" size={20} /></span>
            <span className={styles.contactText}>
              <span className={styles.label}>Email us</span>
              <span className={styles.email}>{homeContact.email}</span>
            </span>
          </a>
          <div className={styles.contactRow}>
            <span className={styles.icon}><Icon name="pin" size={20} /></span>
            <div className={styles.contactText}>
              <span className={styles.label}>Karachi, Pakistan</span>
              <address className={styles.address}>{homeContact.address}</address>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
