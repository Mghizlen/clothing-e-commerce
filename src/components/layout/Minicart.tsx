import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '../ui/Icon';
import { Button } from '../ui/Button';
import { useCart } from '../../contexts/CartContext';
import { formatPriceSimple } from '../../lib/priceUtil';

interface MinicartProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Minicart({ isOpen, onClose }: MinicartProps) {
  const { items, removeFromCart, updateQty, subtotal } = useCart();
  const cartSubtotal = subtotal();

  // Focus trap
  useEffect(() => {
    if (!isOpen) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40"
          />
        )}
      </AnimatePresence>

      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: isOpen ? 0 : '100%' }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="fixed right-0 top-0 h-full w-full max-w-sm bg-card shadow-lg z-50 flex flex-col"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-muted">
          <h2 className="text-lg font-heading">Shopping Bag</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-lg transition-colors"
            aria-label="Close cart"
          >
            <Icon name="close" size="md" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <p className="text-center text-muted-foreground">Your bag is empty</p>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={item.productId} className="flex gap-4">
                  {item.image && (
                    <div className="w-20 h-24 bg-muted rounded-lg overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="flex-1">
                    <h3 className="font-medium text-sm">{item.name}</h3>
                    {item.color && <p className="text-xs text-muted-foreground">{item.color}</p>}
                    {item.size && <p className="text-xs text-muted-foreground">Size: {item.size}</p>}
                    <p className="text-sm font-medium mt-2">{formatPriceSimple(item.price)}</p>

                    {/* Quantity */}
                    <div className="flex items-center gap-2 mt-3">
                      <button
                        onClick={() => updateQty(item.productId, Math.max(1, item.qty - 1))}
                        className="p-1 hover:bg-muted rounded transition-colors"
                      >
                        <Icon name="minus" size="sm" />
                      </button>
                      <span className="text-sm w-6 text-center">{item.qty}</span>
                      <button
                        onClick={() => updateQty(item.productId, item.qty + 1)}
                        className="p-1 hover:bg-muted rounded transition-colors"
                      >
                        <Icon name="plus" size="sm" />
                      </button>
                      <button
                        onClick={() => removeFromCart(item.productId)}
                        className="ml-auto text-xs text-destructive hover:underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-muted p-6 space-y-4">
            <div className="flex justify-between text-sm">
              <span>Subtotal</span>
              <span className="font-medium">{formatPriceSimple(cartSubtotal)}</span>
            </div>
            <Link to="/cart" className="block" onClick={onClose}>
              <Button className="w-full">View Cart</Button>
            </Link>
            <Link to="/checkout" className="block" onClick={onClose}>
              <Button variant="secondary" className="w-full">
                Checkout
              </Button>
            </Link>
          </div>
        )}
      </motion.div>
    </>
  );
}
