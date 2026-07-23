import { useState } from 'react'
import useScrollReveal from '../hooks/useScrollReveal'

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY

export default function Contact() {
  const r1 = useScrollReveal()
  const r2 = useScrollReveal()
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => setForm({ ...form, [e.target.id]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          ...form,
        }),
      })
      const data = await res.json()
      if (data.success) {
        setStatus('sent')
        setForm({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setStatus('idle'), 3000)
      } else {
        setStatus('error')
        setTimeout(() => setStatus('idle'), 3000)
      }
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3000)
    }
  }

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-label"><i className="fas fa-envelope" /> Get in Touch</div>
          <h2 className="section-title">Let's Build Something Great</h2>
          <p className="section-subtitle">
            Have a project in mind or just want to chat? Drop me a message.
          </p>
        </div>
        <div className="contact-grid">
          <div ref={r1} className="contact-info reveal">
            <h3>Let's Create<br />Together</h3>
            <p>
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <div className="contact-links">
              <a href="mailto:vishnusabari876@gmail.com" className="contact-link">
                <i className="fas fa-envelope" /> vishnusabari876@gmail.com
              </a>
              <a href="https://github.com/VISHNUSABARI876" target="_blank" rel="noopener noreferrer" className="contact-link">
                <i className="fab fa-github" /> github.com/VISHNUSABARI876
              </a>
              <a href="https://www.linkedin.com/in/vishnusabarivadivel/" target="_blank" rel="noopener noreferrer" className="contact-link">
                <i className="fab fa-linkedin" /> linkedin.com/in/vishnusabarivadivel
              </a>
              <a href="https://twitter.com/vishnusabari" target="_blank" rel="noopener noreferrer" className="contact-link">
                <i className="fab fa-x-twitter" /> @vishnusabari
              </a>
            </div>
          </div>

          <form ref={r2} className="contact-form reveal reveal-delay-1" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" placeholder="John Doe" value={form.name} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" placeholder="john@example.com" value={form.email} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" placeholder="Project Collaboration" value={form.subject} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" placeholder="Tell me about your project..." value={form.message} onChange={handleChange} required />
            </div>
            <button
              type="submit"
              className="form-btn"
              disabled={status === 'sending'}
              style={status === 'sent' ? { background: 'var(--success)' } : {}}
            >
              {status === 'idle' && <>Send Message <i className="fas fa-arrow-right" style={{ marginLeft: 8 }} /></>}
              {status === 'sending' && <><i className="fas fa-spinner fa-spin" /> Sending...</>}
              {status === 'sent' && <><i className="fas fa-check" /> Message Sent!</>}
              {status === 'error' && <><i className="fas fa-exclamation-circle" /> Something went wrong</>}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
