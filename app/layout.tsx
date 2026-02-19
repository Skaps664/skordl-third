import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter_Tight } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { CookieConsent } from "@/components/ui/cookie-consent"
import { CallCTA } from "@/components/ui/call-cta"
import { BackToTop } from "@/components/ui/back-to-top"
import { CallCTAProvider } from "@/lib/call-cta-context"
import "./globals.css"

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
})

export const metadata: Metadata = {
  title: "Skord Labs | Pakistan's Top Software Development Company",
  description: "Pakistan's leading software development company. Building production-grade software while conducting applied research. A development lab where commercial delivery meets scientific rigor.",
  keywords: ["software development Pakistan", "Skord Labs", "AI development", "custom software", "technical consulting", "software company Pakistan", "MVP development", "best software company Pakistan"],
  authors: [{ name: "Skord Labs" }],
  icons: {
    icon: [
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon.ico", sizes: "any" }
    ],
    apple: [
      { url: "/favicon/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
    ],
    other: [
      { url: "/favicon/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon/android-chrome-512x512.png", sizes: "512x512", type: "image/png" }
    ]
  },
  openGraph: {
    title: "Skord Labs | Pakistan's Top Software Development Company",
    description: "Pakistan's leading software development company. Building production-grade software while conducting applied research. A development lab where commercial delivery meets scientific rigor.",
    type: "website",
    locale: "en_US",
    siteName: "Skord Labs",
  },
  twitter: {
    card: "summary_large_image",
    title: "Skord Labs | Pakistan's Top Software Development Company",
    description: "Pakistan's leading software development company specializing in AI, custom development, and MVP solutions.",
  },
  manifest: "/favicon/site.webmanifest",
  generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: "#203eec",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${interTight.className} font-sans antialiased`}>
        <CallCTAProvider>
          {children}
          <CookieConsent />
          <CallCTA />
          <BackToTop />
        </CallCTAProvider>
        <Analytics />
      </body>
    </html>
  )
}
