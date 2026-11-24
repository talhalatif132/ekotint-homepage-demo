import type { Metadata } from "next";
import HomePaintShell from "@/components/HomePaintShell";
import Icon from "@/components/Icon";
import { homeContact } from "@/lib/homepage-content";
import SiteVisitEnquiry from "./SiteVisitEnquiry";
import styles from "./services.module.css";

export const metadata: Metadata = {
  title: "Interior & Exterior Painting Services | Ekotint Paints",
  description: "Explore Ekotint’s painting services, from on-site assessment and colour advice to surface preparation, application and final inspection.",
};

const serviceScope = [
  {
    icon: "spark",
    title: "Colour and finish advice",
    description: "Find colours and finishes that work with the light in your space and how you use it.",
  },
  {
    icon: "layers",
    title: "Surface preparation and paint supply",
    description: "Ekotint assesses the surface and agrees with you on the preparation and products to include in your quote.",
  },
  {
    icon: "check",
    title: "Painting, cleanup and inspection",
    description: "The team applies the paint, tidies the work area and walks you through the finished work.",
  },
] as const;

const paintingSteps = [
  {
    title: "Request a visit",
    description: "Tell us where you are and what you’d like painted.",
    image: "/images/services/step-01-consultation.webp",
    scene: "consultation",
    width: 768,
    height: 512,
  },
  {
    title: "Assess the site",
    description: "The team checks the surfaces, their condition and the light.",
    image: "/images/services/step-02-site-assessment.webp",
    scene: "assessment",
    width: 768,
    height: 512,
  },
  {
    title: "Choose your finish",
    description: "Choose colours, paints and finishes with the team.",
    image: "/images/services/step-03-colour-selection.webp",
    scene: "colour",
    width: 768,
    height: 512,
  },
  {
    title: "Review your quote",
    description: "Approve the work, price and timeline before painting starts.",
    image: "/images/services/step-01-consultation.webp",
    scene: "quote-detail",
    width: 768,
    height: 512,
  },
  {
    title: "Paint and inspect",
    description: "Walk through the finished work with the team after cleanup.",
    image: "/images/hero-purple-room.webp",
    scene: "finished-room",
    width: 1536,
    height: 1024,
  },
] as const;

export default function ServicesPage() {
  return (
    <HomePaintShell>
      <main className={styles.page} id="main">
        <div className={styles.container}>
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Painting services</span>
          </nav>

          <header className={styles.hero}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>Ekotint painting services</p>
              <h1>Painting services <em>inside and out.</em></h1>
              <p className={styles.heroDescription}>From colour advice and surface preparation to painting and cleanup, we help you refresh a room or repaint a property.</p>
              <div className={styles.heroActions}>
                <a className={styles.primaryAction} href="#site-visit">Request a site visit</a>
                <a className={styles.textAction} href="/get-a-quote/">Estimate paint cost</a>
              </div>
            </div>
            <img
              className={styles.heroImage}
              src="/images/services/painter-at-work.webp"
              alt="A painter applying muted plum paint to an interior wall."
              width={1440}
              height={960}
              fetchPriority="high"
            />
          </header>

          <section className={styles.scope} aria-labelledby="services-scope">
            <div className={styles.scopeCopy}>
              <p className={styles.eyebrow}>Interior and exterior</p>
              <h2 id="services-scope">What’s included</h2>
              <ul className={styles.scopeList} role="list">
                {serviceScope.map(({ icon, title, description }) => (
                  <li key={title}>
                    <span className={styles.scopeIcon}><Icon name={icon} size={20} /></span>
                    <div>
                      <h3>{title}</h3>
                      <p>{description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <figure className={styles.scopeImage}>
              <img
                src="/images/hero-exterior-lavender-courtyard-v4.webp"
                alt="Soft lavender exterior walls around a sunlit courtyard."
                width={1672}
                height={941}
                loading="lazy"
                decoding="async"
              />
              <figcaption>Exterior inspiration</figcaption>
            </figure>
          </section>
        </div>

        <section className={styles.process} aria-labelledby="services-process">
          <div className={styles.container}>
            <div className={styles.processHeader}>
              <h2 id="services-process">How it works</h2>
              <p>Five steps from your first enquiry to the final walkthrough.</p>
            </div>
            <ol className={styles.steps} role="list">
              {paintingSteps.map(({ title, description, image, scene, width, height }, index) => (
                <li key={title} className={styles.step}>
                  <div className={styles.stepImage} data-scene={scene}>
                    <img src={image} alt="" width={width} height={height} loading="lazy" decoding="async" />
                  </div>
                  <div className={styles.stepCopy}>
                    <span className={styles.stepNumber} aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <div className={styles.container}>
          <section className={styles.visit} id="site-visit" aria-labelledby="site-visit-heading">
            <div className={styles.visitIntro}>
              <p className={styles.eyebrow}>Plan your project</p>
              <h2 id="site-visit-heading">Request a site visit</h2>
              <p className={styles.visitDescription}>Tell us what needs painting and where. Ekotint can confirm whether a visit is available and discuss what to expect.</p>
              <div className={styles.callBlock}>
                <p>Prefer to talk it through?</p>
                <a className={styles.callLink} href={homeContact.phoneHref} aria-label={`Call Ekotint at ${homeContact.phone}`}>
                  <Icon name="phone" size={18} /> {homeContact.phone}
                </a>
              </div>
            </div>
            <SiteVisitEnquiry />
          </section>
        </div>
      </main>
    </HomePaintShell>
  );
}
