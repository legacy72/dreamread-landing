"use client";

import { useLanguage } from "@/lib/LanguageContext";
import AppStoreButton from "./AppStoreButton";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="top"
      className="px-6 md:px-14 py-16 md:py-24 grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-12 md:gap-16 items-center max-w-[1400px] mx-auto"
    >
      {/* Left — copy */}
      <div className="animate-fadeInUp">
        <p
          className="eyebrow text-[#c97a4a] mb-5"
          style={{ letterSpacing: "3px" }}
        >
          {t("hero.eyebrow")}
        </p>
        <h1 className="font-display text-[44px] sm:text-[56px] md:text-[72px] lg:text-[76px] font-normal leading-[0.96] tracking-[-2px] md:tracking-[-2.5px] m-0">
          {t("hero.title.a")}
          <br />
          {t("hero.title.b")}
          <em className="italic text-[#c97a4a]">{t("hero.title.c")}</em>
        </h1>
        <p className="mt-6 text-[16px] md:text-[17px] leading-[1.6] text-[rgba(239,231,216,0.62)] max-w-[440px]">
          {t("hero.subtitle")}
        </p>
        <div className="flex flex-wrap gap-3 mt-8">
          <AppStoreButton label={t("hero.primary")} />
          <a href="#features" className="btn-ghost">
            {t("hero.ghost")}
          </a>
        </div>
        <p className="mt-6 meta-mono text-[rgba(239,231,216,0.42)]">
          {t("hero.footnote")}
        </p>
      </div>

      {/* Right — paper card */}
      <div className="relative flex items-center justify-center min-h-[380px] md:min-h-[480px] animate-fadeInUp delay-200">
        <div className="hero-stamp">{t("herocard.stamp")}</div>
        <div className="hero-card">
          <div
            className="flex justify-between mb-9"
            style={{
              fontSize: 9,
              letterSpacing: "2.4px",
              textTransform: "uppercase",
              color: "#8a7b5f",
              fontWeight: 700,
            }}
          >
            <span>{t("herocard.cap.left")}</span>
            <span>{t("herocard.cap.right")}</span>
          </div>
          <blockquote
            className="font-display m-0 mb-7"
            style={{
              fontSize: "22px",
              fontWeight: 400,
              lineHeight: 1.45,
              letterSpacing: "0.1px",
              color: "#2b261c",
            }}
          >
            <em style={{ color: "#b8692f", fontStyle: "normal" }}>&ldquo;</em>
            {t("herocard.quote")}
            <em style={{ color: "#b8692f", fontStyle: "normal" }}>&rdquo;</em>
          </blockquote>
          <div
            className="flex justify-between"
            style={{
              fontFamily: "SF Mono, monospace",
              fontSize: 10,
              color: "#8a7b5f",
            }}
          >
            <span>{t("herocard.meta.left")}</span>
            <span>{t("herocard.meta.right")}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
