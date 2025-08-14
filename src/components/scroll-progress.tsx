'use client'

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function ScrollProgress() {
  const barRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const el = barRef.current
    if (!el) return

    const ctx = gsap.context(() => {
      gsap.to(el, {
        scaleX: 1,
        ease: 'none',
        transformOrigin: 'left center',
        scrollTrigger: {
          start: 0,
          end: 'max',
          scrub: true,
        },
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <div className="pointer-events-none fixed left-0 right-0 top-0 z-[60] h-1 bg-transparent">
      <div ref={barRef} className="h-1 w-full origin-left scale-x-0 bg-foreground/80" />
    </div>
  )
}



