"use client";

import { useLanguage } from "@/lib/LanguageContext";

interface PulseChipProps {
  className?: string;
}

/**
 * A small "live" heart-rate readout that floats over the phone mockup. It is
 * the visual proof of the core mechanic: DreamRead reads your Apple Watch
 * pulse. The ECG line redraws on a calm loop; reduced-motion shows it static.
 */
export default function PulseChip({ className }: PulseChipProps) {
  const { t } = useLanguage();

  return (
    <div
      className={`chip-glass px-4 py-3 w-[188px] ${className ?? ""}`.trim()}
      style={{ backdropFilter: "blur(18px)", WebkitBackdropFilter: "blur(18px)" }}
      role="img"
      aria-label={t("pulse.chip.aria")}
    >
      <div className="flex items-center gap-2 mb-2">
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full rounded-full bg-[#c97a4a] opacity-60" />
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#c97a4a]" />
        </span>
        <span className="meta-mono text-[rgba(239,231,216,0.62)]">
          {t("pulse.tag")}
        </span>
      </div>

      <svg
        viewBox="0 0 188 38"
        className="w-full h-[34px]"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M0 19 H44 l5 -13 l7 26 l6 -19 l5 6 H94 l5 -13 l7 26 l6 -19 l5 6 H188"
          stroke="#c97a4a"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          pathLength={1000}
          className="pulse-path"
        />
      </svg>

      <div className="flex items-baseline justify-between mt-1.5">
        <div className="flex items-baseline gap-1">
          <span className="font-display text-[26px] leading-none text-[#efe7d8] tnum">
            62
          </span>
          <span className="meta-mono text-[rgba(239,231,216,0.42)]">
            {t("pulse.bpm")}
          </span>
        </div>
        <span className="meta-mono text-[#c97a4a]">{t("pulse.monitoring")}</span>
      </div>
    </div>
  );
}
