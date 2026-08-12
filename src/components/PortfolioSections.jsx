import { useEffect, useRef, useState, useCallback } from 'react'

/* =====================================================
   NAVBAR
   ===================================================== */
export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = useCallback(() => setMenuOpen(false), [])

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} aria-label="Primary navigation">
      <a className="navbar-logo" href="#top" aria-label="Musaddif Taj — Home">
        <span className="navbar-logo-bracket">{' < '}</span>
        <span className="navbar-logo-name">Musaddif Taj</span>
        <span className="navbar-logo-bracket">{' />'}</span>
      </a>

      <div className={`navbar-links ${menuOpen ? 'is-open' : ''}`} role="menubar">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={closeMenu} role="menuitem">
            {link.label}
          </a>
        ))}
        <a
          className="navbar-cta"
          href="#contact"
          onClick={closeMenu}
          role="menuitem"
        >
          Let's Talk
        </a>
      </div>

      <button
        id="menu-toggle-btn"
        className={`menu-toggle ${menuOpen ? 'is-open' : ''}`}
        type="button"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-expanded={menuOpen}
        aria-controls="navbar-links"
        aria-label="Toggle navigation menu"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </button>
    </nav>
  )
}

/* =====================================================
   HERO
   ===================================================== */
export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="container">
        <div className="hero-inner">

          {/* Badge */}
          <div className="hero-badge" role="status">
            <span className="hero-badge-dot" aria-hidden="true"></span>
            Available for new opportunities
          </div>

          {/* Headline */}
          <h1 className="hero-title" id="hero-title">
            <span className="hero-title-name gradient-text">Musaddif Taj</span>
            <span className="hero-title-role">React Native &amp; Full-Stack Developer</span>
          </h1>

          {/* Description */}
          <p className="hero-description">
            I build scalable production web and mobile applications using React Native and the
            MERN stack — shipping real apps to the Google Play Store and Apple App Store.
          </p>

          {/* CTAs */}
          <div className="hero-actions">
            <a id="hero-cta-projects" className="btn-primary" href="#projects">
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M3 9h18M9 21V9" />
              </svg>
              View Projects
            </a>
            <a id="hero-cta-contact" className="btn-secondary" href="#contact">
              Contact Me
            </a>
          </div>

          {/* Social Links */}
          <div className="hero-social" aria-label="Social profiles">
            <a
              id="hero-github-link"
              className="social-icon-btn"
              href="https://github.com/musaddif"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              title="GitHub"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>
            <a
              id="hero-linkedin-link"
              className="social-icon-btn"
              href="https://www.linkedin.com/in/musaddif-k-755569247/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              title="LinkedIn"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              id="hero-email-link"
              className="social-icon-btn"
              href="mailto:musaddifktk@gmail.com"
              aria-label="Send email"
              title="Email"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </a>
          </div>

          {/* Stats */}
          <div className="hero-stats" aria-label="Key highlights">
            <div className="hero-stat">
              <div className="hero-stat-value">2+</div>
              <div className="hero-stat-label">Years Professional Experience</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-value">3+</div>
              <div className="hero-stat-label">Apps Shipped to Stores</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-value">MERN</div>
              <div className="hero-stat-label">React Native + Web Stack</div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll" aria-hidden="true">
        <div className="hero-scroll-line"></div>
        <span>scroll</span>
      </div>
    </section>
  )
}

/* =====================================================
   ABOUT
   ===================================================== */
