import type { Metadata, Viewport } from "next";
import { siteConfig } from "@/lib/site";
import { createPageMetadata } from "@/lib/metadata";
import { UtilityBar } from "@/components/layout/UtilityBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyMobileCTA } from "@/components/layout/StickyMobileCTA";
import { JsonLd, organizationJsonLd, websiteJsonLd } from "@/components/seo/JsonLd";
import { Analytics } from "@/components/seo/Analytics";
import "./globals.css";

export const metadata: Metadata = {
  ...createPageMetadata({
    title: "کلینیک ترک اعتیاد خورشید مشهد | درمان و مشاوره اعتیاد",
    description: siteConfig.description,
    path: "/",
  }),
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#174C45",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={siteConfig.lang} dir={siteConfig.direction}>
      <head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
        <link
          rel="preload"
          href="https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@v33.003/fonts/webfonts/Vazirmatn-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className="antialiased pb-20 lg:pb-0">
        <a href="#main" className="skip-link">رفتن به محتوای اصلی</a>
        <JsonLd data={organizationJsonLd()} />
        <JsonLd data={websiteJsonLd()} />
        <Analytics />
        <UtilityBar />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <StickyMobileCTA />
      </body>
    </html>
  );
}
