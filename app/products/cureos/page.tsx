export const metadata = {
  title: "cureOS - Privacy-Focused OS by Skord Labs | Pakistan's Leading Software Company",
  description: "Advanced privacy and security with cureOS. Custom ROM for Android with enhanced protection by Pakistan's top software development company.",
  keywords: ["cureOS", "privacy OS", "Android ROM Pakistan", "secure operating system"],
}

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { GradientBar } from "@/components/ui/gradient-bar"
import { ArrowRight, Shield, Image as ImageIcon, Phone, CheckCircle2, ArrowUpRight, Users as ContactsIcon, Lock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const apps = [
  {
    icon: ImageIcon,
    title: "Gallery",
    description: "Beautiful photo gallery with album management, search, and privacy controls."
  },
  {
    icon: Phone,
    title: "Dialer",
    description: "Clean, fast dialer with call history, favorites, and spam detection."
  },
  {
    icon: ContactsIcon,
    title: "Contacts",
    description: "Modern contacts manager with groups, search, and cloud sync."
  },
  {
    icon: Lock,
    title: "Privacy First",
    description: "No tracking, no ads, no data collection. Your data stays on your device."
  }
]

const benefits = [
  "100% open source",
  "No ads or trackers",
  "Material You design",
  "Offline-first architecture",
  "Secure by default",
  "Regular updates",
  "Lightweight and fast",
  "Battery efficient",
  "Customizable themes",
  "Free forever"
]

const metrics = [
  { value: "Beta", label: "Currently in testing" },
  { value: "3", label: "Essential apps" },
  { value: "0", label: "Trackers or ads" },
  { value: "100%", label: "Privacy focused" }
]

export default function CureOSPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="py-16 md:py-24 lg:py-32 border-b border-border relative overflow-hidden">
          <div className="absolute -right-32 md:-right-48 top-32 md:top-40 w-[500px] h-[500px] md:w-[750px] md:h-[750px] pointer-events-none -z-10 opacity-30">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-green-500/20 to-emerald-500/20 blur-3xl" />
          </div>

          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <div className="mb-6 flex items-center gap-3">
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-600 dark:text-yellow-400">
                    Beta
                  </span>
                  <span className="text-sm text-muted-foreground">Android • Privacy</span>
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
                    cureOS
                  </span>
                  <br />
                  <span className="text-3xl md:text-4xl lg:text-5xl">
                    Android Essentials
                  </span>
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10">
                  Beautiful, privacy-focused alternatives for Gallery, Dialer, and Contacts. 
                  Open source Android apps that respect your privacy.
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
                    Join Beta Program
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium border border-border rounded-full hover:bg-secondary transition-all"
                  >
                    View on GitHub
                    <ArrowUpRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>

              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-transparent border border-border">
                <Image
                  src="/images/bg-1.png"
                  alt="cureOS Apps"
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
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6">
                Essential apps, reimagined
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Privacy-focused alternatives to stock Android apps with modern design and powerful features.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {apps.map((app, index) => (
                <div 
                  key={index}
                  className="p-8 border border-border rounded-2xl hover:border-foreground/20 transition-all duration-300 bg-card/50 backdrop-blur-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 shrink-0">
                      <app.icon className="w-6 h-6" style={{ color: "#203eec" }} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">{app.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{app.description}</p>
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
                Built with privacy in mind
              </h2>
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
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6">
                Take back your privacy
              </h2>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                Join the beta program and be among the first to use privacy-focused Android essentials.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-white rounded-full transition-all hover:shadow-lg"
                style={{ 
                  background: "linear-gradient(135deg, #203eec 0%, #00d4ff 100%)",
                  boxShadow: "0 4px 20px rgba(32, 62, 236, 0.3)"
                }}
              >
                Join Beta Program
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
