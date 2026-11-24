"use client";

import { useRef, useState } from "react";
import Icon from "@/components/Icon";
import { getDealerDirectionsHref, getDealerPhoneHref, showroomDealers } from "./dealers";
import styles from "./showroom.module.css";

function normaliseSearch(value: string) {
  return value.toLowerCase().replace(/[^\p{L}\p{N}]+/gu, " ").trim();
}

export default function DealerDirectory() {
  const [query, setQuery] = useState("");
  const searchInput = useRef<HTMLInputElement>(null);
  const search = normaliseSearch(query);
  const terms = search.split(" ");
  const dealers = search ? showroomDealers.filter((dealer) => {
    const text = normaliseSearch(`${dealer.name} ${dealer.address}`);
    return terms.every((term) => text.includes(term));
  }) : showroomDealers;

  let resultMessage = "";
  if (search) {
    resultMessage = dealers.length
      ? `${dealers.length} ${dealers.length === 1 ? "dealer" : "dealers"} found`
      : "No dealers found. Try a different area or dealer name.";
  }

  return (
    <details className={styles.directory} suppressHydrationWarning>
      <summary id="dealer-list">
        Browse all {showroomDealers.length} Karachi dealers
        <Icon name="chevron" size={20} />
      </summary>

      <div className={styles.directorySearch} role="search" aria-label="Dealer directory">
        <label htmlFor="dealer-search">Search by area or dealer name</label>
        <div className={styles.searchField}>
          <span className={styles.searchIcon}><Icon name="search" size={18} /></span>
          <input
            autoComplete="off"
            id="dealer-search"
            placeholder="Try Malir or Ansar"
            ref={searchInput}
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          {query && (
            <button
              aria-label="Clear dealer search"
              className={styles.searchClear}
              type="button"
              onClick={() => {
                setQuery("");
                searchInput.current?.focus();
              }}
            >
              <Icon name="close" size={16} />
            </button>
          )}
        </div>
        <p className={styles.searchStatus} role="status">{resultMessage}</p>
      </div>

      {dealers.length > 0 && (
        <ul className={styles.directoryList} role="list">
          {dealers.map((dealer) => (
            <li className={styles.directoryCard} key={dealer.id}>
              <div className={styles.directoryLocation}>
                <div className={styles.directoryCardHeading}>
                  <span className={styles.directoryPin}><Icon name="pin" size={18} /></span>
                  <h2>{dealer.name}</h2>
                </div>
                <address>{dealer.address}</address>
              </div>
              <div className={styles.directoryCardActions}>
                {dealer.contactName && (
                  <dl className={styles.dealerContact}>
                    <dt>Contact person</dt>
                    <dd>{dealer.contactName}</dd>
                  </dl>
                )}
                <div className={styles.directoryPhones}>
                  {dealer.phones.map((phone) => (
                    <a key={phone} href={getDealerPhoneHref(phone)} aria-label={`Call ${dealer.name} at ${phone}`}>
                      <Icon name="phone" size={14} />
                      {phone}
                    </a>
                  ))}
                </div>
                <a className={styles.directoryDirections} href={getDealerDirectionsHref(dealer)} aria-label={`Get directions to ${dealer.name}`}>
                  Get directions <Icon name="arrow" size={16} />
                </a>
              </div>
            </li>
          ))}
        </ul>
      )}
    </details>
  );
}
