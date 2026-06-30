"use client";

import { useLanguage } from "@/lib/LanguageContext";
import Reveal from "./Reveal";

interface Feature {
  num: string;
  icon: React.ReactNode;
  titleKey: string;
  descKey: string;
}

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const FEATURES: Feature[] = [
  {
    num: "I.",
    titleKey: "features.sleep.title",
    descKey: "features.sleep.desc",
    icon: (
      <path d="M21 12.8A8.5 8.5 0 1 1 11.2 3 6.6 6.6 0 0 0 21 12.8z" {...stroke} />
    ),
  },
  {
    num: "II.",
    titleKey: "features.resume.title",
    descKey: "features.resume.desc",
    icon: <path d="M6 4h12v16l-6-4-6 4z" {...stroke} />,
  },
  {
    num: "III.",
    titleKey: "features.catalog.title",
    descKey: "features.catalog.desc",
    icon: (
      <g {...stroke}>
        <path d="M12 6c-2-1.4-4.6-1.4-7 0v12c2.4-1.4 5-1.4 7 0" />
        <path d="M12 6c2-1.4 4.6-1.4 7 0v12c-2.4-1.4-5-1.4-7 0z" />
      </g>
    ),
  },
  {
    num: "IV.",
    titleKey: "features.controls.title",
    descKey: "features.controls.desc",
    icon: (
      <g {...stroke}>
        <line x1="4" y1="8" x2="20" y2="8" />
        <line x1="4" y1="16" x2="20" y2="16" />
        <circle cx="9" cy="8" r="2.3" />
        <circle cx="15" cy="16" r="2.3" />
      </g>
    ),
  },
  {
    num: "V.",
    titleKey: "features.formats.title",
    descKey: "features.formats.desc",
    icon: (
      <g {...stroke}>
        <line x1="5" y1="10" x2="5" y2="14" />
        <line x1="9.5" y1="7" x2="9.5" y2="17" />
        <line x1="14" y1="4" x2="14" y2="20" />
        <line x1="18.5" y1="9" x2="18.5" y2="15" />
      </g>
    ),
  },
  {
    num: "VI.",
    titleKey: "features.nofeed.title",
    descKey: "features.nofeed.desc",
    icon: (
      <g {...stroke}>
        <path d="M12 3l7 3v5c0 4.2-2.9 7.4-7 8.6-4.1-1.2-7-4.4-7-8.6V6z" />
        <path d="M9.2 12l2 2 3.6-4" />
      </g>
    ),
  },
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

      <Reveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-[rgba(239,231,216,0.16)]">
        {FEATURES.map((f, i) => (
          <div
            key={f.num}
            className="px-7 py-9 border-b border-[rgba(239,231,216,0.16)] transition-colors hover:bg-[rgba(239,231,216,0.02)]"
            style={{
              borderRight:
                (i + 1) % 3 === 0
                  ? "none"
                  : "0.5px solid rgba(239,231,216,0.16)",
            }}
          >
            <div className="flex items-center justify-between mb-5">
              <svg
                viewBox="0 0 24 24"
                className="w-6 h-6 text-[#c97a4a]"
                aria-hidden="true"
              >
                {f.icon}
              </svg>
              <span className="meta-mono text-[rgba(239,231,216,0.42)]">
                {f.num}
              </span>
            </div>
            <h3 className="font-display text-[22px] font-medium tracking-[-0.3px] m-0 mb-2.5 text-[#efe7d8]">
              {t(f.titleKey)}
            </h3>
            <p className="text-[13px] leading-[1.6] text-[rgba(239,231,216,0.62)] m-0">
              {t(f.descKey)}
            </p>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
