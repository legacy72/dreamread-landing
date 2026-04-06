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
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            {t("pricing.title")}
          </h2>
          <p className="text-xl text-accent/80">
            {t("pricing.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free Tier */}
          <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-accent-blue/30 transition-all duration-300">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-1">{t("pricing.free.name")}</h3>
              <p className="text-accent/60 text-sm">
                {t("pricing.free.desc")}
              </p>
            </div>

            <div className="mb-8">
              <span className="text-5xl font-bold text-white">{t("pricing.free.price")}</span>
              <span className="text-accent/60 ml-1">{t("pricing.free.period")}</span>
            </div>

            <ul className="space-y-3 mb-8">
              {freeFeatures.map((key, i) => (
                <li key={i} className="flex items-center gap-3 text-accent/80">
                  <span className="text-secondary text-lg">&#10003;</span>
                  {t(key)}
                </li>
              ))}
            </ul>
          </div>

          {/* Premium Tier */}
          <div className="relative p-8 rounded-2xl bg-gradient-to-b from-secondary/20 to-secondary/5 border border-secondary/50 scale-105 transition-all duration-300">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="bg-secondary text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wide">
                {t("pricing.premium.badge")}
              </span>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-1">{t("pricing.premium.name")}</h3>
              <p className="text-accent/60 text-sm">
                {t("pricing.premium.desc")}
              </p>
            </div>

            <div className="mb-2">
              <span className="text-5xl font-bold text-white">{t("pricing.premium.price")}</span>
              <span className="text-accent/60 ml-1">{t("pricing.premium.period")}</span>
            </div>
            <p className="text-accent-blue text-sm mb-1">
              {t("pricing.premium.trial")}
            </p>
            <p className="text-accent/50 text-sm mb-8">
              {t("pricing.premium.monthly")}
            </p>

            <ul className="space-y-3 mb-8">
              {premiumFeatures.map((key, i) => (
                <li key={i} className="flex items-center gap-3 text-accent/80">
                  <span className="text-secondary text-lg">&#10003;</span>
                  {t(key)}
                </li>
              ))}
            </ul>

            <p className="text-accent/50 text-xs text-center">
              {t("pricing.premium.cancel")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
