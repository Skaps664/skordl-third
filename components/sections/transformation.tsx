"use client"

import { SectionTitle } from "@/components/ui/section-title"
import { useEffect, useState } from "react"

const principles = [
  {
    number: "01",
    title: "Cognitive Architecture",
    description: "Systems designed around how users think, not how we think they should. Research-backed interaction patterns that reduce cognitive load and increase task completion.",
  },
  {
    number: "02",
    title: "Infrastructure at Scale",
    description: "Distributed systems that handle growth without architectural rewrites. From prototype to production, we build for the scale you'll need, not just what you have.",
  },
  {
    number: "03",
    title: "Performance Engineering",
    description: "Sub-second response times aren't optional. Every query optimized, every asset compressed, every render cycle measured. Speed as a feature, not an afterthought.",
  },
  {
    number: "04",
    title: "Behavioral Systems",
    description: "Product mechanics informed by decision science. Understanding choice architecture, habit formation, and the psychology of retention before writing a single line of code.",
  },
]

export function Transformation() {
  const [scrollY, setScrollY] = useState(0)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    
    window.addEventListener("scroll", handleScroll)
    window.addEventListener("mousemove", handleMouseMove)
    
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <section className="py-16 md:py-20 relative overflow-hidden border-t border-border">
      {/* Sophisticated background visuals */}
      <div className="absolute inset-0 overflow-hidden opacity-40">
        <div 
          className="absolute w-[800px] h-[800px] rounded-full blur-3xl transition-all duration-1000 ease-out"
          style={{
            background: "radial-gradient(circle, rgba(32, 62, 236, 0.08) 0%, transparent 70%)",
            left: `${mousePos.x * 0.02}%`,
            top: `${20 + scrollY * 0.05}%`,
          }}
        />
        <div 
          className="absolute w-[600px] h-[600px] rounded-full blur-3xl transition-all duration-1000 ease-out"
          style={{
            background: "radial-gradient(circle, rgba(139, 92, 246, 0.06) 0%, transparent 70%)",
            right: `${mousePos.x * 0.015}%`,
            top: `${40 + scrollY * 0.03}%`,
          }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `linear-gradient(rgba(32, 62, 236, 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(32, 62, 236, 0.3) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />
      
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="max-w-4xl mb-20 md:mb-28">
          <p className="text-sm font-mono text-muted-foreground mb-6 tracking-wider uppercase">
            Our Approach
          </p>
          
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-semibold tracking-tight leading-[1.1] mb-6 md:mb-8">
            From concept to
            <br />
            <span 
              className="inline-block mt-2"
              style={{
                background: "linear-gradient(135deg, #ff006e 0%, #8b5cf6 33%, #203eec 66%, #00d4ff 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              production-grade systems
            </span>
          </h2>
          
          <p className="text-base md:text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-3xl">
            We don't build prototypes that need to be rewritten. We architect systems with behavioral science, 
            distributed computing, and product psychology baked into the foundation.
          </p>
        </div>

        {/* Principles Grid */}
        <div className="space-y-6 md:space-y-8">
          {principles.map((principle, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Connecting line for visual hierarchy */}
              {index < principles.length - 1 && (
                <div className="absolute left-12 top-full w-px h-6 md:h-8 bg-border opacity-30" />
              )}
              
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-12 items-start p-6 md:p-10 lg:p-12 border border-border rounded-2xl bg-card/50 backdrop-blur-sm hover:bg-card transition-all duration-500 hover:border-foreground/20">
                {/* Number */}
                <div className="flex-shrink-0">
                  <span 
                    className="text-4xl md:text-5xl lg:text-6xl font-bold opacity-20 group-hover:opacity-40 transition-opacity font-mono"
                    style={{
                      background: "linear-gradient(135deg, #203eec 0%, #8b5cf6 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {principle.number}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 pt-2">
                  <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold mb-3 md:mb-4 lg:mb-6 tracking-tight">
                    {principle.title}
                  </h3>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl">
                    {principle.description}
                  </p>
                </div>

                {/* Subtle gradient accent */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: "linear-gradient(135deg, rgba(32, 62, 236, 0.02) 0%, transparent 50%)",
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom statement */}
        <div className="mt-28 md:mt-36 max-w-4xl">
          <div className="p-12 md:p-16 lg:p-20 border-l-2 border-foreground/10">
            <p className="text-2xl md:text-3xl lg:text-4xl font-medium leading-relaxed text-foreground/90">
              Every technical decision is a product decision. 
              Every product decision is informed by research. 
              Every system we build is engineered to evolve.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
