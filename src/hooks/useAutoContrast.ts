import { useEffect, useState } from 'react';

export function useCounterOnView(target: number, inView: boolean, duration = 1100) {
  const [value, setValue] = useState(0);
  useEffect(()=> {
    let raf = 0;
    let start: number | null = null;
    if (!inView) { setValue(0); return; }
    function step(ts: number) {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const cur = Math.floor(progress * target);
      setValue(cur);
      if (progress < 1) raf = requestAnimationFrame(step);
    }
    raf = requestAnimationFrame(step);
    return ()=> cancelAnimationFrame(raf);
  }, [inView, target, duration]);
  return value;
}
