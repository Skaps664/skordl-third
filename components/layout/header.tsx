"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDown, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

type NavItem = {
  label: string
  href: string
  children?: string[]
}

type NavGroup = {
  label: string
  number: string
  items: NavItem[]
}

const navGroups: NavGroup[] = [
  {
    label: "About",
    number: "01",
    items: [
      { label: "Recent Projects", href: "/case-studies" },
      { label: "Our Team", href: "/team" },
      { label: "Activities", href: "/activities" },
      { label: "Community", href: "/community" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    label: "Services",
    number: "02",
    items: [
      {
        label: "Brand building, rebranding & launch",
        href: "/services/brand-building",
        children: [
          "Brand strategy and positioning",
          "Visual identity and messaging systems",
          "Rebranding and migration planning",
          "Go-to-market launch setup",
          "AI-assisted brand operations",
        ],
      },
      {
        label: "AI solutions",
        href: "/services/ai-solutions",
        children: [
          "AI assistants & support bots",
          "Workflow automations across tools",
          "Custom AI model integration",
          "AI business operations systems",
          "AI tools for internal teams",
          "LLM integration & fine-tuning",
          "Machine learning pipelines",
          "Natural language processing",
          "Computer vision systems",
          "Predictive analytics & forecasting",
        ],
      },
      {
        label: "Develop your MVP with us",
        href: "/services/mvp-development",
        children: [
          "Rapid prototyping & validation",
          "Product-market fit research",
          "Scalable architecture from day one",
          "User testing & iteration",
          "Go-to-market technical strategy",
        ],
      },
      {
        label: "Bring your vision to life",
        href: "/services/custom-development",
        children: [
          "Full-stack web applications",
          "Mobile app development",
          "Real-time systems & WebSockets",
          "Progressive web apps",
          "Cross-platform solutions",
        ],
      },
      {
        label: "Ecommerce solutions",
        href: "/services/ecommerce-solutions",
        children: [
          "Headless commerce architecture",
          "Payment gateway integration",
          "Inventory management systems",
          "Personalization engines",
          "Analytics & conversion tracking",
        ],
      },
      {
        label: "Custom software & management systems",
        href: "/services/management-systems",
        children: [
          "Internal tools & dashboards",
          "Workflow automation",
          "CRM & ERP systems",
          "Data management platforms",
          "Integration & API development",
        ],
      },
    ],
  },
  {
    label: "Solutions",
    number: "03",
    items: [
      { label: "For Startups", href: "/solutions/for-startups" },
      { label: "For Agencies", href: "/solutions/for-agencies" },
      { label: "For Enterprise", href: "/solutions/for-enterprise" },
      { label: "Tech Consulting", href: "/solutions/tech-consulting" },
    ],
  },
  {
    label: "Products",
    number: "04",
    items: [
      { label: "All Products", href: "/products" },
      { label: "CastAIPro", href: "/products/castaipro" },
      { label: "RedByOne", href: "/products/redbyone" },
      { label: "ConfiguraX", href: "/products/configurax" },
      { label: "EazStart", href: "/products/eazstart" },
      { label: "FlowBoard", href: "/products/flowboard" },
      { label: "cureOS", href: "/products/cureos" },
      { label: "BillingPro", href: "/products/billingpro" },
    ],
  },
  {
    label: "Resources",
    number: "05",
    items: [
      { label: "Blog", href: "/blog" },
      { label: "Documentation", href: "/documentation" },
      { label: "API Reference", href: "/api-reference" },
      { label: "Support", href: "/support" },
      { label: "Compliance", href: "/compliance" },
      { label: "Security", href: "/security" },
      { label: "Contact", href: "/contact" },
    ],
  },
]

export function Header() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openDesktopMenu, setOpenDesktopMenu] = useState<string | null>(null)
  const [openDesktopSubMenu, setOpenDesktopSubMenu] = useState<string | null>(null)
  const [openMobileGroup, setOpenMobileGroup] = useState<string | null>(null)
  const [openMobileSubMenu, setOpenMobileSubMenu] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setOpenDesktopMenu(null)
    setOpenDesktopSubMenu(null)
    setOpenMobileGroup(null)
    setOpenMobileSubMenu(null)
    setIsMobileMenuOpen(false)
  }, [pathname])

  const isItemActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`)

  const isGroupActive = (group: NavGroup) => group.items.some((item) => isItemActive(item.href))

  const handleMobileGroupToggle = (label: string) => {
    setOpenMobileGroup((current) => (current === label ? null : label))
  }

  const handleMobileSubMenuToggle = (key: string) => {
    setOpenMobileSubMenu((current) => (current === key ? null : key))
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

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navGroups.map((group) => (
                <div
                  key={group.label}
                  className="relative"
                  onMouseEnter={() => setOpenDesktopMenu(group.label)}
                  onMouseLeave={() => {
                    setOpenDesktopMenu((current) => (current === group.label ? null : current))
                    setOpenDesktopSubMenu(null)
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setOpenDesktopMenu((current) => (current === group.label ? null : group.label))}
                    className={cn(
                      "inline-flex items-center gap-1.5 text-sm transition-colors",
                      isGroupActive(group) ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {group.label}
                    <span className="text-xs opacity-50">({group.number})</span>
                    <ChevronDown
                      className={cn(
                        "w-3.5 h-3.5 transition-transform duration-200",
                        openDesktopMenu === group.label ? "rotate-180" : "rotate-0"
                      )}
                    />
                  </button>

                  <div
                    className={cn(
                      "absolute left-0 top-full min-w-[230px] pt-3 transition-all duration-200",
                      openDesktopMenu === group.label
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 -translate-y-1 pointer-events-none"
                    )}
                  >
                    <div className="rounded-xl border border-border bg-background/95 backdrop-blur-md shadow-2xl p-2">
                      {group.items.map((item) => (
                        <div
                          key={`${group.label}-${item.href}`}
                          className="relative"
                          onMouseEnter={() => setOpenDesktopSubMenu(`${group.label}-${item.href}`)}
                        >
                          <Link
                            href={item.href}
                            className={cn(
                              "flex items-center justify-between rounded-lg px-3 py-2.5 text-sm transition-colors",
                              isItemActive(item.href)
                                ? "bg-primary/10 text-foreground"
                                : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                            )}
                          >
                            <span>{item.label}</span>
                            {item.children && item.children.length > 0 ? <ChevronDown className="w-3.5 h-3.5 -rotate-90" /> : null}
                          </Link>

                          {item.children && item.children.length > 0 ? (
                            <div
                              className={cn(
                                "absolute left-full top-0 ml-2 w-[280px] rounded-xl border border-border bg-background/95 backdrop-blur-md shadow-2xl p-2 transition-all duration-200",
                                openDesktopSubMenu === `${group.label}-${item.href}`
                                  ? "opacity-100 translate-x-0 pointer-events-auto"
                                  : "opacity-0 translate-x-1 pointer-events-none"
                              )}
                            >
                              <p className="px-3 py-2 text-xs uppercase tracking-[0.12em] text-muted-foreground">Details</p>
                              <ul className="space-y-1">
                                {item.children.map((child) => (
                                  <li
                                    key={child}
                                    className="rounded-md px-3 py-2 text-xs text-muted-foreground bg-secondary/40"
                                  >
                                    {child}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ) : null}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
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
              {navGroups.map((group, index) => {
                const isOpen = openMobileGroup === group.label
                const groupActive = isGroupActive(group)

                return (
                  <div
                    key={group.label}
                    className="rounded-lg"
                    style={{
                      animationDelay: `${index * 50}ms`,
                      animation: isMobileMenuOpen ? "slideIn 0.3s ease-out forwards" : "none",
                      opacity: isMobileMenuOpen ? 1 : 0,
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => handleMobileGroupToggle(group.label)}
                      className={cn(
                        "w-full flex items-center justify-between gap-3 py-3 px-4 rounded-lg transition-all duration-200",
                        groupActive || isOpen ? "bg-primary/10" : "hover:bg-secondary"
                      )}
                    >
                      <span className="flex items-baseline gap-3">
                        <span
                          className={cn(
                            "text-xs font-mono transition-colors",
                            groupActive || isOpen ? "text-primary" : "text-muted-foreground"
                          )}
                          style={groupActive || isOpen ? { color: "#203eec" } : {}}
                        >
                          {group.number}
                        </span>
                        <span
                          className={cn(
                            "text-xl font-semibold transition-colors",
                            groupActive || isOpen ? "text-primary" : "text-foreground"
                          )}
                          style={groupActive || isOpen ? { color: "#203eec" } : {}}
                        >
                          {group.label}
                        </span>
                      </span>
                      <ChevronDown
                        className={cn(
                          "w-4 h-4 text-muted-foreground transition-transform duration-200",
                          isOpen ? "rotate-180" : "rotate-0"
                        )}
                      />
                    </button>

                    <div
                      className={cn(
                        "grid transition-all duration-200",
                        isOpen ? "grid-rows-[1fr] opacity-100 mt-1" : "grid-rows-[0fr] opacity-0"
                      )}
                    >
                      <div className="overflow-hidden">
                        <div className="pl-6 pr-2 pb-2 pt-1 space-y-1">
                          {group.items.map((item) => {
                            const subMenuKey = `${group.label}-${item.href}`
                            const isSubOpen = openMobileSubMenu === subMenuKey

                            return (
                              <div key={subMenuKey}>
                                <div className="flex items-center gap-1">
                                  <Link
                                    href={item.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={cn(
                                      "flex-1 rounded-md px-3 py-2.5 text-sm transition-colors",
                                      isItemActive(item.href)
                                        ? "bg-primary/10 text-foreground"
                                        : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                                    )}
                                  >
                                    {item.label}
                                  </Link>
                                  {item.children && item.children.length > 0 ? (
                                    <button
                                      type="button"
                                      onClick={() => handleMobileSubMenuToggle(subMenuKey)}
                                      className="p-2 rounded-md hover:bg-secondary transition-colors"
                                      aria-label={`Toggle ${item.label} details`}
                                    >
                                      <ChevronDown
                                        className={cn(
                                          "w-4 h-4 text-muted-foreground transition-transform duration-200",
                                          isSubOpen ? "rotate-180" : "rotate-0"
                                        )}
                                      />
                                    </button>
                                  ) : null}
                                </div>

                                {item.children && item.children.length > 0 ? (
                                  <div
                                    className={cn(
                                      "grid transition-all duration-200",
                                      isSubOpen ? "grid-rows-[1fr] opacity-100 mt-1" : "grid-rows-[0fr] opacity-0"
                                    )}
                                  >
                                    <div className="overflow-hidden">
                                      <ul className="ml-2 space-y-1">
                                        {item.children.map((child) => (
                                          <li
                                            key={child}
                                            className="rounded-md px-3 py-2 text-xs text-muted-foreground bg-secondary/50"
                                          >
                                            {child}
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  </div>
                                ) : null}
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
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
