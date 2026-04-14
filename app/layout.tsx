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
  description: "Fall asleep to your favorite audiobooks. DreamRead uses Apple Watch to detect when you drift off and automatically pauses playback.",
  keywords: ["audiobook", "sleep", "apple watch", "ios", "audiobook player"],
  authors: [{ name: "DreamRead" }],
  openGraph: {
    title: "DreamRead",
    description: "Audiobooks that pause when you sleep",
    type: "website",
    locale: "en_US",
    siteName: "DreamRead",
  },
  twitter: {
    card: "summary_large_image",
    title: "DreamRead",
    description: "Audiobooks that pause when you sleep",
  },
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
