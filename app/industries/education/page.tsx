import type { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { GradientBar } from "@/components/ui/gradient-bar"
import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Education Technology Development | Skord Labs",
  description:
    "Education technology products focused on engagement, outcomes, and sustainable scaling through strong product engineering.",
  path: "/industries/education",
  keywords: ["edtech development", "learning platforms", "education software engineering"],
})

export default function EducationIndustryPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="py-16 md:py-24 lg:py-32 border-b border-border">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12 max-w-4xl">
            <p className="text-sm font-mono text-muted-foreground mb-6 tracking-wider uppercase">Industries / Education</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] mb-6">Education</h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              We design education technology that improves outcomes and engagement, and we guide teams through talent growth,
              capability building, and product development that can scale sustainably.
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <GradientBar />
    </>
  )
}
