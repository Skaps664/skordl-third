import type { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { GradientBar } from "@/components/ui/gradient-bar"
import { ArrowRight, Users, Code, Zap, Award, CheckCircle2, ArrowUpRight, Handshake, Target } from "lucide-react"
import Link from "next/link"
import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Solutions for Agencies | Skord Labs",
  description:
    "White-label engineering and team augmentation services for agencies that need reliable technical delivery at scale.",
  path: "/solutions/for-agencies",
  keywords: ["agency development partner", "white label engineering", "team augmentation"],
})

const partnershipBenefits = [
  {
    icon: Handshake,
    title: "White Label Partnership",
    description: "We work under your brand. Your clients see you as the delivery partner while we handle the technical execution."
  },
  {
    icon: Users,
    title: "Team Augmentation",
    description: "Scale your development capacity instantly. Expert engineers who integrate seamlessly with your workflows."
  },
  {
    icon: Zap,
    title: "Rapid Delivery",
    description: "Meet aggressive deadlines with our dedicated teams. We handle the overflow so you can take on more clients."
  },
  {
    icon: Target,
    title: "Technical Excellence",
    description: "Deliver beyond client expectations with our engineering expertise and quality standards."
  }
]

const services = [
  {
    title: "White Label Development",
    items: ["Full project delivery", "Your branding & identity", "Direct client communication options", "Seamless handoff"]
  },
  {
    title: "Team Extension",
    items: ["Senior developers on demand", "Flexible engagement models", "Full-time or project-based", "Weekly/monthly reporting"]
  },
  {
    title: "Technical Architecture",
    items: ["System design consulting", "Technology stack selection", "Code review & optimization", "Performance audits"]
  },
  {
    title: "Specialized Skills",
    items: ["AI/ML development", "Blockchain & Web3", "Mobile app development", "DevOps & infrastructure"]
  }
]

const collaborationModel = [
  { phase: "Project Briefing", duration: "1-2 days", description: "You share client requirements, timeline, and constraints. We align on scope and deliverables." },
  { phase: "Team Assignment", duration: "2-3 days", description: "We assign the right engineers with matching expertise. Meet the team via video call." },
  { phase: "Execution & Updates", duration: "Project duration", description: "Regular progress updates, demos, and transparent communication throughout the project." },
  { phase: "Delivery & Support", duration: "Ongoing", description: "Final delivery with documentation, optional white-glove client handoff, and ongoing support options." }
]

const metrics = [
  { value: "150+", label: "Projects delivered for agencies" },
  { value: "95%", label: "Partner satisfaction rate" },
  { value: "48hrs", label: "Average team mobilization" },
  { value: "30%", label: "Increased agency capacity" }
]

const agencyTypes = [
  { name: "Digital Agencies", focus: "Web development, design-to-code, CMS implementation" },
  { name: "Marketing Agencies", focus: "Campaign platforms, analytics dashboards, automation tools" },
  { name: "Design Studios", focus: "Design system implementation, prototyping, frontend development" },
  { name: "Consultancies", focus: "Enterprise solutions, technical strategy, architecture design" }
]

