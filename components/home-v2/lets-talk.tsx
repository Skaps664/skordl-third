import { Mail, MessageCircle, Phone } from "lucide-react"
import { ContactForm } from "@/components/sections/contact-form"
import { Reveal } from "@/components/ui/reveal"

const channels = [
  {
    icon: Phone,
    label: "Call us",
    value: "+92 325 9327819",
    href: "tel:+923259327819",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Message us on WhatsApp",
    href: "https://wa.me/923259327819",
    external: true,
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@skordlabs.com",
    href: "mailto:hello@skordlabs.com",
  },
]

export function LetsTalk() {
  return (
    <section id="contact-form" className="scroll-mt-24 py-20 md:py-28 border-t border-border">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-12 lg:gap-16">
          <Reveal>
            <h2 className="text-[2.25rem] sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.08]">
              Have a project?
              <br />
              <span
                className="inline-block pb-1"
                style={{
                  background: "linear-gradient(135deg, #ff006e 0%, #8b5cf6 33%, #203eec 66%, #00d4ff 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Let&apos;s talk.
              </span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-[40ch]">
              Tell us what you are building. We will come back with a clear plan, timeline and team.
            </p>

            <ul className="mt-10 space-y-3">
              {channels.map((channel) => {
                const Icon = channel.icon
                const content = (
                  <>
                    <span className="flex items-center justify-center w-11 h-11 shrink-0 rounded-xl bg-[#203eec]/[0.08]">
                      <Icon className="w-5 h-5 text-[#203eec]" aria-hidden="true" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm text-muted-foreground">{channel.label}</span>
                      <span className="block font-medium break-words">{channel.value}</span>
                    </span>
                  </>
                )
                return (
                  <li key={channel.label}>
                    {channel.href ? (
                      <a
                        href={channel.href}
                        {...(channel.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className="flex items-center gap-4 rounded-2xl border border-border p-4 transition-colors hover:border-[#203eec]/30 hover:bg-secondary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#203eec]/40"
                      >
                        {content}
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 rounded-2xl border border-border p-4">{content}</div>
                    )}
                  </li>
                )
              })}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-border bg-card p-5 sm:p-6 md:p-10 shadow-[0_20px_60px_rgba(32,62,236,0.06)]">
              <h3 className="text-2xl font-semibold mb-6">Send us a message</h3>
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
