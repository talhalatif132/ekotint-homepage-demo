import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ekotint Paints — Your space. Your colour. Your story.",
  description: "Explore original room inspiration, discover Ekotint paints, and picture your own colour story. An interactive homepage design preview.",
  robots: { index: false, follow: false },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
