import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from '../ui/Icon';

interface ImageWithPlaceholderProps {
  src: string;
  alt: string;
  className?: string;
  placeholderSrc?: string;
}

export function ImageWithPlaceholder({
  src,
  alt,
  className = '',
  placeholderSrc,
}: ImageWithPlaceholderProps) {
  const [isLoaded, setIsLoaded] = React.useState(false);

  return (
    <div className={`relative overflow-hidden bg-muted ${className}`}>
      {placeholderSrc && !isLoaded && (
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${placeholderSrc})`,
            backgroundSize: 'cover',
            filter: 'blur(10px)',
          }}
        />
      )}
      <motion.img
        src={src}
        alt={alt}
        onLoadingComplete={() => setIsLoaded(true)}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="w-full h-full object-cover"
      />
    </div>
  );
}
