export function HomePage() {
  return (
    <main className="page page-home">
      <header className="hero">
        <p className="eyebrow">Developer Portfolio</p>
        <h1>
          I build web products that solve real problems and deliver measurable
          outcomes.
        </h1>
        <p className="hero-copy">
          I am a software developer focused on TypeScript, React, and Node.js.
          Below are two featured projects with context, technical decisions, and
          business impact.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projetos">
            View projects
          </a>
          <a className="button button-ghost" href="#contato">
            Contact me
          </a>
        </div>
      </header>

      <section className="value-grid" aria-label="Professional highlights">
        <article className="value-card">
          <h2>Product-oriented engineering</h2>
          <p>
            I prioritize clarity, maintainability, and outcomes that connect to
            concrete business goals.
          </p>
        </article>
        <article className="value-card">
          <h2>Distinctive frontend systems</h2>
          <p>
            I design performant, accessible interfaces with a strong visual
            direction that gives each product identity.
          </p>
        </article>
        <article className="value-card">
          <h2>Reliable backend foundations</h2>
          <p>
            I build Node APIs with robust Zod validation to reduce runtime
            errors and increase delivery confidence.
          </p>
        </article>
      </section>
    </main>
  )
}
