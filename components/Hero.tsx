"use client";

import { useLanguage } from "@/lib/LanguageContext";
import AppStoreButton from "./AppStoreButton";
import PhoneMockup from "./PhoneMockup";
import PulseChip from "./PulseChip";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="top"
      className="px-6 md:px-14 pt-12 md:pt-16 pb-16 md:pb-24 grid grid-cols-1 md:grid-cols-[1.08fr_0.92fr] gap-14 md:gap-12 items-center max-w-[1400px] mx-auto overflow-x-clip"
    >
      {/* Left — copy */}
      <div className="animate-fadeInUp">
        <p className="eyebrow text-[#c97a4a] mb-5">{t("hero.eyebrow")}</p>
        <h1 className="font-display text-[46px] sm:text-[58px] md:text-[74px] lg:text-[82px] font-normal leading-[0.95] tracking-[-2px] md:tracking-[-2.8px] m-0">
          {t("hero.title.a")}
          <br />
          {t("hero.title.b")}
          <em className="italic text-[#c97a4a]">{t("hero.title.c")}</em>
        </h1>
        <p className="mt-6 text-[16px] md:text-[17px] leading-[1.6] text-[rgba(239,231,216,0.62)] max-w-[460px]">
          {t("hero.subtitle")}
        </p>
        <div className="mt-5 flex flex-wrap gap-2 max-w-[560px]">
          <span className="meta-mono px-3 py-1.5 border border-[rgba(201,122,74,0.32)] text-[#efe7d8] bg-[rgba(201,122,74,0.08)] rounded-[3px]">
            {t("hero.qualifier.primary")}
          </span>
          <span className="meta-mono px-3 py-1.5 border border-[rgba(239,231,216,0.12)] text-[rgba(239,231,216,0.72)] bg-[rgba(239,231,216,0.03)] rounded-[3px]">
            {t("hero.qualifier.secondary")}
          </span>
        </div>
        <div className="flex flex-wrap gap-3 mt-8">
          <AppStoreButton label={t("hero.primary")} analyticsSource="hero" />
          <a href="#features" className="btn-ghost">
            {t("hero.ghost")}
          </a>
        </div>
        <p className="mt-6 meta-mono text-[rgba(239,231,216,0.42)]">
          {t("hero.footnote")}
        </p>
      </div>

      {/* Right — phone mockup + live pulse readout */}
      <div className="relative flex items-center justify-center animate-fadeInUp delay-200">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(46% 42% at 58% 38%, rgba(201,122,74,0.2) 0%, transparent 70%)",
          }}
          aria-hidden
        />
        <div className="relative w-[252px] sm:w-[270px]">
          <PhoneMockup />
          <PulseChip className="absolute -left-6 sm:-left-24 bottom-10 shadow-2xl" />
        </div>
      </div>
    </section>
  );
}
