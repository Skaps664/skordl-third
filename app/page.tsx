import type { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Hero } from "@/components/sections/hero"
import { Industries } from "@/components/home-v2/industries"
import { Capabilities } from "@/components/home-v2/capabilities"
import { EngagementModels } from "@/components/home-v2/engagement-models"
import { LetsTalk } from "@/components/home-v2/lets-talk"
import { GradientBar } from "@/components/ui/gradient-bar"
import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Skord Labs | Software, AI and Digital Growth",
  description:
    "Skord Labs designs, engineers and grows digital products: web platforms, enterprise systems, AI, mobile apps and marketing.",
  path: "/",
  keywords: ["software development", "AI solutions", "digital marketing", "Skord Labs"],
})

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Capabilities />
        <Industries />
        <EngagementModels />
        <LetsTalk />
      </main>
      <Footer />
      <GradientBar />
    </>
  )
}
