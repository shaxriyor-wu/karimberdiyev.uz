import { useEffect, useState } from 'react'
import { Menu, X, Globe } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'
import { type Lang } from '../data/translations'
import { cx, scrollToId } from '../lib/utils'
import ThemeToggle from './ThemeToggle'

const sectionIds = ['home', 'about', 'work', 'projects', 'stack', 'credentials', 'contact'] as const
type Section = (typeof sectionIds)[number]

const Navigation = () => {
  const { t, lang, setLang } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<Section>('home')
  const [showLang, setShowLang] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12)

      const middle = window.scrollY + window.innerHeight * 0.35
      let current: Section = 'home'
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (!el) continue
        if (el.offsetTop <= middle) current = id
      }
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const links: Array<{ id: Section; label: string }> = [
    { id: 'home', label: t.nav.home },
    { id: 'about', label: t.nav.about },
    { id: 'work', label: t.nav.work },
    { id: 'projects', label: t.nav.projects },
    { id: 'stack', label: t.nav.stack },
    { id: 'credentials', label: t.nav.credentials },
    { id: 'contact', label: t.nav.contact },
  ]

  const handleClick = (id: Section) => {
    setOpen(false)
    scrollToId(id)
  }

  return (
    <>
      <header
        className={cx(
          'fixed top-0 inset-x-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-ink-950/80 backdrop-blur-xl border-b border-white/[0.06]'
            : 'bg-transparent border-b border-transparent',
        )}
      >
        <div className="section-shell flex items-center justify-between h-16">
          <button
            onClick={() => handleClick('home')}
            className="group flex items-center gap-2"
          >
            <span className="relative inline-flex items-center justify-center w-8 h-8 rounded-full bg-lime text-zinc-950 mono font-bold text-sm">
              SK
              <span className="absolute inset-0 rounded-full bg-lime blur-md opacity-0 group-hover:opacity-60 transition-opacity" />
            </span>
            <span className="hidden sm:flex flex-col leading-none">
              <span className="text-sm font-semibold">Shaxriyor</span>
              <span className="mono text-[10px] uppercase tracking-widest text-ink-400">
                {t.hero.role}
              </span>
            </span>
          </button>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => handleClick(l.id)}
                className={cx(
                  'relative px-3 py-1.5 text-sm rounded-full transition-colors',
                  active === l.id
                    ? 'text-zinc-950'
                    : 'text-ink-300 hover:text-ink-100',
                )}
              >
                {active === l.id && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-full bg-lime"
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="relative">{l.label}</span>
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <div className="relative">
              <button
                onClick={() => setShowLang((s) => !s)}
                onBlur={() => setTimeout(() => setShowLang(false), 120)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full hairline mono text-xs uppercase tracking-widest text-ink-300 hover:text-ink-100"
              >
                <Globe className="w-3.5 h-3.5" />
                {lang}
              </button>
              <AnimatePresence>
                {showLang && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    className="absolute right-0 mt-2 w-32 rounded-2xl glass hairline overflow-hidden"
                  >
                    {(['en', 'uz', 'ru'] as Lang[]).map((code) => (
                      <button
                        key={code}
                        onMouseDown={(e) => {
                          e.preventDefault()
                          setLang(code)
                          setShowLang(false)
                        }}
                        className={cx(
                          'w-full text-left px-4 py-2 mono text-xs uppercase tracking-widest transition-colors',
                          code === lang
                            ? 'bg-lime/10 text-lime'
                            : 'text-ink-300 hover:bg-white/5 hover:text-ink-100',
                        )}
                      >
                        {code === 'en'
                          ? 'English'
                          : code === 'uz'
                          ? "O'zbek"
                          : 'Русский'}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              onClick={() => handleClick('contact')}
              className="hidden md:inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-ink-100 text-ink-950 text-sm font-medium hover:bg-lime hover:text-zinc-950 transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-lime md:bg-ink-950 animate-pulse" />
              {t.nav.contact}
            </button>

            <button
              onClick={() => setOpen((s) => !s)}
              className="lg:hidden inline-flex items-center justify-center w-9 h-9 rounded-full hairline text-ink-100"
              aria-label="Toggle menu"
            >
              {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden bg-ink-950/95 backdrop-blur-xl pt-20"
          >
            <nav className="section-shell flex flex-col gap-1 py-8">
              {links.map((l, idx) => (
                <motion.button
                  key={l.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.04 }}
                  onClick={() => handleClick(l.id)}
                  className={cx(
                    'group flex items-center justify-between py-4 border-b border-white/5',
                    active === l.id ? 'text-lime' : 'text-ink-100',
                  )}
                >
                  <span className="display-text text-3xl">{l.label}</span>
                  <span className="mono text-xs text-ink-400">
                    0{idx + 1}
                  </span>
                </motion.button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navigation
