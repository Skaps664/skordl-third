"use client"

import { Star } from "lucide-react"
import { SectionTitle } from "@/components/ui/section-title"
import ClutchWidget from "@/components/ui/clutch-widget"

const sampleReviews = [
  {
    id: 1,
    author: "CEO, Tech Startup",
    company: "SaaS Company",
    rating: 5,
    text: "Exceptional team. They delivered a complex project on time and exceeded our expectations. Their technical expertise and communication were outstanding.",
    verified: true,
  },
  {
    id: 2,
    author: "Product Manager, Enterprise",
    company: "Fortune 500 Company",
    rating: 5,
    text: "Working with Skord Labs transformed our approach to software development. Their research-driven methodology ensured we built the right solution.",
    verified: true,
  },
  {
    id: 3,
    author: "Founder, AI Startup",
    company: "ML/AI Company",
    rating: 5,
    text: "Top-tier engineering talent. They not only built our product but also contributed valuable insights on machine learning implementation.",
    verified: true,
  },
]

export function ClutchReviews() {
  return (
    <section id="clutch-reviews" className="py-20 border-border md:py-32">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <SectionTitle className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-balance">
            Trusted by Clients
          </SectionTitle>
          <p className="mt-6 text-muted-foreground text-lg max-w-2xl mx-auto">
            See what our clients say about working with Skord Labs on their software development and research projects.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sampleReviews.map((review) => (
            <div
              key={review.id}
              className="p-6 md:p-8 border border-border rounded-2xl hover:border-opacity-50 transition-all hover:shadow-lg"
            >
              {/* Rating Stars */}
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-current"
                    style={{ color: "#203eec" }}
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-muted-foreground leading-relaxed mb-6">
                {`"${review.text}"`}
              </p>

              {/* Author Info */}
              <div className="pt-6 border-t border-border">
                <p className="font-semibold text-sm">{review.author}</p>
                <p className="text-xs text-muted-foreground mt-1">{review.company}</p>
                {review.verified && (
                  <p className="text-xs mt-2 flex items-center gap-1" style={{ color: "#203eec" }}>
                    ✓ Verified Review
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Clutch Widget */}
        <div className="mt-12 md:mt-16">
          <ClutchWidget />
        </div>

        {/* Clutch Badge / Link */}
        <div className="text-center mt-12 md:mt-16">
          <p className="text-muted-foreground text-sm mb-4">
            {process.env.NEXT_PUBLIC_CLUTCH_URL ? (
              <>
                View all our reviews on{" "}
                <a
                  href={process.env.NEXT_PUBLIC_CLUTCH_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold hover:underline"
                  style={{ color: "#203eec" }}
                >
                  Clutch
                </a>
              </>
            ) : (
              "Check out our complete profile on Clutch for more reviews and case studies."
            )}
          </p>
        </div>
      </div>
    </section>
  )
}
