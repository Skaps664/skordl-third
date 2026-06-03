export type CaseStudy = {
  slug: string
  title: string
  category: string
  summary: string
  challenge: string
  approach: string[]
  outcomes: string[]
  skills: string[]
  timeline: string
  role: string
}

export const designFocus = [
  {
    label: "01",
    title: "Product Strategy Through Design",
    description:
      "Turn fuzzy product goals into clear hypotheses, measurable experiments, and design decisions the team can confidently ship.",
  },
  {
    label: "02",
    title: "End-to-End UX and UI Systems",
    description:
      "Design scalable flows and interfaces that feel premium without sacrificing accessibility, consistency, or implementation speed.",
  },
  {
    label: "03",
    title: "Design Ops and Team Enablement",
    description:
      "Build component libraries, design principles, and rituals that help teams move faster while keeping quality high.",
  },
  {
    label: "04",
    title: "Conversion and Retention Optimization",
    description:
      "Use behavioral insights and product analytics to improve onboarding, activation, and sustained engagement.",
  },
] as const

export const caseStudies: CaseStudy[] = [
  {
    slug: "finpay-onboarding-redesign",
    title: "FinPay Onboarding Redesign",
    category: "Fintech",
    summary:
      "Redesigned the onboarding journey for a digital wallet product, reducing drop-offs and improving first-week activation.",
    challenge:
      "The existing onboarding flow asked too much too early, creating friction during account setup. Activation dropped heavily between KYC and first transaction.",
    approach: [
      "Mapped friction points using event analytics and session recordings.",
      "Introduced progressive disclosure in KYC and identity checks.",
      "Designed a modular onboarding system with contextual trust cues.",
      "Ran usability sessions and iterated before release.",
    ],
    outcomes: [
      "Activation increased from 42% to 61% in six weeks.",
      "Time-to-first-transaction improved by 29%.",
      "Support tickets related to onboarding dropped by 33%.",
    ],
    skills: ["Product Strategy", "UX Research", "Interaction Design", "A/B Testing"],
    timeline: "10 weeks",
    role: "Lead Product Designer",
  },
  {
    slug: "medlink-doctor-dashboard",
    title: "MedLink Doctor Dashboard",
    category: "HealthTech",
    summary:
      "Created a data-dense yet usable dashboard for doctors managing patient queues, histories, and remote consultation workflows.",
    challenge:
      "Clinicians were toggling between multiple screens for routine tasks, causing delays and cognitive overload during consultations.",
    approach: [
      "Conducted contextual interviews with doctors and clinic managers.",
      "Prioritized high-frequency actions and bundled related data views.",
      "Built a responsive, role-based component system for future modules.",
      "Partnered with engineering on implementation details and release plan.",
    ],
    outcomes: [
      "Average consultation prep time dropped by 22%.",
      "Task completion errors reduced by 37%.",
      "NPS among clinic staff increased by 18 points.",
    ],
    skills: ["Information Architecture", "UI Systems", "Design QA", "Stakeholder Alignment"],
    timeline: "14 weeks",
    role: "Senior Product Designer",
  },
  {
    slug: "shoporbit-checkout-optimization",
    title: "ShopOrbit Checkout Optimization",
    category: "Ecommerce",
    summary:
      "Reframed the checkout experience for a multi-brand marketplace to improve conversion and reduce cart abandonment.",
    challenge:
      "Users abandoned checkout at shipping and payment due to poor visibility of delivery estimates, extra fees, and trust signals.",
    approach: [
      "Audited funnel analytics and segmented behavior by device.",
      "Simplified information hierarchy and moved critical details above fold.",
      "Introduced express checkout patterns and trust messaging.",
      "Shipped iterative improvements with close KPI monitoring.",
    ],
    outcomes: [
      "Checkout conversion improved by 18% on mobile.",
      "Cart abandonment reduced by 21% overall.",
      "Revenue per visitor rose by 12% in the first quarter.",
    ],
    skills: ["CRO", "UX Writing", "Mobile UX", "Design Experiments"],
    timeline: "9 weeks",
    role: "Product Designer",
  },
]
