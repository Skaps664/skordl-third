import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import Script from "next/script"
import { ArrowLeft, ArrowUpRight } from "lucide-react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { GradientBar } from "@/components/ui/gradient-bar"
import { blogPosts } from "@/lib/blog-posts"
import { absoluteUrl, buildMetadata } from "@/lib/seo"

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find((item) => item.slug === slug)

  if (!post) {
    return {
      title: "Blog Post Not Found | Skord Labs",
      robots: {
        index: false,
        follow: false,
      },
    }
  }

  return buildMetadata({
    title: `${post.title} | Skord Labs Blog`,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    type: "article",
    keywords: [post.category, "Skord Labs blog", "software engineering insights"],
  })
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = blogPosts.find(p => p.slug === slug)

  if (!post) {
    notFound()
  }

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: absoluteUrl(post.image),
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
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
    articleSection: post.category,
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
        name: "Blog",
        item: absoluteUrl("/blog"),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: absoluteUrl(`/blog/${post.slug}`),
      },
    ],
  }

  return (
    <>
      <Script
        id={`blog-posting-schema-${post.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />
      <Script
        id={`blog-breadcrumb-schema-${post.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Header />
      <main className="pt-20 md:pt-32">
        <article className="py-20 md:py-32">
          <div className="max-w-4xl mx-auto px-6 md:px-12">
            {/* Back Button */}
            <div className="mb-8">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </Link>
            </div>

            {/* Hero Image */}
            <div className="relative aspect-[2/1] overflow-hidden rounded-2xl bg-secondary mb-8">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Meta Information */}
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
              <span className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-xs font-medium">
                {post.category}
              </span>
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-8">
              {post.title}
            </h1>

            {/* Excerpt */}
            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              {post.excerpt}
            </p>

            {/* Content */}
            <div
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Share/Related Section */}
            <div className="mt-16 pt-8 border-t border-border">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-sm text-muted-foreground">Share this post:</span>
                  <div className="flex gap-2">
                    <button className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors">
                      <span className="sr-only">Share on Twitter</span>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                    </button>
                    <button className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors">
                      <span className="sr-only">Share on LinkedIn</span>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </button>
                  </div>
                </div>
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary"
                >
                  View all posts
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
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
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}