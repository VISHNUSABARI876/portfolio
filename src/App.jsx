import { useEffect, useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import TechStack from './components/TechStack'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Dock from './components/Dock'
import MouseFollower from './components/MouseFollower'

export default function App() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <div className="bg-grid" />
      <MouseFollower />
      <Nav />
      <Hero />
      <TechStack />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
      <Dock />
      {/* Scroll progress */}
      <div className="scroll-progress">
        <div
          className="scroll-progress-bar"
          style={{
            width: `${Math.min(
              (scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100,
              100
            )}%`,
          }}
        />
      </div>
      {/* Back to top */}
      <button
        className={`back-to-top ${scrollY > 400 ? 'visible' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
      >
        <i className="fas fa-arrow-up" />
      </button>
      {/* Command palette */}
      <button className="cmd-btn" aria-label="Command palette">
        <i className="fas fa-terminal" />
      </button>
      <GlobalStyles />
    </>
  )
}

function GlobalStyles() {
  return (
    <style>{`
.scroll-progress{position:fixed;top:var(--nav-height);left:0;right:0;height:2px;z-index:999;background:transparent}
.scroll-progress-bar{height:100%;background:linear-gradient(90deg,var(--accent),var(--accent-alt));width:0%;border-radius:0 2px 2px 0}
.back-to-top{position:fixed;bottom:32px;right:32px;width:44px;height:44px;border-radius:50%;background:var(--text);color:var(--bg);border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:1.1rem;box-shadow:var(--shadow-lg);opacity:0;transform:translateY(20px);transition:var(--transition);z-index:50;pointer-events:none}
.back-to-top.visible{opacity:1;transform:translateY(0);pointer-events:auto}
.back-to-top:hover{background:var(--accent);transform:translateY(-4px)}
.cmd-btn{position:fixed;bottom:24px;right:24px;width:44px;height:44px;border-radius:50%;background:var(--bg-white);border:1px solid var(--border);box-shadow:var(--shadow);display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:1rem;color:var(--text-muted);transition:var(--transition);z-index:90}
.cmd-btn:hover{box-shadow:var(--shadow-lg);color:var(--text);transform:scale(1.05)}
.gradient-section{position:relative}
.gradient-section::before{content:'';position:absolute;top:0;left:0;right:0;bottom:0;background:radial-gradient(ellipse at 20% 50%,rgba(37,99,235,0.03) 0%,transparent 60%),radial-gradient(ellipse at 80% 50%,rgba(99,102,241,0.03) 0%,transparent 60%);pointer-events:none}
.underline-anim{position:relative;display:inline-block}
.underline-anim::after{content:'';position:absolute;bottom:-2px;left:0;width:0;height:2px;background:var(--accent);border-radius:2px;transition:var(--transition)}
.underline-anim:hover::after{width:100%}
.glass{background:rgba(255,255,255,0.5);backdrop-filter:blur(20px) saturate(1.5);-webkit-backdrop-filter:blur(20px) saturate(1.5);border:1px solid var(--border)}
.mobile-overlay{display:none}
.mobile-overlay.open{display:flex;position:fixed;top:var(--nav-height);left:0;right:0;bottom:0;background:rgba(248,250,252,0.96);backdrop-filter:blur(20px);flex-direction:column;align-items:center;justify-content:center;gap:8px;z-index:999;padding:24px}
.mobile-overlay a{font-size:1.4rem;padding:16px 24px;width:100%;text-align:center;color:var(--text-secondary);font-weight:500;transition:var(--transition-fast)}
.mobile-overlay a:hover{color:var(--text);background:rgba(15,23,42,0.04)}
@media(min-width:769px){.mobile-overlay{display:none !important}}
@media(max-width:768px){.nav-links{display:none}}
    `}</style>
  )
}
