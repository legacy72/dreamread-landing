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
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">{t("terms.title")}</h1>
          <p className="text-accent/60 mb-12">{t("terms.updated")}</p>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-white">{t("terms.acceptance.title")}</h2>
            <p className="text-accent/80">{t("terms.acceptance.text")}</p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-white">{t("terms.eligibility.title")}</h2>
            <ul className="text-accent/80 space-y-2">
              <li>{t("terms.eligibility.1")}</li>
              <li>{t("terms.eligibility.2")}</li>
              <li>{t("terms.eligibility.3")}</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-white">{t("terms.content.title")}</h2>
            <ul className="text-accent/80 space-y-2">
              <li>{t("terms.content.1")}</li>
              <li>{t("terms.content.2")}</li>
              <li>{t("terms.content.3")}</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-white">{t("terms.health.title")}</h2>
            <p className="text-accent/80 mb-4">{t("terms.health.intro")}</p>
            <ul className="text-accent/80 space-y-2">
              <li>{t("terms.health.1")}</li>
              <li>{t("terms.health.2")}</li>
              <li>{t("terms.health.3")}</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-white">{t("terms.subscriptions.title")}</h2>
            <p className="text-accent/80 mb-4">{t("terms.subscriptions.intro")}</p>
            <ul className="text-accent/80 space-y-2 mb-4">
              <li>{t("terms.subscriptions.plans")}</li>
              <li>{t("terms.subscriptions.trial")}</li>
              <li>{t("terms.subscriptions.billing")}</li>
              <li>{t("terms.subscriptions.renewal")}</li>
              <li>{t("terms.subscriptions.cancel")}</li>
              <li>{t("terms.subscriptions.refunds")}</li>
            </ul>
            <p className="text-accent/80">{t("terms.subscriptions.outro")}</p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-white">{t("terms.prohibited.title")}</h2>
            <ul className="text-accent/80 space-y-2">
              <li>{t("terms.prohibited.1")}</li>
              <li>{t("terms.prohibited.2")}</li>
              <li>{t("terms.prohibited.3")}</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-white">{t("terms.liability.title")}</h2>
            <p className="text-accent/80">{t("terms.liability.text")}</p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-white">{t("terms.law.title")}</h2>
            <p className="text-accent/80">{t("terms.law.text")}</p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-white">{t("terms.changes.title")}</h2>
            <p className="text-accent/80">{t("terms.changes.text")}</p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-white">{t("terms.contact.title")}</h2>
            <p className="text-accent/80">
              {t("terms.contact.text")}{" "}
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
