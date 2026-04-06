"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function HowItWorks() {
  const { t } = useLanguage();

  const steps = [
    { number: "1", titleKey: "how.step1.title", descKey: "how.step1.desc", icon: "📚" },
    { number: "2", titleKey: "how.step2.title", descKey: "how.step2.desc", icon: "🌙" },
    { number: "3", titleKey: "how.step3.title", descKey: "how.step3.desc", icon: "😴" },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-transparent via-primary-dark/50 to-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            {t("how.title")}
          </h2>
          <p className="text-xl text-accent/80">
            {t("how.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-secondary to-secondary/70 flex items-center justify-center text-3xl font-bold text-white mb-6 shadow-lg">
                  {step.number}
                </div>

                <div className="text-5xl mb-6">{step.icon}</div>

                <h3 className="text-2xl font-semibold mb-4 text-white">
                  {t(step.titleKey)}
                </h3>

                <p className="text-accent/80 leading-relaxed">
                  {t(step.descKey)}
                </p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-full w-full h-1">
                  <div className="w-full h-full bg-gradient-to-r from-secondary to-transparent"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
