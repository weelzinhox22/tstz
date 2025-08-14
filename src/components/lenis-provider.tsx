'use client'

import React, { useEffect } from 'react'
import Lenis from 'lenis'

type LenisProviderProps = {
  children: React.ReactNode
}

export function LenisProvider({ children }: LenisProviderProps) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      wheelMultiplier: 1,
      touchMultiplier: 1,
      smoothWheel: true,
    })

    let rafId = 0
    function raf(time: number) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      // destroy exists on Lenis instance
      ;(lenis as unknown as { destroy: () => void }).destroy()
    }
  }, [])

  return <>{children}</>
}


