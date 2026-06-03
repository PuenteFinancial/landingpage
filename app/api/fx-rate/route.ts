import { NextResponse } from 'next/server'
import { FX_RATE } from '@/lib/fx'

export async function GET() {
  try {
    const res = await fetch('https://wise.com/rates/live?source=USD&target=MXN', {
      next: { revalidate: 1800 },
    })
    const data = await res.json()
    const rate = data?.[0]?.rate
    if (!rate || typeof rate !== 'number') throw new Error('Bad response')
    return NextResponse.json({ rate })
  } catch {
    return NextResponse.json({ rate: FX_RATE, fallback: true })
  }
}
