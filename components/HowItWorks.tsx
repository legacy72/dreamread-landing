"use client";

import { useLanguage } from "@/lib/LanguageContext";

interface Step {
  k: string;
  titleKey: string;
  descKey: string;
}

const STEPS: Step[] = [
  { k: "01", titleKey: "how.step1.title", descKey: "how.step1.desc" },
  { k: "02", titleKey: "how.step2.title", descKey: "how.step2.desc" },
  { k: "03", titleKey: "how.step3.title", descKey: "how.step3.desc" },
  { k: "·", titleKey: "how.step4.title", descKey: "how.step4.desc" },
];

export default function HowItWorks() {
  const { t } = useLanguage();

  return (
    <section
      id="how"
      className="px-6 md:px-14 py-20 md:py-24 border-t border-[rgba(239,231,216,0.08)] max-w-[1400px] mx-auto"
    >
      <h2 className="font-display text-[36px] md:text-[56px] font-normal tracking-[-1.6px] leading-[1] m-0 mb-14 max-w-[780px]">
        {t("how.h2.a")}
        <br />
        {t("how.h2.b")}
        <em className="italic text-[#c97a4a]">{t("how.h2.c")}</em>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {STEPS.map((s) => (
          <div
            key={s.k}
            className="bg-[#1d1e25] border border-[rgba(239,231,216,0.08)] rounded-[8px] p-8"
          >
            <div className="font-display text-[48px] font-normal leading-[1] text-[#c97a4a]">
              {s.k}
            </div>
            <h3 className="font-display text-[22px] font-medium tracking-[-0.3px] m-0 mt-3.5 mb-2 text-[#efe7d8]">
              {t(s.titleKey)}
            </h3>
            <p className="text-[13px] leading-[1.6] text-[rgba(239,231,216,0.62)] m-0">
              {t(s.descKey)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
