import { useState, useEffect } from 'react';

/**
 * Hook that animates a counter from 0 to target value when inView is true.
 * Resets to 0 when inView becomes false, enabling replay on scroll.
 */
export function useCounterOnView(
  target: number,
  inView: boolean,
  duration = 1100
): number {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let rafId = 0;
    let startTime: number | null = null;

    // Reset to 0 when not in view
    if (!inView) {
      setValue(0);
      return;
    }

    // Animate from 0 to target when in view
    function animate(timestamp: number) {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const currentValue = Math.floor(progress * target);

      setValue(currentValue);

      if (progress < 1) {
        rafId = requestAnimationFrame(animate);
      }
    }

    rafId = requestAnimationFrame(animate);

    return () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, [inView, target, duration]);

  return value;
}
