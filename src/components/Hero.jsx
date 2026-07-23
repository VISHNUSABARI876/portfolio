import useScrollReveal from '../hooks/useScrollReveal'

export default function Hero() {
  const r1 = useScrollReveal()
  const r2 = useScrollReveal()
  const r3 = useScrollReveal()
  const r4 = useScrollReveal()
  const r5 = useScrollReveal()

  return (
    <section className="hero" id="home">
      <div className="hero-blob" />
      <div className="hero-blob" />
      <div className="container">
        <div className="hero-grid">
          <div className="hero-left">
            <div ref={r1} className="reveal hero-badge">
              <span className="emoji">👋</span> Hello, I'm
            </div>
            <h1 ref={r2} className="reveal reveal-delay-1 hero-title">
              Vishnu<br /><span className="gradient-text">Sabari</span>
            </h1>
            <div ref={r3} className="reveal reveal-delay-2 hero-role">
              Full Stack Developer <span className="separator" /> UI Engineer{' '}
              <span className="typing-cursor" />
            </div>
            <p ref={r4} className="reveal reveal-delay-2 hero-desc">
              Crafting premium digital experiences with modern web technologies.
              I build beautiful, performant, and accessible applications that users love.
            </p>
            <div ref={r5} className="reveal reveal-delay-3 hero-buttons">
              <button className="btn btn-primary" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                View Projects <i className="fas fa-arrow-right" />
              </button>
              <a className="btn btn-secondary" href="/VISHNUSABARI.pdf" download>
                <i className="fas fa-download" /> Download Resume
              </a>
            </div>
          </div>

          <div className="hero-visual reveal reveal-delay-4">
            <div className="hero-ring" />
            <div className="hero-ring" />
            <div className="hero-image-wrap">
              <img
                src="/profile.jpeg"
                alt="Vishnu Sabari"
              />
            </div>
            <div className="floating-card" style={{ top: '8%', right: '-6%' }}>
              <i className="fab fa-react" /> React{' '}
              <span style={{ color: 'var(--success)', fontSize: '0.65rem' }}>● Live</span>
            </div>
            <div className="floating-card" style={{ bottom: '22%', left: '-10%' }}>
              <i className="fab fa-node-js" /> Node.js{' '}
              <span style={{ color: 'var(--text-muted)', fontSize: '0.65rem' }}>● v18</span>
            </div>
            <div className="floating-card" style={{ bottom: '2%', right: '0%' }}>
              <i className="fas fa-bolt" /> 3+ yrs exp.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
