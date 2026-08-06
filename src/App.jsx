import {
  ArrowDown,
  ArrowUpRight,
  Award,
  CheckCircle2,
  Code2,
  Contact,
  Download,
  GitBranch,
  Mail,
  Menu,
  Terminal,
  X,
} from 'lucide-react'
import { useEffect, useState } from 'react'

const projects = [
  {
    index: '01',
    title: 'GrowEasy CSV Importer',
    type: 'AI-powered CRM data ingestion',
    description:
      'A full-stack importer that maps unpredictable CSV exports into a clean CRM schema with AI, while keeping every row traceable.',
    impact: [
      'Provider-agnostic AI extraction with strict validation',
      'Concurrent batch processing with retry and backoff',
      'Live job progress over Server-Sent Events',
    ],
    stack: ['Next.js', 'TypeScript', 'Express', 'AI APIs', 'Docker'],
    live: 'https://grow-easy-zeta-eight.vercel.app',
    repo: 'https://github.com/b0tProgrammer/grow_easy',
    accent: 'green',
  },
  {
    index: '02',
    title: 'Store Intelligence API',
    type: 'Computer vision retail analytics',
    description:
      'An end-to-end pipeline that turns CCTV footage into structured events, operational KPIs, and a live analytics dashboard.',
    impact: [
      'Visitor, conversion, queue, and zone analytics',
      'YOLO-based detection with multi-object tracking',
      'Idempotent event ingestion and anomaly detection',
    ],
    stack: ['Python', 'FastAPI', 'YOLO', 'OpenCV', 'Docker'],
    live: null,
    repo: 'https://github.com/b0tProgrammer/Store_Intelligence_API',
    accent: 'coral',
  },
  {
    index: '03',
    title: 'VIIT Mock EAPCET',
    type: 'Production exam platform',
    description:
      'A role-based examination system for students, faculty, and administrators, built for reliable assessment at institutional scale.',
    impact: [
      'Live exam monitoring and score analytics',
      'Malpractice detection with full-screen enforcement',
      'Automated result analysis and reward emails',
    ],
    stack: ['React', 'Node.js', 'Express', 'Prisma', 'PostgreSQL'],
    live: 'https://viitcet.vignaniit.edu.in/',
    repo: null,
    accent: 'yellow',
  },
  {
    index: '04',
    title: 'CF Analyzer',
    type: 'Competitive programming analytics',
    description:
      'A full-stack dashboard that maps live Codeforces data to mentors, making student performance visible and actionable.',
    impact: [
      'JWT authentication with role-based access',
      'Real-time Codeforces profile tracking',
      'Containerized backend deployment',
    ],
    stack: ['Java', 'Spring Boot', 'React', 'PostgreSQL', 'Docker'],
    live: 'https://b0tprogrammer.github.io/CF-Analyzer/',
    repo: 'https://github.com/b0tProgrammer/cfAnalyzer',
    accent: 'blue',
  },
  {
    index: '05',
    title: 'Taskyfer AI',
    type: 'AI-assisted task management',
    description:
      'A secure task platform that turns short inputs into useful descriptions, priorities, and time estimates with GitHub AI models.',
    impact: [
      'AI-generated task planning metadata',
      'Protected routing and centralized state',
      'Scalable REST APIs with Spring Security',
    ],
    stack: ['Spring AI', 'Spring Boot', 'React', 'PostgreSQL', 'Docker'],
    live: 'https://ai-task-management-system-frontend-alpha.vercel.app/login',
    repo: 'https://github.com/b0tProgrammer/AiTaskManagementSystem-frontend',
    accent: 'green',
  },
  {
    index: '06',
    title: 'Smart Updater',
    type: 'Android workflow automation',
    description:
      'A Kotlin app actively used by police personnel to maintain monthly court-case reports without repetitive spreadsheet work.',
    impact: [
      'Excel read/write automation with Apache POI',
      'Case preview, editing, and one-tap sharing',
      'Real-world deployment in court workflows',
    ],
    stack: ['Kotlin', 'Android', 'Apache POI'],
    live: 'https://github.com/b0tProgrammer/SmartUpdater/releases/tag/v1.0',
    repo: 'https://github.com/b0tProgrammer/SmartUpdater',
    accent: 'coral',
  },
]

const skillGroups = [
  { label: 'Languages', items: ['Java', 'Kotlin', 'C++', 'Python', 'JavaScript', 'SQL'] },
  { label: 'Application', items: ['React', 'Spring Boot', 'Node.js', 'Express', 'Android'] },
  { label: 'Systems', items: ['PostgreSQL', 'REST APIs', 'JWT', 'Docker', 'Git'] },
  { label: 'Delivery', items: ['Render', 'Railway', 'GitHub Pages', 'Vercel'] },
]

