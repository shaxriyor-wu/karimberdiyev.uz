import { motion, useScroll, useSpring } from 'framer-motion'

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.2 })
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 inset-x-0 h-[2px] bg-lime origin-left z-[60]"
    />
  )
}

export default ScrollProgress
