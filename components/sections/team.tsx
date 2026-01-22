"use client"

import { SectionTitle } from "@/components/ui/section-title"
import Image from "next/image"
import { Linkedin } from "lucide-react"

const teamMembers = [
  {
    name: "Sudais Khan",
    role: "CEO & Founder",
    image: "/images/team-sudais-khan.jpg",
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
    name: "Azaz Khan",
    role: "UX/UI Designer",
    image: "/images/team-azaz-khan.jpg",
    linkedin: "https://www.linkedin.com/in/azaz-khan/",
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
    <section id="team" className="border-border ">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <SectionTitle className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-balance mb-12 md:mb-16">
          Meet Our Team
        </SectionTitle>

        <p className="text-muted-foreground leading-relaxed max-w-2xl mb-12">
          Our team brings together engineers, designers, and researchers with deep expertise across software development, machine learning, and applied research. Each member is selected for technical excellence and intellectual curiosity.
        </p>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-center text-center"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-square mb-4 rounded-2xl overflow-hidden bg-secondary">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
                {/* LinkedIn Hover Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300"
                    aria-label={`${member.name}'s LinkedIn profile`}
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                </div>
              </div>

              {/* Info */}
              <h3 className="font-semibold text-lg">{member.name}</h3>
              <p className="text-sm text-muted-foreground mt-1">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
