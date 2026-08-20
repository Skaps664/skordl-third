import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowUpRight, Linkedin, Users } from "lucide-react"

const ACCENT = "#203eec"
const ACCENT_GRADIENT = "linear-gradient(135deg, #203eec 0%, #00d4ff 100%)"

type Leader = {
  name: string
  title: string
  department: string
  image: string
  linkedin?: string
  bio: string
  focus: string[]
}

const founder: Leader = {
  name: "Sudais Khan",
  title: "Founder & Chief Executive Officer",
  department: "Executive Office",
  image: "/images/new-pp.png",
  linkedin: "https://www.linkedin.com/in/sudais-khan/",
  bio: "Sudais founded Skord Labs to close the gap between strategy decks and shipped software. He sets company direction, owns solution architecture on complex engagements, and stays involved in every client partnership through to launch.",
  focus: ["Company strategy", "Solution architecture", "Backend systems", "Client partnerships"],
}

const leadership: Leader[] = [
  {
    name: "Aisha Iftikhar",
    title: "Vice President, Engineering",
    department: "Engineering",
    image: "/images/team-aisha-iftikhar.jpg",
    linkedin: "https://www.linkedin.com/in/aisha-iftikhar/",
    bio: "Aisha runs the engineering organisation, setting the architecture standards, review practices, and delivery cadence that every client build runs on.",
    focus: ["Platform architecture", "Python and backend systems", "Data pipelines", "Engineering standards"],
  },
  {
    name: "Omer Jauhar",
    title: "Head of Artificial Intelligence",
    department: "AI & Data Science",
    image: "/images/om.jpeg",
    linkedin: "https://www.linkedin.com/in/omer-jauhar/",
    bio: "Omer leads our AI practice, from applied research and model selection through evaluation harnesses and the guardrails that make AI safe to put in front of real users.",
    focus: ["Machine learning systems", "Model evaluation", "Applied research", "AI product delivery"],
  },
  {
    name: "Mubeen Ali Shah",
    title: "Head of Design & Brand Experience",
    department: "Product & Design",
    image: "/images/mubeen-pp.png",
    linkedin: "https://www.linkedin.com/in/mubeen-ali-shah/",
    bio: "Mubeen owns how our work looks and feels, running product design and brand across every engagement and maintaining the design systems our engineers build against.",
    focus: ["Product design", "Design systems", "Brand identity", "Front-end experience"],
  },
  {
    name: "Ammar Raza",
    title: "Head of Quality Engineering",
    department: "Quality & Reliability",
    image: "/images/team-ammar-raza.jpg",
    linkedin: "https://www.linkedin.com/in/ammar-raza/",
    bio: "Ammar is accountable for release readiness. His team owns test automation, performance verification, and the production reliability standards we hold every launch to.",
    focus: ["Test automation", "Release readiness", "Performance testing", "Production reliability"],
  },
  {
    name: "Hamza Khan",
    title: "Head of Marketing & Growth",
    department: "Marketing & Growth",
    image: "/hamza-pp.PNG",
    bio: "Hamza owns everything marketing: positioning, campaigns, content, and demand generation - for our own products and for clients who need the launch to land as hard as the build.",
    focus: ["Go-to-market strategy", "Campaigns and paid media", "Content and social", "Growth analytics"],
  },
]

const practices = [
  {
    number: "01",
    name: "Engineering",
    lead: "Aisha Iftikhar",
    description:
      "Full-stack web, mobile, and platform engineering. Owns architecture decisions, code review standards, and the shared component libraries that keep delivery fast across projects.",
    disciplines: ["Full-stack", "Backend", "Mobile", "DevOps", "Integrations"],
  },
  {
    number: "02",
    name: "AI & Data Science",
    lead: "Omer Jauhar",
    description:
      "Applied machine learning, LLM systems, and data engineering. Owns model selection, evaluation, retrieval architecture, and the guardrails around every AI feature we ship.",
    disciplines: ["Machine learning", "LLM systems", "Data engineering", "Evaluation"],
  },
  {
    number: "03",
    name: "Product & Design",
    lead: "Mubeen Ali Shah",
    description:
      "Product strategy, interface design, and brand. Owns discovery workshops, design systems, and the conversion thinking behind every interface we put in front of users.",
    disciplines: ["Product design", "UX research", "Design systems", "Brand"],
  },
  {
    number: "04",
    name: "Quality & Reliability",
    lead: "Ammar Raza",
    description:
      "Test automation, performance engineering, and production monitoring. Nothing reaches a client's users without passing this practice's release criteria.",
    disciplines: ["QA automation", "Performance", "Security review", "Monitoring"],
  },
  {
    number: "05",
    name: "Delivery & Client Operations",
    lead: "Executive Office",
    description:
      "Engagement management, sprint governance, and reporting. Every client has a named point of contact and a visible plan, and we report progress on a fixed cadence.",
    disciplines: ["Engagement management", "Sprint governance", "Reporting", "Support"],
  },
  {
    number: "06",
    name: "Marketing & Growth",
    lead: "Hamza Khan",
    description:
      "Positioning, campaigns, content systems, and go-to-market execution for our own products and for clients who need the launch as much as the build.",
    disciplines: ["Go-to-market", "Campaigns", "Content systems", "Paid media", "Analytics"],
  },
]

