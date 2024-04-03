import { useEffect, useState } from 'react';

const useIntersectionObserver = (elementRef, options) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      setIsVisible(entry.isIntersecting);
    }, options);

    elementRef.current && observer.observe(elementRef.current);

    return () => {
      observer.unobserve(elementRef.current);
    };
  }, [elementRef, options]);

  return isVisible;
};

export default useIntersectionObserver;
