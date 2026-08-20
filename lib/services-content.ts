import type { LucideIcon } from "lucide-react"
import {
  BarChart3,
  Bot,
  Boxes,
  Braces,
  Calendar,
  ClipboardCheck,
  Clock,
  Compass,
  CreditCard,
  Database,
  DollarSign,
  Gauge,
  Layers,
  LineChart,
  Lock,
  Megaphone,
  Palette,
  RefreshCcw,
  Rocket,
  Search,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Workflow,
  Zap,
} from "lucide-react"

export type ServiceContent = {
  slug: string
  metaTitle: string
  metaDescription: string
  keywords: string[]
  eyebrow: string
  titleLead: string
  titleGradient: string
  intro: string
  heroHighlights: string[]
  glow: string
  primaryCta: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
  metrics: { value: string; label: string }[]
  challenges: {
    heading: string
    intro: string
    items: { problem: string; solution: string }[]
  }
  benefits: {
    heading: string
    intro: string
    items: { icon: LucideIcon; title: string; description: string; proof: string }[]
  }
  capabilities: {
    heading: string
    intro: string
    groups: { title: string; description: string; items: string[] }[]
  }
  audience: {
    heading: string
    intro: string
    items: { title: string; description: string; signals: string[] }[]
  }
  process: {
    heading: string
    intro: string
    steps: { phase: string; duration: string; description: string; details: string[] }[]
  }
  deliverables: {
    heading: string
    intro: string
    groups: { title: string; items: string[] }[]
  }
  stack: {
    heading: string
    intro: string
    groups: { label: string; items: string[] }[]
  }
  engagements: {
    heading: string
    intro: string
    options: { name: string; bestFor: string; includes: string[]; timeline: string }[]
  }
  relatedCaseStudySlugs?: string[]
  faqs: { question: string; answer: string }[]
  cta: { title: string; description: string; buttonLabel: string }
}

