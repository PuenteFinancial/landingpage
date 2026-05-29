'use client'

import { useLanguage } from '@/components/LanguageProvider'

export default function Problem() {
  const { t } = useLanguage()

  return (
    <section id="problem" className="bg-white py-20 md:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-display font-extrabold text-puente-navy leading-tight mb-5">
            {t.problem.headline}
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
            {t.problem.copy}
          </p>
        </div>

        {/* Fee comparison */}
        <div className="overflow-hidden rounded-2xl border border-gray-100 shadow-sm">
          {/* Table header */}
          <div className="bg-gray-50 px-6 py-3 border-b border-gray-100">
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
              {t.problem.tableTitle}
            </p>
          </div>

          {/* Rows */}
          <div className="divide-y divide-gray-100">
            {t.problem.tableRows.map((row) => (
              <div
                key={row.provider}
                className={`px-6 py-4 flex items-center justify-between transition-colors ${
                  row.highlight
                    ? 'bg-puente-navy text-white'
                    : 'bg-white hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  {row.highlight && (
                    <div className="w-2 h-2 rounded-full bg-green-400 flex-shrink-0" />
                  )}
                  <span
                    className={`font-semibold text-base md:text-lg ${
                      row.highlight ? 'text-white' : 'text-gray-800'
                    }`}
                  >
                    {row.provider}
                  </span>
                  {row.highlight && (
                    <span className="text-xs text-green-400 font-medium bg-green-400/10 px-2 py-0.5 rounded-full border border-green-400/20">
                      That&apos;s us
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-3">
                  {!row.highlight && (
                    <div className="hidden sm:flex items-center gap-1 text-red-400 text-xs font-medium">
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      per transfer
                    </div>
                  )}
                  <span
                    className={`font-extrabold text-xl md:text-2xl font-display ${
                      row.highlight ? 'text-puente-gold' : 'text-gray-800'
                    }`}
                  >
                    {row.fee}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-gray-400 text-xs italic mt-4">{t.problem.note}</p>
      </div>
    </section>
  )
}
