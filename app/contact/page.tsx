import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ContactForm } from "@/components/sections/contact-form"
import { GradientBar } from "@/components/ui/gradient-bar"
import { Mail, MapPin, Phone } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us | Skord Labs - Pakistan's Top Software Company",
  description: "Get in touch with Skord Labs, Pakistan's leading software development company. Let's discuss your project and build something amazing together.",
  keywords: ["contact Skord Labs", "software development inquiry", "Pakistan software company contact", "get quote software development"],
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 lg:py-32 border-b border-border">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <div className="max-w-3xl">
              <p className="text-sm font-mono text-muted-foreground mb-6 tracking-wider uppercase">
                Get in Touch
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-semibold tracking-tight leading-[1.1] mb-6 md:mb-8">
                Let's build something
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
                  remarkable together
                </span>
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed">
                Whether you need a technical partner for development, research collaboration, 
                or expert consulting—we'd love to discuss your project and how we can help bring it to life.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info & Form Section */}
        <section className="py-16 md:py-24 lg:py-32">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16 mb-12 md:mb-20">
              {/* Contact Information Cards */}
              <div className="lg:col-span-1 space-y-6">
                {/* Email */}
                <div className="p-6 md:p-8 border border-border rounded-2xl bg-card/50 backdrop-blur-sm hover:bg-card transition-all duration-300 hover:border-foreground/20">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/10">
                      <Mail className="w-6 h-6" style={{ color: "#203eec" }} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2">Email</h3>
                      <a
                        href="mailto:hello@skordl.com"
                        className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                      >
                        hello@skordl.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="p-6 md:p-8 border border-border rounded-2xl bg-card/50 backdrop-blur-sm hover:bg-card transition-all duration-300 hover:border-foreground/20">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/10">
                      <Phone className="w-6 h-6" style={{ color: "#203eec" }} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2">Phone</h3>
                      <a
                        href="tel:+923259327819"
                        className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                      >
                        +92 325 9327819
                      </a>
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div className="p-6 md:p-8 border border-border rounded-2xl bg-card/50 backdrop-blur-sm hover:bg-card transition-all duration-300 hover:border-foreground/20">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/10">
                      <MapPin className="w-6 h-6" style={{ color: "#203eec" }} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2">Address</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        A2 Third Floor ,Dil Jan Arcade,
                        <br />
                        Ring Road, Peshawar
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="p-8 md:p-12 border border-border rounded-2xl bg-card/50 backdrop-blur-sm">
                  <h2 className="text-2xl md:text-3xl font-semibold mb-6">Send us a message</h2>
                  <ContactForm />
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
