'use client'

import React from 'react'
import { Lock } from 'lucide-react'
import { useBookingStore, services } from '@/store/useBookingStore'

export const BookingSummary = () => {
  const { serviceId, date, time, petInfo } = useBookingStore()
  
  const selectedService = services.find(s => s.id === serviceId) || services[0]
  
  const subtotal = selectedService.price
  const tax = subtotal * 0.08
  const total = subtotal + tax

  const formatDate = (dateStr: string | null) => {
    if (!dateStr) return '-'
    const d = new Date(dateStr)
    return d.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    })
  }

  return (
    <div className="sticky top-10 rounded-[10px] bg-white p-10 shadow-2xl shadow-gray-200/50 border border-gray-50 lg:w-[400px]">
      <h3 className="mb-10 text-xl font-bold text-brand-dark">Booking Summary</h3>
      
      <div className="flex flex-col gap-6 border-b border-gray-100 pb-8">
        <div className="flex justify-between text-[14px]">
          <span className="text-gray-400">Service</span>
          <span className="font-bold text-brand-dark">{selectedService.name}</span>
        </div>
        <div className="flex justify-between text-[14px]">
          <span className="text-gray-400">Date</span>
          <span className="font-bold text-brand-dark">{formatDate(date)}</span>
        </div>
        <div className="flex justify-between text-[14px]">
          <span className="text-gray-400">Time</span>
          <span className="font-bold text-brand-dark">{time || '-'}</span>
        </div>
        <div className="flex justify-between text-[14px]">
          <span className="text-gray-400">Pet</span>
          <span className="font-bold text-brand-dark">
            {petInfo.name} ({petInfo.size.split(' ')[0]})
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-4 py-8">
        <div className="flex justify-between text-[15px]">
          <span className="text-gray-400">Subtotal</span>
          <span className="font-bold text-brand-dark">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-[15px]">
          <span className="text-gray-400">Tax (8%)</span>
          <span className="font-bold text-brand-dark">${tax.toFixed(2)}</span>
        </div>
      </div>

      <div className="mb-10 flex items-center justify-between border-t border-gray-100 pt-8">
        <span className="text-lg font-bold text-brand-dark">Total</span>
        <span className="text-3xl font-bold text-brand-dark">${total.toFixed(2)}</span>
      </div>

      <button className="mb-6 h-14 w-full rounded-2xl bg-brand-gold px-8 font-bold text-brand-dark transition-all hover:brightness-110 active:scale-95 shadow-lg shadow-brand-gold/20">
        Confirm Booking
      </button>

      <div className="flex items-center justify-center gap-2 text-[12px] text-gray-400">
        <Lock size={12} />
        <span>Secure online payment at salon</span>
      </div>
    </div>
  )
}
