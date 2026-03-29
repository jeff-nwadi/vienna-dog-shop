"use client"
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const HERO_IMAGES = [
  {
    src: '/images/hero_1.png',
    alt: 'Golden Retriever in a sun-drenched field'
  },
  {
    src: '/images/hero_2.png',
    alt: 'Elegant Poodle in a wildflower meadow'
  }
]

export const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative h-[500px] w-full overflow-hidden lg:h-[650px] bg-white">
      {/* Background Slider */}
      <div className="absolute inset-0 z-0">
        {HERO_IMAGES.map((img, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 h-full w-full transition-opacity duration-1000 ease-in-out ${
              currentIndex === idx ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              priority={idx === 0}
              className="object-cover object-center"
            />
          </div>
        ))}
        {/* Cinematic Cream Fade Overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-[#F9F3DC] via-[#F9F3DC]/40 to-transparent lg:from-[#F9F3DC] lg:via-[#F9F3DC]/20 lg:to-transparent" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 lg:px-16">
        <div className="z-10 w-full max-w-2xl animate-fade-in">
          <span className="mb-4 block text-[11px] font-bold uppercase tracking-[0.2em] text-[#C7A17A] md:text-[13px]">
            Best for your best friend
          </span>
          <h1 className="mb-6 font-heading text-4xl font-bold leading-[1.1] text-brand-dark md:text-5xl lg:text-7xl">
            Premium Care for <br className="hidden lg:block" /> Your Pet
          </h1>
          <p className="mb-10 max-w-lg text-[15px] leading-relaxed text-gray-500 md:text-lg">
            Discover our curated selection of high-quality food, cozy beds, and grooming essentials designed to keep your dog happy and healthy.
          </p>
          <div className="flex items-center gap-6">
            <Link 
              href="/shop"
              className="rounded-[10px] bg-brand-dark px-10 py-5 text-[15px] font-bold text-white transition-all hover:bg-brand-green hover:shadow-xl active:scale-95"
            >
              Shop Collection
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
