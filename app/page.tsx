"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { useAnalyticsInit } from "@/lib/useAnalytics";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import SocialProof from "@/components/SocialProof";
import Pricing from "@/components/Pricing";
import AppStoreButton from "@/components/AppStoreButton";
import Footer from "@/components/Footer";

export default function Home() {
  const { t } = useLanguage();
  useAnalyticsInit();

  return (
    <main className="min-h-screen">
      <Nav />
      <Hero />
      <Features />
      <HowItWorks />
      <SocialProof />
      <Pricing />

      <section
        id="cta"
        className="px-6 md:px-14 py-24 md:py-32 text-center border-t border-[rgba(239,231,216,0.08)] max-w-[1400px] mx-auto"
      >
        <h2 className="font-display text-[44px] sm:text-[64px] md:text-[84px] font-normal tracking-[-2.4px] leading-[1] m-0 mb-8">
          {t("cta.h2.a")}
          <br />
          {t("cta.h2.b")}
          <em className="italic text-[#c97a4a]">{t("cta.h2.c")}</em>
        </h2>
        <AppStoreButton label={t("hero.primary")} className="!px-8 !py-4" />
        <p className="mt-4 meta-mono text-[rgba(239,231,216,0.42)]">
          {t("cta.footnote")}
        </p>
      </section>

      <Footer />
    </main>
  );
}
