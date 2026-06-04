import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Puente Financial — Send money home. Build credit doing it.'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: '#f5f2eb',
          display: 'flex',
          flexDirection: 'column',
          padding: '56px 80px',
        }}
      >
        {/* Top row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 40 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div
              style={{
                width: 38,
                height: 38,
                borderRadius: '50%',
                background: '#f5c842',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 17,
                fontWeight: 700,
                color: '#1a2e2b',
              }}
            >
              n
            </div>
            <span style={{ fontSize: 26, fontWeight: 700, color: '#1a2e2b' }}>Puente</span>
          </div>
          <div
            style={{
              border: '1.5px solid #2ec4b6',
              borderRadius: 100,
              padding: '8px 20px',
              fontSize: 13,
              color: '#2ec4b6',
              letterSpacing: '0.08em',
              display: 'flex',
            }}
          >
            CREDIT CARD + REMITTANCES
          </div>
        </div>

        {/* Headline */}
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.05 }}>
          <div style={{ display: 'flex', fontSize: 76, fontWeight: 700 }}>
            <span style={{ color: '#1a2e2b' }}>Send&nbsp;</span>
            <span style={{ color: '#1a2e2b' }}>money.</span>
          </div>
          <div style={{ display: 'flex', fontSize: 76, fontWeight: 700 }}>
            <span style={{ color: '#1a2e2b' }}>Build&nbsp;</span>
            <span style={{ color: '#2ec4b6' }}>credit.</span>
          </div>
          <div style={{ display: 'flex', fontSize: 76, fontWeight: 700, color: '#f4845f' }}>
            Earn rewards.
          </div>
        </div>

        {/* Sub */}
        <div
          style={{
            fontSize: 22,
            color: '#5a6e6a',
            marginTop: 22,
            maxWidth: 680,
            lineHeight: 1.45,
            display: 'flex',
            flex: 1,
          }}
        >
          Every remittance you send through Puente counts toward your U.S. credit history. Most cards don't do that. Ours does.
        </div>

        {/* Badges */}
        <div style={{ display: 'flex', gap: 28 }}>
          {[
            { label: '$5 flat fee', color: '#f5c842' },
            { label: 'Real exchange rate', color: '#2ec4b6' },
            { label: 'No SSN to start', color: '#1a2e2b' },
          ].map((b) => (
            <div key={b.label} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 19, color: '#1a2e2b', fontWeight: 500 }}>
              <div style={{ width: 10, height: 10, borderRadius: '50%', background: b.color }} />
              {b.label}
            </div>
          ))}
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  )
}
