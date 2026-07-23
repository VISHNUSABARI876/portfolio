const techs = [
  { icon: 'fab fa-react', label: 'React' },
  { icon: 'fab fa-vuejs', label: 'Vue.js' },
  { icon: 'fab fa-node-js', label: 'Node.js' },
  { icon: 'fab fa-python', label: 'Python' },
  { icon: 'fab fa-js', label: 'TypeScript' },
  { icon: 'fas fa-database', label: 'PostgreSQL' },
  { icon: 'fas fa-cloud', label: 'AWS' },
  { icon: 'fab fa-docker', label: 'Docker' },
  { icon: 'fab fa-graphql', label: 'GraphQL' },
  { icon: 'fas fa-fire', label: 'Next.js' },
]

export default function TechStack() {
  return (
    <section className="tech-stack">
      <div className="marquee">
        <div className="marquee-group">
          {techs.map((t) => (
            <span key={t.label} className="tech-pill">
              <i className={t.icon} /> {t.label}
            </span>
          ))}
        </div>
        <div className="marquee-group">
          {techs.map((t) => (
            <span key={`dup-${t.label}`} className="tech-pill">
              <i className={t.icon} /> {t.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
