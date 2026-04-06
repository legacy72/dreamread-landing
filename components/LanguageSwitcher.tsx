"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="fixed top-4 right-4 z-50 flex rounded-full bg-white/10 backdrop-blur-sm border border-white/20 overflow-hidden">
      <button
        onClick={() => setLang("en")}
        className={`px-3 py-1.5 text-sm font-medium transition-all duration-200 ${
          lang === "en"
            ? "bg-accent-blue text-white"
            : "text-white/60 hover:text-white hover:bg-white/10"
        }`}
        aria-label="English"
      >
        EN
      </button>
      <button
        onClick={() => setLang("ru")}
        className={`px-3 py-1.5 text-sm font-medium transition-all duration-200 ${
          lang === "ru"
            ? "bg-accent-blue text-white"
            : "text-white/60 hover:text-white hover:bg-white/10"
        }`}
        aria-label="Русский"
      >
        RU
      </button>
    </div>
  );
}
