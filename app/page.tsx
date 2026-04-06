"use client";

import { useLanguage } from "@/lib/LanguageContext";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import AppStoreButton from "@/components/AppStoreButton";
import Footer from "@/components/Footer";

export default function Home() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <HowItWorks />
      <Pricing />

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            {t("cta.title")}
          </h2>
          <p className="text-xl text-accent/80 mb-12">
            {t("cta.subtitle")}
          </p>
          <AppStoreButton />
        </div>
      </section>

      <Footer />
    </main>
  );
}
