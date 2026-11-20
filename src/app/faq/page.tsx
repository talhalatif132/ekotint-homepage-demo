import type { Metadata } from "next";
import HomePaintShell from "@/components/HomePaintShell";
import Icon from "@/components/Icon";
import { homeContact, homeTechnicalGuide } from "@/lib/homepage-content";
import styles from "./faq.module.css";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Ekotint Paints",
  description: "Get help choosing Ekotint paint, preparing surfaces, previewing colours and estimating your project.",
};

const topics = [
  {
    id: "choosing-paint",
    title: "Choosing paint",
    questions: [
      {
        title: "Which paint should I use indoors or outdoors?",
        answer: <>For interior walls, start with <a href="/products/water-matt/">Water Matt</a>, <a href="/products/hydra-matt/">Hydra-Matt</a> or <a href="/products/semi-plastic-emulsion/">Assez Semi Plastic Emulsion</a>. For exterior walls, see <a href="/products/clima-shield/">Clima Shield</a> and <a href="/products/weather-paint/">Weather Paint</a>. Check the product guidance for your surface before applying.</>,
      },
      {
        title: "What finishes can I choose from?",
        answer: <>The range includes matt wall paints, soft-sheen emulsions and gloss enamels. Compare finishes and recommended surfaces in <a href="/#paints">Our paints</a>.</>,
      },
      {
        title: "Which coating should I use on my roof?",
        answer: <><a href="/products/eko-shade/">Eko Shade</a> is designed for roofs. Ask Ekotint which preparation, coverage and application guidance applies to your roof surface.</>,
      },
      {
        title: "Which finish works for wood or metal?",
        answer: <><a href="/products/eko-gleam/">Eko Gleam</a> is a gloss enamel for wood and metal. The surface and its existing finish determine which primer and preparation you need.</>,
      },
    ],
  },
  {
    id: "preparing-and-painting",
    title: "Preparation and painting",
    questions: [
      {
        title: "How much paint will I need?",
        answer: <>Coverage depends on the paint, surface and coat count. Use the <a href="/get-a-quote/">paint calculator</a> to estimate quantity and cost for a wall, room or roof, then check the product’s coverage before ordering.</>,
      },
      {
        title: "When do I need primer or wall putty?",
        answer: <><a href="/products/wall-putty/">Wall Putty</a> helps smooth an uneven surface. <a href="/products/primer-emulsion/">Primer Emulsion</a> helps prepare suitable walls for paint. New, porous and patched surfaces can need different preparation, so check the instructions for your coating system.</>,
      },
      {
        title: "How should I prepare a surface before painting?",
        answer: <>Start with a clean, dry surface. Remove dust, grease and loose paint, then repair damage before coating. Follow the product’s preparation and primer instructions for your surface.</>,
      },
      {
        title: "Where can I check drying times, coats and thinning instructions?",
        answer: <>Use the directions on the tin and the <a href={homeTechnicalGuide}>technical data sheets</a> for the product you’re applying. If you can’t find your paint in the guide, <a href={homeContact.emailHref}>ask Ekotint</a> for its sheet.</>,
      },
      {
        title: "Can I paint over mould or algae?",
        answer: <>Fix the source of dampness and remove any mould or algae before painting. Let the surface dry. If growth keeps returning on an exterior wall, <a href={homeContact.emailHref}>ask Ekotint</a> what preparation and coating suit that surface.</>,
      },
      {
        title: "Where can I find safety information for my paint?",
        answer: <><a href={homeContact.emailHref}>Ask Ekotint</a> for the safety data sheet (SDS) for the exact paint and series you’re using. It covers safe handling, ventilation and storage. Ask for product-specific information if you have questions about odour, VOCs or lead content.</>,
      },
    ],
  },
  {
    id: "colours-and-previews",
    title: "Colours and previews",
    questions: [
      {
        title: "How can I preview a colour?",
        answer: <>Visit <a href="/#colours">Explore colours</a> to browse shade ideas. Open a paint page to see a colour on a sample surface. Check a physical shade under the lighting in your space before making a final choice.</>,
      },
      {
        title: "Can I get a shade card or a sample?",
        answer: <>Ask Ekotint about shade cards and sample availability for your selected paint. View a sample in your space in daylight and under your usual evening lighting.</>,
      },
      {
        title: "Can I ask Ekotint to match a colour?",
        answer: <>Share a shade code or a physical sample with <a href={homeContact.emailHref}>Ekotint</a>. Ask which finish can match it and check the result on a test patch before painting the whole area.</>,
      },
      {
        title: "How can I keep the colour consistent across a room?",
        answer: <>Check the shade and batch codes on your tins before painting. When possible, use paint from the same batch and apply a test patch to see how it dries on your surface.</>,
      },
    ],
  },
  {
    id: "care-and-storage",
    title: "Care and storage",
    questions: [
      {
        title: "Can I wash a painted wall?",
        answer: <>Check whether your finish is washable and how long it needs to cure before cleaning. If the product instructions allow washing, try a soft damp cloth on a small, hidden spot first and avoid abrasive cleaners.</>,
      },
      {
        title: "How should I store leftover paint, and how long will it last?",
        answer: <>Keep the paint upright in its original, tightly closed container in a cool, dry place away from direct sunlight. Check the label for the recommended storage temperature and shelf life, which vary by product.</>,
      },
      {
        title: "How do I dispose of leftover paint or thinner?",
        answer: <>Keep it in its labelled container and follow the disposal instructions on the label or safety data sheet. Ask your local waste service where to take it. Never pour liquid paint or thinner down a drain.</>,
      },
    ],
  },
  {
    id: "quotes-and-support",
    title: "Quotes and support",
    questions: [
      {
        title: "How do I get a quote for my project?",
        answer: <>Start on <a href="/get-a-quote/">Get a quote</a> and select your paint, quantities or measurements. Use the enquiry form to share your estimate with Ekotint and confirm current pricing and availability.</>,
      },
      {
        title: "Can I request a consultation or site visit?",
        answer: <><a href="/#contact">Contact Ekotint</a> with your location, the surfaces you want to paint and a few photos, if available. Ask if a site visit is available in your area and what it would include.</>,
      },
      {
        title: "Who should I contact about dealers or bulk orders?",
        answer: <>Use the <a href="/#contact">contact section</a> to tell Ekotint your city, the products you need and your quantities. The team can help with dealer and trade enquiries.</>,
      },
      {
        title: "How do I report a problem with my paint?",
        answer: <><a href={homeContact.emailHref}>Email Ekotint</a> with the product name, batch number, purchase date or receipt, and photos of the tin label and affected area. If the problem appeared after painting, describe how you prepared the surface and applied the paint.</>,
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <HomePaintShell>
      <main className={styles.page} id="main">
        <div className={styles.container}>
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span aria-hidden="true">/</span>
            <span aria-current="page">FAQ</span>
          </nav>

          <header className={styles.hero}>
            <div className={styles.intro}>
              <h1>Frequently asked <em>questions</em></h1>
              <p>Find answers about choosing paint, planning your project and getting help from Ekotint.</p>
            </div>
            <div className={styles.heroVisual}>
              <img src="/images/hero-wide-blue-dining-v1.webp" width={1672} height={941} alt="" fetchPriority="high" />
            </div>
          </header>

          <div className={styles.layout}>
            <nav className={styles.topicNav} aria-label="FAQ topics">
              <p>On this page</p>
              <ul>
                {topics.map((topic) => <li key={topic.id}><a href={`#${topic.id}`}>{topic.title}</a></li>)}
              </ul>
            </nav>

            <div className={styles.topics}>
              {topics.map((topic) => (
                <section className={styles.topic} key={topic.id} id={topic.id} aria-labelledby={`${topic.id}-heading`}>
                  <h2 id={`${topic.id}-heading`}>{topic.title}</h2>
                  <div className={styles.questions}>
                    {topic.questions.map((question) => (
                      // The browser can toggle open before React hydrates.
                      <details className={styles.question} key={question.title} name={`faq-${topic.id}`} suppressHydrationWarning>
                        <summary>{question.title}<span className={styles.toggle} aria-hidden="true" /></summary>
                        <p>{question.answer}</p>
                      </details>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>

          <section className={styles.support} aria-labelledby="faq-support">
            <div>
              <h2 id="faq-support">Still need help?</h2>
              <p>Ask Ekotint about your paint or project.</p>
            </div>
            <div className={styles.supportActions}>
              <a href={homeContact.emailHref}><Icon name="mail" size={17} /> Email Ekotint</a>
              <a href={homeContact.phoneHref}><Icon name="phone" size={17} /> {homeContact.phone}</a>
            </div>
          </section>
        </div>
      </main>
    </HomePaintShell>
  );
}