export const servicesContent: Record<string, ServiceContent> = {
  "brand-building": {
    slug: "brand-building",
    metaTitle: "Brand Building, Rebranding & Launch Services | Skord Labs",
    metaDescription:
      "Build a brand from zero, run a clean rebrand, or launch to market with positioning, identity, messaging, website, and AI-powered brand operations from Skord Labs.",
    keywords: ["brand building", "rebranding agency", "brand strategy Pakistan", "go to market launch", "brand identity design"],
    eyebrow: "Services / Brand Building",
    titleLead: "Build, rebrand, and launch",
    titleGradient: "with clarity and momentum",
    intro:
      "Most brands do not fail on design. They fail because nobody can explain what the company does, who it is for, and why it is worth paying for. We fix that first, then build the identity, website, and content system that carries it to market.",
    heroHighlights: [
      "Positioning before pixels",
      "Identity system, not just a logo",
      "Launch-ready website and campaign assets",
      "Rebrand migration without losing search equity",
    ],
    glow: "from-pink-500/20 to-orange-500/20",
    primaryCta: { label: "Start Brand Project", href: "/contact" },
    secondaryCta: { label: "Add AI Social Setup", href: "/services/ai-social-media-marketing" },
    metrics: [
      { value: "4-8 weeks", label: "Brand to launch" },
      { value: "3x", label: "Faster content production" },
      { value: "40+", label: "Brands positioned" },
      { value: "100%", label: "Source files handed over" },
    ],
    challenges: {
      heading: "What actually goes wrong with brands",
      intro:
        "We have rebuilt enough brands to know the pattern. The symptoms look like design problems, but they almost always start upstream in strategy and consistency.",
      items: [
        {
          problem: "Five people in the company describe the business five different ways.",
          solution: "A single positioning statement and messaging hierarchy everyone works from, written down and signed off.",
        },
        {
          problem: "The logo looks fine, but every deck, ad, and page looks like a different company.",
          solution: "A full identity system with type scale, colour tokens, layout rules, and ready-made templates.",
        },
        {
          problem: "A rebrand is coming and nobody knows what breaks: domains, listings, packaging, or rankings.",
          solution: "A migration checklist covering redirects, listings, socials, packaging, and search equity protection.",
        },
        {
          problem: "Content stalls because every post needs a founder's approval and a designer's time.",
          solution: "An AI-assisted content engine with brand-locked prompts and templates your team runs without us.",
        },
        {
          problem: "The launch is a single announcement post that dies in 48 hours.",
          solution: "A phased launch architecture: pre-launch, launch week, and a 90-day sustain plan with owners per channel.",
        },
      ],
    },
    benefits: {
      heading: "How you benefit from working with us",
      intro:
        "We are a product and engineering team that also does brand. That means the strategy comes back to you as shipped assets, not a PDF you have to find someone else to build.",
      items: [
        {
          icon: Compass,
          title: "Clarity you can sell with",
          description:
            "You leave with language your sales team, your investors, and your ads can all use without rewriting it every time.",
          proof: "Positioning, narrative, and objection handling in one document",
        },
        {
          icon: Palette,
          title: "An identity system that scales",
          description:
            "Not one logo file. A working system with tokens, templates, and rules so the tenth campaign still looks like the first.",
          proof: "Design tokens exported for Figma and code",
        },
        {
          icon: RefreshCcw,
          title: "Rebrands without the downtime",
          description:
            "We plan the migration alongside the creative, so the switch happens on a date you choose with nothing silently broken.",
          proof: "Redirect map, listings audit, and rollout runbook",
        },
        {
          icon: Rocket,
          title: "A launch that keeps running",
          description:
            "Your brand ships with the website, campaign assets, and content workflow already in place to sustain it after week one.",
          proof: "90-day post-launch content calendar included",
        },
      ],
    },
    capabilities: {
      heading: "What we build",
      intro: "Pick the whole programme or the parts you are missing. Each block is delivered as a usable asset, not a recommendation.",
      groups: [
        {
          title: "Brand strategy",
          description: "The thinking that everything else hangs off.",
          items: [
            "Market and competitor landscape mapping",
            "Audience segments and buying triggers",
            "Positioning statement and category choice",
            "Value proposition and proof points",
            "Naming and tagline development",
            "Brand architecture for multi-product companies",
          ],
        },
        {
          title: "Identity and design",
          description: "The visual system that makes you recognisable.",
          items: [
            "Logo suite with responsive marks",
            "Colour system with accessibility contrast checks",
            "Typography scale and pairing",
            "Iconography, photography, and illustration direction",
            "Packaging and print applications",
            "Brand guidelines document and asset library",
          ],
        },
        {
          title: "Messaging and content",
          description: "How the brand actually speaks in the wild.",
          items: [
            "Voice and tone guidelines with do and do-not examples",
            "Website and landing page copy",
            "Sales deck and one-pager narrative",
            "Email and lifecycle messaging templates",
            "Social content pillars and hook library",
            "AI prompt library locked to your brand voice",
          ],
        },
        {
          title: "Launch and go-to-market",
          description: "Turning a brand into demand.",
          items: [
            "Launch website or campaign microsite",
            "Channel plan across paid, organic, and partnerships",
            "Press and community launch assets",
            "Analytics and attribution setup",
            "Launch week runbook with owners and dates",
            "90-day sustain calendar",
          ],
        },
        {
          title: "Rebranding and migration",
          description: "Changing identity without losing what you built.",
          items: [
            "Current-state brand and asset audit",
            "Stakeholder alignment workshops",
            "Domain, redirect, and SEO equity plan",
            "Marketplace, listing, and social handle migration",
            "Internal rollout and team enablement",
            "Legacy asset retirement schedule",
          ],
        },
        {
          title: "AI-enabled brand operations",
          description: "Keeping the brand consistent at speed.",
          items: [
            "Brand-locked AI prompt systems",
            "Automated content generation workflows",
            "Approval routing before anything publishes",
            "Asset generation for repeat formats",
            "Consistency checks across channels",
            "Team training on the workflow",
          ],
        },
      ],
    },
    audience: {
      heading: "Who this is for",
      intro: "Three situations where this work pays for itself quickly.",
      items: [
        {
          title: "Founders launching something new",
          description: "You have a product or a strong idea and need a brand that makes it look and sound fundable.",
          signals: [
            "No positioning written down yet",
            "Placeholder logo and a template site",
            "About to raise or about to launch",
          ],
        },
        {
          title: "Companies that outgrew their brand",
          description: "The business changed, the brand did not. Your marketing is describing a company you stopped being.",
          signals: [
            "New products the brand does not cover",
            "Moving upmarket or to a new region",
            "Sales team writes their own decks",
          ],
        },
        {
          title: "Teams shipping faster than they can stay on-brand",
          description: "Volume is the problem. You need systems and AI workflows so consistency does not depend on one person.",
          signals: [
            "Design is a bottleneck for marketing",
            "Every channel looks slightly different",
            "Content calendar keeps slipping",
          ],
        },
      ],
    },
    process: {
      heading: "How we work",
      intro: "Four phases, clear checkpoints, and nothing moves forward without your sign-off.",
      steps: [
        {
          phase: "Discovery and audit",
          duration: "1 week",
          description: "We learn the business properly before we form an opinion about how it should look or sound.",
          details: [
            "Founder and stakeholder interviews",
            "Customer and sales-call review",
            "Competitor and category audit",
            "Existing asset and channel inventory",
          ],
        },
        {
          phase: "Strategy and positioning",
          duration: "1-2 weeks",
          description: "We decide what the brand stands for, who it is for, and how it argues its case.",
          details: [
            "Positioning and category definition",
            "Messaging hierarchy and proof points",
            "Voice and tone guidelines",
            "Naming or renaming where needed",
          ],
        },
        {
          phase: "Identity and system design",
          duration: "2-3 weeks",
          description: "Visual direction, then the full system built out and applied to real surfaces.",
          details: [
            "Two to three creative directions",
            "Selected route refined to full system",
            "Applications across web, social, and print",
            "Guidelines and token export",
          ],
        },
        {
          phase: "Launch and enablement",
          duration: "1-2 weeks + ongoing",
          description: "We ship the assets, run the rollout, and train your team to keep it consistent.",
          details: [
            "Website and campaign asset delivery",
            "Migration and redirect execution for rebrands",
            "AI content workflow setup and training",
            "90-day sustain plan handover",
          ],
        },
      ],
    },
    deliverables: {
      heading: "What you receive",
      intro: "Everything is handed over in editable source formats. You own all of it.",
      groups: [
        {
          title: "Strategy",
          items: [
            "Positioning and narrative document",
            "Audience and segment profiles",
            "Competitor landscape map",
            "Messaging hierarchy and proof points",
          ],
        },
        {
          title: "Identity",
          items: [
            "Logo suite in all formats",
            "Colour, type, and spacing system",
            "Design tokens for Figma and code",
            "Brand guidelines PDF and asset library",
          ],
        },
        {
          title: "Launch assets",
          items: [
            "Website or landing page build",
            "Social and ad creative templates",
            "Sales deck and one-pager",
            "Email and lifecycle templates",
          ],
        },
        {
          title: "Operations",
          items: [
            "AI content prompt library",
            "90-day content calendar",
            "Rebrand migration checklist",
            "Team training session and recording",
          ],
        },
      ],
    },
    stack: {
      heading: "Tools we work in",
      intro: "Your team gets the working files, not flattened exports.",
      groups: [
        { label: "Design", items: ["Figma", "Adobe Illustrator", "Photoshop", "After Effects"] },
        { label: "Web", items: ["Next.js", "Tailwind CSS", "Framer Motion", "Webflow", "Shopify"] },
        { label: "Content and AI", items: ["Claude", "GPT", "Midjourney", "Custom prompt systems"] },
        { label: "Measurement", items: ["GA4", "Search Console", "Hotjar", "Meta and LinkedIn Ads"] },
      ],
    },
    engagements: {
      heading: "Ways to work with us",
      intro: "Scope it to where you actually are. Every model includes the strategy layer, because skipping it is how brands end up back here in a year.",
      options: [
        {
          name: "Brand Sprint",
          bestFor: "Early-stage founders who need positioning and a credible identity fast.",
          includes: [
            "Discovery and positioning",
            "Core identity system",
            "Messaging and voice guidelines",
            "One landing page build",
          ],
          timeline: "3-4 weeks",
        },
        {
          name: "Full Brand Build",
          bestFor: "Companies launching or rebranding with real revenue on the line.",
          includes: [
            "Everything in Brand Sprint",
            "Full application and guidelines",
            "Website build and launch campaign",
            "Migration plan for rebrands",
          ],
          timeline: "6-10 weeks",
        },
        {
          name: "Brand Operations Retainer",
          bestFor: "Teams that need consistent output every month without hiring in-house.",
          includes: [
            "Monthly campaign and content production",
            "AI workflow maintenance and tuning",
            "Quarterly brand consistency audit",
            "On-call design and copy support",
          ],
          timeline: "Monthly, 3-month minimum",
        },
      ],
    },
    relatedCaseStudySlugs: [
      "dekord-brand-and-commerce-build",
      "zaru-fragrance-commerce-platform",
      "mens-confidence-wellness-commerce-store",
    ],
    faqs: [
      {
        question: "Do you only do the strategy, or do you build the assets too?",
        answer:
          "Both. We are an engineering and product team as well as a brand team, so the positioning work ends in a shipped website, working templates, and live campaign assets rather than a deck that needs another vendor to execute.",
      },
      {
        question: "We already have a logo we like. Can we keep it?",
        answer:
          "Yes, and often you should. If the mark is working we build the system around it: type, colour, layout, and messaging. We will tell you honestly if the mark is holding you back, but we do not redesign things for the sake of it.",
      },
      {
        question: "Will a rebrand hurt our Google rankings?",
        answer:
          "Not if it is planned. We map every URL, set up permanent redirects, update structured data and listings, and monitor Search Console through the switch. Traffic usually dips for two to four weeks and recovers, and we plan the timing around your commercial calendar.",
      },
      {
        question: "How involved does our team need to be?",
        answer:
          "Roughly four to six hours in week one for interviews and audit, then about two hours per week for reviews. Decisions get made at fixed checkpoints so the project never stalls waiting on feedback.",
      },
      {
        question: "What happens after launch?",
        answer:
          "You get the 90-day sustain calendar, the AI content workflow, and a trained team. If you want us to keep running it, the Brand Operations Retainer covers monthly production and quarterly consistency audits.",
      },
    ],
    cta: {
      title: "Ready to make your brand make sense?",
      description:
        "Tell us where you are - launching, rebranding, or scaling - and we will map the fastest route to a brand that sells.",
      buttonLabel: "Book a brand consultation",
    },
  },
  "ai-solutions": {
    slug: "ai-solutions",
    metaTitle: "AI Solutions & Custom AI Development | Skord Labs",
    metaDescription:
      "AI assistants, workflow automation, custom model integration, and predictive analytics built on your real data - shipped to production with measurable ROI.",
    keywords: ["AI solutions", "AI development company", "LLM integration", "AI automation", "machine learning services"],
    eyebrow: "Services / AI Solutions",
    titleLead: "Build AI systems that",
    titleGradient: "pay for themselves",
    intro:
      "Most AI projects die in the demo stage because they were never wired into a real workflow. We start from the process you want to change, prove the numbers on a narrow slice, then ship it into production with evaluation, guardrails, and monitoring around it.",
    heroHighlights: [
      "Grounded in your own data, not generic prompts",
      "Evaluated against a baseline before rollout",
      "Human-in-the-loop where it matters",
      "Cost and latency budgeted per request",
    ],
    glow: "from-violet-500/20 to-fuchsia-500/20",
    primaryCta: { label: "Discuss your AI use case", href: "/contact" },
    secondaryCta: { label: "See AI systems in production", href: "/case-studies" },
    metrics: [
      { value: "2-4 weeks", label: "To a working pilot" },
      { value: "60%", label: "Typical manual-effort reduction" },
      { value: "24/7", label: "Coverage once deployed" },
      { value: "100%", label: "Models and prompts you own" },
    ],
    challenges: {
      heading: "Why most AI initiatives stall",
      intro:
        "We get called in after the first attempt more often than before it. The failure modes are consistent, and all of them are avoidable.",
      items: [
        {
          problem: "An impressive demo that nobody in the business actually uses day to day.",
          solution: "We scope from an existing workflow and a named owner, so adoption is designed in from the first sprint.",
        },
        {
          problem: "The model hallucinates on real questions because it was never grounded in company data.",
          solution: "Retrieval over your own documents and systems, with citations and a hard refusal path when confidence is low.",
        },
        {
          problem: "Nobody can prove whether the AI is better than what it replaced.",
          solution: "A labelled evaluation set and a measured baseline before launch, then ongoing accuracy tracking in production.",
        },
        {
          problem: "Token costs spiral once real traffic arrives.",
          solution: "Model routing, caching, and per-request cost budgets so unit economics are known before you scale.",
        },
        {
          problem: "Legal and compliance block the rollout at the last minute.",
          solution: "Data handling, retention, PII redaction, and audit logging designed in from discovery, not bolted on.",
        },
      ],
    },
    benefits: {
      heading: "How you benefit from working with us",
      intro:
        "We build AI the way we build software: measurable, tested, and maintainable by your team after we hand it over.",
      items: [
        {
          icon: Gauge,
          title: "Hours back, every week",
          description:
            "The first target is always the repetitive work: triage, data entry, summarisation, first-draft responses, routine lookups.",
          proof: "Most clients recover 15-25 hours per person per month",
        },
        {
          icon: ShieldCheck,
          title: "Answers you can trust",
          description:
            "Retrieval grounding, citations, confidence thresholds, and escalation rules mean the system says it does not know instead of inventing.",
          proof: "Every answer traceable to a source document",
        },
        {
          icon: LineChart,
          title: "Proof before scale",
          description:
            "We measure against your current process on a labelled set, so the go or no-go decision is a number and not a feeling.",
          proof: "Baseline vs model accuracy reported before rollout",
        },
        {
          icon: Braces,
          title: "No vendor lock-in",
          description:
            "Prompts, evaluation sets, pipelines, and infrastructure are yours in your repositories, portable across providers.",
          proof: "Provider-agnostic architecture with fallback routing",
        },
      ],
    },
    capabilities: {
      heading: "What we build",
      intro: "Every engagement combines a few of these. We will tell you which ones your problem actually needs.",
      groups: [
        {
          title: "AI assistants and agents",
          description: "Systems that answer, act, and escalate.",
          items: [
            "Customer support assistants over your knowledge base",
            "Internal copilots for sales, ops, and engineering",
            "Lead qualification and intake agents",
            "Multi-step agents with tool and API access",
            "Voice and WhatsApp channel integration",
            "Escalation and human handoff design",
          ],
        },
        {
          title: "Retrieval and knowledge systems",
          description: "Grounding the model in what your company actually knows.",
          items: [
            "Document ingestion and chunking pipelines",
            "Vector search and hybrid keyword retrieval",
            "Permission-aware retrieval per user",
            "Citation and source-linking in every answer",
            "Freshness and re-indexing schedules",
            "Structured data and SQL question answering",
          ],
        },
        {
          title: "Workflow automation",
          description: "Removing the manual steps between systems.",
          items: [
            "Cross-tool orchestration across CRM, support, and finance",
            "Document extraction and classification",
            "Automated reporting and digest generation",
            "Approval routing with human checkpoints",
            "Event-driven triggers and scheduling",
            "Exception handling and retry logic",
          ],
        },
        {
          title: "Custom models and ML",
          description: "When a general model is not the right tool.",
          items: [
            "Fine-tuning on domain data",
            "Classification, ranking, and recommendation models",
            "Forecasting and demand prediction",
            "Computer vision for inspection and extraction",
            "Simulation and surrogate models",
            "Training pipelines and model registry",
          ],
        },
        {
          title: "Evaluation and guardrails",
          description: "The part that separates a demo from a product.",
          items: [
            "Labelled evaluation sets built with your team",
            "Regression testing on every prompt change",
            "PII detection and redaction",
            "Prompt injection and jailbreak defences",
            "Output validation against schemas",
            "Confidence thresholds and refusal behaviour",
          ],
        },
        {
          title: "Production and operations",
          description: "Running it reliably once it is live.",
          items: [
            "Latency and cost monitoring per endpoint",
            "Model routing and caching strategies",
            "Audit logging for every AI decision",
            "Rate limiting and abuse protection",
            "Rollback and version pinning",
            "Team training and runbook handover",
          ],
        },
      ],
    },
    audience: {
      heading: "Who this is for",
      intro: "AI is worth it when there is volume, repetition, or knowledge trapped in documents. These are the usual shapes.",
      items: [
        {
          title: "Support and operations teams drowning in volume",
          description: "The same questions and the same manual steps, thousands of times a month.",
          signals: [
            "Long first-response times",
            "Knowledge lives in a few people's heads",
            "Headcount is the only lever you have",
          ],
        },
        {
          title: "Product teams adding AI to their software",
          description: "You need the AI feature to be genuinely good, not a wrapper that embarrasses you in front of customers.",
          signals: [
            "A prototype that is not production-safe",
            "No evaluation or guardrails yet",
            "Unclear unit economics per user",
          ],
        },
        {
          title: "Data-rich businesses with unused data",
          description: "You have years of transactions, documents, or sensor data and no system turning it into decisions.",
          signals: [
            "Reporting is retrospective, never predictive",
            "Analysts spend more time cleaning than analysing",
            "Decisions made on gut feel",
          ],
        },
      ],
    },
    process: {
      heading: "How we deliver",
      intro: "A narrow pilot first, measured honestly. We only scale what proves out.",
      steps: [
        {
          phase: "Discovery and use-case scoring",
          duration: "1 week",
          description: "We map the workflow, quantify the current cost, and rank candidate use cases by ROI and risk.",
          details: [
            "Process walkthrough with the team doing the work",
            "Data availability and quality audit",
            "Feasibility and risk assessment",
            "Success metrics and baseline agreed",
          ],
        },
        {
          phase: "Pilot build",
          duration: "2-4 weeks",
          description: "One use case, built properly, on your real data, with an evaluation harness from day one.",
          details: [
            "Retrieval and prompt architecture",
            "Labelled evaluation set",
            "Guardrails and refusal behaviour",
            "Internal demo on live data",
          ],
        },
        {
          phase: "Evaluation and hardening",
          duration: "1-2 weeks",
          description: "We measure against the baseline, close the accuracy gaps, and secure the system before real users touch it.",
          details: [
            "Accuracy and quality scoring vs baseline",
            "Cost and latency profiling",
            "Security and PII review",
            "Load and failure testing",
          ],
        },
        {
          phase: "Production rollout",
          duration: "1-2 weeks",
          description: "Staged release with monitoring, then training so your team can operate and extend it.",
          details: [
            "Phased rollout with kill switch",
            "Dashboards for accuracy, cost, and usage",
            "Runbook and escalation procedures",
            "Team training and documentation handover",
          ],
        },
        {
          phase: "Scale and iterate",
          duration: "Ongoing",
          description: "Next use cases reuse the same infrastructure, so each one costs less than the last.",
          details: [
            "Monthly accuracy and cost review",
            "Prompt and model upgrades",
            "New use cases on shared infrastructure",
            "Continuous evaluation set expansion",
          ],
        },
      ],
    },
    deliverables: {
      heading: "What you receive",
      intro: "Working software plus everything needed to run and improve it without us.",
      groups: [
        {
          title: "The system",
          items: [
            "Production AI application or API",
            "Retrieval pipeline and index",
            "Integrations with your existing tools",
            "Admin interface for prompts and settings",
          ],
        },
        {
          title: "Quality assurance",
          items: [
            "Labelled evaluation dataset",
            "Automated regression test suite",
            "Baseline vs model performance report",
            "Guardrail and red-team results",
          ],
        },
        {
          title: "Operations",
          items: [
            "Accuracy, cost, and latency dashboards",
            "Audit logs for every AI decision",
            "Alerting and incident runbook",
            "Rollback and versioning procedures",
          ],
        },
        {
          title: "Enablement",
          items: [
            "Architecture and decision documentation",
            "Prompt engineering guide for your team",
            "Live training sessions and recordings",
            "30 days of post-launch support",
          ],
        },
      ],
    },
    stack: {
      heading: "What we build on",
      intro: "We stay provider-agnostic and pick per use case on quality, latency, and cost.",
      groups: [
        { label: "Models", items: ["Claude", "GPT", "Open-source LLMs", "Fine-tuned models"] },
        { label: "Retrieval", items: ["pgvector", "Pinecone", "Qdrant", "Hybrid search"] },
        { label: "Engineering", items: ["Python", "TypeScript", "FastAPI", "Next.js", "LangGraph"] },
        { label: "Infrastructure", items: ["AWS", "Vercel", "Docker", "Postgres", "Redis"] },
      ],
    },
    engagements: {
      heading: "Ways to work with us",
      intro: "Start small enough to prove it, structured so scaling is a decision and not a rebuild.",
      options: [
        {
          name: "AI Opportunity Audit",
          bestFor: "Teams that know AI should help but not where to point it.",
          includes: [
            "Workflow mapping and cost baseline",
            "Ranked use-case shortlist with ROI estimates",
            "Data readiness assessment",
            "Technical architecture recommendation",
          ],
          timeline: "1-2 weeks",
        },
        {
          name: "Pilot to Production",
          bestFor: "One high-value use case taken all the way to live users.",
          includes: [
            "Full pilot build on real data",
            "Evaluation harness and guardrails",
            "Production deployment and monitoring",
            "Team training and handover",
          ],
          timeline: "6-10 weeks",
        },
        {
          name: "Embedded AI Team",
          bestFor: "Companies rolling out AI across multiple functions.",
          includes: [
            "Dedicated AI engineers in your sprints",
            "Shared platform across use cases",
            "Continuous evaluation and cost tuning",
            "Roadmap and architecture ownership",
          ],
          timeline: "Monthly, 3-month minimum",
        },
      ],
    },
    relatedCaseStudySlugs: [
      "boxlytics-mechanics-ai-packaging-platform",
      "configurax-cpq-ai-workflow-engine",
      "universal-ecommerce-admin-portal",
    ],
    faqs: [
      {
        question: "Do we need clean data before we start?",
        answer:
          "No, but we need to know what state it is in. The discovery phase includes a data audit, and cleaning or structuring work gets scoped explicitly rather than discovered halfway through the build.",
      },
      {
        question: "How do you stop the AI from making things up?",
        answer:
          "Retrieval grounding so answers come from your documents, citations on every response, schema validation on outputs, confidence thresholds that trigger a refusal or handoff, and an evaluation set that catches regressions before they ship.",
      },
      {
        question: "What does it cost to run once it is live?",
        answer:
          "We profile cost per request during the pilot and report it before rollout, then reduce it with caching, model routing, and prompt optimisation. You get a per-user or per-ticket number you can plan against, not a surprise invoice.",
      },
      {
        question: "Can this run on our own infrastructure?",
        answer:
          "Yes. We deploy to your cloud account, and where data cannot leave your environment we use open-source models hosted privately. That trade-off gets decided in discovery based on your compliance requirements.",
      },
      {
        question: "What if the pilot does not work?",
        answer:
          "Then we tell you, with the numbers. A measured no is a good outcome at pilot scale - it costs weeks instead of a year, and the audit usually surfaces a better-suited use case.",
      },
    ],
    cta: {
      title: "Ready to leverage AI properly?",
      description:
        "Bring us the workflow that is eating your team's time. We will tell you honestly whether AI fixes it and what it would take.",
      buttonLabel: "Book an AI consultation",
    },
  },
  "ai-systems": {
    slug: "ai-systems",
    metaTitle: "AI Systems, Bots & Automation Services | Skord Labs",
    metaDescription:
      "AI bots, workflow automations, custom models, and internal AI tools connected into one operating system for your business - built, deployed, and monitored by Skord Labs.",
    keywords: ["AI systems", "AI bots", "AI automation", "AI business systems", "custom AI tools"],
    eyebrow: "Services / AI Systems",
    titleLead: "One connected AI layer",
    titleGradient: "across your whole business",
    intro:
      "Point solutions create new silos. We build the layer underneath: shared retrieval, shared guardrails, shared monitoring - so your support bot, your ops automations, and your internal tools all run on the same foundation and get cheaper to add.",
    heroHighlights: [
      "Bots, automations, models, and tools on one platform",
      "Connected to CRM, support, and operations data",
      "Audit trail behind every automated decision",
      "Each new use case reuses the last one's infrastructure",
    ],
    glow: "from-indigo-500/20 to-cyan-500/20",
    primaryCta: { label: "Map your AI systems", href: "/contact" },
    secondaryCta: { label: "Explore AI solutions", href: "/services/ai-solutions" },
    metrics: [
      { value: "5", label: "System pillars covered" },
      { value: "1 week", label: "To a scored use-case map" },
      { value: "70%", label: "Reuse across later use cases" },
      { value: "24/7", label: "Monitored in production" },
    ],
    challenges: {
      heading: "The cost of doing AI one tool at a time",
      intro:
        "Companies usually buy or build three or four disconnected AI tools before realising the problem is architectural.",
      items: [
        {
          problem: "Every new AI tool needs its own integration, its own data sync, its own login.",
          solution: "A shared integration and retrieval layer so the next use case is configuration, not a new project.",
        },
        {
          problem: "The support bot and the sales assistant give customers different answers.",
          solution: "One governed knowledge base feeding every surface, updated in one place.",
        },
        {
          problem: "Nobody can explain why the system took a particular action last Tuesday.",
          solution: "Structured audit logging of inputs, retrieved context, and outputs for every automated decision.",
        },
        {
          problem: "Automations break silently when an upstream system changes a field.",
          solution: "Schema validation, health checks, and alerting on every integration with defined failure behaviour.",
        },
        {
          problem: "AI spend appears on four different invoices with no owner.",
          solution: "Centralised usage tracking with per-team, per-use-case cost attribution.",
        },
      ],
    },
    benefits: {
      heading: "How you benefit from working with us",
      intro: "The value compounds. The first system is the expensive one; everything after runs on rails you already own.",
      items: [
        {
          icon: Layers,
          title: "Each use case costs less than the last",
          description:
            "Retrieval, auth, logging, evaluation, and monitoring are built once and shared, so use case four is weeks not months.",
          proof: "Around 70% infrastructure reuse after the first build",
        },
        {
          icon: Bot,
          title: "Consistent answers on every channel",
          description:
            "Web chat, WhatsApp, email, and internal tools all read from the same governed knowledge base with the same rules.",
          proof: "One source of truth across all AI surfaces",
        },
        {
          icon: ClipboardCheck,
          title: "Decisions you can audit",
          description:
            "Every automated action logs what it saw and why it acted, which is what makes AI safe to use in regulated or high-stakes work.",
          proof: "Full input, context, and output trail per decision",
        },
        {
          icon: Workflow,
          title: "Operations that run without babysitting",
          description:
            "Triage, routing, reporting, and follow-ups happen on schedule, with humans pulled in only at the checkpoints you define.",
          proof: "Human-in-the-loop only where risk requires it",
        },
      ],
    },
    capabilities: {
      heading: "The five pillars we build",
      intro: "Most engagements start with one or two pillars and expand once the platform layer is in place.",
      groups: [
        {
          title: "AI bots",
          description: "Conversational surfaces that resolve, qualify, and escalate.",
          items: [
            "Customer support bots on your knowledge base",
            "Lead qualification and booking bots",
            "Internal assistant bots for staff questions",
            "WhatsApp, web, Slack, and email channels",
            "Escalation rules and human handoff",
            "Conversation analytics and gap reporting",
          ],
        },
        {
          title: "AI automations",
          description: "The repetitive work between your systems.",
          items: [
            "Ticket triage, tagging, and routing",
            "Document extraction and data entry",
            "Onboarding and approval workflows",
            "Scheduled reports and executive digests",
            "Follow-up and reminder sequences",
            "Exception queues for edge cases",
          ],
        },
        {
          title: "AI models",
          description: "Purpose-built intelligence for your domain.",
          items: [
            "Fine-tuned models on your historical data",
            "Classification and prioritisation models",
            "Forecasting and demand prediction",
            "Recommendation and ranking systems",
            "Anomaly and fraud detection",
            "Retraining pipelines and model registry",
          ],
        },
        {
          title: "AI business systems",
          description: "Connecting the functions that currently do not talk.",
          items: [
            "CRM, support, and marketing integration",
            "Unified customer context across tools",
            "Revenue and operations reporting layer",
            "Cross-department workflow orchestration",
            "Role-based access to AI capabilities",
            "Single administration and configuration console",
          ],
        },
        {
          title: "AI tools for teams",
          description: "Internal software that makes each person faster.",
          items: [
            "Content and proposal generation tools",
            "Data analysis and query assistants",
            "Research and summarisation workspaces",
            "Template and prompt libraries",
            "Usage analytics per team",
            "Training and adoption programmes",
          ],
        },
        {
          title: "Platform foundations",
          description: "The shared layer everything above runs on.",
          items: [
            "Central retrieval and knowledge indexing",
            "Guardrails, PII redaction, and validation",
            "Evaluation harness reused across use cases",
            "Observability, cost tracking, and alerting",
            "Model routing and provider failover",
            "Access control and audit logging",
          ],
        },
      ],
    },
    audience: {
      heading: "Who this is for",
      intro: "This is a platform engagement. It pays off when you have more than one AI problem worth solving.",
      items: [
        {
          title: "Companies past their first AI experiment",
          description: "You proved something works and now need it to be reliable, governed, and extendable.",
          signals: [
            "Two or more disconnected AI tools in use",
            "No shared evaluation or monitoring",
            "Growing questions from legal or compliance",
          ],
        },
        {
          title: "Operations-heavy businesses",
          description: "Volume across support, fulfilment, or back office where small automations compound quickly.",
          signals: [
            "Manual handoffs between three or more systems",
            "Staffing scales linearly with volume",
            "Reporting assembled by hand each week",
          ],
        },
        {
          title: "Teams without an in-house AI function",
          description: "You need the architecture decided correctly once, then a team that can maintain it.",
          signals: [
            "No ML or AI engineers on staff",
            "Engineering already at capacity",
            "Need documentation and training, not a black box",
          ],
        },
      ],
    },
    process: {
      heading: "How we deliver",
      intro: "Platform first, then use cases in sequence, each one shipping value on its own.",
      steps: [
        {
          phase: "AI discovery",
          duration: "1 week",
          description: "We map your workflows end to end and score every candidate use case on value, risk, and effort.",
          details: [
            "Cross-department workflow mapping",
            "Systems and data inventory",
            "Scored use-case backlog",
            "Target KPIs per use case",
          ],
        },
        {
          phase: "Platform foundations",
          duration: "2-3 weeks",
          description: "The shared layer: retrieval, integrations, guardrails, logging, and monitoring.",
          details: [
            "Knowledge indexing and permissioning",
            "Integration and event architecture",
            "Guardrail and validation framework",
            "Observability and cost dashboards",
          ],
        },
        {
          phase: "First use cases",
          duration: "3-6 weeks",
          description: "Two or three high-value systems built on the platform and released to real users.",
          details: [
            "Bot, automation, or model per scored priority",
            "Evaluation set and accuracy baseline",
            "Staged rollout with kill switch",
            "Adoption tracking from day one",
          ],
        },
        {
          phase: "Integration and governance",
          duration: "2 weeks",
          description: "Connecting the systems to each other and putting the controls in place for wider rollout.",
          details: [
            "Cross-system context sharing",
            "Role-based access configuration",
            "Audit and retention policies",
            "Security and compliance review",
          ],
        },
        {
          phase: "Scale and operate",
          duration: "Ongoing",
          description: "New use cases ship on the existing platform while we tune accuracy and cost on the live ones.",
          details: [
            "Monthly performance and spend review",
            "Backlog re-scoring as priorities change",
            "Model and prompt upgrades",
            "Team enablement and internal ownership transfer",
          ],
        },
      ],
    },
    deliverables: {
      heading: "What your team gets",
      intro: "A platform your engineers can extend and your operators can actually run.",
      groups: [
        {
          title: "Platform",
          items: [
            "Shared retrieval and knowledge layer",
            "Integration connectors to your stack",
            "Guardrail and validation framework",
            "Central admin and configuration console",
          ],
        },
        {
          title: "Live systems",
          items: [
            "Deployed bots on your chosen channels",
            "Running automations with exception queues",
            "Custom models with retraining pipelines",
            "Internal AI tools for named teams",
          ],
        },
        {
          title: "Governance",
          items: [
            "Audit log of every automated decision",
            "Role-based access controls",
            "Data retention and redaction policies",
            "Compliance and security documentation",
          ],
        },
        {
          title: "Operations",
          items: [
            "Accuracy, usage, and cost dashboards",
            "Alerting and incident runbooks",
            "Architecture and integration docs",
            "Training programme for operators and engineers",
          ],
        },
      ],
    },
    stack: {
      heading: "What we build on",
      intro: "Chosen per requirement, deployed into your accounts.",
      groups: [
        { label: "Models", items: ["Claude", "GPT", "Open-source LLMs", "Custom ML models"] },
        { label: "Orchestration", items: ["LangGraph", "Temporal", "n8n", "Event queues"] },
        { label: "Data", items: ["Postgres", "pgvector", "Redis", "S3", "Warehouse sync"] },
        { label: "Delivery", items: ["AWS", "Docker", "Next.js", "FastAPI", "Grafana"] },
      ],
    },
    engagements: {
      heading: "Ways to work with us",
      intro: "Every option starts with discovery, because building the platform for the wrong use cases is the expensive mistake.",
      options: [
        {
          name: "AI Systems Blueprint",
          bestFor: "Leadership teams deciding where to invest before committing budget.",
          includes: [
            "Full workflow and systems mapping",
            "Scored use-case backlog with ROI",
            "Target architecture document",
            "Phased delivery roadmap and budget",
          ],
          timeline: "1-2 weeks",
        },
        {
          name: "Platform + First Systems",
          bestFor: "Companies ready to put AI into daily operations properly.",
          includes: [
            "Shared platform foundations",
            "Two to three production use cases",
            "Governance and audit setup",
            "Operator and engineer training",
          ],
          timeline: "8-14 weeks",
        },
        {
          name: "Managed AI Operations",
          bestFor: "Teams that want the systems run and expanded without hiring.",
          includes: [
            "Monitoring, tuning, and incident response",
            "New use cases each quarter",
            "Cost optimisation reviews",
            "Quarterly governance audit",
          ],
          timeline: "Monthly, 6-month minimum",
        },
      ],
    },
    relatedCaseStudySlugs: [
      "boxlytics-mechanics-ai-packaging-platform",
      "configurax-cpq-ai-workflow-engine",
      "dekord-manufacturing-inventory-platform",
    ],
    faqs: [
      {
        question: "How is this different from your AI Solutions service?",
        answer:
          "AI Solutions takes one problem from idea to production. AI Systems builds the shared platform underneath multiple AI capabilities so they stay consistent and each new one is cheaper. If you only have one use case, start with AI Solutions.",
      },
      {
        question: "Will this replace people on our team?",
        answer:
          "In practice it removes the repetitive part of their work and raises capacity. We design human checkpoints deliberately, and the systems that work best are the ones your team helped define because they knew where judgement was actually required.",
      },
      {
        question: "Can it work with the tools we already pay for?",
        answer:
          "Yes. We integrate with your existing CRM, helpdesk, ERP, and warehouse rather than replacing them. The integration layer is part of the platform foundations phase.",
      },
      {
        question: "How do you handle sensitive customer data?",
        answer:
          "PII detection and redaction before anything reaches a model, permission-aware retrieval so users only see what they are entitled to, configurable retention, and full audit logging. Where data cannot leave your environment we deploy models privately.",
      },
      {
        question: "What happens if we want to take it in-house later?",
        answer:
          "That is the intended end state. Everything runs in your cloud accounts and repositories with architecture documentation and training included, so your engineers can own it whenever you are ready.",
      },
    ],
    cta: {
      title: "Ready to connect your AI into one system?",
      description:
        "We will map your workflows, score the use cases, and show you the platform that makes all of them cheaper to build.",
      buttonLabel: "Book a systems consultation",
    },
  },
  "ai-social-media-marketing": {
    slug: "ai-social-media-marketing",
    metaTitle: "AI Social Media Marketing Setup | Skord Labs",
    metaDescription:
      "AI-powered social media systems: strategy, brand-locked content engines, publishing automation, and performance dashboards set up for your team by Skord Labs.",
    keywords: ["AI social media", "AI marketing setup", "content automation", "social media automation", "AI content engine"],
    eyebrow: "Services / AI Social Media Marketing",
    titleLead: "AI social media systems",
    titleGradient: "built for consistent growth",
    intro:
      "Consistency beats brilliance on social, and consistency is an operations problem. We install the strategy, the brand-locked AI content engine, the publishing automation, and the reporting loop - then train your team to run it in a few hours a week.",
    heroHighlights: [
      "Content engine locked to your brand voice",
      "Approvals before anything publishes",
      "Multi-channel scheduling from one calendar",
      "Reporting that ties posts to pipeline",
    ],
    glow: "from-fuchsia-500/20 to-rose-500/20",
    primaryCta: { label: "Set up AI social media", href: "/contact" },
    secondaryCta: { label: "Explore brand building", href: "/services/brand-building" },
    metrics: [
      { value: "3-4 weeks", label: "To a running system" },
      { value: "5x", label: "Content output per week" },
      { value: "4 hrs", label: "Weekly team time to operate" },
      { value: "4+", label: "Channels automated" },
    ],
    challenges: {
      heading: "Why social stalls inside good companies",
      intro:
        "It is rarely a lack of ideas. It is that publishing depends on a person who has a more urgent job.",
      items: [
        {
          problem: "Posting is inconsistent because it depends on whoever has time that week.",
          solution: "A standing calendar with content pillars, generated in batches and scheduled a month ahead.",
        },
        {
          problem: "AI-generated posts sound like every other AI-generated post.",
          solution: "Prompt systems trained on your voice, your proof points, and your customers' actual language.",
        },
        {
          problem: "Design is the bottleneck for every single post.",
          solution: "Branded templates and an asset generation workflow non-designers can run safely.",
        },
        {
          problem: "Nobody knows which posts contributed anything commercially.",
          solution: "Tracking and dashboards that connect content themes to traffic, leads, and pipeline.",
        },
        {
          problem: "Something off-brand or wrong slips out and nobody caught it.",
          solution: "An approval stage with named reviewers and a brand-compliance checklist before publish.",
        },
      ],
    },
    benefits: {
      heading: "How you benefit from working with us",
      intro: "We are not an agency posting on your behalf forever. We build the machine and hand you the keys.",
      items: [
        {
          icon: Sparkles,
          title: "Volume without losing the voice",
          description:
            "The prompt system carries your positioning, tone, and proof points, so scale does not turn into generic filler.",
          proof: "Brand voice guidelines encoded into every prompt",
        },
        {
          icon: Calendar,
          title: "A calendar that fills itself",
          description:
            "Content pillars plus batch generation means next month is drafted before this month ends.",
          proof: "30 days of content queued at any time",
        },
        {
          icon: Megaphone,
          title: "Every channel covered properly",
          description:
            "Formats adapted per platform instead of the same post copy-pasted to four places at once.",
          proof: "Instagram, LinkedIn, TikTok, X, and Facebook supported",
        },
        {
          icon: BarChart3,
          title: "Decisions from data, not opinion",
          description:
            "Dashboards show which hooks, formats, and themes actually convert, and the calendar shifts toward them each month.",
          proof: "Monthly iteration based on measured performance",
        },
      ],
    },
    capabilities: {
      heading: "What we set up",
      intro: "Four connected modules. You can start with the content engine alone, but the results come from running all four.",
      groups: [
        {
          title: "Strategy foundation",
          description: "What to say, to whom, and why they should care.",
          items: [
            "Audience mapping and platform selection",
            "Content pillars tied to business goals",
            "Competitor and category content audit",
            "Hook and angle library",
            "Monthly campaign themes",
            "Posting cadence per channel",
          ],
        },
        {
          title: "AI content engine",
          description: "The production system that removes the blank page.",
          items: [
            "Brand-locked prompt library",
            "Post, caption, script, and carousel generation",
            "Repurposing pipeline from long-form content",
            "Branded creative templates",
            "Image and video asset generation workflow",
            "Tone and compliance checking",
          ],
        },
        {
          title: "Publishing automation",
          description: "From draft to live without manual copy-paste.",
          items: [
            "Central content calendar",
            "Approval routing with named reviewers",
            "Scheduled multi-channel publishing",
            "Per-platform format adaptation",
            "Comment and DM triage workflows",
            "UGC and community response templates",
          ],
        },
        {
          title: "Performance and iteration",
          description: "Closing the loop between content and revenue.",
          items: [
            "Cross-channel analytics dashboard",
            "UTM and attribution setup",
            "A/B testing framework for hooks and formats",
            "Monthly performance report",
            "Content scoring and re-run of winners",
            "Growth playbook updated each quarter",
          ],
        },
      ],
    },
    audience: {
      heading: "Who this is for",
      intro: "This works best when there is a real business behind the content and something worth saying.",
      items: [
        {
          title: "Ecommerce and D2C brands",
          description: "You need constant creative output across channels to keep acquisition costs sane.",
          signals: [
            "Paid acquisition costs climbing",
            "Creative fatigue on ads",
            "No organic content engine",
          ],
        },
        {
          title: "B2B and SaaS teams",
          description: "Founder-led content works but does not scale past the founder's calendar.",
          signals: [
            "LinkedIn is your best channel and least consistent",
            "No repurposing from webinars or blogs",
            "Sales asks for content that does not exist",
          ],
        },
        {
          title: "Agencies and lean marketing teams",
          description: "You need output per head to go up without headcount going up with it.",
          signals: [
            "One person doing strategy, copy, and design",
            "Client or stakeholder reporting done manually",
            "Approvals happening over chat threads",
          ],
        },
      ],
    },
    process: {
      heading: "How we deliver",
      intro: "Four weeks to a running system, then a handover that actually sticks.",
      steps: [
        {
          phase: "Audit and strategy",
          duration: "1 week",
          description: "We review your current content, your competitors, and your commercial goals before touching a prompt.",
          details: [
            "Existing channel and performance audit",
            "Audience and platform prioritisation",
            "Content pillars and campaign themes",
            "Success metrics agreed",
          ],
        },
        {
          phase: "Engine build",
          duration: "1-2 weeks",
          description: "The prompt system, templates, and creative workflow, tested against real posts your team judges.",
          details: [
            "Brand voice encoded into prompts",
            "Template design per format",
            "First batch generated and reviewed",
            "Revisions until output passes your bar",
          ],
        },
        {
          phase: "Automation setup",
          duration: "1 week",
          description: "Calendar, approvals, scheduling, and tracking wired together across your channels.",
          details: [
            "Channel connections and permissions",
            "Approval workflow configuration",
            "Scheduling rules and posting windows",
            "UTM and analytics instrumentation",
          ],
        },
        {
          phase: "Launch and training",
          duration: "1 week + ongoing",
          description: "First month goes live while we train your team to run and extend the system themselves.",
          details: [
            "30 days of content queued",
            "Live training and documentation",
            "First performance review",
            "Growth playbook handover",
          ],
        },
      ],
    },
    deliverables: {
      heading: "What you receive",
      intro: "A working system plus the documentation to keep it running when the person who set it up leaves.",
      groups: [
        {
          title: "Strategy",
          items: [
            "Channel strategy document",
            "Content pillars and campaign themes",
            "Hook and angle library",
            "Posting cadence plan",
          ],
        },
        {
          title: "Content system",
          items: [
            "Brand-locked prompt library",
            "Branded creative templates",
            "Repurposing workflow",
            "First 30 days of content",
          ],
        },
        {
          title: "Automation",
          items: [
            "Configured content calendar",
            "Approval and review workflow",
            "Multi-channel scheduling",
            "Comment and DM triage setup",
          ],
        },
        {
          title: "Measurement",
          items: [
            "Cross-channel analytics dashboard",
            "UTM and attribution configuration",
            "Monthly reporting template",
            "Growth playbook and training recordings",
          ],
        },
      ],
    },
    stack: {
      heading: "Tools we set up",
      intro: "We work with what you already pay for where possible and recommend replacements only when they cost you output.",
      groups: [
        { label: "AI", items: ["Claude", "GPT", "Midjourney", "Custom prompt systems"] },
        { label: "Publishing", items: ["Buffer", "Later", "Metricool", "Native schedulers"] },
        { label: "Creative", items: ["Figma", "Canva templates", "CapCut", "Adobe Express"] },
        { label: "Analytics", items: ["GA4", "Native insights", "Looker Studio", "UTM framework"] },
      ],
    },
    engagements: {
      heading: "Ways to work with us",
      intro: "Build it and own it, or have us run it while your team learns.",
      options: [
        {
          name: "Content Engine Setup",
          bestFor: "Teams with a marketer who just needs the system and templates.",
          includes: [
            "Strategy and content pillars",
            "Brand-locked prompt library",
            "Creative templates",
            "Training session and documentation",
          ],
          timeline: "2-3 weeks",
        },
        {
          name: "Full System Install",
          bestFor: "Companies that want strategy, engine, automation, and reporting all live.",
          includes: [
            "Everything in Content Engine Setup",
            "Publishing and approval automation",
            "Analytics and attribution setup",
            "First 30 days of content produced",
          ],
          timeline: "4-5 weeks",
        },
        {
          name: "Managed Growth",
          bestFor: "Brands that want the output without running it internally.",
          includes: [
            "Monthly content production and publishing",
            "Community and comment management",
            "Paid amplification of top performers",
            "Monthly performance and strategy review",
          ],
          timeline: "Monthly, 3-month minimum",
        },
      ],
    },
    relatedCaseStudySlugs: [
      "mens-confidence-wellness-commerce-store",
      "haarshe-cross-channel-commerce",
      "zaru-fragrance-commerce-platform",
    ],
    faqs: [
      {
        question: "Will the content actually sound like us?",
        answer:
          "That is the whole point of the engine build phase. We encode your positioning, vocabulary, proof points, and things you would never say into the prompt system, then iterate on real batches until your team stops editing them heavily.",
      },
      {
        question: "Do you post for us or do we?",
        answer:
          "Either. The Setup and Full System options hand the running system to your team with training. Managed Growth means we produce and publish while you approve.",
      },
      {
        question: "How long before we see results?",
        answer:
          "Output improves in week one. Engagement usually moves within four to six weeks, and traffic or lead attribution becomes readable around the second or third month once there is enough volume to compare themes.",
      },
      {
        question: "What if AI-generated content hurts our reach?",
        answer:
          "Platforms penalise low-effort spam, not AI assistance. Every post goes through human approval, formats are adapted per platform, and the strategy is built on original proof points from your business rather than recycled generic advice.",
      },
      {
        question: "Can you work with our existing agency?",
        answer:
          "Yes. We often build the system and train an in-house team or agency to operate it, then stay available for quarterly tuning as platforms and models change.",
      },
    ],
    cta: {
      title: "Ready to publish consistently without the grind?",
      description:
        "We will audit your current channels and show you what a running AI content system would look like for your brand.",
      buttonLabel: "Book a social media consultation",
    },
  },
  "mvp-development": {
    slug: "mvp-development",
    metaTitle: "MVP Development Services | Skord Labs",
    metaDescription:
      "Launch a production-ready MVP in 6-8 weeks. Product strategy, rapid build, real user validation, and an architecture that survives your first thousand users.",
    keywords: ["MVP development", "minimum viable product", "rapid product development", "startup MVP Pakistan"],
    eyebrow: "Services / MVP Development",
    titleLead: "Launch your MVP and",
    titleGradient: "validate your idea fast",
    intro:
      "An MVP is not a cheap version of your product. It is the smallest thing that answers the question your business depends on. We help you find that question, build only what answers it, and ship it to real users in weeks.",
    heroHighlights: [
      "Scoped around one testable assumption",
      "Production-grade code, not throwaway prototype",
      "Analytics instrumented from day one",
      "Architected so v2 is an extension, not a rewrite",
    ],
    glow: "from-orange-500/20 to-pink-500/20",
    primaryCta: { label: "Start your MVP", href: "/contact" },
    secondaryCta: { label: "View success stories", href: "/case-studies" },
    metrics: [
      { value: "6-8 weeks", label: "Average MVP delivery" },
      { value: "40%", label: "Cost vs a full build" },
      { value: "2 weeks", label: "Sprint demo cadence" },
      { value: "100%", label: "Code and IP transferred" },
    ],
    challenges: {
      heading: "How MVPs go wrong",
      intro:
        "We have rescued enough half-finished builds to recognise the patterns early. Most of the money is lost before a line of code is written.",
      items: [
        {
          problem: "The scope quietly becomes the full product before launch.",
          solution: "A written launch definition tied to one validation question, with a parked backlog for everything else.",
        },
        {
          problem: "Six months in with nothing users can touch.",
          solution: "Two-week sprints with a working demo at the end of each, and a hard date for first real users.",
        },
        {
          problem: "The MVP works but has to be thrown away to scale.",
          solution: "Standard production architecture from the start - proper auth, database design, and deployment pipeline.",
        },
        {
          problem: "It launches with no instrumentation, so nobody learns anything.",
          solution: "Event tracking, funnels, and a defined success metric shipped with the first release.",
        },
        {
          problem: "The agency disappears at launch and the codebase is undocumented.",
          solution: "Documented handover, repository ownership, and a support window while your team takes over.",
        },
      ],
    },
    benefits: {
      heading: "How you benefit from working with us",
      intro:
        "We have built products for our own portfolio as well as for clients, so we optimise for what happens after launch, not just the launch.",
      items: [
        {
          icon: Clock,
          title: "Weeks to market, not quarters",
          description:
            "A shared component library, standard architecture, and tight scope discipline get you in front of users while the opportunity is still open.",
          proof: "Typical first release in 6-8 weeks",
        },
        {
          icon: DollarSign,
          title: "Validation before big spend",
          description:
            "You risk a fraction of a full build to learn whether the market wants it, and you learn it from behaviour rather than surveys.",
          proof: "Around 40% of a full-product budget",
        },
        {
          icon: Target,
          title: "Ruthless scope, on purpose",
          description:
            "We will argue against features. Every one we cut is a week you get back and a variable removed from the test.",
          proof: "Launch scope written down and signed off",
        },
        {
          icon: TrendingUp,
          title: "Foundations that survive growth",
          description:
            "Lean does not mean fragile. The MVP ships with real auth, tested code, and infrastructure that handles your first serious traffic.",
          proof: "Same architecture standards as our enterprise builds",
        },
      ],
    },
    capabilities: {
      heading: "What we build into an MVP",
      intro: "Not everything below lands in every MVP. We choose based on the assumption you are testing.",
      groups: [
        {
          title: "Product definition",
          description: "Deciding what not to build is most of the work.",
          items: [
            "Assumption mapping and risk ranking",
            "Competitor and alternative analysis",
            "User personas and journey mapping",
            "Feature prioritisation with a cut list",
            "Success metrics and launch criteria",
            "Roadmap for post-validation phases",
          ],
        },
        {
          title: "Design and UX",
          description: "Enough design to be credible and testable.",
          items: [
            "Wireframes and user flows",
            "High-fidelity screens for core journeys",
            "Design system based on shared components",
            "Responsive and mobile-first layouts",
            "Onboarding and empty-state design",
            "Clickable prototype for early feedback",
          ],
        },
        {
          title: "Core engineering",
          description: "The product itself, built to production standards.",
          items: [
            "Web application and responsive frontend",
            "API and database design",
            "Authentication and role management",
            "Payments and subscription billing",
            "Third-party integrations",
            "Admin dashboard for your team",
          ],
        },
        {
          title: "AI features",
          description: "Where AI is part of the value proposition rather than decoration.",
          items: [
            "Assistant and chat interfaces",
            "Document and data extraction",
            "Recommendation and matching logic",
            "Retrieval over your content",
            "Guardrails and cost budgeting",
            "Evaluation before user exposure",
          ],
        },
        {
          title: "Launch infrastructure",
          description: "Everything needed to run it in the real world.",
          items: [
            "Cloud deployment and CI/CD pipeline",
            "Staging and production environments",
            "Error tracking and uptime monitoring",
            "Backups and recovery procedures",
            "Security basics and rate limiting",
            "Custom domain and email setup",
          ],
        },
        {
          title: "Learning loop",
          description: "The part most MVPs skip and then regret.",
          items: [
            "Product analytics and event tracking",
            "Funnel and activation dashboards",
            "In-app feedback capture",
            "Session recording for key flows",
            "Weekly metric review with your team",
            "Iteration backlog from real usage",
          ],
        },
      ],
    },
    audience: {
      heading: "Who this is for",
      intro: "The common thread is a decision waiting on evidence.",
      items: [
        {
          title: "Founders pre-funding",
          description: "You need something real to show investors and early users, built fast enough to matter.",
          signals: [
            "Pitching on slides with no product",
            "Runway measured in months",
            "Need traction before a raise",
          ],
        },
        {
          title: "Companies testing a new line of business",
          description: "An internal idea that deserves a real test but not yet a permanent team.",
          signals: [
            "Internal engineering fully committed elsewhere",
            "Board wants evidence before headcount",
            "Adjacent market you have not served before",
          ],
        },
        {
          title: "Teams that need to rescue a stalled build",
          description: "Something exists, it is late, and you need someone to get it shipped.",
          signals: [
            "Previous developer or agency gone",
            "Scope grew past the original plan",
            "No clear path from current state to launch",
          ],
        },
      ],
    },
    process: {
      heading: "Our MVP process",
      intro: "From first workshop to real users in under eight weeks, with a demo every two weeks so nothing surprises you.",
      steps: [
        {
          phase: "Discovery workshop",
          duration: "3-5 days",
          description: "We pin down the assumption worth testing and cut the scope to what answers it.",
          details: [
            "Vision, market, and competitor review",
            "Assumption and risk mapping",
            "Feature prioritisation and cut list",
            "Written launch definition and success metric",
          ],
        },
        {
          phase: "UX and design sprint",
          duration: "1 week",
          description: "Flows and screens for the core journeys, reviewed as a clickable prototype before build starts.",
          details: [
            "User flows and wireframes",
            "High-fidelity core screens",
            "Component library setup",
            "Prototype walkthrough and sign-off",
          ],
        },
        {
          phase: "Agile development",
          duration: "4-8 weeks",
          description: "Two-week sprints, working software at the end of each, with your feedback shaping the next one.",
          details: [
            "Sprint planning with visible priorities",
            "Fortnightly demo on a live environment",
            "Automated tests on critical paths",
            "Continuous deployment to staging",
          ],
        },
        {
          phase: "Launch and instrument",
          duration: "1 week",
          description: "Production release with monitoring, analytics, and a plan for the first cohort of users.",
          details: [
            "Production deployment and domain setup",
            "Analytics and funnel instrumentation",
            "Error tracking and alerting",
            "Onboarding flow for first users",
          ],
        },
        {
          phase: "Learn and iterate",
          duration: "Ongoing",
          description: "We watch real usage with you and turn it into a prioritised next phase.",
          details: [
            "Weekly metric and feedback review",
            "Bug fixes during the support window",
            "Iteration backlog built from behaviour",
            "Scale-up plan or pivot recommendation",
          ],
        },
      ],
    },
    deliverables: {
      heading: "What you receive",
      intro: "You own everything from day one - repositories, infrastructure accounts, designs, and documentation.",
      groups: [
        {
          title: "Product strategy",
          items: [
            "Market and competitor analysis",
            "Personas and journey maps",
            "Feature prioritisation matrix",
            "Post-launch roadmap",
          ],
        },
        {
          title: "Technical delivery",
          items: [
            "Production-ready codebase",
            "Cloud infrastructure and CI/CD",
            "API documentation",
            "Admin dashboard",
          ],
        },
        {
          title: "Quality assurance",
          items: [
            "Automated tests on critical paths",
            "Performance and load checks",
            "Security review and hardening",
            "Cross-device responsiveness",
          ],
        },
        {
          title: "Post-launch support",
          items: [
            "Bug fixes during the support window",
            "Analytics and funnel dashboards",
            "Feedback capture in-product",
            "Iteration planning session",
          ],
        },
      ],
    },
    stack: {
      heading: "What we build with",
      intro: "Boring, proven technology chosen so any competent developer can pick it up after us.",
      groups: [
        { label: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "React Native"] },
        { label: "Backend", items: ["Node.js", "Python", "FastAPI", "REST", "GraphQL"] },
        { label: "Data", items: ["Postgres", "Supabase", "Redis", "Prisma"] },
        { label: "Platform", items: ["Vercel", "AWS", "Stripe", "Sentry", "PostHog"] },
      ],
    },
    engagements: {
      heading: "Ways to work with us",
      intro: "Pick the level of certainty you need before committing to a full build.",
      options: [
        {
          name: "Product Sprint",
          bestFor: "Founders who need clarity and something to show before committing budget.",
          includes: [
            "Discovery workshop",
            "Scope definition and cut list",
            "Clickable prototype",
            "Build estimate and roadmap",
          ],
          timeline: "1-2 weeks",
        },
        {
          name: "MVP Build",
          bestFor: "Taking a validated concept to real users in production.",
          includes: [
            "Full design and development",
            "Production launch and infrastructure",
            "Analytics instrumentation",
            "Support window and handover",
          ],
          timeline: "6-10 weeks",
        },
        {
          name: "Build and Scale Partnership",
          bestFor: "Post-launch teams iterating toward product-market fit.",
          includes: [
            "Dedicated squad in ongoing sprints",
            "Continuous delivery and monitoring",
            "Data-led roadmap prioritisation",
            "Scale-up architecture as usage grows",
          ],
          timeline: "Monthly, 3-month minimum",
        },
      ],
    },
    relatedCaseStudySlugs: [
      "eazstart-startup-operating-system",
      "finwise-personal-finance-platform",
      "boxlytics-mechanics-ai-packaging-platform",
    ],
    faqs: [
      {
        question: "What does an MVP cost?",
        answer:
          "It depends entirely on scope, which is why we run the discovery workshop first. A fixed estimate comes out of that week with the scope written down, so the number does not move unless you decide to change what is being built.",
      },
      {
        question: "Who owns the code and the accounts?",
        answer:
          "You do, from the first commit. Repositories, cloud accounts, domains, and design files are in your name throughout. There is no lock-in and no handover fee.",
      },
      {
        question: "Can we keep working with you after launch?",
        answer:
          "Most clients do, through the Build and Scale partnership. But the MVP is delivered documented and handover-ready either way, so continuing with us is a choice rather than a necessity.",
      },
      {
        question: "What if we need to pivot mid-build?",
        answer:
          "That is a normal outcome of learning something real, and the two-week sprint cadence exists to make it cheap. We re-plan from the current sprint boundary rather than restarting, and we will tell you what the change costs before you commit.",
      },
      {
        question: "Do you sign NDAs?",
        answer:
          "Yes, before any detailed discussion of your idea. We work under NDA as standard and can sign yours or provide ours.",
      },
    ],
    cta: {
      title: "Ready to build your MVP?",
      description:
        "Tell us the assumption your business depends on. We will scope the smallest build that tests it and give you a date.",
      buttonLabel: "Schedule a call",
    },
  },
  "custom-development": {
    slug: "custom-development",
    metaTitle: "Custom Software Development Services | Skord Labs",
    metaDescription:
      "Full-stack web and mobile applications, real-time systems, and complex integrations built to production standards by Skord Labs.",
    keywords: ["custom software development", "web application development", "mobile app development", "full-stack development"],
    eyebrow: "Services / Custom Development",
    titleLead: "Bring your vision to life",
    titleGradient: "with software built to last",
    intro:
      "Off-the-shelf software forces your business to work the way the vendor imagined. Custom software does the opposite. We build web and mobile applications around how your business actually runs - and we build them so the next team can maintain them.",
    heroHighlights: [
      "Web, mobile, and real-time systems",
      "Tested, documented, and handover-ready",
      "Built on your cloud accounts",
      "Architecture reviewed for the next 10x",
    ],
    glow: "from-blue-500/20 to-cyan-500/20",
    primaryCta: { label: "Start your project", href: "/contact" },
    secondaryCta: { label: "See what we have built", href: "/case-studies" },
    metrics: [
      { value: "50+", label: "Applications shipped" },
      { value: "99.9%", label: "Uptime target" },
      { value: "2 weeks", label: "Sprint cadence" },
      { value: "100%", label: "Source code ownership" },
    ],
    challenges: {
      heading: "What we get called in to fix",
      intro:
        "Roughly half our custom development work starts as a rescue. The causes repeat often enough to be predictable.",
      items: [
        {
          problem: "The build is late and no one can say how late, because there is no working software to look at.",
          solution: "Fortnightly demos on a live staging environment, so progress is observable rather than reported.",
        },
        {
          problem: "The app works on the developer's machine and breaks in production.",
          solution: "Environment parity, CI/CD pipelines, and automated tests running before anything reaches production.",
        },
        {
          problem: "One developer knows how everything works and they just resigned.",
          solution: "Documented architecture, code review on every change, and at least two engineers across every system.",
        },
        {
          problem: "Performance collapses once real data volumes arrive.",
          solution: "Load testing against realistic data, query profiling, and caching designed in rather than patched later.",
        },
        {
          problem: "Integrations fail silently and nobody notices for days.",
          solution: "Health checks, retries, dead-letter queues, and alerting on every external dependency.",
        },
      ],
    },
    benefits: {
      heading: "How you benefit from working with us",
      intro: "We build software we would be willing to inherit, because often we are the ones inheriting it.",
      items: [
        {
          icon: Braces,
          title: "Software shaped to your process",
          description:
            "No forcing your operations into someone else's product model, and no paying per seat forever for features you never use.",
          proof: "Built around your workflows, owned outright",
        },
        {
          icon: Zap,
          title: "Performance treated as a requirement",
          description:
            "Load and query behaviour are tested against realistic volumes before launch, not discovered by your customers.",
          proof: "Load tested against projected peak traffic",
        },
        {
          icon: Users,
          title: "No single point of failure",
          description:
            "Every system has more than one engineer who understands it, with documentation and review as standard practice.",
          proof: "Reviewed code and written architecture docs",
        },
        {
          icon: ShieldCheck,
          title: "Handover-ready by default",
          description:
            "Repositories, infrastructure, and documentation live in your accounts from the start, so you are never trapped with us.",
          proof: "Full IP transfer with onboarding for your team",
        },
      ],
    },
    capabilities: {
      heading: "What we build",
      intro: "Product engineering across web, mobile, and the systems that connect them.",
      groups: [
        {
          title: "Web applications",
          description: "The core of most engagements.",
          items: [
            "Full-stack SaaS and internal platforms",
            "Multi-tenant architecture and roles",
            "Progressive web apps with offline support",
            "Complex forms, workflows, and approvals",
            "Data-heavy dashboards and reporting",
            "Accessibility and responsive design",
          ],
        },
        {
          title: "Mobile applications",
          description: "Native-quality apps without doubling the codebase.",
          items: [
            "React Native cross-platform apps",
            "Push notifications and deep linking",
            "Offline-first sync strategies",
            "Camera, location, and device integrations",
            "App Store and Play Store release management",
            "Over-the-air update pipelines",
          ],
        },
        {
          title: "Real-time systems",
          description: "When state has to be live for everyone at once.",
          items: [
            "WebSocket and event-driven architecture",
            "Collaborative editing and presence",
            "Live dashboards and tickers",
            "Chat and notification infrastructure",
            "Queue-backed background processing",
            "Conflict resolution strategies",
          ],
        },
        {
          title: "APIs and integrations",
          description: "Making your systems talk reliably.",
          items: [
            "REST and GraphQL API design",
            "Third-party integrations with retries and backoff",
            "Webhook infrastructure and replay",
            "Payment, shipping, and ERP connections",
            "Legacy system adapters",
            "Public API documentation and SDKs",
          ],
        },
        {
          title: "Data and infrastructure",
          description: "The layer everything depends on.",
          items: [
            "Database schema design and migrations",
            "Caching and query optimisation",
            "Cloud architecture and autoscaling",
            "CI/CD pipelines and environments",
            "Monitoring, logging, and alerting",
            "Backups and disaster recovery",
          ],
        },
        {
          title: "Quality and security",
          description: "Non-negotiable on every build.",
          items: [
            "Automated test suites on critical paths",
            "Authentication, sessions, and permissions",
            "Input validation and injection defence",
            "Encryption at rest and in transit",
            "Dependency and vulnerability scanning",
            "Audit logging for sensitive actions",
          ],
        },
      ],
    },
    audience: {
      heading: "Who this is for",
      intro: "Custom is the right answer when the software is close to the core of how you make money.",
      items: [
        {
          title: "Businesses outgrowing spreadsheets and SaaS",
          description: "Your process works but is held together by manual steps and tools that were never meant to connect.",
          signals: [
            "Critical data lives in spreadsheets",
            "Staff copy data between systems daily",
            "SaaS subscriptions cost more than a build would",
          ],
        },
        {
          title: "Product companies needing engineering capacity",
          description: "You have a roadmap and not enough engineers to deliver it this year.",
          signals: [
            "Hiring pipeline is too slow",
            "Roadmap slipping quarter over quarter",
            "Need a squad, not individual contractors",
          ],
        },
        {
          title: "Teams rescuing an existing codebase",
          description: "Something is live, fragile, and expensive to change, and you need it stabilised.",
          signals: [
            "Frequent production incidents",
            "Original developers unavailable",
            "Simple changes take weeks",
          ],
        },
      ],
    },
    process: {
      heading: "How we work",
      intro: "Transparent sprints, working software every two weeks, and no surprises at the end.",
      steps: [
        {
          phase: "Technical discovery",
          duration: "1-2 weeks",
          description: "We understand the domain, audit what exists, and design the architecture before estimating.",
          details: [
            "Requirements and domain workshops",
            "Existing system and data audit",
            "Architecture and technology decisions",
            "Estimate, risks, and delivery plan",
          ],
        },
        {
          phase: "Design and prototyping",
          duration: "1-3 weeks",
          description: "Interface design and technical spikes on the risky parts before full build begins.",
          details: [
            "User flows and interface design",
            "Design system and component library",
            "Technical spikes on unknowns",
            "Data model and API contracts",
          ],
        },
        {
          phase: "Sprint delivery",
          duration: "6-16 weeks",
          description: "Two-week sprints with a demo, a deployable build, and updated documentation at the end of each.",
          details: [
            "Sprint planning with visible backlog",
            "Code review on every change",
            "Automated testing and CI",
            "Fortnightly demo and re-prioritisation",
          ],
        },
        {
          phase: "Hardening and launch",
          duration: "1-2 weeks",
          description: "Performance, security, and reliability work before real users arrive.",
          details: [
            "Load and stress testing",
            "Security review and penetration checks",
            "Monitoring and alerting configuration",
            "Production release and rollback plan",
          ],
        },
        {
          phase: "Support and evolution",
          duration: "Ongoing",
          description: "We stay available while your team takes ownership, or keep building the next phase.",
          details: [
            "Documentation and onboarding sessions",
            "Defined support window and SLA",
            "Dependency and security updates",
            "Roadmap for the next phase",
          ],
        },
      ],
    },
    deliverables: {
      heading: "What you receive",
      intro: "A working system and everything required to run it without calling us.",
      groups: [
        {
          title: "The application",
          items: [
            "Production web or mobile application",
            "Admin and internal tooling",
            "APIs and integrations",
            "Design system and source files",
          ],
        },
        {
          title: "Engineering assets",
          items: [
            "Full source code in your repositories",
            "CI/CD pipelines and environments",
            "Automated test suite",
            "Database schema and migrations",
          ],
        },
        {
          title: "Operations",
          items: [
            "Monitoring and alerting setup",
            "Backup and recovery procedures",
            "Incident runbook",
            "Performance and load test results",
          ],
        },
        {
          title: "Documentation",
          items: [
            "Architecture and decision records",
            "API reference",
            "Deployment and environment guide",
            "Developer onboarding walkthrough",
          ],
        },
      ],
    },
    stack: {
      heading: "What we build with",
      intro: "Mainstream, well-supported technology so your hiring pool stays wide.",
      groups: [
        { label: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "React Native"] },
        { label: "Backend", items: ["Node.js", "Python", "FastAPI", "NestJS", "GraphQL"] },
        { label: "Data", items: ["Postgres", "MongoDB", "Redis", "Prisma", "Elasticsearch"] },
        { label: "Infrastructure", items: ["AWS", "Vercel", "Docker", "GitHub Actions", "Grafana"] },
      ],
    },
    engagements: {
      heading: "Ways to work with us",
      intro: "Fixed scope where requirements are clear, a dedicated squad where they will keep evolving.",
      options: [
        {
          name: "Technical Discovery",
          bestFor: "Projects that need architecture and a credible estimate before budget approval.",
          includes: [
            "Requirements and domain workshops",
            "Architecture design document",
            "Risk register and mitigation plan",
            "Phased estimate and delivery plan",
          ],
          timeline: "1-2 weeks",
        },
        {
          name: "Fixed-Scope Build",
          bestFor: "Well-defined applications with agreed requirements.",
          includes: [
            "Full design and development",
            "Testing, hardening, and launch",
            "Documentation and handover",
            "Post-launch support window",
          ],
          timeline: "8-20 weeks",
        },
        {
          name: "Dedicated Squad",
          bestFor: "Ongoing roadmaps where priorities shift and capacity is the constraint.",
          includes: [
            "Engineers, QA, and design in your sprints",
            "Your tools, your ceremonies",
            "Continuous delivery and monitoring",
            "Scale team size up or down monthly",
          ],
          timeline: "Monthly, 3-month minimum",
        },
      ],
    },
    relatedCaseStudySlugs: [
      "findimoto-automotive-marketplace",
      "boxlytics-mechanics-ai-packaging-platform",
      "solar-express-end-to-end-commerce-system",
    ],
    faqs: [
      {
        question: "Do you take over existing codebases?",
        answer:
          "Regularly. We start with a code and infrastructure audit that reports honestly on what is salvageable, what needs replacing, and what it costs either way, before committing to ongoing work.",
      },
      {
        question: "How do you handle changing requirements?",
        answer:
          "Fixed-scope projects have a written scope and a change process with costs attached. Squad engagements re-prioritise every sprint at no extra cost, which is usually the better fit when the product is still evolving.",
      },
      {
        question: "Who owns the intellectual property?",
        answer:
          "You do, entirely. Code sits in your repositories and infrastructure runs in your cloud accounts from the first day of the project.",
      },
      {
        question: "What happens if we want to move to an in-house team?",
        answer:
          "The build is documented for exactly that. We run onboarding sessions for your new engineers, stay available for questions during a transition window, and hand over cleanly without penalties.",
      },
      {
        question: "Can you work with our existing engineers?",
        answer:
          "Yes. Squad engagements often run inside the client's own sprints, standups, and code review process, with our engineers as additional capacity rather than a separate team.",
      },
    ],
    cta: {
      title: "Ready to build something custom?",
      description:
        "Bring us the requirements, the mess, or just the problem. We will tell you what it takes to build it properly.",
      buttonLabel: "Schedule a technical call",
    },
  },
  "ecommerce-solutions": {
    slug: "ecommerce-solutions",
    metaTitle: "Ecommerce Development & Solutions | Skord Labs",
    metaDescription:
      "Headless storefronts, Shopify builds, payment integration, inventory systems, and conversion optimisation - ecommerce engineering that ships and scales.",
    keywords: ["ecommerce development", "Shopify development", "headless commerce", "online store development", "payment integration"],
    eyebrow: "Services / Ecommerce Solutions",
    titleLead: "Stores that sell",
    titleGradient: "and operations that keep up",
    intro:
      "A store is only half the job. We build the storefront customers see and the operations layer behind it - inventory, fulfilment, channels, and reporting - so growth does not turn into a spreadsheet crisis.",
    heroHighlights: [
      "Shopify, headless, or fully custom",
      "Local and international payment gateways",
      "Inventory and fulfilment operations included",
      "Conversion tracking wired in from launch",
    ],
    glow: "from-emerald-500/20 to-teal-500/20",
    primaryCta: { label: "Start your store project", href: "/contact" },
    secondaryCta: { label: "See commerce case studies", href: "/case-studies" },
    metrics: [
      { value: "20+", label: "Stores launched" },
      { value: "<2s", label: "Target page load" },
      { value: "5+", label: "Sales channels supported" },
      { value: "24/7", label: "Order flow monitoring" },
    ],
    challenges: {
      heading: "Where ecommerce businesses lose money",
      intro:
        "The leaks are rarely where owners expect. These are the ones we find most often when we audit a store.",
      items: [
        {
          problem: "Mobile pages take five seconds to load and half the traffic leaves first.",
          solution: "Performance budgets, image optimisation, and Core Web Vitals treated as launch criteria.",
        },
        {
          problem: "Checkout drops customers at the payment step, especially on local methods.",
          solution: "Multiple gateways, saved payment methods, wallet support, and a checkout tested on real devices.",
        },
        {
          problem: "Stock counts differ between the website, the warehouse, and the marketplace listings.",
          solution: "One inventory source of truth syncing to every channel with reconciliation reporting.",
        },
        {
          problem: "Orders are processed by hand and mistakes scale with volume.",
          solution: "Automated fulfilment routing, label generation, and exception queues for the edge cases.",
        },
        {
          problem: "Ad spend cannot be attributed because tracking broke months ago.",
          solution: "Server-side tracking, clean event schema, and dashboards validated against actual orders.",
        },
      ],
    },
    benefits: {
      heading: "How you benefit from working with us",
      intro: "We run commerce operations ourselves as well as building them, so we design for the warehouse as much as the homepage.",
      items: [
        {
          icon: ShoppingCart,
          title: "The right platform for your stage",
          description:
            "Shopify when speed matters, headless when you need control, custom when your model does not fit either. We recommend based on your economics, not our preference.",
          proof: "Platform decision documented with trade-offs",
        },
        {
          icon: CreditCard,
          title: "Checkout that converts locally",
          description:
            "Local gateways, wallets, cash-on-delivery workflows, and currency handling for the markets you actually sell in.",
          proof: "Stripe, PayPal, and local Pakistani gateways integrated",
        },
        {
          icon: Boxes,
          title: "Operations that survive a good month",
          description:
            "Inventory, fulfilment, returns, and multi-channel sync built so a spike in orders is good news rather than a fire.",
          proof: "One stock source of truth across all channels",
        },
        {
          icon: LineChart,
          title: "Numbers you can act on",
          description:
            "Clean tracking, cohort reporting, and abandoned-cart insight so marketing spend is a decision rather than a guess.",
          proof: "Server-side tracking validated against real orders",
        },
      ],
    },
    capabilities: {
      heading: "What we build",
      intro: "Storefront, backend, and the channels in between.",
      groups: [
        {
          title: "Storefront engineering",
          description: "What the customer experiences.",
          items: [
            "Shopify theme and app development",
            "Headless storefronts on Next.js",
            "Custom commerce platforms",
            "Product discovery, search, and filtering",
            "Bundles, subscriptions, and pre-orders",
            "Performance and Core Web Vitals tuning",
          ],
        },
        {
          title: "Checkout and payments",
          description: "The step where money is won or lost.",
          items: [
            "Stripe, PayPal, and local gateway integration",
            "Cash-on-delivery and partial payment flows",
            "Multi-currency and tax configuration",
            "One-page and express checkout",
            "Fraud screening and 3D Secure",
            "PCI-aware implementation practices",
          ],
        },
        {
          title: "Inventory and fulfilment",
          description: "The operations layer behind the orders.",
          items: [
            "Real-time stock tracking across locations",
            "Multi-warehouse and reservation logic",
            "Automated reorder points and alerts",
            "Shipping rate and label integration",
            "Returns, exchanges, and refund workflows",
            "Supplier and purchase order management",
          ],
        },
        {
          title: "Multi-channel selling",
          description: "Selling everywhere without doubling the work.",
          items: [
            "TikTok Shop and marketplace channels",
            "Instagram and Facebook shopping",
            "Wholesale and B2B pricing tiers",
            "Marketplace listing synchronisation",
            "Unified order inbox across channels",
            "Channel-level margin reporting",
          ],
        },
        {
          title: "Growth and personalisation",
          description: "Increasing what each visitor is worth.",
          items: [
            "Recommendation and upsell engines",
            "Abandoned cart and lifecycle email flows",
            "Loyalty and referral programmes",
            "A/B testing on product and checkout pages",
            "Reviews and user-generated content",
            "SEO for category and product pages",
          ],
        },
        {
          title: "Analytics and admin",
          description: "Running the business from real numbers.",
          items: [
            "Custom admin dashboards",
            "Server-side and consent-aware tracking",
            "Cohort, LTV, and margin reporting",
            "Abandoned cart and funnel analysis",
            "Role-based staff permissions",
            "Automated daily and weekly reports",
          ],
        },
      ],
    },
    audience: {
      heading: "Who this is for",
      intro: "Different problems at different stages. We work across all three.",
      items: [
        {
          title: "Brands launching their first serious store",
          description: "You have product and demand and need a store that looks credible and handles orders properly.",
          signals: [
            "Selling through DMs or a basic template",
            "No inventory system yet",
            "Payments not fully set up",
          ],
        },
        {
          title: "Growing stores hitting operational limits",
          description: "Sales are fine. Fulfilment, stock accuracy, and reporting are the constraint.",
          signals: [
            "Stock discrepancies between channels",
            "Manual order processing every day",
            "Reporting assembled in spreadsheets",
          ],
        },
        {
          title: "Established retailers going digital or headless",
          description: "You need custom logic, better performance, or a break from platform limitations.",
          signals: [
            "Platform cannot express your pricing rules",
            "Slow storefront hurting paid performance",
            "ERP or POS integration required",
          ],
        },
      ],
    },
    process: {
      heading: "How we deliver",
      intro: "Store, operations, and tracking launched together so nothing is missing on day one.",
      steps: [
        {
          phase: "Commerce discovery",
          duration: "1 week",
          description: "Catalogue, margins, fulfilment reality, and channels mapped before we choose a platform.",
          details: [
            "Catalogue and pricing structure review",
            "Fulfilment and warehouse walkthrough",
            "Channel and payment requirements",
            "Platform recommendation with trade-offs",
          ],
        },
        {
          phase: "Design and merchandising",
          duration: "1-2 weeks",
          description: "Storefront design built around how your products are actually browsed and compared.",
          details: [
            "Category and navigation architecture",
            "Product page and PDP design",
            "Checkout flow design",
            "Mobile-first responsive layouts",
          ],
        },
        {
          phase: "Build and integrate",
          duration: "4-10 weeks",
          description: "Storefront, payments, inventory, and channel connections built and tested against real data.",
          details: [
            "Storefront and theme development",
            "Payment and shipping integration",
            "Inventory and ERP synchronisation",
            "Data migration from existing store",
          ],
        },
        {
          phase: "Test and launch",
          duration: "1-2 weeks",
          description: "Real test orders end to end, performance verification, then a controlled go-live.",
          details: [
            "End-to-end order and refund testing",
            "Performance and Core Web Vitals checks",
            "Tracking validation against real orders",
            "Launch runbook and rollback plan",
          ],
        },
        {
          phase: "Optimise",
          duration: "Ongoing",
          description: "Post-launch we work on conversion rate, average order value, and operational efficiency.",
          details: [
            "Monthly conversion and funnel review",
            "A/B tests on product and checkout",
            "Lifecycle flow expansion",
            "Peak-season readiness planning",
          ],
        },
      ],
    },
    deliverables: {
      heading: "What you receive",
      intro: "A store your marketing team can run and an operations layer your warehouse can trust.",
      groups: [
        {
          title: "Storefront",
          items: [
            "Live store on your chosen platform",
            "Responsive design system",
            "Product and category templates",
            "Optimised checkout flow",
          ],
        },
        {
          title: "Operations",
          items: [
            "Inventory management setup",
            "Fulfilment and shipping automation",
            "Returns and refund workflows",
            "Multi-channel synchronisation",
          ],
        },
        {
          title: "Growth systems",
          items: [
            "Abandoned cart and lifecycle flows",
            "Recommendation and upsell logic",
            "SEO configuration and structured data",
            "Review and loyalty integration",
          ],
        },
        {
          title: "Measurement",
          items: [
            "Server-side tracking implementation",
            "Custom admin and reporting dashboards",
            "Cohort and margin reports",
            "Staff training and documentation",
          ],
        },
      ],
    },
    stack: {
      heading: "What we build with",
      intro: "Platform chosen per business, not per habit.",
      groups: [
        { label: "Platforms", items: ["Shopify", "Next.js Commerce", "Medusa", "Custom builds"] },
        { label: "Payments", items: ["Stripe", "PayPal", "Local gateways", "COD workflows"] },
        { label: "Operations", items: ["ERP integrations", "Shipping APIs", "Warehouse sync", "Custom admin"] },
        { label: "Growth", items: ["Klaviyo", "GA4", "Meta CAPI", "Search Console"] },
      ],
    },
    engagements: {
      heading: "Ways to work with us",
      intro: "From a first storefront to an ongoing commerce engineering partner.",
      options: [
        {
          name: "Store Launch",
          bestFor: "Brands that need a credible store selling properly, fast.",
          includes: [
            "Platform setup and theme build",
            "Payments and shipping configuration",
            "Product catalogue and migration",
            "Tracking and launch support",
          ],
          timeline: "4-6 weeks",
        },
        {
          name: "Commerce Platform Build",
          bestFor: "Custom or headless builds with real operational complexity.",
          includes: [
            "Headless or custom storefront",
            "Inventory and ERP integration",
            "Multi-channel selling setup",
            "Custom admin and reporting",
          ],
          timeline: "10-20 weeks",
        },
        {
          name: "Growth and Operations Retainer",
          bestFor: "Stores optimising conversion and scaling operations continuously.",
          includes: [
            "Monthly CRO experiments",
            "Feature development sprints",
            "Operational automation work",
            "Peak-season readiness and on-call",
          ],
          timeline: "Monthly, 3-month minimum",
        },
      ],
    },
    relatedCaseStudySlugs: [
      "mens-confidence-wellness-commerce-store",
      "solar-express-end-to-end-commerce-system",
      "haarshe-cross-channel-commerce",
    ],
    faqs: [
      {
        question: "Shopify or custom - which should we choose?",
        answer:
          "Shopify if your model is standard and speed to market matters; it handles payments, security, and hosting for you. Custom or headless when your pricing, catalogue logic, or operations cannot be expressed on the platform. We give you the trade-offs with real cost numbers in discovery rather than pushing one answer.",
      },
      {
        question: "Can you integrate with our existing ERP or POS?",
        answer:
          "Yes. Inventory, orders, and customer data sync are a standard part of our commerce builds, including bidirectional flows with legacy systems where an API exists and adapter layers where one does not.",
      },
      {
        question: "Do you handle migrations from another platform?",
        answer:
          "We migrate products, customers, orders, and URLs, with redirects mapped to protect search rankings. Migrations run on a staging store first and go live only after test orders pass end to end.",
      },
      {
        question: "What about local payment methods in Pakistan?",
        answer:
          "We integrate local gateways alongside international ones and build cash-on-delivery workflows with order verification, since COD still drives a large share of conversions in the market.",
      },
      {
        question: "Will our team be able to run the store?",
        answer:
          "Yes. Content, products, and merchandising are editable without a developer, and we run training sessions plus written documentation for your operations and marketing staff at handover.",
      },
    ],
    cta: {
      title: "Ready to build a store that scales?",
      description:
        "Tell us what you sell and where the operations hurt. We will map the store and the systems behind it.",
      buttonLabel: "Book a commerce consultation",
    },
  },
  "management-systems": {
    slug: "management-systems",
    metaTitle: "Custom Software & Management Systems | Skord Labs",
    metaDescription:
      "Internal tools, dashboards, CRM and ERP systems, workflow automation, and data platforms built around how your business actually operates.",
    keywords: ["management systems", "internal tools", "custom ERP", "CRM development", "workflow automation"],
    eyebrow: "Services / Management Systems",
    titleLead: "Run your operations",
    titleGradient: "on software that fits",
    intro:
      "Every growing company reaches the point where spreadsheets, WhatsApp groups, and five disconnected tools stop holding the operation together. We replace that with internal systems built around your actual process - with the permissions, audit trails, and reporting the business needs.",
    heroHighlights: [
      "Built around your workflow, not a vendor template",
      "Role-based permissions and audit logging",
      "Integrated with the tools you already run",
      "Reporting your leadership can trust",
    ],
    glow: "from-sky-500/20 to-indigo-500/20",
    primaryCta: { label: "Map your systems", href: "/contact" },
    secondaryCta: { label: "See operations projects", href: "/case-studies" },
    metrics: [
      { value: "60%", label: "Manual work removed" },
      { value: "8-16 weeks", label: "Typical first release" },
      { value: "100%", label: "Actions audit logged" },
      { value: "1", label: "Source of truth" },
    ],
    challenges: {
      heading: "Symptoms of an operation outgrowing its tools",
      intro:
        "If three or more of these sound familiar, the tooling is now costing more than a build would.",
      items: [
        {
          problem: "The real system of record is a spreadsheet only two people understand.",
          solution: "A proper database with validation, history, and permissions - and the spreadsheet retired deliberately.",
        },
        {
          problem: "Staff re-key the same data into three different systems every day.",
          solution: "Integrations and shared records so data is entered once and flows everywhere it is needed.",
        },
        {
          problem: "Monthly reporting takes a week and the numbers still get argued about.",
          solution: "Automated reporting from a single source with agreed definitions and drill-down to source records.",
        },
        {
          problem: "Nobody can say who approved a change or when it happened.",
          solution: "Full audit logging with user, timestamp, and before-and-after values on every sensitive action.",
        },
        {
          problem: "Off-the-shelf ERP was bought and then half of it was abandoned.",
          solution: "Build only the modules you use, integrate the rest, and stop paying for shelfware.",
        },
      ],
    },
    benefits: {
      heading: "How you benefit from working with us",
      intro:
        "We have built manufacturing, inventory, and multi-store operations systems that run daily. That experience shows up in the details.",
      items: [
        {
          icon: Database,
          title: "One place the numbers come from",
          description:
            "Stock, orders, production, and finance reading from the same records means meetings stop being about whose spreadsheet is right.",
          proof: "Single source of truth across departments",
        },
        {
          icon: Workflow,
          title: "Manual steps designed out",
          description:
            "Approvals, routing, notifications, and recurring reports run themselves, with people involved only where judgement is required.",
          proof: "Typically 60% of repetitive steps automated",
        },
        {
          icon: Lock,
          title: "Control without friction",
          description:
            "Granular roles so staff see exactly what they should, with audit logs that make investigations a query rather than an interrogation.",
          proof: "Role-based access with full action history",
        },
        {
          icon: BarChart3,
          title: "Visibility down to the day",
          description:
            "Dashboards built for the people who make decisions, not generic charts nobody opens after week two.",
          proof: "Daily operational and financial reporting",
        },
      ],
    },
    capabilities: {
      heading: "What we build",
      intro: "Systems assembled from the modules your operation actually needs.",
      groups: [
        {
          title: "Internal tools and dashboards",
          description: "The day-to-day working surface for your team.",
          items: [
            "Operations dashboards by role",
            "Data entry and validation interfaces",
            "Bulk actions and import tooling",
            "Search and advanced filtering",
            "Notification and task queues",
            "Mobile-friendly views for field staff",
          ],
        },
        {
          title: "CRM and sales systems",
          description: "Pipeline and customer data that reflects your process.",
          items: [
            "Custom pipeline stages and rules",
            "Lead capture and assignment logic",
            "Quotation and proposal generation",
            "Activity tracking and follow-up automation",
            "Commission and target reporting",
            "Customer history across departments",
          ],
        },
        {
          title: "ERP and operations",
          description: "The core business processes.",
          items: [
            "Inventory and multi-warehouse stock",
            "Production and batch tracking",
            "Procurement and supplier management",
            "Distribution and delivery workflows",
            "Recovery, receivables, and cash tracking",
            "Cost and margin calculation",
          ],
        },
        {
          title: "Workflow automation",
          description: "Removing the handoffs that slow everything down.",
          items: [
            "Multi-step approval chains",
            "Conditional routing and escalation",
            "Scheduled jobs and recurring tasks",
            "Document generation and e-signature",
            "Alerting on thresholds and exceptions",
            "Cross-system triggers and syncs",
          ],
        },
        {
          title: "Data and reporting",
          description: "Turning operational data into decisions.",
          items: [
            "Reporting warehouse and data models",
            "Executive and departmental dashboards",
            "Scheduled report distribution",
            "Forecasting and trend analysis",
            "Export to Excel and accounting tools",
            "Data quality and reconciliation checks",
          ],
        },
        {
          title: "Integration layer",
          description: "Connecting to what you already run.",
          items: [
            "Accounting and finance system sync",
            "Ecommerce and marketplace connections",
            "Payment and banking integrations",
            "WhatsApp, SMS, and email notifications",
            "Legacy system adapters",
            "Public and partner APIs",
          ],
        },
      ],
    },
    audience: {
      heading: "Who this is for",
      intro: "Operations-led businesses where process complexity is the reason software has to be custom.",
      items: [
        {
          title: "Manufacturers and distributors",
          description: "Production, stock, and distribution tracked across locations and batches.",
          signals: [
            "Batch or lot traceability required",
            "Multiple warehouses or factories",
            "Recovery and receivables tracked manually",
          ],
        },
        {
          title: "Multi-branch and multi-store operators",
          description: "The same process running in several places with no consolidated view.",
          signals: [
            "Each branch reports differently",
            "Stock transfers handled over chat",
            "Consolidation happens monthly at best",
          ],
        },
        {
          title: "Service businesses with complex delivery",
          description: "Projects, jobs, or cases moving through stages with approvals and SLAs attached.",
          signals: [
            "Status tracked in shared documents",
            "SLA breaches discovered after the fact",
            "Billing reconstructed from memory",
          ],
        },
      ],
    },
    process: {
      heading: "How we deliver",
      intro: "We map the real process first - including the informal parts - then build in modules that go live as they finish.",
      steps: [
        {
          phase: "Process mapping",
          duration: "1-2 weeks",
          description: "We sit with the people doing the work and document how the operation actually runs today.",
          details: [
            "On-site or remote process walkthroughs",
            "Current tools and data audit",
            "Pain point and bottleneck ranking",
            "Target process design with owners",
          ],
        },
        {
          phase: "System design",
          duration: "1-2 weeks",
          description: "Data model, roles, and module boundaries agreed before development starts.",
          details: [
            "Data model and entity relationships",
            "Role and permission matrix",
            "Module scope and release order",
            "Integration and migration plan",
          ],
        },
        {
          phase: "Modular build",
          duration: "6-14 weeks",
          description: "Modules built and released in priority order so value arrives before the whole system is finished.",
          details: [
            "Two-week sprints with demos",
            "Module-by-module user testing",
            "Data migration in stages",
            "Automated tests on business rules",
          ],
        },
        {
          phase: "Rollout and training",
          duration: "2-3 weeks",
          description: "Staged adoption department by department, with training and a parallel-run period.",
          details: [
            "Pilot group and feedback loop",
            "Role-specific training sessions",
            "Parallel run against the old process",
            "Cutover plan and rollback option",
          ],
        },
        {
          phase: "Support and expansion",
          duration: "Ongoing",
          description: "We fix, tune, and extend as the operation changes and new modules become worthwhile.",
          details: [
            "Support window with defined response times",
            "Monthly usage and bottleneck review",
            "New modules on the same platform",
            "Handover to internal IT when ready",
          ],
        },
      ],
    },
    deliverables: {
      heading: "What you receive",
      intro: "A system your team is trained on, documented well enough to hand to anyone.",
      groups: [
        {
          title: "The system",
          items: [
            "Web application with role-based access",
            "Operational modules per your scope",
            "Admin configuration console",
            "Mobile-friendly interfaces",
          ],
        },
        {
          title: "Data",
          items: [
            "Migrated historical data",
            "Reporting data model",
            "Reconciliation and quality checks",
            "Export and backup procedures",
          ],
        },
        {
          title: "Governance",
          items: [
            "Permission matrix by role",
            "Audit log of all sensitive actions",
            "Approval workflow configuration",
            "Retention and access policies",
          ],
        },
        {
          title: "Enablement",
          items: [
            "Role-specific user manuals",
            "Recorded training sessions",
            "Administrator documentation",
            "Support and escalation runbook",
          ],
        },
      ],
    },
    stack: {
      heading: "What we build with",
      intro: "Reliable, well-documented technology that your future IT hire will recognise.",
      groups: [
        { label: "Application", items: ["Next.js", "React", "TypeScript", "Node.js", "Python"] },
        { label: "Data", items: ["Postgres", "Redis", "Prisma", "Reporting views"] },
        { label: "Automation", items: ["Job queues", "Webhooks", "Scheduled workers", "Event triggers"] },
        { label: "Operations", items: ["AWS", "Docker", "Grafana", "Automated backups"] },
      ],
    },
    engagements: {
      heading: "Ways to work with us",
      intro: "Most clients start with process mapping, because building the wrong module is the expensive mistake.",
      options: [
        {
          name: "Process and Systems Audit",
          bestFor: "Leadership deciding whether to build, buy, or fix what exists.",
          includes: [
            "End-to-end process mapping",
            "Tooling and data audit",
            "Build vs buy recommendation",
            "Phased plan with costs",
          ],
          timeline: "1-2 weeks",
        },
        {
          name: "Core System Build",
          bestFor: "Replacing spreadsheets and disconnected tools with one operational system.",
          includes: [
            "Priority modules built and released",
            "Data migration and integrations",
            "Permissions and audit setup",
            "Training and staged rollout",
          ],
          timeline: "10-20 weeks",
        },
        {
          name: "Systems Partner",
          bestFor: "Companies expanding the platform as the operation grows.",
          includes: [
            "New modules each quarter",
            "Support with response-time SLA",
            "Performance and data health reviews",
            "Internal team enablement",
          ],
          timeline: "Monthly, 6-month minimum",
        },
      ],
    },
    relatedCaseStudySlugs: [
      "dekord-manufacturing-inventory-platform",
      "universal-ecommerce-admin-portal",
      "solar-express-end-to-end-commerce-system",
    ],
    faqs: [
      {
        question: "Should we build custom or buy an ERP?",
        answer:
          "Buy where your process is standard - accounting is a good example. Build where the process is your competitive advantage or where no vendor supports it without heavy customisation. The audit gives you that split with costs against each option, and we have told clients to buy more than once.",
      },
      {
        question: "How disruptive is the rollout?",
        answer:
          "We release module by module and run the new system in parallel with the old process for a period, so nobody is forced to switch on a single day with no fallback. Training is role-specific and delivered before each module goes live.",
      },
      {
        question: "Can it work offline or on poor connectivity?",
        answer:
          "Where warehouse or field conditions require it, yes. We build offline-capable interfaces with local caching and sync-on-reconnect for the specific screens that need it rather than the whole system.",
      },
      {
        question: "What happens to our historical data?",
        answer:
          "It gets migrated, cleaned, and reconciled as part of the build, with a validation report showing what moved, what was corrected, and what could not be matched. Original files are retained as an archive.",
      },
      {
        question: "Can our own IT team maintain it later?",
        answer:
          "That is the goal. We use mainstream technology, document the architecture and business rules, and run onboarding sessions for your engineers whenever you are ready to take it in-house.",
      },
    ],
    cta: {
      title: "Ready to get your operation on one system?",
      description:
        "We will map your process end to end and show you exactly which modules pay for themselves first.",
      buttonLabel: "Book an operations consultation",
    },
  },
  "website-redesign": {
    slug: "website-redesign",
    metaTitle: "Website Redesign Services | Skord Labs",
    metaDescription:
      "Website redesigns that improve conversion, speed, and search visibility - modern UI/UX, Core Web Vitals performance, and SEO-safe migration.",
    keywords: ["website redesign", "UI UX design", "website modernization", "conversion optimisation", "web redesign services"],
    eyebrow: "Services / Website Redesign",
    titleLead: "Redesign for results,",
    titleGradient: "not just a new look",
    intro:
      "A redesign that looks better but converts worse is a failure with good screenshots. We start from your analytics and your sales conversations, rebuild around what actually moves people to act, and migrate without losing the search equity you already paid for.",
    heroHighlights: [
      "Baseline measured before anything changes",
      "Core Web Vitals treated as a requirement",
      "Redirects and SEO equity protected",
      "Content editable by your team after launch",
    ],
    glow: "from-amber-500/20 to-rose-500/20",
    primaryCta: { label: "Get a redesign plan", href: "/contact" },
    secondaryCta: { label: "See recent redesigns", href: "/case-studies" },
    metrics: [
      { value: "<2s", label: "Target load time" },
      { value: "90+", label: "Lighthouse target" },
      { value: "4-8 weeks", label: "Typical delivery" },
      { value: "0", label: "Rankings lost in migration" },
    ],
    challenges: {
      heading: "Why redesigns disappoint",
      intro:
        "The most expensive redesigns are the ones that change everything at once and measure nothing.",
      items: [
        {
          problem: "The old site's numbers were never recorded, so nobody can prove the new one is better.",
          solution: "A measured baseline of traffic, conversion, and speed before design work starts.",
        },
        {
          problem: "Traffic collapses after launch because URLs changed without redirects.",
          solution: "A full URL map, permanent redirects, and Search Console monitoring through the switch.",
        },
        {
          problem: "The design looks beautiful and loads in six seconds on a phone.",
          solution: "Performance budgets set upfront and enforced on every page before it ships.",
        },
        {
          problem: "Every content change now requires a developer.",
          solution: "A CMS with editable page sections and components, plus training for your marketing team.",
        },
        {
          problem: "The new site says the same vague things as the old one.",
          solution: "Messaging rebuilt from customer language and sales objections, not internal jargon.",
        },
      ],
    },
    benefits: {
      heading: "How you benefit from working with us",
      intro: "We are engineers as well as designers, so performance, accessibility, and SEO are not handed off to someone else afterwards.",
      items: [
        {
          icon: TrendingUp,
          title: "Designed around conversion",
          description:
            "Page structure, hierarchy, and calls to action are chosen from your funnel data and sales objections rather than aesthetic preference.",
          proof: "Baseline vs post-launch conversion reported",
        },
        {
          icon: Zap,
          title: "Fast on real devices",
          description:
            "Modern frameworks, image optimisation, and a performance budget mean the site is quick on mid-range phones and slow networks.",
          proof: "Core Web Vitals verified before launch",
        },
        {
          icon: Search,
          title: "Search equity protected",
          description:
            "Redirect mapping, structured data, and technical SEO handled as part of the build, with rankings monitored through the migration.",
          proof: "Full URL map and post-launch monitoring",
        },
        {
          icon: Smartphone,
          title: "Accessible and responsive by default",
          description:
            "Contrast, focus states, keyboard navigation, and semantic markup are built in, which widens your reach and reduces legal risk.",
          proof: "WCAG AA contrast and keyboard support",
        },
      ],
    },
    capabilities: {
      heading: "What the redesign covers",
      intro: "Strategy, design, build, and migration - handled by one team so nothing falls between vendors.",
      groups: [
        {
          title: "Research and audit",
          description: "Understanding what is working before replacing it.",
          items: [
            "Analytics and funnel review",
            "Heatmap and session recording analysis",
            "Technical SEO and Core Web Vitals audit",
            "Competitor and category benchmarking",
            "Stakeholder and sales team interviews",
            "Content inventory and gap analysis",
          ],
        },
        {
          title: "Messaging and content",
          description: "What the site says, in your customers' words.",
          items: [
            "Value proposition and page narratives",
            "Homepage and landing page copy",
            "Product and service page structure",
            "Proof, testimonial, and case study placement",
            "Calls to action per funnel stage",
            "SEO content and keyword mapping",
          ],
        },
        {
          title: "Design system",
          description: "A visual language, not a set of one-off pages.",
          items: [
            "Component library and page templates",
            "Typography, colour, and spacing tokens",
            "Responsive layouts across breakpoints",
            "Motion and interaction design",
            "Dark mode where relevant",
            "Accessibility checks throughout",
          ],
        },
        {
          title: "Engineering",
          description: "Built for speed and maintainability.",
          items: [
            "Next.js or headless CMS implementation",
            "Image, font, and asset optimisation",
            "Server-side rendering and caching",
            "Form, booking, and CRM integrations",
            "Analytics and event instrumentation",
            "Automated Lighthouse checks in CI",
          ],
        },
        {
          title: "SEO and migration",
          description: "The part that protects your existing traffic.",
          items: [
            "URL mapping and permanent redirects",
            "Structured data and schema markup",
            "XML sitemaps and robots configuration",
            "Metadata and canonical strategy",
            "Search Console monitoring through launch",
            "Post-migration ranking report",
          ],
        },
        {
          title: "Handover and enablement",
          description: "So your team can run the site afterwards.",
          items: [
            "CMS setup with editable sections",
            "Reusable page-building components",
            "Editor training and documentation",
            "Brand and content guidelines",
            "Analytics dashboard for marketing",
            "Post-launch support window",
          ],
        },
      ],
    },
    audience: {
      heading: "Who this is for",
      intro: "A redesign is worth it when the site is actively costing you something measurable.",
      items: [
        {
          title: "Companies whose site no longer matches the business",
          description: "You have moved upmarket, changed products, or rebranded, and the site is still describing the old you.",
          signals: [
            "Sales team avoids sending prospects to it",
            "Products missing or out of date",
            "Design looks older than your competitors",
          ],
        },
        {
          title: "Teams with a traffic problem or a conversion problem",
          description: "People arrive and leave, or they never arrive at all.",
          signals: [
            "High bounce rate on key landing pages",
            "Paid traffic converting poorly",
            "Rankings slipping on core terms",
          ],
        },
        {
          title: "Marketing teams blocked by their own website",
          description: "Every campaign needs a developer, so campaigns get simplified or skipped.",
          signals: [
            "No CMS or a rigid one",
            "Landing pages take weeks to publish",
            "No reliable analytics on page performance",
          ],
        },
      ],
    },
    process: {
      heading: "How we deliver",
      intro: "Measure, design, build, migrate carefully, then verify against the baseline.",
      steps: [
        {
          phase: "Audit and baseline",
          duration: "1 week",
          description: "We record where you are today so the result can be judged on numbers rather than taste.",
          details: [
            "Analytics, funnel, and behaviour review",
            "Technical SEO and performance audit",
            "Content inventory and URL list",
            "Goals and success metrics agreed",
          ],
        },
        {
          phase: "Strategy and structure",
          duration: "1 week",
          description: "Site architecture and messaging decided before any visual design.",
          details: [
            "Sitemap and navigation design",
            "Page-level narrative and CTAs",
            "Keyword and content mapping",
            "Wireframes for key templates",
          ],
        },
        {
          phase: "Design",
          duration: "1-2 weeks",
          description: "Design system and templates, reviewed on real content rather than placeholder text.",
          details: [
            "Visual direction and component library",
            "Key page designs across breakpoints",
            "Interaction and motion specification",
            "Accessibility review",
          ],
        },
        {
          phase: "Build and migrate",
          duration: "2-4 weeks",
          description: "Implementation with performance budgets, CMS setup, and the redirect map prepared in parallel.",
          details: [
            "Component and template development",
            "CMS configuration and content entry",
            "Redirect map and schema markup",
            "Cross-browser and device QA",
          ],
        },
        {
          phase: "Launch and verify",
          duration: "1 week + 30 days",
          description: "Controlled go-live, then a month of monitoring against the baseline you started from.",
          details: [
            "Staged launch with rollback plan",
            "Search Console and rankings monitoring",
            "Performance verification on live traffic",
            "Post-launch report vs baseline",
          ],
        },
      ],
    },
    deliverables: {
      heading: "What you receive",
      intro: "A faster site, a design system, and a marketing team that is no longer blocked.",
      groups: [
        {
          title: "Design",
          items: [
            "Full design system and tokens",
            "Page templates across breakpoints",
            "Figma source files",
            "Brand application guidelines",
          ],
        },
        {
          title: "Build",
          items: [
            "Production website",
            "CMS with editable components",
            "Form and CRM integrations",
            "Performance-optimised assets",
          ],
        },
        {
          title: "SEO",
          items: [
            "URL and redirect map",
            "Structured data implementation",
            "Sitemap and metadata configuration",
            "Post-migration ranking report",
          ],
        },
        {
          title: "Enablement",
          items: [
            "Analytics dashboard for marketing",
            "Editor training and documentation",
            "Baseline vs post-launch report",
            "30-day support window",
          ],
        },
      ],
    },
    stack: {
      heading: "What we build with",
      intro: "Fast by default, editable by non-developers.",
      groups: [
        { label: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"] },
        { label: "Content", items: ["Sanity", "Payload", "Contentful", "Shopify", "WordPress headless"] },
        { label: "Performance", items: ["Vercel", "Edge caching", "Image optimisation", "Lighthouse CI"] },
        { label: "Measurement", items: ["GA4", "Search Console", "Hotjar", "PostHog"] },
      ],
    },
    engagements: {
      heading: "Ways to work with us",
      intro: "From a diagnostic to a full rebuild with ongoing optimisation.",
      options: [
        {
          name: "Website Audit",
          bestFor: "Teams deciding whether a redesign is actually the right spend.",
          includes: [
            "Analytics and conversion review",
            "Technical SEO and performance audit",
            "Prioritised fix list with impact estimates",
            "Redesign scope and cost estimate",
          ],
          timeline: "1 week",
        },
        {
          name: "Full Redesign",
          bestFor: "Companies rebuilding the site around new positioning or new goals.",
          includes: [
            "Strategy, design, and build",
            "CMS setup and content migration",
            "SEO-safe migration and monitoring",
            "Training and 30-day support",
          ],
          timeline: "5-9 weeks",
        },
        {
          name: "Growth Retainer",
          bestFor: "Marketing teams running continuous experiments after launch.",
          includes: [
            "Monthly landing page production",
            "A/B testing and CRO experiments",
            "Technical SEO maintenance",
            "Performance and analytics reviews",
          ],
          timeline: "Monthly, 3-month minimum",
        },
      ],
    },
    relatedCaseStudySlugs: [
      "findimoto-automotive-marketplace",
      "paddle-billing-saas-pricing-experience",
      "ontech-pk-news-platform",
    ],
    faqs: [
      {
        question: "Will we lose our Google rankings?",
        answer:
          "Not with a planned migration. Every existing URL is mapped to its new destination with permanent redirects, structured data and metadata are carried across, and we watch Search Console daily through launch. A short dip for two to four weeks is normal; a permanent loss is not.",
      },
      {
        question: "Can we keep our current CMS?",
        answer:
          "Often yes. If WordPress or Shopify is working for your team we can rebuild the front end against it headlessly and keep your editing workflow. We only recommend replacing the CMS when it is the reason publishing is slow.",
      },
      {
        question: "How do you know the redesign worked?",
        answer:
          "Because we recorded the baseline first. Traffic, conversion rate, page speed, and rankings are measured before design starts and reported again 30 days after launch against the same definitions.",
      },
      {
        question: "Do you write the content?",
        answer:
          "We write the structural and conversion copy - homepage, service pages, landing pages - based on customer research and sales interviews. Long-form blog production is available separately or through the AI content engine we can set up for your team.",
      },
      {
        question: "What if we only need part of this?",
        answer:
          "The audit exists for that. Sometimes the answer is a performance sprint and three page rewrites rather than a full redesign, and we will say so if that is what the data shows.",
      },
    ],
    cta: {
      title: "Ready for a redesign that performs?",
      description:
        "Send us your URL. We will look at what is actually happening on the site and tell you where the biggest wins are.",
      buttonLabel: "Request a website audit",
    },
  },
}
