import { motion } from 'framer-motion'
import { Briefcase, Wifi } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import Section from './Section'

const Experience = () => {
  const { t } = useLanguage()

  return (
    <Section
      id="work"
      index="02"
      eyebrow={t.experience.eyebrow}
      headline={t.experience.headline}
    >
      <div className="space-y-8">
        {t.experience.items.map((item, idx) => (
          <motion.article
            key={item.role}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: idx * 0.08 }}
            className="group relative grid grid-cols-12 gap-4 lg:gap-8 p-6 sm:p-8 lg:p-10 rounded-3xl hairline bg-gradient-to-br from-white/[0.03] to-transparent hover:border-white/15 transition-colors"
          >
            <div className="col-span-12 lg:col-span-3">
              <div className="flex items-center gap-2 mono text-xs uppercase tracking-widest text-lime mb-2">
                <span className="w-2 h-2 rounded-full bg-lime animate-pulse" />
                {item.period}
              </div>
              <div className="flex items-center gap-2 text-ink-400 text-xs mono uppercase tracking-widest">
                <Wifi className="w-3.5 h-3.5" />
                {item.mode}
              </div>
            </div>

            <div className="col-span-12 lg:col-span-9">
              <div className="flex items-start justify-between gap-4 mb-2">
                <div>
                  <h3 className="display-text text-3xl sm:text-4xl text-ink-100">
                    {item.role}
                  </h3>
                  <div className="mt-2 flex items-center gap-2 text-ink-300">
                    <Briefcase className="w-4 h-4 text-lime" />
                    <span className="text-sm">{item.company}</span>
                  </div>
                </div>
                <span className="hidden sm:inline-flex mono text-xs uppercase tracking-widest text-ink-500">
                  0{idx + 1}
                </span>
              </div>

              <ul className="mt-6 space-y-3">
                {item.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-3 text-ink-300 text-sm sm:text-base"
                  >
                    <span className="accent-text mono mt-1 leading-none">→</span>
                    <span className="leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-lime/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.article>
        ))}
      </div>
    </Section>
  )
}

export default Experience
