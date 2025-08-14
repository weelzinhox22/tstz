'use client'

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { cn } from '@/lib/utils'

gsap.registerPlugin(ScrollTrigger)

type HorizontalScrollSectionProps = {
  children: React.ReactNode
  className?: string
  panelsClassName?: string
}

export function HorizontalScrollSection({ children, className, panelsClassName }: HorizontalScrollSectionProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const trackRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const container = containerRef.current
    const track = trackRef.current
    if (!container || !track) return

    const panels = Array.from(track.children) as HTMLElement[]
    const totalPanels = panels.length
    const panelWidth = () => container.clientWidth
    const totalScrollX = () => panelWidth() * (totalPanels - 1)

    const ctx = gsap.context(() => {
      gsap.set(track, { width: `${totalPanels * 100}%` })
      panels.forEach((p) => gsap.set(p, { width: `${100 / totalPanels}%` }))

      gsap.to(track, {
        x: () => -totalScrollX(),
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: () => `+=${totalScrollX()}`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className={cn('relative h-[80svh] overflow-hidden', className)}>
      <div ref={trackRef} className={cn('flex h-full', panelsClassName)}>
        {children}
      </div>
    </section>
  )
}



