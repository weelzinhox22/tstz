'use client'

import React, { useState } from 'react'
import { ScrollReveal } from './scroll-reveal'
import { SectionLayout } from './section-layout'
import { Button } from './ui/button'
import { Instagram, MessageSquare } from 'lucide-react'

export function ForgivenessSection() {
  const [response, setResponse] = useState<'yes' | 'no' | null>(null)
  const [isTracking, setIsTracking] = useState(false)

  const handleResponse = async (answer: 'yes' | 'no') => {
    setResponse(answer)
    setIsTracking(true)
    
    try {
      // Track the response
      await fetch('/api/track-response', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ response: answer }),
      })
    } catch (error) {
      console.error('Error tracking response:', error)
    } finally {
      setIsTracking(false)
    }
  }

  return (
    <SectionLayout variant="narrow" spacing="xl">
      <div className="relative">
        {/* Background elements */}
        <div className="absolute left-[10%] top-[20%] h-24 w-24 rounded-full bg-gradient-to-br from-slate-200/15 to-gray-200/8 blur-xl" />
        <div className="absolute right-[15%] bottom-[25%] h-20 w-20 rounded-full bg-gradient-to-br from-slate-200/10 to-gray-200/5 blur-lg" />
        
        <ScrollReveal>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="h-px bg-gradient-to-r from-transparent via-slate-300/50 to-transparent w-20" />
              <span className="text-2xl">🤝</span>
              <div className="h-px bg-gradient-to-l from-transparent via-slate-300/50 to-transparent w-20" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-slate-600 via-gray-700 to-slate-600 bg-clip-text text-transparent">
              você me perdoa?
            </h2>
            <div className="max-w-2xl mx-auto space-y-6">
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                sei que as coisas não terminaram da melhor forma
              </p>
              <p className="text-base sm:text-lg text-muted-foreground/80 leading-relaxed">
                não espero nada além disso, apenas sinto que preciso fazer esse pedido de desculpas.
                <br />
                se preferir não responder, tudo bem também
              </p>
            </div>
          </div>
        </ScrollReveal>

        {response === null && (
          <ScrollReveal y={12} delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={() => handleResponse('yes')}
                disabled={isTracking}
                className="bg-slate-600 hover:bg-slate-700 disabled:opacity-50 text-white px-8 py-4 text-lg font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                {isTracking ? 'Registrando...' : 'sim, te perdoo'}
              </Button>
              
              <Button
                variant="outline"
                onClick={() => handleResponse('no')}
                disabled={isTracking}
                className="border-slate-300 text-slate-600 hover:bg-slate-50 disabled:opacity-50 px-8 py-4 text-lg font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {isTracking ? 'Registrando...' : 'prefiro não responder'}
              </Button>
            </div>
          </ScrollReveal>
        )}

        {response === 'yes' && (
          <ScrollReveal>
            <div className="text-center space-y-6">
              <div className="text-4xl">🤝</div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-700">obrigado</h3>
              <p className="text-lg text-muted-foreground max-w-lg mx-auto">
                se quiser conversar sobre isso, me manda uma mensagem no Instagram
              </p>
              <Button
                asChild
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-full"
              >
                <a href="https://instagram.com/direct/t/welziinho" target="_blank" rel="noopener noreferrer">
                  <Instagram className="mr-2 h-4 w-4" />
                  enviar mensagem
                </a>
              </Button>
            </div>
          </ScrollReveal>
        )}

        {response === 'no' && (
          <ScrollReveal>
            <div className="text-center space-y-6">
              <div className="text-4xl">❤️</div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-600">entendo</h3>
              <p className="text-lg text-muted-foreground max-w-lg mx-auto">
                obrigado por ter lido até aqui
              </p>
            </div>
          </ScrollReveal>
        )}

      </div>
    </SectionLayout>
  )
}