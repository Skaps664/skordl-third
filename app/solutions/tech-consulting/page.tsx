"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { GradientBar } from "@/components/ui/gradient-bar"
import { ArrowRight, Lightbulb, TrendingUp, Shield, Target, CheckCircle2, ArrowUpRight, BookOpen, GitBranch, FileCode } from "lucide-react"
import Link from "next/link"

const consultingServices = [
  {
    icon: Lightbulb,
    title: "Technical Strategy",
    description: "Strategic technology roadmaps aligned with business objectives. Make informed decisions about architecture, tech stack, and team structure."
  },
  {
    icon: Target,
    title: "Architecture Design",
    description: "System architecture that scales. We design robust, maintainable systems that serve your business for years."
  },
  {
    icon: Shield,
    title: "Security Audits",
    description: "Comprehensive security assessments, penetration testing, and compliance guidance (SOC 2, HIPAA, GDPR)."
  },
  {
    icon: TrendingUp,
    title: "Performance Optimization",
    description: "Identify bottlenecks, optimize databases, and improve application performance. Reduce costs while increasing speed."
  }
]

const serviceOfferings = [
  {
    title: "CTO as a Service",
    items: ["Technical leadership", "Team building & hiring", "Technology assessment", "Vendor management"]
  },
  {
    title: "Code Review & Audit",
    items: ["Architecture review", "Security assessment", "Performance analysis", "Best practices compliance"]
  },
  {
    title: "Technology Advisory",
    items: ["Stack selection", "Build vs buy decisions", "Scalability planning", "Cost optimization"]
  },
  {
    title: "Team Enablement",
    items: ["Process improvement", "DevOps setup", "Training & mentorship", "Documentation"]
  }
]

const engagementModels = [
  { 
    type: "Strategic Advisory", 
    duration: "Monthly retainer", 
    description: "Ongoing strategic guidance, technical leadership, and architecture reviews. Perfect for CTOs who want a trusted technical advisor.",
    bestFor: "Startups without technical leadership or enterprises needing additional expertise"
  },
  { 
    type: "Project-Based Consulting", 
    duration: "4-12 weeks", 
    description: "Deep dive into specific technical challenges. Architecture redesign, security audit, or performance optimization.",
    bestFor: "Solving specific technical problems or validating approaches"
  },
  { 
    type: "Technical Due Diligence", 
    duration: "2-4 weeks", 
    description: "Comprehensive assessment of technical assets, team capabilities, and product architecture for investors and acquirers.",
    bestFor: "Investors, M&A teams, and companies evaluating acquisitions"
  }
]

const metrics = [
  { value: "50+", label: "Companies advised" },
  { value: "20 years", label: "Combined expertise" },
  { value: "85%", label: "Cost reduction achieved" },
  { value: "$50M+", label: "In funding by clients" }
]

const expertiseAreas = [
  {
    icon: "🏗️",
    title: "System Architecture",
    topics: ["Microservices design", "Event-driven systems", "Database architecture", "API design"]
  },
  {
    icon: "☁️",
    title: "Cloud & Infrastructure",
    topics: ["AWS/GCP/Azure strategy", "Cost optimization", "Auto-scaling setup", "Multi-region deployment"]
  },
  {
    icon: "🔐",
    title: "Security & Compliance",
    topics: ["Security best practices", "Compliance frameworks", "Penetration testing", "Zero trust architecture"]
  },
  {
    icon: "📊",
    title: "Data & Analytics",
    topics: ["Data pipelines", "Real-time analytics", "Data warehouse design", "ML infrastructure"]
  }
]

