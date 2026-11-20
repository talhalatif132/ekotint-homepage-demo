"use client";

import Link from "next/link";
import HomeColourStudio from "@/components/HomeColourStudio";
import HomeProductArtwork from "@/components/HomeProductArtwork";
import Icon from "@/components/Icon";
import { homePaintsForShade, type HomePaintSurface } from "@/lib/home-shade-products";
import { homeShadeReference } from "@/lib/home-shade-references";
import "@/app/colour-chooser.css";

type Props = {
  colour: { name: string; hex: string };
  surface: HomePaintSurface;
  saved: boolean;
  onSave: () => void;
  onEnquiry: () => void;
};

export default function HomeColourProductChooser({ colour, surface, saved, onSave, onEnquiry }: Props) {
  const { confirmed, products } = homePaintsForShade(colour.hex, surface);
  const shadeReference = homeShadeReference(colour.hex);

  return <div className="colour-product-chooser">
    <div className="chooser-stage">
      <div className="chooser-room-backdrop" aria-hidden="true">{surface === "Exterior"
        ? <img src="/images/premium-exterior.webp" width={1536} height={1024} alt="" />
        : <HomeColourStudio colour={colour} variant="backdrop" idPrefix="colour-chooser-room" />}</div>
      <span className="chooser-stage-label">{surface === "Exterior" ? "Exterior inspiration" : "Sample living room"}</span>
      <span className="chooser-scene-note">{surface === "Exterior" ? "Inspiration image · explore your colour on a product page" : "Your colour idea, in a sample room"}</span>
    </div>
    <div className="chooser-copy">
      <p className="chooser-kicker">{surface} paints</p>
      <h2 id="dialog-title">Find the paint for your colour.</h2>
      <div className="chooser-colour">
        <span className="chooser-colour-chip" style={{ backgroundColor: colour.hex }} aria-hidden="true" />
        <div>
          <strong>{colour.name}</strong>
          <span className={shadeReference ? "chooser-shade-reference" : undefined}>{shadeReference ?? `HEX ${colour.hex.toUpperCase()}`}</span>
        </div>
        <button type="button" className={saved ? "chooser-save is-saved" : "chooser-save"} onClick={onSave} aria-pressed={saved} aria-label={`${saved ? "Remove" : "Save"} ${colour.name}${saved ? " from saved colours" : ""}`}><Icon name="heart" size={21} fill={saved ? "currentColor" : "none"} /></button>
      </div>
      <div className="chooser-results-heading"><h3>{confirmed ? "Available in this shade" : "Paints to explore"}</h3><span>{products.length} {products.length === 1 ? "paint" : "paints"}</span></div>
      {products.length > 0 ? <ul className="chooser-paints" aria-label={confirmed ? `Paints available in ${colour.name}` : `${surface} paints to explore with ${colour.name}`}>
        {products.map((product) => <li key={product.id}>
          <Link className="chooser-paint-card" href={`/products/${product.id}/?${new URLSearchParams({ colour: colour.hex.replace(/^#/, ""), colourName: colour.name })}`}>
            <HomeProductArtwork product={product} />
            <span className="chooser-paint-description"><strong>{products.some((other) => other.id !== product.id && other.name === product.name) ? `${product.series.replace(/ Series$/, "")} ${product.name}` : product.name}</strong><small>{product.finish}</small><span>View paint <Icon name="arrow" size={15} /></span></span>
          </Link>
        </li>)}
      </ul> : <p className="chooser-no-paints">This shade isn’t listed for {surface.toLowerCase()} paints. Ask our team to help find a suitable option.</p>}
      <p className="chooser-compatibility">{confirmed ? "Compare a physical sample before choosing your final shade." : "These paints suit this surface. Ask Ekotint to confirm which can be made in your chosen shade."}</p>
      <button className="chooser-enquire" type="button" onClick={onEnquiry}>Ask about this shade <Icon name="arrow" size={17} /></button>
    </div>
  </div>;
}
