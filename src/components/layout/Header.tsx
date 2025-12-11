import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Icon } from '../ui/Icon';
import { Badge } from '../ui/Badge';
import { SearchOverlay } from '../misc/SearchOverlay';
import { useCart } from '../../contexts/CartContext';
import { useWishlist } from '../../contexts/WishlistContext';
import { useAuth } from '../../contexts/AuthContext';

interface HeaderProps {
  onCartClick: () => void;
}

export function Header({ onCartClick }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const { itemCount } = useCart();
  const { items: wishlistItems } = useWishlist();
  const { isAuthenticated, logout } = useAuth();
  const cartCount = itemCount();
  const wishlistCount = wishlistItems.length;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-sm border-b border-muted' : ''
      }`}
      style={{ backgroundColor: scrolled ? 'rgba(251, 250, 248, 0.95)' : 'transparent' }}
    >
      <div className="max-w-site mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="font-heading text-2xl font-bold text-primary">
          CN
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex gap-8 font-medium text-fg">
          <Link to="/women" className="hover:text-accent transition-colors">
            Women
          </Link>
          <Link to="/men" className="hover:text-accent transition-colors">
            Men
          </Link>
          <Link to="/new" className="hover:text-accent transition-colors">
            New In
          </Link>
          <Link to="/collections" className="hover:text-accent transition-colors">
            Collections
          </Link>
          <Link to="/sale" className="hover:text-accent transition-colors">
            Sale
          </Link>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-6">
          <SearchOverlay />

          {isAuthenticated ? (
            <div className="relative group">
              <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                <Icon name="account" size="md" />
              </button>
              <div className="absolute right-0 top-full mt-2 w-48 bg-white shadow-lg rounded-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <Link
                  to="/account"
                  className="block px-4 py-2 hover:bg-muted transition-colors"
                >
                  My Account
                </Link>
                <button
                  onClick={logout}
                  className="w-full text-left px-4 py-2 hover:bg-muted transition-colors"
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <Link
              to="/login"
              className="p-2 hover:bg-muted rounded-lg transition-colors"
              aria-label="Login"
            >
              <Icon name="account" size="md" />
            </Link>
          )}

          <Link
            to="/wishlist"
            className="p-2 hover:bg-muted rounded-lg transition-colors relative"
            aria-label="Wishlist"
          >
            <Icon name="heart" size="md" />
            {wishlistCount > 0 && (
              <Badge className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center p-0 text-xs">
                {wishlistCount}
              </Badge>
            )}
          </Link>

          <button
            onClick={onCartClick}
            className="p-2 hover:bg-muted rounded-lg transition-colors relative"
            aria-label="Shopping cart"
          >
            <Icon name="cart" size="md" />
            {cartCount > 0 && (
              <Badge className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center p-0 text-xs">
                {cartCount}
              </Badge>
            )}
          </button>
        </div>
      </div>
    </motion.header>
  );
}
