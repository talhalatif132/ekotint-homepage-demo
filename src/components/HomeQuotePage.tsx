"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useHomePaintCart } from "@/components/HomePaintCart";
import HomeProductArtwork from "@/components/HomeProductArtwork";
import HomeQuoteEnquiry from "@/components/HomeQuoteEnquiry";
import HomeQuoteMeasure from "@/components/HomeQuoteMeasure";
import HomeQuotePaintPicker from "@/components/HomeQuotePaintPicker";
import HomeQuotePicker, { type QuotePickerGroup } from "@/components/HomeQuotePicker";
import Icon from "@/components/Icon";
import { homeContact, homePaints } from "@/lib/homepage-content";
import { quoteArea, quoteCoats, quoteCoverage, quoteExampleRate, quoteLineFromQuery, quoteLitres, quoteLitresBounds, quoteMoney, quoteQuantity, quoteQuantityLabel, quoteRoofProductId, type HomeQuoteLine } from "@/lib/home-quote";
import styles from "./HomeQuotePage.module.css";

const newLine = (id: string): HomeQuoteLine => ({ id, productId: "", litres: "", coats: 2, mode: "area" });
const coatLabel = (coats: HomeQuoteLine["coats"]) => coats === 1 ? "1 coat" : "2 coats";
const estimateNote = "Final price and coverage may vary.";
const calculationModes: QuotePickerGroup<HomeQuoteLine["mode"]>[] = [{ options: [
  { value: "area", label: "Area to paint" },
  { value: "litres", label: "Paint quantity (litres)" },
] }];

function isEmptyEstimate(lines: HomeQuoteLine[]) {
  const [line] = lines;
  return lines.length === 1 && !line.productId && !line.litres && !line.area && line.mode === "area" && line.coats === 2;
}

function LitresField({ id, label, value, onChange, onStep, canIncrease, canDecrease, invalid = false }: {
  id: string;
  label: string;
  value: string;
  onChange?: (value: string) => void;
  onStep: (direction: 1 | -1) => void;
  canIncrease: boolean;
  canDecrease: boolean;
  invalid?: boolean;
}) {
  function step(direction: 1 | -1) {
    if (direction === 1 ? canIncrease : canDecrease) onStep(direction);
  }

  return <div className={styles.row}>
    <label htmlFor={id}>{label}</label>
    <div className={`${styles.litresField} ${styles.litresStepperField}`}>
      {onChange ? <>
        <input type="text" inputMode="decimal" maxLength={10} id={id} value={value}
          placeholder="e.g. 10" aria-invalid={invalid} aria-describedby={invalid ? id + "-error" : undefined}
          onChange={(event) => onChange(event.target.value)}
          onKeyDown={(event) => {
            if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
            if (event.key !== "ArrowUp" && event.key !== "ArrowDown") return;
            event.preventDefault();
            step(event.key === "ArrowUp" ? 1 : -1);
          }} />
        <span aria-hidden="true">L</span>
      </> : <output id={id} aria-live="off">{value} L</output>}
      <div className={styles.litresStepper}>
        <button type="button" aria-label="Increase litres by 1" aria-disabled={!canIncrease} onClick={() => step(1)}>
          <Icon name="chevron" size={15} />
        </button>
        <button type="button" aria-label="Decrease litres by 1" aria-disabled={!canDecrease} onClick={() => step(-1)}>
          <Icon name="chevron" size={15} />
        </button>
      </div>
    </div>
  </div>;
}

