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

      <div
        className="absolute -top-40 -left-32 w-[500px] h-[500px] rounded-full opacity-30 blur-[120px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #c4f154 0%, transparent 70%)',
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
            <div className="flex items-center gap-3 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 rounded-full bg-lime animate-ping opacity-75" />
                <span className="relative rounded-full h-2 w-2 bg-lime" />
              </span>
              <span className="mono text-xs uppercase tracking-[0.25em] text-ink-300">
                {t.hero.availability}
              </span>
            </div>

            <h1 className="display-text text-[clamp(2.4rem,8.4vw,7rem)] tracking-[-0.045em] text-balance min-w-0">
              <span className="block break-words">{t.hero.name[0]}</span>
              <span className="block text-ink-400 break-words">
                {t.hero.name[1]}
                <span className="inline-block align-middle accent-text">.</span>
              </span>
            </h1>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-lime/10 text-lime mono text-xs uppercase tracking-widest border border-lime/20">
                <span className="w-1.5 h-1.5 rounded-full bg-lime" />
                {t.hero.role}
              </span>
              <span className="inline-flex items-center gap-1.5 mono text-xs uppercase tracking-widest text-ink-400">
                <MapPin className="w-3.5 h-3.5" />
                Xorazm, Pitnak · UZ
              </span>
            </div>

            <p className="mt-8 max-w-2xl text-lg sm:text-xl text-ink-300 leading-relaxed text-balance">
              {t.hero.intro}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <button
                onClick={() => scrollToId('projects')}
                className="group inline-flex items-center gap-2 pl-5 pr-3 py-3 rounded-full bg-lime text-zinc-950 font-medium hover:bg-lime-soft transition-colors"
              >
                {t.hero.cta.primary}
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-zinc-950 text-lime group-hover:rotate-45 transition-transform">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </button>
              <button
                onClick={() => scrollToId('contact')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full hairline text-ink-100 hover:border-white/20 hover:bg-white/[0.03] transition-colors"
              >
                {t.hero.cta.secondary}
              </button>
            </div>

            <div className="mt-14 grid grid-cols-3 max-w-lg gap-px hairline rounded-2xl overflow-hidden bg-white/[0.04]">
              {t.hero.stats.map((s) => (
                <div key={s.label} className="bg-ink-950 p-4 sm:p-5">
                  <div className="display-text text-3xl sm:text-4xl text-lime">
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
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-lime/40 to-transparent blur-3xl opacity-60 -z-10" />

              <div className="relative w-[260px] sm:w-[300px] lg:w-[340px] aspect-[3/4] rounded-[2rem] overflow-hidden hairline">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: 'url(/profile.jpg)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/10 to-transparent" />

                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <span className="mono text-[10px] uppercase tracking-widest text-ink-100/90 px-2 py-1 rounded-full bg-ink-950/40 backdrop-blur">
                    SK · 2026
                  </span>
                  <span className="mono text-[10px] uppercase tracking-widest text-ink-100/90 px-2 py-1 rounded-full bg-ink-950/40 backdrop-blur">
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

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
                className="absolute -top-6 -right-6 w-20 h-20 rounded-full hairline bg-ink-900/80 backdrop-blur flex items-center justify-center"
              >
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <defs>
                    <path
                      id="circle"
                      d="M 50,50 m -36,0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0"
                    />
                  </defs>
                  <text className="mono text-[9px] fill-ink-300 uppercase tracking-[0.3em]">
                    <textPath href="#circle">
                      Available · Available · Available ·{' '}
                    </textPath>
                  </text>
                </svg>
                <div className="absolute inset-0 m-auto w-3 h-3 rounded-full bg-lime" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        <button
          onClick={() => scrollToId('about')}
          className="hidden md:flex absolute -bottom-8 lg:bottom-4 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-ink-400 hover:text-lime transition-colors"
        >
          <span className="mono text-[10px] uppercase tracking-[0.3em]">scroll</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </button>
      </div>
    </section>
  )
}

export default Hero
