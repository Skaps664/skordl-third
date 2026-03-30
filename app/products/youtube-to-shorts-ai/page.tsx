export const metadata = {
  title: "YouTube to Shorts AI - Auto Clip & Subtitle Platform | Skord Labs",
  description:
    "Turn long YouTube videos into short-form clips with AI scene detection, captions, hooks, and platform-ready formatting.",
  keywords: [
    "YouTube to Shorts AI",
    "AI video clipping",
    "auto subtitle generator",
    "short-form content automation",
    "YouTube shorts tool",
  ],
}

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { GradientBar } from "@/components/ui/gradient-bar"
import { ArrowRight, Scissors, Captions, Clock3, Sparkles, CheckCircle2, ArrowUpRight, Film } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const features = [
  {
    icon: Scissors,
    title: "AI Scene Clipping",
    description: "Automatically identifies high-retention moments and cuts long videos into short-form segments.",
  },
  {
    icon: Captions,
    title: "Auto Subtitles",
    description: "Generate stylized subtitles with speaker timing, emphasis words, and mobile-friendly readability.",
  },
  {
    icon: Sparkles,
    title: "Hook Optimization",
    description: "Detects and rewrites opening hooks for stronger watch-through and engagement.",
  },
  {
    icon: Clock3,
    title: "Batch Export",
    description: "Process multiple long videos at once and export ready-to-publish shorts in platform-specific formats.",
  },
]

const benefits = [
  "Convert 30-60 minute videos into multiple shorts",
  "Subtitle templates for brand style consistency",
  "One workflow for YouTube Shorts, Reels, and TikTok",
  "Smart crop and framing for vertical video",
  "Publishing queue ready outputs",
  "Creator and agency team collaboration",
]

const metrics = [
  { value: "10x", label: "Faster repurposing" },
  { value: "70%", label: "Editing time reduced" },
  { value: "Auto", label: "Subtitles and formatting" },
  { value: "Beta", label: "Early access available" },
]

export default function YouTubeToShortsAIPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="py-16 md:py-24 lg:py-32 border-b border-border relative overflow-hidden">
          <div className="absolute -right-32 md:-right-48 top-32 md:top-40 w-[500px] h-[500px] md:w-[750px] md:h-[750px] pointer-events-none -z-10 opacity-30">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-teal-500/20 to-blue-500/20 blur-3xl" />
          </div>

          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <div className="mb-6 flex items-center gap-3">
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-600 dark:text-yellow-400">
                    Beta
                  </span>
                  <span className="text-sm text-muted-foreground">AI Video • Shorts Automation</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight leading-[1.1] mb-6 md:mb-8">
                  <span
                    style={{
                      background: "linear-gradient(135deg, #ff006e 0%, #8b5cf6 33%, #203eec 66%, #00d4ff 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    YouTube to Shorts AI
                  </span>
                  <br />
                  <span className="text-3xl md:text-4xl lg:text-5xl">Clip, subtitle, and publish faster</span>
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10">
                  Turn long-form YouTube videos into short-form clips with subtitles and ready-to-post formatting for
                  Shorts, Reels, and TikTok.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-white rounded-full transition-all hover:shadow-lg"
                    style={{
                      background: "linear-gradient(135deg, #203eec 0%, #00d4ff 100%)",
                      boxShadow: "0 4px 20px rgba(32, 62, 236, 0.3)",
                    }}
                  >
                    Join Beta Waitlist
                    <ArrowUpRight className="w-5 h-5" />
                  </Link>
                  <Link
                    href="/services/ai-social-media-marketing"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium border border-border rounded-full hover:bg-secondary transition-all"
                  >
                    Setup AI Social Workflow
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>

              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-transparent border border-border">
                <Image
                  src="https://placehold.co/800x600/0f766e/ffffff/png?text=YouTube+to+Shorts+AI"
                  alt="YouTube to Shorts AI Platform"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 border-b border-border">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {metrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div
                    className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2"
                    style={{
                      background: "linear-gradient(135deg, #203eec 0%, #00d4ff 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {metric.value}
                  </div>
                  <p className="text-sm text-muted-foreground">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 lg:py-32 border-b border-border">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <div className="max-w-3xl mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6">Editing automation features</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="p-8 border border-border rounded-2xl hover:border-foreground/20 transition-all duration-300 bg-card/50 backdrop-blur-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 shrink-0">
                      <feature.icon className="w-6 h-6" style={{ color: "#203eec" }} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 lg:py-32 border-b border-border bg-secondary/30">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <div className="max-w-3xl mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6">Why creators choose it</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 p-4">
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" style={{ color: "#203eec" }} />
                  <span className="text-base text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 lg:py-32">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <div className="max-w-3xl mx-auto text-center">
              <Film className="w-12 h-12 mx-auto mb-6" style={{ color: "#203eec" }} />
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6">
                Publish more without editing bottlenecks
              </h2>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                Repurpose every long-form video into a short-form content engine with AI automation.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-white rounded-full transition-all hover:shadow-lg"
                style={{
                  background: "linear-gradient(135deg, #203eec 0%, #00d4ff 100%)",
                  boxShadow: "0 4px 20px rgba(32, 62, 236, 0.3)",
                }}
              >
                Get Early Access
                <ArrowUpRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <GradientBar />
    </>
  )
}
