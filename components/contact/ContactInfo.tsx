'use client'

import React from 'react'
import { MapPin, Phone, Mail } from 'lucide-react'
import Image from 'next/image'

const contactItems = [
  { icon: MapPin, label: '123 Bark Avenue, 1010 Vienna' },
  { icon: Phone, label: '+43 1 234 5678' },
  { icon: Mail, label: 'hello@viennadogshop.com' },
]

const businessHours = [
  { day: 'Mon-Fri', hours: '09:00 - 18:00' },
  { day: 'Saturday', hours: '10:00 - 16:00' },
  { day: 'Sunday', hours: 'Closed' },
]

export const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-10">
      {/* Contact Cards */}
      <div className="flex flex-col gap-4 rounded-[10px] bg-[#F9F3DC]/40 p-8 border border-[#F9F3DC]">
        {contactItems.map((item, idx) => {
          const Icon = item.icon
          return (
            <div key={idx} className="flex items-center gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-white text-brand-green shadow-sm">
                <Icon size={18} />
              </div>
              <span className="text-[13px] md:text-[14px] font-medium text-brand-dark tracking-wide leading-relaxed">
                {item.label}
              </span>
            </div>
          )
        })}
      </div>

      {/* Map Section */}
      <div className="relative aspect-video w-full overflow-hidden rounded-[10px] border border-gray-100 shadow-xl shadow-gray-100/30">
        <Image
          src="https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&q=80&w=800"
          alt="Vienna Map stylized"
          fill
          className="object-cover"
        />
        {/* Mock Map Marker Overlay */}
        <div className="absolute inset-0 bg-brand-green/10" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
           <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-gold text-white shadow-2xl ring-4 ring-white/50">
             <MapPin size={24} />
           </div>
        </div>
      </div>

      {/* Business Hours */}
      <div className="rounded-[10px] bg-[#F9F3DC]/40 p-8 border border-[#F9F3DC] md:p-10">
        <h3 className="mb-6 text-[14px] md:text-[16px] font-bold text-brand-dark uppercase tracking-widest">Business Hours</h3>
        <div className="flex flex-col gap-4">
          {businessHours.map((h, idx) => (
            <div key={idx} className="flex items-center justify-between border-b border-brand-dark/5 pb-4 last:border-0 last:pb-0">
              <span className="text-[13px] md:text-[14px] font-bold text-brand-dark">{h.day}</span>
              <span className="text-[13px] md:text-[14px] font-medium text-gray-500">{h.hours}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
