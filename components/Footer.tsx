'use client'

import { useLanguage } from '@/components/LanguageProvider'
import LanguageToggle from '@/components/LanguageToggle'

export default function Footer() {
  const { t, lang } = useLanguage()

  return (
    <footer className="footer">
      <div className="footer-inner" style={{ gridTemplateColumns: '1.4fr 1fr', alignItems: 'start' }}>
        <div>
          <a href="/" className="brand" aria-label="Puente Financial — home">
            <span className="arch" aria-hidden="true" />
            <span>Puente</span>
          </a>
          <p style={{ marginTop: 16, fontSize: 14, maxWidth: 320, color: '#9aa4a1' }}>{t.footer.tagline}</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, alignItems: 'flex-start' }}>
          <LanguageToggle />
        </div>
      </div>
      <div className="footer-bottom">
        <span>{t.footer.rights}</span>
        <span>{lang === 'es' ? 'Español' : 'English'}</span>
      </div>
    </footer>
  )
}
