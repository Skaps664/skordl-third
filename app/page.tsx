import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Hero } from "@/components/sections/hero"
import { Transformation } from "@/components/sections/transformation"
import { SelectedWorks } from "@/components/sections/selected-works"
import { About } from "@/components/sections/about"
import { ClientLogos } from "@/components/sections/client-logos"
import { Services } from "@/components/sections/services"
import { Team } from "@/components/sections/team"
import { UniqueOfferings } from "@/components/sections/unique-offerings"
import { Testimonials } from "@/components/sections/testimonials"
import { Approach } from "@/components/sections/awards"
import { Insights } from "@/components/sections/insights"
import { CalendlyBooking } from "@/components/sections/calendly-booking"
import { ClutchReviews } from "@/components/sections/clutch-reviews"
import { FinalCTA } from "@/components/sections/final-cta"
import { GradientBar } from "@/components/ui/gradient-bar"

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Transformation />
        <SelectedWorks />
        <ClientLogos />
        
        <About />
        <Services />
        <Team />
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
