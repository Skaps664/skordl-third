import Link from "next/link"
import type { LucideIcon } from "lucide-react"
import {
  ArrowUpRight,
  Cloud,
  Globe,
  LayoutDashboard,
  Megaphone,
  PenTool,
  Rocket,
  Smartphone,
  Sparkles,
} from "lucide-react"
import { Reveal } from "@/components/ui/reveal"

type Tone = "blue" | "dark" | "rose" | "light"

type Capability = {
  name: string
  scope: string[]
  href: string
  icon: LucideIcon
  tone: Tone
  /** grid placement on large screens */
  span: string
}

// 12-cell bento on lg (4 columns x 3 rows):
//   [ Enterprise (2x2) ][ AI (2x1)          ]
//   [ Enterprise       ][ Web ][ Mobile     ]
//   [ SaaS ][ Marketing ][ Brand ][ Cloud   ]
const capabilities: Capability[] = [
  {
    name: "Enterprise Systems",
    scope: ["ERP", "CRM", "Inventory & supply chain", "HR & payroll", "Internal dashboards"],
    href: "/services/management-systems",
    icon: LayoutDashboard,
    tone: "blue",
    span: "sm:col-span-2 lg:col-span-2 lg:row-span-2",
  },
  {
    name: "AI & Automation",
    scope: ["LLM integration", "AI agents", "Conversational AI", "Workflow automation"],
    href: "/services/ai-solutions",
    icon: Sparkles,
    tone: "dark",
    span: "sm:col-span-2 lg:col-span-2",
  },
  {
    name: "Web Platforms & E-commerce",
    scope: ["Corporate websites", "E-commerce", "Customer portals"],
    href: "/services/ecommerce-solutions",
    icon: Globe,
    tone: "light",
    span: "",
  },
  {
    name: "Mobile Applications",
    scope: ["iOS & Android", "Cross-platform", "Offline-first"],
    href: "/services/custom-development",
    icon: Smartphone,
    tone: "light",
    span: "",
  },
  {
    name: "SaaS & Product",
    scope: ["MVPs", "Multi-tenant SaaS", "Product strategy"],
    href: "/services/mvp-development",
    icon: Rocket,
    tone: "light",
    span: "",
  },
  {
    name: "Digital Marketing & Growth",
    scope: ["Performance marketing", "SEO", "Social media"],
    href: "/services/digital-marketing",
    icon: Megaphone,
    tone: "rose",
    span: "",
  },
  {
    name: "Brand & Experience Design",
    scope: ["Brand identity", "UI/UX", "Design systems"],
    href: "/services/brand-building",
    icon: PenTool,
    tone: "light",
    span: "",
  },
  {
    name: "Cloud & DevOps",
    scope: ["Cloud architecture", "CI/CD", "Security reviews"],
    href: "/solutions/tech-consulting",
    icon: Cloud,
    tone: "light",
    span: "",
  },
]

const toneStyles: Record<Tone, { tile: string; text: string; sub: string; chip: string; background?: string }> = {
  blue: {
    tile: "text-white",
    text: "text-white",
    sub: "text-white/75",
    chip: "bg-white/15 text-white border-white/20",
    background: "linear-gradient(135deg, #203eec 0%, #1a2fd6 55%, #0ea5e9 130%)",
  },
  dark: {
    tile: "text-white",
    text: "text-white",
    sub: "text-white/65",
    chip: "bg-white/10 text-white border-white/15",
    background: "linear-gradient(135deg, #0b1024 0%, #121a3d 100%)",
  },
  rose: {
    tile: "text-white",
    text: "text-white",
    sub: "text-white/80",
    chip: "bg-white/15 text-white border-white/20",
    background: "linear-gradient(135deg, #ff006e 0%, #8b5cf6 100%)",
  },
  light: {
    tile: "bg-secondary/70 border border-border hover:border-[#203eec]/25",
    text: "text-foreground",
    sub: "text-muted-foreground",
    chip: "bg-background text-foreground border-border",
  },
}

