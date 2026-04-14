"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function Features() {
  const { t } = useLanguage();

  const features = [
    { icon: "💤", titleKey: "features.sleep.title", descKey: "features.sleep.desc" },
    { icon: "⌚", titleKey: "features.watch.title", descKey: "features.watch.desc" },
    { icon: "🌙", titleKey: "features.timer.title", descKey: "features.timer.desc" },
    { icon: "📖", titleKey: "features.catalog.title", descKey: "features.catalog.desc" },
    { icon: "🎧", titleKey: "features.formats.title", descKey: "features.formats.desc" },
    { icon: "📊", titleKey: "features.stats.title", descKey: "features.stats.desc" },
  ];

  return (
    <section className="py-16 px-6">
      <div className="section-divider mb-12" />
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">
            {t("section.features")}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-text tracking-tight">
            {t("features.title")}
          </h2>
          <p className="text-text-secondary text-base max-w-xl mx-auto">
            {t("features.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass glass-hover p-7 transition-all duration-300 group cursor-default"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className="icon-wrap mb-5 group-hover:scale-105 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-text">
                {t(feature.titleKey)}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                {t(feature.descKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
