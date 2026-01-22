"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { SectionTitle } from "@/components/ui/section-title"
import { GradientBar } from "@/components/ui/gradient-bar"

const blogPosts = [
  {
    id: 1,
    title: "Physics-Informed Neural Networks for Structural Design",
    slug: "physics-informed-neural-networks-structural-design",
    excerpt: "Applying PINN methodology to structural weight prediction. Research on integrating domain knowledge with neural networks.",
    image: "/images/bg-1.png",
    date: "Jan 2025",
    readTime: "Research Paper",
    category: "AI Research",
  },
  {
    id: 2,
    title: "Scalable ML Integration in Production Systems",
    slug: "scalable-ml-integration-production-systems",
    excerpt: "Lessons from deploying machine learning models at scale. Bridging the gap between research and production engineering.",
    image: "/images/bg-2.png",
    date: "Dec 2024",
    readTime: "Technical Deep-Dive",
    category: "Engineering",
  },
  {
    id: 3,
    title: "Backend Architecture for Data-Intensive Applications",
    slug: "backend-architecture-data-intensive-applications",
    excerpt: "Building systems that handle complex data pipelines. Design patterns and best practices for distributed data engineering.",
    image: "/images/bg-3.png",
    date: "Nov 2024",
    readTime: "Architecture Guide",
    category: "Backend",
  },
  {
    id: 4,
    title: "Advanced Prompt Engineering Techniques",
    slug: "advanced-prompt-engineering-techniques",
    excerpt: "Mastering the art of crafting effective prompts for large language models. Techniques that improve AI output quality.",
    image: "/images/bg-1.png",
    date: "Oct 2024",
    readTime: "Tutorial",
    category: "AI",
  },
  {
    id: 5,
    title: "Building Resilient Microservices",
    slug: "building-resilient-microservices",
    excerpt: "Design principles for creating fault-tolerant distributed systems. From theory to production implementation.",
    image: "/images/bg-2.png",
    date: "Sep 2024",
    readTime: "Guide",
    category: "Architecture",
  },
  {
    id: 6,
    title: "Computer Vision in Manufacturing",
    slug: "computer-vision-manufacturing",
    excerpt: "Implementing AI-powered quality control systems. Real-world applications and technical challenges.",
    image: "/images/bg-3.png",
    date: "Aug 2024",
    readTime: "Case Study",
    category: "Computer Vision",
  },
]

export default function BlogPage() {
  const featuredPost = blogPosts[0]
  const otherPosts = blogPosts.slice(1)

  return (
    <>
      <Header />
      <main className="">
        <section className="py-20 md:py-32">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            {/* Section Header */}
            <div className="text-center mb-12 md:mb-16">
              <SectionTitle className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
                Blog & Research Insights
              </SectionTitle>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                Deep dives into AI research, software engineering, and technical innovation.
                Sharing knowledge from our journey in building cutting-edge solutions.
              </p>
            </div>

            {/* Featured Post */}
            <div className="mb-12 md:mb-16">
              <Link href={`/blog/${featuredPost.slug}`} className="group block">
                <article className="overflow-hidden rounded-2xl md:rounded-3xl border border-border bg-card transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    {/* Image */}
                    <div className="relative aspect-[4/3] lg:aspect-[3/2] overflow-hidden bg-secondary">
                      <Image
                        src={featuredPost.image || "/placeholder.svg"}
                        alt={featuredPost.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                        Featured
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 md:p-8 lg:p-12 flex flex-col justify-center">
                      <div className="text-xs font-medium text-primary mb-2">
                        {featuredPost.category}
                      </div>

                      <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
                        <span>{featuredPost.date}</span>
                        <span>•</span>
                        <span>{featuredPost.readTime}</span>
                      </div>

                      <h3 className="text-2xl md:text-3xl font-semibold group-hover:text-muted-foreground transition-colors mb-4">
                        {featuredPost.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-6">{featuredPost.excerpt}</p>

                      <div className="flex items-center gap-2 text-sm font-medium transition-colors group-hover:text-primary">
                        Read more
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            </div>

            {/* Blog Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {otherPosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`} className="group block">
                  <article className="h-full">
                    {/* Image */}
                    <div className="relative aspect-[3/2] overflow-hidden rounded-2xl bg-secondary mb-4">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    {/* Category */}
                    <div className="text-xs font-medium text-primary mb-2">
                      {post.category}
                    </div>

                    {/* Meta */}
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>

                    {/* Content */}
                    <h3 className="text-lg font-semibold group-hover:text-muted-foreground transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{post.excerpt}</p>

                    {/* Read More */}
                    <div className="flex items-center gap-2 mt-4 text-sm font-medium transition-colors group-hover:text-primary">
                      Read more
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <GradientBar />
    </>
  )
}