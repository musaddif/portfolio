import { useEffect } from 'react'
import './App.css'
import {
  Navbar,
  Hero,
  About,
  ExperienceSection,
  EducationSection,
  SkillsSection,
  ProjectsSection,
  ContactSection,
} from './components/PortfolioSections'

/* Global scroll-reveal: observes all .reveal elements after mount */
function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -48px 0px' }
    )
    const elements = document.querySelectorAll('.reveal')
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

function Footer() {
  const navLinks = [
    { href: '#about',      label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#skills',     label: 'Skills' },
    { href: '#projects',   label: 'Projects' },
    { href: '#contact',    label: 'Contact' },
  ]

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-brand">
            <span className="footer-name gradient-text">Musaddif Taj</span>
            <span className="footer-tagline">React Native &amp; Full-Stack Developer</span>
          </div>

          <nav className="footer-links" aria-label="Footer navigation">
            {navLinks.map((link) => (
              <a key={link.href} className="footer-link" href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <a
              className="footer-link"
              href="https://github.com/musaddif"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              GitHub
            </a>
            <a
              className="footer-link"
              href="https://www.linkedin.com/in/musaddif"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
          </div>

          <p className="footer-copy">© 2026 Musaddif Taj. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

function App() {
  useScrollReveal()
  return (
    <div className="app-shell">
      {/* Aurora background orbs */}
      <div className="aurora-bg" aria-hidden="true">
        <div className="aurora-orb aurora-orb-1"></div>
        <div className="aurora-orb aurora-orb-2"></div>
        <div className="aurora-orb aurora-orb-3"></div>
      </div>

      <Navbar />

      <main id="main-content">
        <Hero />
        <div className="section-divider" aria-hidden="true"></div>
        <About />
        <div className="section-divider" aria-hidden="true"></div>
        <ExperienceSection />
        <div className="section-divider" aria-hidden="true"></div>
        <EducationSection />
        <div className="section-divider" aria-hidden="true"></div>
        <SkillsSection />
        <div className="section-divider" aria-hidden="true"></div>
        <ProjectsSection />
        <div className="section-divider" aria-hidden="true"></div>
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}

export default App