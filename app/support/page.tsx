export const metadata = {
  title: "Support Center | Skord Labs - Pakistan's Leading Software Company",
  description: "Get expert support from Skord Labs. Access technical support, FAQs, and contact our team at Pakistan's top software development company.",
  keywords: ["Skord Labs support", "technical support Pakistan", "software development help"],
}
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { GradientBar } from "@/components/ui/gradient-bar"
import { MessageCircle, Mail, Phone, Clock, CheckCircle2, HelpCircle } from "lucide-react"
import Link from "next/link"

const supportChannels = [
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Get instant help from our technical support team during business hours.",
    availability: "Mon-Fri, 9AM-6PM PKT",
    action: "Start Chat",
    href: "#"
  },
  {
    icon: Mail,
    title: "Email Support",
    description: "Send us a detailed message and we'll respond within 24 hours.",
    availability: "support@skordl.com",
    action: "Send Email",
    href: "mailto:support@skordl.com"
  },
  {
    icon: Phone,
    title: "Phone Support",
    description: "Speak directly with our technical team for urgent issues.",
    availability: "+92 325 9327819",
    action: "Call Now",
    href: "tel:+923259327819"
  }
]

const faqs = [
  {
    question: "How do I get started with API integration?",
    answer: "Check our API documentation for authentication guides, endpoints, and code examples."
  },
  {
    question: "What's your typical response time?",
    answer: "Live chat: Instant during business hours. Email: 24 hours. Critical issues: 4 hours SLA."
  },
  {
    question: "Do you offer technical onboarding?",
    answer: "Yes, we provide dedicated onboarding sessions for enterprise clients and complex integrations."
  },
  {
    question: "Where can I report bugs or request features?",
    answer: "Use our GitHub issues, submit via support portal, or contact us directly through any channel."
  },
  {
    question: "Is technical documentation available?",
    answer: "Comprehensive documentation is available at /documentation including API references and guides."
  }
]

const supportLevels = [
  {
    title: "Community Support",
    features: ["GitHub discussions", "Community forums", "Public documentation", "Self-service resources"]
  },
  {
    title: "Standard Support",
    features: ["Email support", "24-hour response time", "Technical assistance", "Bug reporting"]
  },
  {
    title: "Priority Support",
    features: ["Live chat support", "4-hour response SLA", "Dedicated account manager", "Priority bug fixes"]
  },
  {
    title: "Enterprise Support",
    features: ["24/7 phone support", "Custom SLA agreements", "Technical onboarding", "Architecture consulting"]
  }
]

export default function SupportPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="py-16 md:py-24 lg:py-32 border-b border-border">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <div className="max-w-3xl">
              <p className="text-sm font-mono text-muted-foreground mb-6 tracking-wider uppercase">
                Resources / Support
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
                  Support Center
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Expert technical support when you need it. Our engineering team is here to help 
                with integration, troubleshooting, and technical questions.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 border-b border-border">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-12">Contact Support</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {supportChannels.map((channel, index) => (
                <div
                  key={index}
                  className="p-8 border border-border rounded-2xl bg-card/50 backdrop-blur-sm"
                >
                  <div className="p-4 rounded-xl bg-primary/10 inline-flex mb-6">
                    <channel.icon className="w-8 h-8" style={{ color: "#203eec" }} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{channel.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {channel.description}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-6">
                    <Clock className="w-4 h-4" />
                    {channel.availability}
                  </div>
                  <Link
                    href={channel.href}
                    className="inline-flex items-center justify-center w-full px-6 py-3 text-sm font-medium text-white rounded-xl transition-all hover:shadow-lg"
                    style={{ 
                      background: "linear-gradient(135deg, #203eec 0%, #00d4ff 100%)",
                      boxShadow: "0 4px 12px rgba(32, 62, 236, 0.25)"
                    }}
                  >
                    {channel.action}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 border-b border-border bg-secondary/30">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-12">Support Levels</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {supportLevels.map((level, index) => (
                <div key={index} className="p-6 border border-border rounded-xl bg-card">
                  <h3 className="text-lg font-semibold mb-4">{level.title}</h3>
                  <ul className="space-y-3">
                    {level.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#203eec" }} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 border-b border-border">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <div className="flex items-center gap-3 mb-12">
              <HelpCircle className="w-8 h-8" style={{ color: "#203eec" }} />
              <h2 className="text-3xl md:text-4xl font-semibold">Frequently Asked Questions</h2>
            </div>
            <div className="max-w-3xl space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="p-6 border border-border rounded-xl bg-card">
                  <h3 className="font-semibold mb-2">{faq.question}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                Still need help?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our technical support team is ready to assist with your questions and issues.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-white rounded-full transition-all hover:shadow-lg"
                style={{ 
                  background: "linear-gradient(135deg, #203eec 0%, #00d4ff 100%)",
                  boxShadow: "0 4px 20px rgba(32, 62, 236, 0.3)"
                }}
              >
                Contact Us
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
