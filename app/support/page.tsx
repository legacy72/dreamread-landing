"use client";

import Link from "next/link";
import Footer from "@/components/Footer";
import { useLanguage } from "@/lib/LanguageContext";

const faqKeys = ["1", "2", "3", "4", "5", "6", "7", "8"] as const;

export default function Support() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">{t("support.title")}</h1>
          <p className="text-accent/60 mb-12">{t("support.subtitle")}</p>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-white">{t("support.contact.title")}</h2>
            <p className="text-accent/80 mb-4">
              {t("support.contact.desc")}
            </p>
            <a
              href="mailto:hoperoina2016@gmail.com"
              className="inline-block bg-accent-blue text-white font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity"
            >
              hoperoina2016@gmail.com
            </a>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-white">{t("support.faq.title")}</h2>

            <div className="space-y-8">
              {faqKeys.map((num) => (
                <div key={num}>
                  <h3 className="text-xl font-semibold mb-2 text-white">{t(`support.faq.q${num}`)}</h3>
                  <p className="text-accent/80">{t(`support.faq.a${num}`)}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-white">{t("support.legal.title")}</h2>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-accent-blue hover:underline">{t("footer.privacy")}</Link>
              <Link href="/terms" className="text-accent-blue hover:underline">{t("footer.terms")}</Link>
            </div>
          </section>
        </article>
      </div>
      <Footer />
    </main>
  );
}
