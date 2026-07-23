const items = [
  { href: '#home', icon: 'fas fa-house', label: 'Home' },
  { href: '#about', icon: 'fas fa-user', label: 'About' },
  { href: '#projects', icon: 'fas fa-folder-open', label: 'Projects' },
  { href: '#skills', icon: 'fas fa-code', label: 'Skills' },
  { href: '#contact', icon: 'fas fa-envelope', label: 'Contact' },
]

export default function Dock() {
  const scrollTo = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="dock">
      {items.map((item) => (
        <a
          key={item.label}
          href={item.href}
          onClick={(e) => { e.preventDefault(); scrollTo(item.href) }}
          aria-label={item.label}
        >
          <i className={item.icon} />
        </a>
      ))}
    </div>
  )
}
