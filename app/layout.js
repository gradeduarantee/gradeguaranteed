import './globals.css'
import FloatingButtons from '@/components/FloatingButtons'

export const metadata = {
  metadataBase: new URL('https://gradeguaranteed.com'),
  title: {
    default: 'GradeGuaranteed.com — Take My Online Class For Me | A or B Guaranteed',
    template: '%s | GradeGuaranteed.com',
  },
  description: 'Pay someone to take your online class. 500+ PhD experts, A or B grade guaranteed or 100% refund. From $37/week. US-based. All subjects covered.',
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
    description: 'Pay someone to take your online class. 500+ PhD experts, A or B grade guaranteed or 100% refund.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'GradeGuaranteed.com' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GradeGuaranteed.com — Take My Online Class For Me',
    description: 'A or B guaranteed or 100% refund. 500+ PhD experts. From $37/week.',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <FloatingButtons />
      </body>
    </html>
  )
}
