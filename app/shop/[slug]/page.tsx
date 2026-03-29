'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { Star, Minus, Plus, ShoppingCart, ArrowRight, CheckCircle2, ShieldCheck, Truck } from 'lucide-react'
import { shopItems, Product } from '@/data/shopItems'

const TabContent = ({ product }: { product: Product }) => {
  const [activeTab, setActiveTab] = useState('description')

  const tabs = [
    { id: 'description', label: 'Description' },
    { id: 'ingredients', label: 'Ingredients / Details' },
    { id: 'reviews', label: 'Reviews' },
  ]

  return (
    <div className="mt-16">
      <div className="flex border-b border-gray-100 gap-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`pb-4 text-[15px] font-bold transition-all relative ${
              activeTab === tab.id ? 'text-brand-green' : 'text-gray-400 hover:text-brand-dark'
            }`}
          >
            {tab.label}
            {activeTab === tab.id && (
              <div className="absolute bottom-0 left-0 h-0.5 w-full bg-brand-green" />
            )}
          </button>
        ))}
      </div>
      
      <div className="py-8 text-[15px] leading-relaxed text-gray-500 max-w-3xl">
        {activeTab === 'description' && <p>{product.description}</p>}
        {activeTab === 'ingredients' && <p>{product.ingredients || "No ingredients listed for this item."}</p>}
        {activeTab === 'reviews' && (
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-brand-gold text-brand-gold" />
                ))}
              </div>
              <span className="font-bold text-brand-dark">{product.rating}.0</span>
              <span className="text-gray-400">({product.reviews} reviews)</span>
            </div>
            <p>Customer reviews are verified and managed through our portal.</p>
          </div>
        )}
      </div>
    </div>
  )
}

const RelatedProducts = ({ category, currentId }: { category: string, currentId: number }) => {
  const related = shopItems
    .filter(item => item.category === category && item.id !== currentId)
    .slice(0, 4)

  if (related.length === 0) return null

  return (
    <div className="mt-20">
      <h2 className="mb-10 font-heading text-2xl font-bold text-brand-dark">Related Products</h2>
      <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
        {related.map((item) => (
          <Link key={item.id} href={`/shop/${item.slug}`} className="group flex flex-col gap-4">
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-gray-50 border border-gray-100">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-[15px] font-bold text-brand-dark group-hover:text-brand-green transition-colors line-clamp-1">{item.name}</h3>
              <span className="text-[14px] font-bold text-gray-400">{item.price}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default function ProductDetailPage() {
  const params = useParams()
  const slug = params.slug as string
  const product = shopItems.find((p) => p.slug === slug)
  
  const [activeImage, setActiveImage] = useState(0)
  const [quantity, setQuantity] = useState(1)

  if (!product) return <div className="p-20 text-center">Product not found</div>

  const images = [product.image, ...(product.gallery || [])]

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-16 lg:py-16">
        {/* Breadcrumbs */}
        <nav className="mb-12 flex items-center gap-2 text-[13px] text-gray-400">
          <Link href="/" className="hover:text-brand-green">Home</Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-brand-green">Shop</Link>
          <span>/</span>
          <span className="hover:text-brand-green cursor-pointer">{product.category}</span>
          <span>/</span>
          <span className="text-brand-green font-medium">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-24">
          {/* Gallery Side */}
          <div className="flex flex-col gap-6 lg:col-span-5">
            <div className="relative aspect-square overflow-hidden rounded-[10px] bg-gray-50 border border-gray-100 max-w-md lg:max-w-none mx-auto lg:mx-0 w-full">
              <Image
                src={images[activeImage]}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="grid grid-cols-4 gap-4 max-w-md lg:max-w-none mx-auto lg:mx-0 w-full">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`relative aspect-square overflow-hidden rounded-2xl bg-gray-50 border-2 transition-all ${
                    activeImage === idx ? 'border-brand-green' : 'border-transparent hover:border-brand-green/30'
                  }`}
                >
                  <Image src={img} alt={`${product.name} thumbnail ${idx}`} fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Info Side */}
          <div className="flex flex-col lg:col-span-7">
            {product.badge && (
              <span className="mb-4 inline-block w-fit rounded-full bg-brand-green/5 px-4 py-1.5 text-[12px] font-bold uppercase tracking-wider text-brand-green">
                {product.badge}
              </span>
            )}
            
            <h1 className="mb-4 font-heading text-2xl font-bold leading-tight text-brand-dark lg:text-3xl">
              {product.name}
            </h1>

            <div className="mb-8 flex items-center gap-3">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    className={`${i < product.rating ? 'fill-brand-gold text-brand-gold' : 'text-gray-200'}`} 
                  />
                ))}
              </div>
              <span className="text-[14px] text-gray-400">{product.reviews} reviews</span>
            </div>

            <div className="mb-8 flex items-baseline gap-4">
              <span className="text-3xl font-bold text-brand-green">{product.price}</span>
              {product.originalPrice && (
                <span className="text-xl text-gray-300 line-through">{product.originalPrice}</span>
              )}
            </div>

            <p className="mb-10 text-[16px] leading-relaxed text-gray-500">
              {product.description.split('.')[0]}.
            </p>

            <div className="mb-10 flex flex-col gap-6">
              <div className="flex flex-col gap-3">
                <span className="text-[14px] font-bold text-brand-dark">Quantity</span>
                <div className="flex h-12 w-32 items-center justify-between rounded-lg border border-gray-100 px-3">
                  <button 
                    onClick={() => setQuantity(q => Math.max(1, q - 1))}
                    className="flex h-8 w-8 items-center justify-center text-gray-400 transition-colors hover:text-brand-green"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="font-bold text-brand-dark">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(q => q + 1)}
                    className="flex h-8 w-8 items-center justify-center text-gray-400 transition-colors hover:text-brand-green"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <button className="flex h-14 flex-1 items-center justify-center gap-2 rounded-xl bg-brand-green font-bold text-white transition-all hover:brightness-110 active:scale-95">
                  <ShoppingCart size={20} />
                  Add to Cart
                </button>
                <button className="flex h-14 flex-1 items-center justify-center rounded-xl bg-brand-gold font-bold text-brand-dark transition-all hover:brightness-110 active:scale-95">
                  Buy Now
                </button>
              </div>
            </div>

            {/* Features/Trust */}
            <div className="mt-4 flex flex-col gap-4 rounded-[10px] bg-[#F9F3DC]/40 p-6 md:p-8">
              <div className="flex items-center gap-3">
                <Truck className="text-brand-green" size={20} />
                <span className="text-[14px] text-brand-dark/80">Free shipping over <strong>$50</strong></span>
              </div>
              <div className="flex items-center gap-3">
                <ShieldCheck className="text-brand-green" size={20} />
                <span className="text-[14px] text-brand-dark/80">Vet approved ingredients</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-brand-green" size={20} />
                <span className="text-[14px] text-brand-dark/80">Easy 30-day returns</span>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Tabs */}
        <TabContent product={product} />

        {/* Related Products */}
        <RelatedProducts category={product.category} currentId={product.id} />
      </div>
    </div>
  )
}
