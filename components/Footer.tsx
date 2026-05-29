'use client'

import { useLanguage } from '@/components/LanguageProvider'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-puente-navy border-t border-white/10">
      {/* Main footer row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="font-display font-extrabold text-white text-lg tracking-tight">
              {t.nav.brand}
            </p>
            <p className="text-gray-400 text-sm mt-1">{t.footer.tagline}</p>
          </div>
          <div className="flex items-center gap-6">
            <a href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
              {t.footer.privacy}
            </a>
            <a href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
              {t.footer.terms}
            </a>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-3 text-center">
          <p className="text-gray-600 text-xs leading-relaxed">
            {t.footer.disclaimer}
          </p>
          <p className="text-gray-600 text-xs">{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
