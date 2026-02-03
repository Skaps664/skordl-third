"use client"

import Link from "next/link"
import { Github, Linkedin, Twitter, Dribbble } from "lucide-react"

const socialLinks = [
  { href: "#", icon: Twitter, label: "Twitter" },
  { href: "#", icon: Linkedin, label: "LinkedIn" },
  { href: "#", icon: Github, label: "GitHub" },
  { href: "#", icon: Dribbble, label: "Dribbble" },
]

const footerServices = [
  { href: "#services", label: "Software Development" },
  { href: "#services", label: "UI/UX Design" },
  { href: "#services", label: "Machine Learning" },
  { href: "#services", label: "Research & Development" },
  { href: "#services", label: "Consulting" },
]

const footerCompany = [
  { href: "#about", label: "About Us" },
  { href: "#team", label: "Our Team" },
  { href: "#", label: "Careers" },
  { href: "/contact", label: "Contact" },
]

const footerInsights = [
  { href: "/blog", label: "Blog" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/activities", label: "Activities" },
]

const footerLegal = [
  { href: "#", label: "Privacy Policy" },
  { href: "#", label: "Terms of Service" },
]

const footerLinks = [
  { href: "#about", label: "About Us" },
  { href: "#services", label: "Services" },
  { href: "#insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
]

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 md:gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-2">
            <Link href="/" className="flex items-center">
              <img
                src="/logo-black.png"
                alt="Skord Labs"
                className="h-8 w-auto mb-4"
              />
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
              Software research & development lab. Building production-grade solutions and advancing technical knowledge.
            </p>
            <div className="flex items-center gap-4 mt-6">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="p-2 rounded-full bg-secondary transition-colors hover:bg-opacity-10"
                  style={{ ["--hover-bg" as any]: "#203eec20" }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#203eec20")}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "")}
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" style={{ color: "#203eec" }} />
                </Link>
              ))}
            </div>
            <div className="mt-4">
              <Link
                href="mailto:hello@skordl.com"
                className="text-sm transition-colors hover:underline"
                style={{ color: "#203eec" }}
              >
                hello@skordl.com
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {footerServices.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerCompany.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Insights */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Insights</h4>
            <ul className="space-y-3">
              {footerInsights.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-16 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Skord Labs. All rights reserved.</p>
          <div className="flex items-center gap-6">
            {footerLegal.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
