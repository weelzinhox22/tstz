'use client'

import React, { useEffect, useRef, useState } from 'react'
import { Volume2, VolumeX, Play, Pause } from 'lucide-react'
import { Button } from './ui/button'
import { MusicNotification } from './music-notification'

interface YouTubePlayer {
  playVideo: () => Promise<void>
  pauseVideo: () => void
  setVolume: (volume: number) => void
  mute: () => void
  unMute: () => void
}

interface YouTubeEvent {
  target: YouTubePlayer
  data?: number
}

declare global {
  interface Window {
    YT: {
      Player: new (id: string, config: Record<string, unknown>) => YouTubePlayer
      PlayerState: { PLAYING: number; ENDED: number }
    }
    onYouTubeIframeAPIReady: () => void
  }
}

export function YouTubeAudio() {
  const playerRef = useRef<YouTubePlayer | null>(null)
  const [isReady, setIsReady] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)

  useEffect(() => {
    // Carregar API do YouTube
    if (!window.YT) {
      const tag = document.createElement('script')
      tag.src = 'https://www.youtube.com/iframe_api'
      const firstScriptTag = document.getElementsByTagName('script')[0]
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag)
    }

    // Callback quando API estiver pronta
    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player('youtube-player', {
        height: '1',
        width: '1',
        videoId: 'v2qr2Ib0Ryc',
        playerVars: {
          autoplay: 1,
          controls: 0,
          disablekb: 1,
          fs: 0,
          modestbranding: 1,
          playsinline: 1,
          rel: 0,
          showinfo: 0,
        },
        events: {
          onReady: (event: YouTubeEvent) => {
            setIsReady(true)
            event.target.setVolume(30)
            // Tentar reproduzir imediatamente e após qualquer interação
            const tryPlay = () => {
              event.target.playVideo().catch(() => {
                // Se falhar, tentar após primeira interação
                const handleInteraction = () => {
                  event.target.playVideo()
                  document.removeEventListener('click', handleInteraction)
                  document.removeEventListener('scroll', handleInteraction)
                  document.removeEventListener('touchstart', handleInteraction)
                }
                document.addEventListener('click', handleInteraction, { once: true })
                document.addEventListener('scroll', handleInteraction, { once: true })
                document.addEventListener('touchstart', handleInteraction, { once: true })
              })
            }
            
            // Tentar imediatamente
            tryPlay()
            
            // Tentar novamente após 500ms
            setTimeout(tryPlay, 500)
          },
          onStateChange: (event: YouTubeEvent) => {
            setIsPlaying(event.data === window.YT.PlayerState.PLAYING)
            // Loop manual
            if (event.data === window.YT.PlayerState.ENDED) {
              event.target.playVideo()
            }
          },
        },
      })
    }

    // Se API já estiver carregada
    if (window.YT && window.YT.Player) {
      window.onYouTubeIframeAPIReady()
    }
  }, [])

  const togglePlay = () => {
    if (!playerRef.current) return
    if (isPlaying) {
      playerRef.current.pauseVideo()
    } else {
      playerRef.current.playVideo()
    }
  }

  const toggleMute = () => {
    if (!playerRef.current) return
    if (isMuted) {
      playerRef.current.unMute()
      playerRef.current.setVolume(30)
    } else {
      playerRef.current.mute()
    }
    setIsMuted(!isMuted)
  }

  return (
    <>
      {/* Player YouTube oculto */}
      <div className="fixed -top-10 -left-10 w-1 h-1 opacity-0 pointer-events-none">
        <div id="youtube-player" />
      </div>

      {/* Popup de notificação sobre música */}
      <MusicNotification onMute={toggleMute} />

      {/* Controles discretos */}
      <div className="fixed left-3 bottom-3 z-50 flex gap-2">
        <Button
          variant="ghost"
          size="icon"
          onClick={togglePlay}
          disabled={!isReady}
          className="h-8 w-8 bg-background/80 backdrop-blur-sm border border-border/60 hover:bg-background/90 disabled:opacity-50"
          aria-label={isPlaying ? 'Pausar música' : 'Reproduzir música'}
        >
          {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
        </Button>
        
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleMute}
          disabled={!isReady}
          className="h-8 w-8 bg-background/80 backdrop-blur-sm border border-border/60 hover:bg-background/90 disabled:opacity-50"
          aria-label={isMuted ? 'Ativar som' : 'Silenciar'}
        >
          {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
        </Button>
      </div>
    </>
  )
}
