import type { Metadata } from "next"
import CaseStudiesClientPage from "./case-studies-client"
import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Case Studies | Skord Labs",
  description:
    "Explore Skord Labs case studies across AI, product engineering, and automation with measurable outcomes.",
  path: "/case-studies",
  keywords: ["case studies", "AI projects", "software outcomes", "Skord Labs"],
})

export default function CaseStudiesPage() {
  return <CaseStudiesClientPage />
}