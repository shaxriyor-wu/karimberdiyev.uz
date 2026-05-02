import { useEffect, useRef, useState } from 'react'

const CursorGlow = () => {
  const ref = useRef<HTMLDivElement | null>(null)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches
    setEnabled(fine)
    if (!fine) return

    let raf = 0
    let x = window.innerWidth / 2
    let y = window.innerHeight / 2

    const onMove = (e: MouseEvent) => {
      x = e.clientX
      y = e.clientY
      if (raf) return
      raf = requestAnimationFrame(() => {
        if (ref.current) {
          ref.current.style.transform = `translate3d(${x - 250}px, ${y - 250}px, 0)`
        }
        raf = 0
      })
    }

    window.addEventListener('mousemove', onMove)
    return () => {
      window.removeEventListener('mousemove', onMove)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  if (!enabled) return null

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div
        ref={ref}
        className="absolute w-[500px] h-[500px] rounded-full opacity-[0.18] blur-3xl will-change-transform"
        style={{
          background:
            'radial-gradient(circle at center, #c4f154 0%, transparent 60%)',
        }}
      />
    </div>
  )
}

export default CursorGlow
