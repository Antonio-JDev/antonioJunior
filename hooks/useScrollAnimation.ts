
import { useState, useEffect, useRef } from 'react';

interface ScrollAnimationHook {
  ref: React.RefObject<HTMLDivElement>;
  isVisible: boolean;
}

export const useScrollAnimation = (options?: IntersectionObserverInit): ScrollAnimationHook => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        // We can unobserve after it becomes visible to prevent re-triggering
        if(ref.current) {
            observer.unobserve(ref.current);
        }
      }
    }, {
      threshold: 0.1,
      ...options
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return { ref, isVisible };
};
