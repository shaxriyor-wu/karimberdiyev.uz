export type Contact = {
  id: string
  label: string
  handle: string
  href: string
  hue: string
}

export const contacts: Contact[] = [
  {
    id: 'telegram',
    label: 'Telegram',
    handle: '@shakh_wu',
    href: 'https://t.me/shakh_wu',
    hue: '#229ED9',
  },
  {
    id: 'email',
    label: 'Email',
    handle: 'shaxriyorkarimberdiyev008@gmail.com',
    href: 'mailto:shaxriyorkarimberdiyev008@gmail.com',
    hue: '#ea4335',
  },
  {
    id: 'github',
    label: 'GitHub',
    handle: 'github.com/shaxriyor-wu',
    href: 'https://github.com/shaxriyor-wu',
    hue: '#ffffff',
  },
  {
    id: 'instagram',
    label: 'Instagram',
    handle: '@shaxriyor_karimberdiyev',
    href: 'https://instagram.com/shaxriyor_karimberdiyev',
    hue: '#E4405F',
  },
  {
    id: 'phone',
    label: 'Phone',
    handle: '+998 88 062 0710',
    href: 'tel:+998880620710',
    hue: '#25d366',
  },
]
