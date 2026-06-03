'use client'

import { useLanguage } from '@/components/LanguageProvider'
import WaitlistForm from '@/components/WaitlistForm'

export default function WaitlistSection() {
  const { t } = useLanguage()
  const s = t.wl

  return (
    <section id="waitlist" className="waitlist">
      <div className="wl-inner">
        <div className="wl-copy">
          <span className="eyebrow">{s.eyebrow}</span>
          <h2 className="h2">{s.h2}</h2>
          <p className="lede">{s.sub}</p>
          <ul className="wl-trustline">
            {s.points.map((p, i) => (
              <li key={i}>
                <span className="tick">✓</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
        <WaitlistForm />
      </div>
    </section>
  )
}
