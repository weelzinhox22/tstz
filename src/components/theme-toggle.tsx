'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  const isDark = resolvedTheme === 'dark' || theme === 'dark'

  return (
    <Button variant="ghost" size="icon" aria-label="Alternar tema" onClick={() => setTheme(isDark ? 'light' : 'dark')}>
      {isDark ? <Sun className="size-5" /> : <Moon className="size-5" />}
    </Button>
  )
}



