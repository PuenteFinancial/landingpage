'use client'

import { useLanguage } from '@/components/LanguageProvider'
import CreditCardUI from '@/components/CreditCardUI'

export default function CardSection() {
  const { t } = useLanguage()

  return (
    <section id="card" className="section section--surface">
      <div className="section-inner">
        <div className="feature feature--flip feature--card">
          <div className="feature-media" style={{ display: 'flex', justifyContent: 'center' }}>
            <CreditCardUI variant="ink" style={{ transform: 'rotate(4deg)', width: '420px' }} />
          </div>
          <div className="feature-copy">
            <span className="eyebrow">{t.card.eyebrow}</span>
            <h2 className="h2">
              {t.card.h2.map((pair, i) => (
                <span key={i} style={{ display: 'block' }}>
                  {pair[0]}
                  <span style={{ color: i === 0 ? 'var(--cielo)' : 'var(--coral)' }}>{pair[1]}</span>
                </span>
              ))}
            </h2>
            <p className="lede">{t.card.sub}</p>
            <ul className="ticks">
              {t.card.bullets.map((b, i) => (
                <li key={i}>
                  <span className="tick">✓</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <div className="need">
              <span className="nic">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="M3 10h18" />
                </svg>
              </span>
              <span className="ntxt">
                <b>{t.card.needTitle}</b>
                {t.card.need}
              </span>
            </div>
            <div style={{ marginTop: 6 }}>
              <a className="btn btn--sol" href="#waitlist">{t.card.cta}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
