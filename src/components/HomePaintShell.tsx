import type { ReactNode } from "react";
import Icon from "@/components/Icon";
import HomeSiteFooter from "@/components/HomeSiteFooter";
import { HomePaintCartButton, HomePaintCartProvider } from "@/components/HomePaintCart";
import { homeContact, homeSectionVisibility } from "@/lib/homepage-content";
import "@/app/products/home-paint-shell.css";

export default function HomePaintShell({ children, activePage }: { children: ReactNode; activePage?: "quote" }) {
  return <HomePaintCartProvider><div className="current-product-site">
    <a className="current-product-skip" href="#main">Skip to content</a>
    <div className="current-product-utility">
      <div className="current-product-utility-inner">
        <div className="current-product-contact-links">
          <a href={homeContact.phoneHref}><Icon name="phone" size={15} /><span>{homeContact.phone}</span></a>
          <a href={homeContact.emailHref} aria-label={`Email Ekotint at ${homeContact.email}`}><Icon name="mail" size={16} /><span className="current-product-email-full">{homeContact.email}</span><span className="current-product-email-short">Email us</span></a>
        </div>
        <span className="current-product-tagline">The perfect chemistry.</span>
      </div>
    </div>
    <header className="current-product-header">
      <div className="current-product-header-inner">
        <a className="current-product-logo" href="/" aria-label="Ekotint Paints home"><img src="/images/ekotint-logo.png" width={181} height={73} alt="Ekotint Paints — The Perfect Chemistry" /></a>
        <nav className="current-product-navigation" aria-label="Main navigation">
          <a href="/#paints">Our paints</a>
          <a href="/#colours">Explore colours</a>
          {homeSectionVisibility.manufacturer && <a href="/#why-ekotint">About</a>}
          <a href="/#contact">Contact</a>
          <a className="current-product-quote-link" href="/get-a-quote/" aria-current={activePage === "quote" ? "page" : undefined}>Get a quote</a>
        </nav>
        <HomePaintCartButton />
      </div>
    </header>
    {children}
    <HomeSiteFooter />
  </div></HomePaintCartProvider>;
}
