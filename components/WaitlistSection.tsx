'use client'

import { useLanguage } from '@/components/LanguageProvider'

export default function WaitlistSection() {
  const { t } = useLanguage()
  const s = t.wl

  return (
    <section id="waitlist" className="waitlist">
      <div className="wl-inner" style={{ gridTemplateColumns: '1fr', justifyItems: 'center', textAlign: 'center' }}>
        <div className="wl-copy" style={{ alignItems: 'center', maxWidth: 560 }}>
          <span className="eyebrow">{s.eyebrow}</span>
          <h2 className="h2">{s.h2}</h2>
          <p className="lede">{s.sub}</p>
          <ul className="wl-trustline" style={{ alignItems: 'flex-start' }}>
            {s.points.map((p, i) => (
              <li key={i}>
                <span className="tick">✓</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
          <div style={{ marginTop: 10 }}>
            <a className="btn btn--sol" href="/signup" style={{ fontSize: 18, padding: '16px 32px' }}>
              {s.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
