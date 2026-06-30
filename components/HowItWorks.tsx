"use client";

import { useLanguage } from "@/lib/LanguageContext";
import SleepPulse from "./SleepPulse";
import Reveal from "./Reveal";

interface Step {
  k: string;
  titleKey: string;
  descKey: string;
  outcome?: boolean;
}

const STEPS: Step[] = [
  { k: "01", titleKey: "how.step1.title", descKey: "how.step1.desc" },
  { k: "02", titleKey: "how.step2.title", descKey: "how.step2.desc" },
  { k: "03", titleKey: "how.step3.title", descKey: "how.step3.desc" },
  { k: "04", titleKey: "how.step4.title", descKey: "how.step4.desc", outcome: true },
];

export default function HowItWorks() {
  const { t } = useLanguage();

  return (
    <section
      id="how"
      className="px-6 md:px-14 py-20 md:py-24 border-t border-[rgba(239,231,216,0.08)] max-w-[1400px] mx-auto"
    >
      <h2 className="font-display text-[36px] md:text-[56px] font-normal tracking-[-1.6px] leading-[1] m-0 mb-10 max-w-[780px]">
        {t("how.h2.a")}
        <br />
        {t("how.h2.b")}
        <em className="italic text-[#c97a4a]">{t("how.h2.c")}</em>
      </h2>

      <SleepPulse />
      <p className="mt-4 mb-14 text-[14px] leading-[1.6] text-[rgba(239,231,216,0.62)] max-w-[560px]">
        {t("pulse.caption")}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {STEPS.map((s, i) => (
          <Reveal
            key={s.k}
            delayMs={i * 80}
            className="bg-[#1d1e25] border border-[rgba(239,231,216,0.08)] rounded-[8px] p-8"
          >
            <div className="flex h-[48px] items-center">
              {s.outcome ? (
                <span
                  className="relative flex h-3 w-3 items-center justify-center"
                  aria-hidden
                >
                  <span className="absolute inline-flex h-full w-full rounded-full bg-[#c97a4a] opacity-30" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#c97a4a]" />
                </span>
              ) : (
                <span className="font-display text-[48px] font-normal leading-[1] text-[#c97a4a]">
                  {s.k}
                </span>
              )}
            </div>
            <h3 className="font-display text-[22px] font-medium tracking-[-0.3px] m-0 mt-3.5 mb-2 text-[#efe7d8]">
              {t(s.titleKey)}
            </h3>
            <p className="text-[13px] leading-[1.6] text-[rgba(239,231,216,0.62)] m-0">
              {t(s.descKey)}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
