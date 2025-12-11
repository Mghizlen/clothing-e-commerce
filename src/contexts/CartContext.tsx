import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface CartItem {
  productId: string;
  name: string;
  brand: string;
  price: number;
  image: string;
  color?: string;
  size?: string;
  qty: number;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (item: Omit<CartItem, 'qty'> & { qty?: number }) => void;
  removeFromCart: (productId: string) => void;
  updateQty: (productId: string, qty: number) => void;
  clearCart: () => void;
  subtotal: () => number;
  itemCount: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('cart-items');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart-items', JSON.stringify(items));
  }, [items]);

  const addToCart = (item: Omit<CartItem, 'qty'> & { qty?: number }) => {
    setItems((current) => {
      const existing = current.find(
        (i) =>
          i.productId === item.productId &&
          i.color === item.color &&
          i.size === item.size
      );

      if (existing) {
        return current.map((i) =>
          i.productId === item.productId &&
          i.color === item.color &&
          i.size === item.size
            ? { ...i, qty: i.qty + (item.qty || 1) }
            : i
        );
      }

      return [...current, { ...item, qty: item.qty || 1 }];
    });
  };

  const removeFromCart = (productId: string) => {
    setItems((current) => current.filter((i) => i.productId !== productId));
  };

  const updateQty = (productId: string, qty: number) => {
    if (qty <= 0) {
      removeFromCart(productId);
      return;
    }
    setItems((current) =>
      current.map((i) => (i.productId === productId ? { ...i, qty } : i))
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const subtotal = () => {
    return items.reduce((sum, item) => sum + item.price * item.qty, 0);
  };

  const itemCount = () => {
    return items.reduce((sum, item) => sum + item.qty, 0);
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQty,
        clearCart,
        subtotal,
        itemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
}
