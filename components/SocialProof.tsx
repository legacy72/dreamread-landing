"use client";

import { useLanguage } from "@/lib/LanguageContext";
import Reveal from "./Reveal";

interface Review {
  srcKey: string;
  textKey: string;
  authorKey: string;
  detailKey: string;
}

const REVIEWS: Review[] = [
  {
    srcKey: "social.review1.src",
    textKey: "social.review1.text",
    authorKey: "social.review1.author",
    detailKey: "social.review1.detail",
  },
  {
    srcKey: "social.review2.src",
    textKey: "social.review2.text",
    authorKey: "social.review2.author",
    detailKey: "social.review2.detail",
  },
  {
    srcKey: "social.review3.src",
    textKey: "social.review3.text",
    authorKey: "social.review3.author",
    detailKey: "social.review3.detail",
  },
];

const STATS = [
  { n: "stat.1.n", l: "stat.1.l" },
  { n: "stat.2.n", l: "stat.2.l" },
  { n: "stat.3.n", l: "stat.3.l" },
  { n: "stat.4.n", l: "stat.4.l" },
];

export default function SocialProof() {
  const { t } = useLanguage();

  return (
    <section
      className="px-6 md:px-14 py-24 border-t border-[rgba(239,231,216,0.08)] max-w-[1400px] mx-auto"
      style={{ background: "rgba(232,223,204,0.015)" }}
    >
      <div className="flex justify-between items-baseline pb-6 mb-14 border-b border-[rgba(239,231,216,0.16)] gap-4 flex-wrap">
        <h2 className="font-display text-[32px] md:text-[40px] font-normal tracking-[-1.2px] leading-[1] m-0">
          {t("social.h2.a")}
          <em className="italic text-[#c97a4a]">{t("social.h2.b")}</em>
        </h2>
        <div className="meta-mono text-[rgba(239,231,216,0.42)]">
          {t("social.meta")}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
        {REVIEWS.map((r, i) => (
          <Reveal key={i} delayMs={i * 90} className="border-t border-[#efe7d8] pt-5">
            <div
              className="meta-mono text-[rgba(239,231,216,0.42)] mb-4"
              style={{ letterSpacing: "2.2px" }}
            >
              {t(r.srcKey)}
            </div>
            <blockquote className="font-display italic text-[20px] md:text-[22px] font-normal leading-[1.35] m-0 mb-5 text-[#efe7d8] tracking-[-0.2px]">
              &ldquo;{t(r.textKey)}&rdquo;
            </blockquote>
            <div className="text-[11px] text-[rgba(239,231,216,0.62)]">
              <strong className="text-[#efe7d8] font-semibold">
                {t(r.authorKey)}
              </strong>{" "}
              · {t(r.detailKey)}
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-16 grid grid-cols-2 md:grid-cols-4 border-t border-b border-[rgba(239,231,216,0.16)]">
        {STATS.map((s, i) => (
          <div
            key={i}
            className="py-7 px-4 text-center"
            style={{
              borderRight:
                i === STATS.length - 1
                  ? "none"
                  : "0.5px solid rgba(239,231,216,0.16)",
            }}
          >
            <div className="font-display text-[40px] md:text-[48px] font-normal tracking-[-1.4px] leading-[1] text-[#c97a4a] tnum">
              {t(s.n)}
            </div>
            <div className="meta-mono text-[rgba(239,231,216,0.42)] mt-2">
              {t(s.l)}
            </div>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
