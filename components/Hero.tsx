import Image from 'next/image'
import HeroDog from '../public/images/Hero Dog.svg'
import { ArrowRight } from 'lucide-react'

export const Hero = () => {
  return (
    <section className="relative h-[600px] w-full overflow-hidden px-6 lg:px-16">
      {/* Background Image Layer */}
      <div className="absolute inset-0 -z-10 h-full w-full">
        <Image
          src={HeroDog}
          alt="Dogs in a meadow"
          fill
          priority
          className="object-cover object-center brightness-90 transition-transform duration-700 hover:scale-105"
        />
        {/* Subtle Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-black/20 to-transparent" />
      </div>

      {/* Content Container */}
      <div className="mx-auto flex h-full max-w-7xl items-center">
        {/* Floating Card */}
        <div className="w-full max-w-[480px] rounded-2xl bg-white/95 p-8 shadow-2xl backdrop-blur-sm lg:p-12">
          <span className="mb-4 block text-[10px] md:text-[13px] font-bold uppercase tracking-widest text-brand-green">
            Premium care for dogs
          </span>
          <h1 className="mb-6 font-heading text-3xl font-bold leading-tight text-brand-dark lg:text-5xl">
            Premium Care for Your Best Friend
          </h1>
          <p className="mb-8 text-md md:text-lg leading-relaxed text-brand-dark/80 ">
            Discover our curated selection of high-quality
            food, toys, and grooming essentials for the dog
            you love.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <button className="flex items-center gap-3 rounded-md bg-brand-green px-8 py-4 text-[15px] font-semibold text-white transition-all hover:bg-brand-dark hover:shadow-lg active:scale-95">
              Shop Now
              <ArrowRight />
            </button>
            
          </div>
        </div>
      </div>
    </section>
  )
}
