"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { GradientBar } from "@/components/ui/gradient-bar"
import { ArrowRight, Shield, Database, Layers, GitBranch, CheckCircle2, ArrowUpRight, Lock, Globe, Cpu } from "lucide-react"
import Link from "next/link"

const enterpriseBenefits = [
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description: "SOC 2 compliant development, penetration testing, and security audits. Protect your data and your reputation."
  },
  {
    icon: Database,
    title: "Legacy System Modernization",
    description: "Migrate from monolithic systems to modern microservices without disrupting operations."
  },
  {
    icon: Layers,
    title: "Scalable Infrastructure",
    description: "Cloud-native solutions that handle millions of users. Auto-scaling, redundancy, and 99.99% uptime."
  },
  {
    icon: Globe,
    title: "Global Deployment",
    description: "Multi-region deployments, CDN optimization, and compliance with international data regulations."
  }
]

const capabilities = [
  {
    title: "Digital Transformation",
    items: ["Process automation", "Cloud migration", "API modernization", "Data platform development"]
  },
  {
    title: "Enterprise Software",
    items: ["Custom ERP systems", "CRM platforms", "Internal tools & dashboards", "Workflow automation"]
  },
  {
    title: "AI & Machine Learning",
    items: ["Predictive analytics", "Process optimization", "Document processing", "Intelligent automation"]
  },
  {
    title: "DevOps & Cloud",
    items: ["CI/CD pipelines", "Infrastructure as code", "Container orchestration", "Security automation"]
  }
]

const transformationPhases = [
  { phase: "Assessment & Strategy", duration: "2-4 weeks", description: "Deep dive into existing systems, identify bottlenecks, create transformation roadmap" },
  { phase: "Proof of Concept", duration: "4-6 weeks", description: "Build working prototype to validate approach and demonstrate ROI" },
  { phase: "Incremental Migration", duration: "3-12 months", description: "Phase-by-phase implementation with zero downtime and continuous deployment" },
  { phase: "Optimization & Scale", duration: "Ongoing", description: "Performance tuning, cost optimization, and continuous improvement" }
]

const metrics = [
  { value: "99.99%", label: "System uptime SLA" },
  { value: "50M+", label: "Transactions processed daily" },
  { value: "40%", label: "Cost reduction through optimization" },
  { value: "3x", label: "Faster deployment cycles" }
]

const industries = [
  { name: "Financial Services", icon: "🏦", challenges: "Compliance, security, high-frequency transactions" },
  { name: "Healthcare", icon: "🏥", challenges: "HIPAA compliance, data privacy, interoperability" },
  { name: "Manufacturing", icon: "🏭", challenges: "IoT integration, supply chain optimization" },
  { name: "Retail & E-commerce", icon: "🛒", challenges: "Scale, personalization, omnichannel" }
]

export default function ForEnterprisePage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 lg:py-32 border-b border-border relative overflow-hidden">
          <div className="absolute -right-32 md:-right-48 top-32 md:top-40 w-[500px] h-[500px] md:w-[750px] md:h-[750px] pointer-events-none -z-10 opacity-30">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 blur-3xl" />
          </div>

          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <p className="text-sm font-mono text-muted-foreground mb-6 tracking-wider uppercase">
              Solutions / For Enterprise
            </p>
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight leading-[1.1] mb-6 md:mb-8">
                Enterprise software that
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
                  scales with ambition
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10">
                We build mission-critical systems for organizations that can't afford downtime. 
                From legacy modernization to greenfield development, we deliver enterprise-grade solutions.
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
                  Discuss Your Project
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium border border-border rounded-full hover:bg-secondary transition-all"
                >
                  Enterprise Case Studies
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
                Enterprise-grade capabilities
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We understand the complexity of enterprise environments. Regulatory compliance, 
                security requirements, and the need for zero-downtime deployments.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {enterpriseBenefits.map((benefit, index) => (
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

        {/* Industries Section */}
        <section className="py-16 md:py-24 lg:py-32 border-b border-border bg-secondary/30">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <div className="max-w-3xl mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6">
                Industry expertise
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Deep experience across regulated and high-stakes industries where quality matters.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {industries.map((industry, index) => (
                <div 
                  key={index}
                  className="p-6 border border-border rounded-2xl bg-card hover:border-foreground/20 transition-all"
                >
                  <div className="text-4xl mb-4">{industry.icon}</div>
                  <h3 className="text-lg font-semibold mb-2">{industry.name}</h3>
                  <p className="text-sm text-muted-foreground">{industry.challenges}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Transformation Process */}
        <section className="py-16 md:py-24 lg:py-32 border-b border-border">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <div className="max-w-3xl mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6">
                Digital transformation roadmap
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A phased approach that minimizes risk and ensures continuous value delivery.
              </p>
            </div>

            <div className="relative">
              {transformationPhases.map((step, index) => (
                <div key={index} className="flex gap-8 mb-12 last:mb-0">
                  <div className="flex flex-col items-center">
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-white shrink-0"
                      style={{ background: "linear-gradient(135deg, #203eec 0%, #00d4ff 100%)" }}
                    >
                      {index + 1}
                    </div>
                    {index < transformationPhases.length - 1 && (
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

        {/* Capabilities Section */}
        <section className="py-16 md:py-24 lg:py-32 border-b border-border">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <div className="max-w-3xl mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6">
                Full-spectrum engineering
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From infrastructure to application layer, we handle the complete technology stack.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {capabilities.map((capability, index) => (
                <div 
                  key={index}
                  className="p-8 border border-border rounded-2xl bg-card/50 backdrop-blur-sm hover:border-foreground/20 transition-all"
                >
                  <h3 className="text-xl font-semibold mb-6">{capability.title}</h3>
                  <ul className="space-y-3">
                    {capability.items.map((item, i) => (
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

        {/* Architecture Diagram */}
        <section className="py-16 md:py-24 lg:py-32 border-b border-border bg-secondary/30">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <div className="max-w-3xl mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6">
                Modern architecture patterns
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We build systems using proven architectural patterns that scale.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 border border-border rounded-2xl bg-card">
                <div className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 mb-6 flex items-center justify-center">
                  <Layers className="w-8 h-8" style={{ color: "#203eec" }} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Microservices</h3>
                <p className="text-sm text-muted-foreground">Independently deployable services for flexibility and resilience</p>
              </div>

              <div className="p-8 border border-border rounded-2xl bg-card">
                <div className="w-16 h-16 rounded-2xl bg-purple-500/10 border border-purple-500/20 mb-6 flex items-center justify-center">
                  <GitBranch className="w-8 h-8" style={{ color: "#8b5cf6" }} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Event-Driven</h3>
                <p className="text-sm text-muted-foreground">Asynchronous processing for high-throughput operations</p>
              </div>

              <div className="p-8 border border-border rounded-2xl bg-card">
                <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 mb-6 flex items-center justify-center">
                  <Lock className="w-8 h-8" style={{ color: "#00d4ff" }} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Zero Trust Security</h3>
                <p className="text-sm text-muted-foreground">End-to-end encryption and identity-based access control</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 lg:py-32">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6">
                Ready to transform your enterprise?
              </h2>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                Let's discuss your technical challenges and explore how we can help modernize 
                your systems. Schedule a consultation with our enterprise team.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-white rounded-full transition-all hover:shadow-lg"
                style={{ 
                  background: "linear-gradient(135deg, #203eec 0%, #00d4ff 100%)",
                  boxShadow: "0 4px 20px rgba(32, 62, 236, 0.3)"
                }}
              >
                Schedule Enterprise Consultation
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
