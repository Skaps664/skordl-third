import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { GradientBar } from "@/components/ui/gradient-bar"
import { ArrowRight, Bot, Workflow, Brain, Building2, Wrench, CheckCircle2 } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "AI Systems & Automation Services | Skord Labs",
  description:
    "End-to-end AI systems for business: AI bots, AI automations, custom models, AI tools, and intelligent workflows.",
  keywords: [
    "AI systems",
    "AI bots",
    "AI automation",
    "AI business solutions",
    "AI tools",
    "custom AI models",
  ],
}

const pillars = [
  {
    icon: Bot,
    title: "AI Bots",
    description:
      "Customer support bots, lead qualification bots, and internal assistant bots that work with your real data.",
  },
  {
    icon: Workflow,
    title: "AI Automations",
    description:
      "Automate repetitive workflows across sales, support, operations, and reporting with AI and workflow orchestration.",
  },
  {
    icon: Brain,
    title: "AI Models",
    description:
      "Fine-tuned LLM and ML models for classification, prediction, recommendation, and business decision support.",
  },
  {
    icon: Building2,
    title: "AI Business Systems",
    description:
      "Integrated AI systems that connect CRM, support, marketing, and operations into one growth engine.",
  },
  {
    icon: Wrench,
    title: "AI Tools",
    description:
      "Custom internal AI tools for teams to generate content, analyze data, and take faster actions.",
  },
]

const process = [
  {
    phase: "AI Discovery",
    duration: "1 week",
    description: "Map your workflows, identify high-ROI use cases, and define KPIs.",
  },
  {
    phase: "System Design",
    duration: "1-2 weeks",
    description: "Design model strategy, automation architecture, tools, and data flows.",
  },
  {
    phase: "Build & Integrate",
    duration: "3-8 weeks",
    description: "Implement bots, automations, and AI model endpoints with real integrations.",
  },
  {
    phase: "Launch & Improve",
    duration: "Ongoing",
    description: "Track performance, optimize prompts/models, and scale successful workflows.",
  },
]

const outcomes = [
  "Faster response times with AI bots",
  "Lower operating cost via automation",
  "Higher team productivity with AI tools",
  "Better conversion through AI decisioning",
  "Reusable AI foundation for future growth",
]

export default function AISystemsPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="py-16 md:py-24 lg:py-32 border-b border-border">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <p className="text-sm font-mono text-muted-foreground mb-6 tracking-wider uppercase">
              Services / AI Systems
            </p>
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight leading-[1.1] mb-6 md:mb-8">
                AI systems that run
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
                  your business smarter
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10">
                We design, build, and deploy complete AI systems combining bots, automations, and models to reduce
                manual effort and increase business velocity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-white rounded-full transition-all hover:shadow-lg"
                  style={{
                    background: "linear-gradient(135deg, #203eec 0%, #00d4ff 100%)",
                    boxShadow: "0 4px 20px rgba(32, 62, 236, 0.3)",
                  }}
                >
                  Build My AI System
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/services/ai-social-media-marketing"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium border border-border rounded-full hover:bg-secondary transition-all"
                >
                  AI Social Media Setup
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 lg:py-32 border-b border-border">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <div className="max-w-3xl mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6">What we build</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pillars.map((pillar, index) => (
                <div
                  key={index}
                  className="p-8 border border-border rounded-2xl hover:border-foreground/20 transition-all duration-300 bg-card/50 backdrop-blur-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 shrink-0">
                      <pillar.icon className="w-6 h-6" style={{ color: "#203eec" }} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">{pillar.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 lg:py-32 border-b border-border bg-secondary/30">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <div className="max-w-3xl mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6">How we deliver</h2>
            </div>
            <div className="relative">
              {process.map((step, index) => (
                <div key={index} className="flex gap-8 mb-12 last:mb-0">
                  <div className="flex flex-col items-center">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-white shrink-0"
                      style={{ background: "linear-gradient(135deg, #203eec 0%, #00d4ff 100%)" }}
                    >
                      {index + 1}
                    </div>
                    {index < process.length - 1 && <div className="w-0.5 h-full bg-gradient-to-b from-blue-500 to-cyan-500 mt-4" />}
                  </div>
                  <div className="flex-1 pb-12">
                    <div className="flex items-center gap-4 mb-3">
                      <h3 className="text-2xl font-semibold">{step.phase}</h3>
                      <span className="text-sm text-muted-foreground px-3 py-1 bg-secondary rounded-full">{step.duration}</span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 lg:py-32">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6">What your team gets</h2>
              <ul className="text-left max-w-xl mx-auto space-y-3 mb-10">
                {outcomes.map((outcome, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" style={{ color: "#203eec" }} />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-white rounded-full transition-all hover:shadow-lg"
                style={{
                  background: "linear-gradient(135deg, #203eec 0%, #00d4ff 100%)",
                  boxShadow: "0 4px 20px rgba(32, 62, 236, 0.3)",
                }}
              >
                Book AI Strategy Call
                <ArrowRight className="w-5 h-5" />
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
