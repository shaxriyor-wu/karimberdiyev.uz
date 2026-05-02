import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { cx } from '../lib/utils'

type Props = {
  id: string
  eyebrow: string
  headline: string
  sub?: string
  children: ReactNode
  className?: string
  index: string
}

const Section = ({ id, eyebrow, headline, sub, children, className, index }: Props) => {
  return (
    <section id={id} className={cx('relative py-24 lg:py-32', className)}>
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 lg:mb-20"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="eyebrow">{index}</span>
            <span className="h-px flex-1 max-w-[80px] bg-white/10" />
            <span className="eyebrow">{eyebrow}</span>
          </div>
          <h2 className="display-text text-[clamp(2.4rem,7vw,5.5rem)] text-balance">
            {headline}
          </h2>
          {sub && (
            <p className="mt-4 text-base sm:text-lg text-ink-300 max-w-2xl text-balance">
              {sub}
            </p>
          )}
        </motion.div>

        {children}
      </div>
    </section>
  )
}

export default Section
