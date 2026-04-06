import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import Script from "next/script"
import { ArrowLeft, ArrowUpRight } from "lucide-react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { GradientBar } from "@/components/ui/gradient-bar"
import { caseStudies } from "@/lib/case-studies"
import { absoluteUrl, buildMetadata } from "@/lib/seo"

interface CaseStudyPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params
  const study = caseStudies.find((item) => item.slug === slug)

  if (!study) {
    return {
      title: "Case Study Not Found | Skord Labs",
      robots: {
        index: false,
        follow: false,
      },
    }
  }

  return buildMetadata({
    title: `${study.title} | Case Study | Skord Labs`,
    description: study.description,
    path: `/case-studies/${study.slug}`,
    type: "article",
    keywords: [study.category, "case study", "Skord Labs"],
  })
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params
  const study = caseStudies.find((item) => item.slug === slug)

  if (!study) {
    notFound()
  }

  const caseStudySchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: study.title,
    description: study.description,
    image: [study.image, ...(study.galleryImages ?? [])].map((image) => absoluteUrl(image)),
    author: {
      "@type": "Organization",
      name: "Skord Labs",
    },
    publisher: {
      "@type": "Organization",
      name: "Skord Labs",
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/favicon/android-chrome-512x512.png"),
      },
    },
    mainEntityOfPage: absoluteUrl(`/case-studies/${study.slug}`),
    articleSection: study.category,
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: absoluteUrl("/"),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Case Studies",
        item: absoluteUrl("/case-studies"),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: study.title,
        item: absoluteUrl(`/case-studies/${study.slug}`),
      },
    ],
  }

  return (
    <>
      <Script
        id={`case-study-schema-${study.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudySchema) }}
      />
      <Script
        id={`case-study-breadcrumb-schema-${study.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Header />
      <main className="pt-20 md:pt-32">
        <article className="py-20 md:py-32">
          <div className="max-w-4xl mx-auto px-6 md:px-12">
            <div className="mb-8">
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Case Studies
              </Link>
            </div>

            <div className="relative aspect-[2/1] overflow-hidden rounded-2xl bg-secondary mb-8">
              <Image
                src={study.image || "/placeholder.svg"}
                alt={study.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="flex flex-wrap items-center gap-4 mb-8">
              <span className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm font-medium">
                {study.category}
              </span>
              {study.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6">
              {study.title}
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {study.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 p-6 bg-secondary rounded-2xl">
              <div>
                <h3 className="font-semibold mb-2">Client</h3>
                <p className="text-muted-foreground">{study.client}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Duration</h3>
                <p className="text-muted-foreground">{study.duration}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Team</h3>
                <p className="text-muted-foreground">{study.team.join(", ")}</p>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Delivery Highlights</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {study.tags.map((tag) => (
                  <div key={tag} className="rounded-xl border border-border bg-card p-4">
                    <p className="text-sm font-medium">{tag}</p>
                  </div>
                ))}
              </div>
            </div>

            {study.projectUrl ? (
              <div className="mb-10">
                <Link
                  href={study.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium rounded-full border border-border hover:bg-secondary transition-colors"
                >
                  Visit Live Project
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            ) : null}

            <div className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">Key Results</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {study.results.map((result, index) => (
                  <div key={index} className="p-4 bg-card border border-border rounded-xl">
                    <p className="text-sm font-medium">{result}</p>
                  </div>
                ))}
              </div>
            </div>

            {study.galleryImages?.length ? (
              <div className="mb-12">
                <h2 className="text-2xl font-semibold mb-6">Project Gallery</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {study.galleryImages.map((imagePath, index) => (
                    <div key={imagePath} className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-secondary">
                      <Image
                        src={imagePath}
                        alt={`${study.title} project image ${index + 2}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ) : null}

            <div
              className="max-w-none text-base md:text-lg text-muted-foreground leading-relaxed [&_h2]:text-2xl [&_h2]:md:text-3xl [&_h2]:font-semibold [&_h2]:text-foreground [&_h2]:mt-10 [&_h2]:mb-4 [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-5 [&_li]:mb-2"
              dangerouslySetInnerHTML={{ __html: study.content }}
            />

            <div className="mt-16 pt-8 border-t border-border">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4">Ready to start your project?</h3>
                <p className="text-muted-foreground mb-6">
                  Let's discuss how we can help you achieve similar results.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
                  >
                    Start a Project
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/case-studies"
                    className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-full font-medium hover:bg-secondary transition-colors"
                  >
                    View More Case Studies
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <GradientBar />
    </>
  )
}

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }))
}
