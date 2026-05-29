'use client'

import { useLanguage } from '@/components/LanguageProvider'

export default function CreditBuilding() {
  const { t } = useLanguage()

  return (
    <section id="credit" className="bg-white py-20 md:py-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-display font-extrabold text-puente-navy leading-tight mb-5">
            {t.creditBuilding.headline}
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
            {t.creditBuilding.copy}
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connector line — desktop */}
          <div className="hidden md:block absolute top-8 left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-px bg-gradient-to-r from-puente-sky/30 via-puente-sky/60 to-puente-sky/30" />

          <div className="grid md:grid-cols-3 gap-8 md:gap-6">
            {t.creditBuilding.milestones.map((m, i) => (
              <div key={i} className="flex flex-col items-center text-center relative">
                {/* Dot */}
                <div className="w-4 h-4 rounded-full bg-puente-sky border-2 border-white shadow-md shadow-puente-sky/30 mb-5 z-10 relative flex-shrink-0" />
                {/* Content card */}
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 w-full">
                  <p className="text-puente-sky font-display font-extrabold text-lg mb-2">
                    {m.timeframe}
                  </p>
                  <p className="text-puente-navy font-semibold text-base leading-snug">
                    {m.outcome}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Callout box */}
        <div className="mt-12 bg-puente-navy rounded-2xl p-8 md:p-10 text-center">
          <p className="text-white text-lg md:text-xl font-semibold leading-relaxed max-w-2xl mx-auto">
            {t.creditBuilding.comparison}
          </p>
        </div>
      </div>
    </section>
  )
}
