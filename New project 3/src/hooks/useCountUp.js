import { React } from "../lib/runtime.js";

const { useEffect, useState } = React;

export function useCountUp(target, active, duration = 1400) {
  const [value, setValue] = useState(active ? target : 0);

  useEffect(() => {
    if (!active) {
      setValue(0);
      return undefined;
    }

    let frame = 0;
    let start = 0;

    const tick = (timestamp) => {
      if (!start) {
        start = timestamp;
      }

      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));

      if (progress < 1) {
        frame = window.requestAnimationFrame(tick);
      }
    };

    frame = window.requestAnimationFrame(tick);

    return () => window.cancelAnimationFrame(frame);
  }, [target, active, duration]);

  return value;
}
