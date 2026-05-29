'use client'

import { useLanguage } from '@/components/LanguageProvider'

export default function EmployerChannel() {
  const { t } = useLanguage()

  return (
    <section id="employers" className="bg-white py-20 md:py-32 relative overflow-hidden">
      {/* Diagonal accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(135deg, rgba(45, 107, 228, 0.03) 0%, transparent 50%, rgba(245, 166, 35, 0.03) 100%)',
        }}
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="space-y-5">
            <h2 className="text-3xl md:text-5xl font-display font-extrabold text-puente-navy leading-tight">
              {t.employer.headline}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              {t.employer.copy}
            </p>
            <div className="inline-flex items-center gap-2.5 bg-puente-sky/8 border border-puente-sky/20 rounded-full px-4 py-2">
              <svg className="w-4 h-4 text-puente-sky flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span className="text-puente-sky text-sm font-semibold">{t.employer.partnerNote}</span>
            </div>
          </div>

          {/* Visual */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: '🤝', label: 'Employer partnerships', sub: 'We show up in person' },
              { icon: '🌮', label: 'Lunch & learn', sub: 'In your language' },
              { icon: '📱', label: 'WhatsApp support', sub: 'Real humans, always' },
              { icon: '📍', label: 'Utah launch', sub: 'Expanding soon' },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-gray-50 rounded-2xl p-5 border border-gray-100 hover:border-puente-sky/30 transition-colors"
              >
                <div className="text-2xl mb-2">{item.icon}</div>
                <p className="text-puente-navy font-semibold text-sm">{item.label}</p>
                <p className="text-gray-400 text-xs mt-0.5">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
