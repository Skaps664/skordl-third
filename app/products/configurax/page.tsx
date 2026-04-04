export const metadata = {
  title: "ConfiguraX - Production-ready Configuration Platform | Skord Labs",
  description:
    "Create intelligent product configurators with ConfiguraX, an API-first platform with visual builder, enterprise security, and global-scale infrastructure.",
  keywords: ["ConfiguraX", "configuration platform", "API-first SaaS", "product configurator"],
}

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { GradientBar } from "@/components/ui/gradient-bar"
import { ArrowRight, Zap, ShieldCheck, Globe2, CheckCircle2, ArrowUpRight, Code2, BarChart3 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const features = [
  {
    icon: Code2,
    title: "Developer Friendly API",
    description: "RESTful API and docs-first workflow with SDK-ready integration for modern teams.",
  },
  {
    icon: Zap,
    title: "Lightning Fast Validation",
    description: "Sub-millisecond response path designed for instant configuration checks.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    description: "SOC 2-ready security posture with encryption, access controls, and SSO support.",
  },
  {
    icon: Globe2,
    title: "Global Scale",
    description: "Distributed architecture for high-volume configuration traffic and global uptime.",
  },
]

const benefits = [
  "API-first configuration architecture",
  "Visual builder for rules and logic",
  "Advanced analytics on configuration behavior",
  "Enterprise-grade security controls",
  "Usage-ready plans from Starter to Enterprise",
  "Supports manufacturing, automotive, tech, and retail use cases",
]

const metrics = [
  { value: "10k+", label: "Developers" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "1M+", label: "API calls/day" },
  { value: "Live", label: "Production platform" },
]

export default function ConfiguraXPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="py-16 md:py-24 lg:py-32 border-b border-border relative overflow-hidden">
          <div className="absolute -right-32 md:-right-48 top-32 md:top-40 w-[500px] h-[500px] md:w-[750px] md:h-[750px] pointer-events-none -z-10 opacity-30">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 blur-3xl" />
          </div>

          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <div className="mb-6 flex items-center gap-3">
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-green-500/10 text-green-600 dark:text-green-400">
                    Live
                  </span>
                  <span className="text-sm text-muted-foreground">SaaS • API Platform</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight leading-[1.1] mb-6 md:mb-8">
                  <span
                    style={{
                      background: "linear-gradient(135deg, #ff006e 0%, #8b5cf6 33%, #203eec 66%, #00d4ff 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    ConfiguraX
                  </span>
                  <br />
                  <span className="text-3xl md:text-4xl lg:text-5xl">Production-ready configuration platform</span>
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10">
                  Build better with API-first product configuration logic, enterprise controls, and scalable infrastructure
                  built for modern SaaS teams.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="https://www.configurax.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-white rounded-full transition-all hover:shadow-lg"
                    style={{
                      background: "linear-gradient(135deg, #203eec 0%, #00d4ff 100%)",
                      boxShadow: "0 4px 20px rgba(32, 62, 236, 0.3)",
                    }}
                  >
                    Visit ConfiguraX
                    <ArrowUpRight className="w-5 h-5" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium border border-border rounded-full hover:bg-secondary transition-all"
                  >
                    Build Similar SaaS
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>

              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-transparent border border-border">
                <Image
                  src="/images/bg-2.png"
                  alt="ConfiguraX"
                  fill
                  className="object-cover"
                />
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
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6">Everything needed to ship</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="p-8 border border-border rounded-2xl hover:border-foreground/20 transition-all duration-300 bg-card/50 backdrop-blur-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 shrink-0">
                      <feature.icon className="w-6 h-6" style={{ color: "#203eec" }} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
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
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6">Platform highlights</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 p-4">
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" style={{ color: "#203eec" }} />
                  <span className="text-base text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 lg:py-32">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <div className="max-w-3xl mx-auto text-center">
              <BarChart3 className="w-12 h-12 mx-auto mb-6" style={{ color: "#203eec" }} />
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6">
                Need a custom configuration SaaS?
              </h2>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                We architect and ship API-first products with enterprise reliability, performance, and global readiness.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-white rounded-full transition-all hover:shadow-lg"
                style={{
                  background: "linear-gradient(135deg, #203eec 0%, #00d4ff 100%)",
                  boxShadow: "0 4px 20px rgba(32, 62, 236, 0.3)",
                }}
              >
                Talk to Skord Labs
                <ArrowUpRight className="w-5 h-5" />
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
