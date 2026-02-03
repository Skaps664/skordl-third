"use client"

import { SectionTitle } from "@/components/ui/section-title"
import { useEffect, useState } from "react"

const impactMetrics = [
  { value: "$2.4M", label: "Capital Raised", description: "By our clients post-launch" },
  { value: "1.2M+", label: "Active Users", description: "Across deployed platforms" },
  { value: "99.9%", label: "Uptime", description: "Production systems average" },
  { value: "40%", label: "Performance Gain", description: "Avg. improvement post-optimization" },
]

const capabilities = [
  "Distributed Systems",
  "Machine Learning",
  "Product Psychology",
  "API Architecture",
  "Real-time Data",
  "Cloud Infrastructure",
  "Design Systems",
  "Applied Research",
]

export function About() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section id="about" className="border-border border-t py-16 md:py-20 relative overflow-hidden">
      {/* Subtle animated background */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div 
          className="absolute w-[600px] h-[600px] rounded-full blur-3xl transition-all duration-700 ease-out"
          style={{
            background: "radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 70%)",
            left: `${mousePos.x * 0.015}%`,
            top: `${mousePos.y * 0.01}%`,
          }}
        />
      </div>

      <div className="max-w-[1280px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Content */}
          <div>
            <p className="text-sm font-mono text-muted-foreground mb-6 tracking-wider uppercase">
              Impact & Capabilities
            </p>
            
            <SectionTitle className="text-3xl md:text-4xl lg:text-6xl font-semibold tracking-tight leading-[1.1] mb-6 md:mb-8">
              Engineering that
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
                drives results
              </span>
            </SectionTitle>

            <div className="space-y-4 md:space-y-6">
              <p className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed">
                Skord Labs is a software research and development lab founded in 2024. We operate at the intersection of engineering, design, and applied research.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Our work has helped clients raise capital, scale to millions of users, and achieve measurable performance improvements. Every project is approached with scientific rigor and commercial accountability.
              </p>
            </div>

            {/* Capabilities Pills */}
            <div className="mt-10">
              <h3 className="text-xs font-mono text-muted-foreground mb-4 tracking-wider uppercase">
                Core Capabilities
              </h3>
              <div className="flex flex-wrap gap-2">
                {capabilities.map((skill, index) => (
                  <span
                    key={skill}
                    className="px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm font-medium border border-border rounded-full hover:bg-secondary/50 transition-all hover:border-foreground/20 cursor-default"
                    style={{
                      animationDelay: `${index * 50}ms`,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Impact Metrics */}
          <div className="space-y-6">
            {impactMetrics.map((metric, index) => (
              <div
                key={index}
                className="group relative p-6 md:p-8 border border-border rounded-2xl bg-card/50 backdrop-blur-sm hover:bg-card transition-all duration-300 hover:border-foreground/20"
              >
                {/* Subtle gradient accent */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: "linear-gradient(135deg, rgba(32, 62, 236, 0.02) 0%, transparent 50%)",
                  }}
                />

                <div className="relative z-10">
                  <div 
                    className="text-4xl md:text-5xl font-bold mb-2"
                    style={{
                      background: "linear-gradient(135deg, #203eec 0%, #8b5cf6 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {metric.value}
                  </div>
                  <div className="text-lg md:text-xl font-semibold mb-1">
                    {metric.label}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {metric.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
