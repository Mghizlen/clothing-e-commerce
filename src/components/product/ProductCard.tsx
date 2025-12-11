import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { formatPriceSimple } from '../../lib/priceUtil';
import { Button } from '../ui/Button';
import { Icon } from '../ui/Icon';
import { useCart } from '../../contexts/CartContext';
import { useWishlist } from '../../contexts/WishlistContext';
import { useAuth } from '../../contexts/AuthContext';

interface ProductCardProps {
  id: string;
  slug: string;
  name: string;
  brand: string;
  price: number;
  image: string;
  images: string[];
}

export function ProductCard({
  id,
  slug,
  name,
  brand,
  price,
  images,
}: ProductCardProps) {
  const [altImage, setAltImage] = React.useState(false);
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const isWishlisted = isInWishlist(id);

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!isAuthenticated) {
      navigate('/login', { state: { from: { pathname: `/products/${slug}` } } });
      return;
    }

    addToCart({
      productId: id,
      name,
      brand,
      price,
      image: images[0],
    });
  };

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!isAuthenticated) {
      navigate('/login', { state: { from: { pathname: `/products/${slug}` } } });
      return;
    }

    toggleWishlist({
      productId: id,
      name,
      brand,
      price: formatPriceSimple(price),
      image: images[0],
    });
  };

  return (
    <Link to={`/products/${slug}`}>
      <motion.div
        className="group"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative overflow-hidden rounded-lg bg-muted aspect-[4/5] mb-4">
          <motion.img
            key={altImage ? images[1] : images[0]}
            src={altImage ? (images[1] || images[0]) : images[0]}
            alt={name}
            className="w-full h-full object-cover cursor-pointer"
            onMouseEnter={() => setAltImage(true)}
            onMouseLeave={() => setAltImage(false)}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4 }}
          />

          {/* Overlay with quick add */}
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center bg-black/0 group-hover:bg-black/40 transition-colors duration-300"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          >
            <Button variant="primary" size="sm" onClick={handleQuickAdd}>
              Add to Bag
            </Button>
          </motion.div>

          {/* Wishlist button */}
          <motion.button
            className={`absolute top-4 right-4 p-2 rounded-full transition-colors ${
              isWishlisted
                ? 'bg-accent text-white'
                : 'bg-white/80 hover:bg-white text-text'
            }`}
            whileHover={{ scale: 1.1 }}
            onClick={handleWishlistToggle}
          >
            <Icon name="heart" size="sm" />
          </motion.button>
        </div>
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">{brand}</p>
          <h3 className="font-medium text-fg hover:text-accent transition-colors">{name}</h3>
          <p className="text-lg font-semibold text-primary">{formatPriceSimple(price)}</p>
        </div>
      </motion.div>
    </Link>
  );
}
