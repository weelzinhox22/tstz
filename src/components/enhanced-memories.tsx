'use client'

import React from 'react'
import { ScrollReveal } from './scroll-reveal'
import { MemoryCarousel, type MemoryItem } from './memory-carousel'
import { SectionLayout } from './section-layout'

type EnhancedMemoriesProps = {
  memories: MemoryItem[]
}

export function EnhancedMemories({ memories }: EnhancedMemoriesProps) {
  return (
    <SectionLayout variant="default" spacing="xl">
      <div className="relative">
        {/* Background decorative elements */}
        <div className="absolute left-[10%] top-[20%] h-20 w-20 rounded-full bg-gradient-to-br from-pink-300/10 to-rose-300/5 blur-xl" />
        <div className="absolute right-[15%] bottom-[30%] h-32 w-32 rounded-full bg-gradient-to-br from-purple-300/8 to-violet-300/4 blur-2xl" />
        
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px bg-gradient-to-r from-transparent to-pink-300 w-8" />
              <span className="text-2xl">💕</span>
              <div className="h-px bg-gradient-to-l from-transparent to-pink-300 w-8" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-pink-600 via-rose-500 to-purple-600 bg-clip-text text-transparent">
              coisas que não vou esquecer
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              essas coisas simples que você fazia e que eu nunca vou conseguir esquecer
            </p>
            <div className="mt-6 flex items-center justify-center gap-4">
              <div className="h-px bg-gradient-to-r from-transparent via-pink-200 to-transparent w-16" />
              <div className="flex gap-1">
                <div className="h-1 w-1 rounded-full bg-pink-400" />
                <div className="h-1 w-1 rounded-full bg-rose-400" />
                <div className="h-1 w-1 rounded-full bg-purple-400" />
              </div>
              <div className="h-px bg-gradient-to-l from-transparent via-pink-200 to-transparent w-16" />
            </div>
          </div>
        </ScrollReveal>
        
        <ScrollReveal y={12}>
          <MemoryCarousel items={memories} />
        </ScrollReveal>
        
        <ScrollReveal y={8} delay={0.2}>
          <div className="text-center mt-12">
            <p className="text-sm text-muted-foreground/70 italic">
              cada lembrança dessas me faz ver que apesar de tudo, você continua sendo a pessoa.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </SectionLayout>
  )
}
