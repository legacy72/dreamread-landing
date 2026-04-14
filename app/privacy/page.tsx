"use client";

import Link from "next/link";
import Footer from "@/components/Footer";
import { useLanguage } from "@/lib/LanguageContext";

export default function PrivacyPolicy() {
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
          <h1 className="text-3xl md:text-4xl font-bold mb-3 text-text tracking-tight">{t("privacy.title")}</h1>
          <p className="text-text-tertiary text-sm">{t("privacy.updated")}</p>
        </div>

        <div className="space-y-8">
          <div className="glass p-8">
            <h2 className="text-lg font-semibold mb-3 text-text">{t("privacy.overview.title")}</h2>
            <p className="text-text-secondary text-sm leading-relaxed">{t("privacy.overview.text")}</p>
          </div>

          <div className="glass p-8">
            <h2 className="text-lg font-semibold mb-3 text-text">{t("privacy.health.title")}</h2>
            <p className="text-text-secondary text-sm leading-relaxed mb-4">{t("privacy.health.intro")}</p>
            <ul className="text-text-secondary text-sm leading-relaxed space-y-2 mb-4">
              <li className="flex items-start gap-2"><span className="text-accent mt-1 shrink-0">·</span>{t("privacy.health.1")}</li>
              <li className="flex items-start gap-2"><span className="text-accent mt-1 shrink-0">·</span>{t("privacy.health.2")}</li>
              <li className="flex items-start gap-2"><span className="text-accent mt-1 shrink-0">·</span>{t("privacy.health.3")}</li>
              <li className="flex items-start gap-2"><span className="text-accent mt-1 shrink-0">·</span>{t("privacy.health.4")}</li>
            </ul>
            <p className="text-text-secondary text-sm leading-relaxed">{t("privacy.health.outro")}</p>
          </div>

          <div className="glass p-8">
            <h2 className="text-lg font-semibold mb-3 text-text">{t("privacy.content.title")}</h2>
            <ul className="text-text-secondary text-sm leading-relaxed space-y-2">
              <li className="flex items-start gap-2"><span className="text-accent mt-1 shrink-0">·</span>{t("privacy.content.1")}</li>
              <li className="flex items-start gap-2"><span className="text-accent mt-1 shrink-0">·</span>{t("privacy.content.2")}</li>
              <li className="flex items-start gap-2"><span className="text-accent mt-1 shrink-0">·</span>{t("privacy.content.3")}</li>
            </ul>
          </div>

          <div className="glass p-8">
            <h2 className="text-lg font-semibold mb-3 text-text">{t("privacy.nocollect.title")}</h2>
            <p className="text-text-secondary text-sm leading-relaxed mb-4">{t("privacy.nocollect.intro")}</p>
            <ul className="text-text-secondary text-sm leading-relaxed space-y-2">
              <li className="flex items-start gap-2"><span className="text-accent mt-1 shrink-0">·</span>{t("privacy.nocollect.1")}</li>
              <li className="flex items-start gap-2"><span className="text-accent mt-1 shrink-0">·</span>{t("privacy.nocollect.2")}</li>
              <li className="flex items-start gap-2"><span className="text-accent mt-1 shrink-0">·</span>{t("privacy.nocollect.3")}</li>
              <li className="flex items-start gap-2"><span className="text-accent mt-1 shrink-0">·</span>{t("privacy.nocollect.4")}</li>
            </ul>
          </div>

          <div className="glass p-8">
            <h2 className="text-lg font-semibold mb-3 text-text">{t("privacy.purchases.title")}</h2>
            <p className="text-text-secondary text-sm leading-relaxed mb-4">{t("privacy.purchases.intro")}</p>
            <ul className="text-text-secondary text-sm leading-relaxed space-y-2">
              <li className="flex items-start gap-2"><span className="text-accent mt-1 shrink-0">·</span>{t("privacy.purchases.1")}</li>
              <li className="flex items-start gap-2"><span className="text-accent mt-1 shrink-0">·</span>{t("privacy.purchases.2")}</li>
              <li className="flex items-start gap-2"><span className="text-accent mt-1 shrink-0">·</span>{t("privacy.purchases.3")}</li>
            </ul>
          </div>

          <div className="glass p-8">
            <h2 className="text-lg font-semibold mb-3 text-text">{t("privacy.thirdparty.title")}</h2>
            <ul className="text-text-secondary text-sm leading-relaxed space-y-2">
              <li className="flex items-start gap-2"><span className="text-accent mt-1 shrink-0">·</span>{t("privacy.thirdparty.healthkit")}</li>
              <li className="flex items-start gap-2"><span className="text-accent mt-1 shrink-0">·</span>{t("privacy.thirdparty.icloud")}</li>
              <li className="flex items-start gap-2"><span className="text-accent mt-1 shrink-0">·</span>{t("privacy.thirdparty.storekit")}</li>
            </ul>
            <p className="text-text-secondary text-sm leading-relaxed mt-4">{t("privacy.thirdparty.outro")}</p>
          </div>

          <div className="glass p-8">
            <h2 className="text-lg font-semibold mb-3 text-text">{t("privacy.analytics.title")}</h2>
            <p className="text-text-secondary text-sm leading-relaxed mb-4">{t("privacy.analytics.text")}</p>
            <ul className="text-text-secondary text-sm leading-relaxed space-y-2">
              <li className="flex items-start gap-2"><span className="text-accent mt-1 shrink-0">·</span>{t("privacy.analytics.1")}</li>
              <li className="flex items-start gap-2"><span className="text-accent mt-1 shrink-0">·</span>{t("privacy.analytics.2")}</li>
              <li className="flex items-start gap-2"><span className="text-accent mt-1 shrink-0">·</span>{t("privacy.analytics.3")}</li>
              <li className="flex items-start gap-2"><span className="text-accent mt-1 shrink-0">·</span>{t("privacy.analytics.4")}</li>
            </ul>
          </div>

          <div className="glass p-8">
            <h2 className="text-lg font-semibold mb-3 text-text">{t("privacy.retention.title")}</h2>
            <p className="text-text-secondary text-sm leading-relaxed">{t("privacy.retention.text")}</p>
          </div>

          <div className="glass p-8">
            <h2 className="text-lg font-semibold mb-3 text-text">{t("privacy.children.title")}</h2>
            <p className="text-text-secondary text-sm leading-relaxed">{t("privacy.children.text")}</p>
          </div>

          <div className="glass p-8">
            <h2 className="text-lg font-semibold mb-3 text-text">{t("privacy.changes.title")}</h2>
            <p className="text-text-secondary text-sm leading-relaxed">{t("privacy.changes.text")}</p>
          </div>

          <div className="glass p-8">
            <h2 className="text-lg font-semibold mb-3 text-text">{t("privacy.contact.title")}</h2>
            <p className="text-text-secondary text-sm leading-relaxed">
              {t("privacy.contact.text")}{" "}
              <a href="mailto:support@dreamread.app" className="text-accent hover:text-accent-light transition-colors duration-200">
                support@dreamread.app
              </a>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