function Glow({ tone }: { tone: Tone }) {
  if (tone === "light") return null
  const color = tone === "dark" ? "rgba(139, 92, 246, 0.55)" : "rgba(0, 212, 255, 0.55)"
  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 w-80 h-80 rounded-full blur-3xl opacity-70 transition-transform duration-700 group-hover:scale-125"
        style={{ background: `radial-gradient(circle, ${color} 0%, transparent 70%)` }}
      />
      {tone === "dark" ? (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-20 -bottom-28 w-72 h-72 rounded-full blur-3xl opacity-60"
          style={{ background: "radial-gradient(circle, rgba(0, 212, 255, 0.45) 0%, transparent 70%)" }}
        />
      ) : null}
    </>
  )
}

function Tile({ capability, featured }: { capability: Capability; featured: boolean }) {
  const styles = toneStyles[capability.tone]
  const Icon = capability.icon
  const isLight = capability.tone === "light"

  return (
    <Link
      href={capability.href}
      className={`group relative isolate flex h-full min-h-[220px] sm:min-h-[240px] flex-col overflow-hidden rounded-3xl p-6 sm:p-7 md:p-8 transition-[transform,box-shadow,border-color] duration-500 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(32,62,236,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#203eec]/50 focus-visible:ring-offset-4 focus-visible:ring-offset-background ${styles.tile}`}
      style={styles.background ? { background: styles.background } : undefined}
    >
      <Glow tone={capability.tone} />

      {/* Oversized watermark glyph gives the large tiles depth */}
      {featured ? (
        <Icon
          aria-hidden="true"
          strokeWidth={1}
          className="pointer-events-none absolute -right-10 -bottom-10 w-52 h-52 sm:w-72 sm:h-72 text-white/10 transition-transform duration-700 group-hover:-rotate-6 group-hover:scale-105"
        />
      ) : null}

      <div className="relative flex items-start justify-between gap-4">
        <span
          className={`flex items-center justify-center rounded-2xl ${featured ? "w-14 h-14" : "w-12 h-12"} ${
            isLight ? "bg-[#203eec]/[0.08] text-[#203eec] transition-colors duration-300 group-hover:bg-[#203eec] group-hover:text-white" : "bg-white/15 text-white backdrop-blur-sm"
          }`}
        >
          <Icon className={featured ? "w-7 h-7" : "w-6 h-6"} aria-hidden="true" />
        </span>
        <ArrowUpRight
          aria-hidden="true"
          className={`w-6 h-6 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 ${
            isLight ? "text-muted-foreground group-hover:text-[#203eec]" : "text-white/70 group-hover:text-white"
          }`}
        />
      </div>

      <div className="relative mt-auto pt-10">
        <h3
          className={`font-semibold tracking-tight text-balance ${styles.text} ${
            featured ? "text-[1.75rem] sm:text-3xl md:text-4xl lg:text-5xl leading-[1.05]" : "text-xl md:text-2xl leading-tight"
          }`}
        >
          {capability.name}
        </h3>
        {featured ? (
          <ul className="mt-5 flex flex-wrap gap-2">
            {capability.scope.map((item) => (
              <li key={item} className={`px-3 py-1 text-sm rounded-full border ${styles.chip}`}>
                {item}
              </li>
            ))}
          </ul>
        ) : (
          <p className={`mt-2 text-sm leading-relaxed ${styles.sub}`}>{capability.scope.join(", ")}</p>
        )}
      </div>
    </Link>
  )
}

export function Capabilities() {
  return (
    <section id="works" className="scroll-mt-24 py-20 md:py-28 border-t border-border">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <Reveal className="mb-12 md:mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-balance">What we deliver</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-[48ch]">
            Strategy, engineering and growth under one roof.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[260px] gap-4">
          {capabilities.map((capability, index) => (
            <Reveal key={capability.name} delay={Math.min(index, 5) * 0.05} className={capability.span}>
              <Tile capability={capability} featured={index < 2} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
