import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { GradientBar } from "@/components/ui/gradient-bar"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sitemap | Skord Labs - Pakistan's Top Software Development Company",
  description: "Browse all pages and services offered by Skord Labs, Pakistan's leading software development company.",
  keywords: ["sitemap", "site navigation", "Skord Labs pages"],
}

const sitemapSections = [
  {
    title: "Products",
    links: [
      { href: "/products/castaipro", label: "CastAIPro" },
      { href: "/products/youtube-to-shorts-ai", label: "YouTube to Shorts AI" },
      { href: "/products/eazstart", label: "EazStart" },
      { href: "/products/flowboard", label: "FlowBoard" },
      { href: "/products/newshub", label: "NewsHub" },
      { href: "/products/cureos", label: "cureOS" },
      { href: "/products/billingpro", label: "BillingPro" },
    ]
  },
  {
    title: "Services",
    links: [
      { href: "/services/ai-systems", label: "AI Systems & Automation" },
      { href: "/services/ai-solutions", label: "AI Solutions" },
      { href: "/services/ai-social-media-marketing", label: "AI Social Media Marketing Setup" },
      { href: "/services/brand-building", label: "Brand Building & Rebranding" },
      { href: "/services/mvp-development", label: "MVP Development" },
      { href: "/services/custom-development", label: "Custom Development" },
      { href: "/services/website-redesign", label: "Website Redesign" },
      { href: "/services/ecommerce-solutions", label: "Ecommerce Solutions" },
      { href: "/services/management-systems", label: "Management Systems" },
    ]
  },
  {
    title: "Solutions",
    links: [
      { href: "/solutions/for-startups", label: "For Startups" },
      { href: "/solutions/for-enterprise", label: "For Enterprise" },
      { href: "/solutions/for-agencies", label: "For Agencies" },
      { href: "/solutions/tech-consulting", label: "Tech Consulting" },
      { href: "/solutions/custom-development", label: "Custom Development" },
    ]
  },
  {
    title: "Resources",
    links: [
      { href: "/documentation", label: "Documentation" },
      { href: "/api-reference", label: "API Reference" },
      { href: "/community", label: "Community" },
      { href: "/support", label: "Support Center" },
      { href: "/blog", label: "Blog" },
      { href: "/case-studies", label: "Case Studies" },
      { href: "/activities", label: "Activities" },
    ]
  },
  {
    title: "Company",
    links: [
      { href: "/", label: "Home" },
      { href: "/careers", label: "Careers" },
      { href: "/contact", label: "Contact Us" },
    ]
  },
  {
    title: "Legal",
    links: [
      { href: "/privacy-policy", label: "Privacy Policy" },
      { href: "/terms-of-service", label: "Terms of Service" },
      { href: "/cookie-policy", label: "Cookie Policy" },
      { href: "/security", label: "Security" },
      { href: "/compliance", label: "Compliance" },
    ]
  }
]

export default function SitemapPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="py-16 md:py-24 lg:py-32 border-b border-border">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <div className="max-w-3xl">
              <p className="text-sm font-mono text-muted-foreground mb-6 tracking-wider uppercase">
                Navigation
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] mb-6">
                Site
                <br />
                <span 
                  style={{
                    background: "linear-gradient(135deg, #ff006e 0%, #8b5cf6 33%, #203eec 66%, #00d4ff 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Map
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Explore all pages and services offered by Skord Labs, Pakistan's leading 
                software development company.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sitemapSections.map((section, index) => (
                <div key={index} className="p-6 border border-border rounded-2xl bg-card/50 backdrop-blur-sm">
                  <h2 className="text-xl font-semibold mb-6" style={{ color: "#203eec" }}>
                    {section.title}
                  </h2>
                  <ul className="space-y-3">
                    {section.links.map((link, i) => (
                      <li key={i}>
                        <Link 
                          href={link.href}
                          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
                        >
                          <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 border-t border-border bg-secondary/30">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Need Help Finding Something?</h2>
            <p className="text-muted-foreground mb-8">
              Can't find what you're looking for? Contact our team and we'll help you out.
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors"
              style={{ background: "#203eec", color: "white" }}
            >
              Contact Us
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <GradientBar />
    </>
  )
}
