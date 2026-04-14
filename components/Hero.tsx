"use client";

import { useLanguage } from "@/lib/LanguageContext";
import AppStoreButton from "./AppStoreButton";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="min-h-[85vh] flex items-center justify-center px-6 pt-20 pb-12 relative overflow-hidden glow-top-right">
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
            <span className="text-accent font-medium">Apple Watch required</span> for sleep detection • Core playback works without Apple Watch
          </p>
        </div>

        {/* Decorative device illustration */}
        <div className="mt-16 animate-fadeInUp delay-400">
          <div className="glass inline-flex flex-col items-center px-12 py-10 animate-float">
            <div className="flex items-center gap-4 text-6xl mb-3">
              <span className="opacity-90">📱</span>
              <span className="text-2xl text-text-tertiary">+</span>
              <span className="opacity-90">⌚</span>
            </div>
            <p className="text-xs text-text-tertiary font-medium tracking-wide uppercase">
              iPhone &amp; Apple Watch
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
