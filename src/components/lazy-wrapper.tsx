'use client';

import { Suspense } from 'react';
import { useMobile } from '@/hooks/use-mobile';

interface LazyWrapperProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  skipOnMobile?: boolean;
}

export function LazyWrapper({ children, fallback = null, skipOnMobile = false }: LazyWrapperProps) {
  const isMobile = useMobile();
  
  if (skipOnMobile && isMobile) {
    return null;
  }
  
  return (
    <Suspense fallback={fallback}>
      {children}
    </Suspense>
  );
}
