"use client";

import Link from "next/link";
import Footer from "@/components/Footer";
import { useLanguage } from "@/lib/LanguageContext";

export default function PrivacyPolicy() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">{t("privacy.title")}</h1>
          <p className="text-accent/60 mb-12">{t("privacy.updated")}</p>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-white">{t("privacy.overview.title")}</h2>
            <p className="text-accent/80">{t("privacy.overview.text")}</p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-white">{t("privacy.health.title")}</h2>
            <p className="text-accent/80 mb-4">{t("privacy.health.intro")}</p>
            <ul className="text-accent/80 space-y-2 mb-4">
              <li>{t("privacy.health.1")}</li>
              <li>{t("privacy.health.2")}</li>
              <li>{t("privacy.health.3")}</li>
              <li>{t("privacy.health.4")}</li>
            </ul>
            <p className="text-accent/80">{t("privacy.health.outro")}</p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-white">{t("privacy.content.title")}</h2>
            <ul className="text-accent/80 space-y-2">
              <li>{t("privacy.content.1")}</li>
              <li>{t("privacy.content.2")}</li>
              <li>{t("privacy.content.3")}</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-white">{t("privacy.nocollect.title")}</h2>
            <p className="text-accent/80 mb-4">{t("privacy.nocollect.intro")}</p>
            <ul className="text-accent/80 space-y-2">
              <li>{t("privacy.nocollect.1")}</li>
              <li>{t("privacy.nocollect.2")}</li>
              <li>{t("privacy.nocollect.3")}</li>
              <li>{t("privacy.nocollect.4")}</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-white">{t("privacy.purchases.title")}</h2>
            <p className="text-accent/80 mb-4">{t("privacy.purchases.intro")}</p>
            <ul className="text-accent/80 space-y-2">
              <li>{t("privacy.purchases.1")}</li>
              <li>{t("privacy.purchases.2")}</li>
              <li>{t("privacy.purchases.3")}</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-white">{t("privacy.thirdparty.title")}</h2>
            <ul className="text-accent/80 space-y-2">
              <li>{t("privacy.thirdparty.healthkit")}</li>
              <li>{t("privacy.thirdparty.icloud")}</li>
              <li>{t("privacy.thirdparty.storekit")}</li>
            </ul>
            <p className="text-accent/80 mt-4">{t("privacy.thirdparty.outro")}</p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-white">{t("privacy.retention.title")}</h2>
            <p className="text-accent/80">{t("privacy.retention.text")}</p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-white">{t("privacy.children.title")}</h2>
            <p className="text-accent/80">{t("privacy.children.text")}</p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-white">{t("privacy.changes.title")}</h2>
            <p className="text-accent/80">{t("privacy.changes.text")}</p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-white">{t("privacy.contact.title")}</h2>
            <p className="text-accent/80">
              {t("privacy.contact.text")}{" "}
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
