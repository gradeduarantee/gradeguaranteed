import './globals.css'

export const metadata = {
  metadataBase: new URL('https://gradeguaranteed.com'),
  title: {
    default: 'GradeGuaranteed.com — Take My Online Class For Me | A or B Guaranteed',
    template: '%s | GradeGuaranteed.com',
  },
  description: 'Pay someone to take your online class. 500+ PhD experts, A or B grade guaranteed or 100% refund. $49/week. US-based. All subjects covered.',
  keywords: ['take my online class', 'take my online class for me', 'pay someone to take my online class', 'grade guaranteed online class', 'online class help'],
  authors: [{ name: 'GradeGuaranteed.com' }],
  creator: 'GradeGuaranteed.com',
  publisher: 'GradeGuaranteed.com',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://gradeguaranteed.com',
    siteName: 'GradeGuaranteed.com',
    title: 'GradeGuaranteed.com — Take My Online Class For Me | A or B Guaranteed',
    description: 'Pay someone to take your online class. 500+ PhD experts, A or B grade guaranteed or 100% refund. $49/week. US-based.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'GradeGuaranteed.com — A or B Guaranteed' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GradeGuaranteed.com — A or B Guaranteed or 100% Refund',
    description: '500+ PhD experts take your online class. Grade guaranteed or your money back.',
    images: ['/og-image.jpg'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  verification: { google: '' },
}

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'GradeGuaranteed.com',
  url: 'https://gradeguaranteed.com',
  logo: 'https://gradeguaranteed.com/logo.svg',
  description: 'US-based online class help service. 500+ PhD experts. A or B grade guaranteed or full refund.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '60 E 42nd St #4600',
    addressLocality: 'New York',
    addressRegion: 'NY',
    postalCode: '10165',
    addressCountry: 'US',
  },
  contactPoint: [
    { '@type': 'ContactPoint', telephone: '+17656885315', contactType: 'customer service', areaServed: 'US', availableLanguage: 'English' },
    { '@type': 'ContactPoint', telephone: '+17633299406', contactType: 'customer support', contactOption: 'WhatsApp', areaServed: 'US' },
  ],
  sameAs: [],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body className="antialiased">
        {children}
        {/* WhatsApp float button */}
        <a
          href="https://wa.me/17633299406"
          className="whatsapp-float"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
        >
          <svg width="32" height="32" viewBox="0 0 32 32" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 2C8.268 2 2 8.268 2 16c0 2.484.676 4.81 1.854 6.807L2 30l7.42-1.828A13.94 13.94 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.6a11.55 11.55 0 01-5.89-1.614l-.422-.25-4.4 1.085 1.107-4.278-.276-.44A11.558 11.558 0 014.4 16C4.4 9.595 9.595 4.4 16 4.4S27.6 9.595 27.6 16 22.405 27.6 16 27.6zm6.358-8.655c-.348-.174-2.062-1.017-2.38-1.133-.32-.116-.552-.174-.784.174-.232.348-.9 1.133-1.103 1.367-.203.232-.406.26-.754.086-.348-.174-1.47-.542-2.8-1.727-1.034-.922-1.732-2.061-1.936-2.41-.202-.347-.022-.535.153-.708.157-.155.348-.406.522-.61.174-.202.232-.347.348-.579.116-.232.058-.435-.029-.61-.087-.173-.784-1.89-1.074-2.587-.283-.68-.57-.587-.784-.598-.203-.01-.435-.012-.667-.012-.232 0-.61.087-.928.435-.32.347-1.219 1.19-1.219 2.905s1.248 3.37 1.422 3.602c.174.232 2.457 3.752 5.953 5.262.832.36 1.481.574 1.987.735.835.266 1.595.228 2.196.138.67-.1 2.062-.843 2.353-1.658.29-.814.29-1.512.202-1.658-.086-.145-.318-.232-.667-.406z"/>
          </svg>
        </a>
      </body>
    </html>
  )
}
