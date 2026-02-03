"use client"

import React from "react"
import { useState, useRef } from "react"
import { SectionTitle } from "@/components/ui/section-title"
import emailjs from "@emailjs/browser"

export function ContactForm() {
  const form = useRef<HTMLFormElement>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    // Map EmailJS field names to our state keys
    const fieldMap: { [key: string]: string } = {
      'from_name': 'name',
      'from_email': 'email',
      'company': 'company',
      'from_number': 'phone',
      'from_subject': 'subject',
      'message': 'message'
    }
    const stateKey = fieldMap[name] || name
    setFormData((prev) => ({
      ...prev,
      [stateKey]: value,
    }))
  }

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault()

    if (!form.current) return

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text)
          setSubmitted(true)
          setFormData({ name: "", email: "", company: "", phone: "", subject: "", message: "" })
          setTimeout(() => {
            setSubmitted(false)
          }, 3000)
        },
        (error) => {
          console.log("FAILED...", error.text)
          alert("Something went wrong. Please try again.")
        }
      )
  }

  return (
    <>
      {/* Form */}
      {submitted ? (
        <div className="p-8 md:p-12 border border-border rounded-2xl bg-secondary/50 text-center">
          <h3 className="text-2xl font-semibold mb-4">Thank you for reaching out!</h3>
          <p className="text-muted-foreground">We'll review your message and get back to you soon.</p>
        </div>
      ) : (
        <form ref={form} onSubmit={sendEmail} className="space-y-6 md:space-y-8">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="from_name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-border rounded-lg bg-transparent text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="Your name"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="from_email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-border rounded-lg bg-transparent text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="your@email.com"
              />
            </div>

            {/* Company */}
            <div>
              <label htmlFor="company" className="block text-sm font-medium mb-2">
                Company / Organization
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-border rounded-lg bg-transparent text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="Company name"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-2">
                Phone Number
              </label>
              <input
                type="text"
                id="phone"
                name="from_number"
                className="w-full px-4 py-3 border border-border rounded-lg bg-transparent text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="Your phone number"
              />
            </div>

            {/* Subject */}
            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-2">
                Subject
              </label>
              <select
                id="subject"
                name="from_subject"
                className="w-full px-4 py-3 border border-border rounded-lg bg-transparent text-foreground focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              >
                <option value="">Select a subject</option>
                <option value="Custom Software Development">Custom Software Development</option>
                <option value="Web Application">Web Application</option>
                <option value="Mobile Application">Mobile Application</option>
                <option value="Machine Learning Solution">Machine Learning Solution</option>
                <option value="Data Engineering">Data Engineering</option>
                <option value="UI/UX Design">UI/UX Design</option>
                <option value="Research & Development">Research & Development</option>
                <option value="Technical Consulting">Technical Consulting</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Project Details
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 border border-border rounded-lg bg-transparent text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                placeholder="Tell us about your project, goals, and any specific requirements..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-8 py-4 text-base font-medium text-white rounded-full transition-all relative overflow-hidden group"
              style={{
                background: "linear-gradient(135deg, #203eec 0%, #00d4ff 100%)",
                boxShadow: "0 4px 20px rgba(32, 62, 236, 0.3)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 8px 30px rgba(32, 62, 236, 0.5), 0 0 40px rgba(0, 212, 255, 0.3)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 4px 20px rgba(32, 62, 236, 0.3)"
              }}
            >
              Send Message
            </button>
          </form>
        )}
    </>
  )
}
