'use client'

import React, { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

type TypeWriterProps = {
  text: string
  speedMs?: number
  className?: string
  cursorClassName?: string
}

export function TypeWriter({ text, speedMs = 22, className, cursorClassName }: TypeWriterProps) {
  const [output, setOutput] = useState('')
  const timerRef = useRef<number | null>(null)

  useEffect(() => {
    let index = 0
    setOutput('')
    if (timerRef.current) window.clearInterval(timerRef.current)
    timerRef.current = window.setInterval(() => {
      index += 1
      setOutput(text.slice(0, index))
      if (index >= text.length && timerRef.current) {
        window.clearInterval(timerRef.current)
        timerRef.current = null
      }
    }, speedMs) as unknown as number

    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current)
    }
  }, [text, speedMs])

  return (
    <span aria-live="polite" className={cn('inline-flex items-baseline', className)}>
      <span>{output}</span>
      <span className={cn('ml-[1px] inline-block w-[1ch] animate-pulse', cursorClassName)}>│</span>
    </span>
  )
}


