import { Reveal } from "@/components/ui/reveal"

const models = [
  {
    name: "Technical Discovery",
    figure: "1-2",
    unit: "weeks",
    description: "Architecture, scope and a reliable estimate before you commit budget.",
  },
  {
    name: "Fixed-Scope Build",
    figure: "8-20",
    unit: "weeks",
    description: "A defined product, delivered against agreed requirements and milestones.",
  },
  {
    name: "Dedicated Squad",
    figure: "Ongoing",
    unit: "",
    description: "A cross-functional team embedded in your roadmap, scaling with your priorities.",
  },
]

const gradientText = {
  background: "linear-gradient(135deg, #ff006e 0%, #8b5cf6 33%, #203eec 66%, #00d4ff 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
} as const

export function EngagementModels() {
  return (
    <section className="py-20 md:py-28 border-t border-border">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <Reveal className="mb-12 md:mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-balance">
            Engagement models
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-[48ch]">
            Senior engineers on every engagement, and full ownership of everything we build.
          </p>
        </Reveal>

        <Reveal>
          <ol className="grid md:grid-cols-3 rounded-3xl border border-border overflow-hidden divide-y md:divide-y-0 md:divide-x divide-border bg-secondary/30">
            {models.map((model) => (
              <li
                key={model.name}
                className="group relative p-6 sm:p-8 md:p-10 transition-colors duration-300 hover:bg-background"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                  style={{ background: "linear-gradient(90deg, #203eec 0%, #00d4ff 100%)" }}
                />
                <p className="flex flex-wrap items-baseline gap-x-2">
                  <span
                    className="inline-block pb-1 text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight tabular-nums leading-none"
                    style={gradientText}
                  >
                    {model.figure}
                  </span>
                  {model.unit ? <span className="text-lg text-muted-foreground">{model.unit}</span> : null}
                </p>
                <h3 className="mt-8 md:mt-10 text-2xl font-semibold tracking-tight">{model.name}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{model.description}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  )
}
