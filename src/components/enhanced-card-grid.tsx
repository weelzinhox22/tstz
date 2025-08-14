'use client'

import React from 'react'
import { InteractiveCard } from './interactive-card'
import { CardContent } from './ui/card'
import { cn } from '@/lib/utils'

type CardSection = {
  id: string
  title: string
  text: string
  variant?: 'default' | 'highlight' | 'quote'
  size?: 'sm' | 'md' | 'lg'
}

type EnhancedCardGridProps = {
  sections: CardSection[]
  className?: string
}

export function EnhancedCardGrid({ sections, className }: EnhancedCardGridProps) {
  return (
    <div className={cn('grid gap-6 sm:gap-8', className)}>
      {sections.map((section, index) => {
        const isHighlight = section.variant === 'highlight' || section.id === 'love' || section.id === 'nicknames'
        const isQuote = section.variant === 'quote' || section.id === 'apology' || section.id === 'cheer'
        const isLarge = section.size === 'lg' || index === 0 || section.id === 'love'

        return (
          <div key={section.id} className={cn(
            'grid',
            isLarge ? 'sm:grid-cols-1' : index % 3 === 0 ? 'sm:grid-cols-1' : 'sm:grid-cols-1'
          )}>
            <InteractiveCard className={cn(
              isHighlight && 'border-pink-200/40 bg-gradient-to-br from-pink-50/30 to-card/70 dark:from-pink-950/20 dark:to-card/70',
              isQuote && 'border-blue-200/40 bg-gradient-to-br from-blue-50/30 to-card/70 dark:from-blue-950/20 dark:to-card/70'
            )}>
              <CardContent className={cn(
                'p-5 sm:p-7',
                isLarge && 'sm:p-8 md:p-10'
              )}>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    {isHighlight && (
                      <div className="h-2 w-2 rounded-full bg-pink-400 animate-pulse" />
                    )}
                    {isQuote && (
                      <div className="text-blue-400 text-xl">&ldquo;</div>
                    )}
                    <h2 className={cn(
                      'font-semibold',
                      isLarge ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl',
                      isHighlight && 'text-pink-700 dark:text-pink-300',
                      isQuote && 'text-blue-700 dark:text-blue-300'
                    )}>
                      {section.title}
                    </h2>
                  </div>
                  
                  <p className={cn(
                    'leading-relaxed text-foreground/90',
                    isLarge ? 'text-base sm:text-lg' : 'text-sm sm:text-base',
                    isQuote && 'italic'
                  )}>
                    {section.text}
                  </p>
                  
                  {isQuote && (
                    <div className="text-blue-400 text-xl text-right">&rdquo;</div>
                  )}
                </div>
              </CardContent>
            </InteractiveCard>
          </div>
        )
      })}
    </div>
  )
}
