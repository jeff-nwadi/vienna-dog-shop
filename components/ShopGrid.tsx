'use client'

import Image from 'next/image'
import { Star, ChevronDown } from 'lucide-react'
import { shopItems } from '@/data/shopItems'
import Link from 'next/link'

export const ProductCard = ({ product }: { product: typeof shopItems[0] }) => {
  return (
    <div className="group flex flex-col bg-white rounded-2xl p-4 transition-all duration-300 hover:shadow-lg border border-gray-50">
      <Link href={`/shop/${product.slug}`} className="relative aspect-4/5 w-full overflow-hidden rounded-xl bg-gray-50">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.badge && (
          <div className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-dark shadow-sm">
            {product.badge}
          </div>
        )}
      </Link>
      
      <div className="mt-4 flex flex-col gap-1">
        <span className="text-[10px] font-bold tracking-widest text-gray-300 uppercase">
          {product.brand}
        </span>
        <Link href={`/shop/${product.slug}`}>
          <h3 className="line-clamp-2 min-h-[40px] text-[15px] font-bold leading-tight text-brand-dark transition-colors group-hover:text-brand-green">
            {product.name}
          </h3>
        </Link>
        
        <div className="flex items-center gap-1.5 mt-1">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                size={12} 
                className={`${i < product.rating ? 'fill-brand-gold text-brand-gold' : 'text-gray-200'}`} 
              />
            ))}
          </div>
          <span className="text-[11px] text-gray-400">({product.reviews})</span>
        </div>
        
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-bold text-brand-green">
            {product.price}
          </span>
          <button className="rounded-md border border-gray-100 bg-brand-green text-white cursor-pointer px-4 py-2 text-[12px] font-bold transition-all hover:bg-brand-green hover:border-brand-green hover:text-white active:scale-95">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

import { useSearchParams } from 'next/navigation'
import { EmptyState } from '@/components/EmptyState'

export const ShopGrid = () => {
  const searchParams = useSearchParams()
  const category = searchParams.get('category')

  const filteredProducts = category 
    ? shopItems.filter(item => item.category === category)
    : shopItems

  return (
    <div className="flex-1">
      {/* Search/Sort Header */}
      <div className="mb-10 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div>
          <div className="mb-2 flex items-center gap-2 text-[13px] text-gray-400">
            <Link href="/" className="hover:text-brand-green">Home</Link>
            <span>/</span>
            <span className="text-brand-green font-bold uppercase tracking-widest text-[10px]">Shop</span>
          </div>
          <h1 className="font-heading tracking-wide text-xl font-bold text-brand-dark">
            {category ? `${category} Products` : 'All Products'}
          </h1>
        </div>
        
        <div className="flex items-center gap-4">
          <span className="text-[14px] text-gray-400">Sort by</span>
          <div className="relative cursor-pointer rounded-lg bg-gray-50 px-4 py-2.5 flex items-center gap-3 transition-colors hover:bg-gray-100 min-w-[140px]">
            <span className="text-[14px] font-bold text-brand-dark">Popular</span>
            <ChevronDown size={14} className="text-gray-400" />
          </div>
        </div>
      </div>
      
      {/* Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <EmptyState 
          title="No Products Found" 
          description="We couldn't find any products matching your search criteria. Try a different category or search term."
        />
      )}
    </div>
  )
}
