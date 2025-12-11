import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../components/layout/Container';
import { Button } from '../components/ui/Button';
import { Icon } from '../components/ui/Icon';
import { useCart } from '../contexts/CartContext';
import { formatPriceSimple } from '../lib/priceUtil';

export default function Cart() {
  const { items, removeFromCart, updateQty, subtotal } = useCart();
  const cartSubtotal = subtotal();
  const shipping = 0; // Free shipping
  const tax = cartSubtotal * 0.1;
  const total = cartSubtotal + shipping + tax;

  return (
    <Container className="py-12">
      <h1 className="font-heading text-4xl font-bold mb-8">Shopping Cart</h1>

      {items.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground mb-6">Your cart is empty</p>
          <Link to="/products">
            <Button>Continue Shopping</Button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div key={item.productId} className="flex gap-4 p-4 bg-muted rounded-lg">
                {item.image && (
                  <div className="w-24 h-32 bg-white rounded overflow-hidden">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                )}
                <div className="flex-1">
                  <h3 className="font-medium">{item.name}</h3>
                  {item.color && <p className="text-sm text-muted-foreground">{item.color}</p>}
                  {item.size && <p className="text-sm text-muted-foreground">Size: {item.size}</p>}
                  <p className="font-semibold mt-2">{formatPriceSimple(item.price)}</p>

                  <div className="flex items-center gap-2 mt-3">
                    <button
                      onClick={() => updateQty(item.productId, Math.max(1, item.qty - 1))}
                      className="p-1 hover:bg-white rounded"
                    >
                      <Icon name="minus" size="sm" />
                    </button>
                    <span className="text-sm w-6 text-center">{item.qty}</span>
                    <button
                      onClick={() => updateQty(item.productId, item.qty + 1)}
                      className="p-1 hover:bg-white rounded"
                    >
                      <Icon name="plus" size="sm" />
                    </button>
                    <button
                      onClick={() => removeFromCart(item.productId)}
                      className="ml-auto text-sm text-destructive hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="bg-secondary p-6 rounded-lg h-fit">
            <h2 className="font-heading text-xl font-bold mb-6">Order Summary</h2>
            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-sm">
                <span>Subtotal</span>
                <span>{formatPriceSimple(cartSubtotal)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Tax</span>
                <span>{formatPriceSimple(tax)}</span>
              </div>
              <div className="border-t border-muted pt-4 flex justify-between font-semibold">
                <span>Total</span>
                <span>{formatPriceSimple(total)}</span>
              </div>
            </div>
            <Link to="/checkout">
              <Button className="w-full">Proceed to Checkout</Button>
            </Link>
            <Link to="/products" className="block mt-3">
              <Button variant="ghost" className="w-full">
                Continue Shopping
              </Button>
            </Link>
          </div>
        </div>
      )}
    </Container>
  );
}
