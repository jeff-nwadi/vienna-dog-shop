'use client'

import React from 'react'
import { Bath, Scissors, HandIcon, Sparkles } from 'lucide-react'
import { useBookingStore } from '@/store/useBookingStore'

const salonServices = [
  { id: 'bath', name: 'Bath', description: 'Freshen up & clean essence', icon: Bath, price: 45 },
  { id: 'haircut', name: 'Haircut', description: 'Style, trim & tidy', icon: Scissors, price: 65 },
  { id: 'nail-trim', name: 'Nail Trim', description: 'Quick comfort visit', icon: HandIcon, price: 15 },
  { id: 'full-grooming', name: 'Full Grooming', description: 'Bath, cut, brush & more', icon: Sparkles, price: 95 },
]

export const SalonServiceSelection = () => {
  const { serviceId, setServiceId } = useBookingStore()

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {salonServices.map((service) => {
        const Icon = service.icon
        const isSelected = service.name === 'Haircut' // Mocking for initial reference or mapping
        const activeId = serviceId === 'haircut-styling' && service.id === 'haircut' // Rough mapping
        
        return (
          <button
            key={service.id}
            onClick={() => {
              // Map salon services to booking store IDs
              const map: Record<string, string> = {
                'bath': 'bath-brush',
                'haircut': 'haircut-styling',
                'nail-trim': 'nail-trim-file',
                'full-grooming': 'full-spa'
              }
              setServiceId(map[service.id])
            }}
            className={`group flex flex-col items-center gap-4 rounded-[2rem] border-2 p-8 text-center transition-all ${
              (serviceId === 'haircut-styling' && service.id === 'haircut') || 
              (serviceId === 'bath-brush' && service.id === 'bath') || 
              (serviceId === 'nail-trim-file' && service.id === 'nail-trim') || 
              (serviceId === 'full-spa' && service.id === 'full-grooming')
                ? 'border-brand-green bg-[#E6F0EB]' 
                : 'border-transparent bg-white hover:border-brand-green/30'
            }`}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F9F3DC] text-brand-green shadow-sm">
              <Icon size={20} />
            </div>
            <div>
              <h3 className="mb-1 text-[16px] font-bold text-brand-dark">{service.name}</h3>
              <p className="text-[12px] text-gray-400">{service.description}</p>
            </div>
          </button>
        )
      })}
    </div>
  )
}
