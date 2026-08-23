export const metadata = {
  title: "Orbit - Offline-first Android Task Manager | Skord Labs",
  description:
    "Orbit is an offline-first task manager for Android with colour-coded drawers, per-day repeating tasks, and on-device reminders. No account, no servers.",
  keywords: ["Orbit", "Android task manager", "offline task app", "privacy productivity app", "Flutter app"],
}

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { GradientBar } from "@/components/ui/gradient-bar"
import { ArrowRight, Boxes, Repeat2, BellRing, CalendarDays, LayoutGrid, Search, CheckCircle2, ArrowUpRight, ShieldOff } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const features = [
  {
    icon: Boxes,
    title: "Colour-coded Drawers",
    description: "Group tasks into icon- and colour-coded lists, each carrying deadlines, priority, notes, and tags.",
  },
  {
    icon: Repeat2,
    title: "Per-day Repeating Tasks",
    description: "Completion is recorded for each day separately, so a skipped day stays visibly missed instead of rolling forward.",
  },
  {
    icon: BellRing,
    title: "Four On-device Reminders",
    description: "Alerts at the start of the deadline day, an hour before, ten minutes before, and at the deadline itself.",
  },
  {
    icon: CalendarDays,
    title: "Calendar History",
    description: "One-off and repeating tasks share a calendar that holds real history, not just the most recent state.",
  },
  {
    icon: LayoutGrid,
    title: "Home-screen Widget",
    description: "Tick tasks off and switch drawers straight from the home screen without opening the app.",
  },
  {
    icon: Search,
    title: "Instant Search",
    description: "Search across titles, notes, and tags. Everything is on the device, so there is no loading state.",
  },
]

const screenshots = [
  { src: "/case/orbit-home.png", label: "Drawers and today's tasks" },
  { src: "/case/orbit-task.png", label: "Task editing" },
  { src: "/case/orbit-calendar.png", label: "Calendar view" },
  { src: "/case/orbit-widget.png", label: "Home-screen widget" },
]

const privacyPoints = [
  "No Orbit server, database, or account",
  "Tasks stored on the device and never transmitted to us",
  "Optional Google Drive backup, off by default",
  "drive.appdata scope only, no access to other files",
  "No analytics, advertising, or tracking",
  "Fully usable before you sign in to anything",
]

const specs = [
  { label: "Platform", value: "Android 7.0+ (API 24)" },
  { label: "Status", value: "Released - v1.1.0" },
  { label: "Distribution", value: "Signed APK, direct download" },
  { label: "Built with", value: "Flutter" },
  { label: "Backend", value: "None" },
  { label: "Price", value: "Free" },
]

const metrics = [
  { value: "v1.1.0", label: "Current release" },
  { value: "7.0+", label: "Android supported" },
  { value: "0", label: "Servers or accounts" },
  { value: "21.2 MB", label: "Download size" },
]

