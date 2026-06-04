'use client'

import { useLanguage } from '@/components/LanguageProvider'
import LanguageToggle from '@/components/LanguageToggle'

export default function Nav() {
  const { t } = useLanguage()

  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="/" className="brand" aria-label="Puente Financial — home">
          <span className="arch" aria-hidden="true" />
          <span>Puente</span>
        </a>
        <div className="nav-links">
          <a href="#remittances">{t.nav.remit}</a>
          <a href="#card">{t.nav.card}</a>
        </div>
        <div className="nav-right">
          <LanguageToggle />
          <a className="btn btn--sol btn--sm" href="/signup">{t.nav.cta}</a>
        </div>
      </div>
    </nav>
  )
}
