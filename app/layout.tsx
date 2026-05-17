import type { Metadata, Viewport } from "next";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#15161b",
};

export const metadata: Metadata = {
  title: "DreamRead - Audiobooks That Pause When You Sleep",
  description: "Auto-pause audiobooks when you fall asleep. DreamRead uses Apple Watch to detect when you drift off and pauses playback so you do not lose your place.",
  keywords: [
    "audiobook auto pause", "fall asleep audiobooks", "apple watch audiobook", "ios",
    "sleep detection", "bedtime audiobook", "audiobook sleep timer",
    "apple watch audiobook", "sleep audiobook app", "audiobook pause sleep",
    "audiobook pause when sleeping", "keep your place audiobook", "m4b bedtime"
  ],
  authors: [{ name: "DreamRead" }],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/icon-32x32.png", type: "image/png", sizes: "32x32" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "DreamRead — Audiobooks That Pause When You Sleep",
    description: "Auto-pause audiobooks when you fall asleep. Sleep detection requires Apple Watch; core playback works without it.",
    type: "website",
    locale: "en_US",
    siteName: "DreamRead",
    url: "https://dreamread.app",
    images: [
      {
        url: "https://dreamread.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "DreamRead - Audiobooks That Pause When You Sleep",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DreamRead — Audiobooks That Pause When You Sleep",
    description: "Auto-pause audiobooks when you fall asleep. Sleep detection requires Apple Watch; core playback works without it.",
    images: ["https://dreamread.app/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "DreamRead",
  "operatingSystem": "iOS",
  "applicationCategory": "EntertainmentApplication",
  "description": "App that auto-pauses audiobooks when you fall asleep using Apple Watch sleep and pulse signals. Sleep detection requires Apple Watch; core playback works without it.",
  "url": "https://dreamread.app",
  "downloadUrl": "https://apps.apple.com/app/dreamread-audiobook-player/id6761422972?pt=128710901&ct=landing_main&mt=8",
  "softwareVersion": "1.5.0",
  "author": {
    "@type": "Organization",
    "name": "DreamRead"
  },
  "offers": [
    {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "description": "Free tier"
    },
    {
      "@type": "Offer",
      "price": "39.99",
      "priceCurrency": "USD",
      "billingIncrement": "P1Y",
      "description": "Premium annual subscription"
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,400;1,9..144,500&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Google Analytics 4 + Google Ads */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-FQJ7WGW3SE"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FQJ7WGW3SE');
            gtag('config', 'AW-16934994769');
          `
        }} />
      </head>
      <body className="antialiased">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
