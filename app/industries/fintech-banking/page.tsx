import type { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { GradientBar } from "@/components/ui/gradient-bar"
import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Fintech and Banking Software Solutions | Skord Labs",
  description:
    "Secure, compliant fintech and banking software solutions with technical team enablement and scalable delivery systems.",
  path: "/industries/fintech-banking",
  keywords: ["fintech software development", "banking systems", "compliant engineering"],
})

export default function FintechBankingIndustryPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="py-16 md:py-24 lg:py-32 border-b border-border">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12 max-w-4xl">
            <p className="text-sm font-mono text-muted-foreground mb-6 tracking-wider uppercase">Industries / Fintech & Banking</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] mb-6">Fintech & Banking</h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              We build secure, compliant fintech platforms and also help teams hire stronger technical talent,
              improve delivery quality, and grow internal capabilities for long-term scale.
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <GradientBar />
    </>
  )
}
