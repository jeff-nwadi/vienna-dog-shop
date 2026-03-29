'use client'

import React from 'react'
import { useBookingStore } from '@/store/useBookingStore'

const sizes = [
  'Small (under 20 lbs)',
  'Medium (21 - 50 lbs)',
  'Large (51 - 90 lbs)',
  'Extra Large (over 90 lbs)',
]

export const PetDetailsForm = () => {
  const { petInfo, updatePetInfo } = useBookingStore()

  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
      <div className="flex flex-col gap-2">
        <label className="text-[14px] font-bold text-brand-dark">Pet's Name</label>
        <input
          type="text"
          value={petInfo.name}
          onChange={(e) => updatePetInfo({ name: e.target.value })}
          placeholder="Max"
          className="h-12 w-full rounded-2xl border-none bg-gray-50 px-5 text-[14px] text-brand-dark outline-none placeholder:text-gray-300 focus:ring-2 focus:ring-brand-green/20"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-[14px] font-bold text-brand-dark">Breed</label>
        <input
          type="text"
          value={petInfo.breed}
          onChange={(e) => updatePetInfo({ breed: e.target.value })}
          placeholder="Golden Retriever"
          className="h-12 w-full rounded-2xl border-none bg-gray-50 px-5 text-[14px] text-brand-dark outline-none placeholder:text-gray-300 focus:ring-2 focus:ring-brand-green/20"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-[14px] font-bold text-brand-dark">Size</label>
        <select
          value={petInfo.size}
          onChange={(e) => updatePetInfo({ size: e.target.value })}
          className="h-12 w-full rounded-2xl border-none bg-gray-50 px-5 text-[14px] text-brand-dark outline-none focus:ring-2 focus:ring-brand-green/20 appearance-none"
        >
          {sizes.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-[14px] font-bold text-brand-dark">Age (Years)</label>
        <input
          type="number"
          value={petInfo.age}
          onChange={(e) => updatePetInfo({ age: e.target.value })}
          placeholder="6"
          className="h-12 w-full rounded-2xl border-none bg-gray-50 px-5 text-[14px] text-brand-dark outline-none focus:ring-2 focus:ring-brand-green/20"
        />
      </div>

      <div className="flex flex-col gap-2 sm:col-span-2">
        <label className="text-[14px] font-bold text-brand-dark">Special Notes / Medical Conditions</label>
        <textarea
          value={petInfo.notes}
          onChange={(e) => updatePetInfo({ notes: e.target.value })}
          rows={4}
          placeholder="Any special needs?"
          className="w-full rounded-2xl border-none bg-gray-50 p-5 text-[14px] text-brand-dark outline-none focus:ring-2 focus:ring-brand-green/20"
        />
      </div>
    </div>
  )
}
