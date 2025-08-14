import React from 'react'
import { cn } from '@/lib/utils'

type PolaroidProps = {
  src: string
  caption?: string
  className?: string
}

export function Polaroid({ src, caption, className }: PolaroidProps) {
  return (
    <figure className={cn('inline-block bg-white p-2 rounded-sm shadow-[0_8px_30px_rgba(0,0,0,.18)]', className)}>
      <img src={src} alt={caption || 'polaroid'} className="h-56 w-56 object-cover" />
      {caption ? <figcaption className="mt-2 text-center text-xs text-black">{caption}</figcaption> : null}
    </figure>
  )
}


