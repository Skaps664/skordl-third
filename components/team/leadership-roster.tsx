"use client"

import { useState } from "react"
import Image from "next/image"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { ArrowUpRight, Linkedin } from "lucide-react"
import { cn } from "@/lib/utils"
import type { Leader } from "@/lib/team"

const ACCENT = "#203eec"

function FocusList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li key={item} className="px-3 py-1 text-xs rounded-full border border-border bg-background">
          {item}
        </li>
      ))}
    </ul>
  )
}

function LinkedinLink({ leader }: { leader: Leader }) {
  if (!leader.linkedin) return null
  return (
    <a
      href={leader.linkedin}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-[#203eec] focus-visible:outline-none focus-visible:underline"
    >
      <Linkedin className="w-4 h-4" aria-hidden="true" />
      {leader.firstName} on LinkedIn
      <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
    </a>
  )
}

export function LeadershipRoster({ leaders }: { leaders: Leader[] }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const reduce = useReducedMotion()
  const active = leaders[activeIndex]

  return (
    <>
      {/* Desktop: roster on the left, profile panel on the right */}
      <div className="hidden lg:grid grid-cols-[minmax(0,7fr)_minmax(0,5fr)] gap-16">
        <ul className="border-t border-border">
          {leaders.map((leader, index) => {
            const isActive = index === activeIndex
            return (
              <li key={leader.name} className="border-b border-border">
                <button
                  type="button"
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                  aria-pressed={isActive}
                  aria-controls="leader-profile"
                  className="group relative w-full grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-6 py-7 pl-6 text-left rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#203eec]/40 focus-visible:ring-offset-4 focus-visible:ring-offset-background"
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      "absolute left-0 top-7 bottom-7 w-[3px] rounded-full transition-transform duration-500 origin-top",
                      isActive ? "scale-y-100" : "scale-y-0",
                    )}
                    style={{ background: "linear-gradient(180deg, #203eec 0%, #00d4ff 100%)" }}
                  />
                  <span>
                    <span
                      className={cn(
                        "block text-3xl xl:text-4xl font-semibold tracking-tight transition-colors duration-300",
                        isActive ? "text-foreground" : "text-foreground/35 group-hover:text-foreground/70 group-focus-visible:text-foreground/70",
                      )}
                    >
                      {leader.name}
                    </span>
                    <span
                      className={cn(
                        "mt-2 block text-sm transition-colors duration-300",
                        isActive ? "text-[#203eec]" : "text-muted-foreground",
                      )}
                    >
                      {leader.title}
                    </span>
                  </span>
                  <span className="text-xs font-mono text-muted-foreground">{leader.department}</span>
                </button>
              </li>
            )
          })}
        </ul>

        <div id="leader-profile" aria-live="polite" className="sticky top-28 self-start">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={active.name}
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="relative aspect-[4/5] max-w-[340px] overflow-hidden rounded-3xl bg-secondary">
                <Image
                  src={active.image}
                  alt={`Portrait of ${active.name}`}
                  fill
                  sizes="340px"
                  className="object-cover"
                  style={{ objectPosition: active.imagePosition ?? "50% 30%" }}
                />
              </div>
              <p className="mt-8 text-base text-muted-foreground leading-relaxed max-w-[52ch]">{active.bio}</p>
              <div className="mt-6">
                <FocusList items={active.focus} />
              </div>
              <div className="mt-6">
                <LinkedinLink leader={active} />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Mobile and tablet: every leader is visible, no interaction required */}
      <ul className="lg:hidden grid md:grid-cols-2 gap-x-8 border-t border-border md:border-t-0">
        {leaders.map((leader) => (
          <li key={leader.name} className="py-8 border-b border-border md:border-t md:border-b-0">
            <div className="flex items-center gap-4">
              <div className="relative w-20 h-20 shrink-0 overflow-hidden rounded-2xl bg-secondary">
                <Image
                  src={leader.image}
                  alt={`Portrait of ${leader.name}`}
                  fill
                  sizes="80px"
                  className="object-cover"
                  style={{ objectPosition: leader.imagePosition ?? "50% 30%" }}
                />
              </div>
              <div className="min-w-0">
                <h3 className="text-xl font-semibold tracking-tight text-balance">{leader.name}</h3>
                <p className="text-sm" style={{ color: ACCENT }}>
                  {leader.title}
                </p>
              </div>
            </div>
            <p className="mt-5 text-sm text-muted-foreground leading-relaxed">{leader.bio}</p>
            <div className="mt-5">
              <FocusList items={leader.focus} />
            </div>
            <div className="mt-5">
              <LinkedinLink leader={leader} />
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}
