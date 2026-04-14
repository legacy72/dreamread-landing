"use client";

import Link from "next/link";
import Footer from "@/components/Footer";
import { useLanguage } from "@/lib/LanguageContext";

const faqKeys = ["1", "2", "3", "4", "5", "6", "7", "8"] as const;

export default function Support() {
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
          <h1 className="text-3xl md:text-4xl font-bold mb-3 text-text tracking-tight">{t("support.title")}</h1>
          <p className="text-text-tertiary text-sm">{t("support.subtitle")}</p>
        </div>

        {/* Contact */}
        <div className="glass p-8 mb-12">
          <h2 className="text-xl font-semibold mb-3 text-text">{t("support.contact.title")}</h2>
          <p className="text-text-secondary text-sm leading-relaxed mb-5">
            {t("support.contact.desc")}
          </p>
          <a
            href="mailto:support@dreamread.app"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-white text-sm font-medium px-5 py-2.5 rounded-xl transition-colors duration-200"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            support@dreamread.app
          </a>
        </div>

        {/* FAQ */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold mb-6 text-text">{t("support.faq.title")}</h2>
          <div className="space-y-4">
            {faqKeys.map((num) => (
              <div key={num} className="glass p-6 transition-all duration-300 glass-hover">
                <h3 className="text-sm font-semibold mb-2 text-text">{t(`support.faq.q${num}`)}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{t(`support.faq.a${num}`)}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Legal links */}
        <div className="glass p-6">
          <h2 className="text-lg font-semibold mb-3 text-text">{t("support.legal.title")}</h2>
          <div className="flex gap-5">
            <Link href="/privacy" className="text-accent hover:text-accent-light text-sm transition-colors duration-200">{t("footer.privacy")}</Link>
            <Link href="/terms" className="text-accent hover:text-accent-light text-sm transition-colors duration-200">{t("footer.terms")}</Link>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
