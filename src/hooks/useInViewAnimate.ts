import { useEffect, useState, RefObject } from 'react';

export function useInViewAnimate<T extends Element>(ref: RefObject<T>, options = { threshold: 0.2 }) {
  const [inView, setInView] = useState(false);
  useEffect(()=> {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries)=> {
      entries.forEach(e => {
        setInView(e.isIntersecting);
      });
    }, options);
    io.observe(el);
    return ()=> io.disconnect();
  }, [ref, options.threshold]);
  return { inView };
}
