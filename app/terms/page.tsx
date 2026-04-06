"use client";

import Link from "next/link";
import Footer from "@/components/Footer";
import { useLanguage } from "@/lib/LanguageContext";

export default function TermsOfService() {
  const { t } = useLanguage();

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
          {t("support.back")}
        </Link>

        <article className="prose prose-invert prose-lg max-w-none">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Terms of Service</h1>
          <p className="text-accent/60 mb-12">Last updated: April 4, 2026</p>

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
            <h2 className="text-3xl font-semibold mb-4 text-white">Subscriptions and Payments</h2>
            <p className="text-accent/80 mb-4">
              DreamRead offers optional auto-renewable subscriptions to unlock premium features such as Sleep Detection.
            </p>
            <ul className="text-accent/80 space-y-2 mb-4">
              <li><strong className="text-white">Plans:</strong> Premium Monthly ($5.99/month) and Premium Annual ($34.99/year)</li>
              <li><strong className="text-white">Free Trial:</strong> The annual plan includes a 7-day free trial. If you do not cancel before the trial ends, your subscription will automatically convert to a paid subscription</li>
              <li><strong className="text-white">Billing:</strong> Payment is charged to your Apple ID account at confirmation of purchase, or at the end of the free trial period</li>
              <li><strong className="text-white">Renewal:</strong> Subscriptions automatically renew unless canceled at least 24 hours before the end of the current billing period</li>
              <li><strong className="text-white">Cancellation:</strong> You can manage or cancel your subscription at any time through your Apple ID settings (Settings &rarr; Apple ID &rarr; Subscriptions)</li>
              <li><strong className="text-white">Refunds:</strong> Refund requests are handled by Apple in accordance with their refund policy</li>
            </ul>
            <p className="text-accent/80">
              Prices may vary by region and are subject to change. Any price changes will take effect at the start of the next billing cycle.
            </p>
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
              <a href="mailto:hoperoina2016@gmail.com" className="text-accent-blue hover:underline">
                hoperoina2016@gmail.com
              </a>
            </p>
          </section>
        </article>
      </div>

      <Footer />
    </main>
  );
}
