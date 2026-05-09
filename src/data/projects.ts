import type { Dict } from './translations'

export type ProjectKind = 'web' | 'crm' | 'bot'
export type CtaKind = 'live' | 'code' | 'bot'

export type Project = {
  id: string
  kind: ProjectKind
  size: 'lg' | 'md' | 'sm'
  number: string
  year: string
  titles: { en: string; uz: string; ru: string }
  descriptions: { en: string; uz: string; ru: string }
  tags: string[]
  link: string
  cta: CtaKind
  accent: 'lime' | 'amber' | 'sky' | 'rose' | 'violet'
}

export const projects: Project[] = [
  {
    id: 'examer',
    kind: 'web',
    size: 'lg',
    number: '01',
    year: '2026',
    titles: {
      en: 'Examer.uz — Mock-test startup',
      uz: 'Examer.uz — Mock-test startup',
      ru: 'Examer.uz — Mock-test стартап',
    },
    descriptions: {
      en: "Founder & lead engineer. Uzbekistan's most modern mock-test platform for IELTS, CEFR, SAT, and the National Certificate — real exam format, AI-graded Writing & Speaking, subscriptions, wallet, and a Telegram bot. Django + DRF + JWT on the backend, React 18 + TypeScript + Vite on the frontend.",
      uz: "Asoschi va bosh muhandis. O'zbekistondagi eng zamonaviy mock-test platformasi: IELTS, CEFR, SAT va Milliy Sertifikat — real imtihon formati, AI bilan Writing va Speaking baholash, obuna, hamyon va Telegram bot. Backend: Django + DRF + JWT, frontend: React 18 + TypeScript + Vite.",
      ru: "Основатель и ведущий инженер. Самая современная мок-тест платформа Узбекистана: IELTS, CEFR, SAT и Национальный сертификат — реальный формат экзамена, AI-оценка Writing и Speaking, подписки, кошелёк, Telegram-бот. Backend: Django + DRF + JWT, frontend: React 18 + TypeScript + Vite.",
    },
    tags: ['Startup', 'Django', 'React', 'AI grading', 'PostgreSQL'],
    link: 'https://examer.uz',
    cta: 'live',
    accent: 'lime',
  },
  {
    id: 'javae',
    kind: 'web',
    size: 'md',
    number: '02',
    year: '2025',
    titles: {
      en: 'JavaE Football',
      uz: 'JavaE Football',
      ru: 'JavaE Football',
    },
    descriptions: {
      en: 'Full-stack platform for managing football teams, players, and matches. ReactJS frontend, Django backend, Dockerized deployment.',
      uz: "Futbol jamoalari, o'yinchilar va o'yinlarni boshqarish uchun full-stack platforma. ReactJS frontend, Django backend, Docker bilan deploy.",
      ru: 'Full-stack платформа для управления футбольными командами, игроками и матчами. ReactJS, Django, Docker.',
    },
    tags: ['React', 'Django', 'SQLite', 'Docker'],
    link: 'https://javaefootball.com',
    cta: 'live',
    accent: 'sky',
  },
  {
    id: 'opendev',
    kind: 'web',
    size: 'md',
    number: '03',
    year: '2025',
    titles: { en: 'OpenDevUZ', uz: 'OpenDevUZ', ru: 'OpenDevUZ' },
    descriptions: {
      en: 'Learning platform with free IT courses and curated job listings.',
      uz: "Bepul IT kurslar va saralangan ish e'lonlari joylashgan ta'lim platformasi.",
      ru: 'Платформа с бесплатными IT-курсами и подборкой вакансий.',
    },
    tags: ['Python', 'Django', 'SQLite'],
    link: 'https://open-dev.vercel.app/',
    cta: 'live',
    accent: 'sky',
  },
  {
    id: 'stanford-crm',
    kind: 'crm',
    size: 'md',
    number: '04',
    year: '2025',
    titles: {
      en: 'Stanford Academy CRM',
      uz: 'Stanford Academy CRM',
      ru: 'Stanford Academy CRM',
    },
    descriptions: {
      en: 'CRM for an education center. Manages students, courses, teachers, and admin workflows.',
      uz: "Ta'lim markazi uchun CRM. Talabalar, kurslar, o'qituvchilar va ma'muriy jarayonlar.",
      ru: 'CRM для учебного центра: студенты, курсы, преподаватели, администрирование.',
    },
    tags: ['CRM', 'Backend', 'Python'],
    link: 'https://crm.stanfordacademy.uz',
    cta: 'live',
    accent: 'violet',
  },
  {
    id: 'tricorp',
    kind: 'crm',
    size: 'md',
    number: '05',
    year: '2025',
    titles: { en: 'TriCorp CRM', uz: 'TriCorp CRM', ru: 'TriCorp CRM' },
    descriptions: {
      en: 'Multi-tenant CRM for education centers, with full documentation.',
      uz: "Bir nechta ta'lim markazlari uchun CRM, to'liq hujjatlashtirilgan.",
      ru: 'Multi-tenant CRM для образовательных центров с полной документацией.',
    },
    tags: ['CRM', 'Multi-tenant', 'Docs'],
    link: 'https://crm.tricorp.uz',
    cta: 'live',
    accent: 'amber',
  },
  {
    id: 'stanford-site',
    kind: 'web',
    size: 'sm',
    number: '06',
    year: '2024',
    titles: {
      en: 'Stanford Academy site',
      uz: 'Stanford Academy sayti',
      ru: 'Сайт Stanford Academy',
    },
    descriptions: {
      en: 'Public site for the education center: courses, teachers, programs.',
      uz: "Ta'lim markazi sayti: kurslar, o'qituvchilar, dasturlar.",
      ru: 'Публичный сайт центра: курсы, преподаватели, программы.',
    },
    tags: ['Web', 'Responsive'],
    link: 'https://www.stanfordacademy.uz',
    cta: 'live',
    accent: 'sky',
  },
  {
    id: 'shutup',
    kind: 'bot',
    size: 'sm',
    number: '07',
    year: '2024',
    titles: {
      en: 'Shut Up bot',
      uz: 'Shut Up bot',
      ru: 'Shut Up бот',
    },
    descriptions: {
      en: 'Telegram moderation bot — tracks violations and applies restrictions.',
      uz: 'Telegram moderatsiya boti — qoidabuzarliklarni kuzatadi va cheklovlar qo\'llaydi.',
      ru: 'Telegram-бот модерации — отслеживает нарушения и применяет ограничения.',
    },
    tags: ['Aiogram', 'Telegram'],
    link: 'https://github.com/shaxriyor-wu/shut-up-web-bot',
    cta: 'code',
    accent: 'rose',
  },
  {
    id: 'cake',
    kind: 'bot',
    size: 'sm',
    number: '08',
    year: '2024',
    titles: {
      en: 'Cake Seller bot',
      uz: 'Cake Seller bot',
      ru: 'Cake Seller бот',
    },
    descriptions: {
      en: 'E-commerce Telegram bot for ordering cakes with delivery options.',
      uz: 'Tortlarni buyurtma qilish va yetkazib berish uchun Telegram bot.',
      ru: 'E-commerce Telegram-бот для заказа тортов с доставкой.',
    },
    tags: ['Aiogram', 'E-com'],
    link: 'https://github.com/shaxriyor-wu/cakesellerbot',
    cta: 'code',
    accent: 'amber',
  },
  {
    id: 'pdf',
    kind: 'bot',
    size: 'sm',
    number: '09',
    year: '2024',
    titles: {
      en: 'PDF Books bot',
      uz: 'PDF Books bot',
      ru: 'PDF Books бот',
    },
    descriptions: {
      en: 'Telegram bot for finding PDF books — search, categories, fast delivery.',
      uz: 'PDF kitoblarni topish uchun bot — qidiruv, kategoriyalar, tezkor yuborish.',
      ru: 'Telegram-бот для поиска PDF-книг — поиск, категории, быстрая отдача.',
    },
    tags: ['Aiogram'],
    link: 'https://github.com/shaxriyor-wu/pdf-books',
    cta: 'code',
    accent: 'violet',
  },
  {
    id: 'kurs24',
    kind: 'bot',
    size: 'sm',
    number: '10',
    year: '2024',
    titles: {
      en: 'Kurs24 bot',
      uz: 'Kurs24 bot',
      ru: 'Kurs24 бот',
    },
    descriptions: {
      en: 'Real-time currency exchange rates inside Telegram.',
      uz: "Telegram ichida real vaqt valyuta kurslari.",
      ru: 'Курсы валют в реальном времени внутри Telegram.',
    },
    tags: ['Aiogram', 'Realtime'],
    link: 'https://t.me/Kurs24_robot',
    cta: 'bot',
    accent: 'lime',
  },
  {
    id: 'praytime',
    kind: 'bot',
    size: 'sm',
    number: '11',
    year: '2024',
    titles: {
      en: 'PrayTime UZ',
      uz: 'PrayTime UZ',
      ru: 'PrayTime UZ',
    },
    descriptions: {
      en: 'Telegram bot delivering accurate prayer times by location.',
      uz: 'Joylashuv asosida aniq namoz vaqtlarini yetkazadigan bot.',
      ru: 'Telegram-бот: точное время молитв по локации.',
    },
    tags: ['Aiogram', 'Geo'],
    link: 'https://t.me/praytime_uzbot',
    cta: 'bot',
    accent: 'sky',
  },
]

export const projectCtaText = (cta: CtaKind, dict: Dict) => dict.projects.cta[cta]
