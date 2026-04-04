import type { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { GradientBar } from "@/components/ui/gradient-bar"
import { ArrowRight, Code2, Boxes, Workflow, Database, CheckCircle2, ArrowUpRight, Cpu, Network, Cloud } from "lucide-react"
import Link from "next/link"
import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Custom Software Development Solutions | Skord Labs",
  description:
    "Custom software development for web, mobile, cloud, automation, and data systems tailored to your business requirements.",
  path: "/solutions/custom-development",
  keywords: ["custom software development", "full-stack development", "cloud-native solutions"],
})

const developmentCapabilities = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    description: "End-to-end application development with modern frameworks. React, Next.js, Node.js, Python, and more."
  },
  {
    icon: Database,
    title: "Complex Data Systems",
    description: "Data pipelines, ETL processes, and real-time analytics platforms that handle massive scale."
  },
  {
    icon: Workflow,
    title: "Process Automation",
    description: "Automate repetitive workflows, integrate disparate systems, and build intelligent automation."
  },
  {
    icon: Cloud,
    title: "Cloud-Native Solutions",
    description: "Microservices, serverless architectures, and containerized applications built for the cloud."
  }
]

const techStack = [
  {
    category: "Frontend",
    technologies: ["React / Next.js", "TypeScript", "Tailwind CSS", "React Native"]
  },
  {
    category: "Backend",
    technologies: ["Node.js / Python", "GraphQL / REST APIs", "PostgreSQL / MongoDB", "Redis / ElasticSearch"]
  },
  {
    category: "Infrastructure",
    technologies: ["AWS / GCP / Azure", "Docker / Kubernetes", "CI/CD pipelines", "Infrastructure as Code"]
  },
  {
    category: "Specialized",
    technologies: ["AI/ML integration", "Blockchain / Web3", "Real-time systems", "IoT platforms"]
  }
]

const developmentProcess = [
  { phase: "Discovery & Planning", duration: "1-2 weeks", description: "Requirements gathering, technical feasibility analysis, architecture design, and project roadmap." },
  { phase: "Design & Prototyping", duration: "2-3 weeks", description: "UI/UX design, user flows, wireframes, and interactive prototypes for validation." },
  { phase: "Iterative Development", duration: "8-16 weeks", description: "Agile sprints with continuous integration, weekly demos, and regular client feedback." },
  { phase: "Testing & Deployment", duration: "2-3 weeks", description: "Comprehensive testing, performance optimization, security audits, and production deployment." },
  { phase: "Maintenance & Evolution", duration: "Ongoing", description: "Bug fixes, feature enhancements, performance monitoring, and continuous improvement." }
]

const metrics = [
  { value: "200+", label: "Custom solutions delivered" },
  { value: "98%", label: "Client satisfaction score" },
  { value: "15 years", label: "Combined team experience" },
  { value: "24/7", label: "Production support available" }
]

const solutionTypes = [
  {
    icon: "🌐",
    title: "Web Applications",
    description: "SaaS platforms, admin dashboards, customer portals, and progressive web apps",
    examples: ["Project management tools", "CRM systems", "E-commerce platforms", "Content management"]
  },
  {
    icon: "📱",
    title: "Mobile Applications",
    description: "Native and cross-platform mobile apps for iOS and Android",
    examples: ["Consumer apps", "Enterprise mobility", "Offline-first apps", "Real-time collaboration"]
  },
  {
    icon: "🤖",
    title: "AI & Automation",
    description: "Intelligent systems powered by machine learning and artificial intelligence",
    examples: ["Chatbots & assistants", "Recommendation engines", "Computer vision", "NLP applications"]
  },
  {
    icon: "🔗",
    title: "System Integration",
    description: "Connect legacy systems, third-party APIs, and build unified platforms",
    examples: ["API development", "Data synchronization", "Workflow automation", "Legacy modernization"]
  }
]

