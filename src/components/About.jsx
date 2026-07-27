import useScrollReveal from '../hooks/useScrollReveal'

const BriefcaseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
)

const GraduationIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c3 3 9 3 12 0v-5" />
  </svg>
)

const CodeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
)

const GlobeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
)

const cards = [
  { icon: <BriefcaseIcon />, title: 'Experience', desc: '1+ year professional experience including a 6-month internship in Full Stack Development.' },
  { icon: <GraduationIcon />, title: 'Education', desc: 'B.E in CSE(AIML) from Velalar College of Engineering and Technology, Erode.' },
  { icon: <CodeIcon />, title: 'Code', desc: '50K+ lines of production code shipped across 20+ projects.' },
  { icon: <GlobeIcon />, title: 'Impact', desc: 'Built apps serving 100K+ users with 99.9% uptime.' },
]

export default function About() {
  const r1 = useScrollReveal()
  const r2 = useScrollReveal()

  return (
    <section className="about" id="about">
      <div className="container">
        <div className="section-header">
          <div className="section-label"><i className="fas fa-user" aria-hidden="true" /> About Me</div>
          <h2 className="section-title">Beyond the Code</h2>
            <p className="section-subtitle">
            Full Stack Developer &amp; AI/ML Engineer passionate about building elegant web applications, scalable APIs, and intelligent AI-powered solutions.
          </p>
        </div>
        <div className="about-grid">
          <div ref={r1} className="about-text reveal">
            <h3>Building the Future,<br />One Line at a Time</h3>
            <p>
              I'm a Full Stack Developer and AI & Machine Learning engineer passionate about building modern web applications with React, Node.js, Python, and TypeScript. I specialize in creating responsive, accessible user interfaces that combine clean design with practical engineering and intelligent AI-powered solutions.
            </p>
            <p>
              My approach blends full-stack development skills with a continuous learning mindset, ensuring every project delivers real value. From architecting scalable backend systems with Node.js and PostgreSQL to crafting intuitive frontend experiences with React and Tailwind CSS, I enjoy transforming ideas into reliable, performant digital products.
            </p>
            <div className="about-cards">
              {cards.map((c) => (
                <div key={c.title} className="about-card">
                  <div className="icon" aria-hidden="true">{c.icon}</div>
                  <h4>{c.title}</h4>
                  <p>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div ref={r2} className="about-visual reveal reveal-delay-1">
            <div className="about-visual-frame">
              <img src="/profile.jpeg" alt="Vishnu Sabari workspace" />
              <div className="about-visual-badge">
                <div className="about-badge-inner">
                  <div className="about-badge-avatar" aria-hidden="true">VS</div>
                  <div>
                    <div className="about-badge-name">Vishnu Sabari</div>
                    <div className="about-badge-role">Full Stack Developer</div>
                  </div>
                  <div className="about-badge-status">
                    <span className="about-badge-dot" aria-hidden="true" /> Open to Work
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