export function About() {
  return (
    <section className="section" id="about" aria-labelledby="about-title">
      <div className="container">
        <div className="reveal">
          <span className="section-label">About Me</span>
          <h2 className="section-title" id="about-title">
            Building Products,{' '}
            <span className="gradient-text">Not Just Code</span>
          </h2>
        </div>

        <div className="about-grid">
          {/* Text */}
          <div className="about-text reveal reveal-delay-1">
            <p>
              I'm a Software Developer based in Kohat, Khyber Pakhtunkhwa, Pakistan, currently
              working at <strong style={{ color: 'var(--accent-light)' }}>Live Talk</strong> where I
              build and maintain production web and mobile applications used by real users.
            </p>
            <p>
              My primary focus is on <strong>React Native</strong> mobile development for both
              Android and iOS, and full-stack web development with the <strong>MERN stack</strong>{' '}
              (MongoDB, Express.js, React.js, Node.js). I've taken applications from initial
              development all the way through to live deployments on the Google Play Store and
              Apple App Store.
            </p>
            <p>
              I care deeply about code quality, clean architecture, and building software that
              genuinely solves problems. I work in Agile/Scrum environments, collaborate with
              teams via Git/GitHub/GitLab, and continuously learn to stay sharp as the ecosystem
              evolves.
            </p>

            <div className="about-focus" aria-label="Core technologies">
              {['React Native', 'React.js', 'Node.js', 'MongoDB', 'Redux Toolkit', 'REST APIs'].map((tag) => (
                <span key={tag} className="focus-tag">{tag}</span>
              ))}
            </div>
          </div>

          {/* Highlight cards */}
          <div className="about-highlights reveal reveal-delay-2">
            {[
              {
                icon: '📱',
                title: 'Mobile Development',
                desc: 'Cross-platform iOS & Android apps with React Native, deployed to Google Play and the App Store.',
              },
              {
                icon: '🌐',
                title: 'Full-Stack Web',
                desc: 'End-to-end MERN stack applications with RESTful APIs, authentication, and database design.',
              },
              {
                icon: '🚀',
                title: 'Production Focus',
                desc: 'I ship features, fix bugs, and maintain live applications — not just prototype builds.',
              },
              {
                icon: '⚡',
                title: 'API Integration',
                desc: 'Designing and consuming REST APIs with Express.js, JWT auth, and Axios on the client.',
              },
            ].map((item) => (
              <div key={item.title} className="about-highlight-card">
                <div className="about-highlight-icon" aria-hidden="true">{item.icon}</div>
                <div className="about-highlight-title">{item.title}</div>
                <div className="about-highlight-desc">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* =====================================================
   EXPERIENCE
   ===================================================== */
export function ExperienceSection() {
  const responsibilities = [
    'React Native mobile application development',
    'React.js frontend development',
    'Node.js & Express.js backend APIs',
    'MongoDB database design & queries',
    'Redux Toolkit state management',
    'JWT authentication & authorization',
    'REST API design & integration (Axios)',
    'Android & iOS app development',
    'Google Play Store deployment',
    'Apple App Store deployment',
    'Feature development & bug fixing',
    'Agile / Scrum development workflow',
  ]

  const techStack = [
    'React Native', 'React.js', 'Node.js', 'Express.js',
    'MongoDB', 'Redux Toolkit', 'JWT', 'Axios',
    'Git', 'GitHub', 'GitLab', 'REST APIs',
  ]

  return (
    <section className="section" id="experience" aria-labelledby="experience-title">
      <div className="container">
        <div className="reveal">
          <span className="section-label">Experience</span>
          <h2 className="section-title" id="experience-title">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subtitle" style={{ marginBottom: '40px' }}>
            Building and shipping real-world software in a professional engineering environment.
          </p>
        </div>

        <div className="experience-card reveal reveal-delay-1">
          <div className="exp-header">
            <div className="exp-title-block">
              <h3>Software Developer / Full-Stack Developer</h3>
              <span className="exp-company">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <rect x="2" y="7" width="20" height="14" rx="2" />
                  <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
                </svg>
                Live Talk
              </span>
            </div>
            <div className="exp-meta">
              <span className="exp-date">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                2024 – Present
              </span>
              <span className="exp-location">📍 Kohat, Khyber Pakhtunkhwa, Pakistan</span>
            </div>
          </div>

          <div className="exp-divider" aria-hidden="true"></div>

          <ul className="exp-responsibilities" aria-label="Responsibilities">
            {responsibilities.map((item) => (
              <li key={item} className="exp-responsibility">{item}</li>
            ))}
          </ul>

          <div>
            <p className="exp-tech-label">Technology Stack</p>
            <div className="exp-tech-pills">
              {techStack.map((tech) => (
                <span key={tech} className="skill-pill skill-pill-primary">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* =====================================================
   EDUCATION
   ===================================================== */
export function EducationSection() {
  return (
    <section className="section" id="education" aria-labelledby="education-title" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="reveal">
          <span className="section-label">Education</span>
          <h2 className="section-title" id="education-title">
            Academic <span className="gradient-text">Background</span>
          </h2>
        </div>

        <div className="experience-card reveal reveal-delay-1" style={{ marginTop: '32px' }}>
          <div className="exp-header">
            <div className="exp-title-block">
              <h3>Bachelor of Science in Computer Science (BSCS)</h3>
              <span className="exp-company">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
                Kohat University of Science and Technology (KUST)
              </span>
            </div>
            <div className="exp-meta">
              <span className="exp-date">2022 – 2026</span>
              <span className="exp-location">📍 Kohat, KPK, Pakistan</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* =====================================================
   SKILLS
   ===================================================== */
export function SkillsSection() {
  const skillCategories = [
    {
      icon: '⚛️',
      title: 'Frontend',
      skills: ['JavaScript ES6+', 'React.js', 'HTML5', 'CSS3', 'Redux', 'Redux Toolkit'],
      highlight: true,
    },
    {
      icon: '📱',
      title: 'Mobile',
      skills: ['React Native', 'iOS Development', 'Android Development', 'Cross-Platform'],
      highlight: true,
    },
    {
      icon: '🔧',
      title: 'Backend',
      skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT', 'Authentication', 'Axios'],
    },
    {
      icon: '🗄️',
      title: 'Database',
      skills: ['MongoDB', 'Mongoose', 'NoSQL', 'Data Modeling'],
    },
    {
      icon: '🛠️',
      title: 'Dev Tools',
      skills: ['Git', 'GitHub', 'GitLab', 'VS Code', 'Postman', 'Android Studio', 'Xcode'],
    },
    {
      icon: '🚀',
      title: 'Deployment & Practices',
      skills: ['Google Play Console', 'App Store Connect', 'Agile', 'Scrum', 'SDLC', 'State Management'],
    },
  ]

  return (
    <section className="section" id="skills" aria-labelledby="skills-title">
      <div className="container">
        <div className="reveal">
          <span className="section-label">Technical Skills</span>
          <h2 className="section-title" id="skills-title">
            My <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="section-subtitle" style={{ marginBottom: '44px' }}>
            Technologies I use daily to build and ship production applications.
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, idx) => (
            <div
              key={category.title}
              className={`skill-category reveal reveal-delay-${Math.min(idx + 1, 5)}`}
            >
              <div className="skill-category-header">
                <div className="skill-category-icon" aria-hidden="true">{category.icon}</div>
                <h3 className="skill-category-title">{category.title}</h3>
              </div>
              <div className="skill-pills" role="list" aria-label={`${category.title} skills`}>
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    role="listitem"
                    className={`skill-pill ${category.highlight ? 'skill-pill-primary' : ''}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* =====================================================
   PROJECT MEDIA
   ===================================================== */
export function ProjectMedia({ image, title, placeholder }) {
  if (image) {
    return (
      <div className="project-media">
        <img src={image} alt={`${title} preview`} loading="lazy" decoding="async" />
      </div>
    )
  }

  return (
    <div className="project-media">
      <div className="project-media-placeholder" aria-label={`${title} icon`}>
        {placeholder || '📦'}
      </div>
    </div>
  )
}

/* =====================================================
   PROJECT CARD
   ===================================================== */
export function ProjectCard({ project }) {
  const [activeScreenshot, setActiveScreenshot] = useState(null)

  return (
    <>
      <article className="project-card" aria-labelledby={`proj-title-${project.id}`}>
        {/* Media */}
        <ProjectMedia
          image={project.image}
          title={project.title}
          placeholder={project.placeholder}
        />

        {/* Badge */}
        {project.badge && (
          <div
            className={`project-badge ${project.badge.type === 'live' ? 'project-badge-live' : 'project-badge-production'}`}
            aria-label={`Status: ${project.badge.label}`}
          >
            {project.badge.type === 'live' && (
              <span className="project-badge-dot" aria-hidden="true"></span>
            )}
            {project.badge.label}
          </div>
        )}

        {/* Body */}
        <div className="project-body">
          <h3 className="project-title" id={`proj-title-${project.id}`}>{project.title}</h3>

          <div className="project-stack" aria-label="Technologies used">
            {project.stack.map((tech) => (
              <span key={tech} className="project-tech">{tech}</span>
            ))}
          </div>

          <p className="project-description">{project.description}</p>

          <div className="project-actions">
            {project.liveLink && (
              <a
                id={`proj-live-${project.id}`}
                className="project-link project-link-primary"
                href={project.liveLink}
                target="_blank"
                rel="noreferrer"
                aria-label={`View ${project.title} live`}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
                {project.liveLinkLabel || 'View Live'}
              </a>
            )}
            {project.codeLink && (
              <a
                id={`proj-code-${project.id}`}
                className="project-link project-link-secondary"
                href={project.codeLink}
                target="_blank"
                rel="noreferrer"
                aria-label={`View ${project.title} source code`}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
                Source Code
              </a>
            )}
            {project.screenshot && (
              <button
                id={`proj-screenshot-${project.id}`}
                className="project-link project-link-secondary"
                type="button"
                onClick={() => setActiveScreenshot(project.screenshot)}
                aria-label={`View ${project.title} screenshot`}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <polyline points="21 15 16 10 5 21" />
                </svg>
                View Screenshot
              </button>
            )}
          </div>
        </div>
      </article>

      {/* Screenshot Modal */}
      {activeScreenshot && (
        <div
          className="video-modal"
          role="dialog"
          aria-modal="true"
          aria-label="Screenshot preview"
          onClick={() => setActiveScreenshot(null)}
        >
          <div
            className="video-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="video-close"
              type="button"
              onClick={() => setActiveScreenshot(null)}
              aria-label="Close screenshot"
            >
              ✕
            </button>
            <img
              src={activeScreenshot}
              alt="Project Screenshot"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
        </div>
      )}
    </>
  )
}

/* =====================================================
   PROJECTS SECTION
   ===================================================== */
export function ProjectsSection() {
  const projects = [
    {
      id: 'salamty',
      title: 'Salamty',
      stack: ['React Native', 'Redux Toolkit', 'REST APIs'],
      description:
        'A production mobile application I actively maintain and develop at Live Talk. Responsibilities include continuous feature development, bug fixing, API integration, state management with Redux Toolkit, and managing production deployments to the Google Play Store.',
      liveLink: 'https://play.google.com/store/apps/details?id=pk.salamty.user&hl=en',
      liveLinkLabel: 'Play Store',
      screenshot: '/screenshots/salamty-screenshot.png',
      placeholder: '🛡️',
      badge: { type: 'live', label: 'Production App' },
    },
    {
      id: 'moove',
      title: 'Moove',
      stack: ['React Native'],
      description:
        'A published cross-platform mobile application available on the Apple App Store. Built with React Native for a seamless iOS experience with optimized navigation and dynamic content delivery.',
      liveLink: 'https://apps.apple.com/us/app/moove/id1180956418',
      liveLinkLabel: 'App Store',
      screenshot: '/screenshots/moove-screenshot.png',
      placeholder: '🚗',
      badge: { type: 'live', label: 'App Store' },
    },
    {
      id: 'fees',
      title: 'Fees Management System',
      stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
      description:
        'A full-stack MERN web application for managing student fee records. Features an admin dashboard built with React.js, RESTful CRUD APIs with Express/Node.js, and MongoDB for persistent data storage.',
      codeLink: 'https://github.com/musaddif/feesManagementSystem',
      screenshot: '/screenshots/fees-screenshot.png',
      placeholder: '💳',
      badge: { type: 'production', label: 'Full-Stack' },
    },
    {
      id: 'touristtrail',
      title: 'TouristTrail',
      stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
      description:
        'A full-stack tourism discovery platform with JWT-based authentication and a React.js frontend. The Express.js + Node.js backend exposes a REST API backed by MongoDB for managing trail and tourism data.',
      codeLink: 'https://github.com/musaddif/tourestTrail',
      screenshot: '/screenshots/touristtrail-screenshot.png',
      placeholder: '🗺️',
      badge: { type: 'production', label: 'Full-Stack' },
    },
  ]

  return (
    <section className="section" id="projects" aria-labelledby="projects-title">
      <div className="container">
        <div className="reveal">
          <span className="section-label">Projects</span>
          <h2 className="section-title" id="projects-title">
            What I've <span className="gradient-text">Built</span>
          </h2>
          <p className="section-subtitle" style={{ marginBottom: '44px' }}>
            A selection of production applications and full-stack projects I've shipped.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className={`reveal reveal-delay-${Math.min(idx + 1, 4)}`}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* =====================================================
   CONTACT
   ===================================================== */
export function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Replace with Formspree / EmailJS integration
    setStatus("Thanks for reaching out! I\u2019ll get back to you as soon as possible.")
    setFormData({ name: '', email: '', message: '' })
  }

  const contactItems = [
    {
      id: 'contact-email',
      icon: '✉️',
      label: 'Email',
      value: 'musaddifktk@gmail.com',
      href: 'mailto:musaddifktk@gmail.com',
    },
    {
      id: 'contact-phone',
      icon: '📞',
      label: 'Phone',
      value: '+92 343 3672966',
      href: 'tel:+923433672966',
    },
    {
      id: 'contact-linkedin',
      icon: '💼',
      label: 'LinkedIn',
      value: 'linkedin.com/in/musaddif',
      href: 'https://www.linkedin.com/in/musaddif-k-755569247/',
      external: true,
    },
    {
      id: 'contact-github',
      icon: '🐙',
      label: 'GitHub',
      value: 'github.com/musaddif',
      href: 'https://github.com/musaddif',
      external: true,
    },
    {
      id: 'contact-location',
      icon: '📍',
      label: 'Location',
      value: 'Kohat, KPK, Pakistan',
      href: null,
    },
  ]

  return (
    <section className="section" id="contact" aria-labelledby="contact-title">
      <div className="container">
        <div className="reveal">
          <span className="section-label">Contact</span>
          <h2 className="section-title" id="contact-title">
            Let's <span className="gradient-text">Work Together</span>
          </h2>
          <p className="section-subtitle" style={{ marginBottom: '44px' }}>
            I'm open to new opportunities in React Native, React.js, and full-stack development.
            Feel free to reach out.
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Info */}
          <div className="contact-info reveal reveal-delay-1">
            <div className="contact-info-header">
              <h3 className="contact-info-title">Get in Touch</h3>
              <p className="contact-info-desc">
                Available for full-time roles, contract work, and collaborations.
              </p>
            </div>

            {contactItems.map((item) =>
              item.href ? (
                <a
                  id={item.id}
                  key={item.id}
                  className="contact-item"
                  href={item.href}
                  {...(item.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                  aria-label={`${item.label}: ${item.value}`}
                >
                  <div className="contact-item-icon" aria-hidden="true">{item.icon}</div>
                  <div>
                    <div className="contact-item-label">{item.label}</div>
                    <div className="contact-item-value">{item.value}</div>
                  </div>
                </a>
              ) : (
                <div
                  id={item.id}
                  key={item.id}
                  className="contact-item"
                  role="presentation"
                >
                  <div className="contact-item-icon" aria-hidden="true">{item.icon}</div>
                  <div>
                    <div className="contact-item-label">{item.label}</div>
                    <div className="contact-item-value">{item.value}</div>
                  </div>
                </div>
              )
            )}
          </div>

          {/* Contact Form */}
          <div className="reveal reveal-delay-2">
            <div className="contact-form-card">
              <h3 className="contact-form-title">Send a Message</h3>
              <p className="contact-form-subtitle">I typically respond within 24 hours.</p>

              <form onSubmit={handleSubmit} noValidate>
                <div className="form-group">
                  <label className="form-label" htmlFor="contact-name">Name</label>
                  <input
                    id="contact-name"
                    className="form-input"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    autoComplete="name"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="contact-email-input">Email</label>
                  <input
                    id="contact-email-input"
                    className="form-input"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    autoComplete="email"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="contact-message">Message</label>
                  <textarea
                    id="contact-message"
                    className="form-input"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or opportunity..."
                    required
                    style={{ resize: 'vertical', minHeight: '120px' }}
                  />
                </div>

                <button id="contact-submit" className="btn-primary form-submit" type="submit">
                  Send Message
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </button>

                {status && (
                  <div className="form-status-success" role="alert" aria-live="polite">
                    ✓ {status}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
