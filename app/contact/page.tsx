import { ContactForm } from "@/components/contact/ContactForm"
import { ContactInfo } from "@/components/contact/ContactInfo"

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <main className="flex-1 px-6 py-12 md:px-16 lg:py-16">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-12 max-w-2xl md:mb-20">
            <h1 className="mb-4 font-heading text-2xl font-bold tracking-wide text-brand-dark md:text-5xl lg:text-6xl">
              Get in Touch
            </h1>
            <p className="text-[14px] md:text-lg leading-relaxed text-gray-500">
              Questions about products, grooming appointments, or your order? We'd love to help.
            </p>
          </div>

          {/* Main Layout */}
          <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-24">
            
            {/* Left: Contact Form */}
            <div className="flex-1">
              <ContactForm />
            </div>

            {/* Right: Contact Info & Map */}
            <div className="lg:w-[480px]">
              <ContactInfo />
            </div>

          </div>
        </div>
      </main>
    </div>
  )
}
