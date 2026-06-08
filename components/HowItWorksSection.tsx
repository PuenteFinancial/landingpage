'use client'

import { useLanguage } from '@/components/LanguageProvider'

const STEP_COLORS = [
  { bg: 'var(--sol)', fg: 'var(--sol-ink)' },
  { bg: 'var(--mar)', fg: '#fff' },
  { bg: 'var(--coral)', fg: '#fff' },
]

export default function HowItWorksSection() {
  const { t } = useLanguage()
  const h = t.how

  return (
    <section id="how" className="section section--cream">
      <div className="section-inner">
        <div className="how-head">
          <span className="eyebrow">{h.eyebrow}</span>
          <h2 className="h2">
            {h.h2.map((pair, i) => (
              <span key={i}>
                {pair[0]}
                <span style={{ color: 'var(--mar-700)' }}>{pair[1]}</span>
              </span>
            ))}
          </h2>
          <p className="lede">{h.sub}</p>
        </div>

        <div className="how-steps">
          {h.steps.map((step, i) => (
            <div className="how-step" key={i}>
              <span className="how-num" style={{ background: STEP_COLORS[i].bg, color: STEP_COLORS[i].fg }}>
                {i + 1}
              </span>
              <h3 className="h3">{step.t}</h3>
              <p>{step.d}</p>
            </div>
          ))}
        </div>

        <div className="how-foot">
          <div className="how-privacy">
            <span className="hp-ic">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="4" y="11" width="16" height="9" rx="2" />
                <path d="M8 11V8a4 4 0 0 1 8 0v3" />
              </svg>
            </span>
            <span className="hp-txt">
              <b>{h.privacyTitle}</b>
              {h.privacy}
            </span>
          </div>
          <div className="how-side">
            <div className="need">
              <span className="nic">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="M3 10h18" />
                </svg>
              </span>
              <span className="ntxt">
                <b>{h.eligTitle}</b>
                {h.elig}
              </span>
            </div>
            <a className="btn btn--sol" href="/signup">{h.cta}</a>
          </div>
        </div>
      </div>
    </section>
  )
}
