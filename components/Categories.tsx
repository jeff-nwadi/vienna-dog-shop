import Image from 'next/image'
import Link from 'next/link'
import Food from "@/public/images/Dietary Options Bowl.png"
import Bed from "@/public/images/bed.svg"
import Grooming from "@/public/images/Pomeranian with Shampoo.png"
import Toys from "@/public/images/Jack Russell Terrier Scene.png"
import Puppies from "@/public/images/puppies.svg"

const categories = [
  {
    name: 'Food',
    image: Food,
    href: '#',
  },
  {
    name: 'Grooming',
    image: Grooming,
    href: '#',
  },
  {
    name: 'Toys',
    image: Toys,
    href: '#',
  },
  {
    name: 'Beds',
    image: Bed,
    href: '#',
  },
  {
    name: 'Puppies',
    image: Puppies,
    href: '#',
  },
]

export const Categories = () => {
  return (
    <section className="py-16 px-6 md:px-16">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-12 text-center font-heading text-xl font-bold text-brand-dark lg:text-2xl">
          Shop by Category
        </h2>
        
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
          {categories.map((category) => (
            <Link 
              key={category.name} 
              href={category.href}
              className="group flex flex-col items-center gap-4 text-center"
            >
              <div className='border-2 border-dashed border-gray-200 rounded-full p-2 group-hover:border-brand-green'>
                 <div className="relative h-20 w-20 overflow-hidden rounded-full transition-all duration-300 sm:h-44 sm:w-44 lg:h-40 lg:w-40">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
              <span className="text-md md:text-lg font-bold text-brand-dark transition-colors group-hover:text-brand-green">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
