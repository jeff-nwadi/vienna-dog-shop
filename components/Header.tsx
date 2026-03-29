'use client'

import { Search, ShoppingBag, User, Menu, X } from 'lucide-react'
import { Dog } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Shop', href: '#' },
    { name: 'Grooming', href: '#' },
    { name: 'Services', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'About', href: '#' },
  ]

  return (
    <header className="relative z-50 w-full bg-white">
      <div className="flex items-center justify-between px-6 py-4 md:px-16 md:py-8 font-heading">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-brand-green">
          <Dog className="text-brand-gold" />
          <span className="text-[15px] md:text-[20px] font-semibold">Vienna dog shop</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <ul className="flex gap-8 text-[15px] font-medium text-brand-dark">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="transition-colors hover:text-brand-green"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Icons & Mobile Toggle */}
        <div className="flex items-center gap-4 text-brand-dark md:gap-8">
          <div className="hidden items-center gap-6 md:flex">
            <button className="transition-transform hover:scale-110">
              <Search size={20} />
            </button>
            <button className="transition-transform hover:scale-110">
              <User size={20} />
            </button>
          </div>
          <button className="relative transition-transform hover:scale-110">
            <ShoppingBag size={20} />
            <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-brand-green text-[10px] text-white font-sans">
              2
            </span>
          </button>
          
          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-[76px] md:top-[92px] z-40 bg-white lg:hidden">
          <nav className="flex h-full flex-col p-8">
            <ul className="flex flex-col gap-6 text-xl font-medium text-brand-dark">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block border-b border-gray-100 pb-4"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-auto flex justify-around border-t border-gray-100 pt-8 text-brand-dark md:hidden">
              <button onClick={() => setIsMenuOpen(false)}>
                <User size={24} />
              </button>
              <button onClick={() => setIsMenuOpen(false)}>
                <Search size={24} />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
