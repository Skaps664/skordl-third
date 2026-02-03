"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { SectionTitle } from "@/components/ui/section-title"

const insights = [
  {
    id: 1,
    title: "Physics-Informed Neural Networks for Structural Design",
    excerpt: "Applying PINN methodology to structural weight prediction. Research on integrating domain knowledge with neural networks.",
    image: "/images/bg-1.png",
    date: "Jan 2025",
    readTime: "Research Paper",
  },
  {
    id: 2,
    title: "Scalable ML Integration in Production Systems",
    excerpt: "Lessons from deploying machine learning models at scale. Bridging the gap between research and production engineering.",
    image: "/images/bg-2.png",
    date: "Dec 2024",
    readTime: "Technical Deep-Dive",
  },
  {
    id: 3,
    title: "Backend Architecture for Data-Intensive Applications",
    excerpt: "Building systems that handle complex data pipelines. Design patterns and best practices for distributed data engineering.",
    image: "/images/bg-3.png",
    date: "Nov 2024",
    readTime: "Architecture Guide",
  },
]

export function Insights() {
  return (
    <section id="insights" className="py-16 md:py-20 border-border border-t">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12 md:mb-16">
          <SectionTitle className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
            Research & Insights
          </SectionTitle>
          <Link
            href="/blog"
            className="hidden md:inline-flex items-center gap-2 text-sm transition-colors"
            style={{ color: "#203eec" }}
          >
            View all insights
            <ArrowUpRight className="w-4 h-4" style={{ color: "#203eec" }} />
          </Link>
        </div>

        {/* Insights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {insights.map((insight) => (
            <Link key={insight.id} href="#" className="group block">
              <article className="h-full">
                {/* Image */}
                <div className="relative aspect-[3/2] overflow-hidden rounded-2xl bg-secondary mb-4">
                  <Image
                    src={insight.image || "/placeholder.svg"}
                    alt={insight.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Meta */}
                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                  <span>{insight.date}</span>
                  <span>•</span>
                  <span>{insight.readTime}</span>
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold group-hover:text-muted-foreground transition-colors">
                  {insight.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{insight.excerpt}</p>
              </article>
            </Link>
          ))}
        </div>

        {/* Mobile View All */}
        <div className="md:hidden mt-8 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium border rounded-full hover:bg-secondary transition-colors"
            style={{ color: "#203eec", borderColor: "#203eec" }}
          >
            View all insights
            <ArrowUpRight className="w-4 h-4" style={{ color: "#203eec" }} />
          </Link>
        </div>
      </div>
    </section>
  )
}
