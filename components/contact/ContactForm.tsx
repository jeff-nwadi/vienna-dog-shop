'use client'

import React from 'react'

export const ContactForm = () => {
  return (
    <div className="rounded-[2.5rem] bg-white p-8 shadow-xl shadow-gray-100/50 border border-gray-50 md:p-12">
      <form className="flex flex-col gap-6 md:gap-8">
        <div className="flex flex-col gap-2">
          <label className="text-[12px] md:text-[14px] font-bold text-brand-dark uppercase tracking-wider">Name</label>
          <input
            type="text"
            placeholder="Your name"
            className="h-12 w-full rounded-2xl border-none bg-gray-50 px-5 text-[14px] text-brand-dark outline-none placeholder:text-gray-300 focus:ring-2 focus:ring-brand-green/20"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[12px] md:text-[14px] font-bold text-brand-dark uppercase tracking-wider">Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            className="h-12 w-full rounded-2xl border-none bg-gray-50 px-5 text-[14px] text-brand-dark outline-none placeholder:text-gray-300 focus:ring-2 focus:ring-brand-green/20"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[12px] md:text-[14px] font-bold text-brand-dark uppercase tracking-wider">Subject</label>
          <input
            type="text"
            placeholder="Order question"
            className="h-12 w-full rounded-2xl border-none bg-gray-50 px-5 text-[14px] text-brand-dark outline-none placeholder:text-gray-300 focus:ring-2 focus:ring-brand-green/20"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[12px] md:text-[14px] font-bold text-brand-dark uppercase tracking-wider">Message</label>
          <textarea
            rows={5}
            placeholder="Tell us how we can help."
            className="w-full rounded-2xl border-none bg-gray-50 p-5 text-[14px] text-brand-dark outline-none placeholder:text-gray-300 focus:ring-2 focus:ring-brand-green/20"
          />
        </div>

        <button className="h-14 w-full rounded-2xl bg-brand-green px-8 font-bold text-white transition-all hover:brightness-110 active:scale-95 shadow-lg shadow-brand-green/10">
          Send Message
        </button>
      </form>
    </div>
  )
}
