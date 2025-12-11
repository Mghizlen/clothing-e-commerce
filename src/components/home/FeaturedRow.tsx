import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useInViewAnimate } from '../../hooks/useInViewAnimate';
import { Container } from '../layout/Container';
import { products } from '../../data/products';
import { formatPriceSimple } from '../../lib/priceUtil';
import { Button } from '../ui/Button';

export function FeaturedRow() {
  const ref = useRef<HTMLElement>(null);
  const { inView } = useInViewAnimate(ref);
  const featured = products.slice(0, 4);

  return (
    <section ref={ref} className="py-20 bg-bg">
      <Container>
        <h2 className="font-heading text-4xl font-bold mb-12">Featured Products</h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {featured.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group"
            >
              <Link to={`/products/${product.slug}`}>
                <div className="relative overflow-hidden rounded-lg bg-muted aspect-[4/5] mb-4">
                  <motion.img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.4 }}
                  />
                  {/* Quick Add Button */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/40 transition-colors duration-300"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <Button variant="primary" size="sm">
                      Quick Add
                    </Button>
                  </motion.div>
                </div>
              </Link>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">{product.brand}</p>
                <h3 className="font-medium text-fg">{product.name}</h3>
                <p className="text-lg font-semibold text-primary">{formatPriceSimple(product.price)}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
