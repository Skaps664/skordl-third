import type { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Products } from "@/components/sections/products"
import { GradientBar } from "@/components/ui/gradient-bar"
import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Products | Skord Labs",
  description:
    "Browse Skord Labs products across operations, automation, analytics, and AI-driven growth workflows.",
  path: "/products",
  keywords: ["software products", "AI tools", "Skord Labs products"],
})

export default function ProductsPage() {
  return (
    <>
      <Header />
      <main>
        <Products />
      </main>
      <Footer />
      <GradientBar />
    </>
  )
}
