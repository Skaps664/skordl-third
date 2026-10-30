export type Leader = {
  name: string
  firstName: string
  title: string
  department: string
  image: string
  /** CSS object-position for the portrait crop */
  imagePosition?: string
  linkedin?: string
  bio: string
  focus: string[]
}

export const founder: Leader = {
  name: "Sudais Khan",
  firstName: "Sudais",
  title: "Founder & Chief Executive Officer",
  department: "Executive Office",
  image: "/images/new-pp.png",
  imagePosition: "50% 20%",
  linkedin: "https://www.linkedin.com/in/sudais-khan/",
  bio: "Sudais founded Skord Labs to close the gap between strategy decks and shipped software. He sets company direction, owns solution architecture on complex engagements, and stays involved in every client partnership through to launch.",
  focus: ["Company strategy", "Solution architecture", "Backend systems", "Client partnerships"],
}

export const founderNote =
  "We built Skord Labs around a simple standard: the people who sell the work are the people who deliver it. That is why every practice has a name attached to it, and why our clients own everything we build for them."

export const leadership: Leader[] = [
  {
    name: "Hamza Khan",
    firstName: "Hamza",
    title: "Head of Marketing & Growth",
    department: "Marketing & Growth",
    image: "/hamza-pp.PNG",
    imagePosition: "50% 15%",
    bio: "Hamza owns everything marketing: positioning, campaigns, content, and demand generation, for our own products and for clients who need the launch to land as hard as the build.",
    focus: ["Go-to-market strategy", "Campaigns and paid media", "Content and social", "Growth analytics"],
  },
  {
    name: "Bis Shinwari",
    firstName: "Bis",
    title: "Product Manager",
    department: "Product & Design",
    image: "/bismil-pp.jpeg",
    imagePosition: "45% 25%",
    bio: "Bis owns the product roadmap on every engagement, turning client goals into scoped, prioritised releases and keeping design, engineering, and stakeholders aligned through to launch.",
    focus: ["Product strategy", "Roadmapping", "Requirements and scoping", "Stakeholder alignment"],
  },
  {
    name: "Omer Jauhar",
    firstName: "Omer",
    title: "Head of Artificial Intelligence",
    department: "AI & Data Science",
    image: "/images/om.jpeg",
    linkedin: "https://www.linkedin.com/in/omer-jauhar/",
    bio: "Omer leads our AI practice, from applied research and model selection through evaluation harnesses and the guardrails that make AI safe to put in front of real users.",
    focus: ["Machine learning systems", "Model evaluation", "Applied research", "AI product delivery"],
  },
  {
    name: "Mubeen Ali Shah",
    firstName: "Mubeen",
    title: "Head of Design & Brand Experience",
    department: "Product & Design",
    image: "/images/mubeen-pp.png",
    imagePosition: "50% 25%",
    linkedin: "https://www.linkedin.com/in/mubeen-ali-shah/",
    bio: "Mubeen owns how our work looks and feels, running product design and brand across every engagement and maintaining the design systems our engineers build against.",
    focus: ["Product design", "Design systems", "Brand identity", "Front-end experience"],
  },
  {
    name: "Ammar Raza",
    firstName: "Ammar",
    title: "Head of Quality Engineering",
    department: "Quality & Reliability",
    image: "/images/team-ammar-raza.jpg",
    linkedin: "https://www.linkedin.com/in/ammar-raza/",
    bio: "Ammar is accountable for release readiness. His team owns test automation, performance verification, and the production reliability standards we hold every launch to.",
    focus: ["Test automation", "Release readiness", "Performance testing", "Production reliability"],
  },
  {
    name: "Aisha Iftikhar",
    firstName: "Aisha",
    title: "Vice President, Engineering",
    department: "Engineering",
    image: "/images/team-aisha-iftikhar.jpg",
    linkedin: "https://www.linkedin.com/in/aisha-iftikhar/",
    bio: "Aisha runs the engineering organisation, setting the architecture standards, review practices, and delivery cadence that every client build runs on.",
    focus: ["Platform architecture", "Python and backend systems", "Data pipelines", "Engineering standards"],
  },
]

const lead = (firstName: string) => leadership.find((l) => l.firstName === firstName) ?? null

export const practices: {
  name: string
  lead: Leader | null
  description: string
  disciplines: string[]
}[] = [
  {
    name: "Engineering",
    lead: lead("Aisha"),
    description:
      "Full-stack web, mobile, and platform engineering. Owns architecture decisions, code review standards, and the shared component libraries that keep delivery fast across projects.",
    disciplines: ["Full-stack", "Backend", "Mobile", "DevOps", "Integrations"],
  },
  {
    name: "AI & Data Science",
    lead: lead("Omer"),
    description:
      "Applied machine learning, LLM systems, and data engineering. Owns model selection, evaluation, retrieval architecture, and the guardrails around every AI feature we ship.",
    disciplines: ["Machine learning", "LLM systems", "Data engineering", "Evaluation"],
  },
  {
    name: "Product & Design",
    lead: lead("Mubeen"),
    description:
      "Product strategy, interface design, and brand. Owns discovery workshops, design systems, and the conversion thinking behind every interface we put in front of users.",
    disciplines: ["Product design", "UX research", "Design systems", "Brand"],
  },
  {
    name: "Quality & Reliability",
    lead: lead("Ammar"),
    description:
      "Test automation, performance engineering, and production monitoring. Nothing reaches a client's users without passing this practice's release criteria.",
    disciplines: ["QA automation", "Performance", "Security review", "Monitoring"],
  },
  {
    name: "Delivery & Client Operations",
    lead: null,
    description:
      "Engagement management, sprint governance, and reporting. Every client has a named point of contact and a visible plan, and we report progress on a fixed cadence.",
    disciplines: ["Engagement management", "Sprint governance", "Reporting", "Support"],
  },
  {
    name: "Marketing & Growth",
    lead: lead("Hamza"),
    description:
      "Positioning, campaigns, content systems, and go-to-market execution for our own products and for clients who need the launch as much as the build.",
    disciplines: ["Go-to-market", "Campaigns", "Content systems", "Paid media", "Analytics"],
  },
]

export const orgStats = [
  { value: "15+", label: "Specialists across the firm" },
  { value: "6", label: "Practice areas" },
  { value: "120+", label: "Projects delivered" },
  { value: "11", label: "Industries served" },
]

export const principles = [
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

export const disciplines = [
  {
    group: "Engineering",
    roles: ["Full-stack engineers", "Backend engineers", "Frontend engineers", "Mobile developers", "DevOps engineers", "Cloud architects"],
  },
  {
    group: "AI & Data",
    roles: ["ML engineers", "AI engineers", "Data engineers", "Data analysts", "Computer vision engineers"],
  },
  {
    group: "Web3 & Blockchain",
    roles: ["Blockchain developers", "Smart contract engineers", "Solidity auditors", "Web3 integration specialists"],
  },
  {
    group: "Security & Quality",
    roles: ["Penetration testers", "Security analysts", "QA automation engineers", "Performance engineers", "Compliance specialists"],
  },
  {
    group: "Product & Design",
    roles: ["Product designers", "UX researchers", "Brand designers", "Motion designers", "Technical writers"],
  },
  {
    group: "Business & Growth",
    roles: ["Business developers", "Account managers", "Project managers", "Growth specialists", "Performance marketers", "Content strategists"],
  },
]
