import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './lib/queryClient';
import { CartProvider } from './contexts/CartContext';
import { WishlistProvider } from './contexts/WishlistContext';
import { AuthProvider } from './contexts/AuthContext';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Minicart } from './components/layout/Minicart';
import Home from './pages/Home';
import Products from './pages/Products';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';
import Checkout from './pages/Checkout';
import Account from './pages/Account';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';

export default function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <CartProvider>
          <WishlistProvider>
            <BrowserRouter>
              <div className="min-h-screen flex flex-col bg-bg text-fg">
                <Header onCartClick={() => setIsCartOpen(true)} />
                <Minicart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
                <main className="flex-1 pt-20">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/women" element={<Products />} />
                    <Route path="/men" element={<Products />} />
                    <Route path="/new" element={<Products />} />
                    <Route path="/collections" element={<Products />} />
                    <Route path="/sale" element={<Products />} />
                    <Route path="/products/:slug" element={<Product />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/wishlist" element={<Wishlist />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/account" element={<Account />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                  </Routes>
                </main>
                <Footer />
              </div>
            </BrowserRouter>
          </WishlistProvider>
        </CartProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}
