'use client'

import Image from 'next/image'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { useEffect } from 'react'
import { useCarouselStore } from '@/store/useCarouselStore'

const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    description: "Dog Mom to Max (Golden Retriever)",
    quote: "The grooming service here is exceptional! Max always comes back smelling amazing and looking so handsome. The staff truly cares about the animals.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100",
  },
  {
    id: 2,
    name: "David L.",
    description: "Dog Dad to Luna (French Bulldog)",
    quote: "I switched to their recommended organic food brand and my Frenchie's coat has never been shinier. Fast shipping and beautiful packaging every time.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100",
  },
  {
    id: 3,
    name: "Elena R.",
    description: "Dog Mom to Ghost (Husky)",
    quote: "The aesthetic of the store and their product selection is unmatched. I love the durable toys they stock—finally something my Husky can't destroy in 5 minutes!",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100",
  },
  {
    id: 4,
    name: "Michael T.",
    description: "Dog Dad to Cooper (Beagle)",
    quote: "The only place I trust for my Beagle's specialized diet. Their customer service is top-notch and always helpful with advice.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100",
  },
  {
    id: 5,
    name: "Emily W.",
    description: "Dog Mom to Bella (Poodle)",
    quote: "I've tried many shops, but Vienna's curated selection is just different. You can tell they put heart into every product they stock.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100",
  },
]

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => {
  return (
    <div className="flex h-full flex-col gap-6 rounded-2xl bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={16} className="fill-brand-gold text-brand-gold" />
        ))}
      </div>
      
      <p className="grow italic text-brand-dark/80 leading-relaxed text-[15px]">
        "{testimonial.quote}"
      </p>
      
      <div className="flex items-center gap-4 mt-auto">
        <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-gray-100">
          <Image
            src={testimonial.avatar}
            alt={testimonial.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col">
          <span className="font-bold text-brand-dark leading-tight">{testimonial.name}</span>
          <span className="text-[12px] text-gray-400">{testimonial.description}</span>
        </div>
      </div>
    </div>
  )
}

export const Testimonials = () => {
  const { 
    currentIndex, 
    nextSlide, 
    prevSlide, 
    setPaused, 
    setCurrentIndex, 
    isPaused,
    itemsPerView,
    setItemsPerView 
  } = useCarouselStore()

  // We still need one useEffect for the timer logic if it's not managed internally by the store 
  // with a self-cleanup (which is hard in Zustand). 
  // However, we'll keep the component focused on UI.
  useEffect(() => {
    if (isPaused) return
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [nextSlide, isPaused])

  // Handle responsiveness
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setItemsPerView(3)
      else if (window.innerWidth >= 768) setItemsPerView(2)
      else setItemsPerView(1)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [setItemsPerView])

  return (
    <section 
      className="bg-[#F9F3DC] py-20 px-6 md:px-16 overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-16 text-center font-heading text-xl font-bold text-brand-dark lg:text-2xl">
          What Our Pack Says
        </h2>
        
        <div className="relative group/carousel px-1 sm:px-4">
          {/* Side Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white p-3 shadow-md border border-gray-100 transition-all hover:bg-brand-green hover:text-white hidden xl:flex"
            aria-label="Previous slide"
          >
            <ChevronLeft size={20} />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white p-3 shadow-md border border-gray-100 transition-all hover:bg-brand-green hover:text-white hidden xl:flex"
            aria-label="Next slide"
          >
            <ChevronRight size={20} />
          </button>

          {/* Slider Container */}
          <div className="w-full">
            <div 
              className="flex transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
            >
              {[...testimonials, ...testimonials.slice(0, 3)].map((testimonial, idx) => (
                <div 
                  key={`${testimonial.id}-${idx}`} 
                  className="w-full shrink-0 px-3 md:w-1/2 lg:w-1/3"
                >
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>
          
          {/* Pagination Dots */}
          <div className="mt-12 flex justify-center gap-3">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === currentIndex ? 'w-8 bg-brand-green' : 'w-2 bg-brand-dark/20 hover:bg-brand-dark/40'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
