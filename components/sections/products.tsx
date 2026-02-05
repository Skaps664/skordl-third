"use client"

import { SectionTitle } from "@/components/ui/section-title"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"

const products = [
  {
    id: 1,
    name: "EazStart",
    tagline: "Startup Management Platform",
    description: "Track, manage, and streamline your startup operations from idea validation to scaling.",
    link: "/products/eazstart",
    status: "Live",
    image: "https://placehold.co/800x600/ff006e/ffffff/png?text=EazStart",
    tags: ["SaaS", "Startup"],
  },
  {
    id: 2,
    name: "FlowBoard",
    tagline: "Collaborative Kanban",
    description: "Organize projects, manage tasks, and collaborate with your team in real-time.",
    link: "/products/flowboard",
    status: "Live",
    image: "https://placehold.co/800x600/203eec/ffffff/png?text=FlowBoard",
    tags: ["Productivity", "Collaboration"],
  },
  {
    id: 3,
    name: "NewsHub",
    tagline: "Modern News Platform",
    description: "Curated news and insights delivered with a beautiful, modern interface.",
    link: "/products/newshub",
    status: "Live",
    image: "https://placehold.co/800x600/8b5cf6/ffffff/png?text=NewsHub",
    tags: ["Media", "Content"],
  },
  {
    id: 4,
    name: "cureOS",
    tagline: "Android Essentials",
    description: "Beautiful, privacy-focused alternatives for Gallery, Dialer, and Contacts.",
    link: "/products/cureos",
    status: "Beta",
    image: "https://placehold.co/800x600/00d4ff/ffffff/png?text=cureOS",
    tags: ["Android", "Privacy"],
  },
  {
    id: 5,
    name: "BillingPro",
    tagline: "Smart Invoicing",
    description: "Professional invoices and GST compliance for Pakistani businesses.",
    link: "/products/billingpro",
    status: "Live",
    image: "https://placehold.co/800x600/fbbf24/ffffff/png?text=BillingPro",
    tags: ["Business", "Finance"],
  },
]

export function Products() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section id="products" className="py-16 md:py-20 border-t border-border relative overflow-hidden">
      {/* Subtle animated background */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div 
          className="absolute w-[600px] h-[600px] rounded-full blur-3xl transition-all duration-700 ease-out"
          style={{
            background: "radial-gradient(circle, rgba(32, 62, 236, 0.08) 0%, transparent 70%)",
            left: `${mousePos.x * 0.015}%`,
            top: `${mousePos.y * 0.01}%`,
          }}
        />
      </div>

      <div className="max-w-[1280px] mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="mb-16 md:mb-20">
          <p className="text-sm font-mono text-muted-foreground mb-6 tracking-wider uppercase">
            Our Products
          </p>
          <SectionTitle className="text-3xl md:text-4xl lg:text-6xl font-semibold tracking-tight leading-[1.1] mb-8">
            Built by us,
            <br />
            <span 
              className="inline-block mt-1"
              style={{
                background: "linear-gradient(135deg, #ff006e 0%, #8b5cf6 33%, #203eec 66%, #00d4ff 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              ready for you
            </span>
          </SectionTitle>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-3xl">
            Real products we've designed, developed, and deployed. Each one solves a specific problem and is available for you to use today.
          </p>
        </div>

        {/* Products List */}
        <div className="space-y-6 md:space-y-8">
          {products.map((product, index) => (
            <Link
              key={product.id}
              href={product.link}
              className="group block"
            >
              <div className="relative p-6 md:p-8 lg:p-10 border border-border rounded-2xl bg-card/50 backdrop-blur-sm hover:bg-card transition-all duration-500 hover:border-foreground/20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                  {/* Left: Content */}
                  <div className="flex flex-col justify-center order-2 lg:order-1">
                    {/* Status Badge */}
                    <div className="mb-4">
                      <span 
                        className={`text-xs font-medium px-3 py-1 rounded-full ${
                          product.status === 'Live' 
                            ? 'bg-green-500/10 text-green-600 dark:text-green-400' 
                            : 'bg-yellow-500/10 text-yellow-600 dark:text-yellow-400'
                        }`}
                      >
                        {product.status}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-3 md:mb-4 tracking-tight group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>

                    {/* Tagline */}
                    <p className="text-lg md:text-xl font-medium text-muted-foreground mb-4 md:mb-6">
                      {product.tagline}
                    </p>

                    {/* Description */}
                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
                      {product.description}
                    </p>

                    {/* Tags & Link */}
                    <div className="flex flex-wrap items-center gap-3">
                      {product.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm font-medium border border-border rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                      <div className="flex items-center gap-2 text-sm md:text-base font-medium ml-auto" style={{ color: "#203eec" }}>
                        Visit Product
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </div>
                    </div>
                  </div>

                  {/* Right: Image */}
                  <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full min-h-[300px] rounded-xl overflow-hidden bg-secondary order-1 lg:order-2">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* Subtle gradient accent */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: "linear-gradient(135deg, rgba(32, 62, 236, 0.02) 0%, transparent 50%)",
                  }}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
