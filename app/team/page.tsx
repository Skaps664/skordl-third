import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Team } from "@/components/sections/team"
import { Reveal } from "@/components/ui/reveal"
import { GradientBar } from "@/components/ui/gradient-bar"
import { buildMetadata } from "@/lib/seo"
import { founder, leadership, orgStats } from "@/lib/team"

export const metadata: Metadata = buildMetadata({
  title: "Leadership & Team | Skord Labs",
  description:
    "Meet the leadership of Skord Labs - the founder, practice leads, and specialist teams accountable for every engagement we deliver.",
  path: "/team",
  keywords: ["Skord Labs team", "leadership", "software engineering team", "AI engineers", "practice leads"],
})

// Hero shows the founder plus the first two leads; the full roster is further down the page.
const portraitWall = [founder, ...leadership].slice(0, 3)

export default function TeamPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="relative overflow-hidden border-b border-border">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-40 top-10 -z-10 w-[640px] h-[640px] rounded-full opacity-40 blur-3xl"
            style={{ background: "radial-gradient(circle, rgba(32, 62, 236, 0.18) 0%, rgba(0, 212, 255, 0.08) 45%, transparent 70%)" }}
          />

          <div className="max-w-[1280px] mx-auto px-6 md:px-12 pt-14 md:pt-20 pb-16 md:pb-24">
            <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-14 lg:gap-16 items-center">
              <Reveal>
                <p className="text-sm font-mono text-muted-foreground mb-6 tracking-wider uppercase">
                  Company / Leadership
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.08]">
                  The team behind
                  <br />
                  <span
                    className="inline-block pb-1"
                    style={{
                      background: "linear-gradient(135deg, #ff006e 0%, #8b5cf6 33%, #203eec 66%, #00d4ff 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    every engagement
                  </span>
                </h1>
                <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-[44ch]">
                  A founder-led studio with a named lead for every discipline, so you always know who builds your
                  product.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-medium text-white rounded-full whitespace-nowrap transition-[transform,box-shadow] hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
                    style={{
                      background: "linear-gradient(135deg, #203eec 0%, #00d4ff 100%)",
                      boxShadow: "0 4px 20px rgba(32, 62, 236, 0.3)",
                    }}
                  >
                    Talk to our team
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                  <Link
                    href="/careers"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-medium border border-border rounded-full whitespace-nowrap hover:bg-secondary transition-colors"
                  >
                    View open roles
                    <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </div>
              </Reveal>

              {/* Portrait wall: middle column sits lower for an offset rhythm */}
              <ul className="grid grid-cols-3 gap-3 md:gap-4 pb-6 md:pb-10 max-w-[560px] lg:max-w-none">
                {portraitWall.map((person, index) => (
                  <li key={person.name} className={index === 1 ? "translate-y-6 md:translate-y-10" : ""}>
                    <Reveal delay={0.08 * index}>
                      <figure className="group">
                        <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-secondary">
                          <Image
                            src={person.image}
                            alt={`Portrait of ${person.name}`}
                            fill
                            priority
                            sizes="(min-width: 1280px) 190px, (min-width: 1024px) 15vw, (min-width: 640px) 180px, 30vw"
                            className="object-cover grayscale transition-[filter,transform] duration-500 group-hover:grayscale-0 group-hover:scale-[1.03]"
                            style={{ objectPosition: person.imagePosition ?? "50% 30%" }}
                          />
                        </div>
                        <figcaption className="mt-2.5">
                          <span className="block text-sm font-medium leading-tight">{person.firstName}</span>
                          <span className="block text-xs text-muted-foreground leading-tight mt-0.5 truncate">
                            {person.department}
                          </span>
                        </figcaption>
                      </figure>
                    </Reveal>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-border">
            <dl className="max-w-[1280px] mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4">
              {orgStats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`flex flex-col py-8 md:py-10 ${index % 2 === 1 ? "pl-6 md:pl-8 border-l border-border" : ""} ${
                    index === 2 ? "md:pl-8 md:border-l border-t md:border-t-0 border-border" : ""
                  } ${index === 3 ? "border-t md:border-t-0" : ""}`}
                >
                  <dt className="text-sm text-muted-foreground order-2">{stat.label}</dt>
                  <dd className="text-4xl md:text-5xl font-semibold tracking-tight mb-1 tabular-nums -order-1">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <Team />
      </main>
      <Footer />
      <GradientBar />
    </>
  )
}
