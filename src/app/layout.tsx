import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { brand } from "@/lib/marketing";
import { getSiteUrl } from "@/lib/site-url";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Embee Finsoft - Technology, AI and automation",
    template: "%s · Embee Finsoft",
  },
  description: brand.description,
  openGraph: {
    title: "Embee Finsoft - Technology, AI and automation",
    description: brand.description,
    url: siteUrl,
    siteName: brand.name,
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: brand.name,
    url: siteUrl,
    email: brand.email,
    telephone: brand.phoneDisplay,
    parentOrganization: {
      "@type": "Organization",
      name: brand.legalName,
      url: brand.groupSite,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: `${brand.address.line1}, ${brand.address.line2}`,
      addressLocality: "Chandigarh",
      postalCode: "160002",
      addressCountry: "IN",
    },
  };

  return (
    <html lang="en-IN" data-scroll-behavior="smooth" className={`${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-paper text-ink">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-surface focus:px-4 focus:py-2">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
