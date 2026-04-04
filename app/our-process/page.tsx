import type { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { GradientBar } from "@/components/ui/gradient-bar"
import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Our Process | Skord Labs Delivery System",
  description:
    "See Skord Labs' end-to-end process from discovery and architecture to team enablement, launch, and optimization.",
  path: "/our-process",
  keywords: ["software delivery process", "technical execution", "product development lifecycle"],
})

const processSteps = [
  {
    phase: "01 · Research and Discovery",
    details:
      "We map business goals, technical constraints, and user behavior. This stage defines measurable outcomes and a realistic delivery strategy.",
  },
  {
    phase: "02 · Architecture and Planning",
    details:
      "Our engineers design scalable system architecture, define milestones, and align product scope with timeline and quality thresholds.",
  },
  {
    phase: "03 · Build and Validate",
    details:
      "Execution runs in iterative cycles with demos, QA, and performance checks. We validate assumptions continuously before scaling further.",
  },
  {
    phase: "04 · Team Management and Enablement",
    details:
      "We guide delivery routines, engineering standards, and hiring quality so your internal team can execute with consistency and confidence.",
  },
  {
    phase: "05 · Scale and Optimization",
    details:
      "After launch, we optimize performance, reliability, and operations while helping teams sustain momentum through structured improvements.",
  },
]

const approachItems = [
  {
    title: "Research-Driven Development",
    description: "Every engagement starts with evidence, not assumptions.",
  },
  {
    title: "Engineering Excellence",
    description: "Production quality and maintainable systems from day one.",
  },
  {
    title: "AI-First Mindset",
    description: "We use modern AI capabilities where they create real advantage.",
  },
  {
    title: "Iterative Innovation",
    description: "Fast loops for feedback, validation, and measurable progress.",
  },
  {
    title: "Collaborative Partnership",
    description: "We work with your team as strategic operators, not just implementers.",
  },
  {
    title: "Scientific Rigor",
    description: "Clear frameworks, precise execution, and continuous learning.",
  },
]

export default function OurProcessPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="py-16 md:py-24 lg:py-32 border-b border-border relative overflow-hidden">
          <div className="absolute -left-20 md:-left-32 top-14 w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full blur-3xl opacity-25 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 pointer-events-none" />
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <div className="max-w-4xl">
              <p className="text-sm font-mono text-muted-foreground mb-6 tracking-wider uppercase">Company / Our Process</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight leading-[1.05] mb-6">
                How we manage delivery,
                <br />
                teams, and outcomes
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
                Our process combines strategic research, engineering operations, and team enablement. We do not just ship software,
                we build reliable execution systems your organization can sustain.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 border-b border-border">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <div className="space-y-5">
              {processSteps.map((step) => (
                <div key={step.phase} className="p-6 md:p-8 rounded-2xl border border-border bg-card/70">
                  <h2 className="text-xl md:text-2xl font-semibold mb-3">{step.phase}</h2>
                  <p className="text-muted-foreground leading-relaxed">{step.details}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 border-b border-border bg-secondary/30">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <div className="max-w-3xl mb-10">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Our Approach</h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                The same principles presented in the home section "Our Approach" guide every engagement,
                from discovery to post-launch scaling.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {approachItems.map((item) => (
                <div key={item.title} className="p-5 border border-border rounded-xl bg-card">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 mt-0.5 shrink-0" style={{ color: "#203eec" }} />
                    <div>
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <div className="p-8 md:p-12 border border-border rounded-3xl bg-card/70">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Need this process applied to your team?</h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-3xl mb-8">
                We can help you set up delivery operations, improve team management, and build a repeatable product process
                that supports long-term growth.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3 text-sm md:text-base font-medium rounded-full text-white transition-all hover:shadow-lg"
                style={{
                  background: "linear-gradient(135deg, #203eec 0%, #00d4ff 100%)",
                  boxShadow: "0 4px 20px rgba(32, 62, 236, 0.3)",
                }}
              >
                Discuss Your Process
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
