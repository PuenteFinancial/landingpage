'use client'

import { useState } from 'react'
import { useLanguage } from '@/components/LanguageProvider'
import posthog from 'posthog-js'

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  )
}

export default function FAQ() {
  const { t } = useLanguage()
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (i: number) => {
    const isOpening = openIndex !== i
    setOpenIndex(isOpening ? i : null)
    if (isOpening) {
      posthog.capture('faq_item_opened', {
        question: t.faq.items[i]?.q,
        item_index: i,
      })
    }
  }

  return (
    <section id="faq" className="bg-white py-20 md:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-display font-extrabold text-puente-navy leading-tight">
            {t.faq.headline}
          </h2>
        </div>

        <div className="divide-y divide-gray-100">
          {t.faq.items.map((item, i) => (
            <div key={i}>
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-start justify-between gap-4 py-5 text-left group"
              >
                <span className={`font-semibold text-base transition-colors ${openIndex === i ? 'text-puente-navy' : 'text-gray-800 group-hover:text-puente-navy'}`}>
                  {item.q}
                </span>
                <ChevronIcon open={openIndex === i} />
              </button>

              {openIndex === i && (
                <div className="pb-5 pr-8">
                  <p className="text-gray-600 text-base leading-relaxed">{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
