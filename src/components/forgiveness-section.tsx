'use client'

import React, { useState } from 'react'
import { ScrollReveal } from './scroll-reveal'
import { SectionLayout } from './section-layout'
import { Button } from './ui/button'
import { MessageCircle, Heart, X } from 'lucide-react'

export function ForgivenessSection() {
  const [response, setResponse] = useState<'yes' | 'no' | null>(null)

  const handleResponse = (answer: 'yes' | 'no') => {
    setResponse(answer)
    
    if (answer === 'yes') {
      // Redirecionar para WhatsApp
      setTimeout(() => {
        window.open('https://wa.me/5571991373142?text=Oi%2C%20eu%20li%20sua%20carta%20e%20te%20perdoo%20%E2%9D%A4%EF%B8%8F', '_blank')
      }, 1500)
    }
  }

  const whatsappMessage = encodeURIComponent('Oi, eu li sua carta e te desculpo.')

  return (
    <SectionLayout variant="narrow" spacing="xl">
      <div className="relative">
        {/* Background elements */}
        <div className="absolute left-[10%] top-[20%] h-32 w-32 rounded-full bg-gradient-to-br from-green-200/20 to-emerald-200/10 blur-xl" />
        <div className="absolute right-[15%] bottom-[25%] h-24 w-24 rounded-full bg-gradient-to-br from-blue-200/15 to-sky-200/8 blur-lg" />
        
        <ScrollReveal>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="text-3xl">🙏</span>
              <div className="h-px bg-gradient-to-r from-transparent via-green-300 to-transparent w-16" />
              <span className="text-2xl">💚</span>
              <div className="h-px bg-gradient-to-l from-transparent via-blue-300 to-transparent w-16" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              você me desculpa?
            </h2>
            <div className="max-w-3xl mx-auto space-y-4">
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                <strong>não é um pedido para voltar</strong> e nem nada do tipo
              </p>
              <p className="text-base sm:text-lg text-muted-foreground/80 leading-relaxed">
                é apenas um pedido de desculpas por tudo que aconteceu entre nós.
                <br />
                a falta de qualquer mensagem ou retorno, vou entender como um "não"
              </p>
              <p className="text-sm text-muted-foreground/60 italic">
                só quero que você saiba que eu reconheço meus erros e sinto muito
              </p>
            </div>
          </div>
        </ScrollReveal>

        {response === null && (
          <ScrollReveal y={12} delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={() => handleResponse('yes')}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Heart className="mr-2 h-5 w-5" />
                sim, eu te perdoo
              </Button>
              
              <Button
                variant="outline"
                onClick={() => handleResponse('no')}
                className="border-red-300 text-red-600 hover:bg-red-50 px-8 py-4 text-lg font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <X className="mr-2 h-5 w-5" />
                não posso perdoar
              </Button>
            </div>
          </ScrollReveal>
        )}

        {response === 'yes' && (
          <ScrollReveal>
            <div className="text-center space-y-6">
              <div className="text-6xl animate-bounce">💚</div>
              <h3 className="text-2xl sm:text-3xl font-bold text-green-600">obrigado...</h3>
              <p className="text-lg text-muted-foreground">
                isso significa muito para mim. redirecionando para o WhatsApp...
              </p>
              <Button
                asChild
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full"
              >
                <a href={`https://wa.me/5571991373142?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  conversar no WhatsApp
                </a>
              </Button>
            </div>
          </ScrollReveal>
        )}

        {response === 'no' && (
          <ScrollReveal>
            <div className="text-center space-y-6">
              <div className="text-6xl">💔</div>
              <h3 className="text-2xl sm:text-3xl font-bold text-red-600">eu entendo...</h3>
              <p className="text-lg text-muted-foreground max-w-lg mx-auto">
                obrigado por ter lido até aqui mesmo assim. 
                espero que um dia você possa me perdoar
              </p>
            </div>
          </ScrollReveal>
        )}


      </div>
    </SectionLayout>
  )
}
