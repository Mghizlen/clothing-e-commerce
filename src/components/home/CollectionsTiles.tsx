import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useInViewAnimate } from '../../hooks/useInViewAnimate';
import { Container } from '../layout/Container';
import { collections } from '../../data/collections';

export function CollectionsTiles() {
  const ref = useRef<HTMLElement>(null);
  const { inView } = useInViewAnimate(ref);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section ref={ref} className="py-20">
      <Container>
        <h2 className="font-heading text-4xl font-bold mb-12 text-center">Collections</h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {collections.map((collection) => (
            <motion.div key={collection.id} variants={itemVariants}>
              <Link to={collection.href}>
                <div className="relative group overflow-hidden h-96 rounded-lg">
                  {/* Image */}
                  <motion.img
                    src={collection.image}
                    alt={collection.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  />

                  {/* Dark Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300"
                  ></motion.div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <p className="text-sm font-medium text-gray-200 mb-2">{collection.label}</p>
                    <h3 className="font-heading text-2xl font-bold mb-4">{collection.name}</h3>
                    <motion.button
                      className="inline-block px-6 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium hover:bg-opacity-90 transition-all"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Explore
                    </motion.button>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
