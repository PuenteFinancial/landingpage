import { NextRequest, NextResponse } from 'next/server'
import { getSupabaseClient } from '@/lib/supabase'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { first_name, whatsapp, monthly_send_amount, destination_country, lang } = body

    if (!first_name?.trim()) {
      return NextResponse.json({ error: 'First name is required' }, { status: 400 })
    }
    if (!whatsapp?.trim()) {
      return NextResponse.json({ error: 'WhatsApp number is required' }, { status: 400 })
    }
    if (!monthly_send_amount) {
      return NextResponse.json({ error: 'Monthly send amount is required' }, { status: 400 })
    }
    if (!destination_country) {
      return NextResponse.json({ error: 'Destination country is required' }, { status: 400 })
    }

    const url = new URL(req.url)
    const utm_source = req.headers.get('referer')
      ? new URL(req.headers.get('referer')!).searchParams.get('utm_source')
      : null

    const supabase = getSupabaseClient()
    const { error } = await supabase.from('waitlist').insert({
      first_name: first_name.trim(),
      whatsapp: whatsapp.trim(),
      monthly_send_amount,
      destination_country,
      language_preference: lang || 'en',
      utm_source: url.searchParams.get('utm_source') ?? utm_source,
      utm_medium: url.searchParams.get('utm_medium'),
      utm_campaign: url.searchParams.get('utm_campaign'),
      user_agent: req.headers.get('user-agent'),
    })

    if (error) {
      console.error('Supabase insert error:', error)
      return NextResponse.json({ error: 'Failed to join waitlist' }, { status: 500 })
    }

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (err) {
    console.error('Waitlist API error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
