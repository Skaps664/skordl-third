"use client"

import { SectionTitle } from "@/components/ui/section-title"
import Image from "next/image"
import { Linkedin, Users } from "lucide-react"

const teamMembers = [
  {
    name: "Sudais Khan",
    role: "CEO & Founder",
    image: "/images/sud.png",
    linkedin: "https://www.linkedin.com/in/sudais-khan/",
  },
  {
    name: "Aisha Iftikhar",
    role: "Lead Python Dev",
    image: "/images/team-aisha-iftikhar.jpg",
    linkedin: "https://www.linkedin.com/in/aisha-iftikhar/",
  },
  {
    name: "Omer Jauhar",
    role: "Backend Engineer",
    image: "/images/team-omer-jauhar.jpg",
    linkedin: "https://www.linkedin.com/in/omer-jauhar/",
  },
  {
    name: "Ammar Raza",
    role: "Lead Software Dev",
    image: "/images/team-ammar-raza.jpg",
    linkedin: "https://www.linkedin.com/in/ammar-raza/",
  },
  {
    name: "Mubeen Ali Shah",
    role: "Lead QA",
    image: "/images/team-mubeen-ali-shah.jpg",
    linkedin: "https://www.linkedin.com/in/mubeen-ali-shah/",
  },
]

export function Team() {
  return (
    <section id="team" className="border-border py-16 md:py-20 border-t">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <p className="text-sm font-mono text-muted-foreground mb-6 tracking-wider uppercase">
            The team
          </p>
          <SectionTitle className="text-3xl md:text-4xl lg:text-6xl font-semibold tracking-tight mb-6">
            Meet Our Team
          </SectionTitle>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-3xl">
            Engineers, designers, and researchers with deep expertise across software development, machine learning, and applied research.
          </p>
        </div>

        {/* Team Grid - Single Row */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 mb-20">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-center text-center"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-square mb-3 rounded-xl overflow-hidden bg-secondary border border-border">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                />
                {/* LinkedIn Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-white rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300"
                    aria-label={`${member.name}'s LinkedIn profile`}
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Info */}
              <h3 className="font-semibold text-sm md:text-base">{member.name}</h3>
              <p className="text-xs text-muted-foreground mt-0.5">{member.role}</p>
            </div>
          ))}

          {/* More Team Members Card */}
          <div className="group relative flex flex-col items-center justify-center text-center">
            <div className="relative w-full aspect-square mb-3 rounded-xl overflow-hidden bg-secondary/50 border border-border border-dashed flex flex-col items-center justify-center hover:bg-secondary transition-all duration-300">
              <Users className="w-8 h-8 md:w-10 md:h-10 mb-2 text-muted-foreground group-hover:text-foreground transition-colors" />
              <span className="text-xl md:text-2xl font-bold">10+</span>
              <span className="text-xs text-muted-foreground mt-1 px-2">more team members</span>
            </div>
          </div>
        </div>

        {/* Founder's Note */}
        <div className="relative mt-12 md:mt-16 lg:mt-24 p-6 md:p-10 lg:p-16 border-l-2 border-foreground/10">
          <div className="max-w-4xl">
            <p className="text-xs font-mono text-muted-foreground mb-4 tracking-wider uppercase">
              Founder's Note
            </p>
            <blockquote className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium leading-relaxed text-foreground/90 mb-6">
              "The best way to predict the future is to invent it. We're building the tools and systems that will define the next generation of digital experiences."
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-secondary border border-border">
                <Image
                  src="/images/team-sudais-khan.jpg"
                  alt="Sudais Khan"
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-semibold">Sudais Khan</p>
                <p className="text-sm text-muted-foreground">CEO & Founder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
