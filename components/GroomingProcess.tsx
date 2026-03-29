'use client'

import { MessageCircle, Bath, Sparkles, ArrowRight } from 'lucide-react'

const steps = [
  {
    icon: MessageCircle,
    title: 'Personal Consultation',
    description: 'We meet with you and your pet to discuss specific needs, health history, and styling preferences.',
  },
  {
    icon: Bath,
    title: 'Premium Grooming',
    description: 'Our expert team provides a gentle, thorough cleaning and styling session using organic products.',
  },
  {
    icon: Sparkles,
    title: 'The Refresh',
    description: 'Your pet emerges smelling wonderful and looking their absolute best, ready for your greeting.',
  },
]

export const GroomingProcess = () => {
  return (
    <section className="bg-[#F6EFD9] py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-16 text-center">
        <h2 className="mb-20 font-heading text-4xl font-bold text-brand-dark lg:text-5xl">The Grooming Journey</h2>
        
        <div className="relative grid grid-cols-1 gap-16 lg:grid-cols-3 lg:gap-12">
          {/* Connecting arrow/line - Desktop only */}
          <div className="hidden lg:absolute lg:top-12 lg:left-1/4 lg:right-1/4 lg:flex lg:justify-between lg:opacity-30">
             <ArrowRight size={32} className="text-brand-green" />
             <ArrowRight size={32} className="text-brand-green" />
          </div>

          {steps.map((step, idx) => {
            const Icon = step.icon
            return (
              <div key={idx} className="relative group flex flex-col items-center gap-8">
                <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-white shadow-xl transition-all duration-300 group-hover:bg-brand-gold group-hover:text-white">
                  <Icon size={40} className="text-brand-green group-hover:text-white transition-colors" />
                </div>
                <div className="max-w-[300px]">
                  <h3 className="mb-4 text-xl font-bold text-brand-dark">{step.title}</h3>
                  <p className="text-[15px] leading-relaxed text-gray-500">
                    {step.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
