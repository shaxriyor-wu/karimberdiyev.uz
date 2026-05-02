import { motion } from 'framer-motion'
import { ArrowUpRight, Send } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import Section from './Section'
import { contacts } from '../data/contacts'

const Contact = () => {
  const { t } = useLanguage()

  return (
    <Section
      id="contact"
      index="06"
      eyebrow={t.contact.eyebrow}
      headline={t.contact.headline}
      sub={t.contact.sub}
    >
      <div className="grid grid-cols-12 gap-4">
        <motion.a
          href="https://t.me/shakh_wu"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="col-span-12 lg:col-span-7 group relative overflow-hidden rounded-3xl bg-lime text-zinc-950 p-8 sm:p-12 min-h-[280px] flex flex-col justify-between"
        >
          <div className="flex items-center gap-2 mono text-xs uppercase tracking-widest">
            <Send className="w-3.5 h-3.5" />
            {t.contact.cta}
          </div>

          <div>
            <div className="display-text text-5xl sm:text-7xl">
              say
              <br />
              hello
              <span className="text-zinc-950/50">.</span>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <span className="mono text-xs uppercase tracking-widest text-zinc-950/70">
                t.me/shakh_wu
              </span>
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-zinc-950 text-lime group-hover:rotate-45 transition-transform">
                <ArrowUpRight className="w-5 h-5" />
              </span>
            </div>
          </div>

          <div
            className="absolute inset-0 opacity-30 pointer-events-none"
            style={{
              backgroundImage:
                'radial-gradient(circle at 20% 100%, rgba(0,0,0,0.4) 0%, transparent 50%)',
            }}
          />
        </motion.a>

        <div className="col-span-12 lg:col-span-5 grid grid-cols-1 gap-3">
          {contacts.map((c, idx) => (
            <motion.a
              key={c.id}
              href={c.href}
              target={c.href.startsWith('http') ? '_blank' : undefined}
              rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              className="group flex items-center justify-between gap-4 p-5 rounded-2xl hairline bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
            >
              <div className="min-w-0 flex-1">
                <div
                  className="mono text-[10px] uppercase tracking-widest mb-1"
                  style={{ color: c.hue }}
                >
                  {c.label}
                </div>
                <div className="text-ink-100 text-sm truncate">{c.handle}</div>
              </div>
              <span className="inline-flex items-center justify-center w-9 h-9 rounded-full hairline text-ink-300 group-hover:bg-lime group-hover:border-lime group-hover:text-zinc-950 transition-colors flex-shrink-0">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default Contact
