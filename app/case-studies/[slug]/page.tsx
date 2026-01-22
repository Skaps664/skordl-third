import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowUpRight } from "lucide-react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { GradientBar } from "@/components/ui/gradient-bar"

const caseStudies = [
  {
    id: 1,
    title: "AI Onboarding Assistant",
    slug: "ai-onboarding-assistant",
    category: "AI Product Development",
    description: "Building an intelligent onboarding flow powered by GPT-4 and natural conversations. Reduced user drop-off by 40% and improved completion rates.",
    content: `
      <h2>Project Overview</h2>
      <p>Our client needed to improve their user onboarding experience, which was suffering from high drop-off rates and low completion percentages. Traditional form-based onboarding was proving ineffective for their complex SaaS product.</p>

      <h2>The Challenge</h2>
      <p>Users were abandoning the onboarding process at a 60% rate, leading to poor product adoption and high support costs. The existing system required users to navigate through multiple complex forms without clear guidance.</p>

      <h2>Our Solution</h2>
      <p>We developed an AI-powered onboarding assistant that uses GPT-4 to create natural, conversational interactions. The system adapts to user responses, provides contextual help, and guides users through the setup process seamlessly.</p>

      <h3>Key Features</h3>
      <ul>
        <li>Natural language processing for user intent recognition</li>
        <li>Dynamic question flow based on user responses</li>
        <li>Contextual help and explanations</li>
        <li>Progress tracking and motivation</li>
        <li>Integration with existing user management systems</li>
      </ul>

      <h2>Technical Implementation</h2>
      <p>The solution was built using Next.js for the frontend, with a Node.js backend handling AI interactions. We integrated OpenAI's GPT-4 API with custom prompt engineering to ensure consistent and helpful responses.</p>

      <h2>Results & Impact</h2>
      <p>The implementation resulted in dramatic improvements across all key metrics, demonstrating the power of AI-driven user experience design.</p>
    `,
    image: "/images/work-onboarding.png",
    tags: ["AI", "v0", "Next.js", "OpenAI"],
    results: ["40% reduction in drop-off", "95% completion rate", "2x faster onboarding"],
    client: "TechFlow Inc.",
    duration: "3 months",
    team: ["AI Engineer", "UX Designer", "Full-stack Developer"],
  },
  {
    id: 2,
    title: "AI Fashion Curator",
    slug: "ai-fashion-curator",
    category: "E-commerce AI",
    description: "Personalized style recommendations using computer vision and preference learning. Increased conversion rates and customer satisfaction.",
    content: `
      <h2>Project Overview</h2>
      <p>An e-commerce fashion retailer wanted to differentiate themselves in a crowded market by offering truly personalized shopping experiences powered by AI.</p>

      <h2>The Challenge</h2>
      <p>Customers were overwhelmed by choice and generic recommendations. The retailer needed a way to understand individual style preferences and provide relevant suggestions that would drive conversions.</p>

      <h2>Our Solution</h2>
      <p>We built an AI fashion curator that combines computer vision analysis of user-uploaded photos with machine learning algorithms to understand and predict style preferences.</p>

      <h3>Key Features</h3>
      <ul>
        <li>Photo-based style analysis</li>
        <li>Personalized outfit recommendations</li>
        <li>Trend analysis and suggestions</li>
        <li>Virtual try-on capabilities</li>
        <li>Social sharing integration</li>
      </ul>

      <h2>Technical Implementation</h2>
      <p>The system uses advanced computer vision models to analyze clothing items and user photos, combined with collaborative filtering and deep learning for recommendation generation.</p>

      <h2>Results & Impact</h2>
      <p>The AI curator transformed the shopping experience, leading to significant business improvements and setting a new standard for personalized e-commerce.</p>
    `,
    image: "/images/work-fashion.png",
    tags: ["AI", "Machine Learning", "Midjourney"],
    results: ["35% increase in sales", "4.8/5 user rating", "60% repeat purchases"],
    client: "StyleHub",
    duration: "4 months",
    team: ["ML Engineer", "Computer Vision Specialist", "Frontend Developer"],
  },
  {
    id: 3,
    title: "Smart Task Manager",
    slug: "smart-task-manager",
    category: "Productivity AI",
    description: "AI-powered task prioritization and scheduling with natural language processing. Helped teams manage workloads more efficiently.",
    content: `
      <h2>Project Overview</h2>
      <p>A project management company needed to enhance their task management platform with intelligent features that could help teams prioritize and schedule work more effectively.</p>

      <h2>The Challenge</h2>
      <p>Teams were struggling with task overload and poor prioritization. Manual scheduling was time-consuming and often led to missed deadlines and burnout.</p>

      <h2>Our Solution</h2>
      <p>We developed a smart task manager that uses AI to analyze task complexity, dependencies, and team capacity to provide intelligent prioritization and scheduling recommendations.</p>

      <h3>Key Features</h3>
      <ul>
        <li>AI-powered task prioritization</li>
        <li>Smart scheduling suggestions</li>
        <li>Natural language task creation</li>
        <li>Team capacity analysis</li>
        <li>Progress prediction and alerts</li>
      </ul>

      <h2>Technical Implementation</h2>
      <p>The system combines NLP for task understanding with machine learning models for prioritization and scheduling optimization.</p>

      <h2>Results & Impact</h2>
      <p>The smart task manager revolutionized how teams approach project management, leading to better outcomes and improved team satisfaction.</p>
    `,
    image: "/images/work-tasks.png",
    tags: ["AI", "Claude", "Vibe Coding"],
    results: ["50% time savings", "90% task completion", "Improved team productivity"],
    client: "TaskFlow Pro",
    duration: "5 months",
    team: ["AI Engineer", "Product Manager", "DevOps Engineer"],
  },
  {
    id: 4,
    title: "Crypto AI Analytics",
    slug: "crypto-ai-analytics",
    category: "FinTech AI",
    description: "Real-time market insights and predictions powered by advanced AI models. Provided actionable trading signals and market analysis.",
    content: `
      <h2>Project Overview</h2>
      <p>A cryptocurrency trading platform wanted to provide their users with AI-powered market analysis and trading signals to improve trading decisions.</p>

      <h2>The Challenge</h2>
      <p>Cryptocurrency markets are highly volatile and complex. Traders needed better tools to analyze market trends and make informed decisions in real-time.</p>

      <h2>Our Solution</h2>
      <p>We built an AI analytics platform that processes vast amounts of market data to provide real-time insights, predictions, and actionable trading signals.</p>

      <h3>Key Features</h3>
      <ul>
        <li>Real-time market analysis</li>
        <li>AI-powered price predictions</li>
        <li>Risk assessment tools</li>
        <li>Portfolio optimization</li>
        <li>Automated trading signals</li>
      </ul>

      <h2>Technical Implementation</h2>
      <p>The platform uses advanced machine learning models including LSTM networks and transformer architectures to analyze market patterns and predict price movements.</p>

      <h2>Results & Impact</h2>
      <p>The AI analytics platform provided traders with unprecedented insights, leading to better trading decisions and improved financial outcomes.</p>
    `,
    image: "/images/work-crypto.png",
    tags: ["AI", "Data Viz", "GPT-4"],
    results: ["25% better returns", "Real-time insights", "Risk reduction"],
    client: "CryptoWise",
    duration: "6 months",
    team: ["Data Scientist", "ML Engineer", "FinTech Specialist"],
  },
  {
    id: 5,
    title: "Healthcare Data Platform",
    slug: "healthcare-data-platform",
    category: "Data Engineering",
    description: "Scalable platform for processing and analyzing medical data. Ensured HIPAA compliance while providing real-time analytics.",
    content: `
      <h2>Project Overview</h2>
      <p>A healthcare provider needed a secure, scalable platform to process and analyze patient data while maintaining strict HIPAA compliance standards.</p>

      <h2>The Challenge</h2>
      <p>Healthcare data is highly sensitive and regulated. The organization needed to process large volumes of data while ensuring patient privacy and regulatory compliance.</p>

      <h2>Our Solution</h2>
      <p>We designed and built a HIPAA-compliant data platform that securely processes, stores, and analyzes healthcare data with real-time analytics capabilities.</p>

      <h3>Key Features</h3>
      <ul>
        <li>HIPAA-compliant data processing</li>
        <li>Real-time analytics dashboard</li>
        <li>Secure data encryption</li>
        <li>Audit logging and monitoring</li>
        <li>Scalable cloud infrastructure</li>
      </ul>

      <h2>Technical Implementation</h2>
      <p>The platform was built using secure cloud infrastructure with end-to-end encryption, comprehensive audit trails, and automated compliance monitoring.</p>

      <h2>Results & Impact</h2>
      <p>The platform enabled better patient care through data-driven insights while maintaining the highest standards of data security and privacy.</p>
    `,
    image: "/images/bg-1.png",
    tags: ["Data Engineering", "HIPAA", "Real-time"],
    results: ["99.9% uptime", "HIPAA compliant", "50TB+ data processed"],
    client: "MedData Solutions",
    duration: "8 months",
    team: ["Data Engineer", "Security Specialist", "Healthcare Consultant"],
  },
  {
    id: 6,
    title: "Manufacturing Quality Control",
    slug: "manufacturing-quality-control",
    category: "Computer Vision",
    description: "AI-powered defect detection system for manufacturing lines. Improved quality control and reduced waste significantly.",
    content: `
      <h2>Project Overview</h2>
      <p>A manufacturing company needed to improve their quality control processes by implementing automated defect detection on their production lines.</p>

      <h2>The Challenge</h2>
      <p>Manual quality inspection was slow, inconsistent, and costly. The company needed a reliable automated system to detect defects in real-time.</p>

      <h2>Our Solution</h2>
      <p>We developed an AI-powered computer vision system that automatically detects manufacturing defects with high accuracy and speed.</p>

      <h3>Key Features</h3>
      <ul>
        <li>Real-time defect detection</li>
        <li>High-speed image processing</li>
        <li>Multiple defect type recognition</li>
        <li>Automated quality reporting</li>
        <li>Integration with production systems</li>
      </ul>

      <h2>Technical Implementation</h2>
      <p>The system uses advanced computer vision algorithms and deep learning models trained on thousands of defect examples to achieve industry-leading accuracy.</p>

      <h2>Results & Impact</h2>
      <p>The automated quality control system dramatically improved manufacturing efficiency and product quality while reducing operational costs.</p>
    `,
    image: "/images/bg-2.png",
    tags: ["Computer Vision", "Manufacturing", "Quality Control"],
    results: ["90% defect detection", "30% waste reduction", "ROI in 6 months"],
    client: "Precision Manufacturing",
    duration: "4 months",
    team: ["Computer Vision Engineer", "Manufacturing Expert", "Systems Integrator"],
  },
]

interface CaseStudyPageProps {
  params: {
    slug: string
  }
}

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  const study = caseStudies.find(s => s.slug === params.slug)

  if (!study) {
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
                href="/case-studies"
                className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Case Studies
              </Link>
            </div>

            {/* Hero Image */}
            <div className="relative aspect-[2/1] overflow-hidden rounded-2xl bg-secondary mb-8">
              <Image
                src={study.image || "/placeholder.svg"}
                alt={study.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Category and Tags */}
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

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6">
              {study.title}
            </h1>

            {/* Description */}
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {study.description}
            </p>

            {/* Project Details */}
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

            {/* Key Results */}
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

            {/* Content */}
            <div
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: study.content }}
            />

            {/* CTA Section */}
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