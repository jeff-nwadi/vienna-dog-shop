import Image from 'next/image'
import { Star } from 'lucide-react'

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
]

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => {
  return (
    <div className="flex flex-col gap-6 rounded-2xl bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={16} className="fill-brand-gold text-brand-gold" />
        ))}
      </div>
      
      <p className="flex-grow italic text-brand-dark/80 leading-relaxed">
        "{testimonial.quote}"
      </p>
      
      <div className="flex items-center gap-4">
        <div className="relative h-12 w-12 overflow-hidden rounded-full border border-gray-100">
          <Image
            src={testimonial.avatar}
            alt={testimonial.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col">
          <span className="font-bold text-brand-dark">{testimonial.name}</span>
          <span className="text-[12px] text-gray-400">{testimonial.description}</span>
        </div>
      </div>
    </div>
  )
}

export const Testimonials = () => {
  return (
    <section className="bg-[#F9F3DC] py-20 px-6 md:px-16">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-16 text-center font-heading text-3xl font-bold text-brand-dark lg:text-4xl">
          What Our Pack Says
        </h2>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}
