'use client'

import React from 'react'
import { ScrollReveal } from './scroll-reveal'
import { HorizontalScrollSection } from './horizontal-scroll-section'

export function EnhancedTimeline() {
  return (
    <div className="py-12 sm:py-16">
      <ScrollReveal>
        <div className="container mx-auto px-4 text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground via-blue-600 to-teal-600 bg-clip-text text-transparent">
            ainda me lembro de mt coisa
          </h2>
          <div className="flex items-center justify-center mb-6">
            <div className="h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent w-24" />
            <div className="mx-4 h-2 w-2 rounded-full bg-blue-400" />
            <div className="h-px bg-gradient-to-r from-transparent via-teal-300 to-transparent w-24" />
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            cada fase teve seu significado, cada momento me ensinou algo
          </p>
        </div>
      </ScrollReveal>
      
      <HorizontalScrollSection>
        <div className="grid place-items-center p-10 sm:p-16 bg-gradient-to-br from-pink-50/60 to-rose-50/40 dark:from-pink-950/30 dark:to-rose-950/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,182,193,0.1),transparent_50%)]" />
          <div className="max-w-md text-center space-y-6 relative z-10">
            <div className="text-5xl mb-4"></div>
            <h3 className="text-2xl sm:text-3xl font-bold text-pink-700 dark:text-pink-300">quando começamos</h3>
            <p className="text-base sm:text-lg text-foreground/90 leading-relaxed">
              tudo era novo e parecia fácil. Passamos ótimos momentos, não tinha nada mais que eu quisesse do que estar com você, só queria estar ao seu lado mesmo.
            </p>
          </div>
        </div>
        
        <div className="grid place-items-center p-10 sm:p-16 bg-gradient-to-br from-amber-50/60 to-yellow-50/40 dark:from-amber-950/30 dark:to-yellow-950/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,215,0,0.1),transparent_50%)]" />
          <div className="max-w-md text-center space-y-6 relative z-10">
            <div className="text-5xl mb-4"></div>
            <h3 className="text-2xl sm:text-3xl font-bold text-amber-700 dark:text-amber-300">Infelizmente nem tudo são flores</h3>
            <p className="text-base sm:text-lg text-foreground/90 leading-relaxed">
              assim como tivemos muitos momentos bons, tivemos muitos momentos ruins também, muitas idas e vindas, muitas &ldquo;brigas&rdquo; e muitas conversas afim de nos resolvermos, eu nem sei pq to falando isso aqui kkk era pra ser só um pedido de desculpas mesmo.
            </p>
          </div>
        </div>
        
        <div className="grid place-items-center p-10 sm:p-16 bg-gradient-to-br from-blue-50/60 to-indigo-50/40 dark:from-blue-950/30 dark:to-indigo-950/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_60%,rgba(100,149,237,0.1),transparent_50%)]" />
          <div className="max-w-md text-center space-y-6 relative z-10">
            <div className="text-5xl mb-4"></div>
            <h3 className="text-2xl sm:text-3xl font-bold text-blue-700 dark:text-blue-300">quando esfriou</h3>
            <p className="text-base sm:text-lg text-foreground/90 leading-relaxed">
                Eu acho que tentamos vezes o suficiente para pelo menos perceber que não era pra ser, mas fds, eu não ligo, eu só queria estar com você, em nenhuma das vezes que terminamos, eu jamais teria tomado a iniciativa por simplesmente preferir passar por qualquer coisa, mas estando com você, pra mim nada mais importava, sei que você sempre teve aquilo de ficar pensando demais nas coisas, sei o jeitinho que você é, mas eu espero de verdade que em momento algum eu teria ido embora.
            </p>
          </div>
        </div>
        
        <div className="grid place-items-center p-10 sm:p-16 bg-gradient-to-br from-purple-50/60 to-violet-50/40 dark:from-purple-950/30 dark:to-violet-950/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(147,112,219,0.1),transparent_50%)]" />
          <div className="max-w-md text-center space-y-6 relative z-10">
            <div className="text-5xl mb-4"></div>
            <h3 className="text-2xl sm:text-3xl font-bold text-purple-700 dark:text-purple-300">o que eu quero hoje</h3>
            <p className="text-base sm:text-lg text-foreground/90 leading-relaxed">
              Hoje eu só quero que você seja feliz, sei que tá tarde pra falar isso, você ja deve estar feliz ai, mas eu fiquei com muita coisa guardada e nos últimos meses eu fiquei pensando sobre muita coisa, como tudo aconteceu quando terminamos, eu queria que você soubesse que eu não queria que as coisas tivessem sido como foram.
            </p>
          </div>
        </div>
      </HorizontalScrollSection>
    </div>
  )
}
