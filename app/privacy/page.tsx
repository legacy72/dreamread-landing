import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy - DreamRead",
  description: "Privacy Policy for DreamRead audiobook app",
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <Link
          href="/"
          className="inline-flex items-center text-accent-blue hover:text-accent mb-8 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M15 19l-7-7 7-7"></path>
          </svg>
          Back to Home
        </Link>

        <article className="prose prose-invert prose-lg max-w-none">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Privacy Policy</h1>
          <p className="text-accent/60 mb-12">Last updated: December 1, 2024</p>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-white">Information We Collect</h2>

            <h3 className="text-2xl font-semibold mb-3 text-white mt-8">Health Data</h3>
            <ul className="text-accent/80 space-y-2">
              <li>Heart rate data from Apple Watch (processed locally, not stored on servers)</li>
              <li>Motion data (processed locally)</li>
              <li>We do NOT store your health data on our servers</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-3 text-white mt-8">User Content</h3>
            <ul className="text-accent/80 space-y-2">
              <li>Audiobook files (stored locally on your device)</li>
              <li>Playback progress (stored locally and in iCloud)</li>
              <li>Bookmarks and notes (stored locally and in iCloud)</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-3 text-white mt-8">Analytics</h3>
            <ul className="text-accent/80 space-y-2">
              <li>App usage statistics (anonymous)</li>
              <li>Crash reports (anonymous)</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-white">How We Use Information</h2>
            <ul className="text-accent/80 space-y-2">
              <li>To provide sleep detection functionality</li>
              <li>To improve app performance</li>
              <li>To fix bugs and crashes</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-white">Data Storage</h2>
            <ul className="text-accent/80 space-y-2">
              <li>All audiobook files stored locally on your device</li>
              <li>Health data processed in real-time, never transmitted</li>
              <li>Progress synced via iCloud (optional)</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-white">Third-Party Services</h2>
            <ul className="text-accent/80 space-y-2">
              <li>Apple HealthKit (for heart rate monitoring)</li>
              <li>Apple iCloud (for sync, optional)</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-white">Your Rights</h2>
            <ul className="text-accent/80 space-y-2">
              <li>Delete your data anytime</li>
              <li>Export your data</li>
              <li>Opt-out of analytics</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-white">Children&apos;s Privacy</h2>
            <p className="text-accent/80">
              This app is not intended for children under 13.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-white">Contact</h2>
            <p className="text-accent/80">
              For privacy-related questions, please contact us at{" "}
              <a href="mailto:support@dreamread.app" className="text-accent-blue hover:underline">
                support@dreamread.app
              </a>
            </p>
          </section>
        </article>
      </div>

      <Footer />
    </main>
  );
}
