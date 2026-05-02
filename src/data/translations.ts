export type Lang = 'en' | 'uz' | 'ru'

export type Dict = {
  nav: {
    home: string
    about: string
    work: string
    projects: string
    stack: string
    credentials: string
    contact: string
  }
  hero: {
    role: string
    name: string[]
    intro: string
    cta: { primary: string; secondary: string }
    stats: Array<{ value: string; label: string }>
    availability: string
  }
  about: {
    eyebrow: string
    headline: string
    body: string[]
    education: { title: string; line1: string; line2: string }
    soft: { title: string; items: string[] }
    languages: {
      title: string
      items: Array<{ name: string; level: string }>
    }
  }
  experience: {
    eyebrow: string
    headline: string
    items: Array<{
      role: string
      company: string
      period: string
      mode: string
      bullets: string[]
    }>
  }
  projects: {
    eyebrow: string
    headline: string
    sub: string
    cta: { live: string; code: string; bot: string }
    discussTitle: string
    discussBody: string
    discussCta: string
  }
  stack: {
    eyebrow: string
    headline: string
    sub: string
  }
  credentials: {
    eyebrow: string
    headline: string
  }
  contact: {
    eyebrow: string
    headline: string
    sub: string
    cta: string
  }
  footer: {
    tag: string
    rights: string
    backToTop: string
  }
}

