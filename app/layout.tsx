import type { Metadata } from 'next'
import {
  IM_Fell_English,
  IM_Fell_DW_Pica_SC,
  Playfair_Display,
  UnifrakturMaguntia,
} from 'next/font/google'
import './globals.css'

const serif = IM_Fell_English({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
})

const smallcaps = IM_Fell_DW_Pica_SC({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-smallcaps',
  display: 'swap',
})

const display = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
})

const blackletter = UnifrakturMaguntia({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-blackletter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'The Rangoon Gazette',
    template: '%s · The Rangoon Gazette',
  },
  description:
    'A daily chronicle of the Golden City upon the Irrawaddy — pagodas, bazaars, the European quarter, and the almanack.',
  openGraph: {
    title: 'The Rangoon Gazette',
    description:
      'A daily chronicle of the Golden City upon the Irrawaddy.',
    type: 'website',
    locale: 'en_GB',
    siteName: 'The Rangoon Gazette',
  },
  twitter: {
    card: 'summary',
    title: 'The Rangoon Gazette',
    description:
      'A daily chronicle of the Golden City upon the Irrawaddy.',
  },
  themeColor: '#f3eee2',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${serif.variable} ${smallcaps.variable} ${display.variable} ${blackletter.variable}`}
    >
      <body className="font-serif antialiased">{children}</body>
    </html>
  )
}
