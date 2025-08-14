'use client'

import React, { useEffect, useRef } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import type { EmblaOptionsType } from 'embla-carousel'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import { cn } from '@/lib/utils'

export type MemoryItem = {
  id: string
  title?: string
  text?: string
  imageUrl?: string
}

type MemoryCarouselProps = {
  items: MemoryItem[]
  className?: string
  options?: EmblaOptionsType
}

export function MemoryCarousel({ items, className, options }: MemoryCarouselProps) {
  const autoplay = useRef(Autoplay({ delay: 3500, stopOnInteraction: false }))
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'center', ...options }, [autoplay.current])

  useEffect(() => {
    const autoplayInstance = autoplay.current
    return () => {
      autoplayInstance?.destroy?.()
    }
  }, [])

  return (
    <div className={cn('overflow-hidden rounded-xl border border-border/60 bg-card/70 backdrop-blur-sm', className)} ref={emblaRef}>
      <div className="flex">
        {items.map((item) => (
          <div key={item.id} className="min-w-0 shrink-0 grow-0 basis-full px-4 py-8 sm:px-8">
            <div className="grid gap-3 sm:gap-4">
              {item.title ? <h3 className="text-lg sm:text-xl font-semibold">{item.title}</h3> : null}
              {item.text ? <p className="text-sm sm:text-base text-foreground/90 leading-relaxed">{item.text}</p> : null}
              {item.imageUrl ? (
                <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg bg-muted">
                  <Image 
                    src={item.imageUrl} 
                    alt={item.title || 'memória'} 
                    fill
                    className="object-cover"
                  />
                </div>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}



