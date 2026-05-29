'use client'

import { useLanguage } from '@/components/LanguageProvider'

export default function HowItWorks() {
  const { t } = useLanguage()

  return (
    <section id="how-it-works" className="bg-puente-navy py-20 md:py-32 relative overflow-hidden">
      {/* Subtle background accent */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-extrabold text-white leading-tight">
            {t.howItWorks.headline}
          </h2>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {t.howItWorks.steps.map((step) => (
            <div
              key={step.number}
              className="bg-white/5 border border-white/10 rounded-2xl p-7 relative group hover:bg-white/8 transition-colors"
              style={{ boxShadow: '0 0 40px rgba(45, 107, 228, 0.05)' }}
            >
              {/* Step number */}
              <div className="font-display font-extrabold text-7xl md:text-8xl text-puente-gold/20 leading-none mb-4 select-none">
                {step.number}
              </div>
              <h3 className="text-white font-display font-bold text-xl mb-3 -mt-2">
                {step.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Skeptic explainer */}
        <div className="bg-puente-blue rounded-2xl p-7 md:p-10 border border-white/10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-puente-sky/15 border border-puente-sky/25 rounded-full px-4 py-1.5 mb-5">
              <svg className="w-3.5 h-3.5 text-puente-sky" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <span className="text-puente-sky text-xs font-semibold uppercase tracking-wider">
                {t.howItWorks.skepticHeadline}
              </span>
            </div>
            <p className="text-gray-200 text-base md:text-lg leading-relaxed">
              {t.howItWorks.skepticCopy}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
