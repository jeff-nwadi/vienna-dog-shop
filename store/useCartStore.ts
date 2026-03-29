import { create } from 'zustand'
import Product from"@/public/images/Product(1).svg"

export interface CartItem {
  id: number
  name: string
  price: string
  numericPrice: number
  quantity: number
  image: string
  size: string
}

interface CartState {
  items: CartItem[]
  addItem: (product: any, size?: string) => void
  removeItem: (id: number) => void
  updateQuantity: (id: number, delta: number) => void
  clearCart: () => void
  subtotal: () => number
  tax: () => number
  shipping: number
  total: () => number
}

const MOCK_ITEMS: CartItem[] = [
  {
    id: 1,
    name: "Organic Beef Recipe",
    price: "$45.00",
    numericPrice: 45.00,
    quantity: 1,
    size: "5 lb",
    image: Product,
  },
  {
    id: 4,
    name: "Heritage Leather Collar",
    price: "$28.00",
    numericPrice: 28.00,
    quantity: 2,
    size: "M",
    image: "https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&q=80&w=300",
  }
]

export const useCartStore = create<CartState>((set, get) => ({
  items: MOCK_ITEMS,
  shipping: 5.00,

  addItem: (product, size = 'M') => {
    const items = get().items
    const existing = items.find(i => i.id === product.id)
    if (existing) {
      set({ items: items.map(i => i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i) })
    } else {
      set({ items: [...items, { 
        id: product.id, 
        name: product.name, 
        price: product.price, 
        numericPrice: parseFloat(product.price.replace('$', '')), 
        quantity: 1, 
        size, 
        image: product.image 
      }] })
    }
  },

  removeItem: (id) => {
    set({ items: get().items.filter(i => i.id !== id) })
  },

  updateQuantity: (id, delta) => {
    const items = get().items
    set({ items: items.map(i => i.id === id ? { ...i, quantity: Math.max(1, i.quantity + delta) } : i) })
  },

  clearCart: () => set({ items: [] }),

  subtotal: () => get().items.reduce((sum, item) => sum + (item.numericPrice * item.quantity), 0),
  tax: () => get().subtotal() * 0.08,
  total: () => get().subtotal() + get().tax() + get().shipping,
}))
