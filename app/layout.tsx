import type { Metadata, Viewport } from "next";
import { Roboto, Roboto_Mono, IBM_Plex_Mono } from "next/font/google";
import Script from "next/script";
import "@/styles/globals.css";
import {
  AUTHOR,
  FAVICONS,
  HEAD,
  KEYWORDS,
  META_THEME_COLORS,
  OPEN_GRAPH,
  SITE_INFO,
} from "@/config/seo";
import type { HeadType } from "@/types";
import { getBaseUrl } from "@/lib/utils";
import type { Person, WebSite, WithContext } from "schema-dts";

// Generates JSON-LD structured data for the website
function getWebSiteJsonLd(): WithContext<WebSite> {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_INFO.name,
    url: SITE_INFO.url,
    alternateName: [SITE_INFO.alternateName],
  };
}

// Generates JSON-LD structured data for the person/professional
function getPersonJsonLd(): WithContext<Person> {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: AUTHOR.name,
    url: SITE_INFO.url,
    image: OPEN_GRAPH.image,
    jobTitle: AUTHOR.jobTitle,
    description: AUTHOR.description,
    sameAs: [AUTHOR.twitterUrl, AUTHOR.githubUrl].filter(Boolean),
    knowsAbout: AUTHOR.keywords,
  };
}

// Fonts
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-sans",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
  weight: ["300", "400", "500", "700"],
});

// Constants
const CURRENT_PAGE = "Home"; // Define the current page for SEO configuration
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

// SEO configuration with fallback
const currentPageSEO: HeadType = HEAD.find(
  (page: HeadType) => page.page === CURRENT_PAGE
) ?? {
  page: "Home",
  title: SITE_INFO.name,
  description: "Stop buying domains and start building your projects.",
  slug: "/",
};

// Viewport configuration
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: META_THEME_COLORS.light,
};

// Metadata configuration
export const metadata: Metadata = {
  // Basic metadata
  title: currentPageSEO?.title,
  generator: AUTHOR.name,
  applicationName: currentPageSEO?.title,
  description: currentPageSEO?.description,
  referrer: "origin-when-cross-origin",
  keywords: (KEYWORDS ?? []).join(", "),

  // Author information
  authors: [
    {
      name: AUTHOR.name,
      url: AUTHOR.twitterUrl,
    },
  ],
  creator: AUTHOR.name,
  publisher: AUTHOR.name,

  // URL configurations
  metadataBase: new URL(getBaseUrl()),
  alternates: {
    canonical: getBaseUrl(),
    types: {
      "application/rss+xml": `${getBaseUrl("/rss.xml")}`,
    },
    languages: {
      "en-US": getBaseUrl(),
      "x-default": getBaseUrl(),
    },
  },

  // Apple web app configuration
  appleWebApp: {
    title: currentPageSEO?.title ?? "",
    statusBarStyle: "default",
    capable: true,
  },

  // Search engine configuration
  robots: {
    index: true,
    follow: true,
  },

  // Favicon configuration
  icons: FAVICONS,

  // OpenGraph metadata for social media sharing
  openGraph: {
    type: "website",
    locale: "en",
    url: getBaseUrl(),
    title: currentPageSEO?.title,
    description: currentPageSEO?.description,
    siteName: currentPageSEO?.title,
    images: [
      {
        url: OPEN_GRAPH.image,
        width: 1200,
        height: 630,
        alt: currentPageSEO?.title ?? "",
        type: "image/png",
      },
    ],
  },

  // Twitter card metadata
  twitter: {
    card: "summary_large_image",
    title: currentPageSEO?.title,
    description: currentPageSEO?.description,
    site: AUTHOR.twitterAddress,
    images: [
      {
        url: OPEN_GRAPH.twitterImage,
        width: 1200,
        height: 675,
        alt: currentPageSEO?.title,
        type: "image/png",
      },
    ],
    creator: AUTHOR.twitterAddress,
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
      className={`${roboto.variable} ${robotoMono.variable} ${ibmPlexMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
            </Script>
          </>
        )}
        <Script
          id="website-jsonld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getWebSiteJsonLd()),
          }}
        />
        <Script
          id="person-jsonld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getPersonJsonLd()),
          }}
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
