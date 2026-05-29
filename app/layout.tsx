import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, DM_Sans, Hanken_Grotesk } from 'next/font/google'
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

const hankenGrotesk = Hanken_Grotesk({
  subsets: ['latin'],
  variable: '--font-brand',
  weight: ['400', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'Puente Financial — Send Money Home Free, Build Credit Automatically',
  description:
    'The credit card for immigrants. Send money home for free, build your US credit score automatically, and earn points toward flights home.',
  metadataBase: new URL('https://www.puentefinancial.com'),
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'Puente Financial — Send money home free. Build your credit.',
    description: 'The only card that turns your remittances into credit history. Zero fees, zero catch.',
    url: 'https://www.puentefinancial.com',
    siteName: 'Puente Financial',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Puente Financial' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Puente Financial — Send money home free. Build your credit.',
    description: 'The only card that turns your remittances into credit history. Zero fees, zero catch.',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${plusJakarta.variable} ${dmSans.variable} ${hankenGrotesk.variable}`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
