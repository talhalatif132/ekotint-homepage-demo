"use client";

import { useRef, useState } from "react";
import Icon from "@/components/Icon";
import { quoteArea } from "@/lib/home-quote";
import styles from "./HomeQuotePage.module.css";

const doorArea = 21;
const windowArea = 24;

function openingCount(value: string) {
  const trimmed = value.trim();
  return /^\d*$/.test(trimmed) ? Number(trimmed) : null;
}

export default function HomeQuoteMeasure({ id, roof, onApply }: {
  id: string;
  roof: boolean;
  onApply: (area: string) => void;
}) {
  const disclosure = useRef<HTMLDetailsElement>(null);
  const [wholeRoom, setWholeRoom] = useState(false);
  const [values, setValues] = useState({ length: "", width: "", height: "", doors: "", windows: "" });
  const room = !roof && wholeRoom;
  const length = quoteArea(values.length);
  const width = quoteArea(values.width);
  const height = quoteArea(values.height);
  const doors = room ? openingCount(values.doors) : 0;
  const windows = room ? openingCount(values.windows) : 0;
  let grossArea = width === null || height === null ? null : width * height;
  if (roof) {
    grossArea = length === null || width === null ? null : length * width;
  } else if (room) {
    grossArea = length === null || width === null || height === null ? null : 2 * (length + width) * height;
  }
  const netArea = grossArea === null || doors === null || windows === null
    ? null
    : grossArea - doors * doorArea - windows * windowArea;
  const area = netArea === null ? null : quoteArea(netArea.toFixed(2));
  const invalidDimension = (!!values.width.trim() && width === null)
    || ((room || roof) && !!values.length.trim() && length === null)
    || (!roof && !!values.height.trim() && height === null);

  function field(name: keyof typeof values, label: string, amount: number | null, placeholder: string, inputMode: "decimal" | "numeric" = "decimal") {
    return <label>
      {label}
      <input name={name} value={values[name]} onChange={(event) => setValues({ ...values, [name]: event.target.value })}
        type="text" inputMode={inputMode} maxLength={10} placeholder={placeholder}
        aria-invalid={values[name].trim() !== "" && amount === null} />
    </label>;
  }

  return <details className={styles.measureHelper} id={id} ref={disclosure}>
    <summary>{roof ? "Measure roof" : "Help me measure"} <Icon name="chevron" size={15} /></summary>
    <form className={styles.measureForm} onSubmit={(event) => {
      event.preventDefault();
      if (area === null) return;
      if (disclosure.current) disclosure.current.open = false;
      onApply(String(area));
    }}>
      {!roof && <div className={styles.modeOptions} role="group" aria-label="What are you measuring?">
        <button type="button" aria-pressed={!room} onClick={() => setWholeRoom(false)}>Single surface</button>
        <button type="button" aria-pressed={room} onClick={() => setWholeRoom(true)}>Whole room</button>
      </div>}
      {room && <p>Measure all four walls of a rectangular room.</p>}
      <div className={`${styles.measureFields}${room ? " " + styles.roomDimensions : ""}`}>
        {(roof || room) && field("length", "Length (ft)", length, "e.g. 10")}
        {field("width", "Width (ft)", width, "e.g. 12.5")}
        {!roof && field("height", "Height (ft)", height, "e.g. 8")}
      </div>
      {room && <>
        <div className={styles.measureFields}>
          {field("doors", "Doors", doors, "0", "numeric")}
          {field("windows", "Windows", windows, "0", "numeric")}
        </div>
        <p>Deducts about {doorArea} sq ft per door and {windowArea} sq ft per window.</p>
      </>}
      {invalidDimension && <p className={styles.error}>Enter positive dimensions in feet, with up to two decimal places.</p>}
      {(doors === null || windows === null) && <p className={styles.error}>Enter a whole number of doors and windows.</p>}
      {netArea !== null && area === null && <p className={styles.error}>
        {netArea <= 0 ? "Doors and windows must cover less than the wall area." : "Paintable area must be between 0.1 and 1,000,000 sq ft."}
      </p>}
      <div className={styles.measureActions}>
        <button type="submit" disabled={area === null}>Use this area</button>
        <output>{area === null ? "" : `${area.toLocaleString("en-PK")} sq ft`}</output>
      </div>
    </form>
  </details>;
}
