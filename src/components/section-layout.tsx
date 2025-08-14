'use client'

import React from 'react'
import { cn } from '@/lib/utils'

type SectionLayoutProps = {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'wide' | 'narrow' | 'full'
  spacing?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
}

export function SectionLayout({ 
  children, 
  className, 
  variant = 'default',
  spacing = 'lg' 
}: SectionLayoutProps) {
  const containerClasses = {
    default: 'container mx-auto px-4',
    wide: 'container mx-auto px-4 max-w-6xl',
    narrow: 'container mx-auto px-4 max-w-3xl',
    full: 'px-4'
  }

  const spacingClasses = {
    none: '',
    sm: 'py-8 sm:py-12',
    md: 'py-12 sm:py-16',
    lg: 'py-16 sm:py-20',
    xl: 'py-20 sm:py-24'
  }

  return (
    <section className={cn(
      containerClasses[variant],
      spacingClasses[spacing],
      className
    )}>
      {children}
    </section>
  )
}
