"use client";

import { useEffect, useRef, useState } from "react";
import Icon from "@/components/Icon";
import HomeReviewAvatar from "@/components/HomeReviewAvatar";
import { homeContact, homeCustomerReviews, type HomeCustomerReview } from "@/lib/homepage-content";

// These photos belong only to the fictional preview, never to approved customer reviews.
const previewAvatars: Record<string, string> = Object.fromEntries(
  Array.from({ length: 6 }, (_, index) => [`preview-${index + 1}`, `/images/reviews/avatar-${index + 1}.jpg`]),
);

// Local-only design content stays separate from approved reviews; provenance is in the handover.
const sampleReviews: HomeCustomerReview[] = [
  { id: "preview-1", quote: "A softer colour made such a difference. Our living room finally feels like somewhere we can slow down together.", customerName: "Ayesha K.", project: "A softer living space", sourceLabel: "" },
  { id: "preview-2", quote: "We kept the furniture and changed the walls. It’s surprising how much lighter and more welcoming the whole space feels.", customerName: "Omar R.", project: "A fresh start at home", sourceLabel: "" },
  { id: "preview-3", quote: "We wanted something quiet and simple. This warm neutral brings everything in the room together beautifully.", customerName: "Sana M.", project: "Finding the right neutral", sourceLabel: "" },
  { id: "preview-4", quote: "Trying the colours together helped us decide. We chose a gentle shade that feels just as lovely in the evening light.", customerName: "Bilal A.", project: "Colour for everyday living", sourceLabel: "" },
  { id: "preview-5", quote: "The room feels more like us now. A little warmth on the walls was the finishing touch we had been looking for.", customerName: "Hira S.", project: "Making a house feel personal", sourceLabel: "" },
  { id: "preview-6", quote: "We didn’t need to change everything. A fresh colour gave our favourite corner a completely new feeling.", customerName: "Faisal H.", project: "A favourite corner, renewed", sourceLabel: "" },
];

export default function HomeCustomerStories() {
  const isDemo = homeCustomerReviews.length === 0;
  const reviews = isDemo ? sampleReviews : homeCustomerReviews;
  const viewport = useRef<HTMLDivElement>(null);
  const position = useRef(0);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const element = viewport.current;
    if (!element) return;
    const observer = new ResizeObserver(() => {
      element.scrollTo({ left: position.current * element.clientWidth, behavior: "instant" });
    });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  function goTo(index: number) {
    const element = viewport.current;
    if (!element) return;
    const next = Math.max(0, Math.min(reviews.length - 1, index));
    element.scrollTo({ left: next * element.clientWidth, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
  }

  return (
    <section className="customer-stories section" id="customer-stories" aria-labelledby="customer-stories-heading">
      <div className="customer-stories-heading">
        <div className="customer-stories-intro">
          <p className="eyebrow">CUSTOMER STORIES</p>
          <h2 id="customer-stories-heading">A little colour.<br /><em>A very personal difference.</em></h2>
        </div>
        <div className="customer-stories-context">
          <p>From a favourite corner to a fresh start.<br />There’s a story behind every space.</p>
          <a className="text-link" href={homeContact.phoneHref}>Share your experience <Icon name="arrow" size={18} /></a>
        </div>
      </div>
      <div className="customer-story-viewport" id="customer-story-slides" ref={viewport} role="region" aria-roledescription="carousel" aria-label="Customer stories" tabIndex={0}
        onScroll={(event) => {
          const element = event.currentTarget;
          if (!element.clientWidth) return;
          const index = Math.max(0, Math.min(reviews.length - 1, Math.round(element.scrollLeft / element.clientWidth)));
          position.current = index;
          setActive(index);
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
            event.preventDefault();
            goTo(active + (event.key === "ArrowRight" ? 1 : -1));
          }
        }}>
        {reviews.map((review, index) => (
          <div className="customer-story-slide" key={review.id} role="group" aria-roledescription="slide" aria-label={`${index + 1} of ${reviews.length}`} inert={index !== active}>
            <figure className="customer-story-card">
              <div className="customer-story-top"><span className="customer-story-mark" aria-hidden="true">“</span><span>{review.project}</span></div>
              <blockquote><p>{review.quote}</p></blockquote>
              <figcaption>
                <span className="customer-story-avatar" aria-hidden="true"><HomeReviewAvatar src={isDemo ? previewAvatars[review.id] : undefined} /></span>
                <div><strong>{review.customerName}</strong>{review.sourceUrl ? <a href={review.sourceUrl} target="_blank" rel="noreferrer">{review.sourceLabel} <Icon name="arrow" size={14} /></a> : review.sourceLabel && <small>{review.sourceLabel}</small>}</div>
              </figcaption>
            </figure>
          </div>
        ))}
      </div>
      {reviews.length > 1 && <div className="customer-story-navigation">
        <span className="customer-story-count" aria-live="polite" aria-atomic="true"><strong>{String(active + 1).padStart(2, "0")}</strong><span> / {String(reviews.length).padStart(2, "0")}</span></span>
        <div className="customer-story-dots" aria-label="Choose a story">{reviews.map((review, index) => <button type="button" key={review.id} aria-label={`Show story ${index + 1}`} aria-current={active === index ? "true" : undefined} aria-controls="customer-story-slides" onClick={() => goTo(index)}><span /></button>)}</div>
        <div className="customer-story-arrows">
          <button type="button" aria-label="Previous story" aria-controls="customer-story-slides" disabled={active === 0} onClick={() => goTo(active - 1)}><Icon name="back" size={20} /></button>
          <button type="button" aria-label="Next story" aria-controls="customer-story-slides" disabled={active === reviews.length - 1} onClick={() => goTo(active + 1)}><Icon name="arrow" size={20} /></button>
        </div>
      </div>}
      <div className="customer-trust-links">
        <a href="#advice"><Icon name="document" size={21} /><span><strong>Know your finish</strong><small>Product & application guidance</small></span><Icon name="arrow" size={17} /></a>
        <a href={homeContact.phoneHref}><Icon name="phone" size={21} /><span><strong>Talk to the team</strong><small>{homeContact.phone}</small></span><Icon name="arrow" size={17} /></a>
        <a href="#contact"><Icon name="pin" size={21} /><span><strong>Find Ekotint in Karachi</strong><small>Address & contact details</small></span><Icon name="arrow" size={17} /></a>
      </div>
    </section>
  );
}
