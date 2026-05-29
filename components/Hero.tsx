'use client'

import { useLanguage } from '@/components/LanguageProvider'
import WaitlistForm from '@/components/WaitlistForm'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section className="min-h-screen bg-puente-navy pt-16 relative overflow-hidden flex items-center">
      {/* Atmospheric background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-0 right-0 w-[60%] h-[70%] opacity-30"
          style={{ background: 'radial-gradient(ellipse at top right, #2D6BE420 0%, transparent 60%)' }}
        />
        <div
          className="absolute bottom-0 left-0 w-[40%] h-[50%] opacity-20"
          style={{ background: 'radial-gradient(ellipse at bottom left, #F5A62315 0%, transparent 60%)' }}
        />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Text content */}
          <div className="space-y-6 lg:pt-6">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2.5 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-1.5">
              <span className="relative flex h-2 w-2 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
              </span>
              <span className="text-green-400 text-sm font-medium">Now accepting waitlist</span>
            </div>

            {/* Bilingual taglines */}
            <div className="space-y-1">
              <p className="text-white text-xl md:text-2xl font-display font-semibold leading-snug">
                {t.hero.taglineEn}
              </p>
              <div className="h-px bg-gradient-to-r from-white/10 to-transparent my-1.5" />
              <p className="text-puente-gold text-xl md:text-2xl font-display font-semibold leading-snug">
                {t.hero.taglineEs}
              </p>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-display font-extrabold text-white leading-[1.06] whitespace-pre-line tracking-tight">
              {t.hero.headline}
            </h1>

            {/* Subheadline */}
            <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-lg">
              {t.hero.subheadline}
            </p>
          </div>

          {/* Right: Waitlist form */}
          <div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm">
              <p className="text-white font-display font-bold text-lg mb-4">{t.hero.ctaPrimary} →</p>
              <WaitlistForm variant="dark" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
