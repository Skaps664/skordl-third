"use client"

import { SectionTitle } from "@/components/ui/section-title"

const offerings = [
  {
    title: "Research-Grade Engineering",
    description: "We don't just build software—we advance technical knowledge. Every project includes research, documentation, and scientific rigor.",
  },
  {
    title: "Applied ML Integration",
    description: "Native ML capabilities in production systems. Our team understands both the theory and practical deployment challenges.",
  },
  {
    title: "Long-Term Partnership",
    description: "We position ourselves as your technical partner, not a vendor. We invest in understanding your domain and long-term vision.",
  },
  {
    title: "Publication-Oriented Mindset",
    description: "Research findings are documented and shared. Academic credibility paired with commercial delivery.",
  },
  {
    title: "Full-Stack Ownership",
    description: "From design to deployment. We understand the entire system and how all pieces work together for maximum impact.",
  },
  {
    title: "Technical Excellence",
    description: "No shortcuts, no hype. Clean code, scalable architecture, and solutions built for longevity and performance.",
  },
]

export function UniqueOfferings() {
  return (
    <section id="unique-offerings" className="py-20 md:py-32 border-border border-t-0">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <SectionTitle className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-12 md:mb-16">
          What We Offer Uniquely
        </SectionTitle>

        {/* Offerings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {offerings.map((offering, index) => (
            <div
              key={index}
              className="group flex flex-col p-6 md:p-8 border border-border rounded-2xl hover:bg-secondary/50 transition-all hover:border-foreground/20"
            >
              <h3 className="font-semibold text-lg md:text-xl">{offering.title}</h3>
              <p className="text-sm text-muted-foreground mt-4 leading-relaxed">{offering.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
