import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface WishlistStore {
  items: Set<string>;
  toggle: (productId: string) => void;
  has: (productId: string) => boolean;
  clear: () => void;
}

export const useWishlistStore = create<WishlistStore>()(
  persist(
    (set, get) => ({
      items: new Set<string>(),
      toggle: (productId) => set((state) => {
        const newItems = new Set(state.items);
        if (newItems.has(productId)) {
          newItems.delete(productId);
        } else {
          newItems.add(productId);
        }
        return { items: newItems };
      }),
      has: (productId) => get().items.has(productId),
      clear: () => set({ items: new Set() }),
    }),
    {
      name: 'wishlist-store',
      storage: {
        getItem: (name) => {
          const item = localStorage.getItem(name);
          if (!item) return null;
          const data = JSON.parse(item);
          return {
            state: {
              ...data.state,
              items: new Set(data.state.items)
            }
          };
        },
        setItem: (name, value) => {
          const data = {
            ...value,
            state: {
              ...value.state,
              items: Array.from(value.state.items)
            }
          };
          localStorage.setItem(name, JSON.stringify(data));
        },
        removeItem: (name) => localStorage.removeItem(name),
      }
    }
  )
);