export default function CustomDevelopmentPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 lg:py-32 border-b border-border relative overflow-hidden">
          <div className="absolute -right-32 md:-right-48 top-32 md:top-40 w-[500px] h-[500px] md:w-[750px] md:h-[750px] pointer-events-none -z-10 opacity-30">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-orange-500/20 to-red-500/20 blur-3xl" />
          </div>

          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <p className="text-sm font-mono text-muted-foreground mb-6 tracking-wider uppercase">
              Solutions / Custom Development
            </p>
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight leading-[1.1] mb-6 md:mb-8">
                Software built exactly
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
                  for your needs
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10">
                When off-the-shelf solutions don't cut it, we build custom software tailored to your unique 
                requirements. From complex enterprise systems to innovative consumer applications, we also
                help teams grow with better talent, mentorship, and practical execution guidance.
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
                  View Our Work
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

        {/* Capabilities Section */}
        <section className="py-16 md:py-24 lg:py-32 border-b border-border">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <div className="max-w-3xl mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6">
                Our development expertise
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We excel at building complex, scalable systems that solve real business problems. 
                No challenge is too technical for our team.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {developmentCapabilities.map((capability, index) => (
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

        {/* Solution Types */}
        <section className="py-16 md:py-24 lg:py-32 border-b border-border bg-secondary/30">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <div className="max-w-3xl mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6">
                What we build
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From web platforms to mobile apps to AI-powered systems—we build it all.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {solutionTypes.map((solution, index) => (
                <div 
                  key={index}
                  className="p-8 border border-border rounded-2xl bg-card hover:border-foreground/20 transition-all"
                >
                  <div className="text-5xl mb-4">{solution.icon}</div>
                  <h3 className="text-2xl font-semibold mb-3">{solution.title}</h3>
                  <p className="text-muted-foreground mb-4">{solution.description}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {solution.examples.map((example, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#203eec" }} />
                        <span className="text-sm text-muted-foreground">{example}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Development Process */}
        <section className="py-16 md:py-24 lg:py-32 border-b border-border">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <div className="max-w-3xl mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6">
                Our development process
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A proven methodology that balances speed with quality, ensuring predictable delivery.
              </p>
            </div>

            <div className="relative">
              {developmentProcess.map((step, index) => (
                <div key={index} className="flex gap-8 mb-12 last:mb-0">
                  <div className="flex flex-col items-center">
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-white shrink-0"
                      style={{ background: "linear-gradient(135deg, #203eec 0%, #00d4ff 100%)" }}
                    >
                      {index + 1}
                    </div>
                    {index < developmentProcess.length - 1 && (
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

        {/* Tech Stack */}
        <section className="py-16 md:py-24 lg:py-32 border-b border-border">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <div className="max-w-3xl mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6">
                Technology stack
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We work with modern, battle-tested technologies that ensure long-term maintainability.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {techStack.map((stack, index) => (
                <div 
                  key={index}
                  className="p-8 border border-border rounded-2xl bg-card/50 backdrop-blur-sm hover:border-foreground/20 transition-all"
                >
                  <h3 className="text-xl font-semibold mb-6">{stack.category}</h3>
                  <ul className="space-y-3">
                    {stack.technologies.map((tech, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" style={{ color: "#203eec" }} />
                        <span className="text-sm text-muted-foreground">{tech}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quality Assurance */}
        <section className="py-16 md:py-24 lg:py-32 border-b border-border bg-secondary/30">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <div className="max-w-3xl mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6">
                Built to last
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We don't just write code—we build systems designed for reliability, performance, and evolution.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 border border-border rounded-2xl bg-card">
                <div className="w-16 h-16 rounded-2xl bg-green-500/10 border border-green-500/20 mb-6 flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" style={{ color: "#10b981" }} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Comprehensive Testing</h3>
                <p className="text-sm text-muted-foreground">Unit tests, integration tests, and end-to-end testing ensure every feature works perfectly.</p>
              </div>

              <div className="p-8 border border-border rounded-2xl bg-card">
                <div className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 mb-6 flex items-center justify-center">
                  <Cpu className="w-8 h-8" style={{ color: "#203eec" }} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Performance Optimized</h3>
                <p className="text-sm text-muted-foreground">Built for speed from day one. Lazy loading, caching, and database optimization included.</p>
              </div>

              <div className="p-8 border border-border rounded-2xl bg-card">
                <div className="w-16 h-16 rounded-2xl bg-purple-500/10 border border-purple-500/20 mb-6 flex items-center justify-center">
                  <Network className="w-8 h-8" style={{ color: "#8b5cf6" }} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Scalable Architecture</h3>
                <p className="text-sm text-muted-foreground">Designed to grow with your business. Handle 10x traffic without rewriting your system.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 lg:py-32">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6">
                Let's build something remarkable
              </h2>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                Have a complex project in mind? Let's discuss your requirements and create a custom solution 
                that exceeds expectations.
              </p>
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
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <GradientBar />
    </>
  )
}
