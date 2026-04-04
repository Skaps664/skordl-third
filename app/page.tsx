import type { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Hero } from "@/components/sections/hero"
import { Transformation } from "@/components/sections/transformation"
import { About } from "@/components/sections/about"
import { ClientLogos } from "@/components/sections/client-logos"
import { Services } from "@/components/sections/services"
import { TalentGrowth } from "@/components/sections/talent-growth"
import { UniqueOfferings } from "@/components/sections/unique-offerings"
import { Testimonials } from "@/components/sections/testimonials"
import { Approach } from "@/components/sections/awards"
import { Insights } from "@/components/sections/insights"
import { CalendlyBooking } from "@/components/sections/calendly-booking"
import { ClutchReviews } from "@/components/sections/clutch-reviews"
import { FinalCTA } from "@/components/sections/final-cta"
import { GradientBar } from "@/components/ui/gradient-bar"
import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Skord Labs | AI, Software Development, and Technical Growth",
  description:
    "Skord Labs helps teams build production software, implement AI systems, and grow through stronger technical hiring and execution.",
  path: "/",
  keywords: ["software development", "AI solutions", "technical consulting", "Skord Labs"],
})

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Transformation />
        <ClientLogos />
        
        <About />
        <Services />
        <TalentGrowth />
        <Testimonials />

        {/* <UniqueOfferings /> */}
        
        
        {/* <Approach /> */}
        <Insights />
        {/* <ClutchReviews /> */}
        <FinalCTA />
        {/* <CalendlyBooking /> */}
      </main>
      <Footer />
      <GradientBar />
    </>
  )
}
