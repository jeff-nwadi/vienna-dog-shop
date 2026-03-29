import { Dog, MapPin, Phone, Mail } from 'lucide-react'
import Link from 'next/link'

export const Footer = () => {
  return (
    <footer className="border-t border-gray-100 bg-white px-6 py-16 md:px-16 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Brand Column */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2 text-brand-green">
              <Dog className="text-brand-gold" />
              <span className="text-[20px] font-bold">vienna dog shop</span>
            </Link>
            <p className="text-[15px] leading-relaxed text-gray-400 max-w-[280px]">
              Premium pet supplies and grooming services dedicated to keeping 
              your furry family members healthy, happy, and stylish.
            </p>
            <div className="flex gap-4">
              {/* Instagram */}
              <Link href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F8F3E9] text-brand-dark transition-all hover:bg-brand-green hover:text-white">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </Link>
              {/* Facebook */}
              <Link href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F8F3E9] text-brand-dark transition-all hover:bg-brand-green hover:text-white">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </Link>
              {/* Twitter */}
              <Link href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F8F3E9] text-brand-dark transition-all hover:bg-brand-green hover:text-white">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </Link>
            </div>
          </div>

          {/* Shop Column */}
          <div>
            <h4 className="mb-6 text-[16px] font-bold uppercase tracking-widest text-brand-dark">Shop</h4>
            <ul className="flex flex-col gap-4 text-[15px] text-gray-500">
              {['All Products', 'Food & Treats', 'Toys & Accessories', 'Beds & Bowls', 'New Arrivals'].map((link) => (
                <li key={link}>
                  <Link href="#" className="transition-colors hover:text-brand-green">{link}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="mb-6 text-[16px] font-bold uppercase tracking-widest text-brand-dark">Company</h4>
            <ul className="flex flex-col gap-4 text-[15px] text-gray-500">
              {['About Us', 'Grooming Salon', 'Blog', 'Careers', 'Store Locator'].map((link) => (
                <li key={link}>
                  <Link href="#" className="transition-colors hover:text-brand-green">{link}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Column */}
          <div className="flex flex-col gap-4">
            <h4 className="mb-6 text-[16px] font-bold uppercase tracking-widest text-brand-dark">Support</h4>
            <div className="flex flex-col gap-5 text-[15px] text-gray-500">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-brand-green" />
                <span>123 Bark Avenue, Suite 100<br />Vienna, VA 22180</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="shrink-0 text-brand-green" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="shrink-0 text-brand-green" />
                <span>hello@viennadogshop.com</span>
              </div>
            </div>
            <div className="mt-4 flex flex-col gap-3 text-[14px]">
              <Link href="#" className="text-gray-400 hover:text-brand-green">Shipping & Returns</Link>
              <Link href="#" className="text-gray-400 hover:text-brand-green">FAQ</Link>
            </div>
          </div>
        </div>
        
        <div className="mt-16 border-t border-gray-100 pt-8 text-center text-[13px] text-gray-400">
          <p>© {new Date().getFullYear()} Vienna Dog Shop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
