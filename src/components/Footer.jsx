const navLinks = ['About', 'Projects', 'Skills', 'Contact']
const services = ['Web Development', 'UI/UX Design', 'API Development', 'Cloud Architecture', 'AI Integration']
const contactInfo = [
  { label: 'vishnusabari876@gmail.com', href: 'mailto:vishnusabari876@gmail.com' },
  { label: '+91 6374051482', href: '#' },
  { label: 'Tiruppur, India', href: '#' },
]
const socials = [
  { icon: 'fab fa-github', label: 'GitHub', href: 'https://github.com/VISHNUSABARI876' },
  { icon: 'fab fa-linkedin-in', label: 'LinkedIn', href: 'https://www.linkedin.com/in/vishnusabarivadivel/' },
  { icon: 'fab fa-x-twitter', label: 'Twitter', href: '#' },
  { icon: 'fab fa-dribbble', label: 'Dribbble', href: '#' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3>Vishnu Sabari</h3>
            <p>Full Stack Developer crafting premium digital experiences with modern web technologies. Based in Chennai, India.</p>
          </div>
          <div className="footer-col">
            <h4>Navigation</h4>
            {navLinks.map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`}>{l}</a>
            ))}
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            {services.map((s) => <a key={s} href="#">{s}</a>)}
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            {contactInfo.map((c) => <a key={c.label} href={c.href}>{c.label}</a>)}
          </div>
        </div>
        <div className="footer-bottom">
          <span>&copy; 2026 Vishnu Sabari. Crafted with care.</span>
          <div className="footer-socials">
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}><i className={s.icon} /></a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
