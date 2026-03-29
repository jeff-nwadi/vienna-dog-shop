import Image from 'next/image'
import { Star } from 'lucide-react'
import Link from 'next/link'
import Product1 from "@/public/images/Product.svg"
import Product2 from "@/public/images/Product(1).svg"
import Product3 from "@/public/images/Product(2).svg"
import Product4 from "@/public/images/Product(3).svg"

const products = [
  {
    id: 1,
    slug: "organic-beef-recipe",
    name: "Classic Forest Green Leather Collar",
    brand: "VIENNA HERITAGE",
    price: "$45.00",
    rating: 5,
    reviews: 128,
    image: Product1,
    badge: "Bestseller",
  },
  {
    id: 2,
    slug: "wild-salmon-grain-free-kibble",
    name: "Wild Salmon Grain-Free Kibble (5kg)",
    brand: "NATURE'S DIET",
    price: "$38.50",
    rating: 5,
    reviews: 84,
    image: Product2,
  },
  {
    id: 3,
    slug: "indestructible-plush-duck-toy",
    name: "Indestructible Plush Duck Toy",
    brand: "PLAYFUL PAWS",
    price: "$14.00",
    rating: 5,
    reviews: 212,
    image: Product3,
    badge: "New",
  },
  {
    id: 4,
    slug: "orthopedic-memory-foam-bed",
    name: "Orthopedic Memory Foam Bed - Large",
    brand: "SLEEPY DREAMS",
    price: "$120.00",
    rating: 5,
    reviews: 340,
    image: Product4,
  },
]

const ProductCard = ({ product }: { product: typeof products[0] }) => {
  return (
    <div className="group flex flex-col">
      <Link href={`/shop/${product.slug}`} className="relative aspect-4/5 w-full overflow-hidden rounded-lg bg-gray-100">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.badge && (
          <div className="absolute left-3 top-3 rounded bg-white px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-dark shadow-sm">
            {product.badge}
          </div>
        )}
      </Link>
      
      <div className="mt-3 flex flex-col gap-0.5 md:mt-4 md:gap-1">
        <span className="text-[9px] font-bold tracking-widest text-gray-400 uppercase md:text-[10px]">
          {product.brand}
        </span>
        <Link href={`/shop/${product.slug}`}>
          <h3 className="line-clamp-2 min-h-10 text-[13px] font-bold leading-tight text-brand-dark transition-colors group-hover:text-brand-green md:text-[15px]">
            {product.name}
          </h3>
        </Link>
        
        <div className="mt-1 flex items-center gap-1 md:mt-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                size={10} 
                className={`${i < product.rating ? 'fill-brand-gold text-brand-gold' : 'text-gray-200'} md:size-3`} 
              />
            ))}
          </div>
          <span className="text-[10px] text-gray-400 md:text-[11px]">({product.reviews})</span>
        </div>
        
        <div className="mt-3 flex flex-col gap-2 md:mt-4 md:flex-row md:items-center md:justify-between">
          <span className="text-md font-bold text-brand-green md:text-lg">
            {product.price}
          </span>
          <button className="w-full rounded-md bg-[#F8F3E9] py-2 text-[11px] font-bold text-brand-dark transition-all hover:bg-brand-green hover:text-white active:scale-95 md:w-auto md:px-4 md:text-[13px]">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export const NewArrivals = () => {
  return (
    <section className="py-16 px-6 md:px-16 bg-white">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-12 text-center font-heading text-xl font-bold text-brand-dark lg:text-2xl">
          New Arrivals
        </h2>
        
        <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:gap-x-8 md:gap-y-12 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="mt-16 flex justify-center">
          <Link 
            href="#" 
            className="rounded-md border border-brand-green px-8 py-3 text-[15px] font-bold text-brand-green transition-all hover:bg-brand-green hover:text-white"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  )
}
