"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface CallCTAContextType {
  isVisible: boolean
  open: () => void
  close: () => void
}

const CallCTAContext = createContext<CallCTAContextType | undefined>(undefined)

export function CallCTAProvider({ children }: { children: ReactNode }) {
  const [isVisible, setIsVisible] = useState(false)

  const open = () => setIsVisible(true)
  const close = () => setIsVisible(false)

  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem("call-cta-seen")
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsVisible(true)
        sessionStorage.setItem("call-cta-seen", "true")
      }, 30000) // Show after 30 seconds
      return () => clearTimeout(timer)
    }
  }, [])

  return (
    <CallCTAContext.Provider value={{ isVisible, open, close }}>
      {children}
    </CallCTAContext.Provider>
  )
}

export function useCallCTA() {
  const context = useContext(CallCTAContext)
  if (context === undefined) {
    throw new Error('useCallCTA must be used within a CallCTAProvider')
  }
  return context
}