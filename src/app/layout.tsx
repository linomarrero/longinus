import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { Navigation } from "@/components/layout/Navigation";
import { SpearLine } from "@/components/layout/SpearLine";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://longinus.vc"),
  title: "Longinus Ventures",
  description:
    "Pre-seed fund led by ASES at Stanford. We invest out of the room every other fund is trying to get into.",
  openGraph: {
    title: "Longinus Ventures",
    description:
      "We invest out of the room every other fund is trying to get into.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable}`}
    >
      <body className="overflow-x-hidden font-sans antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-bg focus:px-4 focus:py-2 focus:text-ink"
        >
          Skip to content
        </a>
        <SpearLine />
        <Navigation />
        {children}
      </body>
    </html>
  );
}
