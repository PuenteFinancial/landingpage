import { NextRequest, NextResponse } from 'next/server'
import { FX_RATE } from '@/lib/fx'

export async function GET(req: NextRequest) {
  const target = req.nextUrl.searchParams.get('target') || 'MXN'
  try {
    const res = await fetch(`https://wise.com/rates/live?source=USD&target=${target}`, {
      next: { revalidate: 1800 },
    })
    const data = await res.json()
    const rate = data?.[0]?.rate
    if (!rate || typeof rate !== 'number') throw new Error('Bad response')
    return NextResponse.json({ rate, currency: target })
  } catch {
    return NextResponse.json({ rate: FX_RATE, currency: 'MXN', fallback: true })
  }
}
