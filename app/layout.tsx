import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, DM_Sans } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/components/LanguageProvider'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700', '800'],
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '600'],
})

export const metadata: Metadata = {
  title: 'Puente Financial — Send Money Home Free, Build Credit Automatically',
  description:
    'The credit card for immigrants. Send money home for free, build your US credit score automatically, and earn points toward flights home.',
  openGraph: {
    title: 'Puente Financial',
    description: 'Send money home free. Build your credit automatically.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${plusJakarta.variable} ${dmSans.variable}`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
