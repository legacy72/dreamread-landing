"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import AppStoreButton from "./AppStoreButton";
import Reveal from "./Reveal";

const FREE_FEATURES = [
  "pricing.free.f1",
  "pricing.free.f2",
  "pricing.free.f3",
  "pricing.free.f4",
  "pricing.free.f5",
  "pricing.free.f6",
];

const PREMIUM_FEATURES = [
  "pricing.premium.f1",
  "pricing.premium.f2",
  "pricing.premium.f3",
  "pricing.premium.f4",
  "pricing.premium.f5",
  "pricing.premium.f6",
];

export default function Pricing() {
  const { t } = useLanguage();
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section
      id="pricing"
      className="px-6 md:px-14 py-24 border-t border-[rgba(239,231,216,0.08)] max-w-[1400px] mx-auto"
    >
      <div className="mb-14">
        <h2 className="font-display text-[36px] md:text-[56px] font-normal tracking-[-1.6px] leading-[1] m-0 mb-4">
          {t("pricing.h2.a")}
          <em className="italic text-[#c97a4a]">{t("pricing.h2.b")}</em>
        </h2>
        <p className="max-w-[540px] text-[15px] leading-[1.6] text-[rgba(239,231,216,0.62)] m-0">
          {t("pricing.subtitle")}
        </p>
      </div>

      <Reveal className="grid grid-cols-1 md:grid-cols-2 border border-[rgba(239,231,216,0.16)]">
        {/* Free */}
        <div className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-[rgba(239,231,216,0.16)]">
          <div className="flex items-baseline justify-between pb-5 mb-6 border-b border-[rgba(239,231,216,0.16)]">
            <div className="font-display text-[24px] md:text-[28px] font-medium tracking-[-0.6px]">
              {t("pricing.free.name")}
            </div>
            <div className="meta-mono text-[rgba(239,231,216,0.42)]">
              {t("pricing.free.tag")}
            </div>
          </div>

          <div className="flex items-baseline gap-2 mb-2">
            <span className="font-display text-[56px] md:text-[64px] font-normal tracking-[-2px] leading-[1]">
              {t("pricing.free.price")}
            </span>
            <span className="meta-mono text-[rgba(239,231,216,0.42)]">
              {t("pricing.free.per")}
            </span>
          </div>

          <p className="text-[13px] leading-[1.55] text-[rgba(239,231,216,0.62)] m-0 mb-7 max-w-[340px]">
            {t("pricing.free.desc")}
          </p>

          <ul className="list-none p-0 m-0 mb-7">
            {FREE_FEATURES.map((k) => (
              <li
                key={k}
                className="flex items-baseline gap-3 py-2.5 text-[13px] text-[#efe7d8] border-b border-dotted border-[rgba(239,231,216,0.08)]"
              >
                <span className="font-mono text-[11px] font-bold text-[#c97a4a]">
                  ◦
                </span>
                {t(k)}
              </li>
            ))}
          </ul>

          <AppStoreButton
            variant="ghost"
            analyticsSource="pricing_free"
            className="w-full"
            label={t("pricing.free.cta")}
          />
          <div className="mt-3.5 text-[11px] text-[rgba(239,231,216,0.42)] text-center">
            {t("pricing.free.note")}
          </div>
        </div>

        {/* Premium */}
        <div
          className="p-8 md:p-10"
          style={{ background: "rgba(201,122,74,0.04)" }}
        >
          <div className="flex items-baseline justify-between pb-5 mb-6 border-b border-[rgba(239,231,216,0.16)]">
            <div className="font-display text-[24px] md:text-[28px] font-medium tracking-[-0.6px]">
              {t("pricing.premium.name")}
            </div>
            <div
              className="text-[10px] font-bold tracking-[2px] uppercase px-2.5 py-1 rounded-[2px]"
              style={{ background: "#c97a4a", color: "#efe7d8" }}
            >
              {t("pricing.premium.badge")}
            </div>
          </div>

          {/* billing toggle */}
          <div className="flex items-center gap-1 mb-5 p-1 rounded-[6px] w-fit bg-[rgba(239,231,216,0.04)]">
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-3 py-1.5 rounded-[4px] text-[11px] font-semibold tracking-[0.4px] uppercase cursor-pointer transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#c97a4a] focus-visible:outline-offset-2 ${
                isAnnual
                  ? "bg-[#c97a4a] text-[#efe7d8]"
                  : "text-[rgba(239,231,216,0.62)]"
              }`}
            >
              {t("pricing.toggle.annual")}
            </button>
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-3 py-1.5 rounded-[4px] text-[11px] font-semibold tracking-[0.4px] uppercase cursor-pointer transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#c97a4a] focus-visible:outline-offset-2 ${
                !isAnnual
                  ? "bg-[#c97a4a] text-[#efe7d8]"
                  : "text-[rgba(239,231,216,0.62)]"
              }`}
            >
              {t("pricing.toggle.monthly")}
            </button>
          </div>

          <div className="flex items-baseline gap-2 mb-2">
            <span className="font-display text-[56px] md:text-[64px] font-normal tracking-[-2px] leading-[1]">
              {isAnnual
                ? t("pricing.premium.price.annual")
                : t("pricing.premium.price.monthly")}
            </span>
            <span className="meta-mono text-[rgba(239,231,216,0.42)]">
              {isAnnual
                ? t("pricing.premium.per.annual")
                : t("pricing.premium.per.monthly")}
            </span>
          </div>

          <p className="text-[13px] leading-[1.55] text-[rgba(239,231,216,0.62)] m-0 mb-7 max-w-[340px]">
            {t("pricing.premium.desc")}
          </p>

          <ul className="list-none p-0 m-0 mb-7">
            {PREMIUM_FEATURES.map((k) => (
              <li
                key={k}
                className="flex items-baseline gap-3 py-2.5 text-[13px] text-[#efe7d8] border-b border-dotted border-[rgba(239,231,216,0.08)]"
              >
                <span className="font-mono text-[11px] font-bold text-[#c97a4a]">
                  ●
                </span>
                {t(k)}
              </li>
            ))}
          </ul>

          <AppStoreButton
            analyticsSource="pricing_premium"
            className="w-full"
            label={t("pricing.premium.cta")}
          />
          <div className="mt-3.5 text-[11px] text-[rgba(239,231,216,0.42)] text-center">
            {isAnnual
              ? t("pricing.premium.note.annual")
              : t("pricing.premium.note.monthly")}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
