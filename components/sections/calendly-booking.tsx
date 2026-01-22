"use client"

import { SectionTitle } from "@/components/ui/section-title"
import { useEffect } from "react"

export function CalendlyBooking() {
  useEffect(() => {
    // Load Calendly script
    const script = document.createElement("script")
    script.src = "https://assets.calendly.com/assets/external/widget.js"
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <section id="booking" className="py-20 border-border border-t-0 md:py-10 md:pb-32 md:pt-32">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <SectionTitle className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-balance">
            Book Your Free Consultation
          </SectionTitle>
          <p className="mt-6 text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Schedule a one-on-one video consultation with our team. Discuss your project, explore solutions, and see how we can help you achieve your goals.
          </p>
        </div>

        {/* Calendly Button */}
        <div className="text-center">
          <button
            className="calendly-popup-link inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            data-url="https://calendly.com/sudais-skaps/30min"
          >
            📅 Book Your Free Consultation
          </button>
          <p className="mt-4 text-muted-foreground text-sm">
            Click to open our scheduling calendar
          </p>
        </div>

        {/* Info Text */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground text-sm">
            Prefer email? Reach out to us at{" "}
            <a href="mailto:hello@skordl.com" className="font-semibold hover:underline" style={{ color: "#203eec" }}>
              hello@skordl.com
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
