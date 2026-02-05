export const metadata = {
  title: "Careers | Join Skord Labs - Pakistan's Top Software Development Company",
  description: "Join Pakistan's leading software development company. Explore career opportunities at Skord Labs and work on cutting-edge projects.",
  keywords: ["Skord Labs careers", "software developer jobs Pakistan", "tech jobs Peshawar", "software company careers"],
}

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { GradientBar } from "@/components/ui/gradient-bar"
import { Briefcase, MapPin, Clock, Users } from "lucide-react"
import Link from "next/link"

const benefits = [
  "Competitive salary & equity options",
  "Remote-friendly work culture",
  "Health insurance coverage",
  "Professional development budget",
  "Latest hardware & tools",
  "Flexible working hours",
  "Annual team retreats",
  "Open-source contribution time"
]

const values = [
  {
    title: "Technical Excellence",
    description: "We believe in writing clean, maintainable code and following best practices."
  },
  {
    title: "Continuous Learning",
    description: "Growth mindset is essential. We invest in our team's technical development."
  },
  {
    title: "Ownership & Impact",
    description: "Take ownership of projects and make meaningful contributions to products."
  },
  {
    title: "Collaboration",
    description: "Work closely with talented engineers, designers, and product managers."
  }
]

export default function CareersPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="py-16 md:py-24 lg:py-32 border-b border-border">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <div className="max-w-3xl">
              <p className="text-sm font-mono text-muted-foreground mb-6 tracking-wider uppercase">
                Company / Careers
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] mb-6">
                Build the future with
                <br />
                <span 
                  style={{
                    background: "linear-gradient(135deg, #ff006e 0%, #8b5cf6 33%, #203eec 66%, #00d4ff 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Skord Labs
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Join our team of engineers, researchers, and innovators building production-grade 
                software solutions that drive real business impact.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 border-b border-border">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-12">Why Join Us</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div key={index} className="p-8 border border-border rounded-2xl bg-card/50 backdrop-blur-sm">
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 border-b border-border bg-secondary/30">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-12">Benefits & Perks</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 p-4 border border-border rounded-lg bg-card">
                  <div className="w-2 h-2 rounded-full shrink-0" style={{ background: "#203eec" }} />
                  <span className="text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 border-b border-border">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <div className="flex items-center gap-3 mb-12">
              <Briefcase className="w-8 h-8" style={{ color: "#203eec" }} />
              <h2 className="text-3xl md:text-4xl font-semibold">Open Positions</h2>
            </div>
            
            <div className="max-w-3xl">
              <div className="p-12 border-2 border-dashed border-border rounded-2xl text-center">
                <div className="p-4 rounded-full bg-secondary inline-flex mb-6">
                  <Users className="w-8 h-8 text-muted-foreground" />
                </div>
                <h3 className="text-2xl font-semibold mb-3">No Open Positions</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We don't have any open positions at the moment, but we're always looking for 
                  exceptional talent. Submit your resume and we'll reach out when opportunities arise.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="mailto:careers@skordl.com?subject=General Application"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-white rounded-full transition-all hover:shadow-lg"
                    style={{ 
                      background: "linear-gradient(135deg, #203eec 0%, #00d4ff 100%)",
                      boxShadow: "0 4px 20px rgba(32, 62, 236, 0.3)"
                    }}
                  >
                    Submit Resume
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium border border-border rounded-full hover:bg-secondary transition-all"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <div className="grid lg:grid-cols-3 gap-8 p-12 border border-border rounded-2xl bg-card/50">
              <div className="flex items-start gap-3">
                <MapPin className="w-6 h-6 shrink-0" style={{ color: "#203eec" }} />
                <div>
                  <h3 className="font-semibold mb-1">Location</h3>
                  <p className="text-sm text-muted-foreground">Peshawar, Pakistan</p>
                  <p className="text-sm text-muted-foreground">Remote-friendly</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-6 h-6 shrink-0" style={{ color: "#203eec" }} />
                <div>
                  <h3 className="font-semibold mb-1">Working Hours</h3>
                  <p className="text-sm text-muted-foreground">Flexible schedule</p>
                  <p className="text-sm text-muted-foreground">Core hours: 10AM-4PM</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Briefcase className="w-6 h-6 shrink-0" style={{ color: "#203eec" }} />
                <div>
                  <h3 className="font-semibold mb-1">Work Style</h3>
                  <p className="text-sm text-muted-foreground">Hybrid & Remote</p>
                  <p className="text-sm text-muted-foreground">Collaborative culture</p>
                </div>
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
