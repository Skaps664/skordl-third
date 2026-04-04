export const metadata = {
  title: "API Reference | Skord Labs - Pakistan's Leading Software Company",
  description: "Explore Skord Labs API documentation with comprehensive endpoints, authentication guides, and code examples from Pakistan's top software company.",
  keywords: ["Skord Labs API", "API documentation Pakistan", "REST API reference", "developer API"],
}

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { GradientBar } from "@/components/ui/gradient-bar"
import { Code, Lock, Zap, Shield, CheckCircle2 } from "lucide-react"
import Link from "next/link"

const apiFeatures = [
  {
    icon: Zap,
    title: "RESTful APIs",
    description: "Clean, predictable REST endpoints with JSON responses and HTTP status codes."
  },
  {
    icon: Lock,
    title: "OAuth 2.0 & API Keys",
    description: "Secure authentication with OAuth 2.0, JWT tokens, and API key management."
  },
  {
    icon: Shield,
    title: "Rate Limiting",
    description: "Fair usage policies with tiered rate limits based on your subscription plan."
  },
  {
    icon: Code,
    title: "SDKs & Libraries",
    description: "Official SDKs for JavaScript, Python, PHP, Ruby, and other popular languages."
  }
]

const endpoints = [
  {
    method: "GET",
    endpoint: "/api/v1/projects",
    description: "List all projects with pagination and filtering"
  },
  {
    method: "POST",
    endpoint: "/api/v1/projects",
    description: "Create a new project with configuration"
  },
  {
    method: "GET",
    endpoint: "/api/v1/projects/{id}",
    description: "Retrieve a specific project by ID"
  },
  {
    method: "PUT",
    endpoint: "/api/v1/projects/{id}",
    description: "Update project settings and metadata"
  },
  {
    method: "DELETE",
    endpoint: "/api/v1/projects/{id}",
    description: "Delete a project and associated resources"
  },
  {
    method: "POST",
    endpoint: "/api/v1/webhooks",
    description: "Register webhook endpoints for events"
  }
]

const codeExample = `// Authentication Example
const apiKey = 'your_api_key_here';

const response = await fetch('https://api.skordlabs.com/v1/projects', {
  method: 'GET',
  headers: {
    'Authorization': \`Bearer \${apiKey}\`,
    'Content-Type': 'application/json'
  }
});

const data = await response.json();
console.log(data);`

export default function APIReferencePage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="py-16 md:py-24 lg:py-32 border-b border-border">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <div className="max-w-3xl">
              <p className="text-sm font-mono text-muted-foreground mb-6 tracking-wider uppercase">
                Resources / API Reference
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] mb-6">
                API
                <br />
                <span 
                  style={{
                    background: "linear-gradient(135deg, #ff006e 0%, #8b5cf6 33%, #203eec 66%, #00d4ff 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Reference
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Complete API documentation with endpoints, authentication methods, code examples, 
                and integration guides for developers, plus practical guidance to help teams onboard talent
                and ship safely at scale.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 border-b border-border">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-12">API Features</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {apiFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="p-6 border border-border rounded-2xl bg-card/50 backdrop-blur-sm"
                >
                  <div className="p-3 rounded-xl bg-primary/10 inline-flex mb-4">
                    <feature.icon className="w-6 h-6" style={{ color: "#203eec" }} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 border-b border-border bg-secondary/30">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Quick Start</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl">
              Get started with our API in minutes. Here's a basic authentication example:
            </p>
            <div className="bg-slate-950 rounded-2xl p-8 overflow-x-auto">
              <pre className="text-sm text-slate-50 font-mono">
                <code>{codeExample}</code>
              </pre>
            </div>
            <div className="mt-6 flex gap-4">
              <Link
                href="/documentation"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium border border-border rounded-xl hover:bg-secondary transition-all"
              >
                View Full Documentation
              </Link>
              <Link
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white rounded-xl transition-all"
                style={{ 
                  background: "linear-gradient(135deg, #203eec 0%, #00d4ff 100%)"
                }}
              >
                Get API Key
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 border-b border-border">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-12">Available Endpoints</h2>
            <div className="space-y-3">
              {endpoints.map((endpoint, index) => (
                <div key={index} className="p-6 border border-border rounded-xl bg-card hover:border-foreground/20 transition-all">
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <span 
                      className={`px-3 py-1 text-xs font-mono font-semibold rounded-lg inline-block shrink-0 ${
                        endpoint.method === 'GET' ? 'bg-blue-500/10 text-blue-600' :
                        endpoint.method === 'POST' ? 'bg-green-500/10 text-green-600' :
                        endpoint.method === 'PUT' ? 'bg-yellow-500/10 text-yellow-600' :
                        'bg-red-500/10 text-red-600'
                      }`}
                    >
                      {endpoint.method}
                    </span>
                    <code className="font-mono text-sm flex-1">{endpoint.endpoint}</code>
                    <p className="text-sm text-muted-foreground">{endpoint.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                Need help with integration?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our technical team can assist with API integration, troubleshooting, and custom endpoints.
              </p>
              <Link
                href="/support"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-white rounded-full transition-all hover:shadow-lg"
                style={{ 
                  background: "linear-gradient(135deg, #203eec 0%, #00d4ff 100%)",
                  boxShadow: "0 4px 20px rgba(32, 62, 236, 0.3)"
                }}
              >
                Contact Support
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
