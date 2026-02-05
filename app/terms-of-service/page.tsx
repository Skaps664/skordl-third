import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { GradientBar } from "@/components/ui/gradient-bar"
import { FileText, Scale, AlertCircle, CheckCircle2 } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service | Skord Labs - Leading Software Company in Pakistan",
  description: "Terms of service for Skord Labs. Review our terms and conditions for using our software development services and products.",
  keywords: ["terms of service", "terms and conditions", "Skord Labs terms", "software development terms"],
}

export default function TermsOfServicePage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="py-16 md:py-24 lg:py-32 border-b border-border">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <div className="max-w-3xl">
              <p className="text-sm font-mono text-muted-foreground mb-6 tracking-wider uppercase">
                Legal / Terms of Service
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] mb-6">
                Terms of
                <br />
                <span 
                  style={{
                    background: "linear-gradient(135deg, #ff006e 0%, #8b5cf6 33%, #203eec 66%, #00d4ff 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Service
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-4">
                These terms govern your use of Skord Labs services and products. By using our services, 
                you agree to these terms.
              </p>
              <p className="text-sm text-muted-foreground">
                Last updated: February 5, 2026
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 border-b border-border">
          <div className="max-w-3xl mx-auto px-6 md:px-12">
            <div className="space-y-12">
              <div>
                <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing or using Skord Labs' services, Pakistan's leading software development company, 
                  you agree to be bound by these Terms of Service and all applicable laws and regulations. 
                  If you do not agree with any of these terms, you are prohibited from using our services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">2. Services Description</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Skord Labs provides software development, consulting, and related technical services including:
                </p>
                <ul className="space-y-2 text-muted-foreground ml-6">
                  <li>• Custom software development and MVP development</li>
                  <li>• Website and mobile application development</li>
                  <li>• AI solutions and machine learning integration</li>
                  <li>• Technical consulting and architecture design</li>
                  <li>• Ecommerce platforms and management systems</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">3. User Obligations</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">You agree to:</p>
                <ul className="space-y-2 text-muted-foreground ml-6">
                  <li>• Provide accurate and complete information when requested</li>
                  <li>• Maintain the confidentiality of your account credentials</li>
                  <li>• Use our services in compliance with all applicable laws</li>
                  <li>• Not use our services for any illegal or unauthorized purpose</li>
                  <li>• Not interfere with or disrupt our services or servers</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">4. Intellectual Property</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Unless otherwise specified in a separate agreement, all deliverables and intellectual property 
                  created during the course of a project will be owned by the client upon full payment. Skord Labs 
                  retains the right to showcase work in our portfolio unless otherwise agreed in writing.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">5. Payment Terms</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Payment terms are established in individual project agreements. Generally:
                </p>
                <ul className="space-y-2 text-muted-foreground ml-6">
                  <li>• Deposits are required before project commencement</li>
                  <li>• Milestone payments are due as specified in the agreement</li>
                  <li>• Final payment is due upon project completion</li>
                  <li>• Late payments may incur additional fees</li>
                  <li>• All fees are in USD unless otherwise specified</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">6. Warranties and Disclaimers</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our services are provided "as is" without any warranties, express or implied. We strive for 
                  excellence but cannot guarantee that our services will be uninterrupted, error-free, or meet 
                  all your requirements. We warrant that services will be performed with professional care and skill.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">7. Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Skord Labs shall not be liable for any indirect, incidental, special, or consequential damages 
                  arising out of or related to the use of our services. Our total liability shall not exceed the 
                  amount paid by you for the specific service giving rise to the claim.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">8. Termination</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to terminate or suspend access to our services immediately, without prior 
                  notice, for any breach of these Terms. Upon termination, your right to use the services will 
                  cease immediately.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">9. Governing Law</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms shall be governed by and construed in accordance with the laws of Pakistan. 
                  Any disputes shall be subject to the exclusive jurisdiction of courts in Peshawar, Pakistan.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">10. Changes to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to modify these terms at any time. Changes will be effective immediately 
                  upon posting to our website. Continued use of our services after changes constitutes acceptance 
                  of the modified terms.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="max-w-3xl mx-auto px-6 md:px-12">
            <h2 className="text-3xl font-semibold mb-6">Contact Information</h2>
            <p className="text-muted-foreground mb-6">
              For questions about these Terms of Service, please contact:
            </p>
            <div className="space-y-2 text-muted-foreground">
              <p><strong>Skord Labs</strong></p>
              <p>Peshawar, Pakistan</p>
              <p>Email: <a href="mailto:legal@skordl.com" className="underline" style={{ color: "#203eec" }}>legal@skordl.com</a></p>
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
