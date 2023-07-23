// src/ScrollContext.tsx
import React, { createContext, useContext, useEffect, useState } from 'react';

type ScrollDirection = 'up' | 'down' | 'none';

interface ScrollContextProps {
  scrollDirection: ScrollDirection;
  scrollAmount: number;
}

const ScrollContext = createContext<ScrollContextProps>({
  scrollDirection: 'none',
  scrollAmount: 0,
});

export function useScroll() {
  return useContext(ScrollContext);
}

export function ScrollProvider({ children }: { children: React.ReactNode }) {
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>('none');
  const [scrollAmount, setScrollAmount] = useState<number>(0);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;
      const scrollDiff = currentScrollY - lastScrollY;

      if (scrollDiff > 0) {
        setScrollDirection('down');
      } else if (scrollDiff < 0) {
        setScrollDirection('up');
      } else {
        setScrollDirection('none');
      }

      setScrollAmount(currentScrollY);
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <ScrollContext.Provider value={{ scrollDirection, scrollAmount }}>
      {children}
    </ScrollContext.Provider>
  );
}
