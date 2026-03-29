'use client'

import { Star } from 'lucide-react'

const categories = ['Food', 'Grooming', 'Toys', 'Beds', 'Puppies']
const brands = ["Nature's Best", 'Kong', 'Paw Ritual', 'RuffWear']

export const ShopSidebar = () => {
  return (
    <aside className="w-full shrink-0 flex flex-col gap-10 lg:w-[280px]">
      {/* Categories */}
      <div>
        <h3 className="mb-6 text-[16px] font-bold text-brand-dark">Categories</h3>
        <div className="flex flex-col gap-4 bg-[#F6EFD9] p-4 text-brand-dark rounded-2xl">
          {categories.map((cat) => (
            <label key={cat} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                className="h-5 w-5 rounded border-gray-200 text-brand-green focus:ring-brand-green"
                defaultChecked={cat === 'Food'}
              />
              <span className="text-[15px] text-gray-400 group-hover:text-brand-green transition-colors">
                {cat}
              </span>
            </label>
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
