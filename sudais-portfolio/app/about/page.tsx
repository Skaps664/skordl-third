import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About",
  description: "About Sudais, product designer focused on strategy, systems, and measurable business impact.",
}

export default function AboutPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">About</span>
          <h2>Product designer with a systems mindset</h2>
          <p>
            I design digital experiences that are intuitive for users and sustainable for teams to build. Over the years, I have worked across fintech, healthcare, and ecommerce products where outcomes mattered more than visuals alone.
          </p>
        </div>

        <div className="detail-grid">
          <article className="detail-panel">
            <h4>What I focus on</h4>
            <ul>
              <li>Transforming complex workflows into clear and confident user journeys.</li>
              <li>Building robust design systems that speed up delivery while preserving quality.</li>
              <li>Aligning product, design, and engineering around shared metrics and decisions.</li>
              <li>Balancing execution detail with strategic product direction.</li>
            </ul>
          </article>

          <article className="detail-panel">
            <h4>Quick profile</h4>
            <ul>
              <li>Role: Product Designer</li>
              <li>Base: Pakistan</li>
              <li>Experience: 8+ years</li>
              <li>Tools: Figma, FigJam, Framer, Notion, Maze</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  )
}
