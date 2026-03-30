export const metadata = {
  title: "AI Systems, Bots, Models & Automation | Skord Labs",
  description: "Design and deploy AI systems for business growth: AI bots, automations, custom AI models, social media AI workflows, and intelligent operations.",
  keywords: ["AI systems", "AI bots", "AI automation", "AI models", "AI business solutions", "AI social media solutions"],
}

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { GradientBar } from "@/components/ui/gradient-bar"
import { ArrowRight, Brain, Bot, Eye, TrendingUp, CheckCircle2, ArrowUpRight, Sparkles, Network } from "lucide-react"
import Link from "next/link"

const capabilities = [
  {
    icon: Brain,
    title: "Custom AI Models",
    description: "Build, fine-tune, and evaluate LLMs and ML models for your domain, workflow, and quality targets."
  },
  {
    icon: Bot,
    title: "AI Bots & Assistants",
    description: "Deploy sales, support, and internal AI bots connected to your data, tools, and business processes."
  },
  {
    icon: Sparkles,
    title: "AI Automation Systems",
    description: "Automate repetitive business operations with AI-driven workflows across CRM, email, chat, and ops tools."
  },
  {
    icon: Network,
    title: "AI Business Solutions",
    description: "Create end-to-end AI systems for support, analytics, decision-making, and team productivity."
  },
  {
    icon: TrendingUp,
    title: "AI Social Media Solutions",
    description: "Set up AI-powered content engines, campaign planning, scheduling, and optimization loops for growth."
  },
  {
    icon: Eye,
    title: "Vision & Intelligence",
    description: "Use computer vision and predictive intelligence for quality control, monitoring, and forecasting."
  }
]

const process = [
  { phase: "AI Strategy & Discovery", duration: "1-2 weeks", description: "Identify AI opportunities, define use cases, and assess data readiness" },
  { phase: "Model Development", duration: "4-8 weeks", description: "Train or fine-tune models, test performance, and optimize for production" },
  { phase: "Integration & Deployment", duration: "2-4 weeks", description: "Integrate AI into your systems, setup infrastructure, and deploy to production" },
  { phase: "Monitoring & Improvement", duration: "Ongoing", description: "Track performance, retrain models, and continuously improve accuracy" }
]

const deliverables = [
  {
    title: "AI Models",
    items: ["Domain-tuned LLMs", "Prediction models", "Evaluation benchmarks", "Model docs"]
  },
  {
    title: "AI Systems",
    items: ["Automation architecture", "Tool integrations", "Guardrails and controls", "Production rollout"]
  },
  {
    title: "Business Solutions",
    items: ["Ops workflows", "Support AI setup", "Sales enablement", "Reporting dashboards"]
  },
  {
    title: "Social Media AI",
    items: ["Content system setup", "Publishing automation", "Creative generation", "Performance optimization"]
  }
]

const metrics = [
  { value: "90%", label: "Automation achieved" },
  { value: "10x", label: "Faster processing" },
  { value: "95%+", label: "Model accuracy" },
  { value: "$200K", label: "Annual cost savings" }
]

const useCases = [
  {
    title: "AI Customer Support Systems",
    description: "Deploy AI support bots that resolve common requests, escalate complex cases, and improve SLA performance.",
    icon: "CS"
  },
  {
    title: "AI Operations Automation",
    description: "Automate onboarding, approvals, and reporting workflows across your business stack.",
    icon: "OP"
  },
  {
    title: "AI Social Media Engines",
    description: "Create always-on social media systems for content generation, scheduling, and campaign experimentation.",
    icon: "SM"
  },
  {
    title: "AI Model-Powered Analytics",
    description: "Build forecasting and decision systems that turn data into actionable growth strategies.",
    icon: "AN"
  }
]

export default function AISolutionsPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="py-16 md:py-24 lg:py-32 border-b border-border relative overflow-hidden">
          <div className="absolute -right-32 md:-right-48 top-32 md:top-40 w-[500px] h-[500px] md:w-[750px] md:h-[750px] pointer-events-none -z-10 opacity-30">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 blur-3xl" />
          </div>

          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <p className="text-sm font-mono text-muted-foreground mb-6 tracking-wider uppercase">
              Services / AI Solutions
            </p>
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight leading-[1.1] mb-6 md:mb-8">
                Build AI systems that
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
                  automate and scale
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10">
                We design practical AI systems for real business outcomes: AI bots, automation workflows,
                AI models, business intelligence, and social media growth engines.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-white rounded-full transition-all hover:shadow-lg"
                  style={{ 
                    background: "linear-gradient(135deg, #203eec 0%, #00d4ff 100%)",
                    boxShadow: "0 4px 20px rgba(32, 62, 236, 0.3)"
                  }}
                >
                  Start AI Project
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/services/ai-systems"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium border border-border rounded-full hover:bg-secondary transition-all"
                >
                  Explore AI Systems
                  <ArrowUpRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 border-b border-border">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {metrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div 
                    className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2"
                    style={{
                      background: "linear-gradient(135deg, #203eec 0%, #00d4ff 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {metric.value}
                  </div>
                  <p className="text-sm text-muted-foreground">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 lg:py-32 border-b border-border">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <div className="max-w-3xl mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6">
                AI capabilities
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From large language models to computer vision, we build AI solutions that deliver real ROI.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {capabilities.map((capability, index) => (
                <div 
                  key={index}
                  className="p-8 border border-border rounded-2xl hover:border-foreground/20 transition-all duration-300 bg-card/50 backdrop-blur-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 shrink-0">
                      <capability.icon className="w-6 h-6" style={{ color: "#203eec" }} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">{capability.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{capability.description}</p>
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
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6">
                Real-world AI applications
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div 
                  key={index}
                  className="p-8 border border-border rounded-2xl bg-card hover:border-foreground/20 transition-all"
                >
                  <div className="text-xl mb-4 font-semibold" style={{ color: "#203eec" }}>{useCase.icon}</div>
                  <h3 className="text-2xl font-semibold mb-4">{useCase.title}</h3>
                  <p className="text-muted-foreground">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 lg:py-32 border-b border-border">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <div className="max-w-3xl mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6">
                AI development process
              </h2>
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
                    {index < process.length - 1 && (
                      <div className="w-0.5 h-full bg-gradient-to-b from-blue-500 to-cyan-500 mt-4" />
                    )}
                  </div>
                  <div className="flex-1 pb-12">
                    <div className="flex items-center gap-4 mb-3">
                      <h3 className="text-2xl font-semibold">{step.phase}</h3>
                      <span className="text-sm text-muted-foreground px-3 py-1 bg-secondary rounded-full">
                        {step.duration}
                      </span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 lg:py-32 border-b border-border">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <div className="max-w-3xl mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6">
                Complete AI solution
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {deliverables.map((deliverable, index) => (
                <div 
                  key={index}
                  className="p-8 border border-border rounded-2xl bg-card/50 backdrop-blur-sm hover:border-foreground/20 transition-all"
                >
                  <h3 className="text-xl font-semibold mb-6">{deliverable.title}</h3>
                  <ul className="space-y-3">
                    {deliverable.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" style={{ color: "#203eec" }} />
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 lg:py-32">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6">
                Ready to leverage AI?
              </h2>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                Let's plan your AI roadmap and launch systems that save time, reduce cost, and grow revenue.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-white rounded-full transition-all hover:shadow-lg"
                style={{ 
                  background: "linear-gradient(135deg, #203eec 0%, #00d4ff 100%)",
                  boxShadow: "0 4px 20px rgba(32, 62, 236, 0.3)"
                }}
              >
                Discuss AI Systems
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
