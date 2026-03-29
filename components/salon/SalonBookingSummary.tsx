'use client'

import React from 'react'
import { Info } from 'lucide-react'
import { useBookingStore, services } from '@/store/useBookingStore'

export const SalonBookingSummary = () => {
  const { serviceId, date, time, petInfo } = useBookingStore()
  
  const selectedService = services.find(s => s.id === serviceId) || services[0]
  const displayServiceName = selectedService.name.split(' ')[0] // e.g., "Haircut" from "Haircut & Styling"

  return (
    <div className="rounded-[2rem] bg-[#F9F3DC]/40 p-10  border border-[#F9F3DC]">
      <h3 className="mb-10 text-xl font-bold tracking-wide text-brand-dark">Booking Summary</h3>
      
      <div className="flex flex-col gap-6 border-b border-brand-dark/5 pb-8">
        <div className="flex justify-between text-[14px]">
          <span className="text-brand-dark/60 font-medium">Service</span>
          <span className="font-bold text-brand-dark text-right">{displayServiceName}</span>
        </div>
        <div className="flex justify-between text-[14px]">
          <span className="text-brand-dark/60 font-medium">Date</span>
          <span className="font-bold text-brand-dark text-right">{date || '-'}</span>
        </div>
        <div className="flex justify-between text-[14px]">
          <span className="text-brand-dark/60 font-medium">Time</span>
          <span className="font-bold text-brand-dark text-right">{time || '-'}</span>
        </div>
        <div className="flex justify-between text-[14px]">
          <span className="text-brand-dark/60 font-medium">Pet</span>
          <span className="font-bold text-brand-dark text-right">
            {petInfo.name}, {petInfo.breed}
          </span>
        </div>
      </div>

      <div className="mb-12 flex items-center justify-between py-10">
        <span className="text-[16px] font-bold text-brand-dark">Estimated Cost</span>
        <span className="text-2xl font-black text-brand-dark">${selectedService.price.toFixed(2)}</span>
      </div>

      <button className="h-14 w-full rounded-2xl bg-brand-green px-8 font-bold text-white transition-all hover:brightness-110 active:scale-95 shadow-xl shadow-brand-green/10">
        Confirm Booking
      </button>

      <div className="mt-6 flex items-center justify-center gap-2 text-[12px] text-brand-dark/40">
        <Info size={14} />
        <span>Payment is collected after the service.</span>
      </div>
    </div>
  )
}
