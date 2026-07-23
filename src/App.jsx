import { useEffect, useState, useCallback } from 'react'
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

function rafThrottle(fn) {
  let ticking = false
  return (...args) => {
    if (!ticking) {
      ticking = true
      requestAnimationFrame(() => {
        fn(...args)
        ticking = false
      })
    }
  }
}

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = rafThrottle(() => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(max > 0 ? Math.min((window.scrollY / max) * 100, 100) : 0)
    })
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <a href="#main-content" className="skip-to-content">Skip to content</a>
      <div className="bg-grid" />
      <MouseFollower />
      <Nav />
      <main id="main-content">
        <Hero />
        <TechStack />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <Dock />
      {/* Scroll progress */}
      <div className="scroll-progress" role="progressbar" aria-valuenow={Math.round(scrollProgress)} aria-label="Page scroll progress">
        <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }} />
      </div>
      {/* Back to top */}
      <button
        className={`back-to-top ${scrollProgress > 15 ? 'visible' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
      >
        <i className="fas fa-arrow-up" />
      </button>
      <GlobalStyles />
    </>
  )
}

function GlobalStyles() {
  return (
    <style>{`
.scroll-progress{position:fixed;top:var(--nav-height);left:0;right:0;height:2px;z-index:999;background:transparent;pointer-events:none}
.scroll-progress-bar{height:100%;background:linear-gradient(90deg,var(--accent),var(--accent-alt));width:0%;border-radius:0 2px 2px 0;transition:width 0.1s linear}
.back-to-top{position:fixed;bottom:32px;right:32px;width:44px;height:44px;border-radius:50%;background:var(--text);color:var(--bg);border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:1.1rem;box-shadow:var(--shadow-lg);opacity:0;transform:translateY(20px);transition:var(--transition);z-index:50;pointer-events:none}
.back-to-top.visible{opacity:1;transform:translateY(0);pointer-events:auto}
.back-to-top:hover{background:var(--accent);transform:translateY(-4px)}
    `}</style>
  )
}
