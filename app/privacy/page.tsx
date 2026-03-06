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
          <p className="text-accent/60 mb-12">Last updated: March 6, 2025</p>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-white">Overview</h2>
            <p className="text-accent/80">
              DreamRead is designed with privacy in mind. We do not collect, transmit, or store your personal data on any external servers. All data remains on your device or in your personal iCloud account.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-white">Health Data (HealthKit)</h2>
            <p className="text-accent/80 mb-4">
              DreamRead uses Apple HealthKit to read heart rate data from your Apple Watch for the Sleep Detection feature.
            </p>
            <ul className="text-accent/80 space-y-2 mb-4">
              <li>Heart rate data is processed entirely on your device in real time</li>
              <li>Heart rate data is never stored, transmitted, or shared with any third party</li>
              <li>Heart rate data is never used for advertising, marketing, or data broker purposes</li>
              <li>Heart rate data is used solely to determine when to pause audio playback</li>
            </ul>
            <p className="text-accent/80">
              We do not use HealthKit data for any purpose other than providing Sleep Detection functionality within the app.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-white">User Content</h2>
            <ul className="text-accent/80 space-y-2">
              <li>Audiobook files are stored locally on your device only</li>
              <li>Playback progress and bookmarks are stored locally and optionally synced via your personal iCloud account</li>
              <li>We have no access to your audiobook files or listening history</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-white">Data We Do Not Collect</h2>
            <p className="text-accent/80 mb-4">DreamRead does not collect:</p>
            <ul className="text-accent/80 space-y-2">
              <li>Personal identifiers (name, email, phone number)</li>
              <li>Location data</li>
              <li>Health or fitness data beyond real-time heart rate processing</li>
              <li>Usage analytics or crash reports sent to our servers</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-white">Third-Party Services</h2>
            <ul className="text-accent/80 space-y-2">
              <li><strong className="text-white">Apple HealthKit</strong> — used to read heart rate data on-device only</li>
              <li><strong className="text-white">Apple iCloud</strong> — used to sync your progress and bookmarks across your own devices (optional)</li>
            </ul>
            <p className="text-accent/80 mt-4">
              No other third-party SDKs, analytics tools, or advertising networks are used.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-white">Data Retention</h2>
            <p className="text-accent/80">
              Since all data is stored locally on your device or in your personal iCloud, you can delete it at any time by removing the app or clearing iCloud data through iOS Settings.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-white">Children&apos;s Privacy</h2>
            <p className="text-accent/80">
              DreamRead is not intended for children under the age of 13. We do not knowingly collect any information from children under 13.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-white">Changes to This Policy</h2>
            <p className="text-accent/80">
              We may update this Privacy Policy from time to time. Any changes will be reflected by updating the date at the top of this page.
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
