'use client'

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { cn } from '@/lib/utils'

gsap.registerPlugin(ScrollTrigger)

type InteractiveCardProps = {
  className?: string
  children?: React.ReactNode
}

export function InteractiveCard({ className, children }: InteractiveCardProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const rotateXTo = useRef<ReturnType<typeof gsap.quickTo> | null>(null)
  const rotateYTo = useRef<ReturnType<typeof gsap.quickTo> | null>(null)
  const shadowTo = useRef<ReturnType<typeof gsap.quickTo> | null>(null)

  useEffect(() => {
    if (!ref.current) return
    const el = ref.current

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { autoAlpha: 0, y: 24, scale: 0.98 },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          ease: 'power2.out',
          duration: 0.9,
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      )

      gsap.to(el, {
        boxShadow: '0 12px 40px rgba(0,0,0,0.18)',
        ease: 'none',
        scrollTrigger: {
          trigger: el,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })
    }, ref)

    rotateXTo.current = gsap.quickTo(el, 'rotateX', { duration: 0.3, ease: 'power3' })
    rotateYTo.current = gsap.quickTo(el, 'rotateY', { duration: 0.3, ease: 'power3' })
    shadowTo.current = gsap.quickTo(el, 'boxShadow', { duration: 0.3, ease: 'power3' })

    function onPointerMove(e: PointerEvent) {
      const rect = el.getBoundingClientRect()
      const relX = (e.clientX - rect.left) / rect.width
      const relY = (e.clientY - rect.top) / rect.height
      const tiltX = (0.5 - relY) * 10 // rotateX
      const tiltY = (relX - 0.5) * 10 // rotateY
      rotateXTo.current?.(tiltX)
      rotateYTo.current?.(tiltY)
      const shadowX = (relX - 0.5) * 20
      const shadowY = (relY - 0.5) * 20
      shadowTo.current?.(`${shadowX}px ${shadowY}px 40px rgba(0,0,0,0.18)`) // will be overridden by scroll scrub too
    }

    function onPointerLeave() {
      rotateXTo.current?.(0)
      rotateYTo.current?.(0)
    }

    el.addEventListener('pointermove', onPointerMove)
    el.addEventListener('pointerleave', onPointerLeave)

    return () => {
      el.removeEventListener('pointermove', onPointerMove)
      el.removeEventListener('pointerleave', onPointerLeave)
      ctx.revert()
    }
  }, [])

  return (
    <div
      ref={ref}
      className={cn(
        'relative rounded-xl border border-border/60 bg-card/70 backdrop-blur-sm will-change-transform perspective-1000',
        'transition-[transform,box-shadow] duration-300',
        className,
      )}
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="pointer-events-none absolute inset-0 rounded-xl bg-[radial-gradient(120%_60%_at_50%_-20%,rgba(125,125,125,0.08),transparent_60%)]" />
      <div className="relative">
        {children}
      </div>
    </div>
  )
}


