import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Sudais for product design projects or roles.",
}

export default function ContactPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Contact</span>
          <h2>Let's design something ambitious together</h2>
          <p>
            For product design roles, consulting, or case study walkthroughs, reach out and I will respond within one business day.
          </p>
        </div>

        <div className="contact-box">
          <div className="detail-grid">
            <article className="detail-panel">
              <h4>Email</h4>
              <p>
                <a href="mailto:sudais@skordlabs.com">sudais@skordlabs.com</a>
              </p>

              <h4 style={{ marginTop: "1.1rem" }}>Calendly</h4>
              <p>
                <a href="https://calendly.com" target="_blank" rel="noreferrer">
                  Book a meeting slot
                </a>
              </p>
            </article>

            <article className="detail-panel">
              <h4>What to include in your message</h4>
              <ul>
                <li>Your product stage and team size.</li>
                <li>The design challenge or opportunity.</li>
                <li>Desired timeline and expected outcomes.</li>
              </ul>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
