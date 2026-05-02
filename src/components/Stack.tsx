import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'
import Section from './Section'
import { stackGroups, stackMarquee } from '../data/stack'

const Stack = () => {
  const { t, lang } = useLanguage()

  return (
    <Section
      id="stack"
      index="04"
      eyebrow={t.stack.eyebrow}
      headline={t.stack.headline}
      sub={t.stack.sub}
    >
      <div className="grid grid-cols-12 gap-4">
        {stackGroups.map((g, idx) => (
          <motion.div
            key={g.title.en}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: idx * 0.06 }}
            className="col-span-12 sm:col-span-6 lg:col-span-3 rounded-3xl hairline p-6 bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
          >
            <div className="flex items-center justify-between mb-5">
              <span className="eyebrow">{g.title[lang]}</span>
              <span className="mono text-[10px] text-ink-500">
                0{idx + 1}/0{stackGroups.length}
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {g.items.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1.5 rounded-full bg-white/[0.04] hairline text-sm text-ink-100 hover:border-lime/40 hover:text-lime transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-14 relative overflow-hidden mask-fade-x py-3">
        <div className="flex gap-3 sm:gap-4 animate-marquee whitespace-nowrap">
          {[...stackMarquee, ...stackMarquee].map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="inline-flex items-center gap-3 shrink-0 px-5 py-3 rounded-full hairline bg-white/[0.04] mono text-xs sm:text-sm uppercase tracking-[0.18em] text-ink-100"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-lime" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default Stack
