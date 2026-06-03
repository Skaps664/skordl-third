import type { Metadata } from "next"
import { Inter_Tight } from "next/font/google"
import Link from "next/link"
import "./globals.css"

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://sudais.skordlabs.com"),
  title: {
    default: "Sudais | Product Designer",
    template: "%s | Sudais",
  },
  description:
    "Portfolio of Sudais, a product designer crafting research-driven digital products, scalable design systems, and conversion-focused experiences.",
}

function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link href="/" className="brand-mark" aria-label="Sudais home">
          <span className="brand-dot" />
          <span>Sudais</span>
        </Link>

        <nav className="main-nav" aria-label="Main navigation">
          <Link href="/about">About</Link>
          <Link href="/case-studies">Case Studies</Link>
          <Link href="/contact" className="cta-pill">
            Let's work
          </Link>
        </nav>
      </div>
    </header>
  )
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} Sudais. Product Designer at Skord Labs.</p>
        <div className="footer-links">
          <a href="mailto:sudais@skordlabs.com">sudais@skordlabs.com</a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="https://dribbble.com" target="_blank" rel="noreferrer">
            Dribbble
          </a>
        </div>
      </div>
    </footer>
  )
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${interTight.variable}`}>
      <body>
        <div className="page-aurora" aria-hidden="true" />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  )
}
