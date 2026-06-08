import type { Metadata } from 'next'
import { Space_Grotesk, Space_Mono } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/components/LanguageProvider'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
  weight: ['400', '500', '600', '700'],
})

const spaceMono = Space_Mono({
  subsets: ['latin'],
  variable: '--font-mono-space',
  weight: ['400', '700'],
})

export const metadata: Metadata = {
  title: 'Puente Financial — Send money home. Build U.S. credit doing it.',
  description:
    'Send money home for $5 flat at the real exchange rate — and build your U.S. credit history with every payment. One app, built for newcomers.',
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
    title: 'Puente Financial — Send money home. Build U.S. credit doing it.',
    description: 'Send money home for $5 flat at the real exchange rate — and build your U.S. credit history with every payment. One app, built for newcomers.',
    url: 'https://www.puentefinancial.com',
    siteName: 'Puente Financial',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Puente Financial — Send money home. Build U.S. credit doing it.',
    description: 'Send money home for $5 flat at the real exchange rate — and build your U.S. credit history with every payment. One app, built for newcomers.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${spaceMono.variable}`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