export default function OrbitPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="py-16 md:py-24 lg:py-32 border-b border-border relative overflow-hidden">
          <div className="absolute -right-32 md:-right-48 top-32 md:top-40 w-[500px] h-[500px] md:w-[750px] md:h-[750px] pointer-events-none -z-10 opacity-30">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 blur-3xl" />
          </div>

          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <div className="mb-6 flex items-center gap-3">
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-green-500/10 text-green-600 dark:text-green-400">
                    Live
                  </span>
                  <span className="text-sm text-muted-foreground">Android • Productivity</span>
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
                    Orbit
                  </span>
                  <br />
                  <span className="text-3xl md:text-4xl lg:text-5xl">
                    Organize your universe.
                  </span>
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10">
                  An offline-first task manager for Android. Drawers, per-day repeating tasks, and
                  on-device reminders, with no account required and no server holding your data.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="https://orbit.skordlabs.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-white rounded-full transition-all hover:shadow-lg"
                    style={{
                      background: "linear-gradient(135deg, #203eec 0%, #00d4ff 100%)",
                      boxShadow: "0 4px 20px rgba(32, 62, 236, 0.3)",
                    }}
                  >
                    Download for Android
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link
                    href="https://orbit.skordlabs.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium border border-border rounded-full hover:bg-secondary transition-all"
                  >
                    orbit.skordlabs.com
                    <ArrowUpRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>

              <div className="relative aspect-[3/2] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-transparent border border-border">
                <Image
                  src="/case/orbit-1.png"
                  alt="Orbit for Android: drawers, task editing, calendar, and home-screen widget"
                  fill
                  className="object-cover"
                  priority
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
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6">
                Built for no signal and no account
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Orbit is a task manager for Android, built for the case most to-do apps handle badly:
                no signal, no account, and a routine you actually need to track over time.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="p-8 border border-border rounded-2xl hover:border-foreground/20 transition-all duration-300 bg-card/50 backdrop-blur-sm"
                >
                  <div className="p-3 rounded-xl bg-primary/10 w-fit mb-5">
                    <feature.icon className="w-6 h-6" style={{ color: "#203eec" }} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 lg:py-32 border-b border-border bg-secondary/30">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <div className="max-w-3xl mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6">
                Inside the app
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Repeating tasks were the part we spent the most time on. Most apps treat a recurring task as a
                single row with a checkbox, so ticking today quietly rolls it to tomorrow and yesterday disappears.
                Orbit records completion per day, so the calendar holds a real history.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {screenshots.map((shot) => (
                <div key={shot.src}>
                  <div className="relative aspect-[9/20] rounded-2xl overflow-hidden border border-border bg-card">
                    <Image
                      src={shot.src}
                      alt={`Orbit for Android - ${shot.label}`}
                      fill
                      sizes="(max-width: 1024px) 45vw, 22vw"
                      className="object-cover object-top"
                    />
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground text-center">{shot.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 lg:py-32 border-b border-border">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              <div>
                <div className="p-3 rounded-xl bg-primary/10 w-fit mb-6">
                  <ShieldOff className="w-6 h-6" style={{ color: "#203eec" }} />
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6">
                  There is no Orbit server
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                  Tasks are stored on the device and are never transmitted to us. Signing in with Google is
                  optional and does exactly one thing: back up to a private application-data folder in your own
                  Google Drive, using the drive.appdata scope, which cannot reach any other file in your Drive.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {privacyPoints.map((point, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" style={{ color: "#203eec" }} />
                      <span className="text-base text-muted-foreground">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-8 border border-border rounded-2xl bg-card/50 backdrop-blur-sm h-fit">
                <h3 className="text-sm font-mono text-muted-foreground mb-6 tracking-wider uppercase">
                  Specifications
                </h3>
                <dl className="divide-y divide-border">
                  {specs.map((spec) => (
                    <div key={spec.label} className="flex items-baseline justify-between gap-6 py-4">
                      <dt className="text-sm text-muted-foreground">{spec.label}</dt>
                      <dd className="text-base font-medium text-right">{spec.value}</dd>
                    </div>
                  ))}
                  <div className="flex items-baseline justify-between gap-6 py-4">
                    <dt className="text-sm text-muted-foreground">Site</dt>
                    <dd className="text-base font-medium text-right">
                      <Link
                        href="https://orbit.skordlabs.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 hover:text-primary transition-colors"
                      >
                        orbit.skordlabs.com
                        <ArrowUpRight className="w-4 h-4" />
                      </Link>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 lg:py-32">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6">
                Download Orbit
              </h2>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                Orbit is distributed as a signed APK rather than through Google Play. Version 1.1.0 runs on
                Android 7.0 and newer. Explore the screens and download it from the product site.
              </p>
              <Link
                href="https://orbit.skordlabs.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-white rounded-full transition-all hover:shadow-lg"
                style={{
                  background: "linear-gradient(135deg, #203eec 0%, #00d4ff 100%)",
                  boxShadow: "0 4px 20px rgba(32, 62, 236, 0.3)",
                }}
              >
                Visit orbit.skordlabs.com
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
