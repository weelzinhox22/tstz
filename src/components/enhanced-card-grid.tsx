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
        const isQuote = section.variant === 'quote' || section.id === 'apology' || section.id === 'cheer' || section.id === 'quote'
        const isLarge = section.size === 'lg' || index === 0 || section.id === 'love'
        const isSpecialQuote = section.id === 'quote'

        return (
          <div key={section.id} className={cn(
            'grid',
            isLarge ? 'sm:grid-cols-1' : index % 3 === 0 ? 'sm:grid-cols-1' : 'sm:grid-cols-1'
          )}>
            <InteractiveCard className={cn(
              isHighlight && 'border-pink-200/40 bg-gradient-to-br from-pink-50/30 to-card/70 dark:from-pink-950/20 dark:to-card/70',
              isQuote && !isSpecialQuote && 'border-blue-200/40 bg-gradient-to-br from-blue-50/30 to-card/70 dark:from-blue-950/20 dark:to-card/70',
              isSpecialQuote && 'border-purple-200/40 bg-gradient-to-br from-purple-50/30 via-pink-50/20 to-card/70 dark:from-purple-950/20 dark:via-pink-950/10 dark:to-card/70 shadow-lg shadow-purple-500/10'
            )}>
              <CardContent className={cn(
                'p-5 sm:p-7',
                isLarge && 'sm:p-8 md:p-10',
                isSpecialQuote && 'p-8 sm:p-10 md:p-12'
              )}>
                {isSpecialQuote ? (
                  // Design especial para a citação
                  <div className="text-center space-y-6">
                    <div className="flex justify-center">
                      <div className="text-6xl text-purple-400/60 dark:text-purple-300/60 leading-none">
                        &ldquo;
                      </div>
                    </div>
                    <p className="text-lg sm:text-xl md:text-2xl font-light italic leading-relaxed text-foreground/80 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent dark:from-purple-400 dark:via-pink-400 dark:to-purple-400">
                      {section.text.replace(/"/g, '')}
                    </p>
                    <div className="flex justify-center">
                      <div className="text-6xl text-purple-400/60 dark:text-purple-300/60 leading-none transform rotate-180">
                        &ldquo;
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <div className="h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent w-16" />
                      <div className="h-2 w-2 rounded-full bg-purple-400/70" />
                      <div className="h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent w-16" />
                    </div>
                  </div>
                ) : (
                  // Design padrão para outras seções
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      {isHighlight && (
                        <div className="h-2 w-2 rounded-full bg-pink-400 animate-pulse" />
                      )}
                      {isQuote && !isSpecialQuote && (
                        <div className="text-blue-400 text-xl">&ldquo;</div>
                      )}
                      <h2 className={cn(
                        'font-semibold',
                        isLarge ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl',
                        isHighlight && 'text-pink-700 dark:text-pink-300',
                        isQuote && !isSpecialQuote && 'text-blue-700 dark:text-blue-300'
                      )}>
                        {section.title}
                      </h2>
                    </div>
                    
                    <p className={cn(
                      'leading-relaxed text-foreground/90',
                      isLarge ? 'text-base sm:text-lg' : 'text-sm sm:text-base',
                      isQuote && !isSpecialQuote && 'italic'
                    )}>
                      {section.text}
                    </p>
                    
                    {isQuote && !isSpecialQuote && (
                      <div className="text-blue-400 text-xl text-right">&rdquo;</div>
                    )}
                  </div>
                )}
              </CardContent>
            </InteractiveCard>
          </div>
        )
      })}
    </div>
  )
}
