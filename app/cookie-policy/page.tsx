import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { GradientBar } from "@/components/ui/gradient-bar"
import { Cookie, Settings, Eye, Shield } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  alternates: { canonical: "/cookie-policy" },
  title: "Cookie Policy | Skord Labs - Pakistan's Top Software Company",
  description: "Learn about how Skord Labs uses cookies and tracking technologies on our website. Understand your cookie preferences and privacy options.",
  keywords: ["cookie policy", "cookies", "tracking", "Skord Labs cookies"],
}

export default function CookiePolicyPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="py-16 md:py-24 lg:py-32 border-b border-border">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <div className="max-w-3xl">
              <p className="text-sm font-mono text-muted-foreground mb-6 tracking-wider uppercase">
                Legal / Cookie Policy
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] mb-6">
                Cookie
                <br />
                <span 
                  style={{
                    background: "linear-gradient(135deg, #ff006e 0%, #8b5cf6 33%, #203eec 66%, #00d4ff 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Policy
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-4">
                This Cookie Policy explains how Skord Labs uses cookies and similar technologies 
                on our website to enhance your browsing experience.
              </p>
              <p className="text-sm text-muted-foreground">
                Last updated: February 5, 2026
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 border-b border-border">
          <div className="max-w-3xl mx-auto px-6 md:px-12">
            <h2 className="text-3xl font-semibold mb-6">What Are Cookies?</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Cookies are small text files that are stored on your device when you visit our website. 
              They help us provide you with a better experience by remembering your preferences and 
              understanding how you use our site.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24 border-b border-border bg-secondary/30">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-12">Types of Cookies We Use</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-8 border border-border rounded-2xl bg-card">
                <div className="p-3 rounded-xl bg-primary/10 inline-flex mb-4">
                  <Shield className="w-6 h-6" style={{ color: "#203eec" }} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Essential Cookies</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Required for the website to function properly. These cannot be disabled.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Session management</li>
                  <li>• Security and authentication</li>
                  <li>• Form submission</li>
                </ul>
              </div>

              <div className="p-8 border border-border rounded-2xl bg-card">
                <div className="p-3 rounded-xl bg-primary/10 inline-flex mb-4">
                  <Eye className="w-6 h-6" style={{ color: "#203eec" }} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Analytics Cookies</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Help us understand how visitors interact with our website.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Google Analytics</li>
                  <li>• Page views and navigation</li>
                  <li>• Traffic sources</li>
                </ul>
              </div>

              <div className="p-8 border border-border rounded-2xl bg-card">
                <div className="p-3 rounded-xl bg-primary/10 inline-flex mb-4">
                  <Settings className="w-6 h-6" style={{ color: "#203eec" }} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Functional Cookies</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Remember your preferences and provide enhanced functionality.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Language preferences</li>
                  <li>• Theme selection (dark/light mode)</li>
                  <li>• User preferences</li>
                </ul>
              </div>

              <div className="p-8 border border-border rounded-2xl bg-card">
                <div className="p-3 rounded-xl bg-primary/10 inline-flex mb-4">
                  <Cookie className="w-6 h-6" style={{ color: "#203eec" }} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Marketing Cookies</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Used to deliver relevant advertisements and track campaign performance.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Ad targeting</li>
                  <li>• Campaign tracking</li>
                  <li>• Retargeting</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 border-b border-border">
          <div className="max-w-3xl mx-auto px-6 md:px-12">
            <h2 className="text-3xl font-semibold mb-6">Third-Party Cookies</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We use services from trusted third parties that may set their own cookies:
            </p>
            <div className="space-y-4">
              <div className="p-4 border border-border rounded-lg bg-card">
                <p className="font-semibold mb-1">Google Analytics</p>
                <p className="text-sm text-muted-foreground">For website analytics and performance tracking</p>
              </div>
              <div className="p-4 border border-border rounded-lg bg-card">
                <p className="font-semibold mb-1">Vercel Analytics</p>
                <p className="text-sm text-muted-foreground">For performance monitoring and web vitals</p>
              </div>
              <div className="p-4 border border-border rounded-lg bg-card">
                <p className="font-semibold mb-1">Clutch</p>
                <p className="text-sm text-muted-foreground">For displaying client reviews and ratings</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 border-b border-border bg-secondary/30">
          <div className="max-w-3xl mx-auto px-6 md:px-12">
            <h2 className="text-3xl font-semibold mb-6">Managing Cookie Preferences</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              You have control over which cookies you allow. You can:
            </p>
            <ul className="space-y-3 text-muted-foreground mb-8">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full shrink-0 mt-2" style={{ background: "#203eec" }} />
                <span>Accept or reject non-essential cookies when you first visit our site</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full shrink-0 mt-2" style={{ background: "#203eec" }} />
                <span>Change your cookie preferences at any time through your browser settings</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full shrink-0 mt-2" style={{ background: "#203eec" }} />
                <span>Delete cookies that have already been set</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full shrink-0 mt-2" style={{ background: "#203eec" }} />
                <span>Block certain cookies from being set</span>
              </li>
            </ul>
            <p className="text-sm text-muted-foreground">
              Note: Disabling certain cookies may affect website functionality and your user experience.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="max-w-3xl mx-auto px-6 md:px-12">
            <h2 className="text-3xl font-semibold mb-6">Questions About Cookies?</h2>
            <p className="text-muted-foreground mb-6">
              If you have questions about our use of cookies, please contact us:
            </p>
            <div className="space-y-2 text-muted-foreground">
              <p><strong>Skord Labs</strong></p>
              <p>Peshawar, Pakistan</p>
              <p>Email: <a href="mailto:support@skordlabs.com" className="underline" style={{ color: "#203eec" }}>support@skordlabs.com</a></p>
              <p>Phone: <a href="tel:+923259327819" className="underline" style={{ color: "#203eec" }}>+92 325 9327819</a></p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <GradientBar />
    </>
  )
}
