import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { GradientBar } from "@/components/ui/gradient-bar"
import { Shield, Lock, Eye, Database, Server } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  alternates: { canonical: "/privacy-policy" },
  title: "Privacy Policy | Skord Labs - Pakistan's Top Software Company",
  description: "Privacy policy for Skord Labs. Learn how we collect, use, and protect your data at Pakistan's leading software development company.",
  keywords: ["privacy policy", "data protection", "Skord Labs privacy", "Pakistan software company privacy"],
}

const sections = [
  {
    icon: Eye,
    title: "Information We Collect",
    content: [
      "Personal information (name, email, phone number) when you contact us or use our services",
      "Usage data and analytics to improve our website and services",
      "Cookies and tracking technologies for website functionality",
      "Technical information about your device and browser"
    ]
  },
  {
    icon: Database,
    title: "How We Use Your Data",
    content: [
      "To provide and maintain our software development services",
      "To communicate with you about projects, updates, and support",
      "To improve our website, products, and customer experience",
      "To comply with legal obligations and protect our rights"
    ]
  },
  {
    icon: Lock,
    title: "Data Security",
    content: [
      "Industry-standard encryption for data transmission and storage",
      "Regular security audits and vulnerability assessments",
      "Strict access controls and employee confidentiality agreements",
      "Secure data centers with redundancy and backup systems"
    ]
  },
  {
    icon: Server,
    title: "Data Sharing & Third Parties",
    content: [
      "We do not sell your personal information to third parties",
      "Trusted service providers for hosting, analytics, and payment processing",
      "Legal authorities when required by law or to protect our rights",
      "Business transfers in case of merger or acquisition"
    ]
  }
]

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="py-16 md:py-24 lg:py-32 border-b border-border">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <div className="max-w-3xl">
              <p className="text-sm font-mono text-muted-foreground mb-6 tracking-wider uppercase">
                Legal / Privacy Policy
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] mb-6">
                Privacy
                <br />
                <span 
                  style={{
                    background: "linear-gradient(135deg, #ff006e 0%, #8b5cf6 33%, #203eec 66%, #00d4ff 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Policy
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-4">
                At Skord Labs, Pakistan's top software development company, we take your privacy seriously. 
                This policy explains how we collect, use, and protect your personal information.
              </p>
              <p className="text-sm text-muted-foreground">
                Last updated: February 5, 2026
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 border-b border-border">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <div className="grid md:grid-cols-2 gap-8">
              {sections.map((section, index) => (
                <div key={index} className="p-8 border border-border rounded-2xl bg-card/50 backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-xl bg-primary/10">
                      <section.icon className="w-6 h-6" style={{ color: "#203eec" }} />
                    </div>
                    <h2 className="text-2xl font-semibold">{section.title}</h2>
                  </div>
                  <ul className="space-y-3">
                    {section.content.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full shrink-0 mt-2" style={{ background: "#203eec" }} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 border-b border-border bg-secondary/30">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-semibold mb-6">Your Rights</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>You have the right to:</p>
                <ul className="space-y-2 ml-6">
                  <li>• Access the personal data we hold about you</li>
                  <li>• Request correction of inaccurate or incomplete data</li>
                  <li>• Request deletion of your personal data</li>
                  <li>• Object to or restrict processing of your data</li>
                  <li>• Data portability to another service provider</li>
                  <li>• Withdraw consent at any time</li>
                </ul>
                <p className="mt-6">
                  To exercise these rights, please contact us at <a href="mailto:support@skordlabs.com" className="underline" style={{ color: "#203eec" }}>support@skordlabs.com</a>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-semibold mb-6">Contact Us</h2>
              <p className="text-muted-foreground mb-6">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="space-y-2 text-muted-foreground">
                <p><strong>Skord Labs</strong></p>
                <p>Peshawar, Pakistan</p>
                <p>Email: <a href="mailto:support@skordlabs.com" className="underline" style={{ color: "#203eec" }}>support@skordlabs.com</a></p>
                <p>Phone: <a href="tel:+923259327819" className="underline" style={{ color: "#203eec" }}>+92 325 9327819</a></p>
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
