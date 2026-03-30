"use client"

import { useState } from "react"
import { ChevronDown, ArrowRight } from "lucide-react"
import { SectionTitle } from "@/components/ui/section-title"
import Link from "next/link"

const services = [
  {
    title: "AI systems, bots & automations",
    href: "/services/ai-systems",
    items: [
      "AI assistants & support bots",
      "Workflow automations across tools",
      "Custom AI model integration",
      "AI business operations systems",
      "AI tools for internal teams",
    ],
  },
  {
    title: "AI social media marketing setup",
    href: "/services/ai-social-media-marketing",
    items: [
      "AI content planning and generation",
      "Brand voice prompt systems",
      "Creative automation workflows",
      "Multi-platform publishing setup",
      "Performance tracking and optimization",
    ],
  },
  {
    title: "Brand building, rebranding & launch",
    href: "/services/brand-building",
    items: [
      "Brand strategy and positioning",
      "Visual identity and messaging systems",
      "Rebranding and migration planning",
      "Go-to-market launch setup",
      "AI-assisted brand operations",
    ],
  },
  {
    title: "AI solutions",
    href: "/services/ai-solutions",
    items: [
      "LLM integration & fine-tuning",
      "Machine learning pipelines",
      "Natural language processing",
      "Computer vision systems",
      "Predictive analytics & forecasting",
    ],
  },
  {
    title: "Develop your MVP with us",
    href: "/services/mvp-development",
    items: [
      "Rapid prototyping & validation",
      "Product-market fit research",
      "Scalable architecture from day one",
      "User testing & iteration",
      "Go-to-market technical strategy",
    ],
  },
  {
    title: "Redesign your website",
    href: "/services/website-redesign",
    items: [
      "UX audit & behavioral analysis",
      "Modern design systems",
      "Performance optimization",
      "Conversion rate improvements",
      "Accessibility compliance",
    ],
  },
  {
    title: "Bring your vision to life",
    href: "/services/custom-development",
    items: [
      "Full-stack web applications",
      "Mobile app development",
      "Real-time systems & WebSockets",
      "Progressive web apps",
      "Cross-platform solutions",
    ],
  },
  {
    title: "Ecommerce solutions",
    href: "/services/ecommerce-solutions",
    items: [
      "Headless commerce architecture",
      "Payment gateway integration",
      "Inventory management systems",
      "Personalization engines",
      "Analytics & conversion tracking",
    ],
  },
  {
    title: "Custom software & management systems",
    href: "/services/management-systems",
    items: [
      "Internal tools & dashboards",
      "Workflow automation",
      "CRM & ERP systems",
      "Data management platforms",
      "Integration & API development",
    ],
  },
]

export function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="services" className="py-16 md:py-20 border-t border-border">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <p className="text-sm font-mono text-muted-foreground mb-6 tracking-wider uppercase">
            What we do
          </p>
          <SectionTitle className="text-3xl md:text-4xl lg:text-6xl font-semibold tracking-tight">
            Services
          </SectionTitle>
        </div>

        {/* Accordion Services */}
        <div className="space-y-4">
          {services.map((service, index) => {
            const isOpen = openIndex === index
            
            return (
              <div
                key={index}
                className="border border-border rounded-2xl overflow-hidden bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-foreground/20"
              >
                {/* Header */}
                <div className="flex items-center justify-between p-5 md:p-6 lg:p-8">
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="flex-1 flex items-center justify-between text-left group pr-4"
                  >
                    <h3 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold pr-4">
                      {service.title}
                    </h3>
                    <div 
                      className={`flex-shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      <ChevronDown 
                        className="w-6 h-6 text-muted-foreground group-hover:text-foreground transition-colors" 
                      />
                    </div>
                  </button>
                  
                  <Link
                    href={service.href}
                    className="flex-shrink-0 inline-flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 text-sm font-medium border border-border rounded-full hover:bg-secondary transition-all group"
                    style={{ color: "#203eec", borderColor: "#203eec" }}
                  >
                    <span className="hidden md:inline">Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                {/* Content */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-5 md:px-6 lg:px-8 pb-5 md:pb-6 lg:pb-8 pt-0">
                    <div className="border-t border-border pt-6">
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {service.items.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className="flex items-start gap-3 text-muted-foreground"
                          >
                            <span 
                              className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2"
                              style={{ backgroundColor: "#203eec" }}
                            />
                            <span className="text-sm md:text-base leading-relaxed">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
