import Link from "next/link"
import { Users, ArrowRight } from "lucide-react"

export function TalentGrowth() {
  return (
    <section className="py-16 md:py-24 border-t border-border bg-secondary/20">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="rounded-2xl md:rounded-3xl border border-border bg-card/70 backdrop-blur-sm p-8 md:p-12 lg:p-14">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 mb-6">
              <Users className="w-4 h-4" style={{ color: "#203eec" }} />
              <span className="text-xs font-medium tracking-wide uppercase">Talent + Growth Partner</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.1] mb-5">
              We help you find real talent, build stronger teams, and grow with clear technical guidance.
            </h2>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl">
              Beyond shipping products, we support hiring strategy, team mentorship, delivery frameworks,
              and leadership coaching so your people and your platform can scale together.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium rounded-full text-white transition-all hover:shadow-lg"
                style={{
                  background: "linear-gradient(135deg, #203eec 0%, #00d4ff 100%)",
                  boxShadow: "0 4px 20px rgba(32, 62, 236, 0.3)",
                }}
              >
                Talk to Our Team
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/careers"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-full border border-border hover:bg-secondary transition-colors"
              >
                Explore Talent Opportunities
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
