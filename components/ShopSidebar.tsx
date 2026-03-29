"use client"
import { Star } from 'lucide-react'
import { useSearchParams, useRouter, usePathname } from 'next/navigation'
import { useCallback } from 'react'

const categories = ['Food', 'Grooming', 'Toys', 'Beds', 'Puppies']
const brands = ["Nature's Best", 'Kong', 'Paw Ritual', 'RuffWear']

export const ShopSidebar = () => {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()
  
  const currentCategory = searchParams.get('category')

  const handleCategoryClick = useCallback((category: string) => {
    const params = new URLSearchParams(searchParams)
    
    if (currentCategory === category) {
      params.delete('category')
    } else {
      params.set('category', category)
    }
    
    // Always reset to page 1 when changing filters
    params.delete('page')
    
    router.push(`${pathname}?${params.toString()}`, { scroll: false })
  }, [searchParams, currentCategory, pathname, router])

  return (
    <aside className="w-full shrink-0 flex flex-col gap-10 lg:w-[280px]">
      {/* Categories */}
      <div>
        <h3 className="mb-6 text-[16px] font-bold text-brand-dark">Categories</h3>
        <div className="flex flex-col gap-4 bg-[#F6EFD9] p-4 text-brand-dark rounded-2xl">
          {categories.map((cat) => (
            <button 
              key={cat} 
              onClick={() => handleCategoryClick(cat)}
              className="flex items-center gap-3 cursor-pointer group text-left"
            >
              <div className={`h-5 w-5 rounded border-2 flex items-center justify-center transition-all ${
                currentCategory === cat 
                  ? 'border-brand-green bg-brand-green text-white' 
                  : 'border-gray-200 bg-white'
              }`}>
                {currentCategory === cat && (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                )}
              </div>
              <span className={`text-[15px] transition-colors ${
                currentCategory === cat ? 'text-brand-green font-bold' : 'text-gray-400 group-hover:text-brand-green'
              }`}>
                {cat}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className=' bg-[#F6EFD9] p-4 text-brand-dark rounded-2xl'>
        <h3 className="mb-6 text-[16px] font-bold text-brand-dark ">Price Range</h3>
        <div className="px-1">
          <input
            type="range"
            min="0"
            max="180"
            className="w-full h-1 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-brand-green"
          />
          <div className="mt-4 flex items-center justify-between text-[13px] font-medium text-gray-400">
            <span>$0</span>
            <span>$180</span>
          </div>
        </div>
      </div>

      {/* Brands */}
      <div className=' bg-[#F6EFD9] p-4 text-brand-dark rounded-2xl'>
        <h3 className="mb-6 text-[16px] font-bold text-brand-dark">Brands</h3>
        <div className="flex flex-col gap-4">
          {brands.map((brand) => (
            <label key={brand} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                className="h-5 w-5 rounded border-gray-200 text-brand-green focus:ring-brand-green"
              />
              <span className="text-[15px] text-gray-400 group-hover:text-brand-green transition-colors">
                {brand}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Rating */}
      <div className='bg-[#F6EFD9] p-4 text-brand-dark rounded-2xl'>
        <h3 className="mb-6 text-[16px] font-bold text-brand-dark">Rating</h3>
        <div className="flex flex-col gap-5">
          <label className="flex items-center gap-3 cursor-pointer group">
            <input type="checkbox" className="h-5 w-5 rounded border-gray-200 text-brand-green" />
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="fill-brand-gold text-brand-gold" />
              ))}
            </div>
          </label>
          <label className="flex items-center gap-3 cursor-pointer group">
            <input type="checkbox" className="h-5 w-5 rounded border-gray-200 text-brand-green" />
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} size={14} className="fill-brand-gold text-brand-gold" />
                ))}
                <Star size={14} className="text-gray-200" />
              </div>
              <span className="text-[14px] text-gray-400">& up</span>
            </div>
          </label>
        </div>
      </div>
    </aside>
  )
}
