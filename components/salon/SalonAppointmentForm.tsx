'use client'

import React from 'react'
import { Calendar, Clock } from 'lucide-react'
import { useBookingStore } from '@/store/useBookingStore'

const petSizes = [
  'Small (u 10kg)',
  'Medium (10 - 25kg)',
  'Large (v 25kg)',
]

export const SalonAppointmentForm = () => {
  const { date, setDate, time, setTime, petInfo, updatePetInfo } = useBookingStore()

  return (
    <div className="flex flex-col gap-10">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        {/* Date */}
        <div className="flex flex-col gap-2">
          <label className="text-[14px] font-bold text-brand-dark">Preferred Date</label>
          <div className="relative">
            <input
              type="text"
              value={date || ''}
              onChange={(e) => setDate(e.target.value)}
              placeholder="Friday, Oct 31"
              className="h-12 w-full rounded-2xl border-none bg-gray-50 px-5 text-[14px] text-brand-dark outline-none focus:ring-2 focus:ring-brand-green/20"
            />
            <Calendar size={16} className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-300" />
          </div>
        </div>

        {/* Time */}
        <div className="flex flex-col gap-2">
          <label className="text-[14px] font-bold text-brand-dark">Preferred Time</label>
          <div className="relative">
            <input
              type="text"
              value={time || ''}
              onChange={(e) => setTime(e.target.value)}
              placeholder="10:30 AM"
              className="h-12 w-full rounded-2xl border-none bg-gray-50 px-5 text-[14px] text-brand-dark outline-none focus:ring-2 focus:ring-brand-green/20"
            />
            <Clock size={16} className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-300" />
          </div>
        </div>

        {/* Pet Name */}
        <div className="flex flex-col gap-2">
          <label className="text-[14px] font-bold text-brand-dark">Pet Name</label>
          <input
            type="text"
            value={petInfo.name}
            onChange={(e) => updatePetInfo({ name: e.target.value })}
            placeholder="Milo"
            className="h-12 w-full rounded-2xl border-none bg-gray-50 px-5 text-[14px] text-brand-dark outline-none focus:ring-2 focus:ring-brand-green/20"
          />
        </div>

        {/* Breed */}
        <div className="flex flex-col gap-2">
          <label className="text-[14px] font-bold text-brand-dark">Breed</label>
          <input
            type="text"
            value={petInfo.breed}
            onChange={(e) => updatePetInfo({ breed: e.target.value })}
            placeholder="Cockapoo"
            className="h-12 w-full rounded-2xl border-none bg-gray-50 px-5 text-[14px] text-brand-dark outline-none focus:ring-2 focus:ring-brand-green/20"
          />
        </div>
      </div>

      {/* Size Selection */}
      <div className="flex flex-col gap-4">
        <label className="text-[14px] font-bold text-brand-dark">Size</label>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {petSizes.map((size) => {
             const isSelected = petInfo.size.includes(size.split(' ')[0])
             return (
              <button
                key={size}
                onClick={() => updatePetInfo({ size: size })}
                className={`h-12 rounded-xl border-2 px-6 text-[14px] font-bold transition-all ${
                  isSelected 
                    ? 'border-brand-green bg-brand-green text-white' 
                    : 'border-gray-100 bg-white text-brand-dark hover:border-brand-green/30'
                }`}
              >
                {size}
              </button>
            )
          })}
        </div>
      </div>

      {/* Special Notes */}
      <div className="flex flex-col gap-4">
        <label className="text-[14px] font-bold text-brand-dark">Special Notes (Optional)</label>
        <textarea
          value={petInfo.notes}
          onChange={(e) => updatePetInfo({ notes: e.target.value })}
          rows={5}
          placeholder="Sensitive around paws. Please keep appointment calm and quiet."
          className="w-full rounded-[2rem] border-none bg-gray-50 p-6 text-[14px] text-brand-dark outline-none focus:ring-2 focus:ring-brand-green/20"
        />
      </div>
    </div>
  )
}
