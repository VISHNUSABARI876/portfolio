import useScrollReveal from '../hooks/useScrollReveal'

export default function Hero() {
  const r1 = useScrollReveal()
  const r2 = useScrollReveal()
  const r3 = useScrollReveal()
  const r4 = useScrollReveal()
  const r5 = useScrollReveal()

  return (
    <section className="hero" id="home">
      <div className="hero-blob" aria-hidden="true" />
      <div className="hero-blob" aria-hidden="true" />
      <div className="container">
        <div className="hero-grid">
          <div className="hero-left">
            <div ref={r1} className="reveal hero-badge">
              <span className="emoji" aria-hidden="true">👋</span> Hello, I'm
            </div>
            <h1 ref={r2} className="reveal reveal-delay-1 hero-title">
              Vishnu<br /><span className="gradient-text">Sabari</span>
            </h1>
            <div ref={r3} className="reveal reveal-delay-2 hero-role">
              Full Stack Developer <span className="separator" aria-hidden="true" /> UI Engineer{' '}
              <span className="typing-cursor" aria-hidden="true" />
            </div>
            <p ref={r4} className="reveal reveal-delay-2 hero-desc">
              Full Stack Developer &amp; UI Engineer specializing in React, Node.js, Python,
              and AI-powered solutions. I build beautiful, performant, and accessible
              applications that users love.
            </p>
            <div ref={r5} className="reveal reveal-delay-3 hero-buttons">
              <button className="btn btn-primary" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                View Projects <i className="fas fa-arrow-right" aria-hidden="true" />
              </button>
              <a className="btn btn-secondary" href="/VISHNUSABARI RESUME.pdf" download>
                <i className="fas fa-download" aria-hidden="true" /> Download Resume
              </a>
            </div>
          </div>

          <div className="hero-visual reveal reveal-delay-4">
            <div className="hero-ring" aria-hidden="true" />
            <div className="hero-ring" aria-hidden="true" />
            <div className="hero-image-wrap">
              <img
                src="/profile.jpeg"
                alt="Vishnu Sabari — Full Stack Developer"
              />
            </div>
            <div className="floating-card" aria-hidden="true">
              <i className="fab fa-react" /> React <span className="sr-only">Live</span>
              <span aria-hidden="true" style={{ color: 'var(--success)', fontSize: '0.65rem' }}>● Live</span>
            </div>
            <div className="floating-card" aria-hidden="true">
              <i className="fab fa-node-js" /> Node.js <span className="sr-only">version 18</span>
              <span aria-hidden="true" style={{ color: 'var(--text-muted)', fontSize: '0.65rem' }}>● v18</span>
            </div>
            <div className="floating-card" aria-hidden="true">
              <i className="fas fa-code" /> 1+ yr exp.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
