import type { Metadata } from "next";
import Link from "next/link";
import HomePaintShell from "@/components/HomePaintShell";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About Ekotint Paints | Paint Manufacturer in Karachi",
  description: "Meet Ekotint Paints, a Karachi paint manufacturer, and learn about the company’s background, purpose, mission and vision.",
};

export default function AboutPage() {
  return (
    <HomePaintShell activePage="about">
      <main className={styles.page} id="main">
        <div className={styles.container}>
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">About Ekotint</span>
          </nav>

          <header className={styles.hero}>
            <div className={styles.heroCopy}>
              <p className={styles.tagline}>About Ekotint Paints</p>
              <h1>The Perfect <em>Chemistry</em></h1>
              <p className={styles.heroDescription}>
                Paints and coatings made in Karachi, from the first coat to the finishing touch.
              </p>
              <a className={styles.lightButton} href="#our-story">Our story</a>
            </div>
            <img
              className={styles.heroImage}
              src="/images/about/courtyard.webp"
              width={1360}
              height={765}
              alt=""
              fetchPriority="high"
            />
          </header>

          <div className={styles.companyProfile}>
            <section className={styles.background} id="our-story" aria-labelledby="about-story-heading">
              <h2 id="about-story-heading">Company background</h2>
              <div className={styles.backgroundCopy}>
                <p>Ekotint Paints is a Karachi-based manufacturer powered by ASDA Chemical. We make decorative paints, surface preparation products and protective coatings in Pakistan.</p>
                <h3>Why Ekotint was started</h3>
                <p>Our founding idea was to make paint locally for the homes, workplaces and buildings around us. We want the people who use it to understand what they’re buying, from where it can be applied to the finish they can expect.</p>
              </div>
            </section>

            <div className={styles.direction}>
              <section aria-labelledby="about-mission-heading">
                <h2 id="about-mission-heading">Our mission</h2>
                <p>Make paints for everyday surfaces and give homeowners and painters the information they need to choose and apply them.</p>
              </section>
              <section aria-labelledby="about-vision-heading">
                <h2 id="about-vision-heading">Our vision</h2>
                <p>Earn a lasting place among Pakistan’s paint manufacturers through consistent quality and practical support for the people who use our products.</p>
              </section>
            </div>

            <section className={styles.ceoMessage} aria-labelledby="about-ceo-heading">
              <h2 id="about-ceo-heading">A message from our CEO</h2>
              <div className={styles.letter}>
                <p>People live and work with the results of a paint job long after the work is done. That’s a responsibility we take seriously at Ekotint.</p>
                <p>I want us to stay close to the painters, contractors and homeowners who use our products. Their experience tells us where we can improve, from the paint itself to the instructions on the tin. Thank you for taking the time to get to know us.</p>
              </div>
            </section>
            <p className={styles.draftNote}>Founding purpose, mission, vision and CEO message are drafts for approval.</p>
          </div>
        </div>
      </main>
    </HomePaintShell>
  );
}