function ExternalLink({ href, children, className = '' }) {
  return (
    <a className={className} href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header className={scrolled ? 'site-header scrolled' : 'site-header'}>
        <a className="brand" href="#top" aria-label="Mohith Kumar home">MK<span>.</span></a>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
          <a href="#work" onClick={closeMenu}>Work</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#achievements" onClick={closeMenu}>Achievements</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <a className="resume-nav" href="/Mohith-Kumar-Resume.pdf" download onClick={closeMenu}>
            Resume <Download size={15} />
          </a>
        </nav>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-content">
            <p className="eyebrow"><span className="status-dot" /> Open to software engineering opportunities</p>
            <h1>Mohith Kumar<br /><span>Sandaka.</span></h1>
            <div className="hero-bottom">
              <p className="hero-copy">
                I build full-stack products that survive contact with real users, from secure exam systems to AI-assisted workflows.
              </p>
              <div className="hero-actions">
                <a className="primary-action" href="#work">Explore my work <ArrowDown size={18} /></a>
                <ExternalLink className="icon-action" href="https://github.com/b0tProgrammer"><GitBranch /><span className="sr-only">GitHub</span></ExternalLink>
                <ExternalLink className="icon-action" href="https://linkedin.com/in/mohithkumarsandaka"><Contact /><span className="sr-only">LinkedIn</span></ExternalLink>
              </div>
            </div>
          </div>
          <div className="hero-stats">
            <div><strong>30</strong><span>Public repositories</span></div>
            <div><strong>1715</strong><span>Codeforces max rating</span></div>
            <div><strong>8.85</strong><span>CGPA in Computer Science</span></div>
          </div>
        </section>

        <section className="work-section" id="work">
          <div className="section-heading">
            <div><p className="section-kicker">Selected work</p><h2>Products with a job to do.</h2></div>
            <p>Systems designed around measurable outcomes, secure access, and the people who use them.</p>
          </div>
          <div className="projects-list">
            {projects.map((project) => (
              <article className={`project-row ${project.accent}`} key={project.title}>
                <div className="project-index">{project.index}</div>
                <div className="project-main">
                  <p className="project-type">{project.type}</p>
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-stack">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
                </div>
                <div className="project-proof">
                  {project.impact.map((item) => <p key={item}><CheckCircle2 size={16} />{item}</p>)}
                  <div className="project-links">
                    {project.live && <ExternalLink href={project.live}>View live <ArrowUpRight size={17} /></ExternalLink>}
                    {project.repo && <ExternalLink href={project.repo}>Source <GitBranch size={16} /></ExternalLink>}
                  </div>
                </div>
              </article>
            ))}
          </div>
          <ExternalLink className="all-work" href="https://github.com/b0tProgrammer?tab=repositories">
            Browse all 30 repositories <ArrowUpRight size={18} />
          </ExternalLink>
        </section>

        <section className="about-section" id="about">
          <div className="about-intro">
            <p className="section-kicker">How I work</p>
            <h2>Backend discipline.<br />Frontend empathy.</h2>
            <p>
              I am a Computer Science undergraduate at Vignan's Institute of Information Technology. I enjoy owning the full path from database design and authentication to interfaces that make complex systems feel obvious.
            </p>
          </div>
          <div className="skills-grid">
            {skillGroups.map((group) => (
              <div className="skill-group" key={group.label}>
                <p>{group.label}</p>
                <div>{group.items.map((item) => <span key={item}>{item}</span>)}</div>
              </div>
            ))}
          </div>
          <div className="experience-line">
            <div className="experience-icon"><Terminal /></div>
            <div><p>Software Engineer</p><h3>VIIT Mock EAPCET</h3></div>
            <p className="experience-date">Nov 2025 - Mar 2026</p>
          </div>
        </section>

        <section className="achievements-section" id="achievements">
          <div className="section-heading light">
            <div><p className="section-kicker">Competitive programming</p><h2>Pressure tested.</h2></div>
            <p>I compete because fast feedback exposes weak assumptions. That habit carries directly into engineering.</p>
          </div>
          <div className="achievement-layout">
            <div className="regionalist">
              <Award size={32} />
              <p className="achievement-label">ICPC Asia West Regionalist</p>
              <strong>69<sup>th</sup></strong>
              <p>Chennai Regional Contest<br /><span>All India Rank 484</span></p>
            </div>
            <div className="rank-list">
              <ExternalLink href="https://codeforces.com/profile/not_mohith">
                <span>Codeforces</span><strong>Expert</strong><em>1715 max rating · Top 9.5%</em><ArrowUpRight />
              </ExternalLink>
              <ExternalLink href="https://leetcode.com/u/Bak_asta/">
                <span>LeetCode</span><strong>Knight</strong><em>1999 max rating · Top 2.5%</em><ArrowUpRight />
              </ExternalLink>
              <div className="contest-ranks">
                <p><span>Global 349</span> Codeforces Round 1089</p>
                <p><span>Global 565</span> Codeforces Round 1050</p>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <Code2 className="contact-mark" aria-hidden="true" />
          <p className="section-kicker">Let's build something useful</p>
          <h2>Have a hard problem?<br /><span>Tell me about it.</span></h2>
          <a className="contact-email" href="mailto:s.mohithkumar1511@gmail.com">
            <Mail size={20} /> s.mohithkumar1511@gmail.com <ArrowUpRight size={20} />
          </a>
          <footer>
            <p>Designed and built by Mohith Kumar Sandaka.</p>
            <div>
              <ExternalLink href="https://github.com/b0tProgrammer">GitHub</ExternalLink>
              <ExternalLink href="https://linkedin.com/in/mohithkumarsandaka">LinkedIn</ExternalLink>
              <a href="#top">Back to top</a>
            </div>
          </footer>
        </section>
      </main>
    </>
  )
}

export default App
