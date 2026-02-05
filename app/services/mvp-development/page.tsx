import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { GradientBar } from "@/components/ui/gradient-bar"
import { ArrowRight, Rocket, Target, Zap, TrendingUp, CheckCircle2, ArrowUpRight, Clock, DollarSign } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "MVP Development Services | Skord Labs - Pakistan's Best Software Company",
  description: "Launch your product in weeks with Skord Labs' MVP development services. Pakistan's top software company specializing in rapid product validation and development.",
  keywords: ["MVP development Pakistan", "minimum viable product", "rapid product development", "startup MVP"],
}

const benefits = [
  {
    icon: Clock,
    title: "Launch in Weeks, Not Months",
    description: "Get your MVP to market 3x faster with our rapid development process and pre-built components."
  },
  {
    icon: DollarSign,
    title: "Cost-Effective Validation",
    description: "Test your idea without breaking the bank. Validate product-market fit before major investment."
  },
  {
    icon: Target,
    title: "Focus on Core Features",
    description: "We help you identify and build only what matters, avoiding feature bloat and scope creep."
  },
  {
    icon: TrendingUp,
    title: "Built to Scale",
    description: "Start lean but don't compromise foundations. Our MVPs are architected to grow with you."
  }
]

const process = [
  { phase: "Discovery Workshop", duration: "3-5 days", description: "Define your vision, validate assumptions, identify core features and create a clear roadmap" },
  { phase: "UX & Design Sprint", duration: "1 week", description: "Create wireframes, user flows, and high-fidelity designs for rapid feedback" },
  { phase: "Agile Development", duration: "4-8 weeks", description: "Build your MVP in 2-week sprints with continuous demos and iteration" },
  { phase: "Launch & Learn", duration: "Ongoing", description: "Deploy to production, gather user feedback, and plan next iterations" }
]

const deliverables = [
  {
    title: "Product Strategy",
    items: ["Market research & competitor analysis", "User personas & journey maps", "Feature prioritization matrix", "Go-to-market roadmap"]
  },
  {
    title: "Technical Delivery",
    items: ["Production-ready codebase", "Cloud infrastructure setup", "API documentation", "Admin dashboard"]
  },
  {
    title: "Quality Assurance",
    items: ["Automated testing suite", "Performance optimization", "Security implementation", "Mobile responsiveness"]
  },
  {
    title: "Post-Launch Support",
    items: ["2 weeks of bug fixes", "Analytics integration", "User feedback collection", "Iteration planning"]
  }
]

const metrics = [
  { value: "6-8 weeks", label: "Average MVP delivery" },
  { value: "40%", label: "Cost vs full build" },
  { value: "85%", label: "Client funding success" },
  { value: "12+", label: "MVPs launched monthly" }
]

const caseStudies = [
  {
    title: "FinTech Payment Platform",
    description: "MVP in 6 weeks, secured $2M seed funding, now processing $10M monthly",
    results: ["6-week launch", "$2M raised", "10K+ users"]
  },
  {
    title: "Healthcare Booking App",
    description: "Validated concept with 500 beta users, pivoted before major investment",
    results: ["500 beta users", "3 pivots tested", "Series A ready"]
  }
]

export default function MVPDevelopmentPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 lg:py-32 border-b border-border relative overflow-hidden">
          <div className="absolute -right-32 md:-right-48 top-32 md:top-40 w-[500px] h-[500px] md:w-[750px] md:h-[750px] pointer-events-none -z-10 opacity-30">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-orange-500/20 to-pink-500/20 blur-3xl" />
          </div>

          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <p className="text-sm font-mono text-muted-foreground mb-6 tracking-wider uppercase">
              Services / MVP Development
            </p>
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight leading-[1.1] mb-6 md:mb-8">
                Launch your MVP and
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
                  validate your idea fast
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10">
                Build a production-ready Minimum Viable Product in weeks. Test your assumptions, 
                gather real user feedback, and prove market demand before investing in full development.
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
                  Start Your MVP
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

        {/* Metrics */}
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

        {/* Benefits */}
        <section className="py-16 md:py-24 lg:py-32 border-b border-border">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <div className="max-w-3xl mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6">
                Why build an MVP with us
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We've helped dozens of founders go from idea to funded startup. Our MVP development 
                process is designed for speed, validation, and scalability.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
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

        {/* Process */}
        <section className="py-16 md:py-24 lg:py-32 border-b border-border bg-secondary/30">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <div className="max-w-3xl mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6">
                Our MVP process
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From concept to launch in under 8 weeks with our proven methodology.
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

        {/* Deliverables */}
        <section className="py-16 md:py-24 lg:py-32 border-b border-border">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <div className="max-w-3xl mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6">
                What you'll receive
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

        {/* Case Studies */}
        <section className="py-16 md:py-24 lg:py-32 border-b border-border bg-secondary/30">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <div className="max-w-3xl mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6">
                Success stories
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {caseStudies.map((study, index) => (
                <div 
                  key={index}
                  className="p-8 border border-border rounded-2xl bg-card hover:border-foreground/20 transition-all"
                >
                  <h3 className="text-2xl font-semibold mb-4">{study.title}</h3>
                  <p className="text-muted-foreground mb-6">{study.description}</p>
                  <div className="flex flex-wrap gap-3">
                    {study.results.map((result, i) => (
                      <span key={i} className="px-3 py-1 text-sm bg-secondary rounded-full">
                        {result}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 lg:py-32">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6">
                Ready to build your MVP?
              </h2>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                Let's discuss your idea and create a plan to get it into users' hands quickly.
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
