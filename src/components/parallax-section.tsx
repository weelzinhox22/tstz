'use client'

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

type ParallaxSectionProps = {
  backgroundImageUrl?: string
  strength?: number
  className?: string
  children?: React.ReactNode
}

export function ParallaxSection({
  backgroundImageUrl,
  strength = 100,
  className,
  children,
}: ParallaxSectionProps) {
  const bgRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!bgRef.current) return

    const element = bgRef.current
    const ctx = gsap.context(() => {
      gsap.to(element, {
        y: -strength,
        ease: 'none',
        scrollTrigger: {
          trigger: element,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })
    })

    return () => ctx.revert()
  }, [strength])

  return (
    <section className={className}>
      <div
        ref={bgRef}
        className="absolute inset-0 -z-10 bg-cover bg-center will-change-transform"
        style={{ backgroundImage: backgroundImageUrl ? `url(${backgroundImageUrl})` : undefined }}
      />
      <div className="relative">
        {children}
      </div>
    </section>
  )
}



