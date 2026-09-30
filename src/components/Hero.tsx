import { motion } from 'framer-motion'
import { ArrowDown, ArrowUpRight, MapPin } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { scrollToId } from '../lib/utils'

const Hero = () => {
  const { t } = useLanguage()

  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-center pt-24 pb-16 overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-[0.18] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgb(var(--grid-line)) 1px, transparent 1px), linear-gradient(to bottom, rgb(var(--grid-line)) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage:
            'radial-gradient(ellipse 80% 60% at 50% 40%, black 30%, transparent 80%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 80% 60% at 50% 40%, black 30%, transparent 80%)',
        }}
      />

      <div className="section-shell relative">
        <div className="grid grid-cols-12 gap-6 lg:gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-12 lg:col-span-8 order-2 lg:order-1"
          >
            <h1 className="display-text text-[clamp(2.4rem,7vw,5.75rem)] tracking-[-0.02em] text-balance min-w-0">
              <span className="block break-words">{t.hero.name[0]}</span>
              <span className="block text-ink-400 break-words">
                {t.hero.name[1]}
                <span className="inline-block align-middle accent-text">.</span>
              </span>
            </h1>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-lime mono text-xs uppercase tracking-widest border border-lime/30">
                <span className="w-1.5 h-1.5 rounded-full bg-lime" />
                {t.hero.role}
              </span>
              <span className="inline-flex items-center gap-1.5 mono text-xs uppercase tracking-widest text-ink-400">
                <MapPin className="w-3.5 h-3.5" />
                Tashkent / Xorazm · UZ
              </span>
            </div>

            <p className="mt-8 max-w-2xl text-lg sm:text-xl text-ink-300 leading-relaxed text-balance">
              {t.hero.intro}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <button
                onClick={() => scrollToId('projects')}
                className="group inline-flex items-center gap-2 pl-5 pr-3 py-3 rounded-md bg-ink-100 text-ink-950 font-medium hover:bg-lime transition-colors transition-colors"
              >
                {t.hero.cta.primary}
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-ink-950 text-ink-100  transition-transform">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </button>
              <button
                onClick={() => scrollToId('contact')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-md hairline text-ink-100 hover:border-white/20 hover:bg-white/[0.03] transition-colors"
              >
                {t.hero.cta.secondary}
              </button>
            </div>

            <div className="mt-14 grid grid-cols-3 max-w-lg gap-px hairline rounded-lg overflow-hidden bg-white/[0.04]">
              {t.hero.stats.map((s) => (
                <div key={s.label} className="bg-ink-950 p-4 sm:p-5">
                  <div className="display-text text-3xl sm:text-4xl text-ink-100">
                    {s.value}
                  </div>
                  <div className="mono text-[10px] sm:text-xs uppercase tracking-widest text-ink-400 mt-1">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-12 lg:col-span-4 order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="relative w-[260px] sm:w-[300px] lg:w-[340px] aspect-[3/4] rounded-lg overflow-hidden hairline">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: 'url(/profile.jpg)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/10 to-transparent" />

                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <span className="mono text-[10px] uppercase tracking-widest text-ink-100/90 px-2 py-1 rounded-md bg-ink-950/40 backdrop-blur">
                    SK · 2026
                  </span>
                  <span className="mono text-[10px] uppercase tracking-widest text-ink-100/90 px-2 py-1 rounded-md bg-ink-950/40 backdrop-blur">
                    01/01
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <div className="mono text-[10px] uppercase tracking-widest text-ink-300">
                    Engineer · Builder
                  </div>
                  <div className="display-text text-2xl sm:text-[1.6rem] text-ink-100 mt-1 whitespace-nowrap">
                    {t.hero.name[0]}
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </div>

        <button
          onClick={() => scrollToId('about')}
          className="hidden md:flex absolute -bottom-8 lg:bottom-4 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-ink-400 hover:text-lime transition-colors"
        >
          <span className="mono text-[10px] uppercase tracking-[0.3em]">scroll</span>
          <ArrowDown className="w-4 h-4" />
        </button>
      </div>
    </section>
  )
}

export default Hero