const orgStats = [
  { value: "15+", label: "Specialists across the firm" },
  { value: "6", label: "Practice areas" },
  { value: "120+", label: "Projects delivered" },
  { value: "11", label: "Industries served" },
]

const principles = [
  {
    title: "Senior people on the actual work",
    description:
      "The people you meet in the first call are the people who build it. We do not staff engagements with a senior pitch team and a junior delivery team.",
  },
  {
    title: "Two engineers deep on every system",
    description:
      "No project depends on a single person's memory. Architecture is documented and code is reviewed, so knowledge survives holidays and handovers.",
  },
  {
    title: "Practice leads are accountable, not decorative",
    description:
      "Each practice lead signs off on the work leaving their discipline. Quality, security, and design standards have a name attached to them.",
  },
  {
    title: "Clients own everything we build",
    description:
      "Code, infrastructure, design files, and documentation sit in your accounts from day one. Our job is to make ourselves optional, not necessary.",
  },
]

const disciplines = [
  {
    group: "Engineering",
    roles: [
      "Full-stack engineers",
      "Backend engineers",
      "Frontend engineers",
      "Mobile developers",
      "DevOps engineers",
      "Cloud architects",
    ],
  },
  {
    group: "AI & Data",
    roles: [
      "ML engineers",
      "AI engineers",
      "Data engineers",
      "Data analysts",
      "Computer vision engineers",
    ],
  },
  {
    group: "Web3 & Blockchain",
    roles: [
      "Blockchain developers",
      "Smart contract engineers",
      "Solidity auditors",
      "Web3 integration specialists",
    ],
  },
  {
    group: "Security & Quality",
    roles: [
      "Penetration testers",
      "Security analysts",
      "QA automation engineers",
      "Performance engineers",
      "Compliance specialists",
    ],
  },
  {
    group: "Product & Design",
    roles: [
      "Product designers",
      "UX researchers",
      "Brand designers",
      "Motion designers",
      "Technical writers",
    ],
  },
  {
    group: "Business & Growth",
    roles: [
      "Business developers",
      "Account managers",
      "Project managers",
      "Growth specialists",
      "Performance marketers",
      "Content strategists",
    ],
  },
]

function LeaderPhoto({ leader, className = "" }: { leader: Leader; className?: string }) {
  return (
    <div className={`relative overflow-hidden bg-secondary border border-border ${className}`}>
      <Image
        src={leader.image || "/placeholder.svg"}
        alt={leader.name}
        fill
        className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
      />
    </div>
  )
}

