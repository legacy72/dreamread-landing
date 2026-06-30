"use client";

import { useLanguage } from "@/lib/LanguageContext";

interface PhoneMockupProps {
  className?: string;
}

/**
 * Frames the real app screenshot inside a CSS iPhone shell. The screenshot
 * follows the active language so RU visitors see the localised library.
 */
export default function PhoneMockup({ className }: PhoneMockupProps) {
  const { lang, t } = useLanguage();
  const src =
    lang === "ru" ? "/app-screenshot-ru.png" : "/app-screenshot-en.png";

  return (
    <div className={`device-frame ${className ?? ""}`.trim()}>
      <div className="device-island" aria-hidden />
      <div className="device-screen">
        <img src={src} alt={t("hero.screenshot.alt")} width={1320} height={2868} />
      </div>
    </div>
  );
}
