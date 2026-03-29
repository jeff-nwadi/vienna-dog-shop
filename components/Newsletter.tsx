'use client'

export const Newsletter = () => {
  return (
    <section className="px-6 py-12 md:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[40px] bg-brand-green p-10 md:p-16 lg:p-20 text-white relative overflow-hidden">
          {/* Subtle Decorative elements could go here */}
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-[500px] text-center lg:text-left">
              <h2 className="mb-4 font-heading text-3xl font-bold text-brand-gold lg:text-4xl">
                Join Our Pack
              </h2>
              <p className="text-lg text-white/90 leading-relaxed">
                Subscribe to our newsletter and get 15% off your first order. Plus, 
                receive exclusive pet care tips, early access to sales, and more.
              </p>
            </div>
            
            <form className="flex w-full max-w-[500px] flex-col gap-4 sm:flex-row" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email address..."
                className="h-14 w-full rounded-2xl border-none bg-white px-6 text-brand-dark outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-brand-gold"
                required
              />
              <button
                type="submit"
                className="h-14 w-full shrink-0 rounded-2xl bg-brand-gold px-8 text-lg font-bold text-brand-dark transition-all hover:brightness-110 active:scale-95 sm:w-auto"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
