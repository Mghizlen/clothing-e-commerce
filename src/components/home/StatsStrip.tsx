import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInViewAnimate } from '../../hooks/useInViewAnimate';
import { useCounterOnView } from '../../hooks/useCounterOnView';
import { Container } from '../layout/Container';

const stats = [
  { label: 'Collections', value: 45 },
  { label: 'Premium Clients', value: 8500 },
  { label: 'Years of Craft', value: 12 },
  { label: 'Global Boutiques', value: 32 },
];

export function StatsStrip() {
  const ref = useRef<HTMLElement>(null);
  const { inView } = useInViewAnimate(ref);

  return (
    <section ref={ref} className="py-20 bg-secondary">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              className="text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <StatCounter target={stat.value} inView={inView} />
              <p className="text-sm text-muted-foreground mt-2 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function StatCounter({ target, inView }: { target: number; inView: boolean }) {
  const value = useCounterOnView(target, inView);
  return <p className="font-heading text-3xl md:text-4xl font-bold text-primary">{value}</p>;
}
