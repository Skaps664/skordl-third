export const metadata = {
  title: "AI Solutions & Machine Learning | Skord Labs - Pakistan's Top AI Company",
  description: "Advanced AI and machine learning solutions. Natural language processing, computer vision, and intelligent automation by Pakistan's leading AI development company.",
  keywords: ["AI development Pakistan", "machine learning Pakistan", "AI solutions", "artificial intelligence company Pakistan"],
}

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { GradientBar } from "@/components/ui/gradient-bar"
import { ArrowRight, Brain, Bot, Eye, TrendingUp, CheckCircle2, ArrowUpRight, Sparkles, Network } from "lucide-react"
import Link from "next/link"

const capabilities = [
  {
    icon: Brain,
    title: "LLM Integration",
    description: "Integrate GPT-4, Claude, or custom models. Build AI-powered chatbots, assistants, and automation."
  },
  {
    icon: Eye,
    title: "Computer Vision",
    description: "Image recognition, object detection, OCR, and visual search powered by deep learning."
  },
  {
    icon: TrendingUp,
    title: "Predictive Analytics",
    description: "Machine learning models for forecasting, anomaly detection, and pattern recognition."
  },
  {
    icon: Network,
    title: "Natural Language Processing",
    description: "Sentiment analysis, text classification, entity extraction, and language understanding."
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
    items: ["Custom trained models", "LLM fine-tuning", "API endpoints", "Model documentation"]
  },
  {
    title: "Infrastructure",
    items: ["Cloud deployment", "Auto-scaling setup", "Monitoring dashboards", "Cost optimization"]
  },
  {
    title: "Integration",
    items: ["API development", "Frontend integration", "Webhook setup", "Third-party connections"]
  },
  {
    title: "Support",
    items: ["Model retraining", "Performance monitoring", "Technical support", "Feature updates"]
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
    title: "Customer Support Automation",
    description: "AI chatbots that handle 80% of support tickets, reducing response time from hours to seconds.",
    icon: "💬"
  },
  {
    title: "Document Processing",
    description: "Automatically extract data from invoices, contracts, and forms with 95%+ accuracy.",
    icon: "📄"
  },
  {
    title: "Recommendation Systems",
    description: "Personalized product recommendations that increase conversion rates by 35%.",
    icon: "🎯"
  },
  {
    title: "Fraud Detection",
    description: "Real-time anomaly detection that catches fraudulent transactions before they process.",
    icon: "🛡️"
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
                Transform your business with
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
                  artificial intelligence
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10">
                Build AI-powered solutions that automate workflows, enhance decision-making, and unlock 
                new capabilities. From chatbots to machine learning models.
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
                  Explore AI Solutions
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium border border-border rounded-full hover:bg-secondary transition-all"
                >
                  AI Case Studies
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

            <div className="grid md:grid-cols-2 gap-8">
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
                  <div className="text-5xl mb-4">{useCase.icon}</div>
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
                Let's explore how AI can transform your business operations and create new opportunities.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-white rounded-full transition-all hover:shadow-lg"
                style={{ 
                  background: "linear-gradient(135deg, #203eec 0%, #00d4ff 100%)",
                  boxShadow: "0 4px 20px rgba(32, 62, 236, 0.3)"
                }}
              >
                Discuss AI Solutions
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
