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
          <p className={styles.eyebrow}>CONTACT EKOTINT</p>
          <h2 id="contact-heading">Let’s talk<br /><em>colour.</em></h2>
          <p className={styles.description}>Tell us about your surface, your colour and the finish you have in mind.</p>
          <button className={styles.enquiry} type="button" onClick={onEnquiry}>
            Tell us about your project <Icon name="arrow" size={20} />
          </button>
        </div>

        <div className={styles.details}>
          <div className={styles.telephone}>
            <span className={styles.label}><Icon name="phone" size={18} /> SPEAK TO OUR TEAM</span>
            <a className={styles.number} href={homeContact.phoneHref}>
              {homeContact.phone}<Icon name="arrow" size={28} />
            </a>
            <p>A conversation is a good place to start.</p>
          </div>
          <div className={styles.otherContacts}>
            <div className={styles.email}>
              <span className={styles.label}><Icon name="mail" size={18} /> EMAIL US</span>
              <a href={homeContact.emailHref}>{homeContact.email}</a>
            </div>
            <div className={styles.location}>
              <span className={styles.label}><Icon name="pin" size={18} /> KARACHI, PAKISTAN</span>
              <address>{homeContact.address}</address>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
