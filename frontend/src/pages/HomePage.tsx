import { useInView } from '../hooks/useInView'
import styles from './HomePage.module.css'

type Project = {
  name: string
  tagline: string
  problem: string
  solution: string
  result: string
  stack: string[]
  imageSrc: string
  imageAlt: string
  ctaLabel: string
  ctaHref: string
  reverse?: boolean
}

const projects: Project[] = [
  {
    name: 'receipt-scanner',
    tagline: 'From paper receipts to searchable expense data.',
    problem:
      'Manual expense tracking is slow, error-prone, and hard to audit over time.',
    solution:
      'An OCR-based flow that extracts receipt fields, validates data, and structures records for reporting.',
    result:
      'Reduced repetitive manual entry and improved reliability in day-to-day expense management.',
    stack: ['TypeScript', 'React', 'Node.js', 'Zod'],
    imageSrc: '/src/assets/receipt-scanner.png',
    imageAlt: 'Screenshot of receipt-scanner project interface',
    ctaLabel: 'View GitHub Repository',
    ctaHref: 'https://github.com/mthsdaher/receipt-scanner',
  },
  {
    name: 'agendamento-unique',
    tagline: 'Court, event, and party booking in a single platform.',
    problem:
      'Managing bookings with fragmented channels creates conflicts and operational friction.',
    solution:
      'A centralized scheduling experience with clear availability, conflict prevention, and streamlined reservations.',
    result:
      'Improved booking clarity, reduced scheduling conflicts, and supported smoother operations.',
    stack: ['TypeScript', 'React', 'Node.js', 'Cloud Run'],
    imageSrc: '/src/assets/agendamento-unique.png',
    imageAlt: 'Screenshot of agendamento-unique scheduling platform',
    ctaLabel: 'View Live Demo',
    ctaHref:
      'https://agendamento-unique-655344779408.northamerica-northeast2.run.app/',
    reverse: true,
  },
]

function ProjectSection({ project }: { project: Project }) {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.3 })

  return (
    <article
      id={project.name}
      ref={ref}
      className={`${styles.panel} ${styles.projectPanel}`}
      aria-label={`${project.name} project section`}
    >
      <div
        className={`${styles.projectLayout} ${project.reverse ? styles.reverse : ''}`}
      >
        <figure
          className={`${styles.projectVisual} ${isInView ? styles.inView : ''}`}
        >
          <img src={project.imageSrc} alt={project.imageAlt} loading="lazy" />
        </figure>

        <div className={`${styles.projectContent} ${isInView ? styles.inView : ''}`}>
          <p className={styles.projectKicker}>Featured Project</p>
          <h2>{project.name}</h2>
          <p className={styles.tagline}>{project.tagline}</p>
          <p>
            <strong>Problem:</strong> {project.problem}
          </p>
          <p>
            <strong>Solution:</strong> {project.solution}
          </p>
          <p>
            <strong>Outcome:</strong> {project.result}
          </p>
          <ul className={styles.stackList} aria-label={`${project.name} tech stack`}>
            {project.stack.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <a
            className={styles.button}
            href={project.ctaHref}
            target="_blank"
            rel="noreferrer"
          >
            {project.ctaLabel}
          </a>
        </div>
      </div>
    </article>
  )
}

export function HomePage() {
  return (
    <main className={styles.page}>
      <section className={`${styles.panel} ${styles.heroPanel}`}>
        <header className={styles.hero}>
          <p className={styles.eyebrow}>Software Developer Portfolio</p>
          <h1>
            I design and ship production-ready web products that balance
            performance, clarity, and business outcomes.
          </h1>
          <p>
            Focused on TypeScript, React, and Node.js, I build reliable systems
            with strong validation, thoughtful UX, and maintainable architecture.
          </p>
          <nav className={styles.heroActions} aria-label="Primary links">
            <a className={styles.button} href="#receipt-scanner">
              View Projects
            </a>
            <a className={`${styles.button} ${styles.buttonGhost}`} href="#contact">
              Contact Me
            </a>
          </nav>
        </header>
      </section>

      {projects.map((project) => (
        <ProjectSection key={project.name} project={project} />
      ))}

      <section className={`${styles.panel} ${styles.aboutPanel}`} aria-label="About me">
        <div className={styles.aboutBox}>
          <h2>How I Work</h2>
          <p>
            I approach software as a product discipline, not only a technical
            exercise. I prioritize <span>clear architecture</span>,{' '}
            <span>resilient APIs</span>, and <span>user-centred interfaces</span>{' '}
            that scale with business needs. My focus is to deliver code that teams
            can trust, understand, and evolve with confidence.
          </p>
          <ul className={styles.stackList} aria-label="Core technologies">
            <li>TypeScript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>Zod</li>
            <li>PostgreSQL</li>
          </ul>
        </div>
      </section>

      <footer id="contact" className={`${styles.panel} ${styles.contactPanel}`}>
        <div className={styles.contactContent}>
          <p className={styles.contactKicker}>Open to opportunities in Canada</p>
          <h2>Let&apos;s build meaningful products together.</h2>
          <nav className={styles.contactLinks} aria-label="Contact links">
            <a href="https://github.com/mthsdaher" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/matheus-daher/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a href="mailto:matheusdaher.dev@gmail.com">Email</a>
          </nav>
        </div>
      </footer>
    </main>
  )
}
