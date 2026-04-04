import type { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { GradientBar } from "@/components/ui/gradient-bar"
import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "E-commerce Product Engineering | Skord Labs",
  description:
    "E-commerce platforms, performance optimization, and growth systems engineered for scalable storefront and operations success.",
  path: "/industries/ecommerce",
  keywords: ["ecommerce development", "storefront performance", "commerce platforms"],
})

export default function EcommerceIndustryPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="py-16 md:py-24 lg:py-32 border-b border-border">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12 max-w-4xl">
            <p className="text-sm font-mono text-muted-foreground mb-6 tracking-wider uppercase">Industries / E-commerce</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] mb-6">E-commerce</h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              We help e-commerce teams build faster storefront experiences, smarter operations, and better growth systems,
              including support for hiring, mentorship, and performance-focused product execution.
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <GradientBar />
    </>
  )
}
