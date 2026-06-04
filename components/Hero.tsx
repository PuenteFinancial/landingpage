'use client'

import { useLanguage } from '@/components/LanguageProvider'
import PhoneAppUI from '@/components/PhoneAppUI'
import CreditCardUI from '@/components/CreditCardUI'

const H1_COLORS = ['var(--mar-700)', 'var(--cielo)', 'var(--coral)']
const DOT_CLASSES = ['dot', 'dot dot--cielo', 'dot dot--coral']

export default function Hero() {
  const { t } = useLanguage()

  return (
    <header className="hero">
      <div className="hero-inner">
        <div className="hero-copy">
          <span className="eyebrow">{t.hero.eyebrow}</span>
          <h1 className="h1">
            {t.hero.h1.map((pair, i) => (
              <span key={i} style={{ display: 'block' }}>
                {pair[0]}{' '}
                <span style={{ color: H1_COLORS[i] }}>{pair[1]}</span>
              </span>
            ))}
          </h1>
          <p className="lede">{t.hero.sub}</p>
          <div className="hero-cta">
            <a className="btn btn--sol" href="/signup">{t.hero.cta1}</a>
            <a className="btn btn--ghost" href="#remittances">{t.hero.cta2} →</a>
          </div>
          <span className="hero-elig">
            <span className="idot">ID</span>
            {t.hero.elig}
          </span>
          <div className="hero-note">
            {t.hero.notes.map((note, i) => (
              <span key={i}>
                <span className={DOT_CLASSES[i]} />
                {note}
              </span>
            ))}
          </div>
        </div>
        <div className="hero-visual">
          <span className="blob blob--1" />
          <span className="blob blob--2" />
          <PhoneAppUI />
          <CreditCardUI
            variant="sol"
            style={{ position: 'absolute', right: '-6px', bottom: '34px', transform: 'rotate(-9deg)', width: '300px', zIndex: 3 }}
          />
        </div>
      </div>
    </header>
  )
}
