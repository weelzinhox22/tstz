'use client'

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollReveal } from './scroll-reveal'
import { SectionLayout } from './section-layout'
import { cn } from '@/lib/utils'

gsap.registerPlugin(ScrollTrigger)

type CrumpledNote = {
  id: string
  text: string
  rotation: number
  scale: number
  color: 'white' | 'cream' | 'yellow' | 'pink'
}

const crumpledNotes: CrumpledNote[] = [
  { id: '2', text: 'mozamore sempre vai ser meu apelido favorito', rotation: 12, scale: 1.1, color: 'pink' },
  { id: '4', text: 'você sempre vai ser especial pra mim', rotation: 15, scale: 1.05, color: 'white' },
  { id: '5', text: 'desculpa por não ter sido melhor', rotation: -12, scale: 0.85, color: 'yellow' },
]

export function CrumpledNotes() {
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const notes = container.querySelectorAll('[data-note]')
    const ctx = gsap.context(() => {
      notes.forEach((note, i) => {
        // Animação de "desamassar"
        gsap.fromTo(
          note,
          { 
            scale: 0.3, 
            rotation: crumpledNotes[i]?.rotation * 3 || 0,
            filter: 'blur(2px)',
            autoAlpha: 0 
          },
          {
            scale: crumpledNotes[i]?.scale || 1,
            rotation: crumpledNotes[i]?.rotation || 0,
            filter: 'blur(0px)',
            autoAlpha: 1,
            duration: 0.8,
            delay: i * 0.15,
            ease: 'back.out(1.7)',
            scrollTrigger: {
              trigger: note,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        )

        // Hover effect
        note.addEventListener('mouseenter', () => {
          gsap.to(note, { scale: (crumpledNotes[i]?.scale || 1) * 1.1, duration: 0.3 })
        })
        
        note.addEventListener('mouseleave', () => {
          gsap.to(note, { scale: crumpledNotes[i]?.scale || 1, duration: 0.3 })
        })
      })
    })

    return () => ctx.revert()
  }, [])

  const colorClasses = {
    white: 'bg-white text-gray-800 shadow-gray-400/20',
    cream: 'bg-orange-50 text-orange-900 shadow-orange-300/20',
    yellow: 'bg-yellow-100 text-yellow-900 shadow-yellow-400/20',
    pink: 'bg-pink-100 text-pink-900 shadow-pink-400/20'
  }

  return (
    <SectionLayout variant="default" spacing="xl">
      <div className="relative">
        {/* Background elements */}
        <div className="absolute left-[5%] top-[10%] h-16 w-16 rounded-full bg-gradient-to-br from-yellow-200/20 to-orange-200/10 blur-lg" />
        <div className="absolute right-[8%] bottom-[20%] h-24 w-24 rounded-full bg-gradient-to-br from-pink-200/15 to-rose-200/8 blur-xl" />
        
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="text-2xl">📝</span>
              <div className="h-px bg-gradient-to-r from-transparent via-yellow-300 to-transparent w-16" />
              <span className="text-xl">💭</span>
              <div className="h-px bg-gradient-to-l from-transparent via-pink-300 to-transparent w-16" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-yellow-600 via-orange-500 to-pink-600 bg-clip-text text-transparent">
              bilhetinhos amassados
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              coisas que eu escrevi e amassava porque não sabia se devia te mandar
            </p>
          </div>
        </ScrollReveal>

        <div ref={containerRef} className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 place-items-center">
            {crumpledNotes.map((note) => (
              <div
                key={note.id}
                data-note
                className={cn(
                  'relative p-6 sm:p-8 w-48 h-48 sm:w-56 sm:h-56 rounded-2xl shadow-xl cursor-pointer transition-all duration-300',
                  'before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:from-white/50 before:to-transparent before:opacity-60',
                  'after:absolute after:inset-0 after:rounded-2xl after:shadow-inner after:shadow-black/10',
                  colorClasses[note.color]
                )}
                style={{ 
                  transform: `rotate(${note.rotation}deg) scale(${note.scale})`,
                  filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.15))'
                }}
              >
                {/* Papel texture */}
                <div className="absolute inset-0 rounded-2xl opacity-30 bg-[radial-gradient(circle_at_30%_20%,rgba(0,0,0,0.05),transparent_40%),radial-gradient(circle_at_70%_80%,rgba(0,0,0,0.03),transparent_40%)]" />
                
                {/* Content */}
                <div className="relative z-10 h-full flex items-center justify-center">
                  <p className="text-center text-sm sm:text-base font-medium leading-relaxed">
                    {note.text}
                  </p>
                </div>
                
                {/* Crumple lines */}
                <div className="absolute inset-0 rounded-2xl opacity-20">
                  <div className="absolute top-4 left-6 w-8 h-px bg-current opacity-30 rotate-12" />
                  <div className="absolute bottom-6 right-4 w-12 h-px bg-current opacity-20 -rotate-6" />
                  <div className="absolute top-1/2 left-4 w-6 h-px bg-current opacity-25 rotate-45" />
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <ScrollReveal y={8} delay={0.3}>
          <div className="text-center mt-16">
            <p className="text-sm text-muted-foreground/70 italic max-w-md mx-auto">
              "cada bilhetinho que eu não tive coragem de te dar..."
            </p>
          </div>
        </ScrollReveal>
      </div>
    </SectionLayout>
  )
}