export const translations: Record<Lang, Dict> = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      work: 'Experience',
      projects: 'Projects',
      stack: 'Stack',
      credentials: 'Credentials',
      contact: 'Contact',
    },
    hero: {
      role: 'Software Engineer',
      name: ['Shaxriyor', 'Karimberdiyev'],
      intro:
        'I design and ship backend systems, Telegram automation, and full-stack products end-to-end. Clean architecture, pragmatic security, real users.',
      cta: { primary: 'See my work', secondary: 'Get in touch' },
      stats: [
        { value: '1+', label: 'Years engineering' },
        { value: '10+', label: 'Shipped projects' },
        { value: '17', label: 'Years old' },
      ],
      availability: 'Open to freelance & collaborations',
    },
    about: {
      eyebrow: 'About',
      headline: 'Engineer first. Curious always.',
      body: [
        "I'm a software engineer focused on backend systems, automation, and shipping products that solve real problems.",
        'My core stack is Python with Django and Aiogram, paired with PostgreSQL and SQLite. I care about clean architecture, performance, and pragmatic security.',
        'I learn fast, ship faster, and like working in teams that move with intent.',
      ],
      education: {
        title: 'Education',
        line1: 'School student — currently 17',
        line2: 'No degree yet. I learn from problems, not slides.',
      },
      soft: {
        title: 'Soft skills',
        items: [
          'Leadership',
          'Teamwork',
          'Communication',
          'Self-learning',
          'Deep work',
          'Creativity',
          'Active listening',
          'Time management',
          'Decision making',
          'Mentoring',
        ],
      },
      languages: {
        title: 'Languages',
        items: [
          { name: 'Uzbek', level: 'Native' },
          { name: 'English', level: 'Advanced' },
          { name: 'Russian', level: 'Basic' },
        ],
      },
    },
    experience: {
      eyebrow: 'Experience',
      headline: 'What I do, in practice.',
      items: [
        {
          role: 'Freelance Software Engineer',
          company: 'Self-employed',
          period: '2024 — Present',
          mode: 'Remote',
          bullets: [
            'Delivered 10+ client projects end-to-end, from requirements to production.',
            'Built Telegram bots with Aiogram and Django REST backends.',
            'Implemented frontend integration, authentication, payments, and admin panels.',
            'Owned client communication, technical docs, and delivery timelines.',
          ],
        },
      ],
    },
    projects: {
      eyebrow: 'Selected work',
      headline: 'Things I built.',
      sub: 'A mix of full-stack web apps, CRM platforms, and Telegram automation — most of them running in production.',
      cta: { live: 'Visit', code: 'Code', bot: 'Open bot' },
      discussTitle: "Have something in mind?",
      discussBody:
        "If you're shipping a product, automating a workflow, or stuck on a backend problem — let's talk.",
      discussCta: "Let's discuss",
    },
    stack: {
      eyebrow: 'Stack',
      headline: 'Tools I reach for daily.',
      sub: 'I pick boring tech that works. Then I make it fast.',
    },
    credentials: {
      eyebrow: 'Credentials',
      headline: 'Certifications.',
    },
    contact: {
      eyebrow: 'Contact',
      headline: "Let's build something.",
      sub: 'Fastest reply on Telegram. Email works too.',
      cta: 'Send message on Telegram',
    },
    footer: {
      tag: 'Designed and built with intent.',
      rights: '© 2026 Shaxriyor Karimberdiyev. All rights reserved.',
      backToTop: 'Back to top',
    },
  },
  uz: {
    nav: {
      home: 'Bosh',
      about: 'Men',
      work: 'Tajriba',
      projects: 'Loyihalar',
      stack: 'Stack',
      credentials: 'Sertifikatlar',
      contact: 'Aloqa',
    },
    hero: {
      role: 'Dasturchi muhandis',
      name: ['Shaxriyor', 'Karimberdiyev'],
      intro:
        "Backend tizimlar, Telegram avtomatlashtirish va to'liq mahsulotlarni boshidan oxirigacha yetkazaman. Toza arxitektura, amaliy xavfsizlik, real foydalanuvchilar.",
      cta: { primary: "Ishlarimni ko'rish", secondary: "Bog'lanish" },
      stats: [
        { value: '1+', label: 'Yillik tajriba' },
        { value: '10+', label: 'Yetkazilgan loyiha' },
        { value: '17', label: 'Yosh' },
      ],
      availability: "Freelance va hamkorlikka ochiqman",
    },
    about: {
      eyebrow: 'Men haqimda',
      headline: 'Avval — muhandis. Doim — qiziquvchan.',
      body: [
        "Men backend tizimlar, avtomatlashtirish va real muammolarni hal qiluvchi mahsulotlarni yaratishga yo'naltirilgan dasturchiman.",
        'Asosiy stack: Python (Django, Aiogram), PostgreSQL va SQLite. Toza arxitektura, samaradorlik va amaliy xavfsizlikni qadrlayman.',
        "Tez o'rganaman, tezroq yetkazaman va maqsadga yo'nalgan jamoalarni yaxshi ko'raman.",
      ],
      education: {
        title: "Ta'lim",
        line1: "Maktab o'quvchisi — hozir 17 yoshda",
        line2: "Universitet darajam yo'q. Slaydlardan emas, muammolardan o'rganaman.",
      },
      soft: {
        title: 'Soft skills',
        items: [
          'Liderlik',
          'Jamoa',
          'Muloqot',
          "O'rganish",
          'Chuqur ish',
          'Ijodkorlik',
          'Tinglash',
          "Vaqt boshqaruvi",
          'Qaror qabul qilish',
          'Mentorlik',
        ],
      },
      languages: {
        title: 'Tillar',
        items: [
          { name: "O'zbek", level: 'Ona tili' },
          { name: 'Ingliz', level: 'Yuqori' },
          { name: 'Rus', level: "Boshlang'ich" },
        ],
      },
    },
    experience: {
      eyebrow: 'Tajriba',
      headline: "Amalda nima qilaman.",
      items: [
        {
          role: 'Freelance Dasturchi',
          company: "O'z ishi",
          period: '2024 — hozir',
          mode: 'Masofadan',
          bullets: [
            "10+ mijoz loyihasini boshidan oxirigacha yetkazdim.",
            "Aiogram bilan Telegram botlari va Django REST backendlar qurdim.",
            "Frontend integratsiya, autentifikatsiya, to'lov va admin paneller joriy qildim.",
            "Mijoz bilan muloqot, texnik hujjat va deadlinelarni o'zim boshqardim.",
          ],
        },
      ],
    },
    projects: {
      eyebrow: 'Tanlangan ishlar',
      headline: 'Men yaratgan narsalar.',
      sub: "Full-stack web ilovalar, CRM tizimlar va Telegram avtomatlashtirish — ko'pchiligi production'da ishlamoqda.",
      cta: { live: "Ko'rish", code: 'Kod', bot: 'Botni ochish' },
      discussTitle: "Loyihangiz bormi?",
      discussBody:
        "Mahsulot yetkazmoqchimisiz, jarayonni avtomatlashtirmoqchimisiz yoki backend muammoga duch keldingizmi — gaplashaylik.",
      discussCta: "Muhokama qilamiz",
    },
    stack: {
      eyebrow: 'Stack',
      headline: 'Har kuni ishlatadigan asboblarim.',
      sub: "Ishlaydigan oddiy texnologiyalarni tanlayman. Keyin uni tezlashtiraman.",
    },
    credentials: {
      eyebrow: 'Sertifikatlar',
      headline: 'Sertifikatlar.',
    },
    contact: {
      eyebrow: 'Aloqa',
      headline: "Birgalikda quramiz.",
      sub: "Telegramda eng tez javob beraman. Email ham ishlaydi.",
      cta: 'Telegramda yozing',
    },
    footer: {
      tag: "Maqsad bilan loyihalangan va qurilgan.",
      rights: '© 2026 Shaxriyor Karimberdiyev. Barcha huquqlar himoyalangan.',
      backToTop: 'Yuqoriga',
    },
  },
  ru: {
    nav: {
      home: 'Главная',
      about: 'Обо мне',
      work: 'Опыт',
      projects: 'Проекты',
      stack: 'Стек',
      credentials: 'Сертификаты',
      contact: 'Контакты',
    },
    hero: {
      role: 'Инженер-программист',
      name: ['Shaxriyor', 'Karimberdiyev'],
      intro:
        'Проектирую и поставляю backend-системы, Telegram-автоматизацию и продукты под ключ. Чистая архитектура, прагматичная безопасность, реальные пользователи.',
      cta: { primary: 'Мои работы', secondary: 'Написать' },
      stats: [
        { value: '1+', label: 'Лет в инженерии' },
        { value: '10+', label: 'Сданных проектов' },
        { value: '17', label: 'Лет' },
      ],
      availability: 'Открыт к фрилансу и сотрудничеству',
    },
    about: {
      eyebrow: 'Обо мне',
      headline: 'Сначала инженер. Всегда любопытный.',
      body: [
        'Я инженер, сфокусированный на backend-системах, автоматизации и продуктах, решающих реальные задачи.',
        'Основной стек: Python (Django, Aiogram), PostgreSQL и SQLite. Ценю чистую архитектуру, производительность и прагматичную безопасность.',
        'Быстро учусь, ещё быстрее поставляю и люблю команды, движущиеся с целью.',
      ],
      education: {
        title: 'Образование',
        line1: 'Школьник — сейчас 17 лет',
        line2: 'Диплома пока нет. Учусь у задач, а не у слайдов.',
      },
      soft: {
        title: 'Soft skills',
        items: [
          'Лидерство',
          'Командность',
          'Коммуникация',
          'Самообучение',
          'Глубокая работа',
          'Креативность',
          'Слушание',
          'Тайм-менеджмент',
          'Решения',
          'Менторство',
        ],
      },
      languages: {
        title: 'Языки',
        items: [
          { name: 'Узбекский', level: 'Родной' },
          { name: 'Английский', level: 'Продвинутый' },
          { name: 'Русский', level: 'Базовый' },
        ],
      },
    },
    experience: {
      eyebrow: 'Опыт',
      headline: 'Что я делаю на практике.',
      items: [
        {
          role: 'Фриланс инженер-программист',
          company: 'Самозанятый',
          period: '2024 — настоящее',
          mode: 'Удалённо',
          bullets: [
            'Сдал 10+ клиентских проектов от требований до продакшена.',
            'Telegram-боты на Aiogram и Django REST backend.',
            'Frontend-интеграция, аутентификация, платежи, админ-панели.',
            'Сам вёл коммуникацию с клиентами, документацию и сроки.',
          ],
        },
      ],
    },
    projects: {
      eyebrow: 'Избранное',
      headline: 'Что я построил.',
      sub: 'Full-stack веб-приложения, CRM-системы и Telegram-автоматизация — большая часть работает в продакшене.',
      cta: { live: 'Открыть', code: 'Код', bot: 'Открыть бота' },
      discussTitle: 'Есть идея?',
      discussBody:
        'Если строите продукт, автоматизируете процесс или застряли на backend — напишите.',
      discussCta: 'Обсудить',
    },
    stack: {
      eyebrow: 'Стек',
      headline: 'Инструменты на каждый день.',
      sub: 'Беру скучные рабочие технологии. Потом делаю их быстрыми.',
    },
    credentials: {
      eyebrow: 'Сертификаты',
      headline: 'Сертификаты.',
    },
    contact: {
      eyebrow: 'Контакты',
      headline: 'Давайте построим.',
      sub: 'Быстрее всего отвечаю в Telegram. Почта тоже работает.',
      cta: 'Написать в Telegram',
    },
    footer: {
      tag: 'Спроектировано и собрано с намерением.',
      rights: '© 2026 Shaxriyor Karimberdiyev. Все права защищены.',
      backToTop: 'Наверх',
    },
  },
}