export function Team() {
  return (
    <>
      {/* Organisation stats */}
      <section className="py-16 md:py-24 border-b border-border">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {orgStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div
                  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2"
                  style={{
                    background: ACCENT_GRADIENT,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {stat.value}
                </div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section id="leadership" className="py-16 md:py-24 lg:py-32 border-b border-border">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-12 md:mb-16">
            <p className="text-sm font-mono text-muted-foreground mb-6 tracking-wider uppercase">
              Leadership
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6">
              The people accountable for the work
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A founder-led executive office with a named lead accountable for each discipline. Every engagement is
              signed off by the leaders on this page.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {[founder, ...leadership].map((leader) => (
              <article
                key={leader.name}
                className="group rounded-2xl border border-border bg-card overflow-hidden hover:border-foreground/20 transition-all duration-300"
              >
                <div className="grid grid-cols-[120px_minmax(0,1fr)] sm:grid-cols-[160px_minmax(0,1fr)]">
                  <LeaderPhoto leader={leader} className="aspect-[3/4] border-0 border-r" />

                  <div className="p-5 sm:p-6 flex flex-col">
                    <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-3">
                      {leader.department}
                    </p>
                    <h3 className="text-lg sm:text-xl font-semibold">{leader.name}</h3>
                    <p className="text-sm font-medium mb-3" style={{ color: ACCENT }}>
                      {leader.title}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{leader.bio}</p>

                    <div className="flex flex-wrap gap-2 mb-4 mt-auto">
                      {leader.focus.map((item) => (
                        <span key={item} className="px-2.5 py-1 text-xs bg-secondary rounded-full">
                          {item}
                        </span>
                      ))}
                    </div>

                    {leader.linkedin ? (
                      <a
                        href={leader.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors self-start"
                        aria-label={`${leader.name} on LinkedIn`}
                      >
                        <Linkedin className="w-4 h-4" />
                        LinkedIn
                      </a>
                    ) : null}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Practice areas */}
      <section className="py-16 md:py-24 lg:py-32 border-b border-border">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-12 md:mb-16">
            <p className="text-sm font-mono text-muted-foreground mb-6 tracking-wider uppercase">
              How we are organised
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6">
              Six practices, one delivery team
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We staff engagements from practices rather than assigning whoever is free. You get the specialists your
              project needs, coordinated by a single delivery lead.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {practices.map((practice) => (
              <div
                key={practice.name}
                className="p-8 border border-border rounded-2xl bg-card/50 backdrop-blur-sm hover:border-foreground/20 transition-all"
              >
                <p className="text-sm font-mono text-muted-foreground mb-4">{practice.number}</p>
                <h3 className="text-xl font-semibold mb-2">{practice.name}</h3>
                <p className="text-sm mb-4" style={{ color: ACCENT }}>
                  Led by {practice.lead}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">{practice.description}</p>
                <div className="flex flex-wrap gap-2">
                  {practice.disciplines.map((discipline) => (
                    <span key={discipline} className="px-2.5 py-1 text-xs bg-secondary rounded-full">
                      {discipline}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Extended team */}
      <section className="py-16 md:py-24 lg:py-32 border-b border-border bg-secondary/30">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-10 lg:gap-16 items-end mb-12 md:mb-16">
            <div>
              <p className="text-sm font-mono text-muted-foreground mb-6 tracking-wider uppercase">
                The wider team
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6">
                Depth behind the leadership
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Beyond the leadership group, our engineers, designers, and specialists work in cross-functional squads.
                Team size flexes with the engagement, and the same people stay on a project from kickoff to handover.
              </p>
              <Link
                href="/careers"
                className="inline-flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
              >
                See open positions
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="flex items-center gap-5 p-6 md:p-8 border border-border rounded-2xl bg-card">
              <div className="p-3 rounded-xl bg-primary/10 shrink-0">
                <Users className="w-6 h-6" style={{ color: ACCENT }} />
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold">15+ specialists</p>
                <p className="text-sm text-muted-foreground">
                  across {disciplines.length} disciplines and{" "}
                  {disciplines.reduce((total, discipline) => total + discipline.roles.length, 0)} specialist roles
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {disciplines.map((discipline, index) => (
              <div
                key={discipline.group}
                className="p-6 md:p-8 border border-border rounded-2xl bg-card hover:border-foreground/20 transition-all"
              >
                <div className="flex items-baseline gap-3 mb-5">
                  <span className="text-sm font-mono text-muted-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-lg font-semibold">{discipline.group}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {discipline.roles.map((role) => (
                    <span key={role} className="px-3 py-1.5 text-sm bg-secondary rounded-full">
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Operating principles */}
      <section className="py-16 md:py-24 lg:py-32 border-b border-border">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-12 md:mb-16">
            <p className="text-sm font-mono text-muted-foreground mb-6 tracking-wider uppercase">
              How we operate
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6">
              What our structure means for you
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-border border border-border rounded-2xl overflow-hidden">
            {principles.map((principle) => (
              <div key={principle.title} className="bg-card p-8 md:p-10">
                <h3 className="text-xl font-semibold mb-3">{principle.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder's note */}
      <section className="py-16 md:py-24 lg:py-32 border-b border-border bg-secondary/30">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <div className="p-6 md:p-10 lg:p-16 border-l-2 border-foreground/10">
            <div className="max-w-4xl">
              <p className="text-xs font-mono text-muted-foreground mb-6 tracking-wider uppercase">
                Founder&apos;s note
              </p>
              <blockquote className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium leading-relaxed text-foreground/90 mb-8">
                &ldquo;We built Skord Labs around a simple standard: the people who sell the work are the people who
                deliver it. That is why every practice has a name attached to it, and why our clients own everything we
                build for them.&rdquo;
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-secondary border border-border">
                  <Image src="/images/new-pp.png" alt="Sudais Khan" fill className="object-cover" />
                </div>
                <div>
                  <p className="font-semibold">Sudais Khan</p>
                  <p className="text-sm text-muted-foreground">Founder & Chief Executive Officer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 lg:py-32">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6">
              Work with this team
            </h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Whether you want to hire us for a project or join the firm, the conversation starts the same way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-white rounded-full transition-all hover:shadow-lg"
                style={{ background: ACCENT_GRADIENT, boxShadow: "0 4px 20px rgba(32, 62, 236, 0.3)" }}
              >
                Start a conversation
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/careers"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium border border-border rounded-full hover:bg-secondary transition-all"
              >
                Join the team
                <ArrowUpRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
