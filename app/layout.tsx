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
  adjustFontFallback: false,
})

const smallcaps = IM_Fell_DW_Pica_SC({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-smallcaps',
  display: 'swap',
  adjustFontFallback: false,
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

const SITE_URL = 'https://rangoon.asia'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'The Rangoon Gazette — A Daily Chronicle of the Golden City',
    template: '%s · The Rangoon Gazette',
  },
  description:
    'The Rangoon Gazette — a vintage broadsheet of Rangoon (Yangon), the Golden City upon the Irrawaddy. Of the Shwedagon, the Sule, the Strand, the Secretariat, the High Court, the City Hall, Bogyoke Market, the quarters of the city, the almanack, and the University and her students.',
  applicationName: 'The Rangoon Gazette',
  keywords: [
    'Rangoon',
    'Yangon',
    'Rangoon Gazette',
    'The Rangoon Gazette',
    'Burma',
    'Myanmar',
    'Shwedagon',
    'Sule Pagoda',
    'Strand Hotel',
    'Bogyoke Aung San',
    'Rangoon University',
    'colonial Rangoon',
    'vintage broadsheet',
    'Burmese newspaper',
    'Irrawaddy',
  ],
  authors: [{ name: 'The Rangoon Gazette' }],
  creator: 'The Rangoon Gazette',
  publisher: 'The Press of Hanthawaddy & Co.',
  category: 'culture',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    title: 'The Rangoon Gazette',
    description:
      'A vintage broadsheet of Rangoon — the Golden City upon the Irrawaddy.',
    url: SITE_URL,
    type: 'website',
    locale: 'en_GB',
    siteName: 'The Rangoon Gazette',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Rangoon Gazette',
    description:
      'A vintage broadsheet of Rangoon — the Golden City upon the Irrawaddy.',
  },
  themeColor: '#f3eee2',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'The Rangoon Gazette',
      alternateName: ['Rangoon Gazette', 'The Gazette of Rangoon'],
      description:
        'A vintage broadsheet of Rangoon (Yangon), the Golden City upon the Irrawaddy.',
      inLanguage: 'en-GB',
      publisher: { '@id': `${SITE_URL}/#publisher` },
    },
    {
      '@type': 'NewsMediaOrganization',
      '@id': `${SITE_URL}/#publisher`,
      name: 'The Rangoon Gazette',
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/icon.svg`,
      },
      foundingDate: '1852',
      foundingLocation: {
        '@type': 'Place',
        name: 'Rangoon, Burma',
      },
      areaServed: {
        '@type': 'City',
        name: 'Rangoon',
        alternateName: 'Yangon',
      },
    },
  ],
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
      <body className="font-serif antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  )
}
