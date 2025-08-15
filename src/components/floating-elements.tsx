'use client'

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useMobile } from '@/hooks/use-mobile'

gsap.registerPlugin(ScrollTrigger)

export function FloatingElements() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const isMobile = useMobile()

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const hearts = container.querySelectorAll('[data-heart]')
    const ctx = gsap.context(() => {
      hearts.forEach((heart, i) => {
        // Animações reduzidas no mobile
        gsap.to(heart, {
          y: isMobile ? -10 : -20,
          rotation: isMobile ? 180 : 360,
          duration: isMobile ? 6 + i * 0.8 : 4 + i * 0.5,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: i * 0.3,
        })

        gsap.to(heart, {
          opacity: isMobile ? 0.2 : 0.3,
          duration: isMobile ? 3 + i * 0.3 : 2 + i * 0.2,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: i * 0.5,
        })
      })
    })

    return () => ctx.revert()
  }, [isMobile])

  return (
    <div ref={containerRef} className="pointer-events-none fixed inset-0 z-0">
      {/* Floating hearts - reduzidos no mobile */}
      {!isMobile && <div data-heart className="absolute left-[5%] top-[15%] text-pink-300/20 text-4xl">💕</div>}
      <div data-heart className="absolute right-[8%] top-[25%] text-red-300/20 text-2xl">💖</div>
      {!isMobile && <div data-heart className="absolute left-[15%] top-[60%] text-pink-300/20 text-3xl">💘</div>}
      <div data-heart className="absolute right-[12%] top-[70%] text-red-300/20 text-2xl">💝</div>
      {!isMobile && <div data-heart className="absolute left-[80%] top-[40%] text-pink-300/20 text-2xl">💗</div>}
      
      {/* Subtle sparkles - apenas no desktop */}
      {!isMobile && (
        <>
          <div className="absolute left-[20%] top-[30%] h-1 w-1 rounded-full bg-white/30 animate-pulse" />
          <div className="absolute right-[25%] top-[45%] h-1 w-1 rounded-full bg-white/20 animate-pulse" style={{ animationDelay: '0.5s' }} />
          <div className="absolute left-[60%] top-[80%] h-1 w-1 rounded-full bg-white/25 animate-pulse" style={{ animationDelay: '1s' }} />
        </>
      )}
    </div>
  )
}
