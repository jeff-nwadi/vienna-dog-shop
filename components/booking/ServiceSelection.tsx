'use client'

import React from 'react'
import { Bath, Scissors, HandIcon, Sparkles, Clock } from 'lucide-react'
import { useBookingStore, services } from '@/store/useBookingStore'

const getIcon = (id: string) => {
  switch (id) {
    case 'bath-brush': return Bath
    case 'haircut-styling': return Scissors
    case 'nail-trim-file': return HandIcon
    case 'full-spa': return Sparkles
    default: return Bath
  }
}

export const ServiceSelection = () => {
  const { serviceId, setServiceId } = useBookingStore()

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      {services.map((service) => {
        const Icon = getIcon(service.id)
        const isSelected = service.id === serviceId

        return (
          <button
            key={service.id}
            onClick={() => setServiceId(service.id)}
            className={`group relative flex flex-col rounded-2xl border-2 p-6 text-left transition-all ${
              isSelected 
                ? 'border-brand-green bg-[#F9F3DC]/40 shadow-sm' 
                : 'border-gray-100 hover:border-brand-green/30 hover:bg-gray-50'
            }`}
          >
            <div className={`mb-4 flex h-10 w-10 items-center justify-center rounded-xl transition-all ${
              isSelected ? 'bg-brand-green text-white' : 'bg-gray-100 text-gray-400 group-hover:bg-brand-green/10 group-hover:text-brand-green'
            }`}>
              <Icon size={20} />
            </div>
            
            <h3 className="mb-2 text-[16px] font-bold text-brand-dark">{service.name}</h3>
            <p className="mb-6 text-[13px] leading-relaxed text-gray-500 line-clamp-2">
              {service.description}
            </p>
            
            <div className="mt-auto flex items-center justify-between">
              <span className="text-[14px] font-bold text-brand-dark">From ${service.price}</span>
              <div className="flex items-center gap-1.5 text-[12px] text-gray-400">
                <Clock size={12} />
                <span>{service.duration}</span>
              </div>
            </div>
          </button>
        )
      })}
    </div>
  )
}
