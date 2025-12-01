import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Terms of Service - DreamRead",
  description: "Terms of Service for DreamRead audiobook app",
};

export default function TermsOfService() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Terms of Service</h1>
          <p className="text-accent/60 mb-12">Last updated: December 1, 2024</p>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-white">Acceptance of Terms</h2>
            <p className="text-accent/80">
              By using DreamRead, you agree to these terms. If you do not agree to these terms, please do not use our service.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-white">Use of Service</h2>
            <ul className="text-accent/80 space-y-2">
              <li>Must be 13+ years old</li>
              <li>Need compatible iPhone and Apple Watch</li>
              <li>Responsible for your own audiobook files</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-white">Subscriptions</h2>
            <ul className="text-accent/80 space-y-2">
              <li>Monthly or annual plans available</li>
              <li>Cancel anytime through App Store</li>
              <li>No refunds for partial periods</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-white">Content</h2>
            <ul className="text-accent/80 space-y-2">
              <li>You retain ownership of your audiobook files</li>
              <li>Must have legal right to use imported files</li>
              <li>We do not provide audiobook content</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-white">Health Disclaimer</h2>
            <p className="text-accent/80 mb-4">
              DreamRead&apos;s sleep detection feature is provided for convenience and is not a medical device.
            </p>
            <ul className="text-accent/80 space-y-2">
              <li>Sleep detection is for convenience, not medical use</li>
              <li>Not a medical device</li>
              <li>Consult doctor for sleep issues</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-white">Limitation of Liability</h2>
            <p className="text-accent/80">
              DreamRead is provided &quot;as is&quot; without warranties of any kind, either express or implied. We are not liable for any damages arising from the use or inability to use our service.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-white">Changes to Terms</h2>
            <p className="text-accent/80">
              We may update these terms from time to time. Continued use of the service after changes constitutes acceptance of the new terms.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-white">Contact</h2>
            <p className="text-accent/80">
              For questions about these terms, please contact us at{" "}
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
