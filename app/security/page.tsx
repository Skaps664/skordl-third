import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { GradientBar } from "@/components/ui/gradient-bar"
import { Shield, Lock, Server, Eye, AlertTriangle, CheckCircle2 } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Security | Skord Labs - Secure Software Development Company Pakistan",
  description: "Learn about security practices at Skord Labs, Pakistan's top software company. We prioritize data security and compliance in all our solutions.",
  keywords: ["software security", "data security", "secure development Pakistan", "Skord Labs security"],
}

const securityMeasures = [
  {
    icon: Lock,
    title: "Data Encryption",
    description: "End-to-end encryption for data in transit and at rest using industry-standard protocols (TLS 1.3, AES-256)."
  },
  {
    icon: Server,
    title: "Secure Infrastructure",
    description: "Cloud infrastructure with AWS/Azure, regular security patches, firewalls, and intrusion detection systems."
  },
  {
    icon: Eye,
    title: "Access Control",
    description: "Role-based access control (RBAC), multi-factor authentication, and principle of least privilege."
  },
  {
    icon: Shield,
    title: "Security Audits",
    description: "Regular penetration testing, vulnerability assessments, and third-party security audits."
  }
]

const bestPractices = [
  "Secure coding practices following OWASP Top 10 guidelines",
  "Code reviews and security scanning in CI/CD pipelines",
  "Regular dependency updates and vulnerability patching",
  "Secure API design with rate limiting and authentication",
  "Data backup and disaster recovery procedures",
  "Employee security training and awareness programs",
  "Incident response and breach notification protocols",
  "Compliance with GDPR, SOC 2, and ISO 27001 standards"
]

export default function SecurityPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="py-16 md:py-24 lg:py-32 border-b border-border">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <div className="max-w-3xl">
              <p className="text-sm font-mono text-muted-foreground mb-6 tracking-wider uppercase">
                Legal / Security
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] mb-6">
                Security
                <br />
                <span 
                  style={{
                    background: "linear-gradient(135deg, #ff006e 0%, #8b5cf6 33%, #203eec 66%, #00d4ff 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Practices
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                At Skord Labs, Pakistan's leading software development company, security is at the core 
                of everything we build. We implement industry-leading security practices to protect your data.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 border-b border-border">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-12">Security Measures</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {securityMeasures.map((measure, index) => (
                <div key={index} className="p-8 border border-border rounded-2xl bg-card/50 backdrop-blur-sm">
                  <div className="p-4 rounded-xl bg-primary/10 inline-flex mb-6">
                    <measure.icon className="w-8 h-8" style={{ color: "#203eec" }} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{measure.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{measure.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 border-b border-border bg-secondary/30">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-12">Security Best Practices</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {bestPractices.map((practice, index) => (
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
            <div className="flex items-center gap-3 mb-8">
              <AlertTriangle className="w-8 h-8" style={{ color: "#203eec" }} />
              <h2 className="text-3xl font-semibold">Reporting Security Issues</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We take security vulnerabilities seriously. If you discover a security issue in any of our 
              products or services, please report it responsibly.
            </p>
            <div className="p-6 border border-border rounded-xl bg-card">
              <h3 className="font-semibold mb-4">How to Report:</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Email: <a href="mailto:security@skordl.com" className="underline" style={{ color: "#203eec" }}>security@skordl.com</a></li>
                <li>• Include detailed description of the vulnerability</li>
                <li>• Provide steps to reproduce the issue</li>
                <li>• Do not publicly disclose the issue until we've addressed it</li>
                <li>• We aim to respond within 48 hours</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="max-w-3xl mx-auto px-6 md:px-12">
            <h2 className="text-3xl font-semibold mb-6">Certifications & Compliance</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We maintain compliance with international security standards and regularly undergo audits 
              to ensure the highest level of security for our clients.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 border border-border rounded-lg text-center bg-card">
                <p className="font-semibold">ISO 27001</p>
                <p className="text-xs text-muted-foreground mt-1">In Progress</p>
              </div>
              <div className="p-4 border border-border rounded-lg text-center bg-card">
                <p className="font-semibold">SOC 2</p>
                <p className="text-xs text-muted-foreground mt-1">In Progress</p>
              </div>
              <div className="p-4 border border-border rounded-lg text-center bg-card">
                <p className="font-semibold">GDPR</p>
                <p className="text-xs text-muted-foreground mt-1">Compliant</p>
              </div>
              <div className="p-4 border border-border rounded-lg text-center bg-card">
                <p className="font-semibold">OWASP</p>
                <p className="text-xs text-muted-foreground mt-1">Following</p>
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
