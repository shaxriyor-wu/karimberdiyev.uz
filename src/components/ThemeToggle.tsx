import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'

const ThemeToggle = () => {
  const { theme, toggle } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      onClick={toggle}
      className={[
        'relative inline-flex items-center shrink-0 h-7 w-[52px] rounded-full',
        'transition-colors duration-300 ease-out',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2',
        isDark
          ? 'bg-lime focus-visible:ring-offset-ink-950'
          : 'bg-zinc-300 focus-visible:ring-offset-white',
      ].join(' ')}
    >
      <span className="absolute inset-0 flex items-center justify-between px-1.5 pointer-events-none">
        <Sun
          className={[
            'w-3.5 h-3.5 transition-opacity duration-300',
            isDark ? 'opacity-30 text-ink-950' : 'opacity-90 text-amber-500',
          ].join(' ')}
        />
        <Moon
          className={[
            'w-3.5 h-3.5 transition-opacity duration-300',
            isDark ? 'opacity-90 text-ink-950' : 'opacity-30 text-zinc-500',
          ].join(' ')}
        />
      </span>

      <motion.span
        animate={{ x: isDark ? 24 : 0 }}
        transition={{ type: 'spring', stiffness: 500, damping: 32 }}
        className="relative ml-0.5 inline-block w-6 h-6 rounded-full bg-white shadow-[0_2px_6px_rgba(0,0,0,0.25)]"
      />
    </button>
  )
}

export default ThemeToggle
