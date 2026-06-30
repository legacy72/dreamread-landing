"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";

interface QA {
  k: string;
  qKey: string;
  aKey: string;
}

const QUESTIONS: QA[] = [
  { k: "01", qKey: "faq.q1", aKey: "faq.a1" },
  { k: "02", qKey: "faq.q2", aKey: "faq.a2" },
  { k: "03", qKey: "faq.q3", aKey: "faq.a3" },
  { k: "04", qKey: "faq.q4", aKey: "faq.a4" },
  { k: "05", qKey: "faq.q5", aKey: "faq.a5" },
  { k: "06", qKey: "faq.q6", aKey: "faq.a6" },
];

export default function FAQ() {
  const { t } = useLanguage();
  const [openId, setOpenId] = useState<string | null>("01");

  return (
    <section
      id="faq"
      className="px-6 md:px-14 py-20 md:py-24 border-t border-[rgba(239,231,216,0.08)] max-w-[1400px] mx-auto"
    >
      <div className="meta-mono text-[rgba(239,231,216,0.42)] mb-3">
        {t("faq.eyebrow")}
      </div>
      <h2 className="font-display text-[36px] md:text-[56px] font-normal tracking-[-1.6px] leading-[1] m-0 mb-6 max-w-[780px]">
        {t("faq.title.a")}
        <br />
        <em className="italic text-[#c97a4a]">{t("faq.title.b")}</em>
      </h2>
      <p className="text-[15px] leading-[1.6] text-[rgba(239,231,216,0.62)] m-0 mb-12 max-w-[640px]">
        {t("faq.subtitle")}
      </p>

      <div className="border-t border-[rgba(239,231,216,0.16)] max-w-[860px]">
        {QUESTIONS.map((qa) => {
          const isOpen = openId === qa.k;
          return (
            <div
              key={qa.k}
              className="border-b border-[rgba(239,231,216,0.16)]"
            >
              <button
                type="button"
                onClick={() => setOpenId(isOpen ? null : qa.k)}
                aria-expanded={isOpen}
                className="w-full flex items-start gap-5 py-6 text-left cursor-pointer transition-colors hover:bg-[rgba(239,231,216,0.02)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#c97a4a] focus-visible:outline-offset-[-2px]"
              >
                <span className="meta-mono text-[rgba(239,231,216,0.42)] mt-1 shrink-0">
                  {qa.k}
                </span>
                <span className="font-display text-[18px] md:text-[20px] font-medium tracking-[-0.2px] text-[#efe7d8] flex-1">
                  {t(qa.qKey)}
                </span>
                <span
                  className="text-[#c97a4a] text-[20px] leading-none mt-1 shrink-0 transition-transform"
                  style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0)" }}
                  aria-hidden
                >
                  +
                </span>
              </button>
              <div
                className="grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none"
                style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
              >
                <div className="overflow-hidden">
                  <p className="pb-7 pl-[60px] pr-6 text-[14px] leading-[1.7] text-[rgba(239,231,216,0.72)] m-0">
                    {t(qa.aKey)}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-12 max-w-[860px] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-6 py-5 bg-[#1d1e25] border border-[rgba(239,231,216,0.08)] rounded-[8px]">
        <span className="text-[13px] text-[rgba(239,231,216,0.62)]">
          {t("faq.contact.label")}
        </span>
        <a
          href="mailto:support@dreamread.app"
          className="text-[14px] font-medium text-[#c97a4a] hover:text-[#efe7d8] transition-colors"
        >
          {t("faq.contact.cta")} →
        </a>
      </div>
    </section>
  );
}
