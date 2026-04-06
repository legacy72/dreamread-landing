"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-accent/60 text-sm">
              © {currentYear} DreamRead. {t("footer.rights")}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link
              href="/privacy"
              className="text-accent/80 hover:text-accent-blue transition-colors duration-200"
            >
              {t("footer.privacy")}
            </Link>
            <span className="text-accent/40">|</span>
            <Link
              href="/terms"
              className="text-accent/80 hover:text-accent-blue transition-colors duration-200"
            >
              {t("footer.terms")}
            </Link>
            <span className="text-accent/40">|</span>
            <Link
              href="/support"
              className="text-accent/80 hover:text-accent-blue transition-colors duration-200"
            >
              {t("footer.support")}
            </Link>
          </div>

          <div className="text-center md:text-right">
            <a
              href="mailto:hoperoina2016@gmail.com"
              className="text-accent/80 hover:text-accent-blue transition-colors duration-200 text-sm"
            >
              hoperoina2016@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
