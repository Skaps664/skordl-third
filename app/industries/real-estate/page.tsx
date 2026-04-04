import type { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { GradientBar } from "@/components/ui/gradient-bar"
import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Real Estate Technology Solutions | Skord Labs",
  description:
    "Digital real estate platforms for lead generation, operations, and customer experience with scalable engineering support.",
  path: "/industries/real-estate",
  keywords: ["real estate software", "proptech development", "lead and operations systems"],
})

export default function RealEstateIndustryPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="py-16 md:py-24 lg:py-32 border-b border-border">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12 max-w-4xl">
            <p className="text-sm font-mono text-muted-foreground mb-6 tracking-wider uppercase">Industries / Real Estate</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] mb-6">Real Estate</h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              We build digital real estate platforms that improve lead flow, operations, and customer experience,
              while helping teams grow with practical guidance, hiring support, and scalable delivery practices.
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <GradientBar />
    </>
  )
}
