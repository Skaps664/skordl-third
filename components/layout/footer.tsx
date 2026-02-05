"use client"

import Link from "next/link"
import { Github, Linkedin, Twitter, Dribbble } from "lucide-react"
import ClutchWidget from "@/components/ui/clutch-widget"

const socialLinks = [
  { href: "#", icon: Twitter, label: "Twitter" },
  { href: "#", icon: Linkedin, label: "LinkedIn" },
  { href: "#", icon: Github, label: "GitHub" },
  { href: "#", icon: Dribbble, label: "Dribbble" },
]

const footerProducts = [
  { href: "/products/eazstart", label: "EazStart", tag: "Live" },
  { href: "/products/flowboard", label: "FlowBoard", tag: "Live" },
  { href: "/products/newshub", label: "NewsHub", tag: "Live" },
  { href: "/products/cureos", label: "cureOS", tag: "Beta" },
  { href: "/products/billingpro", label: "BillingPro", tag: "Live" },
]

const footerServices = [
  { href: "/services/mvp-development", label: "MVP Development" },
  { href: "/services/website-redesign", label: "Website Redesign" },
  { href: "/services/custom-development", label: "Custom Development" },
  { href: "/services/ecommerce-solutions", label: "Ecommerce Solutions" },
  { href: "/services/management-systems", label: "Management Systems" },
  { href: "/services/ai-solutions", label: "AI Solutions" },
]

const footerCompany = [
  { href: "#about", label: "About Skord Labs" },
  { href: "#", label: "Our Process" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/blog", label: "Blog" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
]

const footerResources = [
  { href: "/case-studies", label: "Case Studies" },
  { href: "/blog", label: "Our Blog" },
  { href: "/activities", label: "Activities" },
  { href: "/documentation", label: "Documentation" },
  { href: "/community", label: "Community" },
  { href: "/support", label: "Support Center" },
  { href: "/api-reference", label: "API Reference" },
]

const footerSolutions = [
  { href: "/solutions/for-startups", label: "For Startups" },
  { href: "/solutions/for-enterprise", label: "For Enterprise" },
  { href: "/solutions/for-agencies", label: "For Agencies" },
  { href: "/solutions/custom-development", label: "Custom Development" },
  { href: "/solutions/tech-consulting", label: "Tech Consulting" },
]

const footerIndustries = [
  { href: "#", label: "Fintech & Banking" },
  { href: "#", label: "Healthcare" },
  { href: "#", label: "E-commerce" },
  { href: "#", label: "Real Estate" },
  { href: "#", label: "Education" },
]

const footerLegal = [
  { href: "/sitemap-page", label: "Sitemap" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-service", label: "Terms of Service" },
  { href: "/security", label: "Security" },
  { href: "/compliance", label: "Compliance" },
  { href: "/cookie-policy", label: "Cookie Policy" },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 py-12 md:py-16">
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-12">
          {/* Brand - Takes 3 columns */}
          <div className="lg:col-span-3">
            <Link href="/" className="inline-block mb-4">
              <img
                src="/logo-black.png"
                alt="Skord Labs"
                className="h-8 w-auto"
              />
            </Link>
            <h3 className="text-base font-semibold mb-2 tracking-tight">
              Software research & development lab
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Building production-grade solutions and advancing technical knowledge. We transform ideas into scalable software that drives real business results.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 mb-4">
              <div>
                <Link
                  href="mailto:hello@skordl.com"
                  className="text-xs transition-colors hover:underline"
                  style={{ color: "#203eec" }}
                >
                  hello@skordl.com
                </Link>
              </div>
              <div>
                <Link
                  href="tel:+923259327819"
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  +92 325 9327819
                </Link>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="p-2 rounded-full bg-secondary transition-all hover:bg-primary/10"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" style={{ color: "#203eec" }} />
                </Link>
              ))}
            </div>
          </div>

          {/* Links Grid - Takes 9 columns */}
          <div className="lg:col-span-9 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-6">
          {/* Our Products */}
          <div>
            <h4 className="text-xs font-semibold mb-4 uppercase tracking-wider">Our Products</h4>
            <ul className="space-y-3">
              {footerProducts.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                  >
                    {link.label}
                    <span className={`text-[9px] px-1.5 py-0.5 rounded-full ${
                      link.tag === 'Live' 
                        ? 'bg-green-500/10 text-green-600 dark:text-green-400' 
                        : 'bg-yellow-500/10 text-yellow-600 dark:text-yellow-400'
                    }`}>
                      {link.tag}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-semibold mb-4 uppercase tracking-wider">Services</h4>
            <ul className="space-y-3">
              {footerServices.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-semibold mb-4 uppercase tracking-wider">Company</h4>
            <ul className="space-y-3">
              {footerCompany.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-xs font-semibold mb-4 uppercase tracking-wider">Solutions</h4>
            <ul className="space-y-3">
              {footerSolutions.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xs font-semibold mb-4 uppercase tracking-wider">Resources</h4>
            <ul className="space-y-3">
              {footerResources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-xs font-semibold mb-4 uppercase tracking-wider">Industries</h4>
            <ul className="space-y-3">
              {footerIndustries.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-6 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-3">
            <p className="text-xs text-muted-foreground text-center md:text-left">
              © {new Date().getFullYear()} Skord Labs. All rights reserved. Built with precision in Pakistan.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
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
      </div>
    </footer>
  )
}
