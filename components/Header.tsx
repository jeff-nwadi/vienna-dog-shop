'use client'

import { Search, ShoppingBag, User, Menu, X, ChevronDown } from 'lucide-react'
import { Dog } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { useCartStore } from '@/store/useCartStore'

export const Header = () => {
  const { items } = useCartStore()
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)
  
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isGroomingOpen, setIsGroomingOpen] = useState(false)
  const [isShopOpen, setIsShopOpen] = useState(false)
  const [isMobileGroomingOpen, setIsMobileGroomingOpen] = useState(false)
  const [isMobileShopOpen, setIsMobileShopOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '/' },
    { 
      name: 'Shop', 
      href: '/shop', 
      hasDropdown: true,
      subLinks: [
        { name: 'All Products', href: '/shop' },
        { name: 'Food & Treats', href: '/shop?category=Food' },
        { name: 'Accessories', href: '/shop?category=Accessories' },
        { name: 'Toys', href: '/shop?category=Toys' },
      ]
    },
    { 
      name: 'Grooming', 
      href: '/grooming', 
      hasDropdown: true,
      subLinks: [
        { name: 'Grooming Products', href: '/grooming' },
        { name: 'Our grooming salon', href: '/salon' },
      ]
    },
    { name: 'Contact', href: '/contact', hasDropdown: false },
  ]

  return (
    <header className="relative z-50 w-full bg-white">
      <div className="flex items-center justify-between px-6 py-4 md:px-16 md:py-8 font-heading border-b border-gray-50">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-brand-green">
          <Dog className="text-brand-gold" />
          <span className="text-[15px] md:text-[20px] font-semibold">Vienna dog shop</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <ul className="flex gap-10 text-[15px] font-medium text-brand-dark">
            {navLinks.map((link) => {
              const isOpen = link.name === 'Shop' ? isShopOpen : link.name === 'Grooming' ? isGroomingOpen : false
              const setOpen = link.name === 'Shop' ? setIsShopOpen : link.name === 'Grooming' ? setIsGroomingOpen : () => {}

              return (
                <li 
                  key={link.name} 
                  className="relative group"
                  onMouseEnter={() => link.hasDropdown && setOpen(true)}
                  onMouseLeave={() => link.hasDropdown && setOpen(false)}
                >
                  <div className="flex items-center gap-1 cursor-pointer">
                    <Link
                      href={link.href}
                      className="transition-colors hover:text-brand-green"
                    >
                      {link.name}
                    </Link>
                    {link.hasDropdown && (
                      <ChevronDown size={14} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                    )}
                  </div>

                  {/* Dropdown Menu */}
                  {link.hasDropdown && (
                    <div className={`absolute left-0 top-full pt-4 transition-all duration-300 ${
                      isOpen ? 'visible opacity-100 translate-y-0' : 'invisible opacity-0 translate-y-2'
                    }`}>
                      <ul className="w-[220px] rounded-2xl bg-white p-4 shadow-xl border border-gray-50">
                        {link.subLinks?.map((sub) => (
                          <li key={sub.name} className="mb-2 last:mb-0">
                            <Link
                              href={sub.href}
                              className="block rounded-lg px-4 py-2 text-[14px] transition-colors hover:bg-brand-green/5 hover:text-brand-green"
                            >
                              {sub.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              )
            })}
          </ul>
        </nav>

        {/* Icons & Mobile Toggle */}
        <div className="flex items-center gap-4 text-brand-dark md:gap-8">
          <div className="hidden items-center gap-6 md:flex">
            <button className="transition-transform hover:scale-110 cursor-pointer">
              <Search size={20} />
            </button>
            <Link href="/login" className="transition-transform hover:scale-110">
              <User size={20} />
            </Link>
          </div>
          <Link href="/cart" className="relative transition-transform hover:scale-110">
            <ShoppingBag size={20} />
            {itemCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-brand-green text-[10px] text-white font-sans">
                {itemCount}
              </span>
            )}
          </Link>
          
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
        <div className="fixed inset-0 top-[76px] md:top-[92px] z-40 bg-white overflow-y-auto lg:hidden">
          <nav className="flex flex-col p-8">
            <ul className="flex flex-col gap-6 text-xl font-medium text-brand-dark">
              {navLinks.map((link) => {
                const isItemMobileOpen = link.name === 'Shop' ? isMobileShopOpen : link.name === 'Grooming' ? isMobileGroomingOpen : false
                const setMobileOpen = link.name === 'Shop' ? setIsMobileShopOpen : link.name === 'Grooming' ? setIsMobileGroomingOpen : () => {}

                return (
                  <li key={link.name}>
                    {link.hasDropdown ? (
                      <div className="flex flex-col gap-4">
                        <button 
                          onClick={() => setMobileOpen(!isItemMobileOpen)}
                          className="flex w-full items-center justify-between border-b border-gray-100 pb-4"
                        >
                          <span>{link.name}</span>
                          <ChevronDown size={20} className={`transition-transform ${isItemMobileOpen ? 'rotate-180' : ''}`} />
                        </button>
                        {isItemMobileOpen && (
                          <ul className="flex flex-col gap-4 pl-4">
                            {link.subLinks?.map((sub) => (
                              <li key={sub.name}>
                                <Link
                                  href={sub.href}
                                  onClick={() => setIsMenuOpen(false)}
                                  className="text-lg text-gray-500"
                                >
                                  {sub.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={link.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="block border-b border-gray-100 pb-4"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                )
              })}
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
