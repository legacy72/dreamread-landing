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
    <section className="py-16 px-6">
      <div className="section-divider mb-12" />
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">
            How It Works
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-text tracking-tight">
            {t("how.title")}
          </h2>
          <p className="text-text-secondary text-base max-w-xl mx-auto">
            {t("how.subtitle")}
          </p>
        </div>

        {/* Desktop: horizontal flow with dotted connectors */}
        <div className="hidden md:flex items-start justify-center gap-0">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start">
              <div className="glass p-8 text-center w-64 transition-all duration-300 glass-hover">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-accent/15 border border-accent/20 text-accent font-bold text-sm mb-5">
                  {step.number}
                </div>
                <div className="text-4xl mb-5">{step.icon}</div>
                <h3 className="text-lg font-semibold mb-3 text-text">
                  {t(step.titleKey)}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {t(step.descKey)}
                </p>
              </div>

              {index < steps.length - 1 && (
                <div className="flex items-center self-center px-3 shrink-0">
                  <div className="w-12 border-t-2 border-dashed border-accent/25" />
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-accent/40 -ml-1 shrink-0">
                    <path d="M4 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile: vertical stack with dotted connectors */}
        <div className="flex md:hidden flex-col items-center gap-0">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center w-full max-w-sm">
              <div className="glass p-8 text-center w-full transition-all duration-300 glass-hover">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-accent/15 border border-accent/20 text-accent font-bold text-sm mb-5">
                  {step.number}
                </div>
                <div className="text-4xl mb-5">{step.icon}</div>
                <h3 className="text-lg font-semibold mb-3 text-text">
                  {t(step.titleKey)}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {t(step.descKey)}
                </p>
              </div>

              {index < steps.length - 1 && (
                <div className="flex flex-col items-center py-2">
                  <div className="h-8 border-l-2 border-dashed border-accent/25" />
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-accent/40 -mt-1">
                    <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
