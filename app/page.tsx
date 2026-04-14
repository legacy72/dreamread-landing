"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { useAnalyticsInit } from "@/lib/useAnalytics";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import AppStoreButton from "@/components/AppStoreButton";
import Footer from "@/components/Footer";

export default function Home() {
  const { t } = useLanguage();
  useAnalyticsInit();

  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <HowItWorks />
      <Pricing />

      {/* Final CTA */}
      <section className="py-16 px-6">
        <div className="section-divider mb-12" />
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-5 text-text tracking-tight">
            {t("cta.title")}
          </h2>
          <p className="text-text-secondary text-base mb-10 max-w-xl mx-auto">
            {t("cta.subtitle")}
          </p>
          <AppStoreButton />
        </div>
      </section>

      <Footer />
    </main>
  );
}
