'use client'

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollReveal } from './scroll-reveal'
import { cn } from '@/lib/utils'

type StickerNote = {
  id: string
  text: string
  color: 'yellow' | 'pink' | 'blue' | 'green'
  rotation: number
  size?: 'sm' | 'md' | 'lg'
}

const stickerNotes: StickerNote[] = [
  { id: '1', text: 'o tempo passa e o que fica é você', color: 'yellow', rotation: -3, size: 'md' },
  { id: '2', text: 'mozamore 💕', color: 'pink', rotation: 5, size: 'sm' },
  { id: '3', text: 'espero que em algum mundo, a gente tenha ficado juntos', color: 'blue', rotation: -7, size: 'lg' },
  { id: '4', text: 'AAAAAAAAAAAAA', color: 'green', rotation: 2, size: 'md' },
  { id: '5', text: 'sdds dos filmes', color: 'yellow', rotation: -4, size: 'md' },
  { id: '6', text: 'sdds das farofas', color: 'pink', rotation: 8, size: 'sm' }
]

export function StickerNotes() {
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const stickers = container.querySelectorAll('[data-sticker]')
    const ctx = gsap.context(() => {
      stickers.forEach((sticker, i) => {
        gsap.fromTo(
          sticker,
          { scale: 0, rotation: 0 },
          {
            scale: 1,
            rotation: stickerNotes[i]?.rotation || 0,
            duration: 0.6,
            delay: i * 0.1,
            ease: 'back.out(1.7)',
            scrollTrigger: {
              trigger: sticker,
              start: 'top 90%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      })
    })

    return () => ctx.revert()
  }, [])

  const colorClasses = {
    yellow: 'bg-yellow-200 text-yellow-900 shadow-yellow-300/30',
    pink: 'bg-pink-200 text-pink-900 shadow-pink-300/30',
    blue: 'bg-blue-200 text-blue-900 shadow-blue-300/30',
    green: 'bg-green-200 text-green-900 shadow-green-300/30'
  }

  const sizeClasses = {
    sm: 'w-24 h-24 text-xs',
    md: 'w-32 h-32 text-sm',
    lg: 'w-40 h-40 text-base'
  }

  return (
    <div ref={containerRef} className="py-16 sm:py-20">
      <ScrollReveal>
        <div className="container mx-auto px-4 text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground/80">
        
          </h2>
        </div>
      </ScrollReveal>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 place-items-center">
          {stickerNotes.map((note) => (
            <div
              key={note.id}
              data-sticker
              className={cn(
                'flex items-center justify-center p-4 rounded-lg shadow-lg text-center font-handwriting cursor-pointer transition-all duration-300 hover:scale-110 hover:z-10 relative',
                colorClasses[note.color],
                sizeClasses[note.size || 'md']
              )}
              style={{ transform: `rotate(${note.rotation}deg)` }}
            >
              <p className="leading-tight">{note.text}</p>
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-6 h-6 bg-gray-300 rounded-full shadow-sm opacity-60" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
