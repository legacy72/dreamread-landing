"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 px-6">
      <div className="section-divider mb-8" />
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-5">
          <p className="text-text-tertiary text-xs">
            &copy; {currentYear} DreamRead. {t("footer.rights")}
          </p>

          <div className="flex flex-wrap justify-center gap-5 text-xs">
            <Link
              href="/privacy"
              className="text-text-tertiary hover:text-accent transition-colors duration-200"
            >
              {t("footer.privacy")}
            </Link>
            <Link
              href="/terms"
              className="text-text-tertiary hover:text-accent transition-colors duration-200"
            >
              {t("footer.terms")}
            </Link>
            <Link
              href="/support"
              className="text-text-tertiary hover:text-accent transition-colors duration-200"
            >
              {t("footer.support")}
            </Link>
          </div>

          <a
            href="mailto:support@dreamread.app"
            className="text-text-tertiary hover:text-accent transition-colors duration-200 text-xs"
          >
            support@dreamread.app
          </a>
        </div>
      </div>
    </footer>
  );
}
