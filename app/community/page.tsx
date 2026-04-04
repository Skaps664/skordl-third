export const metadata = {
  title: "Community | Skord Labs - Join Pakistan's Top Software Developer Community",
  description: "Join the Skord Labs developer community. Connect with developers, contribute to projects, and learn from Pakistan's leading software company.",
  keywords: ["Skord Labs community", "developer community Pakistan", "software development community", "tech community"],
}

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { GradientBar } from "@/components/ui/gradient-bar"
import { Github, MessageSquare, Users, Calendar, Coffee, Sparkles } from "lucide-react"
import Link from "next/link"

const communityChannels = [
  {
    icon: Github,
    title: "GitHub Discussions",
    description: "Ask questions, share ideas, and collaborate on open-source projects.",
    link: "#",
    members: "2.5K+ developers"
  },
  {
    icon: MessageSquare,
    title: "Discord Server",
    description: "Real-time chat with developers, technical support, and community events.",
    link: "#",
    members: "5K+ members"
  },
  {
    icon: Users,
    title: "Developer Forums",
    description: "Technical discussions, code reviews, and architecture deep-dives.",
    link: "#",
    members: "8K+ posts"
  }
]

const upcomingEvents = [
  {
    title: "Technical Workshop: Microservices Architecture",
    date: "March 15, 2026",
    type: "Workshop",
    format: "Online"
  },
  {
    title: "Open Source Hackathon",
    date: "April 2-4, 2026",
    type: "Hackathon",
    format: "Hybrid"
  },
  {
    title: "Monthly Developer Meetup",
    date: "Every last Friday",
    type: "Meetup",
    format: "In-person (Peshawar)"
  }
]

const contributions = [
  "Open-source project contributions",
  "Technical blog posts and tutorials",
  "Community support and mentorship",
  "Bug reports and feature requests",
  "Documentation improvements",
  "Code reviews and feedback"
]

export default function CommunityPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="py-16 md:py-24 lg:py-32 border-b border-border">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <div className="max-w-3xl">
              <p className="text-sm font-mono text-muted-foreground mb-6 tracking-wider uppercase">
                Resources / Community
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] mb-6">
                Developer
                <br />
                <span 
                  style={{
                    background: "linear-gradient(135deg, #ff006e 0%, #8b5cf6 33%, #203eec 66%, #00d4ff 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Community
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Join our global community of developers, engineers, and technical innovators. 
                Collaborate, learn, and build together while discovering real talent and growing through
                mentorship, guidance, and shared execution.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 border-b border-border">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-12">Community Channels</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {communityChannels.map((channel, index) => (
                <Link
                  key={index}
                  href={channel.link}
                  className="group p-8 border border-border rounded-2xl hover:border-foreground/20 transition-all duration-300 bg-card/50 backdrop-blur-sm"
                >
                  <div className="p-4 rounded-xl bg-primary/10 inline-flex mb-6">
                    <channel.icon className="w-8 h-8" style={{ color: "#203eec" }} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {channel.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {channel.description}
                  </p>
                  <p className="text-xs font-medium" style={{ color: "#203eec" }}>
                    {channel.members}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 border-b border-border bg-secondary/30">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Calendar className="w-6 h-6" style={{ color: "#203eec" }} />
                  <h2 className="text-2xl md:text-3xl font-semibold">Upcoming Events</h2>
                </div>
                <div className="space-y-4">
                  {upcomingEvents.map((event, index) => (
                    <div key={index} className="p-6 border border-border rounded-xl bg-card">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-semibold">{event.title}</h3>
                        <span className="text-xs px-2 py-1 rounded-full bg-primary/10" style={{ color: "#203eec" }}>
                          {event.type}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-1">{event.date}</p>
                      <p className="text-xs text-muted-foreground">{event.format}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Sparkles className="w-6 h-6" style={{ color: "#203eec" }} />
                  <h2 className="text-2xl md:text-3xl font-semibold">Ways to Contribute</h2>
                </div>
                <div className="space-y-3">
                  {contributions.map((item, index) => (
                    <div key={index} className="flex items-center gap-3 p-4 border border-border rounded-lg bg-card">
                      <Coffee className="w-4 h-4 shrink-0" style={{ color: "#203eec" }} />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                Join the community today
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Connect with developers worldwide, share knowledge, and collaborate on innovative projects.
              </p>
              <Link
                href="#"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-white rounded-full transition-all hover:shadow-lg"
                style={{ 
                  background: "linear-gradient(135deg, #203eec 0%, #00d4ff 100%)",
                  boxShadow: "0 4px 20px rgba(32, 62, 236, 0.3)"
                }}
              >
                Join Discord Server
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <GradientBar />
    </>
  )
}
