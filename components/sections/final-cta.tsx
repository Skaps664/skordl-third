import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export function FinalCTA() {
  return (
    <section className="py-16 md:py-20 border-border border-t">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm text-muted-foreground uppercase tracking-wider mb-6">Next Steps</p>

          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold tracking-tight text-balance">
            Ready to collaborate?
          </h2>

          <p className="mt-4 md:mt-6 text-muted-foreground text-base md:text-lg leading-relaxed">
            Whether you need a technical partner for development, research collaboration, or expert consulting—let's discuss your project and how we can help bring it to life.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 md:gap-4 mt-8 md:mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 text-sm md:text-base font-medium text-white rounded-full transition-all hover:shadow-2xl relative overflow-hidden group"
              style={{
                background: "linear-gradient(135deg, #203eec 0%, #00d4ff 100%)",
                boxShadow: "0 8px 32px rgba(32, 62, 236, 0.4)",
              }}
            >
              <span className="relative z-10 inline-flex items-center gap-2">
                Start a Discussion
                <ArrowUpRight className="w-4 h-4" />
              </span>
              {/* Glow effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-2xl bg-gradient-to-r from-[#203eec] to-[#00d4ff]" />
            </Link>
            <Link
              href="mailto:hello@skordl.com"
              className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 text-sm md:text-base font-medium rounded-full hover:bg-secondary transition-colors"
              style={{ borderColor: "#203eec", borderWidth: "1px", color: "#203eec" }}
            >
              hello@skordl.com
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
