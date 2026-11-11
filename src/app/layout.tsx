import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ekotint Paints — The Perfect Chemistry",
  description: "Discover Ekotint Premium and Assez paints, roof coatings and protective finishes. Explore colour ideas and plan your next project.",
  robots: { index: false, follow: false },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" data-scroll-behavior="smooth"><body>{children}</body></html>;
}
