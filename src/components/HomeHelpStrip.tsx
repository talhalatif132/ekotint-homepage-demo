"use client";

import { useEffect, useState } from "react";
import Icon, { type IconName } from "@/components/Icon";
import { homeContact, homeTechnicalGuide, homeSectionVisibility } from "@/lib/homepage-content";
import styles from "./HomeHelpStrip.module.css";

type HelpLink = { title: string; detail: string; href: string; icon: IconName; external?: boolean };
const helpLinks: HelpLink[] = [
  ...(homeSectionVisibility.manufacturer ? [{ title: "The people behind your paint", detail: "Get to know Ekotint", href: "#why-ekotint", icon: "layers" } satisfies HelpLink] : []),
  { title: "Try colour with your paint", detail: "Choose a paint to preview", href: "#paints", icon: "home" },
  { title: "A little help choosing?", detail: `Talk to Ekotint · ${homeContact.phone}`, href: homeContact.phoneHref, icon: "phone" },
  { title: "Find your colour", detail: "Explore ideas for your space", href: "#colours", icon: "spark" },
  { title: "Technical data sheets", detail: "Preparation & application · PDF", href: homeTechnicalGuide, icon: "document", external: true },
  { title: "Let’s talk paint", detail: "Contact Ekotint", href: "#contact", icon: "mail" },
];

export default function HomeHelpStrip() {
  // Start static before hydration; CSS also keeps reduced-motion users static.
  const [documentHidden, setDocumentHidden] = useState(true);

  useEffect(() => {
    const updateVisibility = () => setDocumentHidden(document.hidden);
    updateVisibility();
    document.addEventListener("visibilitychange", updateVisibility);
    return () => document.removeEventListener("visibilitychange", updateVisibility);
  }, []);

  return (
    <nav className={styles.strip} aria-label="Explore Ekotint and get painting help" data-paused={documentHidden}>
      <div className={styles.viewport}>
        <div className={styles.track}>
          {[false, true].map((duplicate) => (
            <ul className={styles.group} key={duplicate ? "decorative-repeat" : "help-links"} role="list" aria-hidden={duplicate || undefined} data-duplicate={duplicate}>
              {helpLinks.map((link) => (
                <li className={styles.item} key={link.href}>
                  <a className={styles.link} href={link.href} tabIndex={duplicate ? -1 : undefined} target={link.external ? "_blank" : undefined} rel={link.external ? "noreferrer" : undefined}>
                    <span className={styles.icon}><Icon name={link.icon} size={23} /></span>
                    <span className={styles.copy}><strong>{link.title}</strong><small>{link.detail}</small></span>
                    <Icon className={styles.arrow} name={link.external ? "download" : "arrow"} size={17} />
                  </a>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </nav>
  );
}
