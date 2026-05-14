interface Translations {
  [key: string]: string;
}

interface AllTranslations {
  en: Translations;
  ru: Translations;
}

export type Lang = "en" | "ru";

export const translations: AllTranslations = {
  en: {
    // Nav
    "nav.library": "The library",
    "nav.how": "How it works",
    "nav.pricing": "Pricing",
    "nav.download": "Download",
    "nav.openapp": "Open the app",

    // Hero
    "hero.eyebrow": "— Est. 2026 · Bedtime audiobooks —",
    "hero.title.a": "Audiobooks",
    "hero.title.b": "that ",
    "hero.title.c": "pause when you do.",
    "hero.subtitle":
      "With Apple Watch, DreamRead follows your pulse and, over time, learns how you fall asleep — gently pauses when you drift, and opens tomorrow on the very sentence where sleep found you.",
    "hero.qualifier.primary": "Apple Watch required for sleep-pause",
    "hero.qualifier.secondary": "Manual playback works without it",
    "hero.primary": "Download for iPhone",
    "hero.ghost": "See the library",
    "hero.footnote": "Free · No account · 1,000+ public-domain titles",

    // Hero paper card
    "herocard.cap.left": "Chapter VI · p. 58",
    "herocard.cap.right": "— Pride and Prejudice —",
    "herocard.quote":
      "In a very few minutes she was joined by Bingley, whose confidence in her judgement more than justified Jane's…",
    "herocard.meta.left": "· 62 bpm · monitoring ·",
    "herocard.meta.right": "− 37:46",
    "herocard.stamp": "No. I",

    // Features section
    "features.h2.a": "A quieter kind",
    "features.h2.b": "of ",
    "features.h2.c": "bedtime ritual.",
    "features.sleep.title": "Sleep-pause",
    "features.sleep.desc":
      "Your Apple Watch sends heart rate and HRV. You pick when to pause — from a light doze to deep sleep — and DreamRead tunes itself to your own falling-asleep rhythm over time. When you drift, the voice gently pauses, and your place is held until morning.",
    "features.resume.title": "Resumption",
    "features.resume.desc":
      "Open the app tomorrow and you're right back on the sentence where you fell asleep. Your place saves every few seconds — nothing is ever lost.",
    "features.catalog.title": "Classics, beautifully narrated",
    "features.catalog.desc":
      "Over a thousand public-domain titles from LibriVox, read by narrators chosen for their calm pacing and warm timbre. Search by author, browse by section, or just open whatever sits on the front shelf.",
    "features.controls.title": "A listener's tools",
    "features.controls.desc":
      "Speed, chapters, bookmarks, sleep timer. Everything a serious listener wants — and nothing a sleepy listener needs to hunt for.",
    "features.formats.title": "Your own library",
    "features.formats.desc":
      "Import MP3, M4A, M4B, FLAC, and more. The books you already own, with chapter marks, bookmarks, and proper controls — a proper place for the library you already have.",
    "features.nofeed.title": "Private by design",
    "features.nofeed.desc":
      "No account, no servers, no trackers. Your library, your progress, your pulse — all of it stays on your device. Nothing is sold, nothing is pushed — DreamRead only pauses what you opened when sleep arrives.",

    // How it works
    "how.h2.a": "Three steps,",
    "how.h2.b": "one ",
    "how.h2.c": "quiet evening.",
    "how.step1.title": "Open to any page",
    "how.step1.desc":
      "Pick a book from the catalog or import your own. No account, no onboarding — the library is waiting.",
    "how.step2.title": "Put on your Watch (optional)",
    "how.step2.desc":
      "With Apple Watch, the app learns how you fall asleep. Without one, set a sleep timer — everything else works the same.",
    "how.step3.title": "Let the story begin",
    "how.step3.desc":
      "As you drift, the voice gently pauses. Your place is held until morning.",
    "how.step4.title": "Pick up where you left off",
    "how.step4.desc":
      "The app knows exactly where you left off — often mid-sentence, always mid-thought.",

    // Social proof
    "social.h2.a": "Built for ",
    "social.h2.b": "bedtime.",
    "social.meta": "— Quiet notes · no. 001–003 —",
    "social.review1.src": "Quiet note — 001",
    "social.review1.text":
      "Sleep Detection uses Apple Watch heart rate to pause playback when you drift off. No guessing with timers, no morning rewind ritual.",
    "social.review1.author": "Sleep Detection",
    "social.review1.detail": "Premium feature",
    "social.review2.src": "Quiet note — 002",
    "social.review2.text":
      "Bring your own audiobooks, or start with the built-in public-domain catalog. MP3, M4B, FLAC, bookmarks, chapters, sleep timer.",
    "social.review2.author": "Your library",
    "social.review2.detail": "Import + catalog",
    "social.review3.src": "Quiet note — 003",
    "social.review3.text":
      "The app stays intentionally quiet: no feed, no ads, no account. Just bedtime listening designed around not losing your place.",
    "social.review3.author": "Sleep-first listening",
    "social.review3.detail": "Bedtime controls",
    "stat.1.n": "1,000+",
    "stat.1.l": "Free classic titles",
    "stat.2.n": "3",
    "stat.2.l": "Apple devices",
    "stat.3.n": "9",
    "stat.3.l": "Audio formats",
    "stat.4.n": "0",
    "stat.4.l": "Ads, ever",

    // Pricing
    "pricing.h2.a": "Two ways to ",
    "pricing.h2.b": "press play.",
    "pricing.subtitle":
      "Manual bedtime listening is free. Premium adds Apple Watch sleep-pause, an unlimited library, and the full history of everything you've listened to.",
    "pricing.free.name": "The Library",
    "pricing.free.tag": "Free",
    "pricing.free.desc":
      "Everything needed to start listening before bed: public-domain classics, your own files, and calm playback controls.",
    "pricing.free.price": "$0",
    "pricing.free.per": "forever",
    "pricing.free.f1": "Up to 50 audiobooks",
    "pricing.free.f2": "Import your own MP3 / M4B / FLAC",
    "pricing.free.f3": "LibriVox public-domain catalog",
    "pricing.free.f4": "Sleep timer, bookmarks, chapters",
    "pricing.free.f5": "Playback speed control",
    "pricing.free.f6": "No account required",
    "pricing.free.cta": "Open the library",
    "pricing.free.note": "— No sign-up, no card, no ads —",
    "pricing.premium.name": "Premium",
    "pricing.premium.badge": "Recommended",
    "pricing.premium.desc":
      "Everything for the evening ritual. Watch companion, unlimited library, full listening history.",
    "pricing.premium.price.annual": "$39.99",
    "pricing.premium.per.annual": "per year",
    "pricing.premium.price.monthly": "$6.99",
    "pricing.premium.per.monthly": "per month",
    "pricing.premium.f1": "Everything in The Library",
    "pricing.premium.f2": "Apple Watch sleep-pause that learns how you fall asleep",
    "pricing.premium.f3": "Unlimited books, bookmarks, folders",
    "pricing.premium.f4": "Listening history without the 7-day cap",
    "pricing.premium.f5": "Sleep-quality summary for each session",
    "pricing.premium.f6": "Direct support from the developer",
    "pricing.premium.cta": "Begin 7-day trial",
    "pricing.premium.note.annual":
      "— Cancel anytime · $6.99/mo also available —",
    "pricing.premium.note.monthly":
      "— Cancel anytime · save ~52% on yearly —",
    "pricing.toggle.monthly": "Monthly",
    "pricing.toggle.annual": "Annual",

    // CTA
    "cta.h2.a": "Close your eyes.",
    "cta.h2.b": "We'll ",
    "cta.h2.c": "hold your place.",
    "cta.footnote": "· Apple Watch companion · iPhone · iPad ·",

    // AppStore
    "appstore.button": "Download on iPhone",

    // Footer
    "footer.left": "DreamRead · mmxxvi",
    "footer.rights": "All rights reserved.",
    "footer.privacy": "Privacy",
    "footer.terms": "Terms",
    "footer.support": "Press",

    // Support
    "support.title": "Support",
    "support.subtitle": "We're here to help you get the most out of DreamRead.",
    "support.back": "Back to Home",
    "support.contact.title": "Contact Us",
    "support.contact.desc":
      "Have a question, found a bug, or want to suggest a feature? Send us an email and we'll get back to you as soon as possible.",
    "support.faq.title": "Frequently Asked Questions",
    "support.faq.q1": "Does Sleep Detection require Apple Watch?",
    "support.faq.a1":
      "Yes, Sleep Detection uses heart rate data from Apple Watch. The audio player, library, and all other features work without Apple Watch.",
    "support.faq.q2": "What audio formats are supported?",
    "support.faq.a2":
      "DreamRead supports MP3, M4A, M4B, FLAC, WAV, AIFF, OGG, Opus, and AWB files.",
    "support.faq.q3": "How do I import audiobooks?",
    "support.faq.a3":
      "Tap the import button in the Library tab to open the Files app. You can import individual files or entire folders. DreamRead also includes a built-in catalog of free audiobooks via LibriVox.",
    "support.faq.q4": "Sleep Detection paused too early / didn't pause at all",
    "support.faq.a4":
      "You can adjust the sensitivity threshold in Settings → Sleep Detection. Try a lower percentage (e.g. 4%) if the app doesn't detect sleep, or a higher one (e.g. 15%) if it triggers too early.",
    "support.faq.q5": "My progress wasn't saved",
    "support.faq.a5":
      "DreamRead saves your position automatically every few seconds during playback. If progress was lost, make sure the app wasn't force-quit during playback.",
    "support.faq.q6": "What's included in Premium?",
    "support.faq.a6":
      "Premium unlocks Sleep Detection via Apple Watch, advanced playback controls, unlimited listening stats, sleep session quality info, and unlimited books, bookmarks, and folders. Plans: $6.99/month or $39.99/year with a 7-day free trial.",
    "support.faq.q7": "How do I cancel my subscription?",
    "support.faq.a7":
      "Open Settings on your iPhone → tap your Apple ID → Subscriptions → select DreamRead → Cancel Subscription. You'll keep access until the end of the current billing period.",
    "support.faq.q8": "How do I restore my purchase?",
    "support.faq.a8":
      "Open DreamRead → Settings → tap \"Restore Purchases\". This is useful if you reinstalled the app or switched devices.",
    "support.legal.title": "Privacy & Legal",

    // Privacy Policy
    "privacy.title": "Privacy Policy",
    "privacy.updated": "Last updated: April 27, 2026",
    "privacy.overview.title": "Overview",
    "privacy.overview.text":
      "DreamRead is designed with privacy in mind. We do not collect, transmit, or store your personal data on our servers. Your data stays on your device, except when you opt in to iCloud Backup — in which case it syncs to your own private iCloud account, not ours.",
    "privacy.health.title": "Health Data (HealthKit)",
    "privacy.health.intro":
      "DreamRead uses Apple HealthKit to read heart rate data from your Apple Watch for the Sleep Detection feature.",
    "privacy.health.1":
      "Heart rate data is processed entirely on your device in real time",
    "privacy.health.2":
      "Heart rate data is never stored, transmitted, or shared with any third party",
    "privacy.health.3":
      "Heart rate data is never used for advertising, marketing, or data broker purposes",
    "privacy.health.4":
      "Heart rate data is used solely to determine when to pause audio playback",
    "privacy.health.outro":
      "We do not use HealthKit data for any purpose other than providing Sleep Detection functionality within the app.",
    "privacy.content.title": "User Content",
    "privacy.content.1":
      "Audiobook files are stored locally on your device only",
    "privacy.content.2":
      "Playback progress and bookmarks are stored locally on your device",
    "privacy.content.3":
      "We have no access to your audiobook files or listening history",
    "privacy.icloud.title": "iCloud Sync (Optional)",
    "privacy.icloud.intro":
      "DreamRead offers an optional iCloud Backup feature for Premium subscribers. It is disabled by default and you can turn it off at any time.",
    "privacy.icloud.1":
      "When enabled, your library, bookmarks, chapters, folders, and audio files sync to your personal iCloud account via Apple CloudKit",
    "privacy.icloud.2":
      "Data is stored only in your private iCloud account; we have no access to it and it is governed by Apple's privacy policy",
    "privacy.icloud.3":
      "Sync only happens between devices signed in with the same Apple ID",
    "privacy.icloud.4":
      "You can choose to sync audio files over Wi-Fi only, so iCloud Backup never uses your mobile data",
    "privacy.icloud.5":
      "Disabling iCloud Backup or signing out of iCloud stops further syncing immediately",
    "privacy.nocollect.title": "Data We Do Not Collect",
    "privacy.nocollect.intro": "DreamRead does not collect:",
    "privacy.nocollect.1": "Personal identifiers (name, email, phone number)",
    "privacy.nocollect.2": "Location data",
    "privacy.nocollect.3":
      "Health or fitness data beyond real-time heart rate processing",
    "privacy.nocollect.4":
      "Personal identifiers in analytics — we use Firebase for anonymous crash diagnostics and product analytics (see Third-Party Services)",
    "privacy.purchases.title": "Purchases and Subscriptions",
    "privacy.purchases.intro":
      "DreamRead offers optional in-app subscriptions processed entirely by Apple through the App Store.",
    "privacy.purchases.1":
      "We do not collect, store, or have access to your payment information",
    "privacy.purchases.2": "All billing and transaction data is managed by Apple",
    "privacy.purchases.3":
      "We only receive a confirmation of your subscription status to unlock premium features",
    "privacy.thirdparty.title": "Third-Party Services",
    "privacy.thirdparty.healthkit":
      "Apple HealthKit - used to read heart rate data on-device only",
    "privacy.thirdparty.storekit":
      "Apple StoreKit - used to process in-app subscriptions; no payment data is shared with us",
    "privacy.thirdparty.cloudkit":
      "Apple CloudKit - used for optional iCloud Backup; data is stored in your private iCloud account and is not accessible by us",
    "privacy.thirdparty.firebase":
      "Google Firebase (Crashlytics + Analytics) - collects anonymous crash diagnostics and product usage data; no personal information is shared",
    "privacy.thirdparty.outro":
      "No advertising networks or other third-party SDKs are used in the mobile app.",

    "privacy.analytics.title": "Web Analytics (Landing Page)",
    "privacy.analytics.text":
      "Our landing page uses Google Analytics 4 to understand how visitors interact with the website. This helps us improve the user experience and optimize marketing campaigns.",
    "privacy.analytics.1":
      "Google Analytics collects anonymous usage data such as page views, clicks, and referral sources",
    "privacy.analytics.2":
      "We capture ad campaign parameters (gclid, gbraid, wbraid, utm_source, utm_campaign, utm_term) for attribution and conversion measurement",
    "privacy.analytics.3":
      "No personal information (name, email, payment data) is sent to Google Analytics",
    "privacy.analytics.4":
      "Data is subject to Google's Privacy Policy and is retained according to your Google account settings",
    "privacy.retention.title": "Data Retention",
    "privacy.retention.text":
      "Since all data is stored locally on your device, you can delete it at any time by removing the app from iOS Settings.",
    "privacy.children.title": "Children's Privacy",
    "privacy.children.text":
      "DreamRead is not intended for children under the age of 13. We do not knowingly collect any information from children under 13.",
    "privacy.changes.title": "Changes to This Policy",
    "privacy.changes.text":
      "We may update this Privacy Policy from time to time. Any changes will be reflected by updating the date at the top of this page.",
    "privacy.contact.title": "Contact",
    "privacy.contact.text":
      "For privacy-related questions, please contact us at",

    // Terms of Service
    "terms.title": "Terms of Service",
    "terms.updated": "Last updated: April 4, 2026",
    "terms.acceptance.title": "Acceptance of Terms",
    "terms.acceptance.text":
      "By downloading or using DreamRead, you agree to these Terms of Service. If you do not agree, please do not use the app.",
    "terms.eligibility.title": "Eligibility",
    "terms.eligibility.1": "You must be at least 13 years old to use DreamRead",
    "terms.eligibility.2":
      "You must have a compatible iPhone running iOS 16.0 or later",
    "terms.eligibility.3":
      "Apple Watch is required only for the Sleep Detection feature; all other features work without it",
    "terms.content.title": "User Content",
    "terms.content.1":
      "You retain full ownership of the audiobook files you import",
    "terms.content.2":
      "You are solely responsible for ensuring you have the legal right to use any files you import",
    "terms.content.3":
      "DreamRead does not provide, host, or distribute audiobook content",
    "terms.health.title": "Health Disclaimer",
    "terms.health.intro":
      "The Sleep Detection feature is provided for convenience only.",
    "terms.health.1":
      "DreamRead is not a medical device and is not intended for medical use",
    "terms.health.2":
      "Sleep detection accuracy may vary and should not be relied upon for health decisions",
    "terms.health.3":
      "Consult a qualified healthcare professional for any sleep-related health concerns",
    "terms.subscriptions.title": "Subscriptions and Payments",
    "terms.subscriptions.intro":
      "DreamRead offers optional auto-renewable subscriptions to unlock premium features such as Sleep Detection.",
    "terms.subscriptions.plans":
      "Plans: Premium Monthly ($6.99/month) and Premium Annual ($39.99/year)",
    "terms.subscriptions.trial":
      "Free Trial: The annual plan includes a 7-day free trial. If you do not cancel before the trial ends, your subscription will automatically convert to a paid subscription",
    "terms.subscriptions.billing":
      "Billing: Payment is charged to your Apple ID account at confirmation of purchase, or at the end of the free trial period",
    "terms.subscriptions.renewal":
      "Renewal: Subscriptions automatically renew unless canceled at least 24 hours before the end of the current billing period",
    "terms.subscriptions.cancel":
      "Cancellation: You can manage or cancel your subscription at any time through your Apple ID settings (Settings → Apple ID → Subscriptions)",
    "terms.subscriptions.refunds":
      "Refunds: Refund requests are handled by Apple in accordance with their refund policy",
    "terms.subscriptions.outro":
      "Prices may vary by region and are subject to change. Any price changes will take effect at the start of the next billing cycle.",
    "terms.prohibited.title": "Prohibited Use",
    "terms.prohibited.1":
      "You may not reverse engineer, decompile, or modify the app",
    "terms.prohibited.2": "You may not use the app for any unlawful purpose",
    "terms.prohibited.3":
      "You may not import or distribute copyrighted content without authorization",
    "terms.liability.title": "Limitation of Liability",
    "terms.liability.text":
      "DreamRead is provided \"as is\" without warranties of any kind, either express or implied. To the fullest extent permitted by law, we are not liable for any direct, indirect, incidental, or consequential damages arising from the use or inability to use the app.",
    "terms.law.title": "Governing Law",
    "terms.law.text":
      "These Terms are governed by and construed in accordance with applicable law. Any disputes will be resolved in the jurisdiction where the developer is located.",
    "terms.changes.title": "Changes to Terms",
    "terms.changes.text":
      "We may update these Terms from time to time. Continued use of the app after changes constitutes acceptance of the updated Terms. The date at the top of this page reflects when the Terms were last revised.",
    "terms.contact.title": "Contact",
    "terms.contact.text": "For questions about these Terms, please contact us at",
  },

  ru: {
    // Nav
    "nav.library": "Библиотека",
    "nav.how": "Как это работает",
    "nav.pricing": "Тарифы",
    "nav.download": "Скачать",
    "nav.openapp": "Открыть в App Store",

    // Hero
    "hero.eyebrow": "— С 2026 · Аудиокниги перед сном —",
    "hero.title.a": "Аудиокниги,",
    "hero.title.b": "которые ",
    "hero.title.c": "замолкают, когда вы засыпаете.",
    "hero.subtitle":
      "С Apple Watch DreamRead следит за пульсом и со временем запоминает ваш ритм засыпания — плавно ставит паузу, когда вы задремали, и утром открывается на той фразе, где вы заснули.",
    "hero.qualifier.primary": "Для паузы на засыпании нужны Apple Watch",
    "hero.qualifier.secondary": "Обычное прослушивание работает и без часов",
    "hero.primary": "Скачать на iPhone",
    "hero.ghost": "Открыть библиотеку",
    "hero.footnote": "Бесплатно · Без регистрации · 1000+ книг из классики",

    // Hero paper card
    "herocard.cap.left": "Глава VI · с. 58",
    "herocard.cap.right": "— Гордость и предубеждение —",
    "herocard.quote":
      "Через несколько минут к ней подошёл Бингли — его доверие к её суждениям более чем оправдало надежды Джейн…",
    "herocard.meta.left": "· 62 уд/мин · пульс ·",
    "herocard.meta.right": "− 37:46",
    "herocard.stamp": "№ I",

    // Features section
    "features.h2.a": "Тихий",
    "features.h2.b": "вечерний ",
    "features.h2.c": "ритуал.",
    "features.sleep.title": "Пауза на засыпании",
    "features.sleep.desc":
      "Apple Watch передают пульс и HRV. Вы сами задаёте момент паузы — от лёгкой дрёмы до глубокого сна, — а приложение со временем подстраивается под ваш ритм засыпания. Когда вы задремали, плеер плавно ставит паузу и сохраняет место до утра.",
    "features.resume.title": "Возвращение к тексту",
    "features.resume.desc":
      "Откройте приложение утром — и вы ровно на той фразе, где заснули. Позиция сохраняется каждые несколько секунд — ничего не потеряется.",
    "features.catalog.title": "Классика, озвученная с душой",
    "features.catalog.desc":
      "Больше тысячи книг из общественного достояния от LibriVox — в озвучке голосов с тёплым тембром и спокойной, размеренной подачей. Ищите по автору, листайте по разделам или просто откройте то, что стоит на главной.",
    "features.controls.title": "Инструменты слушателя",
    "features.controls.desc":
      "Скорость, главы, закладки, таймер сна. Всё, что нужно вдумчивому слушателю — и ничего лишнего для сонного.",
    "features.formats.title": "Ваша собственная полка",
    "features.formats.desc":
      "Импортируйте MP3, M4A, M4B, FLAC и другие форматы. Книги, которые уже у вас, — с главами, закладками и нормальным управлением. Настоящая полка для настоящей коллекции.",
    "features.nofeed.title": "Приватно по задумке",
    "features.nofeed.desc":
      "Без аккаунта, без серверов, без трекеров. Ваша библиотека, прогресс и пульс — всё остаётся на устройстве. Мы ничего не продаём и не подсовываем — DreamRead только ставит на паузу то, что вы включили, когда приходит сон.",

    // How it works
    "how.h2.a": "Три шага —",
    "how.h2.b": "и один ",
    "how.h2.c": "тихий вечер.",
    "how.step1.title": "Откройте книгу на любой странице",
    "how.step1.desc":
      "Выберите книгу из каталога — или загрузите свою. Без регистрации, без долгих настроек: библиотека уже ждёт.",
    "how.step2.title": "Наденьте Apple Watch — по желанию",
    "how.step2.desc":
      "С Apple Watch приложение запоминает ваш ритм засыпания. Без часов включите таймер сна — всё остальное работает точно так же.",
    "how.step3.title": "Пусть история начнётся",
    "how.step3.desc":
      "Вы задремлете — и голос стихнет. Место в книге сохранится до самого утра.",
    "how.step4.title": "Продолжите там, где остановились",
    "how.step4.desc":
      "Приложение точно знает, где вы остановились — часто на середине фразы, всегда на середине мысли.",

    // Social proof
    "social.h2.a": "Создано для ",
    "social.h2.b": "вечернего ритуала.",
    "social.meta": "— Тихие заметки · № 001–003 —",
    "social.review1.src": "Тихая заметка — 001",
    "social.review1.text":
      "Sleep Detection использует пульс с Apple Watch и ставит книгу на паузу, когда вы засыпаете. Без угадываний с таймером и без утренней перемотки.",
    "social.review1.author": "Sleep Detection",
    "social.review1.detail": "Premium-функция",
    "social.review2.src": "Тихая заметка — 002",
    "social.review2.text":
      "Можно слушать свои аудиокниги или начать с каталога общественного достояния. MP3, M4B, FLAC, закладки, главы и таймер сна уже внутри.",
    "social.review2.author": "Ваша библиотека",
    "social.review2.detail": "Импорт + каталог",
    "social.review3.src": "Тихая заметка — 003",
    "social.review3.text":
      "Приложение остаётся намеренно тихим: без ленты, без рекламы, без аккаунта. Только вечернее прослушивание вокруг главного: не потерять место, когда заснёте.",
    "social.review3.author": "Прослушивание перед сном",
    "social.review3.detail": "Вечерний контроль",
    "stat.1.n": "1000+",
    "stat.1.l": "Бесплатных классических книг",
    "stat.2.n": "3",
    "stat.2.l": "Устройства Apple",
    "stat.3.n": "9",
    "stat.3.l": "Аудиоформатов",
    "stat.4.n": "0",
    "stat.4.l": "Рекламы, навсегда",

    // Pricing
    "pricing.h2.a": "Два способа ",
    "pricing.h2.b": "нажать Play.",
    "pricing.subtitle":
      "Обычное прослушивание перед сном — бесплатно. Premium добавляет паузу при засыпании по Apple Watch, безлимитную библиотеку и полную историю прослушивания без ограничений.",
    "pricing.free.name": "Библиотека",
    "pricing.free.tag": "Бесплатно",
    "pricing.free.desc":
      "Всё, чтобы начать слушать перед сном: классика из общественного достояния, ваши файлы и спокойное управление без лишнего.",
    "pricing.free.price": "$0",
    "pricing.free.per": "навсегда",
    "pricing.free.f1": "До 50 аудиокниг",
    "pricing.free.f2": "Импорт своих MP3 / M4B / FLAC",
    "pricing.free.f3": "Каталог LibriVox (общественное достояние)",
    "pricing.free.f4": "Таймер сна, закладки, главы",
    "pricing.free.f5": "Настройка скорости воспроизведения",
    "pricing.free.f6": "Без регистрации",
    "pricing.free.cta": "Открыть библиотеку",
    "pricing.free.note":
      "— Без регистрации, без карты, без рекламы —",
    "pricing.premium.name": "Premium",
    "pricing.premium.badge": "Рекомендуем",
    "pricing.premium.desc":
      "Всё для вечернего ритуала. Пауза по Apple Watch, безлимитная библиотека, полная история прослушивания.",
    "pricing.premium.price.annual": "$39.99",
    "pricing.premium.per.annual": "в год",
    "pricing.premium.price.monthly": "$6.99",
    "pricing.premium.per.monthly": "в месяц",
    "pricing.premium.f1": "Всё из тарифа «Библиотека»",
    "pricing.premium.f2": "Пауза по Apple Watch — запоминает ваш ритм засыпания",
    "pricing.premium.f3": "Неограниченно книг, закладок и папок",
    "pricing.premium.f4": "История прослушивания без ограничения в 7 дней",
    "pricing.premium.f5": "Оценка качества сна для каждой сессии",
    "pricing.premium.f6": "Прямая связь с разработчиком",
    "pricing.premium.cta": "Попробовать 7 дней бесплатно",
    "pricing.premium.note.annual":
      "— Отмена в любой момент · также доступно $6.99/мес —",
    "pricing.premium.note.monthly":
      "— Отмена в любой момент · на годовой подписке экономия ~52% —",
    "pricing.toggle.monthly": "Месяц",
    "pricing.toggle.annual": "Год",

    // CTA
    "cta.h2.a": "Закройте глаза.",
    "cta.h2.b": "Мы ",
    "cta.h2.c": "сохраним место.",
    "cta.footnote": "· Apple Watch · iPhone · iPad ·",

    // AppStore
    "appstore.button": "Скачать на iPhone",

    // Footer
    "footer.left": "DreamRead · mmxxvi",
    "footer.rights": "Все права защищены.",
    "footer.privacy": "Конфиденциальность",
    "footer.terms": "Условия",
    "footer.support": "Поддержка",

    // Support
    "support.title": "Поддержка",
    "support.subtitle": "Помогаем вам разобраться с DreamRead.",
    "support.back": "На главную",
    "support.contact.title": "Связаться с нами",
    "support.contact.desc":
      "Нашли ошибку, есть вопрос или идея? Напишите нам — ответим как можно скорее.",
    "support.faq.title": "Частые вопросы",
    "support.faq.q1": "Нужны ли Apple Watch для определения сна?",
    "support.faq.a1":
      "Да. Определение сна использует пульс, который измеряют Apple Watch. Плеер, библиотека и остальные функции работают и без часов.",
    "support.faq.q2": "Какие аудиоформаты поддерживаются?",
    "support.faq.a2":
      "DreamRead поддерживает MP3, M4A, M4B, FLAC, WAV, AIFF, OGG, Opus и AWB.",
    "support.faq.q3": "Как импортировать аудиокниги?",
    "support.faq.a3":
      "Нажмите кнопку импорта на вкладке «Библиотека» — откроется приложение «Файлы». Можно добавлять отдельные файлы или целые папки. Также доступен встроенный каталог бесплатных аудиокниг от LibriVox.",
    "support.faq.q4": "Пауза сработала слишком рано — или не сработала вовсе",
    "support.faq.a4":
      "Настройте чувствительность в разделе Настройки → Определение сна. Попробуйте меньший порог (например, 4%), если приложение не замечает засыпание, или больший (например, 15%), если срабатывает слишком рано.",
    "support.faq.q5": "Прогресс не сохранился",
    "support.faq.a5":
      "DreamRead сохраняет позицию автоматически каждые несколько секунд во время воспроизведения. Если прогресс пропал, убедитесь, что приложение не было принудительно закрыто во время прослушивания.",
    "support.faq.q6": "Что входит в Premium?",
    "support.faq.a6":
      "Premium открывает определение сна через Apple Watch, расширенное управление воспроизведением, полную статистику, оценку качества сна и неограниченное количество книг, закладок и папок. Тарифы: $6.99/мес или $39.99/год с 7 днями бесплатного доступа.",
    "support.faq.q7": "Как отменить подписку?",
    "support.faq.a7":
      "Откройте Настройки iPhone → Apple ID → Подписки → DreamRead → «Отменить подписку». Доступ сохранится до конца текущего оплаченного периода.",
    "support.faq.q8": "Как восстановить покупку?",
    "support.faq.a8":
      "Откройте DreamRead → Настройки → нажмите «Восстановить покупки». Это полезно, если вы переустановили приложение или сменили устройство.",
    "support.legal.title": "Конфиденциальность и условия",

    // Privacy Policy
    "privacy.title": "Политика конфиденциальности",
    "privacy.updated": "Обновлено: 27 апреля 2026",
    "privacy.overview.title": "Общие сведения",
    "privacy.overview.text":
      "DreamRead создан с заботой о вашей приватности. Мы не собираем, не передаём и не храним ваши данные на наших серверах. Ваши данные остаются на устройстве, за исключением случаев, когда вы включаете iCloud Backup — тогда они синхронизируются в ваш личный аккаунт iCloud, а не на наши серверы.",
    "privacy.health.title": "Данные здоровья (HealthKit)",
    "privacy.health.intro":
      "DreamRead использует Apple HealthKit для чтения данных пульса с Apple Watch в функции определения сна.",
    "privacy.health.1":
      "Данные пульса обрабатываются исключительно на вашем устройстве в реальном времени",
    "privacy.health.2":
      "Данные пульса никогда не сохраняются, не передаются и не предоставляются третьим лицам",
    "privacy.health.3":
      "Данные пульса никогда не используются для рекламы, маркетинга или продажи данных",
    "privacy.health.4":
      "Данные пульса используются только для определения момента, когда нужно поставить воспроизведение на паузу",
    "privacy.health.outro":
      "Мы не используем данные HealthKit ни для каких целей, кроме работы функции определения сна.",
    "privacy.content.title": "Пользовательский контент",
    "privacy.content.1":
      "Файлы аудиокниг хранятся только локально на вашем устройстве",
    "privacy.content.2":
      "Прогресс прослушивания и закладки хранятся локально на вашем устройстве",
    "privacy.content.3":
      "У нас нет доступа к вашим аудиокнигам и истории прослушивания",
    "privacy.icloud.title": "Синхронизация через iCloud (опционально)",
    "privacy.icloud.intro":
      "DreamRead предлагает опциональную функцию iCloud Backup для подписчиков Premium. По умолчанию она выключена, и вы можете отключить её в любой момент.",
    "privacy.icloud.1":
      "При включении ваша библиотека, закладки, главы, папки и аудиофайлы синхронизируются в ваш личный аккаунт iCloud через Apple CloudKit",
    "privacy.icloud.2":
      "Данные хранятся только в вашем личном iCloud; у нас нет к ним доступа, и они подчиняются политике конфиденциальности Apple",
    "privacy.icloud.3":
      "Синхронизация работает только между устройствами, на которых выполнен вход с одним и тем же Apple ID",
    "privacy.icloud.4":
      "Вы можете включить опцию синхронизации аудио только по Wi-Fi, чтобы iCloud Backup не расходовал мобильный трафик",
    "privacy.icloud.5":
      "Отключение iCloud Backup или выход из iCloud сразу прекращает синхронизацию",
    "privacy.nocollect.title": "Какие данные мы не собираем",
    "privacy.nocollect.intro": "DreamRead не собирает:",
    "privacy.nocollect.1":
      "Персональные данные (имя, email, номер телефона)",
    "privacy.nocollect.2": "Данные о местоположении",
    "privacy.nocollect.3":
      "Данные о здоровье, кроме обработки пульса в реальном времени",
    "privacy.nocollect.4":
      "Идентифицирующие данные в аналитике — мы используем Firebase для анонимной диагностики сбоев и продуктовой аналитики (см. «Сторонние сервисы»)",
    "privacy.purchases.title": "Покупки и подписки",
    "privacy.purchases.intro":
      "DreamRead предлагает необязательные подписки, которые обрабатываются Apple через App Store.",
    "privacy.purchases.1":
      "Мы не собираем, не храним и не имеем доступа к вашей платёжной информации",
    "privacy.purchases.2": "Вся информация о платежах управляется Apple",
    "privacy.purchases.3":
      "Мы получаем только подтверждение статуса подписки для активации премиум-функций",
    "privacy.thirdparty.title": "Сторонние сервисы",
    "privacy.thirdparty.healthkit":
      "Apple HealthKit — чтение данных пульса только на устройстве",
    "privacy.thirdparty.storekit":
      "Apple StoreKit — обработка подписок; платёжные данные нам не передаются",
    "privacy.thirdparty.cloudkit":
      "Apple CloudKit — используется для опционального iCloud Backup; данные хранятся в вашем личном iCloud и нам недоступны",
    "privacy.thirdparty.firebase":
      "Google Firebase (Crashlytics + Analytics) — анонимная диагностика сбоев и продуктовая аналитика; персональные данные не передаются",
    "privacy.thirdparty.outro":
      "Рекламные сети и другие сторонние SDK не используются в мобильном приложении.",

    "privacy.analytics.title": "Веб-аналитика (Главная страница)",
    "privacy.analytics.text":
      "Наша главная страница использует Google Analytics 4 для анализа взаимодействия посетителей с сайтом. Это помогает нам улучшить пользовательский опыт и оптимизировать маркетинговые кампании.",
    "privacy.analytics.1":
      "Google Analytics собирает анонимные данные об использовании сайта, включая просмотры страниц, клики и источники перехода",
    "privacy.analytics.2":
      "Мы собираем параметры рекламных кампаний (gclid, gbraid, wbraid, utm_source, utm_campaign, utm_term) для отслеживания конверсий",
    "privacy.analytics.3":
      "Персональные данные (имя, email, платёжные данные) не отправляются в Google Analytics",
    "privacy.analytics.4":
      "Данные подлежат политике конфиденциальности Google и хранятся в соответствии с настройками вашего аккаунта Google",
    "privacy.retention.title": "Хранение данных",
    "privacy.retention.text":
      "Все данные хранятся локально на вашем устройстве. Вы можете удалить их в любой момент, удалив приложение через настройки iOS.",
    "privacy.children.title": "Конфиденциальность детей",
    "privacy.children.text":
      "DreamRead не предназначен для детей младше 13 лет. Мы сознательно не собираем информацию о детях младше 13 лет.",
    "privacy.changes.title": "Изменения в политике",
    "privacy.changes.text":
      "Мы можем время от времени обновлять эту политику. Все изменения будут отражены обновлением даты в начале страницы.",
    "privacy.contact.title": "Контакты",
    "privacy.contact.text":
      "По вопросам конфиденциальности пишите нам на",

    // Terms of Service
    "terms.title": "Условия использования",
    "terms.updated": "Обновлено: 4 апреля 2026",
    "terms.acceptance.title": "Принятие условий",
    "terms.acceptance.text":
      "Скачивая или используя DreamRead, вы соглашаетесь с данными условиями. Если вы не согласны, пожалуйста, не используйте приложение.",
    "terms.eligibility.title": "Требования",
    "terms.eligibility.1": "Вам должно быть не менее 13 лет",
    "terms.eligibility.2": "Необходим iPhone с iOS 16.0 или новее",
    "terms.eligibility.3":
      "Apple Watch нужны только для функции определения сна; все остальные функции работают без них",
    "terms.content.title": "Пользовательский контент",
    "terms.content.1":
      "Все права на импортированные аудиокниги остаются за вами",
    "terms.content.2":
      "Вы несёте ответственность за наличие законных прав на импортируемые файлы",
    "terms.content.3":
      "DreamRead не предоставляет, не размещает и не распространяет аудиокниги",
    "terms.health.title": "Медицинская оговорка",
    "terms.health.intro":
      "Функция определения сна предоставляется исключительно для удобства.",
    "terms.health.1":
      "DreamRead не является медицинским устройством и не предназначен для медицинского применения",
    "terms.health.2":
      "Точность определения сна может варьироваться — не полагайтесь на неё при принятии медицинских решений",
    "terms.health.3":
      "По вопросам сна обращайтесь к квалифицированному врачу",
    "terms.subscriptions.title": "Подписки и платежи",
    "terms.subscriptions.intro":
      "DreamRead предлагает необязательные автообновляемые подписки для доступа к премиум-функциям, включая определение сна.",
    "terms.subscriptions.plans":
      "Тарифы: Месячный ($6.99/мес) и Годовой ($39.99/год)",
    "terms.subscriptions.trial":
      "Пробный период: Годовой план включает 7 дней бесплатно. Если не отменить до окончания пробного периода, подписка автоматически станет платной",
    "terms.subscriptions.billing":
      "Оплата: Списание происходит с вашего Apple ID при подтверждении покупки или по окончании пробного периода",
    "terms.subscriptions.renewal":
      "Продление: Подписка продлевается автоматически, если не отменена минимум за 24 часа до окончания текущего периода",
    "terms.subscriptions.cancel":
      "Отмена: Управлять подпиской можно в любое время через настройки Apple ID (Настройки → Apple ID → Подписки)",
    "terms.subscriptions.refunds":
      "Возврат: Запросы на возврат обрабатываются Apple в соответствии с их политикой",
    "terms.subscriptions.outro":
      "Цены могут различаться по регионам и могут меняться. Изменения цен вступают в силу с начала следующего периода оплаты.",
    "terms.prohibited.title": "Запрещённое использование",
    "terms.prohibited.1":
      "Запрещено декомпилировать, реверс-инжинирить или модифицировать приложение",
    "terms.prohibited.2": "Запрещено использовать приложение в незаконных целях",
    "terms.prohibited.3":
      "Запрещено импортировать или распространять защищённый авторским правом контент без разрешения",
    "terms.liability.title": "Ограничение ответственности",
    "terms.liability.text":
      "DreamRead предоставляется «как есть» без каких-либо гарантий. В максимальной степени, допустимой законом, мы не несём ответственности за прямые, косвенные, случайные или последующие убытки, связанные с использованием или невозможностью использования приложения.",
    "terms.law.title": "Применимое право",
    "terms.law.text":
      "Настоящие условия регулируются применимым законодательством. Споры разрешаются в юрисдикции по месту нахождения разработчика.",
    "terms.changes.title": "Изменения условий",
    "terms.changes.text":
      "Мы можем обновлять эти условия время от времени. Продолжение использования приложения после изменений означает согласие с обновлёнными условиями. Дата в начале страницы указывает на последнее обновление.",
    "terms.contact.title": "Контакты",
    "terms.contact.text":
      "По вопросам об этих условиях пишите нам на",
  },
};

export function t(lang: Lang, key: string): string {
  return translations[lang][key] ?? translations.en[key] ?? key;
}
