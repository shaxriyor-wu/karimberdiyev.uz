import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { translations, type Dict, type Lang } from '../data/translations'

type Ctx = {
  lang: Lang
  setLang: (lang: Lang) => void
  t: Dict
}

const LanguageContext = createContext<Ctx | null>(null)

const STORAGE_KEY = 'sk-portfolio-lang'

const detectInitial = (): Lang => {
  if (typeof window === 'undefined') return 'en'
  const saved = window.localStorage.getItem(STORAGE_KEY) as Lang | null
  if (saved && ['en', 'uz', 'ru'].includes(saved)) return saved
  const nav = navigator.language.toLowerCase()
  if (nav.startsWith('uz')) return 'uz'
  if (nav.startsWith('ru')) return 'ru'
  return 'en'
}

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>(detectInitial)

  const setLang = (next: Lang) => {
    setLangState(next)
    window.localStorage.setItem(STORAGE_KEY, next)
  }

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const value = useMemo<Ctx>(
    () => ({ lang, setLang, t: translations[lang] }),
    [lang],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export const useLanguage = () => {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
