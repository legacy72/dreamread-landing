import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1a1a2e",
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
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
