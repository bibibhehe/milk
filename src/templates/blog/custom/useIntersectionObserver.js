import { useState, useEffect, useRef } from 'react';

const useIntersectionObserver = (options) => {
  const [entries, setEntries] = useState([]);
  const observer = useRef(null);

  useEffect(() => {
    observer.current = new IntersectionObserver((ioEntries) => {
      setEntries(ioEntries);
    }, options);

    return () => {
      if (observer.current) observer.current.disconnect();
    };
  }, [options]);

  const observe = (element) => {
    if (observer.current && element) {
      observer.current.observe(element);
      console.log(`Observing element: ${element}`);
    }
  };

  return [observe, entries];
};

export default useIntersectionObserver;
