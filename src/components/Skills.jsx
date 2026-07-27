import useScrollReveal from '../hooks/useScrollReveal'

const skills = [
  { icon: 'fas fa-code', color: '#2563EB', title: 'Frontend', tags: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'] },
  { icon: 'fas fa-server', color: '#6366F1', title: 'Backend', tags: ['Node.js', 'Python', 'FastAPI', 'Express', 'GraphQL', 'REST APIs'] },
  { icon: 'fas fa-database', color: '#22C55E', title: 'Database', tags: ['PostgreSQL', 'MongoDB', 'Redis', 'Prisma', 'Supabase', 'Firebase'] },
  { icon: 'fas fa-robot', color: '#ec4899', title: 'AI & ML', tags: ['TensorFlow', 'LangChain', 'OpenAI', 'Hugging Face', 'PyTorch', 'RAG'] },
  { icon: 'fas fa-cogs', color: '#f59e0b', title: 'DevOps & Tools', tags: ['Docker', 'AWS', 'CI/CD', 'Git', 'Linux', 'Nginx'] },
]

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-label"><i className="fas fa-code" /> Skills & Expertise</div>
          <h2 className="section-title">Tech Stack</h2>
          <p className="section-subtitle">Tools and technologies I work with daily to bring ideas to life.</p>
        </div>
        <div className="skills-grid">
          {skills.map((s, i) => (
            <SkillCard key={s.title} {...s} delay={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function SkillCard({ icon, color, title, tags, delay }) {
  const ref = useScrollReveal()
  const delays = ['', 'reveal-delay-1', 'reveal-delay-2', 'reveal-delay-3', 'reveal-delay-4']

  return (
    <div ref={ref} className={`skill-card reveal ${delays[delay] || ''}`}>
      <div className="icon" style={{ background: `${color}14`, color }}>
        <i className={icon} />
      </div>
      <h4>{title}</h4>
      <div className="skill-tags">
        {tags.map((t) => <span key={t}>{t}</span>)}
      </div>
    </div>
  )
}
