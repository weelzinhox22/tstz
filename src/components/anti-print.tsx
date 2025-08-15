'use client';

import { useEffect } from 'react';

export function AntiPrint() {
  useEffect(() => {
    // Disable right-click context menu
    const disableRightClick = (e: MouseEvent) => {
      e.preventDefault();
      return false;
    };

    // Disable common screenshot shortcuts
    const disableShortcuts = (e: KeyboardEvent) => {
      // Print Screen
      if (e.key === 'PrintScreen') {
        e.preventDefault();
        return false;
      }
      
      // Ctrl+P (Print)
      if (e.ctrlKey && e.key === 'p') {
        e.preventDefault();
        return false;
      }
      
      // Ctrl+S (Save)
      if (e.ctrlKey && e.key === 's') {
        e.preventDefault();
        return false;
      }
      
      // Ctrl+Shift+I (DevTools)
      if (e.ctrlKey && e.shiftKey && e.key === 'I') {
        e.preventDefault();
        return false;
      }
      
      // F12 (DevTools)
      if (e.key === 'F12') {
        e.preventDefault();
        return false;
      }
      
      // Ctrl+U (View Source)
      if (e.ctrlKey && e.key === 'u') {
        e.preventDefault();
        return false;
      }
      
      // Ctrl+Shift+C (Inspect Element)
      if (e.ctrlKey && e.shiftKey && e.key === 'C') {
        e.preventDefault();
        return false;
      }
      
      // Ctrl+Shift+J (Console)
      if (e.ctrlKey && e.shiftKey && e.key === 'J') {
        e.preventDefault();
        return false;
      }
    };

    // Disable text selection
    const disableSelection = () => {
      const bodyStyle = document.body.style as CSSStyleDeclaration & {
        webkitUserSelect?: string;
        mozUserSelect?: string;
        msUserSelect?: string;
      };
      bodyStyle.userSelect = 'none';
      bodyStyle.webkitUserSelect = 'none';
      bodyStyle.mozUserSelect = 'none';
      bodyStyle.msUserSelect = 'none';
    };

    // Detect dev tools
    const detectDevTools = () => {
      const threshold = 160;
      
      setInterval(() => {
        if (window.outerHeight - window.innerHeight > threshold || 
            window.outerWidth - window.innerWidth > threshold) {
          document.body.innerHTML = `
            <div style="
              position: fixed;
              top: 0;
              left: 0;
              width: 100vw;
              height: 100vh;
              background: black;
              color: white;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 24px;
              font-family: Arial, sans-serif;
              z-index: 999999;
            ">
              ⚠️ DevTools detectado. Página protegida.
            </div>
          `;
        }
      }, 500);
    };

    // Enhanced mobile screenshot protection
    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.body.style.filter = 'blur(20px)';
        document.body.style.opacity = '0.1';
        
        // Show warning overlay
        const overlay = document.createElement('div');
        overlay.id = 'screenshot-warning';
        overlay.style.cssText = `
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: black;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          font-family: Arial, sans-serif;
          z-index: 999999;
          text-align: center;
          padding: 20px;
        `;
        overlay.innerHTML = '🚫<br/>Screenshot bloqueado<br/>Página protegida';
        document.body.appendChild(overlay);
        
        // Vibrate if supported
        if (navigator.vibrate) {
          navigator.vibrate([200, 100, 200]);
        }
      } else {
        document.body.style.filter = 'none';
        document.body.style.opacity = '1';
        
        // Remove warning overlay
        const overlay = document.getElementById('screenshot-warning');
        if (overlay) {
          overlay.remove();
        }
      }
    };

    // Mobile-specific screenshot detection
    const detectMobileScreenshot = () => {
      // Detect volume buttons combination (common screenshot gesture)
      let volumeUpPressed = false;
      let volumeDownPressed = false;
      let powerPressed = false;
      
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'VolumeUp') volumeUpPressed = true;
        if (e.key === 'VolumeDown') volumeDownPressed = true;
        if (e.key === 'Power') powerPressed = true;
        
        // Screenshot gesture detected
        if ((volumeUpPressed && powerPressed) || (volumeDownPressed && powerPressed)) {
          e.preventDefault();
          document.body.style.visibility = 'hidden';
          
          setTimeout(() => {
            document.body.style.visibility = 'visible';
          }, 1000);
          
          if (navigator.vibrate) {
            navigator.vibrate([300, 200, 300, 200, 300]);
          }
        }
      };
      
      const handleKeyUp = (e: KeyboardEvent) => {
        if (e.key === 'VolumeUp') volumeUpPressed = false;
        if (e.key === 'VolumeDown') volumeDownPressed = false;
        if (e.key === 'Power') powerPressed = false;
      };
      
      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('keyup', handleKeyUp);
      
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
        document.removeEventListener('keyup', handleKeyUp);
      };
    };

    // Touch gesture detection for screenshots
    const detectTouchGestures = () => {
      let touches: Touch[] = [];
      
      const handleTouchStart = (e: TouchEvent) => {
        touches = Array.from(e.touches);
        
        // 3-finger gesture (common in some devices)
        if (touches.length >= 3) {
          e.preventDefault();
          document.body.style.filter = 'blur(30px)';
          document.body.style.opacity = '0.1';
          
          setTimeout(() => {
            document.body.style.filter = 'none';
            document.body.style.opacity = '1';
          }, 2000);
          
          if (navigator.vibrate) {
            navigator.vibrate([500]);
          }
        }
      };
      
      document.addEventListener('touchstart', handleTouchStart, { passive: false });
      
      return () => {
        document.removeEventListener('touchstart', handleTouchStart);
      };
    };

    // Add event listeners
    document.addEventListener('contextmenu', disableRightClick);
    document.addEventListener('keydown', disableShortcuts);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    // Apply protections
    disableSelection();
    detectDevTools();
    const cleanupMobile = detectMobileScreenshot();
    const cleanupTouch = detectTouchGestures();

    // Console warning
    console.clear();
    console.log('%c⚠️ AVISO DE SEGURANÇA', 'color: red; font-size: 20px; font-weight: bold;');
    console.log('%cEsta página está protegida contra capturas de tela e impressão.', 'color: red; font-size: 14px;');
    console.log('%cQualquer tentativa de violação será detectada.', 'color: red; font-size: 14px;');

    // Cleanup
    return () => {
      document.removeEventListener('contextmenu', disableRightClick);
      document.removeEventListener('keydown', disableShortcuts);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      
      // Cleanup mobile protections
      cleanupMobile();
      cleanupTouch();
      
      // Reset styles
      const bodyStyle = document.body.style as CSSStyleDeclaration & {
        webkitUserSelect?: string;
        mozUserSelect?: string;
        msUserSelect?: string;
      };
      bodyStyle.userSelect = 'auto';
      bodyStyle.webkitUserSelect = 'auto';
      bodyStyle.mozUserSelect = 'auto';
      bodyStyle.msUserSelect = 'auto';
      document.body.style.filter = 'none';
      document.body.style.opacity = '1';
      document.body.style.visibility = 'visible';
      
      // Remove any remaining overlays
      const overlay = document.getElementById('screenshot-warning');
      if (overlay) {
        overlay.remove();
      }
    };
  }, []);

  return null;
}
