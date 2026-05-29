'use client'

import { useEffect, useState } from 'react'
import LanguageToggle from '@/components/LanguageToggle'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-puente-navy/95 backdrop-blur-md border-b border-white/5 shadow-xl'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2.5 select-none" aria-label="Puente Financial — home">
          <svg width="32" viewBox="0 0 240 116" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: '#2D6BE4' }}>
            <path fill="currentColor" fillRule="evenodd" d="M8 108 L8 58 Q120 30 232 58 L232 108 Z M40 108 L40 78 A20 20 0 0 1 80 78 L80 108 Z M100 108 L100 78 A20 20 0 0 1 140 78 L140 108 Z M160 108 L160 78 A20 20 0 0 1 200 78 L200 108 Z" />
          </svg>
          <span className="text-white text-lg sm:text-xl tracking-tight leading-none" style={{ fontFamily: 'var(--font-brand)', fontWeight: 900, letterSpacing: '-0.02em' }}>
            Puente <span style={{ fontWeight: 600, color: '#93A8C4' }}>Financial</span>
          </span>
        </a>
        <LanguageToggle />
      </div>
    </nav>
  )
}