function PaintInputs({ line, pricedLitres, heading, onChange, onRemove }: {
  line: HomeQuoteLine;
  pricedLitres: number | null;
  heading?: string;
  onChange: (change: Partial<HomeQuoteLine>) => void;
  onRemove?: () => void;
}) {
  const byArea = line.mode === "area";
  const roof = line.productId === quoteRoofProductId;
  const invalidArea = !!line.area?.trim() && quoteArea(line.area) === null;
  const litres = quoteLitres(line.litres);
  const invalidLitres = line.litres.trim() !== "" && litres === null;
  const extraLitres = line.extraLitres ?? 0;

  function stepLitres(direction: 1 | -1) {
    const next = Math.min(quoteLitresBounds.max, Math.max(quoteLitresBounds.min, (litres ?? 0) + direction));
    onChange({ litres: String(Number(next.toFixed(2))) });
  }

  return <section className={styles.paintInputs} aria-label={heading ?? "Paint details"}>
    {heading && <div className={styles.lineHeading}>
      <h3>{heading}</h3>
      {onRemove && <button type="button" onClick={onRemove} aria-label={"Remove " + heading.toLowerCase()}>Remove</button>}
    </div>}
    <div className={styles.inputRows}>
      <div className={styles.row}>
        <span id={line.id + "-product-label"}>Paint</span>
        <HomeQuotePaintPicker id={line.id + "-product"} value={line.productId} onChange={(productId) => {
          if (productId === line.productId) return;
          const startRoofMeasurement = productId === quoteRoofProductId && byArea && !line.area?.trim();
          onChange({ productId });
          if (startRoofMeasurement) requestAnimationFrame(() => {
            const measure = document.getElementById(line.id + "-measure");
            if (measure instanceof HTMLDetailsElement) {
              measure.open = true;
              measure.querySelector("input")?.focus();
            }
          });
        }} />
      </div>
      <div className={`${styles.row} ${styles.modeRow}`}>
        <label id={line.id + "-mode-label"} htmlFor={line.id + "-mode"}>Calculate using</label>
        <HomeQuotePicker id={line.id + "-mode"} value={line.mode} groups={calculationModes} onChange={(mode) => onChange({ mode })} />
      </div>
      {byArea ? <label className={styles.row}>
        <span>{roof ? "Roof area" : "Paintable area"}</span>
        <span className={styles.litresField}>
          <input type="text" inputMode="decimal" maxLength={10} id={line.id + "-area"} value={line.area ?? ""}
            placeholder={roof ? "e.g. 400" : "e.g. 800"} aria-invalid={invalidArea}
            aria-describedby={line.id + "-area-help"}
            onChange={(event) => onChange({ area: event.target.value })} />
          <span aria-hidden="true">sq ft</span>
        </span>
      </label> : <LitresField id={line.id + "-litres"} label="Litres" value={line.litres}
        onChange={(value) => onChange({ litres: value })} onStep={stepLitres} invalid={invalidLitres}
        canIncrease={litres !== quoteLitresBounds.max} canDecrease={litres !== null && litres > quoteLitresBounds.min} />}
      {!byArea && invalidLitres && <p className={styles.error} id={line.id + "-litres-error"}>Enter 1 to 10,000 litres, with up to two decimal places.</p>}
      {byArea && <p className={invalidArea ? styles.error : styles.areaHelp} id={line.id + "-area-help"}>
        {invalidArea ? "Enter 0.1 to 1,000,000 sq ft, with up to two decimal places."
          : roof ? "Enter the roof area or measure it below." : "Enter the total paintable area, minus any doors and windows."}
      </p>}
      {byArea && <HomeQuoteMeasure key={roof ? "roof" : "wall"} id={line.id + "-measure"} roof={roof} onApply={(area) => {
        onChange({ area });
        document.getElementById(line.id + "-area")?.focus();
      }} />}
      <div className={styles.row} role="group" aria-labelledby={line.id + "-coats-label"}>
        <span id={line.id + "-coats-label"}>Coats</span>
        <div className={styles.coatOptions}>
          {quoteCoats.map((coats) => <label key={coats}>
            <input type="radio" name={line.id + "-coats"} value={coats} checked={line.coats === coats} onChange={() => onChange({ coats })} />
            <span>{coatLabel(coats)}</span>
          </label>)}
        </div>
      </div>
      {byArea && pricedLitres !== null && <LitresField id={line.id + "-priced-litres"} label="Litres to price"
        value={String(pricedLitres)} onStep={(direction) => onChange({ extraLitres: extraLitres + direction })}
        canIncrease={extraLitres < quoteLitresBounds.max} canDecrease={extraLitres > 0} />}
    </div>
  </section>;
}