export default function TechConsultingPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 lg:py-32 border-b border-border relative overflow-hidden">
          <div className="absolute -right-32 md:-right-48 top-32 md:top-40 w-[500px] h-[500px] md:w-[750px] md:h-[750px] pointer-events-none -z-10 opacity-30">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20 blur-3xl" />
          </div>

          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <p className="text-sm font-mono text-muted-foreground mb-6 tracking-wider uppercase">
              Solutions / Tech Consulting
            </p>
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight leading-[1.1] mb-6 md:mb-8">
                Strategic technical guidance
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
                  when you need it most
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10">
                Expert technical consulting to guide critical technology decisions, optimize your systems, 
                and build a scalable technical foundation. From CTO advisory to architecture reviews.
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
                  Book Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium border border-border rounded-full hover:bg-secondary transition-all"
                >
                  Client Success Stories
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

        {/* Services Section */}
        <section className="py-16 md:py-24 lg:py-32 border-b border-border">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <div className="max-w-3xl mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6">
                How we help
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From high-level strategy to hands-on technical assessment, we provide the expertise 
                you need to make confident technology decisions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {consultingServices.map((service, index) => (
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

        {/* Engagement Models */}
        <section className="py-16 md:py-24 lg:py-32 border-b border-border bg-secondary/30">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <div className="max-w-3xl mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6">
                Engagement models
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Flexible consulting arrangements designed to fit your needs and timeline.
              </p>
            </div>

            <div className="space-y-8">
              {engagementModels.map((model, index) => (
                <div 
                  key={index}
                  className="p-8 border border-border rounded-2xl bg-card hover:border-foreground/20 transition-all"
                >
                  <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-semibold mb-2">{model.type}</h3>
                      <span className="text-sm text-muted-foreground px-3 py-1 bg-secondary rounded-full">
                        {model.duration}
                      </span>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{model.description}</p>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4" style={{ color: "#203eec" }} />
                    <span className="text-muted-foreground">Best for: {model.bestFor}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Offerings */}
        <section className="py-16 md:py-24 lg:py-32 border-b border-border">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <div className="max-w-3xl mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6">
                Consulting services
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Comprehensive technical advisory across all aspects of your technology organization.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {serviceOfferings.map((offering, index) => (
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

        {/* Expertise Areas */}
        <section className="py-16 md:py-24 lg:py-32 border-b border-border bg-secondary/30">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <div className="max-w-3xl mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6">
                Areas of expertise
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Deep technical knowledge across modern architectures and technologies.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {expertiseAreas.map((area, index) => (
                <div 
                  key={index}
                  className="p-6 border border-border rounded-2xl bg-card hover:border-foreground/20 transition-all"
                >
                  <div className="text-4xl mb-4">{area.icon}</div>
                  <h3 className="text-lg font-semibold mb-4">{area.title}</h3>
                  <ul className="space-y-2">
                    {area.topics.map((topic, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <div className="w-1 h-1 rounded-full bg-blue-500 mt-2 shrink-0" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="py-16 md:py-24 lg:py-32 border-b border-border">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <div className="max-w-3xl mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6">
                Why work with us
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 border border-border rounded-2xl bg-card/50 backdrop-blur-sm">
                <div className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 mb-6 flex items-center justify-center">
                  <BookOpen className="w-8 h-8" style={{ color: "#203eec" }} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Hands-On Experience</h3>
                <p className="text-sm text-muted-foreground">Not just theory—we've built and scaled systems processing millions of transactions daily.</p>
              </div>

              <div className="p-8 border border-border rounded-2xl bg-card/50 backdrop-blur-sm">
                <div className="w-16 h-16 rounded-2xl bg-purple-500/10 border border-purple-500/20 mb-6 flex items-center justify-center">
                  <GitBranch className="w-8 h-8" style={{ color: "#8b5cf6" }} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Pragmatic Approach</h3>
                <p className="text-sm text-muted-foreground">We balance best practices with business realities. Solutions that work in the real world.</p>
              </div>

              <div className="p-8 border border-border rounded-2xl bg-card/50 backdrop-blur-sm">
                <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 mb-6 flex items-center justify-center">
                  <FileCode className="w-8 h-8" style={{ color: "#00d4ff" }} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Actionable Insights</h3>
                <p className="text-sm text-muted-foreground">Detailed reports with concrete recommendations and implementation roadmaps.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Consulting Process */}
        <section className="py-16 md:py-24 lg:py-32 border-b border-border bg-secondary/30">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <div className="max-w-3xl mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6">
                What to expect
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="w-20 h-20 rounded-2xl mx-auto mb-6 flex items-center justify-center text-3xl"
                  style={{
                    background: "linear-gradient(135deg, #203eec 0%, #00d4ff 100%)",
                  }}
                >
                  1
                </div>
                <h3 className="text-xl font-semibold mb-3">Discovery Call</h3>
                <p className="text-sm text-muted-foreground">
                  Initial consultation to understand your challenges, goals, and current state
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 rounded-2xl mx-auto mb-6 flex items-center justify-center text-3xl"
                  style={{
                    background: "linear-gradient(135deg, #203eec 0%, #00d4ff 100%)",
                  }}
                >
                  2
                </div>
                <h3 className="text-xl font-semibold mb-3">Deep Analysis</h3>
                <p className="text-sm text-muted-foreground">
                  Comprehensive assessment of systems, code, processes, and team structure
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 rounded-2xl mx-auto mb-6 flex items-center justify-center text-3xl"
                  style={{
                    background: "linear-gradient(135deg, #203eec 0%, #00d4ff 100%)",
                  }}
                >
                  3
                </div>
                <h3 className="text-xl font-semibold mb-3">Actionable Roadmap</h3>
                <p className="text-sm text-muted-foreground">
                  Detailed recommendations with prioritized action items and implementation guidance
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 lg:py-32">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6">
                Get expert technical guidance
              </h2>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                Schedule a consultation to discuss your technical challenges. First session is complimentary 
                to ensure we're the right fit for your needs.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-white rounded-full transition-all hover:shadow-lg"
                style={{ 
                  background: "linear-gradient(135deg, #203eec 0%, #00d4ff 100%)",
                  boxShadow: "0 4px 20px rgba(32, 62, 236, 0.3)"
                }}
              >
                Schedule Free Consultation
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