export default function ForAgenciesPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 lg:py-32 border-b border-border relative overflow-hidden">
          <div className="absolute -right-32 md:-right-48 top-32 md:top-40 w-[500px] h-[500px] md:w-[750px] md:h-[750px] pointer-events-none -z-10 opacity-30">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-pink-500/20 to-purple-500/20 blur-3xl" />
          </div>

          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <p className="text-sm font-mono text-muted-foreground mb-6 tracking-wider uppercase">
              Solutions / For Agencies
            </p>
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight leading-[1.1] mb-6 md:mb-8">
                Your technical partner
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
                  behind the scenes
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10">
                We help agencies scale their technical capacity, deliver complex projects, and win bigger clients. 
                White-label development that makes your agency look brilliant, plus talent support and guidance
                so your team keeps leveling up.
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
                  Become a Partner
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium border border-border rounded-full hover:bg-secondary transition-all"
                >
                  Agency Success Stories
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
                Why agencies partner with us
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We understand agency life—tight deadlines, demanding clients, and the need to scale quickly. 
                We're built to support your success.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {partnershipBenefits.map((benefit, index) => (
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

        {/* Who We Work With */}
        <section className="py-16 md:py-24 lg:py-32 border-b border-border bg-secondary/30">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <div className="max-w-3xl mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6">
                Trusted by diverse agencies
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From boutique design studios to full-service marketing agencies, we adapt to your needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {agencyTypes.map((type, index) => (
                <div 
                  key={index}
                  className="p-6 border border-border rounded-2xl bg-card hover:border-foreground/20 transition-all"
                >
                  <h3 className="text-xl font-semibold mb-2">{type.name}</h3>
                  <p className="text-sm text-muted-foreground">{type.focus}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Collaboration Model */}
        <section className="py-16 md:py-24 lg:py-32 border-b border-border">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <div className="max-w-3xl mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6">
                How we collaborate
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A streamlined partnership process designed for agencies that move fast.
              </p>
            </div>

            <div className="relative">
              {collaborationModel.map((step, index) => (
                <div key={index} className="flex gap-8 mb-12 last:mb-0">
                  <div className="flex flex-col items-center">
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-white shrink-0"
                      style={{ background: "linear-gradient(135deg, #203eec 0%, #00d4ff 100%)" }}
                    >
                      {index + 1}
                    </div>
                    {index < collaborationModel.length - 1 && (
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

        {/* Services Section */}
        <section className="py-16 md:py-24 lg:py-32 border-b border-border">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <div className="max-w-3xl mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6">
                Partnership models
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Flexible engagement options that fit your workflow and client needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="p-8 border border-border rounded-2xl bg-card/50 backdrop-blur-sm hover:border-foreground/20 transition-all"
                >
                  <h3 className="text-xl font-semibold mb-6">{service.title}</h3>
                  <ul className="space-y-3">
                    {service.items.map((item, i) => (
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

        {/* Value Proposition */}
        <section className="py-16 md:py-24 lg:py-32 border-b border-border bg-secondary/30">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <div className="max-w-3xl mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6">
                The Skord Labs difference
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 border border-border rounded-2xl bg-card">
                <div className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 mb-6 flex items-center justify-center">
                  <Code className="w-8 h-8" style={{ color: "#203eec" }} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Technical Depth</h3>
                <p className="text-sm text-muted-foreground">Senior engineers with 5+ years experience. Not junior developers learning on your projects.</p>
              </div>

              <div className="p-8 border border-border rounded-2xl bg-card">
                <div className="w-16 h-16 rounded-2xl bg-purple-500/10 border border-purple-500/20 mb-6 flex items-center justify-center">
                  <Award className="w-8 h-8" style={{ color: "#8b5cf6" }} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Quality Guarantee</h3>
                <p className="text-sm text-muted-foreground">Code reviews, testing, and documentation included. We deliver production-ready work.</p>
              </div>

              <div className="p-8 border border-border rounded-2xl bg-card">
                <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 mb-6 flex items-center justify-center">
                  <Zap className="w-8 h-8" style={{ color: "#00d4ff" }} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Agency-First Mindset</h3>
                <p className="text-sm text-muted-foreground">We understand deadlines, client management, and the need for flawless delivery.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 lg:py-32">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6">
                Ready to scale your agency?
              </h2>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                Let's discuss how we can help you take on bigger projects and deliver exceptional results. 
                Schedule a partnership exploration call.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-white rounded-full transition-all hover:shadow-lg"
                style={{ 
                  background: "linear-gradient(135deg, #203eec 0%, #00d4ff 100%)",
                  boxShadow: "0 4px 20px rgba(32, 62, 236, 0.3)"
                }}
              >
                Explore Partnership
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
