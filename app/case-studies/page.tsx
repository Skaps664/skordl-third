"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { SectionTitle } from "@/components/ui/section-title"
import { GradientBar } from "@/components/ui/gradient-bar"

const caseStudies = [
  {
    id: 1,
    title: "AI Onboarding Assistant",
    slug: "ai-onboarding-assistant",
    category: "AI Product Development",
    description: "Building an intelligent onboarding flow powered by GPT-4 and natural conversations. Reduced user drop-off by 40% and improved completion rates.",
    image: "/images/work-onboarding.png",
    tags: ["AI", "v0", "Next.js", "OpenAI"],
    results: ["40% reduction in drop-off",  "2x faster onboarding"],
  },
  {
    id: 2,
    title: "AI Fashion Curator",
    slug: "ai-fashion-curator",
    category: "E-commerce AI",
    description: "Personalized style recommendations using computer vision and preference learning. Increased conversion rates and customer satisfaction.",
    image: "/images/work-fashion.png",
    tags: ["AI", "Machine Learning", "Midjourney"],
    results: ["35% increase in sales", "4.8/5 user rating", "60% repeat purchases"],
  },
  {
    id: 3,
    title: "Smart Task Manager",
    slug: "smart-task-manager",
    category: "Productivity AI",
    description: "AI-powered task prioritization and scheduling with natural language processing. Helped teams manage workloads more efficiently.",
    image: "/images/work-tasks.png",
    tags: ["AI", "Claude", "Vibe Coding"],
    results: ["50% time savings", "90% task completion", "Improved team productivity"],
  },
  {
    id: 4,
    title: "Crypto AI Analytics",
    slug: "crypto-ai-analytics",
    category: "FinTech AI",
    description: "Real-time market insights and predictions powered by advanced AI models. Provided actionable trading signals and market analysis.",
    image: "/images/work-crypto.png",
    tags: ["AI", "Data Viz", "GPT-4"],
    results: ["25% better returns", "Real-time insights", "Risk reduction"],
  },
  {
    id: 5,
    title: "Healthcare Data Platform",
    slug: "healthcare-data-platform",
    category: "Data Engineering",
    description: "Scalable platform for processing and analyzing medical data. Ensured HIPAA compliance while providing real-time analytics.",
    image: "/images/bg-1.png",
    tags: ["Data Engineering", "HIPAA", "Real-time"],
    results: ["99.9% uptime", "HIPAA compliant", "50TB+ data processed"],
  },
  {
    id: 6,
    title: "Manufacturing Quality Control",
    slug: "manufacturing-quality-control",
    category: "Computer Vision",
    description: "AI-powered defect detection system for manufacturing lines. Improved quality control and reduced waste significantly.",
    image: "/images/bg-2.png",
    tags: ["Computer Vision", "Manufacturing", "Quality Control"],
    results: ["90% defect detection", "30% waste reduction", "ROI in 6 months"],
  },
]

export default function CaseStudiesPage() {
  const featuredStudy = caseStudies[0]
  const otherStudies = caseStudies.slice(1)

  return (
    <>
      <Header />
      <main className="">
        <section className="py-20 md:py-32">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            {/* Section Header */}
            <div className="text-center mb-12 md:mb-16">
              <SectionTitle className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
                Case Studies
              </SectionTitle>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                Real-world projects where we've applied cutting-edge technology to solve complex problems.
                Detailed breakdowns of our process, challenges, and results.
              </p>
            </div>

            {/* Featured Case Study */}
            <div className="mb-12 md:mb-16">
              <Link href={`/case-studies/${featuredStudy.slug}`} className="group block">
                <article className="overflow-hidden rounded-2xl md:rounded-3xl border border-border bg-card transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    {/* Image */}
                    <div className="relative aspect-[4/3] lg:aspect-[3/2] overflow-hidden bg-secondary">
                      <Image
                        src={featuredStudy.image || "/placeholder.svg"}
                        alt={featuredStudy.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                        Featured
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 md:p-8 lg:p-12 flex flex-col justify-center">
                      <h3 className="text-2xl md:text-3xl font-semibold group-hover:text-muted-foreground transition-colors mb-2">
                        {featuredStudy.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">{featuredStudy.category}</p>

                      <p className="text-muted-foreground leading-relaxed mb-6">{featuredStudy.description}</p>

                      {/* Results */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold mb-3">Key Results:</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {featuredStudy.results.map((result, index) => (
                            <li key={index}>• {result}</li>
                          ))}
                        </ul>
                      </div>

                      {/* Tags */}
                      {/* <div className="flex flex-wrap gap-2 mb-6">
                        {featuredStudy.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div> */}

                      <div className="flex items-center gap-2 text-sm font-medium transition-colors group-hover:text-primary">
                        View case study
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            </div>

            {/* Case Studies Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {otherStudies.map((study) => (
                <Link key={study.id} href={`/case-studies/${study.slug}`} className="group block">
                  <article className="h-full overflow-hidden rounded-2xl md:rounded-3xl border border-border bg-card transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    {/* Image */}
                    <div className="relative aspect-[2/1] overflow-hidden bg-secondary">
                      <Image
                        src={study.image || "/placeholder.svg"}
                        alt={study.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6 md:p-8">
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div>
                          <h3 className="text-lg md:text-xl font-semibold">{study.title}</h3>
                          <p className="text-sm text-muted-foreground mt-1">{study.category}</p>
                        </div>
                        <ArrowUpRight
                          className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-1"
                          style={{ color: "#203eec" }}
                        />
                      </div>

                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">{study.description}</p>

                      {/* Results */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold mb-2">Key Results:</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {study.results.map((result, index) => (
                            <li key={index}>• {result}</li>
                          ))}
                        </ul>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {study.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <GradientBar />
    </>
  )
}