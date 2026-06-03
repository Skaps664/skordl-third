import Link from "next/link"
import { caseStudies, designFocus } from "@/lib/portfolio-data"

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <span className="eyebrow">Product Designer Portfolio</span>
          <div className="hero-grid">
            <div>
              <h1>
                I design products people trust, use, and return to.
                <span className="hero-highlight">Research first. Clarity always.</span>
              </h1>
              <p>
                I am Sudais, a product designer building thoughtful digital products for startups and teams at scale.
                My work combines product thinking, visual precision, and systems that support long-term growth.
              </p>

              <div className="hero-actions">
                <Link href="/case-studies" className="btn btn-primary">
                  View case studies
                </Link>
                <Link href="/contact" className="btn btn-secondary">
                  Book a design call
                </Link>
              </div>
            </div>

            <div>
              <article className="metric-card">
                <h3>32+</h3>
                <p>Products and feature initiatives designed end-to-end.</p>
              </article>
              <article className="metric-card" style={{ marginTop: "0.75rem" }}>
                <h3>18%</h3>
                <p>Average increase in key conversion metrics across recent projects.</p>
              </article>
              <article className="metric-card" style={{ marginTop: "0.75rem" }}>
                <h3>8 yrs</h3>
                <p>Experience in product design, UX strategy, and design systems.</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>How I bring clarity to product decisions</h2>
            <p>
              Design output is only useful when it improves product outcomes. These are the practice areas I bring to every engagement.
            </p>
          </div>

          <div className="cards">
            {designFocus.map((item) => (
              <article className="card" key={item.title}>
                <span className="tag">{item.label}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="featured-work">
        <div className="container">
          <div className="section-head">
            <h2>Selected case studies</h2>
            <p>
              Three projects where design strategy directly impacted adoption, retention, and delivery velocity.
            </p>
          </div>

          <div className="cards">
            {caseStudies.slice(0, 3).map((study) => (
              <Link href={`/case-studies/${study.slug}`} className="card" key={study.slug}>
                <span className="tag">{study.category}</span>
                <h3>{study.title}</h3>
                <p>{study.summary}</p>
                <div className="chip-list">
                  {study.skills.map((skill) => (
                    <span className="chip" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container contact-box">
          <div className="section-head">
            <h2>Open for product design roles and freelance projects</h2>
            <p>
              I work with teams building ambitious products and looking for a designer who can balance vision with execution detail.
            </p>
          </div>
          <div className="hero-actions">
            <Link href="/contact" className="btn btn-primary">
              Start a conversation
            </Link>
            <Link href="/about" className="btn btn-secondary">
              More about my process
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
