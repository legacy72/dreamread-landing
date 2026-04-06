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
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            {t("features.title")}
          </h2>
          <p className="text-xl text-accent/80">
            {t("features.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-accent-blue/30 hover:scale-105 transform transition-all duration-300 group"
            >
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white">
                {t(feature.titleKey)}
              </h3>
              <p className="text-accent/80 leading-relaxed">
                {t(feature.descKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
