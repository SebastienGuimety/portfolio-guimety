import { useState, useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer'

export default function Counter({ end, suffix = '', duration = 1800 }) {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 })
  const started = useRef(false)

  useEffect(() => {
    if (!inView || started.current) return
    started.current = true

    const num = parseInt(end)
    if (isNaN(num)) { setCount(end); return }

    const steps = 40
    const inc = num / steps
    let current = 0
    let step = 0

    const timer = setInterval(() => {
      step++
      const ease = 1 - Math.pow(1 - step / steps, 3)
      current = Math.round(num * ease)
      setCount(current)
      if (step >= steps) { clearInterval(timer); setCount(num) }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [inView, end, duration])

  return <span ref={ref}>{typeof end === 'string' && isNaN(parseInt(end)) ? end : count}{suffix}</span>
}
