import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowUpRight, BadgeCheck, Building2, KeyRound, Linkedin, UserCheck, Users } from "lucide-react"
import { LeadershipRoster } from "@/components/team/leadership-roster"
import { Reveal } from "@/components/ui/reveal"
import { disciplines, founder, founderNote, leadership, practices, principles } from "@/lib/team"

const ACCENT = "#203eec"

const principleIcons = [UserCheck, Users, BadgeCheck, KeyRound]

const allRoles = disciplines.flatMap((discipline) => discipline.roles)
const roleRows = [allRoles.slice(0, Math.ceil(allRoles.length / 2)), allRoles.slice(Math.ceil(allRoles.length / 2))]

function RoleRow({ roles, direction }: { roles: string[]; direction: "left" | "right" }) {
  const pills = (hidden: boolean) =>
    roles.map((role) => (
      <li
        key={`${role}-${hidden}`}
        aria-hidden={hidden || undefined}
        className={`shrink-0 px-4 py-2 sm:px-5 sm:py-2.5 text-sm md:text-base rounded-full border border-border bg-background whitespace-nowrap ${
          hidden ? "motion-reduce:hidden" : ""
        }`}
      >
        {role}
      </li>
    ))

  return (
    <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] motion-reduce:[mask-image:none]">
      <ul
        className={`flex w-max gap-3 hover:[animation-play-state:paused] motion-reduce:w-full motion-reduce:flex-wrap ${
          direction === "left" ? "animate-scroll-left" : "animate-scroll-right"
        }`}
        style={{ animationDuration: "70s" }}
      >
        {pills(false)}
        {pills(true)}
      </ul>
    </div>
  )
}

export function Team() {
  return (
    <>
      {/* Founder */}
      <section className="py-20 md:py-28 border-b border-border">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            <Reveal>
              <figure>
                <blockquote className="text-2xl md:text-3xl lg:text-[2.1rem] font-medium tracking-tight leading-[1.3] text-balance">
                  &ldquo;{founderNote}&rdquo;
                </blockquote>
                <figcaption className="mt-8">
                  <p className="text-lg font-semibold">{founder.name}</p>
                  <p className="text-sm" style={{ color: ACCENT }}>
                    {founder.title}
                  </p>
                </figcaption>
              </figure>

              <div className="mt-10 pt-8 border-t border-border">
                <p className="text-base text-muted-foreground leading-relaxed max-w-[60ch]">{founder.bio}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {founder.focus.map((item) => (
                    <li key={item} className="px-3 py-1 text-xs rounded-full border border-border">
                      {item}
                    </li>
                  ))}
                </ul>
                {founder.linkedin ? (
                  <a
                    href={founder.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-[#203eec]"
                  >
                    <Linkedin className="w-4 h-4" aria-hidden="true" />
                    {founder.firstName} on LinkedIn
                    <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                ) : null}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section id="leadership" className="py-20 md:py-28 border-b border-border">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <Reveal className="max-w-3xl mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-balance">
              The people accountable for the work
            </h2>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed max-w-[60ch]">
              A named lead for each discipline. Every engagement is signed off by the people on this page.
            </p>
          </Reveal>

          <LeadershipRoster leaders={leadership} />
        </div>
      </section>

      {/* Practices */}
      <section className="py-20 md:py-28 border-b border-border">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <Reveal className="max-w-3xl mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-balance">
              Six practices, one delivery team
            </h2>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed max-w-[60ch]">
              We staff engagements from practices, not from whoever is free. One delivery lead coordinates the
              specialists your project needs.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-x-12 lg:gap-x-20">
            {practices.map((practice, index) => (
              <Reveal key={practice.name} delay={(index % 2) * 0.08}>
                <article className="h-full border-t border-border pt-8 pb-12">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <h3 className="text-2xl font-semibold tracking-tight">{practice.name}</h3>
                    <div className="flex items-center gap-3">
                      {practice.lead ? (
                        <span className="relative w-9 h-9 overflow-hidden rounded-full bg-secondary">
                          <Image
                            src={practice.lead.image}
                            alt=""
                            fill
                            sizes="36px"
                            className="object-cover"
                            style={{ objectPosition: practice.lead.imagePosition ?? "50% 30%" }}
                          />
                        </span>
                      ) : (
                        <span className="flex items-center justify-center w-9 h-9 rounded-full bg-secondary">
                          <Building2 className="w-4 h-4 text-muted-foreground" aria-hidden="true" />
                        </span>
                      )}
                      <span className="text-sm">
                        <span className="text-muted-foreground">Led by </span>
                        <span className="font-medium">{practice.lead ? practice.lead.name : "Executive Office"}</span>
                      </span>
                    </div>
                  </div>
                  <p className="mt-5 text-muted-foreground leading-relaxed">{practice.description}</p>
                  <p className="mt-5 text-sm" style={{ color: ACCENT }}>
                    {practice.disciplines.join(", ")}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Wider team */}
      <section className="py-20 md:py-28 border-b border-border bg-secondary/40 overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <Reveal className="max-w-3xl mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-balance">Depth behind the leadership</h2>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed max-w-[60ch]">
              15+ specialists across {disciplines.length} disciplines, working in cross-functional squads. The same
              people stay on a project from kickoff to handover.
            </p>
          </Reveal>
        </div>

        <div className="space-y-3 max-w-[1600px] mx-auto">
          <RoleRow roles={roleRows[0]} direction="left" />
          <RoleRow roles={roleRows[1]} direction="right" />
        </div>
      </section>

      {/* Principles */}
      <section className="py-20 md:py-28 border-b border-border">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-[minmax(0,4fr)_minmax(0,7fr)] gap-10 lg:gap-20">
            <Reveal className="lg:sticky lg:top-28 self-start">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-balance">
                What our structure means for you
              </h2>
            </Reveal>

            <ol>
              {principles.map((principle, index) => {
                const Icon = principleIcons[index]
                return (
                  <li key={principle.title}>
                    <Reveal className="grid grid-cols-[auto_minmax(0,1fr)] gap-5 md:gap-6 py-8 border-t border-border">
                      <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-[#203eec]/[0.08]">
                        <Icon className="w-5 h-5" style={{ color: ACCENT }} aria-hidden="true" />
                      </span>
                      <div>
                        <h3 className="text-xl md:text-2xl font-semibold tracking-tight">{principle.title}</h3>
                        <p className="mt-3 text-muted-foreground leading-relaxed max-w-[60ch]">{principle.description}</p>
                      </div>
                    </Reveal>
                  </li>
                )
              })}
            </ol>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-[#203eec] px-6 py-10 sm:px-8 sm:py-12 md:px-14 md:py-16 text-white">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-24 -top-32 w-[520px] h-[520px] rounded-full opacity-60 blur-3xl"
                style={{ background: "radial-gradient(circle, #00d4ff 0%, transparent 65%)" }}
              />
              <div className="relative grid lg:grid-cols-[minmax(0,1fr)_auto] gap-10 items-end">
                <div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-balance">Work with this team</h2>
                  <p className="mt-4 text-lg text-white/80 leading-relaxed max-w-[48ch]">
                    Whether you want to hire us for a project or join the firm, the conversation starts the same way.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-medium rounded-full bg-white text-[#203eec] whitespace-nowrap transition-transform hover:-translate-y-0.5 active:translate-y-0"
                  >
                    Talk to our team
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                  <Link
                    href="/careers"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-medium rounded-full border border-white/40 text-white whitespace-nowrap transition-colors hover:bg-white/10"
                  >
                    View open roles
                    <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
