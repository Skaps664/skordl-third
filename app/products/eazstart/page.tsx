export const metadata = {
  title: "EazStart - Startup Platform by Skord Labs | Pakistan's Top Software Company",
  description: "Launch and scale your startup with EazStart. Idea validation, team collaboration, and growth tracking platform by Pakistan's leading software company.",
  keywords: ["startup platform", "EazStart", "startup tools Pakistan", "idea validation"],
}

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { GradientBar } from "@/components/ui/gradient-bar"
import { ArrowRight, Target, Users, TrendingUp, CheckCircle2, ArrowUpRight, Rocket, BarChart } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const features = [
  {
    icon: Target,
    title: "Idea Validation",
    description: "Test your startup ideas with structured frameworks and validation tools."
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Keep your entire team aligned with shared goals, tasks, and progress tracking."
  },
  {
    icon: TrendingUp,
    title: "Growth Tracking",
    description: "Monitor KPIs, revenue, and key metrics as you scale from MVP to product-market fit."
  },
  {
    icon: BarChart,
    title: "Investor-Ready Reports",
    description: "Generate professional reports and presentations to showcase traction to investors."
  }
]

const benefits = [
  "All-in-one startup management platform",
  "Idea validation frameworks built-in",
  "OKR and goal tracking",
  "Team collaboration tools",
  "Pitch deck builder",
  "Investor tracking CRM",
  "Financial projections & burn rate calculator",
  "Milestone and sprint planning",
  "Progress dashboards",
  "Export investor reports"
]

const metrics = [
  { value: "500+", label: "Startups using EazStart" },
  { value: "85%", label: "Successfully raised funding" },
  { value: "10x", label: "Faster planning process" },
  { value: "Free", label: "Forever free plan" }
]

export default function EazStartPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="py-16 md:py-24 lg:py-32 border-b border-border relative overflow-hidden">
          <div className="absolute -right-32 md:-right-48 top-32 md:top-40 w-[500px] h-[500px] md:w-[750px] md:h-[750px] pointer-events-none -z-10 opacity-30">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-pink-500/20 to-purple-500/20 blur-3xl" />
          </div>

          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <div className="mb-6 flex items-center gap-3">
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-green-500/10 text-green-600 dark:text-green-400">
                    Live
                  </span>
                  <span className="text-sm text-muted-foreground">SaaS • Startup</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight leading-[1.1] mb-6 md:mb-8">
                  <span 
                    style={{
                      background: "linear-gradient(135deg, #ff006e 0%, #8b5cf6 33%, #203eec 66%, #00d4ff 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    EazStart
                  </span>
                  <br />
                  <span className="text-3xl md:text-4xl lg:text-5xl">
                    Startup Management Platform
                  </span>
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10">
                  Track, manage, and streamline your startup operations from idea validation to scaling. 
                  Everything you need to run a successful startup in one platform.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="https://eazstart.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-white rounded-full transition-all hover:shadow-lg"
                    style={{ 
                      background: "linear-gradient(135deg, #203eec 0%, #00d4ff 100%)",
                      boxShadow: "0 4px 20px rgba(32, 62, 236, 0.3)"
                    }}
                  >
                    Launch EazStart
                    <ArrowUpRight className="w-5 h-5" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium border border-border rounded-full hover:bg-secondary transition-all"
                  >
                    Request Demo
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>

              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-transparent border border-border">
                <Image
                  src="/images/work-onboarding.png"
                  alt="EazStart Platform"
                  fill
                  className="object-cover"
                />
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
                Everything to run your startup
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From validating ideas to scaling your business, EazStart provides all the tools founders need.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="p-8 border border-border rounded-2xl hover:border-foreground/20 transition-all duration-300 bg-card/50 backdrop-blur-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 shrink-0">
                      <feature.icon className="w-6 h-6" style={{ color: "#203eec" }} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
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
                Complete platform features
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 p-4">
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" style={{ color: "#203eec" }} />
                  <span className="text-base text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 lg:py-32">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6">
                Start building your startup today
              </h2>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                Join hundreds of founders using EazStart to validate ideas, track progress, and raise funding.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="https://eazstart.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-white rounded-full transition-all hover:shadow-lg"
                  style={{ 
                    background: "linear-gradient(135deg, #203eec 0%, #00d4ff 100%)",
                    boxShadow: "0 4px 20px rgba(32, 62, 236, 0.3)"
                  }}
                >
                  Get Started Free
                  <ArrowUpRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium border border-border rounded-full hover:bg-secondary transition-all"
                >
                  Talk to Founders
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <GradientBar />
    </>
  )
}
