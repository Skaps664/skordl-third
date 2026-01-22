"use client"

const skills = [
  "Web Development",
  "Mobile Apps",
  "Backend Systems",
  "Machine Learning",
  "UI/UX Design",
  "Cloud Architecture",
  "Data Engineering",
  "Research & Development",
]

const stats = [
  { value: "2024", label: "Founded" },
  { value: "15+", label: "Team Members" },
  { value: "10+", label: "Active Projects" },
]

import { SectionTitle } from "@/components/ui/section-title"

export function About() {
  return (
    <section id="about" className="border-border border-t-0 md:py-10  md:pt-32">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Content */}
          <div>
            <SectionTitle className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-balance">
              Engineering-Driven Research Lab
            </SectionTitle>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Skord Labs is a software research and development lab founded in 2024. We operate at the intersection of engineering, design, and applied research. Our team combines deep technical expertise with a commitment to scientific rigor.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We deliver production-grade software solutions while actively conducting research in computer science and machine learning. Every project is approached as both a commercial engagement and an opportunity to advance technical knowledge.
            </p>
          </div>

          {/* Right Content */}
          <div>
            {/* Skills */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Core Capabilities</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 text-sm font-medium border border-border rounded-full hover:bg-secondary transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-12">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center p-4 bg-secondary rounded-2xl">
                  <div className="text-2xl md:text-3xl font-semibold">{stat.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
