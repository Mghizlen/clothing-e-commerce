import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';
import { useInViewAnimate } from '../../hooks/useInViewAnimate';
import { readableTextColor } from '../../lib/contrast';

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { inView } = useInViewAnimate(ref);

  const bgColor = '#0a0a0a';
  const textColor = readableTextColor(bgColor);

  return (
    <section
      ref={ref}
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: bgColor }}
    >
      {/* Background Image Overlay */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-3xl px-4"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="font-heading text-5xl md:text-7xl font-bold mb-6 leading-tight"
          style={{ color: textColor }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Timeless Luxury, Effortlessly Elegant
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl mb-8 max-w-xl"
          style={{ color: textColor, opacity: 0.9 }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Curated collections of exquisite garments and accessories for the discerning individual.
        </motion.p>

        <motion.div
          className="flex gap-4 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Link to="/products?gender=women">
            <Button
              variant="primary"
              size="lg"
              className="border-2"
              style={{ borderColor: '#cdb892' }}
            >
              Shop Women
            </Button>
          </Link>
          <Link to="/products?gender=men">
            <Button variant="ghost" size="lg">
              Shop Men
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
