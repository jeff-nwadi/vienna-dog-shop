import { SalonHero } from "@/components/salon/SalonHero"
import { SalonServiceSelection } from "@/components/salon/SalonServiceSelection"
import { SalonAppointmentForm } from "@/components/salon/SalonAppointmentForm"
import { SalonBookingSummary } from "@/components/salon/SalonBookingSummary"

export default function SalonPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <main className="flex-1 px-6 py-12 md:px-16 lg:py-16">
        <div className="mx-auto max-w-7xl">
          {/* Hero Section */}
          <SalonHero />

          {/* Booking Content */}
          <div className="mt-20 flex flex-col gap-16 lg:flex-row lg:items-start lg:gap-24">
            
            <div className="flex-1 flex flex-col gap-20">
              {/* 1. Select a Service */}
              <div>
                <h2 className="mb-10 font-heading text-xl font-bold text-brand-dark">1. Select a Service</h2>
                <SalonServiceSelection />
              </div>

              {/* 2. Appointment Details */}
              <div>
                <h2 className="mb-10 font-heading text-xl font-bold text-brand-dark">2. Appointment Details</h2>
                <SalonAppointmentForm />
              </div>
            </div>

            {/* Sidebar Summary */}
            <div className="lg:w-[420px]">
              <SalonBookingSummary />
            </div>

          </div>
        </div>
      </main>
    </div>
  )
}
