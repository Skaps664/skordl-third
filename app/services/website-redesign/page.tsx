import type { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { GradientBar } from "@/components/ui/gradient-bar"
import { ServiceDetail } from "@/components/services/service-detail"
import { servicesContent } from "@/lib/services-content"
import { buildMetadata } from "@/lib/seo"

const service = servicesContent["website-redesign"]

export const metadata: Metadata = buildMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: "/services/website-redesign",
  keywords: service.keywords,
})

export default function WebsiteRedesignPage() {
  return (
    <>
      <Header />
      <ServiceDetail service={service} />
      <Footer />
      <GradientBar />
    </>
  )
}
