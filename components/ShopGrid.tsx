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

import { useSearchParams, useRouter, usePathname } from 'next/navigation'
import { EmptyState } from '@/components/EmptyState'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const ITEMS_PER_PAGE = 6

export const ShopGrid = () => {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()
  
  const category = searchParams.get('category')
  const searchQuery = searchParams.get('search')?.toLowerCase() || ''
  const page = parseInt(searchParams.get('page') || '1', 10)

  const filteredProducts = shopItems.filter(item => {
    const matchesCategory = !category || item.category === category
    const matchesSearch = !searchQuery || 
      item.name.toLowerCase().includes(searchQuery) || 
      item.brand.toLowerCase().includes(searchQuery)
    
    return matchesCategory && matchesSearch
  })

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE)
  const paginatedProducts = filteredProducts.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  )

  const handlePageChange = (newPage: number) => {
    const params = new URLSearchParams(searchParams)
    params.set('page', newPage.toString())
    router.push(`${pathname}?${params.toString()}`, { scroll: false })
  }

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
            {searchQuery 
              ? `Results for "${searchParams.get('search')}"` 
              : category ? `${category} Products` : 'All Products'}
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
      {paginatedProducts.length > 0 ? (
        <>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {paginatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-16 flex items-center justify-center gap-4">
              <button 
                onClick={() => handlePageChange(page - 1)}
                disabled={page === 1}
                className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-100 text-gray-400 transition-all hover:bg-brand-green hover:text-white disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-gray-400"
                aria-label="Previous page"
              >
                <ChevronLeft size={18} />
              </button>
              
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i + 1}
                  onClick={() => handlePageChange(i + 1)}
                  className={`h-10 w-10 rounded-md text-[14px] font-bold transition-all ${
                    (i + 1) === page 
                      ? 'bg-brand-green text-white shadow-md' 
                      : 'border border-gray-100 bg-white text-gray-400 hover:border-brand-green hover:text-brand-green'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
              
              <button 
                onClick={() => handlePageChange(page + 1)}
                disabled={page === totalPages}
                className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-100 text-gray-400 transition-all hover:bg-brand-green hover:text-white disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-gray-400"
                aria-label="Next page"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          )}
        </>
      ) : (
        <EmptyState 
          title="No Products Found" 
          description="We couldn't find any products matching your search criteria. Try a different category or search term."
        />
      )}
    </div>
  )
}
