export type StackGroup = {
  title: { en: string; uz: string; ru: string }
  items: string[]
}

export const stackGroups: StackGroup[] = [
  {
    title: { en: 'Backend', uz: 'Backend', ru: 'Backend' },
    items: ['Python', 'Django', 'Django REST', 'Flask', 'Aiogram', 'REST APIs'],
  },
  {
    title: { en: 'Frontend', uz: 'Frontend', ru: 'Frontend' },
    items: ['HTML/CSS', 'JavaScript Basics'],
  },
  {
    title: { en: 'Databases', uz: "Ma'lumotlar bazasi", ru: 'Базы данных' },
    items: ['PostgreSQL', 'SQLite', 'SQLAlchemy'],
  },
  {
    title: { en: 'Tools', uz: 'Tools', ru: 'Инструменты' },
    items: ['Docker', 'n8n', 'Git', 'Linux', 'Vercel', 'Cloudflare', 'Deployment'],
  },
]

export const stackMarquee = [
  'Python',
  'Django',
  'Flask',
  'Aiogram',
  'PostgreSQL',
  'SQLite',
  'SQLAlchemy',
  'HTML/CSS',
  'JavaScript',
  'Docker',
  'n8n',
  'Linux',
  'Git',
  'REST',
]
