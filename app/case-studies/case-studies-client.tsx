"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"
import type { MouseEvent } from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { GradientBar } from "@/components/ui/gradient-bar"
import { fadeIn, staggerContainer } from "@/lib/animations"
import { caseStudies } from "@/lib/case-studies"

const openExternalProject = (event: MouseEvent<HTMLButtonElement>, url: string) => {
  // Prevent card-level navigation when opening the external project.
  event.preventDefault()
  event.stopPropagation()
  window.open(url, "_blank", "noopener,noreferrer")
}

export default function CaseStudiesPage() {
  const featuredStudy = caseStudies[0]
  const otherStudies = caseStudies.slice(1)

  return (
    <>
      <Header />
      <main>
        <section className="relative overflow-hidden pt-24 md:pt-32 pb-10 md:pb-16">
          <div className="absolute -right-24 md:-right-44 top-10 w-[340px] h-[340px] md:w-[560px] md:h-[560px] pointer-events-none -z-10 opacity-60">
            <Image src="/images/orb.png" alt="" width={560} height={560} className="w-full h-full animate-orb-rotate" priority />
          </div>

          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <p className="text-sm md:text-base text-muted-foreground mb-4">Skord Labs Work Archive</p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05]">
                Case studies built for growth, speed, and measurable outcomes
              </h1>
              <p className="mt-6 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed">
                Product engineering, AI systems, and automation projects where strategy meets shipped execution.
                Explore how we solve hard constraints, help teams find real talent, and deliver production-ready outcomes
                that keep growing after launch.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 mt-10 md:mt-12"
            >
              {[
                { label: "Projects shipped", value: "120+" },
                { label: "Avg delivery speed", value: "2.4x" },
                { label: "Industries covered", value: "11" },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={fadeIn}
                  className="rounded-2xl border border-border bg-card/70 backdrop-blur-sm p-5 md:p-6"
                >
                  <p className="text-2xl md:text-3xl font-semibold" style={{ color: "#203eec" }}>
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="pb-20 md:pb-28">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55 }}
              className="mb-10 md:mb-14"
            >
              <Link href={`/case-studies/${featuredStudy.slug}`} className="group block">
                <article className="overflow-hidden rounded-2xl md:rounded-3xl border border-border bg-card transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
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

                    <div className="p-6 md:p-8 lg:p-12 flex flex-col justify-center">
                      <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-3">Featured Case Study</p>
                      <h3 className="text-2xl md:text-3xl font-semibold group-hover:text-muted-foreground transition-colors mb-2">
                        {featuredStudy.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">{featuredStudy.category}</p>

                      <p className="text-muted-foreground leading-relaxed mb-6">{featuredStudy.description}</p>

                      <div className="mb-6">
                        <h4 className="text-sm font-semibold mb-3">Key Results:</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {featuredStudy.results.map((result, index) => (
                            <li key={index}>• {result}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex items-center gap-2 text-sm font-medium transition-colors group-hover:text-primary">
                        View case study
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
            >
              {otherStudies.map((study) => (
                <motion.div key={study.id} variants={fadeIn}>
                  <Link href={`/case-studies/${study.slug}`} className="group block h-full">
                    <article className="h-full overflow-hidden rounded-2xl md:rounded-3xl border border-border bg-card transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                      <div className="relative aspect-[2/1] overflow-hidden bg-secondary">
                        <Image
                          src={study.image || "/placeholder.svg"}
                          alt={study.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>

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

                        <div className="mb-4">
                          <h4 className="text-sm font-semibold mb-2">Key Results:</h4>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            {study.results.map((result, index) => (
                              <li key={index}>• {result}</li>
                            ))}
                          </ul>
                        </div>

                        {study.projectUrl ? (
                          <button
                            type="button"
                            onClick={(event) => openExternalProject(event, study.projectUrl!)}
                            className="inline-flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors mb-4"
                          >
                            Visit live project
                            <ArrowUpRight className="w-4 h-4" />
                          </button>
                        ) : null}

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
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="mt-14 md:mt-16 rounded-2xl md:rounded-3xl border border-border bg-card p-7 md:p-10"
            >
              <p className="text-sm uppercase tracking-[0.16em] text-muted-foreground">Need similar results?</p>
              <h2 className="text-2xl md:text-4xl font-semibold mt-3">Let&apos;s map your next product or AI launch.</h2>
              <p className="text-muted-foreground mt-3 max-w-2xl">
                We can move from idea to architecture to production in tight timelines without sacrificing quality.
              </p>
              <div className="mt-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-full text-white transition-all hover:shadow-xl"
                  style={{
                    background: "linear-gradient(135deg, #203eec 0%, #00d4ff 100%)",
                    boxShadow: "0 4px 20px rgba(32, 62, 236, 0.3)",
                  }}
                >
                  Start a project
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <GradientBar />
    </>
  )
}