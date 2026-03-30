import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { GradientBar } from "@/components/ui/gradient-bar"
import { ArrowRight, Megaphone, Calendar, BarChart3, Sparkles, CheckCircle2 } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "AI Social Media Marketing Setup | Skord Labs",
  description:
    "Launch AI-powered social media systems: strategy, content workflows, automation, scheduling, and analytics.",
  keywords: ["AI social media", "AI marketing setup", "content automation", "social media automation"],
}

const modules = [
  {
    icon: Megaphone,
    title: "AI Strategy Setup",
    description: "Audience mapping, positioning, channel strategy, and monthly campaign plan with clear goals.",
  },
  {
    icon: Sparkles,
    title: "AI Content Engine",
    description: "Prompt systems and templates for posts, hooks, scripts, captions, and creative direction.",
  },
  {
    icon: Calendar,
    title: "Publishing Automation",
    description: "Automated publishing flows for Instagram, LinkedIn, TikTok, and X with approvals.",
  },
  {
    icon: BarChart3,
    title: "Performance Optimization",
    description: "Tracking dashboards, A/B testing loops, and monthly iteration based on what converts.",
  },
]

const setupItems = [
  "Brand voice and messaging system",
  "Weekly AI-assisted content calendar",
  "Creative generation workflow",
  "Automated scheduling and posting",
  "Reporting dashboard and growth playbook",
]

export default function AISocialMediaMarketingPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="py-16 md:py-24 lg:py-32 border-b border-border">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <p className="text-sm font-mono text-muted-foreground mb-6 tracking-wider uppercase">
              Services / AI Social Media Marketing
            </p>
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight leading-[1.1] mb-6 md:mb-8">
                AI social media systems
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
                  built for consistent growth
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10">
                We set up AI social media operations end-to-end so your team can publish faster, stay on-brand, and
                optimize performance continuously.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-white rounded-full transition-all hover:shadow-lg"
                style={{
                  background: "linear-gradient(135deg, #203eec 0%, #00d4ff 100%)",
                  boxShadow: "0 4px 20px rgba(32, 62, 236, 0.3)",
                }}
              >
                Setup AI Social Media
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 lg:py-32 border-b border-border">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <div className="grid md:grid-cols-2 gap-8">
              {modules.map((module, index) => (
                <div
                  key={index}
                  className="p-8 border border-border rounded-2xl hover:border-foreground/20 transition-all duration-300 bg-card/50 backdrop-blur-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 shrink-0">
                      <module.icon className="w-6 h-6" style={{ color: "#203eec" }} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">{module.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{module.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 lg:py-32 bg-secondary/30">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6">What we set up for you</h2>
              <ul className="text-left max-w-xl mx-auto space-y-3 mb-10">
                {setupItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" style={{ color: "#203eec" }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/services/brand-building"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium border border-border rounded-full hover:bg-secondary transition-all"
              >
                Explore Brand Building
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
