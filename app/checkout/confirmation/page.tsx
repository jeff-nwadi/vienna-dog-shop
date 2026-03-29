'use client'

import React from 'react'
import { Check, ChevronRight } from 'lucide-react'
import Link from 'next/link'

export default function ConfirmationPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Navbar / Header (Same as Checkout) */}
      <nav className="bg-white px-6 py-6 md:px-16 md:py-8 font-heading">
        <div className="mx-auto flex max-w-7xl items-center justify-center">  
          <div className="hidden items-center gap-4 md:flex">
            <div className="flex items-center gap-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-400 text-[13px] font-bold">1</div>
              <span className="text-[14px] font-medium text-gray-400">Cart</span>
              <ChevronRight size={14} className="text-gray-300" />
            </div>
            <div className="flex items-center gap-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-400 text-[13px] font-bold">2</div>
              <span className="text-[14px] font-medium text-gray-400">Checkout</span>
              <ChevronRight size={14} className="text-gray-300" />
            </div>
            <div className="flex items-center gap-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-green text-white text-[13px] font-bold">3</div>
              <span className="text-[14px] font-medium text-brand-dark">Confirmation</span>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex flex-1 items-center justify-center px-6 py-12 md:px-16 lg:py-24">
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          
          {/* Success Icon */}
          <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-[#D1FAE5]">
            <Check size={40} className="text-[#059669]" />
          </div>

          {/* Heading */}
          <h1 className="mb-4 font-heading text-3xl font-bold tracking-tight text-brand-dark md:text-5xl">
            Thank You For Your Order!
          </h1>
          
          {/* Subheading */}
          <p className="mb-12 text-[15px] leading-relaxed text-gray-500 md:text-lg">
            Order #VD-84729 is confirmed. We&apos;ve emailed your receipt and delivery updates.
          </p>

          {/* Details Card */}
          <div className="mb-12 w-full rounded-[10px] border border-gray-100 bg-white p-8 shadow-sm md:p-10">
            <div className="space-y-6">
              <div className="flex items-center justify-between text-[14px] md:text-[16px]">
                <span className="font-medium text-gray-500">Items ordered</span>
                <span className="font-bold text-brand-dark">2 items</span>
              </div>
              <div className="flex items-center justify-between text-[14px] md:text-[16px]">
                <span className="font-medium text-gray-500">Estimated delivery</span>
                <span className="font-bold text-brand-green">Oct 27 &ndash; Oct 29</span>
              </div>
              <div className="flex items-center justify-between border-t border-gray-50 pt-6 text-[14px] md:text-[16px]">
                <span className="font-medium text-gray-500">Total</span>
                <span className="text-xl font-bold text-brand-dark">$114.08</span>
              </div>
            </div>
          </div>

          {/* Continue Button */}
          <Link 
            href="/shop"
            className="flex h-14 items-center justify-center rounded-[10px] bg-brand-green px-10 text-[15px] font-bold text-white transition-all hover:brightness-110 active:scale-95 shadow-lg shadow-brand-green/10"
          >
            Continue Shopping
          </Link>

        </div>
      </main>
    </div>
  )
}
