"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { SectionTitle } from "@/components/ui/section-title"

const services = [
  {
    title: "Software Development",
    description: "Custom solutions built on modern architectures, designed for scalability, performance, and maintainability. From MVPs to enterprise systems.",
  },
  {
    title: "Web & Mobile Apps",
    description: "Full-stack web applications and mobile platforms that combine intuitive design with robust backend infrastructure.",
  },
  {
    title: "Backend & Cloud Systems",
    description: "Scalable backend architectures, API design, cloud infrastructure, and DevOps solutions using modern technologies.",
  },
  {
    title: "UI/UX Design",
    description: "User-centered design that balances aesthetics with functionality. Design systems, prototypes, and production-ready interfaces.",
  },
  {
    title: "Machine Learning Solutions",
    description: "Applied ML models for classification, prediction, and optimization. Integration of AI capabilities into production systems.",
  },
  {
    title: "Data Engineering & Analytics",
    description: "Data pipelines, warehousing, and analytics infrastructure. Transform raw data into actionable insights.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 md:py-32 border-border border-t-0 md:pt-0 md:pb-0">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <SectionTitle className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-12 md:mb-16">
          Services
        </SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group flex flex-col p-6 md:p-8 border border-border rounded-2xl hover:bg-secondary/50 transition-all hover:border-foreground/20"
            >
              <h3 className="font-semibold text-xl md:text-2xl">{service.title}</h3>
              <p className="text-sm text-muted-foreground mt-4 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
