"use client";

import { useLanguage } from "@/lib/LanguageContext";
import AppStoreButton from "./AppStoreButton";
import PhoneMockup from "./PhoneMockup";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="flex items-center justify-center px-6 pt-24 pb-16 md:pt-28 md:pb-20 relative overflow-hidden glow-top-right">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16">
        {/* Left side: text content */}
        <div className="flex-1 text-center md:text-left">
          {/* Badge */}
          <div className="animate-fadeInUp">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-accent-light bg-accent-glow border border-accent/20 mb-8">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              {t("hero.devices")}
            </span>
          </div>

          {/* Title */}
          <div className="animate-fadeInUp delay-100">
            <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1] tracking-tight">
              <span className="gradient-text">{t("hero.title")}</span>
            </h1>
          </div>

          {/* Subtitle */}
          <div className="animate-fadeInUp delay-200">
            <p className="text-lg md:text-xl text-text-secondary max-w-lg mx-auto md:mx-0 leading-relaxed mb-10">
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

        {/* Right side: phone mockup */}
        <div className="animate-fadeInUp delay-400 flex-shrink-0 hidden md:block">
          <PhoneMockup width={280} />
        </div>
      </div>
    </section>
  );
}
