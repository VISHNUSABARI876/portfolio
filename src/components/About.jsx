import useScrollReveal from '../hooks/useScrollReveal'

const cards = [
  { icon: 'fas fa-briefcase', title: 'Experience', desc: '1+ year professional experience including a 6-month internship in Full Stack Development.' },
  { icon: 'fas fa-graduation-cap', title: 'Education', desc: 'B.E in CSE(AIML) from Velalar College of Engineering and Technology, Erode.' },
  { icon: 'fas fa-code', title: 'Code', desc: '50K+ lines of production code shipped across 20+ projects.' },
  { icon: 'fas fa-globe', title: 'Impact', desc: 'Built apps serving 100K+ users with 99.9% uptime.' },
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
            A passionate developer who believes in crafting elegant solutions through clean code and thoughtful design.
          </p>
        </div>
        <div className="about-grid">
          <div ref={r1} className="about-text reveal">
            <h3>Building the Future,<br />One Line at a Time</h3>
            <p>
              I'm a Full Stack Developer and AI & Machine Learning student passionate about building modern web applications. I specialize in creating responsive user experiences that combine clean design with practical development and intelligent AI-powered solutions.
            </p>
            <p>
              My approach blends technical skills with a continuous learning mindset, ensuring every project I build delivers real value. From developing scalable backend systems to crafting intuitive frontend interfaces, I enjoy transforming ideas into innovative, reliable, and user-friendly digital experiences.
            </p>
            <div className="about-cards">
              {cards.map((c) => (
                <div key={c.title} className="about-card">
                  <div className="icon"><i className={c.icon} aria-hidden="true" /></div>
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
