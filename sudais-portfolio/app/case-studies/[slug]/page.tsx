import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { caseStudies } from "@/lib/portfolio-data"

type Params = {
  slug: string
}

export async function generateStaticParams(): Promise<Params[]> {
  return caseStudies.map((study) => ({ slug: study.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>
}): Promise<Metadata> {
  const { slug } = await params
  const study = caseStudies.find((item) => item.slug === slug)

  if (!study) {
    return {
      title: "Case Study",
    }
  }

  return {
    title: study.title,
    description: study.summary,
  }
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<Params>
}) {
  const { slug } = await params
  const study = caseStudies.find((item) => item.slug === slug)

  if (!study) {
    notFound()
  }

  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">{study.category}</span>
          <h2>{study.title}</h2>
          <p>{study.summary}</p>
        </div>

        <div className="detail-grid">
          <article className="detail-panel">
            <h4>Challenge</h4>
            <p>{study.challenge}</p>

            <h4 style={{ marginTop: "1.1rem" }}>Approach</h4>
            <ul>
              {study.approach.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ul>
          </article>

          <article className="detail-panel">
            <h4>Project details</h4>
            <ul>
              <li>Role: {study.role}</li>
              <li>Timeline: {study.timeline}</li>
            </ul>

            <h4 style={{ marginTop: "1.1rem" }}>Outcomes</h4>
            <ul>
              {study.outcomes.map((outcome) => (
                <li key={outcome}>{outcome}</li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  )
}
