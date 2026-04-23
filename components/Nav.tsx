"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { useAppStoreClick } from "@/lib/useAnalytics";
import LanguageSwitcher from "./LanguageSwitcher";

const APP_STORE_URL =
  "https://apps.apple.com/app/dreamread-audiobook-player/id6761422972?ct=landing_organic&mt=8";

export default function Nav() {
  const { t } = useLanguage();
  const handleAppStoreClick = useAppStoreClick();

  return (
    <nav className="flex items-center justify-between gap-4 px-6 md:px-14 py-6 md:py-7 border-b border-[rgba(239,231,216,0.08)]">
      <a href="#top" className="flex items-center text-[#efe7d8] no-underline">
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
        <a href="#cta" className="hover:text-[#efe7d8] transition-colors">
          {t("nav.download")}
        </a>
      </div>

      <div className="flex items-center gap-3">
        <LanguageSwitcher />
        <a
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleAppStoreClick}
          className="btn-primary"
          style={{ padding: "10px 18px", fontSize: 12 }}
          aria-label={t("nav.openapp")}
        >
          {t("nav.openapp")}
        </a>
      </div>
    </nav>
  );
}
