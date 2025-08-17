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

    const elements = container.querySelectorAll('[data-float]')
    const ctx = gsap.context(() => {
      elements.forEach((element, i) => {
        // Animações sutis e reduzidas
        gsap.to(element, {
          y: isMobile ? -5 : -10,
          duration: isMobile ? 8 + i * 1 : 6 + i * 0.8,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: i * 0.5,
        })

        gsap.to(element, {
          opacity: isMobile ? 0.1 : 0.15,
          duration: isMobile ? 4 + i * 0.5 : 3 + i * 0.3,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: i * 0.7,
        })
      })
    })

    return () => ctx.revert()
  }, [isMobile])

  return (
    <div ref={containerRef} className="pointer-events-none fixed inset-0 z-0">
      {/* Floating geometric shapes - mais neutros */}
      {!isMobile && <div data-float className="absolute left-[5%] top-[15%] text-slate-300/10 text-2xl">○</div>}
      <div data-float className="absolute right-[8%] top-[25%] text-gray-300/10 text-xl">◦</div>
      {!isMobile && <div data-float className="absolute left-[15%] top-[60%] text-slate-300/10 text-2xl">•</div>}
      <div data-float className="absolute right-[12%] top-[70%] text-gray-300/10 text-xl">◦</div>
      {!isMobile && <div data-float className="absolute left-[80%] top-[40%] text-slate-300/10 text-xl">○</div>}
      
      {/* Subtle dots - apenas no desktop */}
      {!isMobile && (
        <>
          <div className="absolute left-[20%] top-[30%] h-1 w-1 rounded-full bg-slate-300/20 animate-pulse" />
          <div className="absolute right-[25%] top-[45%] h-1 w-1 rounded-full bg-gray-300/15 animate-pulse" style={{ animationDelay: '0.5s' }} />
          <div className="absolute left-[60%] top-[80%] h-1 w-1 rounded-full bg-slate-300/20 animate-pulse" style={{ animationDelay: '1s' }} />
        </>
      )}
    </div>
  )
}
