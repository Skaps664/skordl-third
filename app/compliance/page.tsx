import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { GradientBar } from "@/components/ui/gradient-bar"
import { CheckCircle2, FileCheck, Globe, Shield } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  alternates: { canonical: "/compliance" },
  title: "Compliance | Skord Labs - Compliant Software Solutions Pakistan",
  description: "Skord Labs maintains compliance with international standards. Learn about our certifications and regulatory compliance as Pakistan's top software company.",
  keywords: ["compliance", "GDPR compliance", "ISO 27001", "software compliance Pakistan"],
}

const standards = [
  {
    icon: Globe,
    title: "GDPR Compliance",
    description: "We comply with EU General Data Protection Regulation for data privacy and protection.",
    status: "Compliant"
  },
  {
    icon: Shield,
    title: "ISO 27001",
    description: "Information security management system certification (In progress).",
    status: "In Progress"
  },
  {
    icon:FileCheck,
    title: "SOC 2 Type II",
    description: "Service Organization Control audit for security, availability, and confidentiality.",
    status: "In Progress"
  },
  {
    icon: CheckCircle2,
    title: "OWASP",
    description: "Following Open Web Application Security Project guidelines and best practices.",
    status: "Following"
  }
]

const practices = [
  "Regular compliance audits and assessments",
  "Data protection impact assessments (DPIA)",
  "Privacy by design and by default",
  "Data breach notification procedures",
  "Third-party vendor security assessment",
  "Employee compliance training programs",
  "Documentation and record-keeping",
  "Right to be forgotten implementation"
]

export default function CompliancePage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="py-16 md:py-24 lg:py-32 border-b border-border">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <div className="max-w-3xl">
              <p className="text-sm font-mono text-muted-foreground mb-6 tracking-wider uppercase">
                Legal / Compliance
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] mb-6">
                Regulatory
                <br />
                <span 
                  style={{
                    background: "linear-gradient(135deg, #ff006e 0%, #8b5cf6 33%, #203eec 66%, #00d4ff 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Compliance
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Skord Labs, Pakistan's premier software development company, maintains strict compliance 
                with international standards and regulations to ensure data protection and security.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 border-b border-border">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-12">Compliance Standards</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {standards.map((standard, index) => (
                <div key={index} className="p-8 border border-border rounded-2xl bg-card/50 backdrop-blur-sm">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-xl bg-primary/10">
                      <standard.icon className="w-6 h-6" style={{ color: "#203eec" }} />
                    </div>
                    <span className={`text-xs px-3 py-1 rounded-full ${
                      standard.status === 'Compliant' 
                        ? 'bg-green-500/10 text-green-600 dark:text-green-400' 
                        : standard.status === 'In Progress'
                        ? 'bg-yellow-500/10 text-yellow-600 dark:text-yellow-400'
                        : 'bg-blue-500/10 text-blue-600 dark:text-blue-400'
                    }`}>
                      {standard.status}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{standard.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{standard.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 border-b border-border bg-secondary/30">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-12">Compliance Practices</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {practices.map((practice, index) => (
                <div key={index} className="flex items-start gap-3 p-4 border border-border rounded-lg bg-card">
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" style={{ color: "#203eec" }} />
                  <span className="text-sm text-muted-foreground">{practice}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 border-b border-border">
          <div className="max-w-3xl mx-auto px-6 md:px-12">
            <h2 className="text-3xl font-semibold mb-6">Industry-Specific Compliance</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We understand that different industries have unique compliance requirements. Our team has 
              experience with:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 border border-border rounded-xl bg-card">
                <h3 className="font-semibold mb-2">Healthcare (HIPAA)</h3>
                <p className="text-sm text-muted-foreground">Protected health information security and privacy</p>
              </div>
              <div className="p-6 border border-border rounded-xl bg-card">
                <h3 className="font-semibold mb-2">Finance (PCI DSS)</h3>
                <p className="text-sm text-muted-foreground">Payment card industry data security standards</p>
              </div>
              <div className="p-6 border border-border rounded-xl bg-card">
                <h3 className="font-semibold mb-2">Education (FERPA)</h3>
                <p className="text-sm text-muted-foreground">Student data privacy and educational records</p>
              </div>
              <div className="p-6 border border-border rounded-xl bg-card">
                <h3 className="font-semibold mb-2">Ecommerce (FTC)</h3>
                <p className="text-sm text-muted-foreground">Consumer protection and data security</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="max-w-3xl mx-auto px-6 md:px-12">
            <h2 className="text-3xl font-semibold mb-6">Compliance Questions?</h2>
            <p className="text-muted-foreground mb-6">
              For information about our compliance practices or to request compliance documentation:
            </p>
            <div className="space-y-2 text-muted-foreground">
              <p><strong>Skord Labs</strong></p>
              <p>Peshawar, Pakistan</p>
              <p>Email: <a href="mailto:compliance@skordlabs.com" className="underline" style={{ color: "#203eec" }}>compliance@skordlabs.com</a></p>
              <p>Phone: <a href="tel:+923259327819" className="underline" style={{ color: "#203eec" }}>+92 325 9327819</a></p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <GradientBar />
    </>
  )
}
