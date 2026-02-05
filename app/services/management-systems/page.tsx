export const metadata = {
  title: "Management Systems Development | Skord Labs - Enterprise Software Pakistan",
  description: "Custom management systems for your business. CRM, ERP, inventory management, and workflow automation by Pakistan's leading software development company.",
  keywords: ["management system Pakistan", "CRM development", "ERP software", "business automation Pakistan"],
}

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { GradientBar } from "@/components/ui/gradient-bar"
import { ArrowRight, Database, Workflow, BarChart3, Settings, CheckCircle2, ArrowUpRight, Users, FileText } from "lucide-react"
import Link from "next/link"

const solutions = [
  {
    icon: Database,
    title: "CRM & ERP Systems",
    description: "Custom customer relationship management and enterprise resource planning tailored to your workflows."
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description: "Automate repetitive tasks, approvals, and business processes. Save time and reduce errors."
  },
  {
    icon: BarChart3,
    title: "Data Management Platforms",
    description: "Centralize data, create dashboards, and get insights. Turn data into actionable intelligence."
  },
  {
    icon: Settings,
    title: "Internal Tools",
    description: "Admin dashboards, reporting tools, and custom software to streamline operations."
  }
]

const process = [
  { phase: "Process Analysis", duration: "1-2 weeks", description: "Document current workflows, identify inefficiencies, and define requirements" },
  { phase: "System Design", duration: "2 weeks", description: "Design data models, user interfaces, and integration architecture" },
  { phase: "Agile Development", duration: "8-16 weeks", description: "Build in sprints with regular demos and feedback from stakeholders" },
  { phase: "Training & Rollout", duration: "2-4 weeks", description: "User training, data migration, and gradual deployment across teams" }
]

const deliverables = [
  {
    title: "Custom Software",
    items: ["Web-based dashboard", "Mobile access", "Role-based permissions", "Custom workflows"]
  },
  {
    title: "Integrations",
    items: ["API development", "Third-party connections", "Data synchronization", "Legacy system bridges"]
  },
  {
    title: "Reporting & Analytics",
    items: ["Real-time dashboards", "Custom reports", "Data export tools", "KPI tracking"]
  },
  {
    title: "Training & Support",
    items: ["User documentation", "Video tutorials", "Admin training", "Ongoing maintenance"]
  }
]

const metrics = [
  { value: "60%", label: "Time saved on manual tasks" },
  { value: "90%", label: "Data accuracy improvement" },
  { value: "4x", label: "Faster decision making" },
  { value: "$500K+", label: "Annual cost savings" }
]

export default function ManagementSystemsPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="py-16 md:py-24 lg:py-32 border-b border-border relative overflow-hidden">
          <div className="absolute -right-32 md:-right-48 top-32 md:top-40 w-[500px] h-[500px] md:w-[750px] md:h-[750px] pointer-events-none -z-10 opacity-30">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20 blur-3xl" />
          </div>

          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <p className="text-sm font-mono text-muted-foreground mb-6 tracking-wider uppercase">
              Services / Management Systems
            </p>
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight leading-[1.1] mb-6 md:mb-8">
                Custom software that
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
                  runs your business
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10">
                Build custom CRM, ERP, and management systems tailored to your unique processes. 
                Automate workflows, centralize data, and make better decisions faster.
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
                  Build Your System
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
                What we build
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From CRM platforms to workflow automation, we build systems that fit your exact needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {solutions.map((solution, index) => (
                <div 
                  key={index}
                  className="p-8 border border-border rounded-2xl hover:border-foreground/20 transition-all duration-300 bg-card/50 backdrop-blur-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 shrink-0">
                      <solution.icon className="w-6 h-6" style={{ color: "#203eec" }} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">{solution.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{solution.description}</p>
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
                Implementation process
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
                Complete solution package
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
                Ready to streamline your operations?
              </h2>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                Let's build a custom management system that transforms how your business operates.
              </p>
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
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <GradientBar />
    </>
  )
}
