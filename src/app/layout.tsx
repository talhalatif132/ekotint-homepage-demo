import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ekotint Paints — A little colour. A whole new feeling.",
  description: "Explore a considered world of colour, discover Ekotint paints and find inspiration for the spaces you call home. A homepage design preview.",
  robots: { index: false, follow: false },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
