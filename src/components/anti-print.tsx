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
      const bodyStyle = document.body.style as any;
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

    // Blur content when window loses focus (potential screenshot)
    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.body.style.filter = 'blur(10px)';
      } else {
        document.body.style.filter = 'none';
      }
    };

    // Add event listeners
    document.addEventListener('contextmenu', disableRightClick);
    document.addEventListener('keydown', disableShortcuts);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    // Apply protections
    disableSelection();
    detectDevTools();

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
      
      // Reset styles
      const bodyStyle = document.body.style as any;
      bodyStyle.userSelect = 'auto';
      bodyStyle.webkitUserSelect = 'auto';
      bodyStyle.mozUserSelect = 'auto';
      bodyStyle.msUserSelect = 'auto';
      document.body.style.filter = 'none';
    };
  }, []);

  return null;
}
