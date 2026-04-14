import type { Metadata, Viewport } from "next";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a1a",
};

export const metadata: Metadata = {
  title: "DreamRead - Audiobooks That Pause When You Sleep",
  description: "Fall asleep to your favorite audiobooks. DreamRead uses Apple Watch to detect when you drift off and automatically pauses playback. Free audiobook catalog included.",
  keywords: [
    "audiobook", "audiobook player", "sleep", "apple watch", "ios",
    "sleep detection", "bedtime audiobook", "audiobook sleep timer",
    "apple watch audiobook", "sleep audiobook app", "audiobook pause sleep",
    "librivox", "free audiobooks", "m4b player", "audiobook app iphone"
  ],
  authors: [{ name: "DreamRead" }],
  openGraph: {
    title: "DreamRead — Audiobooks That Pause When You Sleep",
    description: "Fall asleep to your favorite audiobooks. DreamRead uses Apple Watch to detect when you drift off and automatically pauses playback.",
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
    description: "Fall asleep to your favorite audiobooks. DreamRead uses Apple Watch to detect when you drift off and automatically pauses playback.",
    images: ["https://dreamread.app/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "DreamRead",
  "operatingSystem": "iOS",
  "applicationCategory": "EntertainmentApplication",
  "description": "Audiobook player with Apple Watch sleep detection. Automatically pauses when you fall asleep.",
  "url": "https://dreamread.app",
  "downloadUrl": "https://apps.apple.com/app/dreamread-audiobook-player/id6761422972",
  "softwareVersion": "1.2.0",
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
      "price": "34.99",
      "priceCurrency": "USD",
      "billingIncrement": "P1Y",
      "description": "Premium annual subscription"
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "127",
    "bestRating": "5"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Google Analytics 4 */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-FQJ7WGW3SE"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FQJ7WGW3SE');
          `
        }} />
      </head>
      <body className="antialiased">
        <LanguageProvider>
          <LanguageSwitcher />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
