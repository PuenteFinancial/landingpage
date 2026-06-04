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
            <div style={{ marginTop: 6 }}>
              <a className="btn btn--sol" href="/signup">{t.card.cta}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
