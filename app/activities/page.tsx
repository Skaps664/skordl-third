"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Calendar, Users, Award } from "lucide-react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { SectionTitle } from "@/components/ui/section-title"
import { GradientBar } from "@/components/ui/gradient-bar"

const activities = [
  {
    id: 1,
    title: "AI Research Symposium 2025",
    type: "Conference",
    description: "Presented our latest research on physics-informed neural networks at the International AI Research Symposium.",
    image: "/images/bg-1.png",
    date: "Feb 2025",
    location: "San Francisco, CA",
    icon: Users,
  },
  {
    id: 2,
    title: "Open Source ML Framework Contribution",
    type: "Open Source",
    description: "Released our optimized ML pipeline framework on GitHub. Over 10k downloads and active community contributions.",
    image: "/images/bg-2.png",
    date: "Jan 2025",
    location: "Online",
    icon: Award,
  },
  {
    id: 3,
    title: "Tech Startup Mentorship Program",
    type: "Community",
    description: "Mentoring 5 early-stage AI startups through our technical advisory program. Helping them scale their ML infrastructure.",
    image: "/images/bg-3.png",
    date: "Dec 2024",
    location: "Remote",
    icon: Users,
  },
  {
    id: 4,
    title: "Industry Webinar: AI in Production",
    type: "Webinar",
    description: "Hosted a technical deep-dive on deploying AI models at scale. 500+ attendees from leading tech companies.",
    image: "/images/bg-1.png",
    date: "Nov 2024",
    location: "Virtual",
    icon: Calendar,
  },
  {
    id: 5,
    title: "Research Paper Publication",
    type: "Publication",
    description: "Published 'Scalable Integration of ML in Enterprise Systems' in the Journal of AI Engineering.",
    image: "/images/bg-2.png",
    date: "Oct 2024",
    location: "Academic Journal",
    icon: Award,
  },
  {
    id: 6,
    title: "Developer Meetup: AI Tools & Techniques",
    type: "Meetup",
    description: "Organized a hands-on workshop on modern AI development tools. Featured live coding sessions and Q&A.",
    image: "/images/bg-3.png",
    date: "Sep 2024",
    location: "New York, NY",
    icon: Users,
  },
]

export default function ActivitiesPage() {
  return (
    <>
      <Header />
      <main className="pt-20 md:pt-32">
        <section className="py-20 md:py-32">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            {/* Section Header */}
            <div className="text-center mb-12 md:mb-16">
              <SectionTitle className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
                Activities & Community
              </SectionTitle>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                Our contributions to the tech community, research publications, and industry events.
                Sharing knowledge and building connections in the AI and software engineering space.
              </p>
            </div>

            {/* Activities Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {activities.map((activity) => (
                <Link key={activity.id} href="#" className="group block">
                  <article className="h-full">
                    {/* Image */}
                    <div className="relative aspect-[3/2] overflow-hidden rounded-2xl bg-secondary mb-4">
                      <Image
                        src={activity.image || "/placeholder.svg"}
                        alt={activity.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {/* Icon Overlay */}
                      <div className="absolute top-4 left-4 p-2 bg-white/90 backdrop-blur-sm rounded-full">
                        <activity.icon className="w-4 h-4" style={{ color: "#203eec" }} />
                      </div>
                    </div>

                    {/* Type */}
                    <div className="text-xs font-medium text-primary mb-2">
                      {activity.type}
                    </div>

                    {/* Meta */}
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                      <span>{activity.date}</span>
                      <span>•</span>
                      <span>{activity.location}</span>
                    </div>

                    {/* Content */}
                    <h3 className="text-lg font-semibold group-hover:text-muted-foreground transition-colors">
                      {activity.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{activity.description}</p>

                    {/* Learn More */}
                    <div className="flex items-center gap-2 mt-4 text-sm font-medium transition-colors group-hover:text-primary">
                      Learn more
                      <ArrowUpRight className="w-4 h-4" />
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