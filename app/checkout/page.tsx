'use client'

import React, { useState } from 'react'
import { ChevronRight, CreditCard, Wallet, MapPin, User, Mail, Phone } from 'lucide-react'
import { useCartStore } from '@/store/useCartStore'
import Image from 'next/image'
import Link from 'next/link'

const steps = [
  { id: 1, name: 'Cart' },
  { id: 2, name: 'Checkout' },
  { id: 3, name: 'Confirmation' },
]

export default function CheckoutPage() {
  const { items, subtotal, tax, shipping, total } = useCartStore()
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'paypal'>('card')

  const formatPrice = (num: number) => `$${num.toFixed(2)}`

  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Checkout Navbar / Header */}
      <nav className="bg-white px-6 py-6 md:px-16 md:py-8 font-heading">
        <div className="mx-auto flex max-w-7xl items-center justify-center">  
          {/* Progress Stepper */}
          <div className="hidden items-center gap-4 md:flex">
            {steps.map((step, idx) => (
              <div key={step.id} className="flex items-center gap-4">
                <div className={`flex h-8 w-8 items-center justify-center rounded-full text-[13px] font-bold ${
                  step.id === 2 ? 'bg-brand-green text-white' : 'bg-gray-100 text-gray-400'
                }`}>
                  {step.id}
                </div>
                <span className={`text-[14px] font-medium ${
                  step.id === 2 ? 'text-brand-dark' : 'text-gray-400'
                }`}>
                  {step.name}
                </span>
                {idx < steps.length - 1 && <ChevronRight size={14} className="text-gray-300" />}
              </div>
            ))}
          </div>
        </div>
      </nav>

      <main className="flex-1 px-6 py-12 md:px-16 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-24">
            
            {/* Form Section */}
            <div className="flex-1 space-y-16">
              {/* 1. Billing & Shipping */}
              <div className="rounded-[10px] border border-gray-100 bg-white p-8 shadow-sm md:p-12">
                <h2 className="mb-10 font-heading text-[18px] font-bold tracking-wide text-brand-dark md:text-xl">
                  Billing & Shipping
                </h2>

                <form className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  <div className="flex flex-col gap-3">
                    <label className="text-[12px] font-bold uppercase tracking-widest text-brand-dark">First Name</label>
                    <input 
                      type="text" 
                      placeholder="Sarah"
                      className="h-12 w-full rounded-[10px] border-none bg-gray-50 px-5 text-[14px] text-brand-dark outline-none placeholder:text-gray-300 focus:ring-2 focus:ring-brand-green/20"
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <label className="text-[12px] font-bold uppercase tracking-widest text-brand-dark">Last Name</label>
                    <input 
                      type="text" 
                      placeholder="Jenkins"
                      className="h-12 w-full rounded-[10px] border-none bg-gray-50 px-5 text-[14px] text-brand-dark outline-none placeholder:text-gray-300 focus:ring-2 focus:ring-brand-green/20"
                    />
                  </div>
                  <div className="flex flex-col gap-3 md:col-span-2">
                    <label className="text-[12px] font-bold uppercase tracking-widest text-brand-dark">Email</label>
                    <input 
                      type="email" 
                      placeholder="sarah@example.com"
                      className="h-12 w-full rounded-[10px] border-none bg-gray-50 px-5 text-[14px] text-brand-dark outline-none placeholder:text-gray-300 focus:ring-2 focus:ring-brand-green/20"
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <label className="text-[12px] font-bold uppercase tracking-widest text-brand-dark">Phone</label>
                    <input 
                      type="tel" 
                      placeholder="+43 1 234 5678"
                      className="h-12 w-full rounded-[10px] border-none bg-gray-50 px-5 text-[14px] text-brand-dark outline-none placeholder:text-gray-300 focus:ring-2 focus:ring-brand-green/20"
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <label className="text-[12px] font-bold uppercase tracking-widest text-brand-dark">Address</label>
                    <input 
                      type="text" 
                      placeholder="123 Bark Avenue"
                      className="h-12 w-full rounded-[10px] border-none bg-gray-50 px-5 text-[14px] text-brand-dark outline-none placeholder:text-gray-300 focus:ring-2 focus:ring-brand-green/20"
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <label className="text-[12px] font-bold uppercase tracking-widest text-brand-dark">City</label>
                    <input 
                      type="text" 
                      placeholder="Vienna"
                      className="h-12 w-full rounded-[10px] border-none bg-gray-50 px-5 text-[14px] text-brand-dark outline-none placeholder:text-gray-300 focus:ring-2 focus:ring-brand-green/20"
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <label className="text-[12px] font-bold uppercase tracking-widest text-brand-dark">ZIP</label>
                    <input 
                      type="text" 
                      placeholder="1010"
                      className="h-12 w-full rounded-[10px] border-none bg-gray-50 px-5 text-[14px] text-brand-dark outline-none placeholder:text-gray-300 focus:ring-2 focus:ring-brand-green/20"
                    />
                  </div>
                </form>
              </div>

              {/* 2. Payment Method */}
              <div className="rounded-[10px] border border-gray-100 bg-white p-8 shadow-sm md:p-12">
                <h2 className="mb-10 font-heading text-[18px] font-bold tracking-wide text-brand-dark md:text-xl">
                  Payment Method
                </h2>

                <div className="flex flex-col gap-4">
                  <button 
                    onClick={() => setPaymentMethod('card')}
                    className={`flex h-20 items-center justify-between rounded-[10px] border-2 px-8 transition-all ${
                      paymentMethod === 'card' ? 'border-brand-green bg-[#F9F3DC]/30' : 'border-gray-50 bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`h-4 w-4 rounded-full border-2 ${
                        paymentMethod === 'card' ? 'border-brand-green bg-brand-green' : 'border-gray-300 bg-white'
                      }`} />
                      <span className="text-[15px] font-bold tracking-wide">Card ending in 4242</span>
                    </div>
                    <CreditCard size={20} className="text-gray-400" />
                  </button>

                  <button 
                    onClick={() => setPaymentMethod('paypal')}
                    className={`flex h-20 items-center justify-between rounded-3xl border-2 px-8 transition-all ${
                      paymentMethod === 'paypal' ? 'border-brand-green bg-[#F9F3DC]/30' : 'border-gray-50 bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`h-4 w-4 rounded-full border-2 ${
                        paymentMethod === 'paypal' ? 'border-brand-green bg-brand-green' : 'border-gray-300 bg-white'
                      }`} />
                      <span className="text-[15px] font-bold tracking-wide">PayPal</span>
                    </div>
                    <Wallet size={20} className="text-gray-400" />
                  </button>
                </div>
              </div>
            </div>

            {/* Order Summary Sidebar */}
            <div className="lg:w-[480px]">
              <div className="rounded-[10px] bg-[#F9F3DC]/40 p-8 border border-[#F9F3DC] md:p-12">
                <h2 className="mb-8 font-heading text-[18px] font-bold tracking-wide text-brand-dark">
                  Your Order
                </h2>

                <div className="mb-8 space-y-6">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      <div className="h-20 w-20 shrink-0 overflow-hidden rounded-[10px] bg-white shadow-sm">
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={80}
                          height={80}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="flex flex-1 flex-col justify-center gap-1">
                        <h3 className="text-[14px] font-bold leading-tight text-brand-dark">{item.name}</h3>
                        <span className="text-[12px] text-gray-500">Qty {item.quantity}</span>
                      </div>
                      <div className="flex items-center justify-center text-[14px] font-bold text-brand-dark">
                        {formatPrice(item.numericPrice * item.quantity)}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col gap-4 border-t border-brand-dark/5 pt-8 mb-8">
                  <div className="flex justify-between text-[14px]">
                    <span className="text-gray-500">Subtotal</span>
                    <span className="font-bold text-brand-dark">{formatPrice(subtotal())}</span>
                  </div>
                  <div className="flex justify-between text-[14px]">
                    <span className="text-gray-500">Shipping</span>
                    <span className="font-bold text-brand-dark">{formatPrice(shipping)}</span>
                  </div>
                </div>

                <div className="flex items-baseline justify-between">
                  <h3 className="text-[16px] font-bold text-brand-dark">Total</h3>
                  <div className="flex flex-col items-end">
                    <span className="text-2xl font-bold text-brand-dark">{formatPrice(total())}</span>
                  </div>
                </div>

                <button className="mt-12 flex h-14 w-full cursor-pointer items-center justify-center rounded-[10px] bg-brand-green font-bold text-white transition-all hover:brightness-110 active:scale-95">
                  Place Order
                </button>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  )
}
