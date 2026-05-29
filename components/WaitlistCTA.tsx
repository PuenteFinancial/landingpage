'use client'

import { useLanguage } from '@/components/LanguageProvider'
import WaitlistForm from '@/components/WaitlistForm'

export default function WaitlistCTA() {
  const { t } = useLanguage()

  return (
    <section id="waitlist" className="bg-puente-navy py-20 md:py-32 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(45, 107, 228, 0.12) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-lg mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-display font-extrabold text-white leading-tight mb-4">
          {t.waitlistCTA.headline}
        </h2>
        <p className="text-gray-300 text-lg mb-10">
          {t.waitlistCTA.subheadline}
        </p>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 mb-5 text-left">
          <WaitlistForm variant="dark" />
        </div>

        <p className="text-gray-500 text-sm">{t.waitlistCTA.trustLine}</p>
      </div>
    </section>
  )
}
