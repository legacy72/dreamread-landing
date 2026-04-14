"use client";

import { useLanguage } from "@/lib/LanguageContext";
import AppStoreButton from "./AppStoreButton";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="flex items-center justify-center px-6 pt-28 pb-20 relative overflow-hidden glow-top-right">
      <div className="max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="animate-fadeInUp">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-accent-light bg-accent-glow border border-accent/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            {t("hero.devices")}
          </span>
        </div>

        {/* Title */}
        <div className="animate-fadeInUp delay-100">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1] tracking-tight">
            <span className="gradient-text">{t("hero.title")}</span>
          </h1>
        </div>

        {/* Subtitle */}
        <div className="animate-fadeInUp delay-200">
          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed mb-10">
            {t("hero.subtitle")}
          </p>
        </div>

        {/* CTA */}
        <div className="animate-fadeInUp delay-300">
          <AppStoreButton />
          <p className="text-xs text-text-tertiary mt-4">
            <span className="text-accent font-medium">{t("hero.note.highlight")}</span> {t("hero.note.text")}
          </p>
        </div>

      </div>
    </section>
  );
}
