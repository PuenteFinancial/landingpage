import { Translations } from '@/lib/translations'

type Props = { t: Translations['phone'] }

const CHART_PTS: [number, number][] = [
  [8, 72], [55, 63], [102, 54], [149, 43], [196, 34], [243, 24], [286, 13],
]
const LINE = CHART_PTS.map((p) => p.join(',')).join(' ')
const AREA = `M${CHART_PTS[0][0]},88 L${LINE} L${CHART_PTS[6][0]},88 Z`

export default function CreditPhoneUI({ t }: Props) {
  return (
    <div className="cphone">
      <div className="cphone-notch" />
      <div className="cphone-screen">
        {/* greeting */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '26px 20px 4px' }}>
          <div style={{ fontWeight: 600, fontSize: 15 }}>{t.greeting} <b>{t.name}</b></div>
          <div className="avatar">M</div>
        </div>

        {/* score card */}
        <div style={{ margin: '12px 16px 0', background: 'var(--mar-900)', color: '#eafffd', borderRadius: 20, padding: '16px 16px 8px', overflow: 'hidden' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 9.5, letterSpacing: '.14em', textTransform: 'uppercase', opacity: 0.75 }}>{t.scoreLabel}</div>
              <div style={{ fontSize: 40, fontWeight: 700, letterSpacing: '-.02em', marginTop: 2 }}>712</div>
            </div>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontFamily: 'var(--mono)', fontWeight: 700, fontSize: 13, color: 'var(--sol)', background: 'rgba(255,210,61,.14)', borderRadius: 999, padding: '5px 9px' }}>
              {t.delta}
            </span>
          </div>
          <svg viewBox="0 0 300 92" width="100%" height="84" style={{ display: 'block', marginTop: 4 }}>
            <defs>
              <linearGradient id="cpFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FFD23D" stopOpacity={0.3} />
                <stop offset="100%" stopColor="#FFD23D" stopOpacity={0} />
              </linearGradient>
            </defs>
            <path d={AREA} fill="url(#cpFill)" />
            <polyline points={LINE} fill="none" stroke="var(--sol)" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx={CHART_PTS[6][0]} cy={CHART_PTS[6][1]} r="6.5" fill="var(--sol)" stroke="#0E4D49" strokeWidth="2.5" />
          </svg>
        </div>

        {/* remittances list */}
        <div style={{ padding: '16px 20px 0', flex: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
            <span style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--muted)' }}>{t.remitLabel}</span>
            <span style={{ fontFamily: 'var(--mono)', fontSize: 10.5, color: 'var(--mar-700)', fontWeight: 700 }}>{t.remitNote}</span>
          </div>
          {t.sends.map((s, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 11, padding: '9px 0', borderBottom: i === 0 ? '1px solid var(--line-2)' : 'none' }}>
              <span style={{ width: 32, height: 32, borderRadius: 10, flex: 'none', background: 'rgba(15,177,172,.14)', color: '#0B8C88', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}>↗</span>
              <div style={{ lineHeight: 1.3, flex: 1 }}>
                <div style={{ fontWeight: 600, fontSize: 14 }}>{s.who}</div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 10.5, color: 'var(--muted)' }}>{t.reported}</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontFamily: 'var(--mono)', fontWeight: 700, fontSize: 13 }}>{s.amt}</div>
                <div style={{ fontSize: 10.5, color: '#0B8C88', fontWeight: 600, whiteSpace: 'nowrap' }}>{t.onTime}</div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ padding: '8px 16px 18px' }}>
          <div style={{ background: 'var(--sol)', color: 'var(--sol-ink)', borderRadius: 999, padding: 13, textAlign: 'center', fontWeight: 600, boxShadow: '0 8px 20px rgba(255,210,61,.45)' }}>
            {t.cta}
          </div>
        </div>
      </div>
    </div>
  )
}
