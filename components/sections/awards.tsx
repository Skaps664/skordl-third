"use client"

import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { SectionTitle } from "@/components/ui/section-title"

const approaches = [
  { title: "Research-Driven Development", description: "Every project begins with scientific research and technical analysis", link: "#" },
  { title: "Engineering Excellence", description: "Production-grade code with scalable architecture and best practices", link: "#" },
  { title: "AI-First Mindset", description: "Leveraging cutting-edge AI and machine learning in every solution", link: "#" },
  { title: "Iterative Innovation", description: "Continuous improvement through testing, feedback, and technological advancement", link: "#" },
  { title: "Collaborative Partnership", description: "Working closely with clients as technical co-founders and advisors", link: "#" },
  { title: "Scientific Rigor", description: "Applying academic research standards to commercial software development", link: "#" },
]

export function Approach() {
  return (
    <section id="approach" className="py-20 md:py-32 border-border border-t-0 md:pt-0 md:pb-0">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <SectionTitle className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-12 md:mb-16">
          Our Approach
        </SectionTitle>

        <div className="flex flex-col gap-4">
          {approaches.map((approach, index) => (
            <Link
              key={index}
              href={approach.link}
              className="group flex items-center justify-between p-5 md:p-6 border border-border rounded-2xl hover:bg-secondary/50 transition-all hover:border-foreground/20"
            >
              <div className="flex items-center gap-6 flex-1">
                <div className="flex-1">
                  <h3 className="font-semibold text-xl md:text-2xl">{approach.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{approach.description}</p>
                </div>
              </div>
              <ArrowUpRight
                className="w-8 h-8 md:w-10 md:h-10 ml-6 text-muted-foreground transition-all group-hover:translate-x-1"
                strokeWidth={1}
                style={{ color: "#203eec" }}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
