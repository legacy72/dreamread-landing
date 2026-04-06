"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function Pricing() {
  const { t } = useLanguage();

  const freeFeatures = [
    "pricing.free.f1", "pricing.free.f2", "pricing.free.f3", "pricing.free.f4",
    "pricing.free.f5", "pricing.free.f6", "pricing.free.f7", "pricing.free.f8",
  ];

  const premiumFeatures = [
    "pricing.premium.f1", "pricing.premium.f2", "pricing.premium.f3", "pricing.premium.f4",
    "pricing.premium.f5", "pricing.premium.f6", "pricing.premium.f7", "pricing.premium.f8",
  ];

  return (
    <section className="py-16 px-6 overflow-hidden glow-bottom-left">
      <div className="section-divider mb-12" />
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">
            Pricing
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-text tracking-tight">
            {t("pricing.title")}
          </h2>
          <p className="text-text-secondary text-base max-w-xl mx-auto">
            {t("pricing.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto items-start">
          {/* Free Tier */}
          <div className="glass p-8 h-full transition-all duration-300 glass-hover">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-text mb-1">{t("pricing.free.name")}</h3>
              <p className="text-text-tertiary text-sm">
                {t("pricing.free.desc")}
              </p>
            </div>

            <div className="mb-8">
              <span className="text-4xl font-bold text-text">{t("pricing.free.price")}</span>
              <span className="text-text-tertiary ml-2 text-sm">{t("pricing.free.period")}</span>
            </div>

            <ul className="space-y-3">
              {freeFeatures.map((key, i) => (
                <li key={i} className="flex items-start gap-3 text-text-secondary text-sm">
                  <svg className="w-4 h-4 text-accent mt-0.5 shrink-0" viewBox="0 0 16 16" fill="none">
                    <path d="M3.5 8.5L6.5 11.5L12.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {t(key)}
                </li>
              ))}
            </ul>
          </div>

          {/* Premium Tier */}
          <div className="relative p-8 rounded-[20px] bg-gradient-to-b from-accent/10 to-accent/[0.03] border border-accent/20 h-full transition-all duration-300" style={{ animation: 'pulse-glow 4s ease-in-out infinite' }}>
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="bg-accent text-white text-[11px] font-semibold px-3.5 py-1 rounded-full tracking-wide uppercase">
                {t("pricing.premium.badge")}
              </span>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold text-text mb-1">{t("pricing.premium.name")}</h3>
              <p className="text-text-tertiary text-sm">
                {t("pricing.premium.desc")}
              </p>
            </div>

            <div className="mb-1">
              <span className="text-4xl font-bold text-text">{t("pricing.premium.price")}</span>
              <span className="text-text-tertiary ml-2 text-sm">{t("pricing.premium.period")}</span>
            </div>
            <p className="text-accent-light text-xs mb-1 font-medium">
              {t("pricing.premium.trial")}
            </p>
            <p className="text-text-tertiary text-xs mb-8">
              {t("pricing.premium.monthly")}
            </p>

            <ul className="space-y-3 mb-6">
              {premiumFeatures.map((key, i) => (
                <li key={i} className="flex items-start gap-3 text-text-secondary text-sm">
                  <svg className="w-4 h-4 text-accent mt-0.5 shrink-0" viewBox="0 0 16 16" fill="none">
                    <path d="M3.5 8.5L6.5 11.5L12.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {t(key)}
                </li>
              ))}
            </ul>

            <p className="text-text-tertiary text-xs text-center">
              {t("pricing.premium.cancel")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
