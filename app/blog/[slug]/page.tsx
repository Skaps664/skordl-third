import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowUpRight } from "lucide-react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { GradientBar } from "@/components/ui/gradient-bar"

const blogPosts = [
  {
    id: 1,
    title: "Physics-Informed Neural Networks for Structural Design",
    slug: "physics-informed-neural-networks-structural-design",
    excerpt: "Applying PINN methodology to structural weight prediction. Research on integrating domain knowledge with neural networks.",
    content: `
      <h2>Introduction</h2>
      <p>Physics-Informed Neural Networks (PINNs) represent a revolutionary approach to solving complex engineering problems by seamlessly integrating physical laws with machine learning techniques.</p>

      <h2>The Challenge</h2>
      <p>Traditional structural design optimization often requires extensive computational resources and expert knowledge. We sought to develop a more efficient approach that could predict structural weights with high accuracy while incorporating fundamental physics principles.</p>

      <h2>Our Approach</h2>
      <p>By implementing PINN methodology, we created a neural network that inherently understands the laws of physics. The network was trained on both experimental data and physics-based loss functions, ensuring that solutions remain physically consistent.</p>

      <h2>Results</h2>
      <p>The resulting model achieved 95% accuracy in weight predictions while reducing computational time by 80% compared to traditional finite element analysis methods.</p>

      <h2>Future Implications</h2>
      <p>This work opens new possibilities for rapid prototyping and optimization in structural engineering, potentially transforming how we approach complex design problems.</p>
    `,
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
    content: `
      <h2>The Production ML Challenge</h2>
      <p>Deploying machine learning models in production environments presents unique challenges that go beyond model accuracy and performance metrics.</p>

      <h2>Key Lessons Learned</h2>
      <p>Through multiple large-scale deployments, we've identified critical factors for successful ML integration: robust monitoring, automated retraining pipelines, and comprehensive error handling.</p>

      <h2>Architecture Patterns</h2>
      <p>We developed a modular architecture that separates model serving, monitoring, and retraining components, allowing for independent scaling and updates.</p>

      <h2>Monitoring and Maintenance</h2>
      <p>Comprehensive monitoring includes not just model performance but also system health, data quality, and business metrics alignment.</p>
    `,
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
    content: `
      <h2>Data-Intensive Application Challenges</h2>
      <p>As applications grow in complexity and data volume, traditional monolithic architectures become insufficient for handling the demands of modern data processing.</p>

      <h2>Distributed Systems Design</h2>
      <p>Our approach focuses on building resilient, scalable systems that can handle millions of data points while maintaining low latency and high availability.</p>

      <h2>Key Components</h2>
      <ul>
        <li>Event-driven architecture for real-time processing</li>
        <li>Microservices for independent scaling</li>
        <li>Advanced caching strategies</li>
        <li>Comprehensive monitoring and alerting</li>
      </ul>

      <h2>Performance Optimization</h2>
      <p>Through careful optimization of data flows and processing pipelines, we achieved sub-second response times even with complex analytical queries.</p>
    `,
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
    content: `
      <h2>The Art of Prompt Engineering</h2>
      <p>Effective prompt engineering is crucial for getting high-quality outputs from large language models. It's both an art and a science that requires understanding model behavior and human-AI interaction patterns.</p>

      <h2>Core Techniques</h2>
      <p>We developed a systematic approach to prompt engineering that includes context setting, role definition, output formatting, and iterative refinement.</p>

      <h2>Advanced Strategies</h2>
      <ul>
        <li>Chain-of-thought prompting for complex reasoning</li>
        <li>Few-shot learning techniques</li>
        <li>Context window optimization</li>
        <li>Output parsing and validation</li>
      </ul>

      <h2>Practical Applications</h2>
      <p>These techniques have been successfully applied across various domains including code generation, content creation, and analytical tasks.</p>
    `,
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
    content: `
      <h2>Microservices Resilience</h2>
      <p>Building resilient microservices requires a holistic approach that addresses failures at every level of the system architecture.</p>

      <h2>Core Principles</h2>
      <ul>
        <li>Circuit breaker patterns for fault isolation</li>
        <li>Graceful degradation strategies</li>
        <li>Automated recovery mechanisms</li>
        <li>Comprehensive monitoring and alerting</li>
      </ul>

      <h2>Implementation Strategies</h2>
      <p>We implemented these patterns using industry-standard tools and frameworks, ensuring compatibility and maintainability.</p>

      <h2>Testing and Validation</h2>
      <p>Rigorous testing including chaos engineering and load testing ensures systems can handle real-world failure scenarios.</p>
    `,
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
    content: `
      <h2>Computer Vision in Industry</h2>
      <p>Computer vision technologies are revolutionizing manufacturing quality control by providing automated, consistent inspection capabilities.</p>

      <h2>Technical Implementation</h2>
      <p>Our systems combine advanced deep learning models with real-time processing capabilities to detect defects with high accuracy.</p>

      <h2>Key Challenges Solved</h2>
      <ul>
        <li>Variable lighting conditions</li>
        <li>Complex defect patterns</li>
        <li>High-speed production lines</li>
        <li>Integration with existing systems</li>
      </ul>

      <h2>Business Impact</h2>
      <p>Implementation resulted in 90% defect detection rates and significant reduction in waste and rework costs.</p>
    `,
    image: "/images/bg-3.png",
    date: "Aug 2024",
    readTime: "Case Study",
    category: "Computer Vision",
  },
]

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find(p => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <>
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