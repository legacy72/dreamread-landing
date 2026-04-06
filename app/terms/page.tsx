"use client";

import Link from "next/link";
import Footer from "@/components/Footer";
import { useLanguage } from "@/lib/LanguageContext";

export default function TermsOfService() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <Link
          href="/"
          className="inline-flex items-center text-text-tertiary hover:text-accent text-sm gap-2 mb-10 transition-colors duration-200"
        >
          <svg className="w-4 h-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M15 19l-7-7 7-7"></path>
          </svg>
          {t("support.back")}
        </Link>

        <div className="mb-14">
          <h1 className="text-3xl md:text-4xl font-bold mb-3 text-text tracking-tight">{t("terms.title")}</h1>
          <p className="text-text-tertiary text-sm">{t("terms.updated")}</p>
        </div>

        <div className="space-y-8">
          <div className="glass p-8">
            <h2 className="text-lg font-semibold mb-3 text-text">{t("terms.acceptance.title")}</h2>
            <p className="text-text-secondary text-sm leading-relaxed">{t("terms.acceptance.text")}</p>
          </div>

          <div className="glass p-8">
            <h2 className="text-lg font-semibold mb-3 text-text">{t("terms.eligibility.title")}</h2>
            <ul className="text-text-secondary text-sm leading-relaxed space-y-2">
              <li className="flex items-start gap-2"><span className="text-accent mt-1 shrink-0">·</span>{t("terms.eligibility.1")}</li>
              <li className="flex items-start gap-2"><span className="text-accent mt-1 shrink-0">·</span>{t("terms.eligibility.2")}</li>
              <li className="flex items-start gap-2"><span className="text-accent mt-1 shrink-0">·</span>{t("terms.eligibility.3")}</li>
            </ul>
          </div>

          <div className="glass p-8">
            <h2 className="text-lg font-semibold mb-3 text-text">{t("terms.content.title")}</h2>
            <ul className="text-text-secondary text-sm leading-relaxed space-y-2">
              <li className="flex items-start gap-2"><span className="text-accent mt-1 shrink-0">·</span>{t("terms.content.1")}</li>
              <li className="flex items-start gap-2"><span className="text-accent mt-1 shrink-0">·</span>{t("terms.content.2")}</li>
              <li className="flex items-start gap-2"><span className="text-accent mt-1 shrink-0">·</span>{t("terms.content.3")}</li>
            </ul>
          </div>

          <div className="glass p-8">
            <h2 className="text-lg font-semibold mb-3 text-text">{t("terms.health.title")}</h2>
            <p className="text-text-secondary text-sm leading-relaxed mb-4">{t("terms.health.intro")}</p>
            <ul className="text-text-secondary text-sm leading-relaxed space-y-2">
              <li className="flex items-start gap-2"><span className="text-accent mt-1 shrink-0">·</span>{t("terms.health.1")}</li>
              <li className="flex items-start gap-2"><span className="text-accent mt-1 shrink-0">·</span>{t("terms.health.2")}</li>
              <li className="flex items-start gap-2"><span className="text-accent mt-1 shrink-0">·</span>{t("terms.health.3")}</li>
            </ul>
          </div>

          <div className="glass p-8">
            <h2 className="text-lg font-semibold mb-3 text-text">{t("terms.subscriptions.title")}</h2>
            <p className="text-text-secondary text-sm leading-relaxed mb-4">{t("terms.subscriptions.intro")}</p>
            <ul className="text-text-secondary text-sm leading-relaxed space-y-2 mb-4">
              <li className="flex items-start gap-2"><span className="text-accent mt-1 shrink-0">·</span>{t("terms.subscriptions.plans")}</li>
              <li className="flex items-start gap-2"><span className="text-accent mt-1 shrink-0">·</span>{t("terms.subscriptions.trial")}</li>
              <li className="flex items-start gap-2"><span className="text-accent mt-1 shrink-0">·</span>{t("terms.subscriptions.billing")}</li>
              <li className="flex items-start gap-2"><span className="text-accent mt-1 shrink-0">·</span>{t("terms.subscriptions.renewal")}</li>
              <li className="flex items-start gap-2"><span className="text-accent mt-1 shrink-0">·</span>{t("terms.subscriptions.cancel")}</li>
              <li className="flex items-start gap-2"><span className="text-accent mt-1 shrink-0">·</span>{t("terms.subscriptions.refunds")}</li>
            </ul>
            <p className="text-text-secondary text-sm leading-relaxed">{t("terms.subscriptions.outro")}</p>
          </div>

          <div className="glass p-8">
            <h2 className="text-lg font-semibold mb-3 text-text">{t("terms.prohibited.title")}</h2>
            <ul className="text-text-secondary text-sm leading-relaxed space-y-2">
              <li className="flex items-start gap-2"><span className="text-accent mt-1 shrink-0">·</span>{t("terms.prohibited.1")}</li>
              <li className="flex items-start gap-2"><span className="text-accent mt-1 shrink-0">·</span>{t("terms.prohibited.2")}</li>
              <li className="flex items-start gap-2"><span className="text-accent mt-1 shrink-0">·</span>{t("terms.prohibited.3")}</li>
            </ul>
          </div>

          <div className="glass p-8">
            <h2 className="text-lg font-semibold mb-3 text-text">{t("terms.liability.title")}</h2>
            <p className="text-text-secondary text-sm leading-relaxed">{t("terms.liability.text")}</p>
          </div>

          <div className="glass p-8">
            <h2 className="text-lg font-semibold mb-3 text-text">{t("terms.law.title")}</h2>
            <p className="text-text-secondary text-sm leading-relaxed">{t("terms.law.text")}</p>
          </div>

          <div className="glass p-8">
            <h2 className="text-lg font-semibold mb-3 text-text">{t("terms.changes.title")}</h2>
            <p className="text-text-secondary text-sm leading-relaxed">{t("terms.changes.text")}</p>
          </div>

          <div className="glass p-8">
            <h2 className="text-lg font-semibold mb-3 text-text">{t("terms.contact.title")}</h2>
            <p className="text-text-secondary text-sm leading-relaxed">
              {t("terms.contact.text")}{" "}
              <a href="mailto:hoperoina2016@gmail.com" className="text-accent hover:text-accent-light transition-colors duration-200">
                hoperoina2016@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
