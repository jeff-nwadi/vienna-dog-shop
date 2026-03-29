import { create } from 'zustand'

interface CarouselState {
  currentIndex: number
  isPaused: boolean
  itemsPerView: number
  totalItems: number
  nextSlide: () => void
  prevSlide: () => void
  setPaused: (paused: boolean) => void
  setCurrentIndex: (index: number) => void
  setItemsPerView: (items: number) => void
  setTotalItems: (total: number) => void
}

export const useCarouselStore = create<CarouselState>((set) => ({
  currentIndex: 0,
  isPaused: false,
  itemsPerView: 1,
  totalItems: 5, // Initially 5 testimonials
  nextSlide: () => 
    set((state) => ({ 
      currentIndex: state.currentIndex + 1 >= state.totalItems ? 0 : state.currentIndex + 1 
    })),
  prevSlide: () => 
    set((state) => ({ 
      currentIndex: state.currentIndex - 1 < 0 ? state.totalItems - 1 : state.currentIndex - 1 
    })),
  setPaused: (paused) => set({ isPaused: paused }),
  setCurrentIndex: (index) => set({ currentIndex: index }),
  setItemsPerView: (items) => set({ itemsPerView: items }),
  setTotalItems: (total) => set({ totalItems: total }),
}))
