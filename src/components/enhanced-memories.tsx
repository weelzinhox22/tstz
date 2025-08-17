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
        <div className="absolute left-[10%] top-[20%] h-20 w-20 rounded-full bg-gradient-to-br from-slate-200/8 to-gray-200/4 blur-xl" />
        <div className="absolute right-[15%] bottom-[30%] h-24 w-24 rounded-full bg-gradient-to-br from-slate-200/6 to-gray-200/3 blur-xl" />
        
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px bg-gradient-to-r from-transparent to-slate-300 w-12" />
              <span className="text-2xl">💭</span>
              <div className="h-px bg-gradient-to-l from-transparent to-slate-300 w-12" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-slate-700 via-gray-600 to-slate-700 bg-clip-text text-transparent">
              lembranças que ficaram
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              detalhes simples que ganharam importância e que carrego com carinho
            </p>
            <div className="mt-6 flex items-center justify-center gap-4">
              <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent w-16" />
              <div className="flex gap-1">
                <div className="h-1 w-1 rounded-full bg-slate-400" />
                <div className="h-1 w-1 rounded-full bg-gray-400" />
                <div className="h-1 w-1 rounded-full bg-slate-400" />
              </div>
              <div className="h-px bg-gradient-to-l from-transparent via-slate-300 to-transparent w-16" />
            </div>
          </div>
        </ScrollReveal>
        
        <ScrollReveal y={12}>
          <MemoryCarousel items={memories} />
        </ScrollReveal>
        
        <ScrollReveal y={8} delay={0.2}>
          <div className="text-center mt-12">
            <p className="text-sm text-muted-foreground/70 italic">
              essas lembranças me ajudam a entender o valor do que vivemos juntos.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </SectionLayout>
  )
}
