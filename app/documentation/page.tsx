export const metadata = {
  title: "Documentation | Skord Labs - Technical Docs for Pakistan's Top Software Company",
  description: "Access comprehensive technical documentation, API references, and developer guides from Skord Labs, Pakistan's leading software development company.",
  keywords: ["Skord Labs documentation", "API documentation", "developer guides Pakistan", "technical documentation"],
}

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { GradientBar } from "@/components/ui/gradient-bar"
import { BookOpen, Code, Terminal, Database, FileText, Layers } from "lucide-react"
import Link from "next/link"

const docSections = [
  {
    icon: Code,
    title: "API Documentation",
    description: "RESTful API endpoints, GraphQL schemas, authentication, and integration guides.",
    href: "/api-reference"
  },
  {
    icon: Terminal,
    title: "CLI Tools",
    description: "Command-line interfaces, scripts, and automation tools for developers.",
    href: "#"
  },
  {
    icon: Database,
    title: "Architecture Guides",
    description: "System architecture, database schemas, deployment patterns, and scalability docs.",
    href: "#"
  },
  {
    icon: Layers,
    title: "SDK Libraries",
    description: "Language-specific SDKs, code examples, and integration libraries.",
    href: "#"
  },
  {
    icon: FileText,
    title: "Technical Specs",
    description: "Protocol specifications, data formats, and technical reference documents.",
    href: "#"
  },
  {
    icon: BookOpen,
    title: "Developer Guides",
    description: "Setup guides, best practices, troubleshooting, and advanced tutorials.",
    href: "#"
  }
]

const quickLinks = [
  { label: "Getting Started", href: "#" },
  { label: "Authentication", href: "#" },
  { label: "Error Handling", href: "#" },
  { label: "Rate Limits", href: "#" },
  { label: "Webhooks", href: "#" },
  { label: "Changelog", href: "#" }
]

export default function DocumentationPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="py-16 md:py-24 lg:py-32 border-b border-border">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <div className="max-w-3xl">
              <p className="text-sm font-mono text-muted-foreground mb-6 tracking-wider uppercase">
                Resources / Documentation
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] mb-6">
                Technical
                <br />
                <span 
                  style={{
                    background: "linear-gradient(135deg, #ff006e 0%, #8b5cf6 33%, #203eec 66%, #00d4ff 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Documentation
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Comprehensive technical documentation, API references, and developer resources 
                for integrating with our platforms and tools. We also guide teams with practical implementation
                support so talent can learn faster and deliver better.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 border-b border-border">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {docSections.map((section, index) => (
                <Link
                  key={index}
                  href={section.href}
                  className="group p-8 border border-border rounded-2xl hover:border-foreground/20 transition-all duration-300 bg-card/50 backdrop-blur-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 shrink-0">
                      <section.icon className="w-6 h-6" style={{ color: "#203eec" }} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                        {section.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {section.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 border-b border-border bg-secondary/30">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <h2 className="text-2xl md:text-3xl font-semibold mb-8">Quick Links</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="px-4 py-3 text-sm font-medium border border-border rounded-lg hover:bg-card transition-all text-center"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                Need help with integration?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our technical team is available to assist with API integration, 
                troubleshooting, and custom implementation.
              </p>
              <Link
                href="/support"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-white rounded-full transition-all hover:shadow-lg"
                style={{ 
                  background: "linear-gradient(135deg, #203eec 0%, #00d4ff 100%)",
                  boxShadow: "0 4px 20px rgba(32, 62, 236, 0.3)"
                }}
              >
                Contact Support
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
