"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowDown } from "lucide-react"
import { useEffect, useState } from "react"

export function Hero() {
  const titleText = "Software research & development laboratory"
  const words = titleText.split(" ")
  const [maskReveal, setMaskReveal] = useState(0)
  const [opacity, setOpacity] = useState(0)
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 768)
    }

    checkDesktop()
    window.addEventListener("resize", checkDesktop)

    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const maxScroll = 500
      const revealPercentage = Math.min(100, (scrollPosition / maxScroll) * 100)
      const calculatedOpacity = Math.min(1, scrollPosition / maxScroll)
      setMaskReveal(revealPercentage)
      setOpacity(calculatedOpacity)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", checkDesktop)
    }
  }, [])

  return (
    <section className="min-h-screen flex flex-col justify-center pt-20 relative overflow-hidden">
      <div className="absolute -right-32 md:-right-48 top-32 md:top-40 w-[500px] h-[500px] md:w-[750px] md:h-[750px] pointer-events-none animate-orb-rotate -z-10 scale-125">
        <Image src="/images/orb.png" alt="" width={750} height={750} className="w-full h-full" priority />
      </div>

      <div className="max-w-[1280px] mx-auto px-6 md:px-12 py-20 md:py-32">
        <div className="">
          <p className="text-muted-foreground mb-4 md:mb-6 text-sm md:text-lg font-normal">Skord Labs — Founded 2024</p>

          {/* Main Title with animated words */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[96px] font-semibold tracking-tight leading-[1.05] text-balance">
            {words.map((word, index) => (
              <span
                key={index}
                className={`hero-word my-0 py-1 md:py-2 font-mono font-normal text-4xl sm:text-5xl md:text-7xl ${word === "research" ? "ai-gradient-word" : ""}`}
                style={{
                  animationDelay: `${index * 0.1}s`,
                  marginRight: index < words.length - 1 ? "0.25em" : "0",
                  ...(word === "research"
                    ? {
                        background: "linear-gradient(135deg, #ff006e 0%, #8b5cf6 33%, #203eec 66%, #00d4ff 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        filter:
                          "drop-shadow(0 0 20px rgba(255, 0, 110, 0.3)) drop-shadow(0 0 30px rgba(139, 92, 246, 0.3)) drop-shadow(0 0 40px rgba(0, 212, 255, 0.2))",
                      }
                    : {}),
                }}
              >
                {word}
              </span>
            ))}
          </h1>

          <p className="mt-6 md:mt-8 max-w-xl leading-relaxed text-left text-base md:text-lg text-zinc-500 ml-0">
            We build production-grade software while conducting applied research at the intersection of engineering, design, and computer science. A lab where commercial delivery meets scientific rigor.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-start gap-3 md:gap-4 mt-8 md:mt-10">
            <Link
              href="#contact-form"
              className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 text-sm md:text-base font-medium text-white rounded-full transition-all relative overflow-hidden group"
              style={{
                background: "linear-gradient(135deg, #203eec 0%, #00d4ff 100%)",
                boxShadow: "0 4px 20px rgba(32, 62, 236, 0.3)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 8px 30px rgba(32, 62, 236, 0.5), 0 0 40px rgba(0, 212, 255, 0.3)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 4px 20px rgba(32, 62, 236, 0.3)"
              }}
            >
              Get in Touch
            </Link>
            <Link
              href="#works"
              className="inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 text-sm md:text-base font-medium transition-colors"
              style={{ color: "#203eec" }}
            >
              View Our Work
              <ArrowDown className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full mt-8">
        <Image
          src="./under-hero-2.webp"
          alt="Designer workspace"
          width={1200}
          height={800}
          className="w-full h-[500px] md:h-auto object-cover md:object-contain transition-all duration-100 ease-out"
          style={{
            opacity: opacity,
            clipPath: isDesktop ? `inset(${100 - maskReveal}% 0 0 0)` : "none",
          }}
          priority
        />
      </div>
    </section>
  )
}
