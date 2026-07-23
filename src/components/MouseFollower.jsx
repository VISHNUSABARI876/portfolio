import { useEffect, useRef } from 'react'

export default function MouseFollower() {
  const ref = useRef(null)
  const pos = useRef({ x: 0, y: 0 })
  const isTouch = 'ontouchstart' in window

  useEffect(() => {
    if (isTouch) return

    const el = ref.current
    let folX = 0, folY = 0

    const onMouse = (e) => {
      pos.current.x = e.clientX
      pos.current.y = e.clientY
    }

    const animate = () => {
      folX += (pos.current.x - folX) * 0.15
      folY += (pos.current.y - folY) * 0.15
      if (el) {
        el.style.left = folX + 'px'
        el.style.top = folY + 'px'
      }
      raf = requestAnimationFrame(animate)
    }

    let raf = requestAnimationFrame(animate)
    document.addEventListener('mousemove', onMouse)

    return () => {
      document.removeEventListener('mousemove', onMouse)
      cancelAnimationFrame(raf)
    }
  }, [isTouch])

  if (isTouch) return null

  return (
    <div
      ref={ref}
      style={{
        position: 'fixed',
        width: 12,
        height: 12,
        background: 'var(--accent)',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 9999,
        mixBlendMode: 'difference',
        transform: 'translate(-50%, -50%)',
      }}
    />
  )
}
