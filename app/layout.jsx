import "./globals.css";
import { Syne, DM_Sans } from "next/font/google";
import Shell from "@/app/ui/Shell/Shell.jsx";
import { siteConfig } from "@/app/lib/site.js";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["600", "700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    template: `%s | ${siteConfig.name}`,
    default: `${siteConfig.name} — Elite Web & App Engineering`,
  },
  description: siteConfig.description,
  keywords: [
    'web development',
    'app development',
    'full-stack',
    'React',
    'Next.js',
    'Hammontree',
    'Kaileb Hammontree',
    'Central Florida',
    'Orlando',
    'custom software',
  ],
  authors: [{ name: siteConfig.founder, url: siteConfig.url }],
  creator: siteConfig.founder,
  publisher: siteConfig.legalName,
  robots: { index: true, follow: true },
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — Elite Web & App Engineering`,
    description: siteConfig.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} — Elite Web & App Engineering`,
    description: siteConfig.description,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: siteConfig.name,
  legalName: siteConfig.legalName,
  url: siteConfig.url,
  email: siteConfig.email,
  telephone: siteConfig.phone,
  description: siteConfig.description,
  founder: {
    '@type': 'Person',
    name: siteConfig.founder,
  },
  areaServed: {
    '@type': 'Place',
    name: 'Central Florida, United States',
  },
  serviceType: ['Web Development', 'App Development', 'UI/UX Design'],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased">
        <Shell>{children}</Shell>
      </body>
    </html>
  );
}
