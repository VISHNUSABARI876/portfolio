import { useEffect, useRef } from 'react'

export default function MouseFollower() {
  const ref = useRef(null)
  const pos = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const isTouch = 'ontouchstart' in window
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (isTouch || prefersReduced) return

    const el = ref.current
    if (!el) return
    let folX = 0, folY = 0

    const onMouse = (e) => {
      pos.current.x = e.clientX
      pos.current.y = e.clientY
    }

    const animate = () => {
      folX += (pos.current.x - folX) * 0.15
      folY += (pos.current.y - folY) * 0.15
      el.style.left = folX + 'px'
      el.style.top = folY + 'px'
      raf = requestAnimationFrame(animate)
    }

    let raf = requestAnimationFrame(animate)
    document.addEventListener('mousemove', onMouse, { passive: true })

    return () => {
      document.removeEventListener('mousemove', onMouse)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div
      ref={ref}
      className="mouse-follower"
      aria-hidden="true"
    />
  )
}
