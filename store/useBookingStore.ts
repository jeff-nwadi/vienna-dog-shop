import { create } from 'zustand'

export interface Service {
  id: string
  name: string
  description: string
  price: number
  duration: string
}

export const services: Service[] = [
  {
    id: 'bath-brush',
    name: 'Bath & Brush',
    description: 'Premium shampoo, conditioner, blow dry, thorough brushing, and nail trimming.',
    price: 45,
    duration: '1h 15m',
  },
  {
    id: 'haircut-styling',
    name: 'Haircut & Styling',
    description: 'Breed-specific or custom haircut styling, including paw pad and sanitary trim.',
    price: 65,
    duration: '2h',
  },
  {
    id: 'nail-trim-file',
    name: 'Nail Trim & File',
    description: 'Careful nail clipping and filing for smooth edges and healthy paws.',
    price: 15,
    duration: '20m',
  },
  {
    id: 'full-spa',
    name: 'Full Spa Package',
    description: 'The ultimate treatment: bath, full haircut, nail trim, teeth brushing, and facial.',
    price: 95,
    duration: '3h',
  },
]

interface BookingState {
  serviceId: string
  date: string | null
  time: string | null
  petInfo: {
    name: string
    breed: string
    size: string
    age: string
    notes: string
  }
  setServiceId: (id: string) => void
  setDate: (date: string | null) => void
  setTime: (time: string | null) => void
  updatePetInfo: (info: Partial<BookingState['petInfo']>) => void
}

export const useBookingStore = create<BookingState>((set) => ({
  serviceId: 'bath-brush',
  date: '2025-10-14',
  time: '10:30 AM',
  petInfo: {
    name: 'Max',
    breed: 'Golden Retriever',
    size: 'Large (51 - 90 lbs)',
    age: '6',
    notes: 'Max is very friendly but can be a bit sensitive when his paws are touched.',
  },
  setServiceId: (serviceId) => set({ serviceId }),
  setDate: (date) => set({ date }),
  setTime: (time) => set({ time }),
  updatePetInfo: (info) => set((state) => ({ petInfo: { ...state.petInfo, ...info } })),
}))
