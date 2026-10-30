import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Reveal } from "@/components/ui/reveal"

const industries = [
  { name: "Fintech and banking", href: "/industries/fintech-banking" },
  { name: "Healthcare", href: "/industries/healthcare" },
  { name: "E-commerce and retail", href: "/industries/ecommerce" },
  { name: "Real estate", href: "/industries/real-estate" },
  { name: "Education", href: "/industries/education" },
]

const stats = [
  { value: "120+", label: "Projects delivered" },
  { value: "11", label: "Industries served" },
  { value: "15+", label: "Specialists" },
  { value: "6", label: "Practice areas" },
]

export function Industries() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-[#1a2fd6] text-white">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-32 -top-40 w-[640px] h-[640px] rounded-full opacity-60 blur-3xl"
              style={{ background: "radial-gradient(circle, #00d4ff 0%, transparent 65%)" }}
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-40 -bottom-48 w-[560px] h-[560px] rounded-full opacity-40 blur-3xl"
              style={{ background: "radial-gradient(circle, #8b5cf6 0%, transparent 65%)" }}
            />

            <div className="relative grid lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] gap-10 lg:gap-16 px-6 pt-10 pb-8 sm:px-8 sm:pt-12 sm:pb-10 md:px-14 md:pt-16">
              <div>
                <h2 className="text-[2rem] sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05] text-balance">
                  Built for ambitious companies
                </h2>
                <p className="mt-6 text-lg text-white/80 max-w-[40ch]">
                  From fintech to retail, we engineer systems that hold up as you scale.
                </p>
              </div>

              <ul className="border-t border-white/20">
                {industries.map((industry) => (
                  <li key={industry.name} className="border-b border-white/20">
                    <Link
                      href={industry.href}
                      className="group flex items-center justify-between gap-6 py-4 sm:py-5 text-lg sm:text-xl md:text-2xl font-medium focus-visible:outline-none focus-visible:underline"
                    >
                      <span className="transition-transform duration-300 group-hover:translate-x-2">{industry.name}</span>
                      <ArrowUpRight
                        className="w-6 h-6 shrink-0 text-white/60 transition-[transform,color] group-hover:text-white group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <dl className="relative grid grid-cols-2 md:grid-cols-4 border-t border-white/20">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`flex flex-col min-w-0 px-6 sm:px-8 md:px-14 py-6 sm:py-8 md:py-10 ${index % 2 === 1 ? "border-l border-white/20" : ""} ${
                    index === 2 ? "md:border-l border-t md:border-t-0 border-white/20" : ""
                  } ${index === 3 ? "border-t md:border-t-0" : ""}`}
                >
                  <dt className="order-2 mt-2 text-sm md:text-base text-white/70">{stat.label}</dt>
                  <dd className="order-1 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight tabular-nums">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
