'use client'

import { useEffect, useState } from 'react'
import { useLanguage } from '@/components/LanguageProvider'
import LanguageToggle from '@/components/LanguageToggle'

export default function Nav() {
  const { t } = useLanguage()
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
        <span className="font-display font-extrabold text-white text-lg sm:text-xl tracking-tight select-none">
          {t.nav.brand}
        </span>
        <LanguageToggle />
      </div>
    </nav>
  )
}
