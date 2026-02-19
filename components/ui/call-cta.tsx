"use client"

import { Phone, X } from "lucide-react"
import Link from "next/link"
import { useCallCTA } from "@/lib/call-cta-context"

export function CallCTA() {
  const { isVisible, close } = useCallCTA()

  if (!isVisible) return null

  return (
    <>
      {/* Backdrop blur */}
      <div className="fixed inset-0 bg-black/40 backdrop-blur-md z-50 transition-all duration-300" />

      {/* CTA Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-card border border-border rounded-3xl shadow-2xl max-w-lg w-full animate-in zoom-in-95 duration-500 overflow-hidden">
          {/* Close button */}
          <button
            onClick={close}
            className="absolute top-6 right-6 p-2 rounded-xl hover:bg-secondary transition-colors z-10"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Content */}
          <div className="relative p-10 md:p-12">
            {/* Decorative gradient */}
            <div 
              className="absolute top-0 left-0 right-0 h-1"
              style={{
                background: "linear-gradient(90deg, #ff006e 0%, #8b5cf6 33%, #203eec 66%, #00d4ff 100%)"
              }}
            />

            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div 
                className="p-4 rounded-2xl"
                style={{
                  background: "linear-gradient(135deg, #203eec15 0%, #00d4ff15 100%)"
                }}
              >
                <Phone className="w-10 h-10" style={{ color: "#203eec" }} />
              </div>
            </div>

            {/* Text */}
            <h2 className="text-2xl md:text-3xl font-semibold text-center mb-4 tracking-tight">
              Call us anytime you feel like it
            </h2>
            <p className="text-base md:text-lg text-muted-foreground text-center mb-8 leading-relaxed">
              We'll turn your ideas into reality. Let's discuss your project and create something amazing together.
            </p>

            {/* CTA Button */}
            <div className="flex flex-col gap-3">
              <Link
                href="tel:+923259327819"
                className="flex items-center justify-center gap-3 px-8 py-4 text-base font-medium text-white rounded-xl transition-all hover:shadow-xl"
                style={{ 
                  background: "linear-gradient(135deg, #203eec 0%, #00d4ff 100%)",
                  boxShadow: "0 4px 20px rgba(32, 62, 236, 0.3)"
                }}
                onClick={close}
              >
                <Phone className="w-5 h-5" />
                +92 325 9327819
              </Link>
              
              <button
                onClick={close}
                className="px-8 py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Maybe later
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
