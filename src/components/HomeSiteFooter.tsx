"use client";

import Icon from "@/components/Icon";
import { homeContact, homeTechnicalGuide, homeSectionVisibility } from "@/lib/homepage-content";
import styles from "./HomeSiteFooter.module.css";

export default function HomeSiteFooter({ onPlan }: { onPlan?: () => void }) {
  return <footer className={styles.footer}>
    <div className={styles.inner}>
      <div className={styles.main}>
        <div className={styles.brand}>
          <a className={styles.logo} href="/" aria-label="Ekotint Paints home">
            <img className={styles.wordmark} src="/images/ekotint-logo.png" width={715} height={289} alt="Ekotint Paints — The Perfect Chemistry" loading="lazy" />
            <img className={styles.symbol} src="/images/ekotint-logo.png" width={715} height={289} alt="" aria-hidden="true" loading="lazy" />
          </a>
          <p>Paints and coatings for the spaces you call your own.</p>
        </div>
        <nav className={styles.navigation} aria-label="Footer navigation">
          <h2>Explore Ekotint</h2>
          <a href="/#paints">Our paints</a>
          <a href="/#colours">Explore colours</a>
          <a href="/get-a-quote/">Get a quote <Icon name="arrow" size={15} /></a>
          {homeSectionVisibility.manufacturer && <a href="/#why-ekotint">About Ekotint</a>}
          <a href={homeTechnicalGuide} target="_blank" rel="noreferrer">Technical data sheets <Icon className={styles.diagonal} name="arrow" size={15} /></a>
        </nav>
        <div className={styles.contact}>
          <h2>Let’s talk colour</h2>
          <a className={styles.phone} href={homeContact.phoneHref}>{homeContact.phone}</a>
          <a className={styles.email} href={homeContact.emailHref}>{homeContact.email}</a>
          <address>{homeContact.address}</address>
          {onPlan
            ? <button className={styles.project} type="button" onClick={onPlan}>Discuss your project <Icon name="arrow" size={17} /></button>
            : <a className={styles.project} href="/#contact">Discuss your project <Icon name="arrow" size={17} /></a>}
        </div>
      </div>
      <div className={styles.bottom}>
        <span>© {new Date().getFullYear()} Ekotint Paints</span>
        <p>Room imagery and colours are illustrative.</p>
        <a href="#main">Back to top <Icon className={styles.up} name="arrow" size={17} /></a>
      </div>
    </div>
  </footer>;
}
