import { motion } from 'framer-motion'
import { Award, ExternalLink } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import Section from './Section'
import { credentials } from '../data/credentials'

const Credentials = () => {
  const { t, lang } = useLanguage()

  return (
    <Section
      id="credentials"
      index="05"
      eyebrow={t.credentials.eyebrow}
      headline={t.credentials.headline}
    >
      <div className="grid grid-cols-12 gap-4">
        {credentials.map((c, idx) => {
          const Wrapper = c.link ? 'a' : 'div'
          return (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="col-span-12 lg:col-span-4"
            >
              <Wrapper
                {...(c.link
                  ? { href: c.link, target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
                className="group relative block h-full p-6 sm:p-8 rounded-3xl hairline bg-gradient-to-br from-white/[0.04] to-transparent hover:border-lime/30 transition-colors"
              >
                <div className="flex items-start justify-between mb-8">
                  <div className="inline-flex items-center justify-center w-11 h-11 rounded-2xl bg-lime/10 text-lime border border-lime/20">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="mono text-xs uppercase tracking-widest text-ink-400">
                    {c.date}
                  </span>
                </div>

                <h3 className="display-text text-2xl sm:text-3xl text-ink-100 leading-tight">
                  {c.title}
                </h3>
                <div className="mt-2 text-sm text-ink-400">{c.provider}</div>

                <div className="mt-6 pt-6 border-t border-white/[0.06] flex items-center justify-between">
                  <span className="text-sm text-ink-200">{c.detail[lang]}</span>
                  {c.link && (
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full hairline text-ink-300 group-hover:bg-lime group-hover:border-lime group-hover:text-zinc-950 transition-colors">
                      <ExternalLink className="w-3.5 h-3.5" />
                    </span>
                  )}
                </div>
              </Wrapper>
            </motion.div>
          )
        })}
      </div>
    </Section>
  )
}

export default Credentials
