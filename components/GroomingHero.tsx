'use client'

import Image from 'next/image'
import { Sparkles } from 'lucide-react'

export const GroomingHero = () => {
  return (
    <section className="relative overflow-hidden bg-[#F9F3DC] py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-16">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-24">
          <div className="max-w-xl">
            <div className="mb-6 flex items-center gap-2 rounded-full bg-brand-green/10 px-4 py-1.5 text-[12px] font-bold uppercase tracking-widest text-brand-green">
              <Sparkles size={14} />
              <span>Full-Service Care</span>
            </div>
            <h1 className="mb-8 font-heading text-3xl font-bold leading-wide text-brand-dark lg:text-4xl">
              Stress-Free Grooming for Your <span className="text-brand-green italic">Best Friend</span>
            </h1>
            <p className="mb-10 text-lg leading-relaxed text-gray-600">
              Our expert groomers provide a calming, spa-like experience using only premium organic products. 
              We don't just groom; we refresh and revitalize your pet from nose to tail.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <button className="h-14 rounded-xl bg-brand-green px-10 font-bold text-white transition-all hover:brightness-110 active:scale-95">
                Book Appointment
              </button>
              <button className="h-14 rounded-xl border border-brand-green/20 px-10 font-bold text-brand-green transition-all hover:bg-white active:scale-95">
                View Pricing
              </button>
            </div>
          </div>
          
          <div className="relative aspect-4/5 w-full overflow-hidden rounded-[3rem] shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=800"
              alt="Groomed happy dog"
              fill
              className="object-cover"
              priority
            />
            {/* Trust Badge overlay */}
            <div className="absolute bottom-10 left-10 right-10 flex items-center gap-4 rounded-3xl bg-white/90 p-6 backdrop-blur-sm">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-gold text-white">
                <Sparkles size={24} />
              </div>
              <div>
                <p className="font-bold text-brand-dark">Certified Experts</p>
                <p className="text-[14px] text-gray-500">Professional, gentle care for all breeds.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
