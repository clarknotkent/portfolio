import type { Metadata } from "next";
import { Manrope, JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";
import { site, siteUrl } from "@/lib/site";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
});

// Valley Sans — Helsinki Type Studio, SIL OFL 1.1. Self-hosted: it is not on
// Google Fonts, and the CDN request this replaces silently 404'd, which is why
// every heading was falling back to system-ui.
const valleySans = localFont({
  src: "./fonts/ValleySans-Variable.woff2",
  variable: "--font-valley-sans",
  display: "swap",
  weight: "100 900",
  fallback: ["system-ui", "-apple-system", "sans-serif"],
});

export const metadata: Metadata = {
  // metadataBase turns the relative OG paths below into the absolute URLs that
  // link-preview crawlers require.
  metadataBase: new URL(siteUrl),
  title: {
    default: site.title,
    // Every route supplies its own name; this appends the identity.
    template: `%s — ${site.name}`,
  },
  description: site.description,
  authors: [{ name: "Kent Elrond Andionne Aspa" }],
  openGraph: {
    type: "website",
    siteName: site.title,
    title: site.title,
    description: site.description,
    url: siteUrl,
    locale: "en_PH",
    images: [
      {
        url: site.ogImage,
        width: 1200,
        height: 630,
        alt: "Kent Aspa at the Uniservitate Asia & Oceania Service-Learning Student Summit 2026 in Macau",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: [site.ogImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${valleySans.variable} ${manrope.variable} ${jetbrainsMono.variable} antialiased bg-canvas text-ink min-h-dvh flex flex-col`}
        style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
      >
        <a href="#main" className="skip-link active:scale-[0.97] transition-transform duration-150">
          Skip to content
        </a>
        <Navbar />
        <main id="main" tabIndex={-1} className="flex-grow pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
