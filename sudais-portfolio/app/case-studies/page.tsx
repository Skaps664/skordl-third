import type { Metadata } from "next"
import Link from "next/link"
import { caseStudies } from "@/lib/portfolio-data"

export const metadata: Metadata = {
  title: "Case Studies",
  description: "A selection of product design case studies by Sudais.",
}

export default function CaseStudiesPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Work</span>
          <h2>Case studies with measurable outcomes</h2>
          <p>
            Each project below highlights design decisions, process details, and business results.
          </p>
        </div>

        <div className="cards">
          {caseStudies.map((study) => (
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
  )
}
