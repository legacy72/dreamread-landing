"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function SocialProof() {
  const { t } = useLanguage();

  const reviews = [
    { textKey: "social.review1.text", authorKey: "social.review1.author", detailKey: "social.review1.detail" },
    { textKey: "social.review2.text", authorKey: "social.review2.author", detailKey: "social.review2.detail" },
    { textKey: "social.review3.text", authorKey: "social.review3.author", detailKey: "social.review3.detail" },
  ];

  return (
    <section className="py-16 px-6">
      <div className="section-divider mb-12" />
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          {/* Star rating */}
          <div className="flex items-center justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-6 h-6 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="ml-2 text-text font-semibold text-lg">{t("social.rating")}</span>
          </div>
          <p className="text-text-tertiary text-sm">{t("social.ratingLabel")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="glass p-6 transition-all duration-300 glass-hover"
            >
              {/* Quote */}
              <p className="text-text-secondary text-sm leading-relaxed mb-5" style={{ fontStyle: "oblique 6deg" }}>
                &ldquo;{t(review.textKey)}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-accent/15 border border-accent/20 flex items-center justify-center text-accent font-semibold text-sm">
                  {t(review.authorKey).charAt(0)}
                </div>
                <div>
                  <p className="text-text text-sm font-medium">{t(review.authorKey)}</p>
                  <p className="text-text-tertiary text-xs">{t(review.detailKey)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
