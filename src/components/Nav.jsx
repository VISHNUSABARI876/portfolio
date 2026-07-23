import { useState, useEffect } from 'react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      const sections = document.querySelectorAll('section[id]')
      let current = ''
      sections.forEach((s) => {
        if (window.scrollY >= s.offsetTop - 120) current = s.id
      })
      setActive(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        <a href="#" className="nav-logo" onClick={(e) => scrollTo(e, '#home')}>
          <span>VS</span> Vishnu Sabari
        </a>

        <div className="nav-links">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={active === l.href.slice(1) ? 'active' : ''}
              onClick={(e) => scrollTo(e, l.href)}
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <div className="nav-status">
            <span className="dot" /> Available for Work
          </div>
          <button className="nav-cta" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Let's Talk
          </button>
          <button
            className={`nav-mobile ${menuOpen ? 'active' : ''}`}
            onClick={() => setMenuOpen((p) => !p)}
            aria-label="Menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="mobile-overlay open">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={(e) => scrollTo(e, l.href)}>
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
