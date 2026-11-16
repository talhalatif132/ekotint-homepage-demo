"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import Icon from "@/components/Icon";
import HomeReviewAvatar from "@/components/HomeReviewAvatar";
import type { HomeCustomerReview } from "@/lib/homepage-content";
import { getPublishedCompanyReviews } from "@/lib/home-reviews";
import "@/app/customer-stories.css";

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
  { id: "preview-7", quote: "We chose a lighter shade for the entrance. It gives the whole home a fresher, more welcoming first impression.", customerName: "Nadia S.", project: "An entrance with character", sourceLabel: "" },
  { id: "preview-8", quote: "Seeing a few shades side by side made the choice feel easier. The bedroom now has the calm feeling we wanted.", customerName: "Hamza T.", project: "A calmer place to unwind", sourceLabel: "" },
  { id: "preview-9", quote: "A softer exterior colour brought the front of our home together. Even the familiar details feel different now.", customerName: "Mariam A.", project: "A new look outside", sourceLabel: "" },
];

export default function HomeCustomerStories() {
  const companyReviews = getPublishedCompanyReviews();
  const isDemo = companyReviews.length === 0;
  const reviews = isDemo ? sampleReviews : companyReviews;
  const reviewKey = reviews.map((review) => review.id).join("|");
  const section = useRef<HTMLElement>(null);
  const viewport = useRef<HTMLDivElement>(null);
  const position = useRef(0);
  const metrics = useRef({ step: 0, maxIndex: 0 });
  const [active, setActive] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);
  const [focusPaused, setFocusPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [documentVisible, setDocumentVisible] = useState(true);
  const [inView, setInView] = useState(false);
  const [dwell, setDwell] = useState(0);

  useEffect(() => {
    const element = viewport.current;
    if (!element) return;
    const measure = () => {
      const first = element.children[0] as HTMLElement | undefined;
      const second = element.children[1] as HTMLElement | undefined;
      if (!first) return;
      const step = second ? second.offsetLeft - first.offsetLeft : first.getBoundingClientRect().width;
      if (step <= 0 || element.clientWidth <= 0) return;
      const visible = Math.max(1, Math.min(element.children.length, Math.round(element.clientWidth / step)));
      const last = Math.max(0, element.children.length - visible);
      const current = Math.min(position.current, last);
      metrics.current = { step, maxIndex: last };
      position.current = current;
      setMaxIndex(last);
      setActive(current);
      element.scrollTo({ left: Math.min(current * step, element.scrollWidth - element.clientWidth), behavior: "instant" });
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(element);
    return () => observer.disconnect();
  }, [reviewKey]);

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotion = () => setReducedMotion(motion.matches);
    const updateVisibility = () => setDocumentVisible(!document.hidden);
    updateMotion(); updateVisibility();
    motion.addEventListener("change", updateMotion);
    document.addEventListener("visibilitychange", updateVisibility);
    const element = section.current;
    const observer = typeof IntersectionObserver !== "undefined" ? new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: .15 }) : null;
    if (element && observer) observer.observe(element);
    else setInView(true);
    return () => {
      motion.removeEventListener("change", updateMotion);
      document.removeEventListener("visibilitychange", updateVisibility);
      observer?.disconnect();
    };
  }, []);

  function goTo(index: number, manual = true) {
    const element = viewport.current;
    const { step, maxIndex: last } = metrics.current;
    if (!element || !step) return;
    const next = Math.max(0, Math.min(last, index));
    const wrap = Math.abs(next - position.current) > 1;
    element.scrollTo({ left: Math.min(next * step, element.scrollWidth - element.clientWidth), behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches || wrap ? "instant" : "smooth" });
    if (manual) setDwell((value) => value + 1);
  }

  function move(direction: number) {
    const last = metrics.current.maxIndex;
    const current = position.current;
    goTo(direction < 0 ? current <= 0 ? last : current - 1 : current >= last ? 0 : current + 1);
  }

  useEffect(() => {
    if (focusPaused || reducedMotion || !documentVisible || !inView || maxIndex === 0) return;
    const timer = setTimeout(() => goTo(position.current >= metrics.current.maxIndex ? 0 : position.current + 1, false), 5000);
    return () => clearTimeout(timer);
  }, [focusPaused, reducedMotion, documentVisible, inView, active, maxIndex, dwell]);

  const autoAdvancing = !focusPaused && !reducedMotion && documentVisible && inView && maxIndex > 0;

  return (
    <section className="customer-stories customer-stories-compact section" id="customer-stories" ref={section} aria-labelledby="customer-stories-heading" data-review-scope="company" style={{ "--review-count": reviews.length } as CSSProperties}
      onFocusCapture={(event) => { if (event.target instanceof HTMLElement && event.target.matches(":focus-visible")) setFocusPaused(true); }}
      onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setFocusPaused(false); }}>
      <div className="customer-stories-heading">
        <div className="customer-stories-intro">
          <p className="eyebrow">CUSTOMER STORIES</p>
          <h2 id="customer-stories-heading">A little colour.<br /><em>A very personal difference.</em></h2>
        </div>
        <div className="customer-stories-context">
          <p>Experiences with Ekotint.<br />From a first question to a fresh start.</p>
        </div>
      </div>
      <div className="customer-story-viewport" id="customer-story-slides" ref={viewport} role="region" aria-roledescription="carousel" aria-label="Customer stories" aria-live={autoAdvancing ? "off" : "polite"} tabIndex={0}
        onScroll={(event) => {
          const element = event.currentTarget;
          if (!metrics.current.step) return;
          const index = Math.max(0, Math.min(metrics.current.maxIndex, Math.round(element.scrollLeft / metrics.current.step)));
          position.current = index; setActive(index);
        }}
        onKeyDown={(event) => {
          if (event.target !== event.currentTarget) return;
          if (event.key === "ArrowRight" || event.key === "ArrowLeft") { event.preventDefault(); move(event.key === "ArrowRight" ? 1 : -1); }
          else if (event.key === "Home" || event.key === "End") { event.preventDefault(); goTo(event.key === "Home" ? 0 : metrics.current.maxIndex); }
        }}>
        {reviews.map((review, index) => (
          <div className="customer-story-slide" key={review.id} role="group" aria-roledescription="slide" aria-label={`${index + 1} of ${reviews.length}`}>
            <figure className="customer-story-card">
              <div className="customer-story-top"><span className="customer-story-mark" aria-hidden="true">“</span><span>{review.project}</span></div>
              <blockquote><p>{review.quote}</p></blockquote>
              <figcaption>
                <span className="customer-story-avatar" aria-hidden="true"><HomeReviewAvatar src={isDemo ? previewAvatars[review.id] : undefined} /></span>
                <div><strong>{review.customerName}</strong>{review.sourceUrl ? <a href={review.sourceUrl} target="_blank" rel="noreferrer">{review.sourceLabel || "Read review"} <Icon name="arrow" size={14} /></a> : review.sourceLabel && <small>{review.sourceLabel}</small>}</div>
              </figcaption>
            </figure>
          </div>
        ))}
      </div>
    </section>
  );
}
