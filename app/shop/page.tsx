import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Newsletter } from "@/components/Newsletter"
import { ShopSidebar } from "@/components/ShopSidebar"
import { ShopGrid } from "@/components/ShopGrid"
import { Pagination } from "@/components/Pagination"

export default function ShopPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white"> 
      <main className="flex-1 px-6 py-12 md:px-16 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-start">
            {/* Sidebar - Desktop */}
            <div className="hidden lg:block">
              <ShopSidebar />
            </div>
            
            {/* Main Content Area */}
            <div className="flex-1">
              {/* Product Grid & Sorting Header */}
              <ShopGrid />
              
              {/* Pagination */}
              <Pagination currentPage={2} />
            </div>
            
            {/* Sidebar - Mobile/Tablet (Optional: could be a drawer) */}
            <div className="lg:hidden">
              <h3 className="mb-6 font-bold text-brand-dark">Filters</h3>
              <ShopSidebar />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
