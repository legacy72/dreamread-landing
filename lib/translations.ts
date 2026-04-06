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
    // Hero
    "hero.title": "Fall Asleep to Your Favorite Audiobooks",
    "hero.subtitle": "DreamRead automatically pauses when you drift off, using your Apple Watch",
    "hero.devices": "iPhone + Apple Watch",

    // Features
    "features.title": "Features",
    "features.subtitle": "Everything you need for the perfect bedtime listening experience",
    "features.sleep.title": "Smart Sleep Detection",
    "features.sleep.desc": "Monitors your Apple Watch heart rate to automatically pause when you fall asleep",
    "features.watch.title": "Apple Watch Control",
    "features.watch.desc": "Control playback and monitor your heart rate directly from your wrist",
    "features.timer.title": "Sleep Timer",
    "features.timer.desc": "Set a 15, 30, 45, or 60-minute timer — playback pauses automatically",
    "features.catalog.title": "15,000+ Free Audiobooks",
    "features.catalog.desc": "Browse and listen to the built-in LibriVox catalog — no sign-up required",
    "features.formats.title": "All Popular Formats",
    "features.formats.desc": "Import MP3, M4A, M4B, FLAC, WAV, AIFF, OGG, Opus, AWB files with automatic progress saving",
    "features.stats.title": "Listening Stats",
    "features.stats.desc": "Track your bedtime listening habits and sleep session quality over time",

    // How It Works
    "how.title": "How It Works",
    "how.subtitle": "Three simple steps to better sleep",
    "how.step1.title": "Choose Your Audiobook",
    "how.step1.desc": "Import your own files or browse 15,000+ free books from LibriVox",
    "how.step2.title": "Start Listening Before Bed",
    "how.step2.desc": "Put on your Apple Watch and start your audiobook",
    "how.step3.title": "Sleep Peacefully",
    "how.step3.desc": "We'll automatically pause when you fall asleep",

    // Pricing
    "pricing.title": "Pricing",
    "pricing.subtitle": "Start free, upgrade to unlock Sleep Detection",
    "pricing.free.name": "Free",
    "pricing.free.desc": "Everything you need to get started",
    "pricing.free.price": "$0",
    "pricing.free.period": "forever",
    "pricing.free.f1": "Up to 50 audiobooks",
    "pricing.free.f2": "10 bookmarks",
    "pricing.free.f3": "3 folders",
    "pricing.free.f4": "Sleep timer",
    "pricing.free.f5": "Background playback",
    "pricing.free.f6": "Lock Screen controls",
    "pricing.free.f7": "LibriVox catalog (15,000+ free books)",
    "pricing.free.f8": "7-day listening stats",
    "pricing.premium.badge": "Most Popular",
    "pricing.premium.name": "Premium",
    "pricing.premium.desc": "Unlock the full DreamRead experience",
    "pricing.premium.price": "$34.99",
    "pricing.premium.period": "/ year",
    "pricing.premium.trial": "7-day free trial included",
    "pricing.premium.monthly": "or $5.99 / month",
    "pricing.premium.f1": "Unlimited audiobooks",
    "pricing.premium.f2": "Unlimited bookmarks",
    "pricing.premium.f3": "Unlimited folders",
    "pricing.premium.f4": "Sleep Detection via Apple Watch",
    "pricing.premium.f5": "Advanced playback controls",
    "pricing.premium.f6": "Unlimited listening stats",
    "pricing.premium.f7": "Sleep session quality info",
    "pricing.premium.f8": "Everything in Free",
    "pricing.premium.cancel": "Cancel anytime in App Store settings",

    // CTA
    "cta.title": "Ready to Transform Your Bedtime?",
    "cta.subtitle": "Download DreamRead and start listening tonight",

    // AppStoreButton
    "appstore.button": "Download on the App Store",
    "appstore.soon": "Coming Soon",

    // Footer
    "footer.rights": "All rights reserved.",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "footer.support": "Support",

    // Support
    "support.title": "Support",
    "support.subtitle": "We're here to help you get the most out of DreamRead.",
    "support.back": "Back to Home",
    "support.contact.title": "Contact Us",
    "support.contact.desc": "Have a question, found a bug, or want to suggest a feature? Send us an email and we'll get back to you as soon as possible.",
    "support.faq.title": "Frequently Asked Questions",
    "support.faq.q1": "Does Sleep Detection require Apple Watch?",
    "support.faq.a1": "Yes, Sleep Detection uses heart rate data from Apple Watch. The audio player, library, and all other features work without Apple Watch.",
    "support.faq.q2": "What audio formats are supported?",
    "support.faq.a2": "DreamRead supports MP3, M4A, M4B, FLAC, WAV, AIFF, OGG, Opus, and AWB files.",
    "support.faq.q3": "How do I import audiobooks?",
    "support.faq.a3": "Tap the import button in the Library tab to open the Files app. You can import individual files or entire folders. DreamRead also includes a built-in catalog with 15,000+ free audiobooks via LibriVox.",
    "support.faq.q4": "Sleep Detection paused too early / didn't pause at all",
    "support.faq.a4": "You can adjust the sensitivity threshold in Settings \u2192 Sleep Detection. Try a lower percentage (e.g. 6%) if the app doesn't detect sleep, or a higher one (e.g. 15%) if it triggers too early.",
    "support.faq.q5": "My progress wasn't saved",
    "support.faq.a5": "DreamRead saves your position automatically every few seconds during playback. If progress was lost, make sure the app wasn't force-quit during playback.",
    "support.faq.q6": "What's included in Premium?",
    "support.faq.a6": "Premium unlocks Sleep Detection via Apple Watch, advanced playback controls, unlimited listening stats, sleep session quality info, and unlimited books, bookmarks, and folders. Plans: $5.99/month or $34.99/year with a 7-day free trial.",
    "support.faq.q7": "How do I cancel my subscription?",
    "support.faq.a7": "Open Settings on your iPhone \u2192 tap your Apple ID \u2192 Subscriptions \u2192 select DreamRead \u2192 Cancel Subscription. You'll keep access until the end of the current billing period.",
    "support.faq.q8": "How do I restore my purchase?",
    "support.faq.a8": "Open DreamRead \u2192 Settings \u2192 tap \"Restore Purchases\". This is useful if you reinstalled the app or switched devices.",
    "support.legal.title": "Privacy & Legal",
  },

  ru: {
    // Hero
    "hero.title": "Засыпайте под любимые аудиокниги",
    "hero.subtitle": "DreamRead сам поставит на паузу, когда вы уснёте — с помощью Apple Watch",
    "hero.devices": "iPhone + Apple Watch",

    // Features
    "features.title": "Возможности",
    "features.subtitle": "Всё для идеального вечернего прослушивания",
    "features.sleep.title": "Умное определение сна",
    "features.sleep.desc": "Следит за пульсом через Apple Watch и ставит на паузу, когда вы засыпаете",
    "features.watch.title": "Управление с Apple Watch",
    "features.watch.desc": "Управляйте воспроизведением и следите за пульсом прямо с запястья",
    "features.timer.title": "Таймер сна",
    "features.timer.desc": "Таймер на 15, 30, 45 или 60 минут — воспроизведение остановится автоматически",
    "features.catalog.title": "15 000+ бесплатных аудиокниг",
    "features.catalog.desc": "Встроенный каталог LibriVox — слушайте без регистрации",
    "features.formats.title": "Все популярные форматы",
    "features.formats.desc": "Импорт MP3, M4A, M4B, FLAC, WAV, AIFF, OGG, Opus, AWB с автосохранением прогресса",
    "features.stats.title": "Статистика прослушивания",
    "features.stats.desc": "Отслеживайте свои привычки и качество засыпания",

    // How It Works
    "how.title": "Как это работает",
    "how.subtitle": "Три простых шага к спокойному сну",
    "how.step1.title": "Выберите аудиокнигу",
    "how.step1.desc": "Импортируйте свои файлы или выберите из 15 000+ бесплатных книг LibriVox",
    "how.step2.title": "Включите перед сном",
    "how.step2.desc": "Наденьте Apple Watch и запустите аудиокнигу",
    "how.step3.title": "Спите спокойно",
    "how.step3.desc": "Мы автоматически поставим на паузу, когда вы уснёте",

    // Pricing
    "pricing.title": "Тарифы",
    "pricing.subtitle": "Начните бесплатно, откройте определение сна в Premium",
    "pricing.free.name": "Бесплатно",
    "pricing.free.desc": "Всё необходимое для старта",
    "pricing.free.price": "$0",
    "pricing.free.period": "навсегда",
    "pricing.free.f1": "До 50 аудиокниг",
    "pricing.free.f2": "10 закладок",
    "pricing.free.f3": "3 папки",
    "pricing.free.f4": "Таймер сна",
    "pricing.free.f5": "Фоновое воспроизведение",
    "pricing.free.f6": "Управление с экрана блокировки",
    "pricing.free.f7": "Каталог LibriVox (15 000+ книг)",
    "pricing.free.f8": "Статистика за 7 дней",
    "pricing.premium.badge": "Популярный",
    "pricing.premium.name": "Premium",
    "pricing.premium.desc": "Полный доступ ко всем возможностям DreamRead",
    "pricing.premium.price": "$34.99",
    "pricing.premium.period": "/ год",
    "pricing.premium.trial": "7 дней бесплатно",
    "pricing.premium.monthly": "или $5.99 / месяц",
    "pricing.premium.f1": "Безлимит аудиокниг",
    "pricing.premium.f2": "Безлимит закладок",
    "pricing.premium.f3": "Безлимит папок",
    "pricing.premium.f4": "Определение сна через Apple Watch",
    "pricing.premium.f5": "Расширенное управление воспроизведением",
    "pricing.premium.f6": "Полная статистика прослушивания",
    "pricing.premium.f7": "Информация о качестве сна",
    "pricing.premium.f8": "Всё из бесплатного тарифа",
    "pricing.premium.cancel": "Отмена в любое время в настройках App Store",

    // CTA
    "cta.title": "Готовы преобразить свой вечер?",
    "cta.subtitle": "Скачайте DreamRead и начните слушать уже сегодня",

    // AppStoreButton
    "appstore.button": "Скачать в App Store",
    "appstore.soon": "Скоро",

    // Footer
    "footer.rights": "Все права защищены.",
    "footer.privacy": "Политика конфиденциальности",
    "footer.terms": "Условия использования",
    "footer.support": "Поддержка",

    // Support
    "support.title": "Поддержка",
    "support.subtitle": "Поможем разобраться с DreamRead.",
    "support.back": "На главную",
    "support.contact.title": "Связаться с нами",
    "support.contact.desc": "Нашли ошибку, есть вопрос или идея? Напишите нам — ответим как можно скорее.",
    "support.faq.title": "Частые вопросы",
    "support.faq.q1": "Нужен ли Apple Watch для определения сна?",
    "support.faq.a1": "Да, определение сна работает через датчик пульса Apple Watch. Плеер, библиотека и все остальные функции работают без часов.",
    "support.faq.q2": "Какие аудиоформаты поддерживаются?",
    "support.faq.a2": "DreamRead поддерживает MP3, M4A, M4B, FLAC, WAV, AIFF, OGG, Opus и AWB.",
    "support.faq.q3": "Как импортировать аудиокниги?",
    "support.faq.a3": "Нажмите кнопку импорта на вкладке «Библиотека» — откроется приложение «Файлы». Можно импортировать отдельные файлы или целые папки. Также доступен встроенный каталог с 15 000+ бесплатных аудиокниг от LibriVox.",
    "support.faq.q4": "Определение сна сработало слишком рано / не сработало вовсе",
    "support.faq.a4": "Настройте чувствительность в Настройки \u2192 Определение сна. Попробуйте меньший порог (например, 6%), если приложение не замечает засыпание, или больший (например, 15%), если срабатывает слишком рано.",
    "support.faq.q5": "Мой прогресс не сохранился",
    "support.faq.a5": "DreamRead автоматически сохраняет позицию каждые несколько секунд во время воспроизведения. Если прогресс пропал, убедитесь, что приложение не было принудительно закрыто во время прослушивания.",
    "support.faq.q6": "Что входит в Premium?",
    "support.faq.a6": "Premium открывает определение сна через Apple Watch, расширенное управление воспроизведением, полную статистику, информацию о качестве сна и безлимит книг, закладок и папок. Тарифы: $5.99/мес или $34.99/год с 7-дневным пробным периодом.",
    "support.faq.q7": "Как отменить подписку?",
    "support.faq.a7": "Откройте Настройки iPhone \u2192 Apple ID \u2192 Подписки \u2192 DreamRead \u2192 Отменить подписку. Доступ сохранится до конца текущего периода.",
    "support.faq.q8": "Как восстановить покупку?",
    "support.faq.a8": "Откройте DreamRead \u2192 Настройки \u2192 нажмите «Восстановить покупки». Это полезно, если вы переустановили приложение или сменили устройство.",
    "support.legal.title": "Конфиденциальность и условия",
  },
};

export function t(lang: Lang, key: string): string {
  return translations[lang][key] ?? translations.en[key] ?? key;
}
