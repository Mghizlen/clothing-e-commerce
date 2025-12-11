import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface CartItem {
  productId: string;
  name: string;
  price: number;
  qty: number;
  color?: string;
  size?: string;
  image?: string;
}

interface CartStore {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  updateQty: (productId: string, qty: number) => void;
  removeItem: (productId: string) => void;
  clearCart: () => void;
  subtotal: () => number;
  itemCount: () => number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (item) => set((state) => {
        const existing = state.items.find(i => i.productId === item.productId && i.color === item.color && i.size === item.size);
        if (existing) {
          return {
            items: state.items.map(i =>
              i.productId === item.productId && i.color === item.color && i.size === item.size
                ? { ...i, qty: i.qty + item.qty }
                : i
            )
          };
        }
        return { items: [...state.items, item] };
      }),
      updateQty: (productId, qty) => set((state) => ({
        items: state.items.map(i => i.productId === productId ? { ...i, qty } : i)
      })),
      removeItem: (productId) => set((state) => ({
        items: state.items.filter(i => i.productId !== productId)
      })),
      clearCart: () => set({ items: [] }),
      subtotal: () => get().items.reduce((sum, item) => sum + (item.price * item.qty), 0),
      itemCount: () => get().items.reduce((sum, item) => sum + item.qty, 0),
    }),
    {
      name: 'cart-store',
    }
  )
);
