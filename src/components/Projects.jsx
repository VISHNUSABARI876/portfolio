import useScrollReveal from '../hooks/useScrollReveal'

const projects = [
  {
    img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop&auto=format',
    category: 'Artificial Intelligence',
    title: 'AI Assistant — Intelligent Workspace',
    desc: 'A full-stack AI assistant featuring conversational chat, PDF summarization, code generation, and secure file management. Built with React/Vite frontend and Python/Flask backend, powered by Google Gemini and transformer models.',
    tech: ['React', 'Flask', 'Tailwind CSS', 'Google Gemini', 'PyTorch', 'SQLAlchemy'],
    github: 'https://github.com/VISHNUSABARI876/AI-ASSISTANT',
    demo: 'https://ai-assistant-eight-mu.vercel.app',
    delay: '',
  },
  {
    img: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop&auto=format',
    category: 'Computer Vision',
    title: 'AI Detection for Images & Videos',
    desc: 'Deep learning-powered system for detecting and analyzing objects in images and video streams. Features a Flask backend with real-time processing capabilities and an intuitive web interface.',
    tech: ['Python', 'Flask', 'OpenCV', 'TensorFlow', 'HTML/CSS', 'REST API'],
    github: 'https://github.com/VISHNUSABARI876/AI',
    demo: null,
    delay: 'reveal-delay-1',
  },
]

export default function Projects() {
  const r0 = useScrollReveal()

  return (
    <section className="projects" id="projects">
      <div className="container">
        <div ref={r0} className="section-header reveal">
          <div className="section-label"><i className="fas fa-folder-open" /> Featured Work</div>
          <h2 className="section-title">Selected Projects</h2>
          <p className="section-subtitle">
            Each project represents a unique challenge solved with thoughtful architecture and clean code.
          </p>
        </div>

        {projects.map((p, i) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  )
}

function ProjectCard({ img, category, title, desc, tech, github, demo, delay }) {
  const ref = useScrollReveal()

  return (
    <div ref={ref} className={`project-card reveal ${delay}`}>
      <div className="project-image">
        <img src={img} alt={title} />
        <div className="project-overlay">
          <div className="project-links">
            <a href={github} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '10px 20px', fontSize: '0.82rem' }}>
              <i className="fab fa-github" /> GitHub
            </a>
            {demo && (
              <a href={demo} target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{
                padding: '10px 20px', fontSize: '0.82rem',
                background: 'rgba(255,255,255,0.15)', color: '#fff', borderColor: 'rgba(255,255,255,0.3)',
              }}>
                <i className="fas fa-external-link-alt" /> Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="project-content">
        <span className="project-status live">
          <i className="fas fa-circle" style={{ fontSize: '0.4rem' }} /> {demo ? 'Live' : 'Alpha'}
        </span>
        <div className="project-category">{category}</div>
        <h3>{title}</h3>
        <p>{desc}</p>
        <div className="project-tech">
          {tech.map((t) => <span key={t}>{t}</span>)}
        </div>
        <div className="project-links">
          <a href={github} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '10px 24px', fontSize: '0.85rem' }}>
            <i className="fab fa-github" /> Source Code
          </a>
          {demo && (
            <a href={demo} target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ padding: '10px 24px', fontSize: '0.85rem' }}>
              <i className="fas fa-external-link-alt" /> Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
