import { ArrowUp } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { scrollToId } from '../lib/utils'

const Footer = () => {
  const { t } = useLanguage()

  return (
    <footer className="relative border-t border-white/[0.06] mt-16">
      <div className="section-shell py-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <div className="display-text text-5xl sm:text-7xl leading-none bg-clip-text text-transparent bg-gradient-to-r from-ink-100 to-ink-400 dark:from-ink-100 dark:to-ink-400">
              shaxriyor<span className="text-lime">.</span>
            </div>
            <div className="mt-3 mono text-xs uppercase tracking-widest text-ink-400">
              {t.footer.tag}
            </div>
          </div>

          <button
            onClick={() => scrollToId('home')}
            className="group inline-flex items-center gap-2 self-start md:self-auto px-4 py-2 rounded-full hairline text-ink-300 hover:text-lime hover:border-lime/30 transition-colors"
          >
            <span className="mono text-xs uppercase tracking-widest">
              {t.footer.backToTop}
            </span>
            <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white/[0.04] group-hover:bg-lime group-hover:text-zinc-950 transition-colors">
              <ArrowUp className="w-3.5 h-3.5" />
            </span>
          </button>
        </div>

        <div className="mt-10 pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="mono text-[10px] uppercase tracking-widest text-ink-500">
            {t.footer.rights}
          </div>
          <div className="mono text-[10px] uppercase tracking-widest text-ink-500">
            built with React · Tailwind · Framer Motion
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