export default function HomeQuotePage() {
  const { items, hydrated } = useHomePaintCart();
  const [lines, setLines] = useState<HomeQuoteLine[]>([newLine("paint-1")]);
  const [copyStatus, setCopyStatus] = useState("");
  const [showCopyText, setShowCopyText] = useState(false);
  const copyRef = useRef<HTMLTextAreaElement>(null);
  const copyRequest = useRef(0);
  const initialized = useRef(false);
  const nextId = useRef(2);

  useEffect(() => {
    if (!hydrated || initialized.current) return;
    initialized.current = true;
    const direct = quoteLineFromQuery(new URLSearchParams(window.location.search));
    if (direct) {
      setLines((current) => isEmptyEstimate(current) ? [direct] : current);
    } else if (items.length) {
      const selections = items.map((item, index): HomeQuoteLine => ({
        id: "cart-paint-" + (index + 1),
        productId: item.productId,
        litres: item.packSize === undefined ? "" : String(item.packSize * item.quantity),
        coats: 2,
        mode: item.packSize === undefined ? "area" : "litres",
      }));
      setLines((current) => isEmptyEstimate(current) ? selections : current);
    }
  }, [hydrated, items]);

  const estimates = lines.map((line) => {
    const paint = homePaints.find((product) => product.id === line.productId);
    const quantity = quoteQuantity(line);
    const rate = quoteExampleRate(line.productId);
    const extraLitres = line.mode === "area" ? line.extraLitres ?? 0 : 0;
    const pricedLitres = quantity === null ? null : Number((Math.max(quoteLitresBounds.min, quantity.max) + extraLitres).toFixed(2));
    return {
      line, paint, quantity, rate, pricedLitres,
      coverage: line.mode === "area" ? null : quoteCoverage(line),
      amount: rate === null || pricedLitres === null ? null : Math.round(pricedLitres * rate * 100),
    };
  });
  const completed = estimates.filter((item) => item.amount !== null);
  const total = completed.length === lines.length
    ? completed.reduce((sum, { amount }) => sum + (amount ?? 0), 0)
    : null;
  const single = lines.length === 1;
  const canClear = !isEmptyEstimate(lines);
  const roofCount = lines.filter(({ productId }) => productId === quoteRoofProductId).length;
  const singleResult = estimates[0];
  const byArea = singleResult.line.mode === "area";
  const selectedCoats = singleResult.line.coats;
  const alternateCoats = selectedCoats === 1 ? 2 : 1;
  const alternateLine = { ...singleResult.line, coats: alternateCoats } satisfies HomeQuoteLine;
  const alternateQuantity = single && byArea ? quoteQuantity(alternateLine) : null;
  const selectedMeasure = byArea
    ? singleResult.quantity && quoteQuantityLabel(singleResult.quantity)
    : singleResult.coverage;
  const alternateMeasure = byArea
    ? alternateQuantity && quoteQuantityLabel(alternateQuantity)
    : single && quoteCoverage(alternateLine);

  function clearCopyStatus() {
    copyRequest.current += 1;
    setCopyStatus("");
    setShowCopyText(false);
  }

  function changeLine(id: string, change: Partial<HomeQuoteLine>) {
    setLines((current) => current.map((line) => {
      if (line.id !== id) return line;
      const updated = { ...line, ...change };
      if (updated.productId !== line.productId || updated.area !== line.area || updated.coats !== line.coats) {
        updated.extraLitres = undefined;
      }
      return updated;
    }));
    clearCopyStatus();
  }

  function focusPaint(id: string) {
    requestAnimationFrame(() => document.getElementById(id + "-product")?.focus());
  }

  function addPaint() {
    const line = newLine("paint-" + nextId.current++);
    setLines((current) => [...current, line]);
    clearCopyStatus();
    focusPaint(line.id);
  }

  function clearEstimate() {
    initialized.current = true;
    const line = newLine("paint-" + nextId.current++);
    setLines([line]);
    clearCopyStatus();
    focusPaint(line.id);
  }

  function removePaint(id: string) {
    const index = lines.findIndex((line) => line.id === id);
    const remaining = lines.filter((line) => line.id !== id);
    if (!remaining.length) return;
    setLines(remaining);
    clearCopyStatus();
    focusPaint(remaining[Math.min(index, remaining.length - 1)].id);
  }

  const summary = total === null ? "" : [
    "EKOTINT PAINTS — PAINT ESTIMATE",
    "",
    ...estimates.flatMap(({ line, paint, pricedLitres, amount, coverage }) => [
      paint?.name + " · " + paint?.series,
      pricedLitres + " L · " + coatLabel(line.coats) + " · " + (amount === null ? "—" : quoteMoney(amount / 100)),
      ...(line.mode === "area"
        ? [`${line.productId === quoteRoofProductId ? "Roof area" : "Paintable area"}: ${line.area} sq ft`]
        : coverage ? [`Estimated coverage: ${coverage}`] : []),
      ...(line.productId === "epoxy" ? ["Litres are for mixed coating."] : []),
      "",
    ]),
    "Estimated total (paint only): " + quoteMoney(total / 100),
    estimateNote,
  ].join("\n");

  async function copyEstimate() {
    const request = ++copyRequest.current;
    try {
      await navigator.clipboard.writeText(summary);
      if (request === copyRequest.current) setCopyStatus("Estimate copied.");
    } catch {
      if (request !== copyRequest.current) return;
      setCopyStatus("Select and copy the estimate below.");
      setShowCopyText(true);
      requestAnimationFrame(() => {
        copyRef.current?.focus();
        copyRef.current?.select();
      });
    }
  }

  return <main className={styles.page} id="main">
    <div className={styles.container}>
      <div className={styles.pageLead}>
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link href="/">Home</Link><span aria-hidden="true">/</span><span aria-current="page">Get a quote</span>
        </nav>
        <p className={styles.coatTip}><Icon name="layers" size={17} /> Compare coverage for one and two coats</p>
      </div>
      <header className={styles.intro}>
        <div className={styles.introCopy}>
          <h1>Estimate your <em>paint cost.</em></h1>
          <p>Find out how much paint you’ll need for your walls, woodwork or roof.</p>
        </div>
        <div className={styles.introVisual}>
          <div className={styles.introScene} data-scene="interior"><span>Interior</span></div>
          <div className={styles.introScene} data-scene="exterior"><span>Exterior</span></div>
          <div className={styles.introScene} data-scene="roof"><span>Roof</span></div>
        </div>
      </header>

      <div className={styles.calculatorIntro}>
        <h2 id="quote-calculator-title">Paint calculator</h2>
        <p>Choose a paint, then enter a quantity in litres or measure the area you want to paint.</p>
      </div>
      <section className={styles.calculator} aria-labelledby="quote-calculator-title">
        <section className={styles.inputs} aria-labelledby="quote-paint-details">
          <div className={styles.inputsHeading}>
            <h3 id="quote-paint-details"><Icon name="filter" size={19} /> Paint details</h3>
            {lines.length < 20 && <button className={styles.addPaint} type="button" onClick={addPaint}>
              <Icon name="plus" size={15} /> Add paint
            </button>}
          </div>
          {estimates.map(({ line, pricedLitres }, index) => <PaintInputs key={line.id} line={line} pricedLitres={pricedLitres}
            heading={line.productId === quoteRoofProductId
              ? roofCount === 1 ? "Roof" : "Roof " + (lines.slice(0, index).filter(({ productId }) => productId === quoteRoofProductId).length + 1)
              : single ? undefined : "Paint " + (index + 1)}
            onChange={(change) => changeLine(line.id, change)}
            onRemove={single ? undefined : () => removePaint(line.id)} />)}
        </section>

        <section className={styles.result} aria-labelledby="quote-estimate-title">
          <div className={styles.resultHeader}>
            <div className={styles.cost} aria-live="polite" aria-atomic="true">
              <h3 id="quote-estimate-title">Estimated paint cost</h3>
              <strong>{total === null ? "—" : quoteMoney(total / 100)}</strong>
              {single && total === null && singleResult.rate !== null && <span>Estimated unit price · {quoteMoney(singleResult.rate)} / L</span>}
              {single && total !== null && singleResult.rate !== null && singleResult.pricedLitres !== null && <span>
                {singleResult.pricedLitres.toLocaleString("en-PK")} L × {quoteMoney(singleResult.rate)} / L
              </span>}
            </div>
            {single && singleResult.paint && <div className={styles.packshots} aria-hidden="true">
              <HomeProductArtwork product={singleResult.paint} compact />
            </div>}
          </div>
          <div className={styles.resultBody}>
          {single ? <div className={styles.coverageResult} aria-live="polite" aria-atomic="true">
            {selectedMeasure && <>
              <div className={styles.selectedCoverage}>
                <div>
                  <h3>{byArea ? "Estimated paint needed" : "Estimated coverage"}</h3>
                  <p>For {coatLabel(selectedCoats)}</p>
                </div>
                <strong>{selectedMeasure}</strong>
              </div>
              {alternateMeasure && <p className={styles.alternateCoverage}>With {coatLabel(alternateCoats)} <strong>{alternateMeasure}</strong></p>}
            </>}
          </div> : completed.length > 0 && <ul className={styles.breakdown}>
            {completed.map(({ line, paint, pricedLitres, coverage, amount }) => <li key={line.id}>
              <span className={styles.breakdownPack} aria-hidden="true">
                {paint && <HomeProductArtwork product={paint} compact />}
              </span>
              <div className={styles.breakdownDetails}>
                <div className={styles.breakdownTitle}>
                  <strong>{paint?.name}</strong>
                  <span>{amount === null ? "—" : quoteMoney(amount / 100)}</span>
                </div>
                <small>{pricedLitres?.toLocaleString("en-PK")} L · {coatLabel(line.coats)}{line.mode === "area" ? " · " + line.area + " sq ft" : coverage ? " · " + coverage : ""}</small>
                {line.productId === "epoxy" && <small>Litres are for mixed coating.</small>}
              </div>
            </li>)}
          </ul>}
          {!completed.length && <p className={styles.resultNote}>{byArea ? "Select a paint and enter the area you’ll paint." : "Select a paint and enter litres to see your estimate."}</p>}
          {!single && completed.length > 0 && total === null && <p className={styles.resultNote}>Complete each paint to see the total.</p>}
          {single && singleResult.line.productId === "epoxy" && total !== null && <p className={styles.resultNote}>Litres are for mixed coating.</p>}
          <p className={styles.priceNote}>Paint only. {estimateNote}</p>
          {canClear && <div className={styles.resultActions}>
            {total !== null && <>
              <a className={styles.confirmPrice} href={homeContact.phoneHref}>
                <Icon name="phone" size={16} /> Confirm price with Ekotint
              </a>
              <button className={styles.copy} type="button" onClick={copyEstimate}>
                <Icon name="document" size={16} /> Copy estimate
              </button>
            </>}
            <button className={styles.clearEstimate} type="button" onClick={clearEstimate}>Clear estimate</button>
          </div>}
          {copyStatus && <p className={styles.resultNote} role="status">{copyStatus}</p>}
          {showCopyText && <textarea className={styles.copyText} ref={copyRef} aria-label="Estimate to copy" readOnly value={summary} rows={6} />}
          <HomeQuoteEnquiry estimate={total === null ? null : {
            summary,
            price: quoteMoney(total / 100),
            paint: single ? [singleResult.paint?.name, singleResult.paint?.series].filter(Boolean).join(" · ") : `${lines.length} paints`,
            details: single ? `${singleResult.pricedLitres?.toLocaleString("en-PK")} L · ${coatLabel(selectedCoats)}` : undefined,
          }} />
          </div>
        </section>
      </section>
      <p className={styles.contact}>Need help choosing paint? <a href={homeContact.phoneHref}>Call Ekotint</a></p>
    </div>
  </main>;
}
