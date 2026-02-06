import { useEffect, useState, useRef } from 'react';

export const Counter = ({ value }: { value: string }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  
  // Extract number and parts
  const numericValue = parseInt(value.replace(/[^0-9]/g, ''), 10);
  const prefix = value.match(/^[^0-9]*/)?.[0] || '';
  const suffix = value.match(/[^0-9]*$/)?.[0] || '';
  
  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    let animationFrameId: number;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          const startTimestamp = performance.now();
          const duration = 2000;
          
          const step = (timestamp: number) => {
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            // Ease out quart
            const ease = 1 - Math.pow(1 - progress, 4);
            
            setCount(Math.floor(ease * numericValue));
            
            if (progress < 1) {
              animationFrameId = requestAnimationFrame(step);
            }
          };
          
          animationFrameId = requestAnimationFrame(step);
        } else {
          cancelAnimationFrame(animationFrameId);
          setCount(0);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(element);

    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
    };
  }, [numericValue]);

  return (
    <span ref={elementRef}>
      {prefix}{count.toLocaleString('pt-BR')}{suffix}
    </span>
  );
};

export default Counter;
