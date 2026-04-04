import type { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { GradientBar } from "@/components/ui/gradient-bar"
import { ArrowRight, Rocket, TrendingUp, Users, Zap, CheckCircle2, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Solutions for Startups | Skord Labs",
  description:
    "MVP development, startup architecture, and technical guidance to help founders launch faster and scale with confidence.",
  path: "/solutions/for-startups",
  keywords: ["startup development", "MVP development", "technical co-founder support"],
})

const startupBenefits = [
  {
    icon: Zap,
    title: "Rapid MVP Development",
    description: "Launch your product in weeks, not months. We help you validate ideas quickly with production-ready prototypes."
  },
  {
    icon: TrendingUp,
    title: "Scalable Architecture",
    description: "Build on foundations that grow with you. No need to rebuild as you scale from 100 to 100K users."
  },
  {
    icon: Users,
    title: "Technical Co-Founder Support",
    description: "Strategic technical guidance when you need it most. We complement your team's expertise."
  },
  {
    icon: Rocket,
    title: "Investor-Ready Solutions",
    description: "Impressive demos and solid technical foundations that investors want to see."
  }
]

const offerings = [
  {
    title: "MVP Development",
    items: ["Product strategy & roadmap", "Core feature development", "User testing & iteration", "Launch support"]
  },
  {
    title: "Technical Architecture",
    items: ["Scalable system design", "Cloud infrastructure setup", "Security best practices", "Performance optimization"]
  },
  {
    title: "Product Engineering",
    items: ["Full-stack development", "Mobile app development", "API development", "Third-party integrations"]
  },
  {
    title: "Growth Engineering",
    items: ["Analytics implementation", "A/B testing framework", "Performance monitoring", "Feature flagging"]
  }
]

const process = [
  { phase: "Discovery", duration: "1 week", description: "Understand your vision, validate assumptions, define MVP scope" },
  { phase: "Design & Planning", duration: "1-2 weeks", description: "Create user flows, wireframes, and technical architecture" },
  { phase: "Development", duration: "6-12 weeks", description: "Iterative development with weekly demos and continuous feedback" },
  { phase: "Launch & Scale", duration: "Ongoing", description: "Deploy, monitor, iterate based on real user feedback" }
]

const metrics = [
  { value: "60%", label: "Faster time to market" },
  { value: "40%", label: "Cost reduction vs traditional agencies" },
  { value: "85%", label: "Client funding success rate" },
  { value: "12 weeks", label: "Average MVP delivery time" }
]

export default function ForStartupsPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 lg:py-32 border-b border-border relative overflow-hidden">
          <div className="absolute -right-32 md:-right-48 top-32 md:top-40 w-[500px] h-[500px] md:w-[750px] md:h-[750px] pointer-events-none -z-10 opacity-30">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 blur-3xl" />
          </div>

          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <p className="text-sm font-mono text-muted-foreground mb-6 tracking-wider uppercase">
              Solutions / For Startups
            </p>
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight leading-[1.1] mb-6 md:mb-8">
                Turn your startup idea into
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
                  market reality
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10">
                We partner with ambitious founders to build MVPs, validate product-market fit, and scale 
                technical infrastructure. We also help founders find real talent, guide early teams,
                and grow from concept to Series A and beyond.
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
                  Start Your Project
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium border border-border rounded-full hover:bg-secondary transition-all"
                >
                  View Success Stories
                  <ArrowUpRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Metrics Section */}
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

        {/* Benefits Section */}
        <section className="py-16 md:py-24 lg:py-32 border-b border-border">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <div className="max-w-3xl mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6">
                Why startups choose Skord Labs
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We understand the unique challenges of building a startup. Speed, budget constraints, 
                and the need to prove traction. Our approach is designed specifically for these realities.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {startupBenefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="p-8 border border-border rounded-2xl hover:border-foreground/20 transition-all duration-300 bg-card/50 backdrop-blur-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 shrink-0">
                      <benefit.icon className="w-6 h-6" style={{ color: "#203eec" }} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Flow Section */}
        <section className="py-16 md:py-24 lg:py-32 border-b border-border">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <div className="max-w-3xl mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6">
                From idea to launch
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our proven process takes you from concept to a production-ready product, 
                with clear milestones and continuous collaboration.
              </p>
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

        {/* Offerings Section */}
        <section className="py-16 md:py-24 lg:py-32 border-b border-border">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <div className="max-w-3xl mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6">
                What we deliver
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Comprehensive technical solutions designed to get your startup from zero to one, 
                and scale from there.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {offerings.map((offering, index) => (
                <div 
                  key={index}
                  className="p-8 border border-border rounded-2xl bg-card/50 backdrop-blur-sm hover:border-foreground/20 transition-all"
                >
                  <h3 className="text-xl font-semibold mb-6">{offering.title}</h3>
                  <ul className="space-y-3">
                    {offering.items.map((item, i) => (
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

        {/* Transformation Diagram */}
        <section className="py-16 md:py-24 lg:py-32 border-b border-border bg-secondary/30">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <div className="max-w-3xl mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6">
                Your transformation journey
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                See how we transform early-stage ideas into funded, growing startups.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="w-20 h-20 rounded-2xl bg-red-500/10 border border-red-500/20 mx-auto mb-6 flex items-center justify-center">
                  <span className="text-3xl">💡</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Before</h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Just an idea or concept</li>
                  <li>• No technical team</li>
                  <li>• Uncertain product-market fit</li>
                  <li>• Limited runway</li>
                  <li>• Need to move fast</li>
                </ul>
              </div>

              <div className="text-center flex flex-col justify-center">
                <div className="mb-6">
                  <ArrowRight className="w-12 h-12 mx-auto" style={{ color: "#203eec" }} />
                  <p className="mt-4 text-sm font-medium">Skord Labs Partnership</p>
                  <p className="text-xs text-muted-foreground mt-1">12-16 weeks transformation</p>
                </div>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 rounded-2xl bg-green-500/10 border border-green-500/20 mx-auto mb-6 flex items-center justify-center">
                  <span className="text-3xl">🚀</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">After</h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Production-ready MVP</li>
                  <li>• Real user traction</li>
                  <li>• Technical foundation built</li>
                  <li>• Investor-ready demo</li>
                  <li>• Clear scaling path</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 lg:py-32">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6">
                Ready to build your startup?
              </h2>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                Let's discuss your idea and create a roadmap to bring it to life. 
                Free consultation, no obligations.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-white rounded-full transition-all hover:shadow-lg"
                style={{ 
                  background: "linear-gradient(135deg, #203eec 0%, #00d4ff 100%)",
                  boxShadow: "0 4px 20px rgba(32, 62, 236, 0.3)"
                }}
              >
                Schedule a Call
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
