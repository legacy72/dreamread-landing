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
          <p className="text-accent/60 mb-12">Last updated: March 6, 2025</p>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-white">Acceptance of Terms</h2>
            <p className="text-accent/80">
              By downloading or using DreamRead, you agree to these Terms of Service. If you do not agree, please do not use the app.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-white">Eligibility</h2>
            <ul className="text-accent/80 space-y-2">
              <li>You must be at least 13 years old to use DreamRead</li>
              <li>You must have a compatible iPhone running iOS 16.0 or later</li>
              <li>Apple Watch is required only for the Sleep Detection feature; all other features work without it</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-white">User Content</h2>
            <ul className="text-accent/80 space-y-2">
              <li>You retain full ownership of the audiobook files you import</li>
              <li>You are solely responsible for ensuring you have the legal right to use any files you import</li>
              <li>DreamRead does not provide, host, or distribute audiobook content</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-white">Health Disclaimer</h2>
            <p className="text-accent/80 mb-4">
              The Sleep Detection feature is provided for convenience only.
            </p>
            <ul className="text-accent/80 space-y-2">
              <li>DreamRead is not a medical device and is not intended for medical use</li>
              <li>Sleep detection accuracy may vary and should not be relied upon for health decisions</li>
              <li>Consult a qualified healthcare professional for any sleep-related health concerns</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-white">Prohibited Use</h2>
            <ul className="text-accent/80 space-y-2">
              <li>You may not reverse engineer, decompile, or modify the app</li>
              <li>You may not use the app for any unlawful purpose</li>
              <li>You may not import or distribute copyrighted content without authorization</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-white">Limitation of Liability</h2>
            <p className="text-accent/80">
              DreamRead is provided &quot;as is&quot; without warranties of any kind, either express or implied. To the fullest extent permitted by law, we are not liable for any direct, indirect, incidental, or consequential damages arising from the use or inability to use the app.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-white">Governing Law</h2>
            <p className="text-accent/80">
              These Terms are governed by and construed in accordance with applicable law. Any disputes will be resolved in the jurisdiction where the developer is located.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-white">Changes to Terms</h2>
            <p className="text-accent/80">
              We may update these Terms from time to time. Continued use of the app after changes constitutes acceptance of the updated Terms. The date at the top of this page reflects when the Terms were last revised.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-white">Contact</h2>
            <p className="text-accent/80">
              For questions about these Terms, please contact us at{" "}
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
