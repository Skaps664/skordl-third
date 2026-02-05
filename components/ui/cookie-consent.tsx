"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 3000) // Show after 3 seconds
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setIsVisible(false)
  }

  const handleReject = () => {
    localStorage.setItem("cookie-consent", "rejected")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <>
      {/* Backdrop blur */}
      <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-all duration-300" />

      {/* Cookie consent popup */}
      <div className="fixed bottom-4 left-4 right-4 sm:bottom-6 sm:left-auto sm:right-6 z-50 w-auto sm:max-w-md animate-in slide-in-from-bottom-5 duration-500">
        <div className="bg-card border border-border rounded-2xl shadow-2xl p-6">
          <div className="flex items-start justify-between mb-4">
            <h3 className="text-lg font-semibold">Cookie Preferences</h3>
            <button
              onClick={handleReject}
              className="p-1 rounded-lg hover:bg-secondary transition-colors"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          
          <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
            We use cookies to enhance your browsing experience, serve personalized content, 
            and analyze our traffic. By clicking "Accept", you consent to our use of cookies.
          </p>

          <div className="flex items-center gap-3">
            <button
              onClick={handleAccept}
              className="flex-1 px-6 py-3 text-sm font-medium text-white rounded-xl transition-all hover:shadow-lg"
              style={{ 
                background: "linear-gradient(135deg, #203eec 0%, #00d4ff 100%)",
                boxShadow: "0 4px 12px rgba(32, 62, 236, 0.25)"
              }}
            >
              Accept
            </button>
            <button
              onClick={handleReject}
              className="flex-1 px-6 py-3 text-sm font-medium border border-border rounded-xl hover:bg-secondary transition-all"
            >
              Reject
            </button>
          </div>

          <div className="mt-4">
            <a 
              href="#" 
              className="text-xs text-muted-foreground hover:text-foreground transition-colors underline"
            >
              Learn more about our cookies
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
