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
    "A pre-seed venture fund backing the most ambitious young builders in the country, often before they know they're founders.",
  openGraph: {
    title: "Longinus Ventures",
    description: "We don't find founders. We make them.",
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
