"use client"

import { useEffect, useState } from "react"
import { ChevronUp, Phone } from "lucide-react"
import { useCallCTA } from "@/lib/call-cta-context"

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const { open } = useCallCTA()

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when scrolled down 2x screen height
      if (window.scrollY > window.innerHeight * 2) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)

    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <>
      {isVisible && (
        <>
          <button
            onClick={open}
            className="fixed bottom-20 right-6 z-50 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
            style={{ 
              background: "#203eec",
              color: "white"
            }}
            aria-label="Call us"
          >
            <Phone className="w-6 h-6" />
          </button>
          <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
            style={{ 
              background: "#203eec",
              color: "white"
            }}
            aria-label="Back to top"
          >
            <ChevronUp className="w-6 h-6" />
          </button>
        </>
      )}
    </>
  )
}
