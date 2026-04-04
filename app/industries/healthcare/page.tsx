import type { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { GradientBar } from "@/components/ui/gradient-bar"
import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Healthcare Software Development | Skord Labs",
  description:
    "Healthcare software systems built for compliance, reliability, and scalable delivery with technical mentorship for internal teams.",
  path: "/industries/healthcare",
  keywords: ["healthcare software", "HIPAA-ready systems", "medical tech engineering"],
})

export default function HealthcareIndustryPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="py-16 md:py-24 lg:py-32 border-b border-border">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12 max-w-4xl">
            <p className="text-sm font-mono text-muted-foreground mb-6 tracking-wider uppercase">Industries / Healthcare</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] mb-6">Healthcare</h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              We create healthcare systems with reliability and compliance at the core, while supporting teams in talent development,
              technical mentorship, and guided growth from pilot to production.
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <GradientBar />
    </>
  )
}
