"use client";

import { useLanguage } from "@/lib/LanguageContext";

interface LanguageSwitcherProps {
  /**
   * Layout variant:
   *  - "inline" (default): renders inside a flex container (e.g. Nav).
   *  - "floating": renders as a fixed pill in the top-right corner of the viewport — use on pages without a full Nav.
   */
  variant?: "inline" | "floating";
  className?: string;
}

export default function LanguageSwitcher({
  variant = "inline",
  className,
}: LanguageSwitcherProps) {
  const { lang, setLang } = useLanguage();

  const wrapperBase =
    "inline-flex items-center gap-1 rounded-full border border-[rgba(239,231,216,0.18)] bg-[rgba(21,22,27,0.7)] backdrop-blur px-1 py-1 text-[11px] font-semibold tracking-[0.2em] uppercase";
  const wrapperVariant =
    variant === "floating"
      ? "fixed top-5 right-5 z-50"
      : "";

  const buttonBase =
    "px-2.5 py-1 rounded-full transition-colors leading-none";
  const active = "bg-[#c97a4a] text-[#15161b]";
  const inactive =
    "text-[rgba(239,231,216,0.72)] hover:text-[#efe7d8]";

  return (
    <div
      className={`${wrapperBase} ${wrapperVariant} ${className ?? ""}`.trim()}
      role="group"
      aria-label="Language"
    >
      <button
        type="button"
        onClick={() => setLang("en")}
        className={`${buttonBase} ${lang === "en" ? active : inactive}`}
        aria-label="English"
        aria-pressed={lang === "en"}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLang("ru")}
        className={`${buttonBase} ${lang === "ru" ? active : inactive}`}
        aria-label="Русский"
        aria-pressed={lang === "ru"}
      >
        RU
      </button>
    </div>
  );
}
