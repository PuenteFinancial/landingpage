'use client'

import { useLanguage } from '@/components/LanguageProvider'

export default function FounderStory() {
  const { t } = useLanguage()

  return (
    <section id="founders" className="bg-puente-navy py-20 md:py-32 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Decorative quote mark */}
        <div className="text-puente-gold/20 font-display font-extrabold text-[10rem] leading-none select-none mb-[-4rem] mt-[-2rem] hidden md:block">
          &ldquo;
        </div>

        <h2 className="text-3xl md:text-4xl font-display font-extrabold text-white leading-tight mb-8">
          {t.founder.headline}
        </h2>

        <p className="text-gray-200 text-lg md:text-xl leading-relaxed mb-12 max-w-3xl mx-auto">
          {t.founder.copy}
        </p>

        {/* Founder card */}
        <div className="inline-flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl px-6 py-4">
          {/* Avatar */}
          <div className="w-14 h-14 rounded-full bg-puente-blue border border-white/20 flex items-center justify-center flex-shrink-0">
            <span className="font-display font-bold text-white text-lg select-none">JP</span>
          </div>
          <div className="text-left">
            <p className="text-white font-display font-bold text-base">{t.founder.founderName}</p>
            <p className="text-gray-400 text-sm">{t.founder.founderTitle}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
