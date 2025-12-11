import React, { useState } from 'react';
import { Container } from '../components/layout/Container';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { useCartStore } from '../store/useCartStore';
import { formatPriceSimple } from '../lib/priceUtil';

export default function Checkout() {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const subtotal = useCartStore((state) => state.subtotal());
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock checkout
    alert('Order placed successfully!');
  };

  return (
    <Container className="py-12">
      <div className="max-w-2xl mx-auto">
        <h1 className="font-heading text-4xl font-bold mb-8">Checkout</h1>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Shipping Info */}
          <section>
            <h2 className="font-heading text-2xl font-bold mb-6">Shipping Information</h2>
            <div className="space-y-4">
              <Input
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <div className="grid grid-cols-2 gap-4">
                <Input
                  label="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
                <Input
                  label="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
              <Input
                label="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
              <div className="grid grid-cols-2 gap-4">
                <Input
                  label="City"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  required
                />
                <Input
                  label="State"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  required
                />
              </div>
              <Input
                label="ZIP Code"
                value={zip}
                onChange={(e) => setZip(e.target.value)}
                required
              />
            </div>
          </section>

          {/* Order Summary */}
          <section className="bg-secondary p-6 rounded-lg">
            <h2 className="font-heading text-2xl font-bold mb-6">Order Summary</h2>
            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>{formatPriceSimple(subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between">
                <span>Tax</span>
                <span>{formatPriceSimple(tax)}</span>
              </div>
              <div className="border-t border-muted pt-4 flex justify-between font-semibold text-lg">
                <span>Total</span>
                <span>{formatPriceSimple(total)}</span>
              </div>
            </div>
          </section>

          <Button type="submit" variant="primary" size="lg" className="w-full">
            Complete Order
          </Button>
        </form>
      </div>
    </Container>
  );
}
