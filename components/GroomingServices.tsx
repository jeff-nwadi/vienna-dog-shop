'use client'

import { Check, Info } from 'lucide-react'

const services = [
  {
    name: 'Essential Care',
    price: '$45',
    tag: 'Perfect for maintenance',
    features: [
      'Warm water hydro-massage bath',
      'All-natural oatmeal shampoo',
      'Blow-dry & thorough brush out',
      'Nail trimming & ear cleaning',
      'Scented finishing spray',
    ],
  },
  {
    name: 'Signature Groom',
    price: '$75',
    tag: 'Most Popular',
    popular: true,
    features: [
      'Everything in Essential Care',
      'Full-body specialized haircut',
      'Paw pad treatment & moisturizing',
      'Breath-freshening oral care',
      'Blueberry facial massage',
    ],
  },
  {
    name: 'Royal Spa Treatment',
    price: '$120+',
    tag: 'Ultimate Luxury',
    features: [
      'Everything in Signature Groom',
      'Deep-conditioning moisture wrap',
      'Nagayu CO2 hydrotherapy rinse',
      'Hand-scissor finish styling',
      'Take-home signature treat',
    ],
  },
]

export const GroomingServices = () => {
  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-16">
        <div className="mb-16 flex flex-col items-center gap-6 text-center">
          <h2 className="font-heading text-3xl font-bold text-brand-dark lg:text-4xl">Our Care Packages</h2>
          <p className="max-w-2xl text-lg text-gray-500">
            Choose the perfect level of care for your companion. All our packages use organic, hypoallergenic products.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div 
              key={service.name}
              className={`relative flex flex-col rounded-[2.5rem] p-10 transition-all duration-300 ${
                service.popular 
                  ? 'bg-brand-green text-white shadow-2xl scale-105' 
                  : 'bg-[#F9F3DC] text-brand-dark hover:shadow-xl'
              }`}
            >
              {service.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-gold px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-white shadow-md">
                   Bestseller
                </div>
              )}
              
              <div className="mb-8 border-b pb-8 border-current/10">
                <span className={`mb-2 inline-block text-[12px] font-bold uppercase tracking-widest ${service.popular ? 'text-brand-gold' : 'text-brand-green'}`}>
                  {service.tag}
                </span>
                <h3 className="mb-4 text-2xl font-bold leading-tight">{service.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">{service.price}</span>
                  <span className="text-[14px] opacity-70 font-medium">/ Session</span>
                </div>
              </div>

              <ul className="flex flex-col gap-4 flex-1">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className={`shrink-0 mt-0.5 ${service.popular ? 'text-brand-gold' : 'text-brand-green'}`} size={16} />
                    <span className="text-[15px] font-medium leading-relaxed opacity-90">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`mt-10 h-14 w-full rounded-2xl font-bold transition-all active:scale-95 ${
                service.popular 
                  ? 'bg-white text-brand-dark hover:bg-brand-gold hover:text-white' 
                  : 'bg-brand-green text-white hover:brightness-110'
              }`}>
                Select Package
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 flex items-center justify-center gap-2 rounded-2xl bg-gray-50 p-6 text-center">
            <Info size={18} className="text-brand-green" />
            <p className="text-[14px] text-gray-500 font-medium">Final pricing may vary based on your dog's size, coat condition, and breed.</p>
        </div>
      </div>
    </section>
  )
}
