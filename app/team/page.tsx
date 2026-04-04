import type { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Team } from "@/components/sections/team"
import { GradientBar } from "@/components/ui/gradient-bar"
import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Our Team | Skord Labs",
  description:
    "Meet the engineers, researchers, and product builders behind Skord Labs and our client delivery work.",
  path: "/team",
  keywords: ["software team", "AI engineers", "Skord Labs team"],
})

export default function TeamPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="py-16 md:py-24 border-b border-border">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <p className="text-sm font-mono text-muted-foreground mb-6 tracking-wider uppercase">
              Company / Team
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] mb-6">
              Our Team
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl leading-relaxed">
              Meet the researchers, engineers, and builders behind Skord Labs. We combine product thinking,
              technical depth, and practical execution to help teams build and grow.
            </p>
          </div>
        </section>
        <Team />
      </main>
      <Footer />
      <GradientBar />
    </>
  )
}
