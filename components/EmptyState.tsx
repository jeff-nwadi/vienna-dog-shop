'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Search } from 'lucide-react'

interface EmptyStateProps {
  title: string
  description: string
  showSearch?: boolean
}

export const EmptyState = ({ title, description, showSearch = true }: EmptyStateProps) => {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      {/* Dog Tail Illustration Area */}
      <div className="relative mb-8 h-48 w-36 overflow-hidden rounded-t-full border-8 border-brand-green/30 bg-[#F9F3DC]/30">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
           <Image
             src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=300"
             alt="No results found"
             width={200}
             height={300}
             className="object-cover grayscale brightness-110"
           />
        </div>
      </div>

      <h2 className="mb-4 font-heading text-xl font-bold tracking-wide text-brand-dark md:text-2xl">
        {title}
      </h2>
      <p className="mb-10 max-w-sm text-[14px] leading-relaxed text-gray-400">
        {description}
      </p>

      {/* Search Bar */}
      {showSearch && (
        <div className="relative mb-10 w-full max-w-sm">
          <input
            type="text"
            placeholder="Search for something else..."
            className="h-12 w-full rounded-2xl border-none bg-gray-50 px-5 text-[14px] text-brand-dark outline-none focus:ring-2 focus:ring-brand-green/20"
          />
          <Search size={16} className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-300" />
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex items-center gap-4">
        <Link 
          href="/shop" 
          className="flex h-11 items-center justify-center rounded-xl bg-brand-green px-6 text-[13px] font-bold text-white transition-all hover:brightness-110 active:scale-95"
        >
          Clear Filters
        </Link>
        <Link 
          href="/" 
          className="flex h-11 items-center justify-center rounded-xl border border-gray-100 px-6 text-[13px] font-bold text-brand-dark transition-all hover:bg-gray-50 active:scale-95"
        >
          Go Home
        </Link>
      </div>
    </div>
  )
}
