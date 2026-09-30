import { motion } from 'framer-motion'
import { ArrowUpRight, Github, MessageCircle } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import Section from './Section'
import { projects, projectCtaText } from '../data/projects'
import { cx } from '../lib/utils'

const sizeClass = {
  lg: 'col-span-12 lg:col-span-8 lg:row-span-2 min-h-[420px]',
  md: 'col-span-12 sm:col-span-6 lg:col-span-4 min-h-[280px]',
  sm: 'col-span-6 lg:col-span-3 min-h-[240px]',
}

const Projects = () => {
  const { t, lang } = useLanguage()

  return (
    <Section
      id="projects"
      index="03"
      eyebrow={t.projects.eyebrow}
      headline={t.projects.headline}
      sub={t.projects.sub}
    >
      <div className="grid grid-cols-12 gap-3 sm:gap-4 auto-rows-min">
        {projects.map((p, idx) => {
          const Icon = p.cta === 'code' ? Github : p.cta === 'bot' ? MessageCircle : ArrowUpRight
          return (
            <motion.a
              key={p.id}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: (idx % 6) * 0.05 }}
              className={cx(
                'group relative overflow-hidden rounded-lg hairline bg-white/[0.02] p-5 sm:p-6 flex flex-col justify-between transition-all',
                'hover:bg-white/[0.04]',
                'hover:border-lime/40',
                sizeClass[p.size],
              )}
            >
              <div className="relative flex items-start justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span className="mono text-[10px] uppercase tracking-widest text-ink-500">
                    {p.number}
                  </span>
                  <span className="h-px w-6 bg-white/10" />
                  <span className={'mono text-[10px] uppercase tracking-widest text-lime'}>
                    {p.kind}
                  </span>
                </div>
                <span className="mono text-[10px] uppercase tracking-widest text-ink-500">
                  {p.year}
                </span>
              </div>

              <div className="relative mt-auto pt-8">
                <h3
                  className={cx(
                    'display-text text-balance',
                    p.size === 'lg'
                      ? 'text-4xl sm:text-5xl'
                      : p.size === 'md'
                      ? 'text-2xl sm:text-3xl'
                      : 'text-xl sm:text-2xl',
                  )}
                >
                  {p.titles[lang]}
                </h3>

                {p.size !== 'sm' && (
                  <p className="mt-3 text-sm text-ink-300 leading-relaxed line-clamp-3">
                    {p.descriptions[lang]}
                  </p>
                )}

                <div className="mt-5 flex flex-wrap items-center gap-2">
                  {p.tags.slice(0, p.size === 'lg' ? 4 : 3).map((tag) => (
                    <span
                      key={tag}
                      className="mono text-[10px] uppercase tracking-widest px-2 py-1 rounded bg-white/5 text-ink-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <span className="text-sm text-ink-100 inline-flex items-center gap-1.5">
                    {projectCtaText(p.cta, t)}
                    <Icon className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                  <span
                    className={cx(
                      'inline-flex items-center justify-center w-9 h-9 rounded-md hairline transition-colors',
                      'group-hover:bg-lime group-hover:border-lime group-hover:text-zinc-950',
                    )}
                  >
                    <ArrowUpRight className="w-4 h-4 group-hover:rotate-0 -rotate-45 transition-transform" />
                  </span>
                </div>
              </div>
            </motion.a>
          )
        })}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55 }}
          className="col-span-12 lg:col-span-12 relative overflow-hidden rounded-lg hairline bg-ink-800 text-ink-100 p-8 sm:p-10 lg:p-12 mt-2"
        >
          <div className="grid grid-cols-12 gap-6 items-center">
            <div className="col-span-12 lg:col-span-8">
              <div className="mono text-[10px] uppercase tracking-widest mb-3">
                — {t.projects.discussTitle}
              </div>
              <h3 className="display-text text-3xl sm:text-4xl lg:text-5xl">
                {t.projects.discussBody}
              </h3>
            </div>
            <div className="col-span-12 lg:col-span-4 lg:text-right">
              <a
                href="https://t.me/shakh_wu"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 pl-5 pr-2 py-2.5 rounded-md bg-ink-100 text-ink-950 text-sm font-medium"
              >
                {t.projects.discussCta}
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-ink-950 text-ink-100">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </a>
            </div>
          </div>

        </motion.div>
      </div>
    </Section>
  )
}

export default Projects
