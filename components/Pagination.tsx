'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'

export const Pagination = ({ currentPage = 2 }: { currentPage?: number }) => {
  return (
    <div className="mt-16 flex items-center justify-center gap-4">
      <button 
        className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-100 text-gray-400 transition-all hover:bg-brand-green hover:text-white disabled:opacity-50"
        aria-label="Previous page"
      >
        <ChevronLeft size={18} />
      </button>
      
      {[1, 2, 3].map((page) => (
        <button
          key={page}
          className={`h-10 w-10 rounded-md text-[14px] font-bold transition-all ${
            page === currentPage 
              ? 'bg-brand-green text-white shadow-md' 
              : 'border border-gray-100 bg-white text-gray-400 hover:border-brand-green hover:text-brand-green'
          }`}
        >
          {page}
        </button>
      ))}
      
      <button 
        className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-100 text-gray-400 transition-all hover:bg-brand-green hover:text-white"
        aria-label="Next page"
      >
        <ChevronRight size={18} />
      </button>
    </div>
  )
}
