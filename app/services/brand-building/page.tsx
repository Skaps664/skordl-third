import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { GradientBar } from "@/components/ui/gradient-bar"
import { ArrowRight, Palette, Rocket, RefreshCcw, Layers, CheckCircle2 } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Brand Building, Rebranding & Launch Services | Skord Labs",
  description:
    "Build a strong brand from scratch, execute full rebranding, and launch with clear positioning, messaging, and growth systems.",
  keywords: ["brand building", "rebranding", "launch strategy", "startup brand launch"],
}

const services = [
  {
    icon: Palette,
    title: "Brand Building From Scratch",
    description:
      "Positioning, tone, identity direction, and messaging frameworks for new ventures and products.",
  },
  {
    icon: RefreshCcw,
    title: "Rebranding",
    description:
      "Evolve your brand for a new market, product line, or growth stage with minimal confusion and maximum clarity.",
  },
  {
    icon: Rocket,
    title: "Launch Strategy",
    description:
      "Go-to-market rollout with landing pages, social narratives, campaign architecture, and activation assets.",
  },
  {
    icon: Layers,
    title: "AI-Enabled Brand Ops",
    description:
      "Use AI for brand consistency, faster content production, and campaign execution across channels.",
  },
]

const deliverables = [
  "Positioning statement and market narrative",
  "Messaging system and voice guidelines",
  "Launch-ready website and campaign copy",
  "Rebrand migration checklist and rollout plan",
  "AI social media workflow for ongoing growth",
]

export default function BrandBuildingPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="py-16 md:py-24 lg:py-32 border-b border-border">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <p className="text-sm font-mono text-muted-foreground mb-6 tracking-wider uppercase">
              Services / Brand Building
            </p>
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight leading-[1.1] mb-6 md:mb-8">
                Build, rebrand, and launch
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
                  with clarity and momentum
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10">
                We help founders and teams craft strong brands, execute rebranding transitions, and launch with a
                repeatable growth setup powered by design, strategy, and AI systems.
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
                  Start Brand Project
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/services/ai-social-media-marketing"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium border border-border rounded-full hover:bg-secondary transition-all"
                >
                  Add AI Social Setup
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 lg:py-32 border-b border-border">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="p-8 border border-border rounded-2xl hover:border-foreground/20 transition-all duration-300 bg-card/50 backdrop-blur-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 shrink-0">
                      <service.icon className="w-6 h-6" style={{ color: "#203eec" }} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 lg:py-32">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6">What you get</h2>
              <ul className="text-left max-w-xl mx-auto space-y-3 mb-10">
                {deliverables.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" style={{ color: "#203eec" }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <GradientBar />
    </>
  )
}
