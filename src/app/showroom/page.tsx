import type { Metadata } from "next";
import HomePaintShell from "@/components/HomePaintShell";
import DealerDirectory from "./DealerDirectory";
import ShowroomMap from "./ShowroomMap";
import styles from "./showroom.module.css";

export const metadata: Metadata = {
  title: "Find an Ekotint Dealer in Karachi | Ekotint Paints",
  description: "Find Ekotint Paints dealers across Karachi. Select a location on the map to see its phone number, address and directions.",
};

export default function ShowroomPage() {
  return (
    <HomePaintShell>
      <main className={styles.page} id="main">
        <div className={styles.container}>
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Showroom</span>
          </nav>

          <header className={styles.intro}>
            <h1>Find your nearest authorised dealer</h1>
            <p>Explore Ekotint dealers across Karachi. Select a map pin to see the dealer’s address and phone numbers or get directions in Google Maps.</p>
          </header>

          <ShowroomMap />
          <DealerDirectory />
        </div>
      </main>
    </HomePaintShell>
  );
}
