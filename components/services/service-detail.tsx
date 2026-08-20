import Image from "next/image"
import Link from "next/link"
import Script from "next/script"
import { ArrowRight, ArrowUpRight, CheckCircle2, Minus, Plus } from "lucide-react"
import { caseStudies } from "@/lib/case-studies"
import { absoluteUrl } from "@/lib/seo"
import type { ServiceContent } from "@/lib/services-content"

const ACCENT = "#203eec"
const ACCENT_GRADIENT = "linear-gradient(135deg, #203eec 0%, #00d4ff 100%)"
const HERO_GRADIENT = "linear-gradient(135deg, #ff006e 0%, #8b5cf6 33%, #203eec 66%, #00d4ff 100%)"

const gradientText = {
  background: ACCENT_GRADIENT,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
} as const

export function ServiceDetail({ service }: { service: ServiceContent }) {
  const related = (service.relatedCaseStudySlugs ?? [])
    .map((slug) => caseStudies.find((study) => study.slug === slug))
    .filter((study): study is (typeof caseStudies)[number] => Boolean(study))

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.metaTitle.split(" | ")[0],
    description: service.metaDescription,
    provider: { "@type": "Organization", name: "Skord Labs", url: absoluteUrl("/") },
    url: absoluteUrl(`/services/${service.slug}`),
    areaServed: "Worldwide",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: service.capabilities.heading,
      itemListElement: service.capabilities.groups.map((group) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: group.title, description: group.description },
      })),
    },
  }

  return (
    <main className="pt-20">
      <Script
        id={`service-schema-${service.slug}`}
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id={`faq-schema-${service.slug}`}
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Hero */}
      <section className="py-16 md:py-24 lg:py-32 border-b border-border relative overflow-hidden">
        <div className="absolute -right-32 md:-right-48 top-32 md:top-40 w-[500px] h-[500px] md:w-[750px] md:h-[750px] pointer-events-none -z-10 opacity-30">
          <div className={`w-full h-full rounded-full bg-gradient-to-br ${service.glow} blur-3xl`} />
        </div>

        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <p className="text-sm font-mono text-muted-foreground mb-6 tracking-wider uppercase">{service.eyebrow}</p>
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight leading-[1.1] mb-6 md:mb-8">
              {service.titleLead}
              <br />
              <span className="inline-block mt-2" style={{ ...gradientText, background: HERO_GRADIENT }}>
                {service.titleGradient}
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">{service.intro}</p>

            <ul className="flex flex-wrap gap-x-6 gap-y-3 mb-10">
              {service.heroHighlights.map((highlight) => (
                <li key={highlight} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: ACCENT }} />
                  {highlight}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={service.primaryCta.href}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-white rounded-full transition-all hover:shadow-lg"
                style={{ background: ACCENT_GRADIENT, boxShadow: "0 4px 20px rgba(32, 62, 236, 0.3)" }}
              >
                {service.primaryCta.label}
                <ArrowRight className="w-5 h-5" />
              </Link>
              {service.secondaryCta ? (
                <Link
                  href={service.secondaryCta.href}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium border border-border rounded-full hover:bg-secondary transition-all"
                >
                  {service.secondaryCta.label}
                  <ArrowUpRight className="w-5 h-5" />
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-16 md:py-24 border-b border-border">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {service.metrics.map((metric) => (
              <div key={metric.label} className="text-center">
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2" style={gradientText}>
                  {metric.value}
                </div>
                <p className="text-sm text-muted-foreground">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem / shift */}
      <section className="py-16 md:py-24 lg:py-32 border-b border-border">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6">
              {service.challenges.heading}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{service.challenges.intro}</p>
          </div>

          <div className="border border-border rounded-2xl overflow-hidden bg-card/50 backdrop-blur-sm">
            <div className="hidden md:grid md:grid-cols-2 border-b border-border bg-secondary/40">
              <p className="px-8 py-4 text-sm font-medium text-muted-foreground">Where teams get stuck</p>
              <p className="px-8 py-4 text-sm font-medium border-l border-border" style={{ color: ACCENT }}>
                How we solve it
              </p>
            </div>
            {service.challenges.items.map((item) => (
              <div key={item.problem} className="grid md:grid-cols-2 border-b border-border last:border-b-0">
                <div className="px-8 py-6 flex items-start gap-3">
                  <Minus className="w-5 h-5 shrink-0 mt-0.5 text-muted-foreground" />
                  <p className="text-muted-foreground leading-relaxed">{item.problem}</p>
                </div>
                <div className="px-8 py-6 flex items-start gap-3 md:border-l border-border bg-secondary/20">
                  <Plus className="w-5 h-5 shrink-0 mt-0.5" style={{ color: ACCENT }} />
                  <p className="leading-relaxed">{item.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24 lg:py-32 border-b border-border bg-secondary/30">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6">
              {service.benefits.heading}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{service.benefits.intro}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {service.benefits.items.map((benefit) => (
              <div
                key={benefit.title}
                className="p-8 border border-border rounded-2xl hover:border-foreground/20 transition-all duration-300 bg-card/50 backdrop-blur-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 shrink-0">
                    <benefit.icon className="w-6 h-6" style={{ color: ACCENT }} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">{benefit.description}</p>
                    <p className="text-sm font-medium" style={{ color: ACCENT }}>
                      {benefit.proof}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16 md:py-24 lg:py-32 border-b border-border">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6">
              {service.capabilities.heading}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{service.capabilities.intro}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.capabilities.groups.map((group) => (
              <div
                key={group.title}
                className="p-8 border border-border rounded-2xl bg-card/50 backdrop-blur-sm hover:border-foreground/20 transition-all"
              >
                <h3 className="text-xl font-semibold mb-3">{group.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">{group.description}</p>
                <ul className="space-y-3">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" style={{ color: ACCENT }} />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it is for */}
      <section className="py-16 md:py-24 lg:py-32 border-b border-border bg-secondary/30">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6">
              {service.audience.heading}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{service.audience.intro}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {service.audience.items.map((item, index) => (
              <div key={item.title} className="p-8 border border-border rounded-2xl bg-card hover:border-foreground/20 transition-all">
                <p className="text-sm font-mono text-muted-foreground mb-4">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{item.description}</p>
                <ul className="space-y-2">
                  {item.signals.map((signal) => (
                    <li key={signal} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="mt-2 w-1 h-1 rounded-full shrink-0" style={{ background: ACCENT }} />
                      {signal}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-24 lg:py-32 border-b border-border">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6">
              {service.process.heading}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{service.process.intro}</p>
          </div>

          <div className="relative">
            {service.process.steps.map((step, index) => (
              <div key={step.phase} className="flex gap-6 md:gap-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-white shrink-0"
                    style={{ background: ACCENT_GRADIENT }}
                  >
                    {index + 1}
                  </div>
                  {index < service.process.steps.length - 1 && (
                    <div className="w-0.5 h-full bg-gradient-to-b from-blue-500 to-cyan-500 mt-4" />
                  )}
                </div>
                <div className="flex-1 pb-12">
                  <div className="flex flex-wrap items-center gap-3 md:gap-4 mb-3">
                    <h3 className="text-xl md:text-2xl font-semibold">{step.phase}</h3>
                    <span className="text-sm text-muted-foreground px-3 py-1 bg-secondary rounded-full">
                      {step.duration}
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">{step.description}</p>
                  <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2">
                    {step.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-2 w-1 h-1 rounded-full shrink-0" style={{ background: ACCENT }} />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-16 md:py-24 lg:py-32 border-b border-border bg-secondary/30">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6">
              {service.deliverables.heading}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{service.deliverables.intro}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.deliverables.groups.map((group) => (
              <div
                key={group.title}
                className="p-8 border border-border rounded-2xl bg-card/50 backdrop-blur-sm hover:border-foreground/20 transition-all"
              >
                <h3 className="text-xl font-semibold mb-6">{group.title}</h3>
                <ul className="space-y-3">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" style={{ color: ACCENT }} />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stack */}
      <section className="py-16 md:py-24 lg:py-32 border-b border-border">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6">
              {service.stack.heading}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{service.stack.intro}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.stack.groups.map((group) => (
              <div key={group.label} className="p-6 border border-border rounded-2xl bg-card/50 backdrop-blur-sm">
                <p className="text-sm font-mono uppercase tracking-wider text-muted-foreground mb-4">{group.label}</p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="px-3 py-1 text-sm bg-secondary rounded-full">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement models */}
      <section className="py-16 md:py-24 lg:py-32 border-b border-border bg-secondary/30">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6">
              {service.engagements.heading}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{service.engagements.intro}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {service.engagements.options.map((option) => (
              <div
                key={option.name}
                className="flex flex-col p-8 border border-border rounded-2xl bg-card hover:border-foreground/20 transition-all"
              >
                <h3 className="text-xl font-semibold mb-2">{option.name}</h3>
                <p className="text-sm text-muted-foreground mb-6">{option.bestFor}</p>
                <ul className="space-y-3 mb-8 flex-1">
                  {option.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" style={{ color: ACCENT }} />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground">Typical timeline</p>
                  <p className="font-semibold">{option.timeline}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related work */}
      {related.length > 0 ? (
        <section className="py-16 md:py-24 lg:py-32 border-b border-border">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <div className="max-w-3xl mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6">
                Related work we shipped
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Real projects delivered by the same team you would be working with.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {related.map((study) => (
                <Link key={study.slug} href={`/case-studies/${study.slug}`} className="group block h-full">
                  <article className="h-full overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:border-foreground/20 hover:-translate-y-1">
                    <div className="relative aspect-[2/1] overflow-hidden bg-secondary">
                      <Image
                        src={study.image || "/placeholder.svg"}
                        alt={study.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <p className="text-sm text-muted-foreground mb-2">{study.category}</p>
                      <h3 className="text-lg font-semibold mb-3">{study.title}</h3>
                      <ul className="space-y-1">
                        {study.results.slice(0, 2).map((result) => (
                          <li key={result} className="text-sm text-muted-foreground">
                            • {result}
                          </li>
                        ))}
                      </ul>
                      <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium group-hover:text-primary transition-colors">
                        View case study
                        <ArrowUpRight className="w-4 h-4" />
                      </span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* FAQ */}
      <section className="py-16 md:py-24 lg:py-32 border-b border-border bg-secondary/30">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6">
                Questions clients ask
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Straight answers before you book a call. Anything else, ask us directly.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
              >
                Ask a different question
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="divide-y divide-border border-y border-border">
              {service.faqs.map((faq) => (
                <details key={faq.question} className="group py-6">
                  <summary className="flex items-start justify-between gap-6 cursor-pointer list-none">
                    <h3 className="text-lg font-medium">{faq.question}</h3>
                    <Plus
                      className="w-5 h-5 shrink-0 mt-1 transition-transform duration-300 group-open:rotate-45"
                      style={{ color: ACCENT }}
                    />
                  </summary>
                  <p className="mt-4 text-muted-foreground leading-relaxed pr-11">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 lg:py-32">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6">{service.cta.title}</h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">{service.cta.description}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-white rounded-full transition-all hover:shadow-lg"
                style={{ background: ACCENT_GRADIENT, boxShadow: "0 4px 20px rgba(32, 62, 236, 0.3)" }}
              >
                {service.cta.buttonLabel}
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium border border-border rounded-full hover:bg-secondary transition-all"
              >
                See our recent projects
                <ArrowUpRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
