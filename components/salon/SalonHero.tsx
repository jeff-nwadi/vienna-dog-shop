'use client'

import Image from 'next/image'

export const SalonHero = () => {
  return (
    <section className="relative h-[400px] w-full overflow-hidden rounded-[32px]">
      <Image
        src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=1200"
        alt="Grooming Salon"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-brand-green/40 backdrop-blur-[2px]" />
      <div className="absolute inset-0 flex flex-col items-start justify-center px-12 md:px-20">
        <div className="max-w-2xl">
          <h1 className="mb-6 font-heading text-5xl font-bold leading-tight text-white lg:text-7xl">
            Grooming Salon
          </h1>
          <p className="text-lg leading-relaxed text-white/90">
            Our expert groomers provide a calm, safe, and premium spa experience for your best friend. Choose a service, select a time, and tell us a bit about your dog.
          </p>
        </div>
      </div>
    </section>
  )
}
