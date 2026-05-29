'use client'

import { useLanguage } from '@/components/LanguageProvider'
import type { Lang } from '@/lib/translations'

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage()

  return (
    <div className="flex items-center bg-white/10 rounded-full p-1 gap-0.5">
      {(['en', 'es'] as Lang[]).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`px-3 py-1 rounded-full text-sm font-bold uppercase tracking-widest transition-all duration-200 ${
            lang === l
              ? 'bg-puente-sky text-white shadow-sm'
              : 'text-white/50 hover:text-white/80'
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  )
}
