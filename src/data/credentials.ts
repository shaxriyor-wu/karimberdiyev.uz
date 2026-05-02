export type Credential = {
  title: string
  provider: string
  date: string
  detail: { en: string; uz: string; ru: string }
  link: string | null
}

export const credentials: Credential[] = [
  {
    title: 'IELTS',
    provider: 'British Council',
    date: '2024',
    detail: { en: 'Band 6.0', uz: 'Band 6.0', ru: 'Band 6.0' },
    link: null,
  },
  {
    title: 'Google Cybersecurity',
    provider: 'Coursera · Google',
    date: '2025',
    detail: {
      en: 'Specialization · 8 courses',
      uz: 'Specialization · 8 kurs',
      ru: 'Specialization · 8 курсов',
    },
    link: 'https://www.coursera.org/account/accomplishments/specialization/WTW555BB8UTC',
  },
  {
    title: 'Google Project Management',
    provider: 'Coursera · Google',
    date: '2025',
    detail: {
      en: 'Specialization · 6 courses',
      uz: 'Specialization · 6 kurs',
      ru: 'Specialization · 6 курсов',
    },
    link: 'https://www.coursera.org/account/accomplishments/specialization/BM4TL7SCSJBU',
  },
]
