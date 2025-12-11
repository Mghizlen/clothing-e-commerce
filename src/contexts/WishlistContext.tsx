import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface WishlistItem {
  productId: string;
  name: string;
  brand: string;
  price: string;
  image: string;
}

interface WishlistContextType {
  items: WishlistItem[];
  toggleWishlist: (item: WishlistItem) => void;
  isInWishlist: (productId: string) => boolean;
  clearWishlist: () => void;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<WishlistItem[]>(() => {
    const saved = localStorage.getItem('wishlist-items');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('wishlist-items', JSON.stringify(items));
  }, [items]);

  const toggleWishlist = (item: WishlistItem) => {
    setItems((current) => {
      const exists = current.find((i) => i.productId === item.productId);
      if (exists) {
        return current.filter((i) => i.productId !== item.productId);
      }
      return [...current, item];
    });
  };

  const isInWishlist = (productId: string) => {
    return items.some((i) => i.productId === productId);
  };

  const clearWishlist = () => {
    setItems([]);
  };

  return (
    <WishlistContext.Provider
      value={{ items, toggleWishlist, isInWishlist, clearWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within WishlistProvider');
  }
  return context;
}
