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
    id: 15,
    title: "Orbit Offline-first Android Task Manager",
    slug: "orbit-offline-first-android-task-manager",
    category: "Mobile App",
    description:
      "An offline-first task manager for Android. Drawers, per-day repeating tasks and on-device reminders, with no account required and no server holding your data.",
    content: `
      <h2>Project Overview</h2>
      <p>Orbit is a task manager for Android, built for the case most to-do apps handle badly: no signal, no account, and a routine you actually need to track over time. We built it around a simple constraint - the app should be fully useful before you sign in to anything.</p>

      <h2>What We Built</h2>
      <ul>
        <li>Drawers: colour- and icon-coded task lists carrying deadlines, priority, notes, and tags</li>
        <li>Per-day repeating tasks that record completion for each day separately instead of rolling one checkbox forward</li>
        <li>Four on-device reminders per task: day start, one hour before, ten minutes before, and at the deadline</li>
        <li>Calendar view covering one-off and repeating tasks, holding real history rather than a single most-recent state</li>
        <li>Home-screen widget for ticking tasks off and switching drawers without opening the app</li>
        <li>Search across titles, notes, and tags, with no loading state because nothing is fetched</li>
        <li>Optional Google Drive backup scoped to drive.appdata, off by default</li>
      </ul>

      <h2>Approach</h2>
      <p>Repeating tasks were the part we spent the most time on. Most apps treat a recurring task as a single row with a checkbox, so ticking today quietly rolls it to tomorrow and yesterday disappears. Orbit records completion per day, which means a skipped day stays visibly missed and the calendar holds a real history.</p>
      <p>Reminders are scheduled on the device as exact alarms, so nothing depends on a push server being reachable. There is no Orbit server and no Orbit account - tasks are stored on the device and are never transmitted to us. Signing in with Google does exactly one thing: back up to a private application-data folder in the user&#39;s own Google Drive, using the drive.appdata scope, which cannot reach any other file in their Drive. No analytics, no advertising, no tracking.</p>

      <h2>Outcome</h2>
      <p>Orbit is distributed as a signed APK rather than through Google Play. Version 1.1.0 runs on Android 7.0 and newer, weighs 21.2 MB, and is free.</p>
    `,
    image: "/case/orbit-1.png",
    tags: ["Android", "Flutter", "Offline-first", "Privacy", "Productivity"],
    results: [
      "Released as v1.1.0 for Android 7.0 and newer",
      "Zero servers and zero accounts - tasks never leave the device",
      "Per-day completion history for repeating tasks",
    ],
    client: "Skord Labs",
    duration: "Released - v1.1.0",
    team: ["Flutter Engineers", "Android Platform", "Product Design"],
    galleryImages: ["/case/orbit-2.png", "/case/orbit-3.png"],
    projectUrl: "https://orbit.skordlabs.com",
  },
  {
    id: 12,
    title: "Boxlytics Mechanics-AI Packaging Platform",
    slug: "boxlytics-mechanics-ai-packaging-platform",
    category: "AI Simulation Platform",
    description:
      "A mechanics-AI platform for corrugated packaging optimization that virtually predicts box strength, replacing slow prototype-test-redesign loops with sub-second simulation.",
    content: `
      <h2>Project Overview</h2>
      <p>Boxlytics was built for packaging engineers who lose weeks to physical prototype cycles. The platform pairs validated mechanics models with machine learning trained on 200,000+ simulations, so teams can predict Box Compression Test (BCT) performance virtually and only build the designs worth building.</p>

      <h2>What We Built</h2>
      <ul>
        <li>Box Strength Predictor: BCT prediction in under a second from dimensions, liner and fluting grades, and flute geometry</li>
        <li>Force-displacement response with a Pass / Marginal / Review verdict against a user-defined requirement</li>
        <li>Explicit de-rating factor chain: environment, handling, creep, and factor of safety itemised instead of hidden inside one safety number</li>
        <li>Optimized Box Selector: sweeps allowed board combinations and returns a ranked shortlist by cost or CO&#8322;</li>
        <li>Out-of-band configurations kept visible and tagged rather than silently dropped</li>
        <li>Origin and destination climate scaled into paper properties, plus cost, empty-box weight, and CO&#8322; per configuration</li>
        <li>Simulation history with every run saved and exportable as PDF or portable JSON</li>
      </ul>

      <h2>Approach</h2>
      <p>Two integrated modules, one decision-ready workflow: validate a specific design in the Predictor, or discover the best one in the Optimizer and send it straight back into the Predictor for final validation. Engineering rigor stays visible at every step so results can be defended, not just trusted.</p>

      <h2>Outcome</h2>
      <p>Boxlytics delivers 93% BCT prediction accuracy at greater than 98% ML fidelity (R&#178;), turning a multi-week prototype loop into a sub-second cloud workflow and lowering both material cost and packaging waste.</p>
    `,
    image: "/case/boxlytics-1.png",
    tags: ["AI/ML", "Simulation", "Packaging", "SaaS", "Sustainability"],
    results: [
      "93% BCT prediction accuracy with >98% ML fidelity (R2)",
      "Sub-second analysis trained on 200,000+ simulations",
      "Prototype-test-redesign cycles compressed into one cloud workflow",
    ],
    client: "Boxlytics",
    duration: "Multi-phase build",
    team: ["ML Engineers", "Simulation Engineers", "Full-stack Team", "Product Design"],
    projectUrl: "https://boxlytics.onyxleaf.co/",
  },
  {
    id: 13,
    title: "ConfiguraX CPQ and AI Workflow Engine",
    slug: "configurax-cpq-ai-workflow-engine",
    category: "Enterprise SaaS Platform",
    description:
      "A new-generation CPQ and AI workflow engine that lets enterprise teams model configuration rules visually, automate approvals, and generate accurate quotes from one platform.",
    content: `
      <h2>Project Overview</h2>
      <p>ConfiguraX was built as a modern operating layer for high-stakes product configuration - for teams that want visual speed without giving up engineering rigor. Product, sales, and operations work in a single adaptive revenue workflow instead of a stack of disconnected tools.</p>

      <h2>What We Built</h2>
      <ul>
        <li>AI Copilot that turns plain-language business rules into production-ready configuration logic in minutes</li>
        <li>Real-time decision engine evaluating pricing, dependencies, and constraints while users configure</li>
        <li>Visual graph builder for constraints, dependencies, and pricing rules</li>
        <li>One-click deployment to web, CRM, CPQ, and partner channels with version control</li>
        <li>Live analytics on conversion drop-off, invalid paths, and high-intent combinations</li>
        <li>Governance layer with role-based controls, audit logs, and approval workflows</li>
        <li>Enterprise SSO, global API delivery, and a SOC 2-aligned, ISO-ready security posture</li>
      </ul>

      <h2>Approach</h2>
      <p>The platform follows a three-stage execution flow - Model, Deploy, Optimize - so a rule authored in the visual graph reaches production channels with version control, then feeds intent analytics and AI recommendations back into the next iteration.</p>

      <h2>Outcome</h2>
      <p>ConfiguraX ships enterprise-grade configuration journeys that convert: 42% higher quote completion, 3.8x faster workflow delivery, and 99.95% platform availability.</p>
    `,
    image: "/case/configuraX-1.png",
    tags: ["CPQ", "Enterprise SaaS", "AI Workflows", "Governance", "API-first"],
    results: [
      "42% higher quote completion",
      "3.8x faster workflow delivery",
      "99.95% platform availability with enterprise SSO and audit logs",
    ],
    client: "ConfiguraX",
    duration: "Product lifecycle",
    team: ["Solution Architects", "Platform Engineers", "AI Engineers", "Product Design"],
    projectUrl: "https://www.configurax.com/",
  },
  {
    id: 14,
    title: "FindiMoto Automotive Marketplace",
    slug: "findimoto-automotive-marketplace",
    category: "Marketplace Platform",
    description:
      "A South African car marketplace connecting buyers and sellers with a multi-filter showroom, trending model discovery, inspection services, and a community layer.",
    content: `
      <h2>Project Overview</h2>
      <p>FindiMoto set out to make finding the right car straightforward for South African buyers. We built a marketplace where discovery, verification, and selling all live in one product - from a six-parameter search bar to province-level browsing and third-party inspection services.</p>

      <h2>What We Built</h2>
      <ul>
        <li>Advanced search across city, make and model, price range, year, mileage, and extended filters</li>
        <li>Showroom browsing with province filtering across all listings</li>
        <li>Curated discovery rails: Trending Wheels, Trending Coupe, Trending SUVs, and Trending Hybrid &amp; Electric</li>
        <li>Listing cards with make, model year, and body type across Sedan, Coupe, and SUV segments</li>
        <li>Sell A Car flow for private and dealer sellers</li>
        <li>Inspection Services module for pre-purchase vehicle verification</li>
        <li>Community and blog sections plus a support layer with Help Center, Safety Tips, and FAQ</li>
      </ul>

      <h2>Approach</h2>
      <p>Discovery is organised by intent rather than one flat listing grid - enthusiasts, families, and eco-conscious buyers each land on a rail built for them, while inspection services and safety guidance carry the trust load that used-car marketplaces live or die on.</p>

      <h2>Outcome</h2>
      <p>FindiMoto operates as a full marketplace stack for the South African market, connecting buyers and sellers with verified listings, structured discovery, and an ecosystem of support services around every transaction.</p>
    `,
    image: "/case/findimoto-1.png",
    tags: ["Marketplace", "Automotive", "Search & Filters", "South Africa"],
    results: [
      "Six-parameter search with province-level filtering",
      "Segment-based discovery rails for Sedan, Coupe, SUV, and EV buyers",
      "Inspection services and safety layer built into the buying journey",
    ],
    client: "FindiMoto Solutions (Pty) Ltd",
    duration: "Multi-phase delivery",
    team: ["Product Designers", "Full-stack Engineers", "Search & Data Team"],
    projectUrl: "https://www.findimoto.co.za/",
  },
  {
    id: 15,
    title: "Mens Confidence Wellness Commerce Store",
    slug: "mens-confidence-wellness-commerce-store",
    category: "Shopify Commerce + Brand",
    description:
      "Pakistan's destination for men's grooming, skincare, wellness, and performance - a Shopify storefront built around trust signals, certified products, and WhatsApp-led support.",
    content: `
      <h2>Project Overview</h2>
      <p>Mens Confidence was founded to break the silence around men's daily wellness needs in Pakistan, where the category is crowded with uncertified products making overnight claims. The brief was a premium, dedicated storefront that sells credibility as hard as it sells product.</p>

      <h2>What We Built</h2>
      <ul>
        <li>Shopify storefront with a category-first structure: Wellness &amp; Performance, Skin Care &amp; Grooming</li>
        <li>Best Sellers merchandising with regular and sale pricing, including variant-based "From" pricing</li>
        <li>Trust architecture: DRAP registration, dermatologist and expert approval, and premium sourcing messaging</li>
        <li>24/7 WhatsApp support entry points for routine and product guidance</li>
        <li>Live social-proof notifications showing recent purchases by city</li>
        <li>Editorial blog covering pollution and skin, false-claim safety, and men's energy and fatigue</li>
        <li>Email capture for new collections and exclusive offers, plus full policy and contact pages</li>
      </ul>

      <h2>Approach</h2>
      <p>The positioning is deliberately narrow - "we don't sell everything, we recommend what works." Every section reinforces one of four promises: dedicated support, premium and traceable sourcing, ingredient-backed formulations like L-Arginine and Niacinamide, and certified expert approval.</p>

      <h2>Outcome</h2>
      <p>Mens Confidence launched as a cohesive men's wellness brand with a conversion-focused storefront, an evidence-led content engine, and support workflows that turn first-time buyers into routine customers.</p>
    `,
    image: "/case/mensconfidence-1.png",
    tags: ["Shopify", "Ecommerce", "Brand", "Wellness", "Pakistan"],
    results: [
      "Category-first storefront across grooming, skincare, wellness, and performance",
      "Trust-led conversion design with DRAP certification and expert approval signals",
      "24/7 WhatsApp support and social-proof purchase notifications",
    ],
    client: "Mens Confidence",
    duration: "Launch cycle",
    team: ["Brand Team", "Shopify Engineers", "Content & Growth"],
    projectUrl: "https://mensconfidence.pk/",
  },
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
