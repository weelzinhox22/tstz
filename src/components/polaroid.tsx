import React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

type PolaroidProps = {
  src: string
  caption?: string
  className?: string
}

export function Polaroid({ src, caption, className }: PolaroidProps) {
  return (
    <figure className={cn('inline-block bg-white p-2 rounded-sm shadow-[0_8px_30px_rgba(0,0,0,.18)]', className)}>
      <div className="relative h-56 w-56 overflow-hidden">
        <Image 
          src={src} 
          alt={caption || 'polaroid'} 
          fill
          className="object-cover"
        />
      </div>
      {caption ? <figcaption className="mt-2 text-center text-xs text-black">{caption}</figcaption> : null}
    </figure>
  )
}


