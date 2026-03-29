'use client'

import React from 'react'
import { Plus, Minus, X } from 'lucide-react'
import { useCartStore } from '@/store/useCartStore'
import Image from 'next/image'
import Link from 'next/link'

export default function CartPage() {
  const { items, updateQuantity, removeItem, subtotal, tax, shipping, total } = useCartStore()

  const formatPrice = (num: number) => `$${num.toFixed(2)}`

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <main className="flex-1 px-6 py-12 md:px-16 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <h1 className="mb-10 font-heading text-xl font-bold tracking-tight text-brand-dark md:text-2xl">
            Your Shopping Cart
          </h1>

          <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-16">
            
            {/* Product List */}
            <div className="flex-1 rounded-[2.5rem] border border-gray-100 bg-white p-6 shadow-sm md:p-10">
              <div className="hidden border-b border-gray-50 bg-[#F9F3DC]/30 p-4 md:flex items-center text-[12px] font-bold uppercase tracking-widest text-brand-dark mb-8">
                <span className="flex-1">Product</span>
                <span className="w-32 text-center">Quantity</span>
                <span className="w-24 text-right">Total</span>
              </div>

              <div className="flex flex-col gap-8">
                {items.length > 0 ? (
                  items.map((item) => (
                    <div key={item.id} className="flex flex-col gap-6 border-b border-gray-50 pb-8 last:border-0 last:pb-0 md:flex-row md:items-center">
                      {/* Product Info */}
                      <div className="flex flex-1 items-center gap-6">
                        <div className="h-24 w-24 shrink-0 overflow-hidden rounded-2xl bg-gray-50 md:h-28 md:w-28">
                          <Image
                            src={item.image}
                            alt={item.name}
                            width={112}
                            height={112}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <h3 className="text-[15px] font-bold text-brand-dark">{item.name}</h3>
                          <span className="text-[12px] text-gray-400">Size: {item.size}</span>
                          <button 
                            onClick={() => removeItem(item.id)}
                            className="mt-2 w-fit text-[12px] font-bold text-brand-green hover:underline"
                          >
                            Remove
                          </button>
                        </div>
                      </div>

                      {/* Quantity Control */}
                      <div className="flex w-full items-center justify-between md:w-32 md:justify-center">
                        <span className="text-[12px] font-bold text-brand-dark md:hidden uppercase tracking-widest">Quantity</span>
                        <div className="flex items-center gap-4 rounded-xl border border-gray-100 bg-gray-50 px-3 py-2">
                          <button 
                            onClick={() => updateQuantity(item.id, -1)}
                            className="text-gray-400 transition-colors hover:text-brand-green"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="min-w-6 text-center text-[14px] font-bold text-brand-dark">
                            {item.quantity}
                          </span>
                          <button 
                            onClick={() => updateQuantity(item.id, 1)}
                            className="text-gray-400 transition-colors hover:text-brand-green"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                      </div>

                      {/* Total */}
                      <div className="flex w-full items-center justify-between md:w-24 md:justify-end">
                        <span className="text-[12px] font-bold text-brand-dark md:hidden uppercase tracking-widest">Total</span>
                        <span className="text-[15px] font-bold text-brand-dark">
                          {formatPrice(item.numericPrice * item.quantity)}
                        </span>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="py-12 text-center text-gray-400">Your cart is empty.</div>
                )}
              </div>

              <div className="mt-12 pt-8 border-t border-gray-50">
                <Link href="/shop" className="text-[14px] font-bold text-brand-green hover:underline">
                  Continue Shopping
                </Link>
              </div>
            </div>

            {/* Sidebar Summary */}
            <div className="lg:w-[420px]">
              <div className="rounded-[2.5rem] bg-[#F9F3DC]/40 p-8 border border-[#F9F3DC] md:p-10">
                <h2 className="mb-8 font-heading text-[16px] font-bold uppercase tracking-widest text-brand-dark">
                  Order Summary
                </h2>

                <div className="flex flex-col gap-4 border-b border-brand-dark/5 pb-8">
                  <div className="flex justify-between text-[14px]">
                    <span className="text-gray-500">Subtotal</span>
                    <span className="font-bold text-brand-dark">{formatPrice(subtotal())}</span>
                  </div>
                  <div className="flex justify-between text-[14px]">
                    <span className="text-gray-500">Shipping estimate</span>
                    <span className="font-bold text-brand-dark">{formatPrice(shipping)}</span>
                  </div>
                  <div className="flex justify-between text-[14px]">
                    <span className="text-gray-500">Tax</span>
                    <span className="font-bold text-brand-dark">{formatPrice(tax())}</span>
                  </div>
                </div>

                <div className="mt-8 flex items-center justify-between">
                  <span className="text-[15px] font-bold text-brand-dark">Total</span>
                  <span className="text-xl font-bold text-brand-dark">{formatPrice(total())}</span>
                </div>

                <Link 
                  href="/checkout"
                  className="mt-10 flex h-14 w-full items-center justify-center rounded-2xl bg-brand-green font-bold text-white transition-all hover:brightness-110 active:scale-95 shadow-lg shadow-brand-green/10"
                >
                  Proceed to Checkout
                </Link>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  )
}
