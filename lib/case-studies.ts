export type CaseStudy = {
  id: number
  title: string
  slug: string
  category: string
  description: string
  content: string
  image: string
  tags: string[]
  results: string[]
  client: string
  duration: string
  team: string[]
  galleryImages?: string[]
  projectUrl?: string
}

export const caseStudies: CaseStudy[] = [
  {
    id: 5,
    title: "Eazstart Startup Operating System",
    slug: "eazstart-startup-operating-system",
    category: "SaaS Product",
    description:
      "Planning, management, tracking, and reporting system for startups in Pakistan. Eazstart combines strategic frameworks, KPI visibility, and collaboration workflows in one production-ready platform.",
    content: `
      <h2>Project Overview</h2>
      <p>Eazstart was designed as a startup operating system for founders who need execution clarity from day one. It helps teams move from idea validation to growth with structured planning, live analytics, and collaborative reporting workflows.</p>

      <h2>What We Built</h2>
      <ul>
        <li>Business Model Canvas and Value Proposition Canvas workflows</li>
        <li>MVP planning modules with prioritization and timeline controls</li>
        <li>Market research tooling with competitor and opportunity tracking</li>
        <li>KPI dashboard with real-time metrics and visual reporting</li>
        <li>Weekly and monthly report generation for investor and team updates</li>
        <li>Role-based collaboration for founders, team members, mentors, and stakeholders</li>
      </ul>

      <h2>Approach</h2>
      <p>The product follows four operating principles: data-driven decisions, collaborative execution, strategic clarity, and growth-focused milestone tracking. This ensures teams can align quickly and scale confidently.</p>

      <h2>Outcome</h2>
      <p>Eazstart is now a production-ready system that gives startups in Pakistan a complete starting point to plan, manage, and accelerate execution without fragmented tooling.</p>
    `,
    image: "/case/eazstart-2.png",
    tags: ["SaaS", "Startup OS", "KPI Analytics", "Planning", "Reporting"],
    results: [
      "Business model to growth workflows in one platform",
      "KPI dashboard with weekly and monthly reporting",
      "Collaboration system for teams, mentors, and stakeholders",
    ],
    client: "Eazstart",
    duration: "Product lifecycle",
    team: ["Product Team", "Full-stack Engineers", "UX Team"],
    galleryImages: ["/case/eazstart-1.png"],
    projectUrl: "https://eazstart.vercel.app/landing",
  },
  {
    id: 10,
    title: "Finwise Personal Finance Platform",
    slug: "finwise-personal-finance-platform",
    category: "Fintech App",
    description:
      "A modern finance platform focused on smart budgeting, seamless investing, and bank-grade security with mobile-first user experience.",
    content: `
      <h2>Project Overview</h2>
      <p>Finwise was built to make financial management simple and actionable for everyday users. The platform combines AI-assisted budgeting, guided investing, transparent pricing plans, and trust-focused UX patterns.</p>

      <h2>What We Built</h2>
      <ul>
        <li>Smart budgeting workflows with adaptive spending controls</li>
        <li>Intelligent transaction categorization and predictive analysis alerts</li>
        <li>Micro-investing and portfolio pathways for different risk profiles</li>
        <li>Security-first account access with biometric and fraud detection layers</li>
        <li>Pricing architecture for Starter, Pro, and Enterprise customer segments</li>
        <li>Testimonials, FAQ, and conversion-focused App Store / Google Play journeys</li>
      </ul>

      <h2>Outcome</h2>
      <p>The launch positioned Finwise as a complete financial control experience with strong user trust signals, polished conversion funnels, and scalable product messaging.</p>
    `,
    image: "/case/finwise.png",
    tags: ["Fintech", "Budgeting", "Investing", "Mobile App"],
    results: [
      "20M+ secure transactions processed daily",
      "5.0 star product rating consistency",
      "200+ institution integration readiness",
    ],
    client: "Finwise",
    duration: "Launch cycle",
    team: ["Product Designers", "Frontend Engineers", "Growth Team"],
    projectUrl: "https://finwise-omega.vercel.app/",
  },
  {
    id: 11,
    title: "Paddle Billing SaaS Pricing Experience",
    slug: "paddle-billing-saas-pricing-experience",
    category: "SaaS Billing Interface",
    description:
      "A localized SaaS pricing and plan selection experience with clear monthly/annual modes and scalable team tier communication.",
    content: `
      <h2>Project Overview</h2>
      <p>Paddle Billing was delivered as a conversion-oriented pricing product for SaaS teams. The platform emphasizes localization previews, clean plan hierarchy, and straightforward onboarding for individual, growing, and enterprise users.</p>

      <h2>What We Built</h2>
      <ul>
        <li>Localized pricing preview module for regional confidence</li>
        <li>Monthly and annual billing switch with clear tier communication</li>
        <li>Starter, Pro, and Advanced packages with progressive feature ladders</li>
        <li>Strong CTA flow for immediate trial and account activation</li>
        <li>Modern responsive implementation using Next.js and Tailwind CSS</li>
      </ul>

      <h2>Outcome</h2>
      <p>The product presents a clear monetization narrative that reduces decision friction and improves plan discoverability for teams of different sizes.</p>
    `,
    image: "/case/paddle.png",
    tags: ["SaaS", "Billing", "Localization", "Pricing UX"],
    results: [
      "Clear pricing ladder from starter to advanced",
      "Localized cost visibility for global users",
      "Faster plan decision and signup journey",
    ],
    client: "Paddle Billing",
    duration: "Build + launch",
    team: ["UI Engineers", "Frontend Engineers", "Product Strategists"],
    projectUrl: "https://paddle-billing.vercel.app/",
  },
  {
    id: 1,
    title: "BuyShez Digital Transformation",
    slug: "buyshez-digital-transformation",
    category: "Consulting + Ecommerce",
    description:
      "For BuyShez, we delivered solution consulting, web execution, talent support, and multiple ecommerce stores with Stripe-based payment flows.",
    content: `
      <h2>Project Overview</h2>
      <p>BuyShez needed a delivery partner that could support both business strategy and implementation. We led solution consulting, built their web presence, and provided talent to execute across parallel workstreams.</p>

      <h2>What We Built</h2>
      <ul>
        <li>Business and technical consulting for digital execution</li>
        <li>Website implementation for services and destination routing</li>
        <li>Multiple ecommerce storefront builds</li>
        <li>Stripe-based checkout and payment handling setup</li>
        <li>Operational support for launch and team handoff</li>
      </ul>

      <h2>Outcome</h2>
      <p>BuyShez now operates with a clearer digital structure: service discovery, store pathways, and payment infrastructure aligned with growth operations.</p>
    `,
    image: "/case/buyshez.png",
    tags: ["Consulting", "Ecommerce", "Stripe", "Execution"],
    results: ["Multi-store rollout", "Stripe payment integration", "Execution-ready team support"],
    client: "BuyShez",
    duration: "Ongoing",
    team: ["Solution Consultant", "Full-stack Engineers", "Delivery Team"],
    galleryImages: ["/case/buyshe-2.png"],
    projectUrl: "https://www.buyshez.co.uk/",
  },
  {
    id: 2,
    title: "ZARU Fragrance Commerce Platform",
    slug: "zaru-fragrance-commerce-platform",
    category: "Brand + Commerce Engineering",
    description:
      "For ZARU, we handled logo design, website development, custom admin panel, sales channel setup, and day-to-day commerce operations workflows.",
    content: `
      <h2>Project Overview</h2>
      <p>ZARU required an end-to-end digital commerce setup from brand identity through backend operations. We built the brand system and the platform needed to scale product sales.</p>

      <h2>What We Built</h2>
      <ul>
        <li>Logo and visual brand direction</li>
        <li>Full ecommerce website experience</li>
        <li>Custom admin panel for order and product operations</li>
        <li>Sales channel setup and operational integrations</li>
        <li>Structured workflows for catalog and fulfillment management</li>
      </ul>

      <h2>Outcome</h2>
      <p>ZARU launched with a cohesive premium identity and a working commerce stack that supports both front-facing conversion and backend control.</p>
    `,
    image: "/case/zaru-1.png",
    tags: ["Branding", "Web Development", "Admin Panel", "Sales Channels"],
    results: ["Brand-to-store launch", "Custom ops dashboard", "Channel management foundation"],
    client: "ZARU",
    duration: "Multi-phase delivery",
    team: ["Brand Designer", "Frontend Engineers", "Backend Engineers"],
    galleryImages: ["/case/zaru-2.png"],
    projectUrl: "https://zaru-two.vercel.app/",
  },
  {
    id: 3,
    title: "ONTECH//PK News Platform",
    slug: "ontech-pk-news-platform",
    category: "Media Platform",
    description:
      "A focused technology and startup news platform for Pakistan with category-first content architecture and editorial-ready publishing structure.",
    content: `
      <h2>Project Overview</h2>
      <p>ONTECH//PK was built as a dedicated publication system for Pakistan's startup, engineering, AI, and policy ecosystem.</p>

      <h2>What We Built</h2>
      <ul>
        <li>Category-driven media information architecture</li>
        <li>Editorial presentation for top stories and sections</li>
        <li>Clean publishing UI optimized for readability</li>
        <li>Scalable base for newsroom growth and content expansion</li>
      </ul>

      <h2>Outcome</h2>
      <p>The platform provides a clear and recognizable media identity for tech reporting while supporting fast editorial operations.</p>
    `,
    image: "/case/ontech.png",
    tags: ["News", "Content Platform", "Pakistan Tech", "Editorial"],
    results: ["Sectioned publication model", "Editorial-ready UX", "Scalable content base"],
    client: "ONTECH//PK",
    duration: "Launch cycle",
    team: ["Product Designer", "Frontend Engineers", "Content Structuring"],
    projectUrl: "https://ontech-pk.vercel.app",
  },
  {
    id: 4,
    title: "Solar Express End-to-End Commerce System",
    slug: "solar-express-end-to-end-commerce-system",
    category: "Enterprise Commerce + Operations",
    description:
      "Solar Express required a complete brand store and operations stack, including market ticker flows, daily tracking systems, and a complex admin and permissions portal.",
    content: `
      <h2>Project Overview</h2>
      <p>Solar Express needed a robust digital infrastructure for a high-volume solar commerce business with pricing movement and operational complexity.</p>

      <h2>What We Built</h2>
      <ul>
        <li>End-to-end branded store and web platform</li>
        <li>Store builder and operational catalog workflows</li>
        <li>Daily tracking systems for product and business movement</li>
        <li>Ticker-based market updates for wholesale context</li>
        <li>Complex admin portal with role and permissions design</li>
      </ul>

      <h2>Outcome</h2>
      <p>Solar Express operates on a production-grade commerce and admin system that supports daily operations, control, and scalable growth.</p>
    `,
    image: "/case/solarexpress-1.png",
    tags: ["Brand Store", "Complex Admin", "Permissions", "Wholesale Ticker"],
    results: ["End-to-end commerce rollout", "Operations dashboarding", "Permissions-based admin system"],
    client: "Solar Express",
    duration: "Long-term build",
    team: ["Solution Architects", "Full-stack Team", "Ops Engineering"],
    galleryImages: ["/case/solarexpress-2.png", "/case/solarexpress-3.png"],
    projectUrl: "https://www.solarexpress.pk/",
  },
  {
    id: 6,
    title: "Haarshe Cross-Channel Commerce",
    slug: "haarshe-cross-channel-commerce",
    category: "Shopify + Social Commerce",
    description:
      "For Haarshe, we supported a US-focused storefront ecosystem with Shopify and TikTok Shop channel operations, including payment and order flow readiness.",
    content: `
      <h2>Project Overview</h2>
      <p>Haarshe needed a conversion-oriented storefront with multi-channel selling and operational reliability for product merchandising and checkout flow.</p>

      <h2>What We Built</h2>
      <ul>
        <li>Storefront implementation and merchandising structure</li>
        <li>Shopify and TikTok Shop channel support</li>
        <li>Payment collection and checkout flow setup</li>
        <li>Cross-channel product and campaign readiness</li>
      </ul>

      <h2>Outcome</h2>
      <p>The business now runs with stronger storefront consistency and aligned commerce channel execution.</p>
    `,
    image: "/case/Haarshe.png",
    tags: ["Shopify", "TikTok Shop", "Storefront", "Payments"],
    results: ["Cross-channel selling support", "Storefront launch", "Checkout operations"],
    client: "Haarshe",
    duration: "Delivery + support",
    team: ["Commerce Team", "Frontend Engineers", "Growth Operators"],
    projectUrl: "https://haarsheonline.net/",
  },
  {
    id: 7,
    title: "Dekord Brand and Commerce Build",
    slug: "dekord-brand-and-commerce-build",
    category: "Brand + Ecommerce",
    description:
      "Dekord is a startup we are building with complete branding, animated commerce experience, product strategy, and manufacturing-aligned business execution.",
    content: `
      <h2>Project Overview</h2>
      <p>Dekord required full-spectrum execution: identity, ecommerce, product storytelling, and business operations aligned with local manufacturing growth.</p>

      <h2>What We Built</h2>
      <ul>
        <li>Brand identity, visual system, and design direction</li>
        <li>Animated ecommerce storefront and conversion-focused UX</li>
        <li>Product and catalog strategy for launch cycles</li>
        <li>Operational pathways linked with manufacturing readiness</li>
      </ul>

      <h2>Outcome</h2>
      <p>Dekord now runs as a cohesive digital-first brand with strong design language and production-backed commerce operations.</p>
    `,
    image: "/case/dekord-1.png",
    tags: ["Branding", "Animation", "Ecommerce", "Startup Execution"],
    results: ["Full brand launch", "Animated commerce UX", "Manufacturing-aligned execution"],
    client: "Dekord",
    duration: "Ongoing",
    team: ["Brand Team", "Creative Developers", "Operations Team"],
    galleryImages: ["/case/dekord-2.png"],
    projectUrl: "https://www.dekord.online/",
  },
  {
    id: 8,
    title: "Dekord Manufacturing and Inventory Platform",
    slug: "dekord-manufacturing-inventory-platform",
    category: "Manufacturing Systems",
    description:
      "A full-scale manufacturing and inventory platform to track production, stock, recovery, distributions, and financial reporting in one operational system.",
    content: `
      <h2>Project Overview</h2>
      <p>As operations grew, Dekord needed internal software to manage manufacturing and stock intelligence with daily-level control.</p>

      <h2>What We Built</h2>
      <ul>
        <li>Factory inventory and product stock monitoring modules</li>
        <li>Batch and production tracking with monthly rollups</li>
        <li>Recovery and distribution tracking for operational cash flow</li>
        <li>Dashboard views for performance and financial visibility</li>
      </ul>

      <h2>Outcome</h2>
      <p>The platform reduced blind spots in production operations and improved monitoring consistency across inventory and recovery workflows.</p>
    `,
    image: "/case/inventory-manufactoring.png",
    tags: ["Inventory", "Manufacturing", "Dashboards", "Operations"],
    results: ["Batch-level production tracking", "Inventory visibility", "Financial ops monitoring"],
    client: "Dekord Internal Ops",
    duration: "Multi-phase",
    team: ["Product Engineers", "Backend Engineers", "Ops Leads"],
  },
  {
    id: 9,
    title: "Universal Ecommerce Admin Portal",
    slug: "universal-ecommerce-admin-portal",
    category: "Commerce Infrastructure",
    description:
      "A Shopify-alternative universal backend admin portal for ecommerce brands to manage orders, products, users, claims, analytics, and channel operations from one place.",
    content: `
      <h2>Project Overview</h2>
      <p>We designed a universal admin backend as an alternative operating layer for ecommerce businesses needing centralized control.</p>

      <h2>What We Built</h2>
      <ul>
        <li>Unified dashboard for orders, users, and product intelligence</li>
        <li>Claims, subscriptions, reviews, and content modules</li>
        <li>Analytics and performance reporting views</li>
        <li>Extensible architecture for multi-store operations</li>
      </ul>

      <h2>Outcome</h2>
      <p>The system provides a single operational command center for scaling ecommerce workflows beyond default platform limitations.</p>
    `,
    image: "/case/universal-ecom-admin.png",
    tags: ["Admin Portal", "Ecommerce", "Analytics", "Multi-store"],
    results: ["Unified commerce backend", "Multi-module operations", "Scalable admin architecture"],
    client: "Internal Product Initiative",
    duration: "Product in progress",
    team: ["Platform Engineers", "UI Engineers", "Product Ops"],
  },
]
