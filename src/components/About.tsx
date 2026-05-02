import { motion } from 'framer-motion'
import { GraduationCap, Sparkles, Languages } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import Section from './Section'

const About = () => {
  const { t } = useLanguage()

  return (
    <Section
      id="about"
      index="01"
      eyebrow={t.about.eyebrow}
      headline={t.about.headline}
    >
      <div className="grid grid-cols-12 gap-6 lg:gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="col-span-12 lg:col-span-7 space-y-5"
        >
          {t.about.body.map((p, i) => (
            <p
              key={i}
              className="text-lg sm:text-xl text-ink-200 leading-relaxed text-balance"
            >
              {i === 0 ? (
                <>
                  <span className="inline-block accent-text mono mr-2">▍</span>
                  {p}
                </>
              ) : (
                p
              )}
            </p>
          ))}

          <div className="grid sm:grid-cols-2 gap-4 pt-6">
            <Card icon={<GraduationCap className="w-4 h-4" />} title={t.about.education.title}>
              <div className="text-ink-100 text-sm font-medium">
                {t.about.education.line1}
              </div>
              <div className="text-ink-400 text-xs mt-1.5">
                {t.about.education.line2}
              </div>
            </Card>

            <Card icon={<Languages className="w-4 h-4" />} title={t.about.languages.title}>
              <ul className="space-y-1.5">
                {t.about.languages.items.map((l) => (
                  <li
                    key={l.name}
                    className="flex items-center justify-between text-sm"
                  >
                    <span className="text-ink-100">{l.name}</span>
                    <span className="mono text-[10px] uppercase tracking-widest text-ink-400">
                      {l.level}
                    </span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="col-span-12 lg:col-span-5"
        >
          <div className="relative rounded-3xl hairline overflow-hidden p-6 sm:p-8 bg-gradient-to-br from-white/[0.04] to-transparent h-full">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="w-4 h-4 text-lime" />
              <span className="eyebrow">{t.about.soft.title}</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {t.about.soft.items.map((s, i) => (
                <span
                  key={s}
                  className="px-3 py-1.5 rounded-full hairline text-sm text-ink-200 hover:border-lime/40 hover:text-lime transition-colors"
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  {s}
                </span>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-white/[0.06]">
              <div className="grid grid-cols-3 gap-4">
                {[
                  { v: '∞', l: 'Curiosity' },
                  { v: '24/7', l: 'Build mode' },
                  { v: '0', l: 'Excuses' },
                ].map((s) => (
                  <div key={s.l}>
                    <div className="display-text text-2xl text-ink-100">{s.v}</div>
                    <div className="mono text-[10px] uppercase tracking-widest text-ink-400 mt-1">
                      {s.l}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="absolute -bottom-16 -right-16 w-48 h-48 rounded-full opacity-30 blur-3xl pointer-events-none"
              style={{
                background:
                  'radial-gradient(circle, #c4f154 0%, transparent 70%)',
              }}
            />
          </div>
        </motion.div>
      </div>
    </Section>
  )
}

const Card = ({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode
  title: string
  children: React.ReactNode
}) => (
  <div className="rounded-2xl hairline p-5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
    <div className="flex items-center gap-2 mb-3 text-lime">
      {icon}
      <span className="eyebrow text-lime">{title}</span>
    </div>
    {children}
  </div>
)

export default About
