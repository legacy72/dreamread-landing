"use client";

import { useLanguage } from "@/lib/LanguageContext";
import Reveal from "./Reveal";

const PHASES = [
  { key: "pulse.awake", bpm: "62" },
  { key: "pulse.drifting", bpm: "55" },
  { key: "pulse.asleep", bpm: "—" },
];

/**
 * The signature graphic: a heart-rate line that beats, slows, and flattens as
 * the listener falls asleep, ending in a "paused" marker. It plays once when
 * scrolled into view (see `.pulse-once` in globals.css) and rests after.
 */
export default function SleepPulse() {
  const { t } = useLanguage();

  return (
    <Reveal className="pulse-once relative rounded-[12px] border border-[rgba(239,231,216,0.1)] bg-[#1d1e25] overflow-hidden">
      {/* warm wash that deepens toward the "asleep" end of the line */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(201,122,74,0.08) 0%, transparent 38%, transparent 64%, rgba(21,22,27,0.6) 100%)",
        }}
        aria-hidden
      />

      <div className="relative px-6 md:px-10 pt-7 pb-6">
        <div className="meta-mono text-[rgba(239,231,216,0.42)] mb-5">
          {t("pulse.eyebrow")}
        </div>

        <div className="relative">
          <svg
            viewBox="0 0 800 150"
            className="w-full h-[110px] md:h-[140px]"
            fill="none"
            preserveAspectRatio="none"
            role="img"
            aria-label={t("pulse.caption")}
          >
            <line
              x1="0"
              y1="80"
              x2="800"
              y2="80"
              stroke="rgba(239,231,216,0.1)"
              strokeWidth="1"
              strokeDasharray="2 5"
              vectorEffect="non-scaling-stroke"
            />
            <path
              d="M0 80 H40 l10 -48 l12 80 l10 -52 l8 20 H150 l10 -44 l12 72 l10 -46 l8 18 H270 l10 -28 l12 44 l10 -28 l8 12 H400 l8 -16 l10 24 l8 -16 l6 8 H520 q40 0 70 6 q40 8 80 3 q50 -3 130 -1 H800"
              stroke="#c97a4a"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              vectorEffect="non-scaling-stroke"
              pathLength={1000}
              className="pulse-draw-once"
            />
          </svg>

          {/* paused marker, fades in after the line settles */}
          <div
            className="pulse-paused absolute right-2 md:right-4 top-1 flex items-center gap-2.5 chip-glass px-3.5 py-2.5"
            style={{ backdropFilter: "blur(18px)", WebkitBackdropFilter: "blur(18px)" }}
          >
            <svg
              className="w-3.5 h-3.5 text-[#c97a4a]"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden
            >
              <rect x="6" y="5" width="4" height="14" rx="1.5" />
              <rect x="14" y="5" width="4" height="14" rx="1.5" />
            </svg>
            <div className="leading-tight">
              <div className="font-display text-[14px] text-[#efe7d8]">
                {t("pulse.paused.title")}
              </div>
              <div className="text-[11px] text-[rgba(239,231,216,0.62)]">
                {t("pulse.paused.desc")}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 mt-3 border-t border-[rgba(239,231,216,0.1)] pt-3">
          {PHASES.map((p, i) => (
            <div
              key={p.key}
              className={i === 2 ? "text-right" : i === 1 ? "text-center" : ""}
            >
              <div className="meta-mono text-[rgba(239,231,216,0.42)]">
                {t(p.key)}
              </div>
              <div className="font-mono text-[12px] text-[rgba(239,231,216,0.62)] mt-1 tnum">
                {p.bpm}
                {p.bpm !== "—" && (
                  <span className="text-[rgba(239,231,216,0.42)]"> bpm</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
