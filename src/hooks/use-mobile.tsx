'use client';

import { useState, useEffect } from 'react';
import { debounce } from '@/lib/performance';

export function useMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Debounce resize events for better performance
    const debouncedCheck = debounce(checkMobile, 100);

    checkMobile();
    window.addEventListener('resize', debouncedCheck);

    return () => window.removeEventListener('resize', debouncedCheck);
  }, []);

  return isMobile;
}
