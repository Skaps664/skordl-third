"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "/#works", label: "Work", number: "01" },
  { href: "/#about", label: "About", number: "02" },
  { href: "/#services", label: "Services", number: "03" },
  { href: "/#team", label: "Team", number: "04" },
  { href: "/#testimonials", label: "Testimonials", number: "05" },
  { href: "/#insights", label: "Insights", number: "06" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Detect active section
      const sections = navItems.map(item => item.href.replace('/#', ''))
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    
    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // If href starts with "/#", let Next.js handle navigation to home page with hash
    if (href.startsWith("/#")) {
      // Don't prevent default, let Link handle navigation
    } else if (window.location.pathname === "/" && href.startsWith("#")) {
      // If we're on home page and it's a hash link, scroll to section
      e.preventDefault()
      const element = document.querySelector(href)
      if (element) {
        const headerOffset = 80 // Height of fixed header
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        })
      }
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent",
        )}
      >
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <nav className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center relative z-10"
            >
              <img
                src="/logo-black.png"
                alt="Skord Labs"
                className="h-8 w-auto"
              />
            </Link>

            {/* Desktop Navigation - Hidden, use mobile menu */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                  <span className="text-xs ml-1 opacity-50">({item.number})</span>
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium rounded-full text-white transition-all hover:shadow-xl relative overflow-hidden group"
                style={{
                  background: "linear-gradient(135deg, #203eec 0%, #00d4ff 100%)",
                  boxShadow: "0 4px 20px rgba(32, 62, 236, 0.3)",
                }}
              >
                <span className="relative z-10">Get in Touch</span>
                {/* Glow effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl bg-gradient-to-r from-[#203eec] to-[#00d4ff]" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsMobileMenuOpen(true)} className="lg:hidden p-2 -mr-2" aria-label="Open menu">
              <Menu className="w-5 h-5" />
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <div
        className={cn(
          "fixed inset-0 z-50 lg:hidden transition-opacity duration-300",
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        {/* Drawer */}
        <div
          className={cn(
            "absolute left-0 top-0 bottom-0 w-[85%] max-w-sm bg-background shadow-2xl transition-transform duration-300 ease-out",
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <div className="flex flex-col h-full p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-12">
              <Link 
                href="/" 
                className="text-lg font-semibold tracking-tight"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <img
                  src="/logo-black.png"
                  alt="Skord Labs"
                  className="h-8 w-auto"
                />
              </Link>
              <button 
                onClick={() => setIsMobileMenuOpen(false)} 
                className="p-2 -mr-2 hover:bg-secondary rounded-lg transition-colors" 
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            {/* Navigation */}
            <nav className="flex flex-col gap-2 flex-1 overflow-y-auto">
              {navItems.map((item, index) => {
                const isActive = activeSection === item.href.replace('/#', '')
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={cn(
                      "group flex items-baseline gap-3 py-3 px-4 rounded-lg transition-all duration-200",
                      isActive 
                        ? "bg-primary/10" 
                        : "hover:bg-secondary"
                    )}
                    style={{
                      animationDelay: `${index * 50}ms`,
                      animation: isMobileMenuOpen ? 'slideIn 0.3s ease-out forwards' : 'none',
                      opacity: isMobileMenuOpen ? 1 : 0,
                    }}
                  >
                    <span 
                      className={cn(
                        "text-xs font-mono transition-colors",
                        isActive ? "text-primary" : "text-muted-foreground"
                      )}
                      style={isActive ? { color: "#203eec" } : {}}
                    >
                      {item.number}
                    </span>
                    <span 
                      className={cn(
                        "text-xl font-semibold transition-colors",
                        isActive ? "text-primary" : "text-foreground"
                      )}
                      style={isActive ? { color: "#203eec" } : {}}
                    >
                      {item.label}
                    </span>
                  </Link>
                )
              })}
            </nav>
            
            {/* CTA Button */}
            <div className="mt-6 pt-6 border-t border-border">
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="inline-flex items-center justify-center w-full px-6 py-3.5 text-base font-medium rounded-full text-white transition-all hover:shadow-xl relative overflow-hidden group"
                style={{
                  background: "linear-gradient(135deg, #203eec 0%, #00d4ff 100%)",
                  boxShadow: "0 4px 20px rgba(32, 62, 236, 0.3)",
                }}
              >
                <span className="relative z-10">Get in Touch</span>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl bg-gradient-to-r from-[#203eec] to-[#00d4ff]" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Slide-in animation */}
      <style jsx global>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  )
}
