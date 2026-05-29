'use client'

import { useState } from 'react'
import { useLanguage } from '@/components/LanguageProvider'
import posthog from 'posthog-js'

type Status = 'idle' | 'loading' | 'success' | 'error'

interface Props {
  variant?: 'dark' | 'light'
}

function Spinner() {
  return (
    <svg className="animate-spin w-4 h-4 inline mr-2" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
    </svg>
  )
}

export default function WaitlistForm({ variant = 'dark' }: Props) {
  const { t, lang } = useLanguage()
  const [firstName, setFirstName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [monthlyAmount, setMonthlyAmount] = useState('')
  const [destination, setDestination] = useState('')
  const [remittanceProvider, setRemittanceProvider] = useState('')
  const [status, setStatus] = useState<Status>('idle')

  const isDark = variant === 'dark'

  const labelClass = `block text-sm font-medium mb-1.5 ${isDark ? 'text-gray-300' : 'text-gray-700'}`

  const inputClass = `w-full px-4 py-3 rounded-xl text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-puente-sky/50 ${
    isDark
      ? 'bg-white/10 border border-white/15 text-white placeholder-gray-500 focus:border-puente-sky focus:bg-white/15'
      : 'bg-white border border-gray-200 text-gray-900 placeholder-gray-400 focus:border-puente-sky'
  }`

  const selectClass = `${inputClass} cursor-pointer appearance-none ${
    isDark ? '[&>option]:bg-[#0F2A4A] [&>option]:text-white' : '[&>option]:bg-white [&>option]:text-gray-900'
  }`

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    const distinctId = posthog.get_distinct_id()
    const sessionId = posthog.get_session_id()

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-POSTHOG-DISTINCT-ID': distinctId ?? '',
          'X-POSTHOG-SESSION-ID': sessionId ?? '',
        },
        body: JSON.stringify({
          first_name: firstName,
          phone,
          email: email || null,
          monthly_send_amount: monthlyAmount,
          destination_country: destination,
          remittance_provider: remittanceProvider,
          lang,
        }),
      })
      if (!res.ok) throw new Error('Failed')

      posthog.identify(phone, {
        first_name: firstName,
        email: email || undefined,
        language_preference: lang,
      })
      posthog.capture('waitlist_form_submitted', {
        destination_country: destination,
        monthly_send_amount: monthlyAmount,
        remittance_provider: remittanceProvider,
        language: lang,
      })

      setStatus('success')
    } catch (err) {
      posthog.captureException(err)
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="text-center py-6">
        <div className="w-14 h-14 rounded-full bg-green-500/15 border border-green-500/30 flex items-center justify-center mx-auto mb-4">
          <svg className="w-7 h-7 text-green-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </div>
        <h3 className={`font-display font-bold text-xl mb-2 ${isDark ? 'text-white' : 'text-puente-navy'}`}>
          {t.form.successTitle}
        </h3>
        <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
          {t.form.successMessage}
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className={labelClass}>{t.form.firstName}</label>
        <input
          type="text"
          required
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder={t.form.firstNamePlaceholder}
          className={inputClass}
          disabled={status === 'loading'}
        />
      </div>

      <div>
        <label className={labelClass}>{t.form.phone}</label>
        <input
          type="tel"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder={t.form.phonePlaceholder}
          className={inputClass}
          disabled={status === 'loading'}
        />
      </div>

      <div>
        <label className={labelClass}>{t.form.email}</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t.form.emailPlaceholder}
          className={inputClass}
          disabled={status === 'loading'}
        />
      </div>

      <div>
        <label className={labelClass}>{t.form.monthlyAmount}</label>
        <div className="relative">
          <select
            required
            value={monthlyAmount}
            onChange={(e) => setMonthlyAmount(e.target.value)}
            className={selectClass}
            disabled={status === 'loading'}
          >
            {t.form.monthlyAmountOptions.map((opt) => (
              <option key={opt.value} value={opt.value} disabled={opt.value === ''}>
                {opt.label}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
            <svg className={`w-4 h-4 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      <div>
        <label className={labelClass}>{t.form.destination}</label>
        <div className="relative">
          <select
            required
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className={selectClass}
            disabled={status === 'loading'}
          >
            {t.form.destinationOptions.map((opt) => (
              <option key={opt.value} value={opt.value} disabled={opt.value === ''}>
                {opt.label}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
            <svg className={`w-4 h-4 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      <div>
        <label className={labelClass}>{t.form.remittanceProvider}</label>
        <div className="relative">
          <select
            required
            value={remittanceProvider}
            onChange={(e) => setRemittanceProvider(e.target.value)}
            className={selectClass}
            disabled={status === 'loading'}
          >
            {t.form.remittanceProviderOptions.map((opt) => (
              <option key={opt.value} value={opt.value} disabled={opt.value === ''}>
                {opt.label}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
            <svg className={`w-4 h-4 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-puente-sky hover:bg-blue-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-4 rounded-full transition-colors text-base shadow-lg shadow-puente-sky/25 mt-2"
      >
        {status === 'loading' ? (
          <>
            <Spinner />
            {t.form.submitting}
          </>
        ) : (
          t.form.submit
        )}
      </button>

      {status === 'error' && (
        <p className="text-red-400 text-sm text-center mt-2">{t.form.errorMessage}</p>
      )}
    </form>
  )
}
