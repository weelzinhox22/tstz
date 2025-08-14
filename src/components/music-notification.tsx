'use client'

import React, { useEffect, useState } from 'react'
import { Button } from './ui/button'
import { Volume2, VolumeX, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

type MusicNotificationProps = {
  onMute?: () => void
}

export function MusicNotification({ onMute }: MusicNotificationProps) {
  const [showNotification, setShowNotification] = useState(false)

  useEffect(() => {
    // Mostrar notificação após 3 segundos
    const timer = setTimeout(() => {
      setShowNotification(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const handleMute = () => {
    onMute?.()
    setShowNotification(false)
  }

  const handleDismiss = () => {
    setShowNotification(false)
  }

  return (
    <AnimatePresence>
      {showNotification && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ duration: 0.4, ease: 'back.out' }}
          className="fixed top-6 right-6 z-[60] max-w-sm"
        >
          <div className="relative rounded-2xl border border-border/60 bg-card/95 backdrop-blur-md shadow-2xl p-5">
            {/* Close button */}
            <button
              onClick={handleDismiss}
              className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-background shadow-md border border-border/60 flex items-center justify-center hover:bg-muted transition-colors"
            >
              <X className="h-3 w-3" />
            </button>

            {/* Content */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-medium">música tocando</span>
                <span className="text-lg">🎵</span>
              </div>
              
              <p className="text-sm text-muted-foreground leading-relaxed">
                Uma música especial acompanha esta carta. 
                Prefere ler em silêncio?
              </p>
              
              <div className="flex gap-2">
                <Button
                  size="sm"
                  onClick={handleMute}
                  variant="outline"
                  className="flex-1 text-xs"
                >
                  <VolumeX className="mr-1 h-3 w-3" />
                  silenciar
                </Button>
                
                <Button
                  size="sm"
                  onClick={handleDismiss}
                  className="flex-1 text-xs bg-blue-600 hover:bg-blue-700"
                >
                  <Volume2 className="mr-1 h-3 w-3" />
                  continuar
                </Button>
              </div>
            </div>

            {/* Decorative gradient */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 pointer-events-none" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
