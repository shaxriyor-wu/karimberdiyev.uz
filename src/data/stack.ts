export type StackGroup = {
  title: { en: string; uz: string; ru: string }
  items: string[]
}

export const stackGroups: StackGroup[] = [
  {
    title: { en: 'Backend', uz: 'Backend', ru: 'Backend' },
    items: ['Python', 'Django', 'Django REST', 'Aiogram', 'REST APIs'],
  },
  {
    title: { en: 'Databases', uz: "Ma'lumotlar bazasi", ru: 'Базы данных' },
    items: ['PostgreSQL', 'SQLite'],
  },
  {
    title: { en: 'Tools', uz: 'Tools', ru: 'Инструменты' },
    items: ['Docker', 'Git', 'Linux', 'Vercel', 'Cloudflare', 'Deployment'],
  },
]

export const stackMarquee = [
  'Python',
  'Django',
  'Aiogram',
  'PostgreSQL',
  'SQLite',
  'Docker',
  'Linux',
  'Git',
  'REST',
]
