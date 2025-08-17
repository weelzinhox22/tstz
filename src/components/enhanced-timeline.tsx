'use client'

import React from 'react'
import { ScrollReveal } from './scroll-reveal'
import { HorizontalScrollSection } from './horizontal-scroll-section'

export function EnhancedTimeline() {
  return (
    <div className="py-12 sm:py-16">
      <ScrollReveal>
        <div className="container mx-auto px-4 text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-700 via-gray-600 to-slate-700 bg-clip-text text-transparent">
            algumas reflexões
          </h2>
          <div className="flex items-center justify-center mb-6">
            <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent w-24" />
            <div className="mx-4 h-2 w-2 rounded-full bg-slate-400" />
            <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent w-24" />
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            olhando para trás, consigo ver com mais clareza
          </p>
        </div>
      </ScrollReveal>
      
      <HorizontalScrollSection>
        <div className="grid place-items-center p-10 sm:p-16 bg-gradient-to-br from-slate-50/60 to-gray-50/40 dark:from-slate-950/30 dark:to-gray-950/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(148,163,184,0.1),transparent_50%)]" />
          <div className="max-w-md text-center space-y-6 relative z-10">
            <div className="text-4xl mb-4">🌱</div>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-700 dark:text-slate-300">o início</h3>
            <p className="text-base sm:text-lg text-foreground/90 leading-relaxed">
              éramos jovens e tudo parecia simples. tivemos muitos momentos bons, onde realmente podia dar certo, apesar de sermos imaturos na época, foram momentos incríveis ao seu lado.
            </p>
          </div>
        </div>
        
        <div className="grid place-items-center p-10 sm:p-16 bg-gradient-to-br from-orange-50/60 to-amber-50/40 dark:from-orange-950/30 dark:to-amber-950/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(251,146,60,0.1),transparent_50%)]" />
          <div className="max-w-md text-center space-y-6 relative z-10">
            <div className="text-4xl mb-4">⚖️</div>
            <h3 className="text-2xl sm:text-3xl font-bold text-orange-700 dark:text-orange-300">as dificuldades</h3>
            <p className="text-base sm:text-lg text-foreground/90 leading-relaxed">
              acabamos complicando demais coisas simples. foram muitas tentativas de resolver, muitas conversas, muitas idas e vindas que desgastaram a relação.
            </p>
          </div>
        </div>
        
        <div className="grid place-items-center p-10 sm:p-16 bg-gradient-to-br from-blue-50/60 to-indigo-50/40 dark:from-blue-950/30 dark:to-indigo-950/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_60%,rgba(100,149,237,0.1),transparent_50%)]" />
          <div className="max-w-md text-center space-y-6 relative z-10">
            <div className="text-4xl mb-4">🧊</div>
            <h3 className="text-2xl sm:text-3xl font-bold text-blue-700 dark:text-blue-300">o desgaste</h3>
            <p className="text-base sm:text-lg text-foreground/90 leading-relaxed">
              chegou um ponto em que ficou claro que não estava funcionando. Mas saiba que eu nunca teria desistido de você.
            </p>
          </div>
        </div>
        
        <div className="grid place-items-center p-10 sm:p-16 bg-gradient-to-br from-slate-50/60 to-gray-50/40 dark:from-slate-950/30 dark:to-gray-950/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(148,163,184,0.1),transparent_50%)]" />
          <div className="max-w-md text-center space-y-6 relative z-10">
            <div className="text-4xl mb-4">🕊️</div>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-700 dark:text-slate-300">hoje</h3>
            <p className="text-base sm:text-lg text-foreground/90 leading-relaxed">
              com o tempo, consegui processar melhor tudo que aconteceu. sei que as coisas poderiam ter terminado de forma diferente, e espero que você continue sempre bem.
            </p>
          </div>
        </div>
      </HorizontalScrollSection>
    </div>
  )
}
