import { useRef, useCallback } from 'react'

export default function TiltCard({ children, className, style, intensity = 8 }) {
  const ref = useRef()

  const handleMove = useCallback((e) => {
    const rect = ref.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    ref.current.style.transform =
      `perspective(800px) rotateY(${x * intensity}deg) rotateX(${-y * intensity}deg) scale(1.02)`
  }, [intensity])

  const handleLeave = useCallback(() => {
    ref.current.style.transform = 'perspective(800px) rotateY(0) rotateX(0) scale(1)'
  }, [])

  return (
    <div
      ref={ref}
      className={className}
      style={{ transition: 'transform .35s ease', willChange: 'transform', ...style }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {children}
    </div>
  )
}
