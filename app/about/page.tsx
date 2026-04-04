import type { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { GradientBar } from "@/components/ui/gradient-bar"
import Link from "next/link"
import { FlaskConical, Microscope, Cpu, Users, CheckCircle2, ArrowRight } from "lucide-react"
import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "About Skord Labs | Research-Driven Software Team",
  description:
    "Learn how Skord Labs combines scientific rigor, software engineering, and team enablement to help organizations scale sustainably.",
  path: "/about",
  keywords: ["about skord labs", "software research", "engineering team"],
})

const researchPillars = [
  {
    icon: FlaskConical,
    title: "Research-Driven Engineering",
    description: "We begin with hypotheses, constraints, and measurable outcomes before writing production code.",
  },
  {
    icon: Microscope,
    title: "Scientific Product Thinking",
    description: "Experiments, controlled iteration, and evidence-based decisions guide our architecture and product bets.",
  },
  {
    icon: Cpu,
    title: "Systems-First Development",
    description: "From APIs to infrastructure, we design robust systems that stay stable under growth and operational load.",
  },
  {
    icon: Users,
    title: "Team Enablement",
    description: "We help organizations find real talent, strengthen execution habits, and develop internal technical leadership.",
  },
]

const principles = [
  "Clarity before complexity",
  "Experiments before assumptions",
  "Reliability before hype",
  "Long-term maintainability over short-term shortcuts",
  "Partnership over vendor mindset",
]

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="py-16 md:py-24 lg:py-32 border-b border-border relative overflow-hidden">
          <div className="absolute -right-20 md:-right-36 top-10 w-[320px] h-[320px] md:w-[520px] md:h-[520px] rounded-full blur-3xl opacity-30 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 pointer-events-none" />
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <div className="max-w-4xl">
              <p className="text-sm font-mono text-muted-foreground mb-6 tracking-wider uppercase">Company / About Skord Labs</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight leading-[1.05] mb-6">
                Scientific software research,
                <br />
                <span
                  className="inline-block mt-2"
                  style={{
                    background: "linear-gradient(135deg, #ff006e 0%, #8b5cf6 33%, #203eec 66%, #00d4ff 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  engineering, and growth
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
                Skord Labs is a software research and development laboratory helping teams transform ambitious ideas into
                production systems. We combine technical rigor, disciplined experimentation, and strategic guidance to
                help organizations build faster, hire better, and scale sustainably.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 border-b border-border">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {researchPillars.map((pillar) => (
                <div key={pillar.title} className="p-8 border border-border rounded-2xl bg-card/60 backdrop-blur-sm">
                  <div className="p-3 rounded-xl bg-primary/10 inline-flex mb-5">
                    <pillar.icon className="w-6 h-6" style={{ color: "#203eec" }} />
                  </div>
                  <h2 className="text-2xl font-semibold mb-3">{pillar.title}</h2>
                  <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 border-b border-border bg-secondary/30">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <div className="max-w-4xl mb-10">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">How we think</h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                Our operating model is intentionally scientific: define the problem, model constraints, test assumptions,
                ship in controlled iterations, and improve based on real evidence.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {principles.map((principle) => (
                <div key={principle} className="flex items-start gap-3 p-4 rounded-xl border border-border bg-card">
                  <CheckCircle2 className="w-5 h-5 mt-0.5 shrink-0" style={{ color: "#203eec" }} />
                  <p className="text-sm md:text-base">{principle}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <div className="p-8 md:p-12 lg:p-14 border border-border rounded-3xl bg-card/70">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Build with a laboratory mindset</h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-3xl mb-8">
                If you need a partner that can research deeply, execute reliably, and mentor your team while scaling,
                we should talk.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3 text-sm md:text-base font-medium rounded-full text-white transition-all hover:shadow-lg"
                style={{
                  background: "linear-gradient(135deg, #203eec 0%, #00d4ff 100%)",
                  boxShadow: "0 4px 20px rgba(32, 62, 236, 0.3)",
                }}
              >
                Talk to Skord Labs
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <GradientBar />
    </>
  )
}
