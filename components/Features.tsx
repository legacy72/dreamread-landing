"use client";

import { useLanguage } from "@/lib/LanguageContext";

interface Feature {
  num: string;
  titleKey: string;
  descKey: string;
}

const FEATURES: Feature[] = [
  { num: "I.", titleKey: "features.sleep.title", descKey: "features.sleep.desc" },
  { num: "II.", titleKey: "features.resume.title", descKey: "features.resume.desc" },
  { num: "III.", titleKey: "features.catalog.title", descKey: "features.catalog.desc" },
  { num: "IV.", titleKey: "features.controls.title", descKey: "features.controls.desc" },
  { num: "V.", titleKey: "features.formats.title", descKey: "features.formats.desc" },
  { num: "VI.", titleKey: "features.nofeed.title", descKey: "features.nofeed.desc" },
];

export default function Features() {
  const { t } = useLanguage();

  return (
    <section
      id="features"
      className="px-6 md:px-14 py-20 md:py-24 border-t border-[rgba(239,231,216,0.08)] max-w-[1400px] mx-auto"
    >
      <h2 className="font-display text-[36px] md:text-[56px] font-normal tracking-[-1.6px] leading-[1] m-0 mb-14 max-w-[780px]">
        {t("features.h2.a")}
        <br />
        {t("features.h2.b")}
        <em className="italic text-[#c97a4a]">{t("features.h2.c")}</em>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-[rgba(239,231,216,0.16)]">
        {FEATURES.map((f, i) => (
          <div
            key={f.num}
            className="px-7 py-9 border-b border-[rgba(239,231,216,0.16)]"
            style={{
              borderRight:
                (i + 1) % 3 === 0
                  ? "none"
                  : "0.5px solid rgba(239,231,216,0.16)",
            }}
          >
            <div className="meta-mono text-[rgba(239,231,216,0.42)] mb-4">
              {f.num}
            </div>
            <h3 className="font-display text-[22px] font-medium tracking-[-0.3px] m-0 mb-2.5 text-[#efe7d8]">
              {t(f.titleKey)}
            </h3>
            <p className="text-[13px] leading-[1.6] text-[rgba(239,231,216,0.62)] m-0">
              {t(f.descKey)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
