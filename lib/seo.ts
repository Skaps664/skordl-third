import type { Metadata } from "next"

const SITE_URL = "https://www.skordlabs.com"

export function absoluteUrl(path = "/") {
  return `${SITE_URL}${path === "/" ? "" : path}`
}

type BuildMetadataOptions = {
  title: string
  description: string
  path: string
  keywords?: string[]
  type?: "website" | "article"
}

export function buildMetadata({
  title,
  description,
  path,
  keywords,
  type = "website",
}: BuildMetadataOptions): Metadata {
  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      type,
      url: absoluteUrl(path),
      siteName: "Skord Labs",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  }
}
