'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Search } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center bg-white px-6 py-20 text-center">
      {/* Dog Tail Illustration Area */}
      <div className="relative mb-12 h-64 w-48 overflow-hidden rounded-t-full border-[12px] border-brand-green/40 bg-[#F9F3DC]/30">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
           {/* Stylized Dog Tail/Back Image */}
           <Image
             src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=400"
             alt="Dog wandered off"
             width={300}
             height={400}
             className="object-cover grayscale brightness-110"
           />
        </div>
      </div>

      <h1 className="mb-4 font-heading text-3xl font-bold tracking-wide text-brand-dark md:text-4xl">
        Oops! Page not found
      </h1>
      <p className="mb-10 max-w-md text-[15px] leading-relaxed text-gray-400">
        The page you're looking for wandered off. Try searching or head back to the homepage.
      </p>

      {/* Search Bar */}
      <div className="relative mb-12 w-full max-w-md">
        <input
          type="text"
          placeholder="Search products, articles, or services"
          className="h-14 w-full rounded-2xl border-none bg-gray-50 px-6 text-[14px] text-brand-dark outline-none focus:ring-2 focus:ring-brand-green/20"
        />
        <Search size={18} className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-300" />
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-4">
        <Link 
          href="/" 
          className="flex h-12 items-center justify-center rounded-xl bg-brand-green px-8 text-[14px] font-bold text-white transition-all hover:brightness-110 active:scale-95"
        >
          Go Home
        </Link>
        <Link 
          href="/shop" 
          className="flex h-12 items-center justify-center rounded-xl border border-gray-100 px-8 text-[14px] font-bold text-brand-dark transition-all hover:bg-gray-50 active:scale-95"
        >
          Browse Shop
        </Link>
      </div>
    </div>
  )
}
