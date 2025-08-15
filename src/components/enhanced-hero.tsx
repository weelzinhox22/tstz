'use client'

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TypeWriter } from './typewriter'
import { ScrollReveal } from './scroll-reveal'

gsap.registerPlugin(ScrollTrigger)

export function EnhancedHero() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const layer1Ref = useRef<HTMLDivElement | null>(null)
  const layer2Ref = useRef<HTMLDivElement | null>(null)
  const layer3Ref = useRef<HTMLDivElement | null>(null)
  const videoRef = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    const container = containerRef.current
    const layer1 = layer1Ref.current
    const layer2 = layer2Ref.current
    const layer3 = layer3Ref.current
    if (!container || !layer1 || !layer2 || !layer3) return

    const ctx = gsap.context(() => {
      // Parallax layers com velocidades diferentes
      gsap.to(layer1, {
        yPercent: -30,
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })
      
      gsap.to(layer2, {
        yPercent: -15,
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })
      
      gsap.to(layer3, {
        yPercent: -8,
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })
    })

    return () => ctx.revert()
  }, [])

  // Garantir que o vídeo toque no mobile
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleUserInteraction = () => {
      video.play().catch(() => {
        // Se falhar, pelo menos tenta novamente
        setTimeout(() => {
          video.play().catch(console.log)
        }, 1000)
      })
    }

    // Tenta tocar o vídeo quando há interação do usuário
    document.addEventListener('touchstart', handleUserInteraction, { once: true })
    document.addEventListener('click', handleUserInteraction, { once: true })

    // Tenta tocar o vídeo imediatamente
    const playVideo = () => {
      if (video.readyState >= 3) {
        video.play().catch(console.log)
      }
    }

    video.addEventListener('canplay', playVideo)
    playVideo()

    return () => {
      document.removeEventListener('touchstart', handleUserInteraction)
      document.removeEventListener('click', handleUserInteraction)
      video.removeEventListener('canplay', playVideo)
    }
  }, [])

  return (
    <section ref={containerRef} className="relative isolate min-h-[100svh] grid place-items-center overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        webkit-playsinline="true"
        x5-playsinline="true"
        className="absolute inset-0 w-full h-full object-cover scale-110 -z-40"
        style={{
          objectFit: 'cover',
          width: '100%',
          height: '100%'
        }}
        onLoadedData={(e) => {
          const video = e.target as HTMLVideoElement;
          video.play().catch(console.log);
        }}
      >
        <source src="/assets/videos/bg.mp4" type="video/mp4" />
      </video>
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40 dark:bg-black/50 -z-30" />

      {/* Layer 1 - Background gradients */}
      <div ref={layer1Ref} className="absolute inset-0 -z-20">
        <div className="absolute inset-0 bg-[radial-gradient(140%_90%_at_30%_-10%,rgba(255,0,120,0.08),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_70%_110%,rgba(0,120,255,0.06),transparent_50%)]" />
      </div>
      
      {/* Layer 2 - Noise texture */}
      <div ref={layer2Ref} className="absolute inset-0 -z-10 mix-blend-overlay opacity-[0.03]">
        <div className="h-full w-full [background-image:repeating-linear-gradient(0deg,rgba(255,255,255,0.5)_0_1px,transparent_1px_2px),repeating-linear-gradient(90deg,rgba(255,255,255,0.3)_0_1px,transparent_1px_3px)]" />
      </div>
      
      {/* Layer 3 - Floating elements */}
      <div ref={layer3Ref} className="absolute inset-0 -z-5">
        <div className="absolute left-[10%] top-[20%] h-32 w-32 rounded-full bg-gradient-to-br from-pink-200/20 to-transparent blur-xl" />
        <div className="absolute right-[15%] top-[60%] h-24 w-24 rounded-full bg-gradient-to-br from-blue-200/20 to-transparent blur-lg" />
        <div className="absolute left-[70%] bottom-[30%] h-40 w-40 rounded-full bg-gradient-to-br from-purple-200/15 to-transparent blur-2xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-24 text-center">
        <ScrollReveal>
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight bg-gradient-to-br from-white via-white/90 to-white/70 bg-clip-text text-transparent drop-shadow-lg">
            oi, turubom
          </h1>
        </ScrollReveal>
        
        <div className="flex items-center justify-center my-8">
          <div className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent w-32" />
          <div className="mx-4 h-1 w-1 rounded-full bg-white/60" />
          <div className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent w-32" />
        </div>
        
        <ScrollReveal y={16} delay={0.4}>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 font-light leading-relaxed max-w-3xl mx-auto drop-shadow-md">
            <TypeWriter text="não sei como falar o que sinto direito com você, não sei se você vai querer ler, mas abaixo está mais ou menos como estou me sentindo nos últimos meses" speedMs={28} />
          </p>
        </ScrollReveal>
        
        <ScrollReveal y={12} delay={0.4}>
          <div className="mt-12 text-sm text-white/70 font-mono drop-shadow-sm">
            ↓ continue rolando a página até o final
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
