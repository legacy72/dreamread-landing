"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="px-6 md:px-14 pt-10 pb-6 border-t border-[rgba(239,231,216,0.08)]">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] font-semibold tracking-[1.6px] uppercase text-[rgba(239,231,216,0.42)]">
        <span>{t("footer.left")}</span>

        <div className="flex flex-wrap justify-center gap-5">
          <Link
            href="/privacy"
            className="hover:text-[#c97a4a] transition-colors"
          >
            {t("footer.privacy")}
          </Link>
          <Link
            href="/terms"
            className="hover:text-[#c97a4a] transition-colors"
          >
            {t("footer.terms")}
          </Link>
          <Link
            href="/support"
            className="hover:text-[#c97a4a] transition-colors"
          >
            {t("footer.support")}
          </Link>
        </div>

        <a
          href="mailto:support@dreamread.app"
          className="normal-case tracking-normal hover:text-[#c97a4a] transition-colors"
          style={{ letterSpacing: 0, textTransform: "none" }}
        >
          support@dreamread.app
        </a>
      </div>
    </footer>
  );
}
