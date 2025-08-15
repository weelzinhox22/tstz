'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function SpotifyPlaylist() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const iframeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const iframe = iframeRef.current;

    if (!section || !title || !subtitle || !iframe) return;

    // Initial state
    gsap.set([title, subtitle, iframe], { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    });

    // Animation timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    });

    tl.to(title, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      ease: 'power2.out'
    })
    .to(subtitle, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.6,
      ease: 'power2.out'
    }, '-=0.4')
    .to(iframe, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      ease: 'back.out(1.7)'
    }, '-=0.3');

    // Hover effect for iframe container
    const handleMouseEnter = () => {
      gsap.to(iframe, {
        scale: 1.02,
        duration: 0.3,
        ease: 'power2.out'
      });
    };

    const handleMouseLeave = () => {
      gsap.to(iframe, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out'
      });
    };

    iframe.addEventListener('mouseenter', handleMouseEnter);
    iframe.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      iframe.removeEventListener('mouseenter', handleMouseEnter);
      iframe.removeEventListener('mouseleave', handleMouseLeave);
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === section) {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center py-20 px-6"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-pink-900/5 to-blue-900/10 dark:from-purple-500/5 dark:via-pink-500/3 dark:to-blue-500/5" />
      
      {/* Floating music notes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${3 + i * 0.5}s`
            }}
          >
            <span className="text-2xl opacity-20 dark:opacity-10">
              {i % 4 === 0 ? '♫' : i % 4 === 1 ? '♪' : i % 4 === 2 ? '♬' : '♩'}
            </span>
          </div>
        ))}
      </div>
      
    

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Title */}
        <h2 
          ref={titleRef}
          className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 dark:from-purple-400 dark:via-pink-400 dark:to-blue-400 bg-clip-text text-transparent"
        >
          Músicas que fazem eu
          <br />
          lembrar de você
        </h2>

        {/* Subtitle */}
        <p 
          ref={subtitleRef}
          className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Cada música tem algo que me lembra você
        </p>

        {/* Spotify Embed */}
        <div 
          ref={iframeRef}
          className="relative max-w-2xl mx-auto"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-border/20 bg-card/50 backdrop-blur-sm p-4">
            <iframe 
              data-testid="embed-iframe" 
              style={{ borderRadius: '12px' }} 
              src="https://open.spotify.com/embed/playlist/3n2hmz3TR2aYjvX8Uqnwb6?utm_source=generator&theme=0" 
              width="100%" 
              height="352" 
              frameBorder="0" 
              allowFullScreen 
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
              loading="lazy"
              className="w-full"
            />
          </div>
          
          {/* Glow effect */}
          <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-blue-600/20 rounded-3xl blur-xl opacity-30 -z-10" />
        </div>

        {/* Bottom text */}
        <p className="text-lg text-muted-foreground/70 mt-8 italic">
        &quot;geleiras vão derreter, estrelas vão se apagar e eu pensando em você...&quot;
        </p>
      </div>
    </section>
  );
}
