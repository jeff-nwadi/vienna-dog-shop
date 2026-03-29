'use client'
import { Suspense } from 'react'

import { ShopSidebar } from "@/components/ShopSidebar"
import { ProductCard } from "@/components/ShopGrid"
import { shopItems } from "@/data/shopItems"

export default function GroomingProductsPage() {
  const groomingProducts = shopItems.filter(item => item.category === "Grooming")

  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Header Section */}
      <section className="bg-[#F9F3DC] py-16 text-center">
        <div className="mx-auto max-w-7xl px-6 md:px-16">
          <h1 className="mb-4 font-heading text-xl font-bold tracking-wide text-brand-dark lg:text-2xl">
            Grooming & Care
          </h1>
          <p className="mx-auto max-w-2xl text-sm md:text-lg text-gray-400">
            Professional-grade grooming supplies for at-home pampering. From organic shampoos to precision tools.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-6 py-12 md:px-16 lg:flex-row lg:py-20">
        {/* Sidebar */}
        <aside className="w-full lg:w-[280px]">
          <Suspense fallback={<div className="h-64 animate-pulse rounded-2xl bg-gray-100" />}>
            <ShopSidebar />
          </Suspense>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="mb-8 flex items-center justify-between">
            <p className="text-[14px] text-gray-400">
              Showing <span className="font-bold text-brand-dark">{groomingProducts.length}</span> grooming products
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {groomingProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
