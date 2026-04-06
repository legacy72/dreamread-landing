"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="fixed top-5 right-5 z-50 flex rounded-full bg-surface backdrop-blur-xl border border-border overflow-hidden">
      <button
        onClick={() => setLang("en")}
        className={`px-3 py-1.5 text-xs font-medium transition-all duration-200 ${
          lang === "en"
            ? "bg-accent text-white"
            : "text-text-tertiary hover:text-text-secondary"
        }`}
        aria-label="English"
      >
        EN
      </button>
      <button
        onClick={() => setLang("ru")}
        className={`px-3 py-1.5 text-xs font-medium transition-all duration-200 ${
          lang === "ru"
            ? "bg-accent text-white"
            : "text-text-tertiary hover:text-text-secondary"
        }`}
        aria-label="Русский"
      >
        RU
      </button>
    </div>
  );
}
