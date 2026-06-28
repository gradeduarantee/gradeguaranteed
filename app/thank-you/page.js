import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Thank You — We Got Your Request | GradeGuaranteed.com',
  description: 'Thank you for reaching out to GradeGuaranteed.com. We will be in touch within 2 hours with your free quote.',
  robots: { index: false, follow: false },
}

export default function ThankYouPage() {
  return (
    <>
      <Header />
      <main style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '60px 24px', background: '#f8f9fa' }}>
        <div style={{ textAlign: 'center', maxWidth: '560px' }}>
          <div style={{ width: '80px', height: '80px', background: '#c9a84c', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 28px', fontSize: '36px' }}>
            ✓
          </div>
          <h1 style={{ fontSize: '36px', fontWeight: 900, color: '#1a3a5c', marginBottom: '16px' }}>
            Thank You! We Got It.
          </h1>
          <p style={{ fontSize: '18px', color: '#555', lineHeight: 1.7, marginBottom: '32px' }}>
            Your request has been received. One of our experts will review your class details and send you a free quote within <strong>2 hours</strong>.
          </p>
          <div style={{ background: 'white', borderRadius: '12px', padding: '28px', border: '1px solid #e0e0e0', marginBottom: '32px' }}>
            <p style={{ fontWeight: 700, color: '#1a3a5c', marginBottom: '12px' }}>What happens next?</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', textAlign: 'left' }}>
              {[
                'We review your class details and assign the right expert',
                'You receive a free, no-obligation quote by email',
                'You approve and we get started — no upfront payment',
                'Your expert takes care of everything. Grade guaranteed.',
              ].map((step, i) => (
                <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <span style={{ background: '#1a3a5c', color: 'white', width: '24px', height: '24px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 700, flexShrink: 0, marginTop: '2px' }}>{i + 1}</span>
                  <span style={{ color: '#444', fontSize: '15px', lineHeight: 1.5 }}>{step}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/" style={{ background: '#1a3a5c', color: 'white', padding: '14px 28px', borderRadius: '8px', textDecoration: 'none', fontWeight: 700, fontSize: '15px' }}>
              Back to Home
            </Link>
            <a href="https://wa.me/15551234567" target="_blank" rel="noopener noreferrer" style={{ background: '#25D366', color: 'white', padding: '14px 24px', borderRadius: '8px', textDecoration: 'none', fontWeight: 700, fontSize: '15px' }}>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
