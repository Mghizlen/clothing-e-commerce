import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ProductGalleryProps {
  images: string[];
  alt: string;
  onImageClick?: (index: number) => void;
}

export function ProductGallery({ images, alt, onImageClick }: ProductGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <motion.div
        className="aspect-[4/5] bg-muted rounded-lg overflow-hidden cursor-pointer"
        onClick={() => onImageClick?.(selectedIndex)}
        whileHover={{ scale: 1.01 }}
      >
        <img
          src={images[selectedIndex]}
          alt={alt}
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Thumbnails */}
      <div className="flex gap-3 overflow-x-auto">
        {images.map((image, idx) => (
          <motion.button
            key={idx}
            onClick={() => setSelectedIndex(idx)}
            className={`w-16 h-20 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-all ${
              selectedIndex === idx
                ? 'border-primary'
                : 'border-muted hover:border-primary'
            }`}
            whileHover={{ scale: 1.05 }}
          >
            <img src={image} alt={`View ${idx + 1}`} className="w-full h-full object-cover" />
          </motion.button>
        ))}
      </div>
    </div>
  );
}
