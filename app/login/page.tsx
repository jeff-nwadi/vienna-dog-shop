import React from 'react'
import { Dog } from 'lucide-react'
import Link from 'next/link'

export default function LoginPage() {
  return (
    <div className="flex min-h-[90vh] items-center justify-center bg-gray-50/50 px-6 py-12 md:px-16 md:py-24">
      <div className="flex w-full max-w-5xl flex-col overflow-hidden rounded-[2.5rem] bg-white shadow-sm lg:flex-row">
        
        {/* Left Side: Login */}
        <div className="flex-1 p-8 md:p-12 lg:p-16">
          <div className="mb-10 text-center lg:text-left">
            <h1 className="mb-3 font-heading text-2xl font-bold tracking-wide text-brand-dark md:text-3xl">
              Welcome Back
            </h1>
            <p className="text-[14px] leading-relaxed text-gray-400">
              Log in to view orders, bookings, and saved items.
            </p>
          </div>

          <form className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-[12px] font-bold uppercase tracking-widest text-brand-dark">Email</label>
              <input 
                type="email" 
                placeholder="hello@example.com"
                className="h-12 w-full rounded-2xl border-none bg-gray-50 px-5 text-[14px] text-brand-dark outline-none placeholder:text-gray-300 focus:ring-2 focus:ring-brand-green/20"
              />
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <label className="text-[12px] font-bold uppercase tracking-widest text-brand-dark">Password</label>
                <Link href="#" className="text-[12px] font-medium text-brand-green hover:underline">Forgot password?</Link>
              </div>
              <input 
                type="password" 
                placeholder="••••••••"
                className="h-12 w-full rounded-2xl border-none bg-gray-50 px-5 text-[14px] text-brand-dark outline-none placeholder:text-gray-300 focus:ring-2 focus:ring-brand-green/20"
              />
            </div>

            <button className="mt-4 h-14 w-full cursor-pointer rounded-2xl bg-brand-green font-bold text-white transition-all hover:brightness-110 active:scale-95 shadow-lg shadow-brand-green/10">
              Login
            </button>

            <button type="button" className="flex h-14 w-full items-center cursor-pointer justify-center gap-3 rounded-2xl border border-gray-100 bg-white font-bold text-brand-dark transition-all hover:bg-gray-50 active:scale-95">
              <svg className="h-5 w-5" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.63l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              <span className="text-[14px] ">Continue with Google</span>
            </button>
          </form>
        </div>

        {/* Right Side: Signup */}
        <div className="flex-1 bg-[#F9F3DC]/40 p-8 md:p-12 lg:p-16">
          <div className="mb-10 text-center lg:text-left">
            <h2 className="mb-3 font-heading text-2xl font-bold tracking-wide text-brand-dark md:text-3xl">
              New Here?
            </h2>
            <p className="text-[14px] leading-relaxed text-gray-500">
              Create an account for faster checkout and wishlists.
            </p>
          </div>

          <form className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-[12px] font-bold uppercase tracking-widest text-brand-dark">Full Name</label>
              <input 
                type="text" 
                placeholder="Sarah Jenkins"
                className="h-12 w-full rounded-2xl border-none bg-white px-5 text-[14px] text-brand-dark outline-none placeholder:text-gray-200 focus:ring-2 focus:ring-brand-gold/20"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[12px] font-bold uppercase tracking-widest text-brand-dark">Email</label>
              <input 
                type="email" 
                placeholder="sarah@example.com"
                className="h-12 w-full rounded-2xl border-none bg-white px-5 text-[14px] text-brand-dark outline-none placeholder:text-gray-200 focus:ring-2 focus:ring-brand-gold/20"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[12px] font-bold uppercase tracking-widest text-brand-dark">Password</label>
              <input 
                type="password" 
                placeholder="••••••••"
                className="h-12 w-full rounded-2xl border-none bg-white px-5 text-[14px] text-brand-dark outline-none placeholder:text-gray-200 focus:ring-2 focus:ring-brand-gold/20"
              />
            </div>

            <button className="mt-4 h-14 w-full rounded-2xl bg-brand-gold font-bold text-white transition-all hover:brightness-110 active:scale-95 shadow-lg shadow-brand-gold/10">
              Create Account
            </button>
          </form>
        </div>

      </div>
    </div>
  )
}
