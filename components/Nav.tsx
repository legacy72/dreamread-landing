"use client";

import { useLanguage } from "@/lib/LanguageContext";
import AppStoreButton from "./AppStoreButton";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Nav() {
  const { t } = useLanguage();

  return (
    <nav className="sticky top-0 z-40 flex items-center justify-between gap-4 px-6 md:px-14 py-5 md:py-6 border-b border-[rgba(239,231,216,0.08)] bg-[rgba(21,22,27,0.72)] backdrop-blur-md supports-[backdrop-filter]:bg-[rgba(21,22,27,0.62)]">
      <a
        href="#top"
        className="flex items-center text-[#efe7d8] no-underline shrink-0"
      >
        <img
          src="/icon-192x192.png"
          alt="D"
          width={34}
          height={34}
          className="block w-[34px] h-[34px] rounded-[22%] -my-1"
        />
        <span className="font-display text-[20px] font-medium tracking-[-0.3px] leading-none -ml-[7px]">
          reamRead
        </span>
      </a>

      <div className="hidden md:flex gap-8 text-[12px] font-semibold tracking-[1.8px] uppercase text-[rgba(239,231,216,0.62)]">
        <a href="#features" className="hover:text-[#efe7d8] transition-colors">
          {t("nav.library")}
        </a>
        <a href="#how" className="hover:text-[#efe7d8] transition-colors">
          {t("nav.how")}
        </a>
        <a href="#pricing" className="hover:text-[#efe7d8] transition-colors">
          {t("nav.pricing")}
        </a>
        <a href="#faq" className="hover:text-[#efe7d8] transition-colors">
          {t("nav.faq")}
        </a>
        <a href="#cta" className="hover:text-[#efe7d8] transition-colors">
          {t("nav.download")}
        </a>
      </div>

      <div className="flex items-center gap-2 sm:gap-3 shrink-0">
        <LanguageSwitcher />
        <AppStoreButton
          label={t("nav.openapp")}
          labelClassName="hidden sm:inline"
          className="!px-3 sm:!px-[18px] !py-[10px] !text-[12px]"
          analyticsSource="nav"
        />
      </div>
    </nav>
  );
}
