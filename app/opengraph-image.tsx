import { ImageResponse } from 'next/og'
import fs from 'fs'
import path from 'path'

export const alt = 'Puente Financial — Envía dinero. Crea crédito. Gana recompensas.'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

function load(file: string) {
  return fs.readFileSync(path.join(process.cwd(), file))
}

export default function Image() {
  const bg = `data:image/png;base64,${load('public/og-background.png').toString('base64')}`
  const groteskData = load('public/fonts/SpaceGrotesk-Bold.ttf').buffer as ArrayBuffer
  const monoData = load('public/fonts/SpaceMono-Bold.ttf').buffer as ArrayBuffer

  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          position: 'relative',
          fontFamily: "'Space Grotesk', sans-serif",
        }}
      >
        {/* Background */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={bg} width={1200} height={630} style={{ position: 'absolute', top: 0, left: 0 }} />

        {/* Top row: brand + pill */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'relative' }}>
          {/* Brand lockup */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div style={{
              width: 60, height: 60, borderRadius: 16, background: '#FFD23D',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <svg width="40" height="40" viewBox="0 0 100 100" fill="none">
                <path d="M34 84 L34 48 A16 16 0 0 1 66 48 L66 84" stroke="#0FB1AC" strokeWidth="11" strokeLinecap="butt" />
              </svg>
            </div>
            <span style={{ fontSize: 34, fontWeight: 700, letterSpacing: '-0.02em', color: '#15211F' }}>
              Puente
            </span>
          </div>
          {/* Pill */}
          <span style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: 16, fontWeight: 700, letterSpacing: '0.08em',
            textTransform: 'uppercase', color: '#0B8C88',
            background: 'rgba(15,177,172,0.10)',
            border: '1.5px solid rgba(15,177,172,0.25)',
            padding: '11px 18px', borderRadius: 999,
            display: 'flex',
          }}>
            Crédito + Remesas
          </span>
        </div>

        {/* Mid: headline + sub */}
        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 780, position: 'relative' }}>
          {/* H1 — 3 lines */}
          <div style={{ display: 'flex', flexDirection: 'column', fontSize: 82, fontWeight: 700, lineHeight: 1.0, letterSpacing: '-0.03em', color: '#15211F' }}>
            <div style={{ display: 'flex' }}>
              <span>Envía&nbsp;</span><span style={{ color: '#0B8C88' }}>dinero.</span>
            </div>
            <div style={{ display: 'flex' }}>
              <span>Crea&nbsp;</span><span style={{ color: '#2C79C2' }}>crédito.</span><span>&nbsp;Gana</span>
            </div>
            <div style={{ display: 'flex' }}>
              <span style={{ color: '#F0703F' }}>recompensas.</span>
            </div>
          </div>
          {/* Sub */}
          <div style={{
            marginTop: 26, fontSize: 27, lineHeight: 1.4,
            color: '#33403D', maxWidth: 680, display: 'flex',
          }}>
            Cada remesa que envías a través de Puente cuenta para tu historial crediticio en EE. UU. Tarifa fija de $5 al tipo de cambio real.
          </div>
        </div>

        {/* Bottom: chips */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, position: 'relative' }}>
          {[
            { label: 'Tarifa fija de $5',    dot: '#0FB1AC' },
            { label: 'Tipo de cambio real',  dot: '#2C79C2' },
            { label: 'Sin SSN para empezar', dot: '#F0703F' },
          ].map((c) => (
            <div key={c.label} style={{
              display: 'flex', alignItems: 'center', gap: 11,
              fontSize: 20, fontWeight: 600, color: '#15211F',
              background: '#FFFFFF', border: '1.5px solid #E4E6DC',
              padding: '13px 22px', borderRadius: 999,
            }}>
              <div style={{ width: 13, height: 13, borderRadius: '50%', background: c.dot }} />
              {c.label}
            </div>
          ))}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: 'Space Grotesk', data: groteskData, weight: 700, style: 'normal' },
        { name: 'Space Mono',    data: monoData,    weight: 700, style: 'normal' },
      ],
    }
  )
}
