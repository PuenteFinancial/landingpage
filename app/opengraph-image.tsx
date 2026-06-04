import { ImageResponse } from 'next/og'
import fs from 'fs'
import path from 'path'

export const alt = 'Puente Financial — Send money home. Build credit doing it.'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

function loadFont() {
  return fs.readFileSync(
    path.join(process.cwd(), 'public/fonts/SpaceGrotesk-Bold.ttf')
  ).buffer as ArrayBuffer
}

function loadBackground() {
  const buf = fs.readFileSync(path.join(process.cwd(), 'public', 'og-background.png'))
  return `data:image/png;base64,${buf.toString('base64')}`
}

export default function Image() {
  const fontData = loadFont()
  const bgSrc = loadBackground()

  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          display: 'flex',
          position: 'relative',
          fontFamily: "'Space Grotesk', sans-serif",
        }}
      >
        {/* Background image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={bgSrc}
          width={1200}
          height={630}
          style={{ position: 'absolute', top: 0, left: 0 }}
        />

        {/* Content overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: 1200,
            height: 630,
            display: 'flex',
            flexDirection: 'column',
            padding: '48px 72px 44px',
          }}
        >
          {/* Top row: logo + tag */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 32 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 9,
                  background: '#FFD23D',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 16,
                  fontWeight: 700,
                  color: '#15211F',
                }}
              >
                n
              </div>
              <span style={{ fontSize: 24, fontWeight: 700, color: '#15211F' }}>Puente</span>
            </div>
            <div
              style={{
                border: '1.5px solid #0FB1AC',
                borderRadius: 100,
                padding: '7px 18px',
                fontSize: 13,
                color: '#0FB1AC',
                letterSpacing: '0.07em',
                display: 'flex',
              }}
            >
              CREDIT CARD + REMITTANCES
            </div>
          </div>

          {/* Headline */}
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.05 }}>
            <div style={{ display: 'flex', fontSize: 76, fontWeight: 700 }}>
              <span style={{ color: '#15211F' }}>Send&nbsp;</span>
              <span style={{ color: '#0B8C88' }}>money.</span>
            </div>
            <div style={{ display: 'flex', fontSize: 76, fontWeight: 700 }}>
              <span style={{ color: '#15211F' }}>Build&nbsp;</span>
              <span style={{ color: '#2C79C2' }}>credit.</span>
            </div>
            <div style={{ display: 'flex', fontSize: 76, fontWeight: 700 }}>
              <span style={{ color: '#15211F' }}>Earn&nbsp;</span>
              <span style={{ color: '#F0703F' }}>rewards.</span>
            </div>
          </div>

          {/* Sub */}
          <div
            style={{
              fontSize: 19,
              color: '#6F7E7B',
              marginTop: 16,
              maxWidth: 580,
              lineHeight: 1.5,
              display: 'flex',
              flex: 1,
            }}
          >
            Every remittance you send through Puente counts toward your U.S. credit history. Most cards don't do that. Ours does.
          </div>

          {/* Badges */}
          <div style={{ display: 'flex', gap: 12, marginBottom: 8 }}>
            {[
              { label: '$5 flat fee', color: '#FFD23D' },
              { label: 'Real exchange rate', color: '#0FB1AC' },
              { label: 'No SSN to start', color: '#F0703F' },
            ].map((b) => (
              <div
                key={b.label}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  background: '#FFFFFF',
                  borderRadius: 100,
                  padding: '8px 16px',
                  fontSize: 17,
                  color: '#15211F',
                  fontWeight: 600,
                }}
              >
                <div style={{ width: 9, height: 9, borderRadius: '50%', background: b.color }} />
                {b.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [{ name: 'Space Grotesk', data: fontData, weight: 700, style: 'normal' as const }],
    }
  )
}
