import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CTASection from '@/components/CTASection'
import Link from 'next/link'

export const metadata = {
  title: 'Pricing — Online Class Help From $37/Week | GradeGuaranteed.com',
  description: 'Transparent pricing for online class help. Up to 8 weeks: $49/week. 12 weeks: $40/week. 16 weeks: $37/week. Single tasks from $30. A or B guaranteed or full refund.',
}

const tiers = [
  {
    label: 'Single Task',
    sublabel: 'One assignment, quiz, or discussion',
    price: 'From $30',
    unit: 'per task',
    highlight: false,
    features: [
      'One assignment, essay, quiz, or discussion post',
      'Delivered within agreed deadline',
      'Unlimited revisions until graded',
      'Best for quick one-off help',
    ],
    cta: 'Get a Quote',
    note: 'Price varies by complexity and subject',
  },
  {
    label: 'Short Class',
    sublabel: 'Up to 8 weeks',
    price: '$49',
    unit: 'per week',
    highlight: false,
    features: [
      'All assignments, quizzes & discussions',
      'All exams and midterms',
      'Dedicated PhD-level expert',
      'A or B guaranteed or full refund',
      'Total: up to $392 for 8-week class',
    ],
    cta: 'Get a Quote',
    note: 'Most popular for 4-8 week courses',
  },
  {
    label: 'Standard Class',
    sublabel: '9-12 weeks',
    price: '$40',
    unit: 'per week',
    highlight: true,
    features: [
      'All assignments, quizzes & discussions',
      'All exams and midterms',
      'Dedicated PhD-level expert',
      'A or B guaranteed or full refund',
      'Total: $360-$480 for 9-12 week class',
    ],
    cta: 'Get a Quote',
    note: 'Best value for full-semester classes',
  },
  {
    label: 'Full Semester',
    sublabel: '13-16 weeks',
    price: '$37',
    unit: 'per week',
    highlight: false,
    features: [
      'All assignments, quizzes & discussions',
      'All exams and midterms',
      'Dedicated PhD-level expert',
      'A or B guaranteed or full refund',
      'Total: $481-$592 for 13-16 week class',
    ],
    cta: 'Get a Quote',
    note: 'Lowest per-week rate for long classes',
  },
]

const addOns = [
  { name: 'Proctored Exam Support', price: 'From $100', desc: 'For exams requiring ProctorU, Honorlock, or Respondus' },
  { name: 'Urgent Start (24h)', price: '+$50 one-time', desc: 'Expert assigned and working within 24 hours' },
  { name: 'Per Single Exam', price: 'From $75', desc: 'One proctored or unproctored exam only' },
  { name: 'Discussion Posts Only', price: 'From $15/post', desc: 'Weekly discussion posts and peer responses' },
]

export default function PricingPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section style={{ background: 'linear-gradient(135deg, #1a3a5c 0%, #0d2340 100%)', color: 'white', padding: '80px 24px 60px', textAlign: 'center' }}>
          <p style={{ color: '#c9a84c', fontWeight: 700, letterSpacing: '2px', fontSize: '13px', textTransform: 'uppercase', marginBottom: '16px' }}>Transparent Pricing</p>
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 800, marginBottom: '20px', lineHeight: 1.2 }}>
            Simple, Honest Pricing.<br />A or B Guaranteed.
          </h1>
          <p style={{ fontSize: '18px', opacity: 0.9, maxWidth: '580px', margin: '0 auto 32px', lineHeight: 1.7 }}>
            Pay by the week based on how long your class is. No hidden fees. No upfront payment. Grade guaranteed or 100% refund.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            {['No upfront payment', 'A or B or full refund', 'All subjects covered'].map(t => (
              <div key={t} style={{ background: 'rgba(255,255,255,0.1)', padding: '10px 20px', borderRadius: '8px', fontSize: '14px' }}>✓ {t}</div>
            ))}
          </div>
        </section>

        {/* Tiers */}
        <section style={{ padding: '80px 24px', background: '#f8f9fa' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <h2 style={{ textAlign: 'center', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 800, color: '#1a3a5c', marginBottom: '12px' }}>Choose Your Plan</h2>
            <p style={{ textAlign: 'center', color: '#666', marginBottom: '48px', fontSize: '16px' }}>The longer your class, the lower your weekly rate.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
              {tiers.map((tier) => (
                <div key={tier.label} style={{
                  background: tier.highlight ? '#1a3a5c' : 'white',
                  color: tier.highlight ? 'white' : '#333',
                  borderRadius: '16px',
                  padding: '32px 28px',
                  border: tier.highlight ? 'none' : '2px solid #e8e8e8',
                  position: 'relative',
                  boxShadow: tier.highlight ? '0 8px 40px rgba(26,58,92,0.3)' : '0 2px 12px rgba(0,0,0,0.06)',
                  transform: tier.highlight ? 'scale(1.03)' : 'none',
                }}>
                  {tier.highlight && (
                    <div style={{ position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)', background: '#c9a84c', color: 'white', padding: '4px 16px', borderRadius: '20px', fontSize: '12px', fontWeight: 700, whiteSpace: 'nowrap' }}>
                      MOST POPULAR
                    </div>
                  )}
                  <p style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', opacity: 0.7, marginBottom: '8px' }}>{tier.label}</p>
                  <p style={{ fontSize: '13px', opacity: 0.6, marginBottom: '20px' }}>{tier.sublabel}</p>
                  <div style={{ marginBottom: '24px' }}>
                    <span style={{ fontSize: '48px', fontWeight: 900, color: tier.highlight ? '#c9a84c' : '#1a3a5c' }}>{tier.price}</span>
                    <span style={{ fontSize: '14px', opacity: 0.7, marginLeft: '4px' }}>{tier.unit}</span>
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {tier.features.map((f) => (
                      <li key={f} style={{ fontSize: '14px', display: 'flex', gap: '8px', alignItems: 'flex-start', opacity: 0.9 }}>
                        <span style={{ color: '#c9a84c', fontWeight: 700, marginTop: '1px' }}>checkmark</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <p style={{ fontSize: '12px', opacity: 0.5, marginBottom: '20px', fontStyle: 'italic' }}>{tier.note}</p>
                  <Link href="/get-a-quote" style={{
                    display: 'block', textAlign: 'center', padding: '14px 20px', borderRadius: '8px', fontWeight: 700, fontSize: '15px', textDecoration: 'none',
                    background: tier.highlight ? '#c9a84c' : '#1a3a5c', color: 'white',
                  }}>
                    {tier.cta} →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Payment Methods */}
        <section style={{ padding: '40px 24px', background: 'white', borderTop: '1px solid #eee', borderBottom: '1px solid #eee' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <p style={{ color: '#666', fontSize: '15px', marginBottom: '16px' }}>We accept all major payment methods</p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', alignItems: 'center' }}>
              {['Visa and Mastercard', 'Apple Pay', 'PayPal', 'American Express'].map(m => (
                <span key={m} style={{ background: '#f5f5f5', padding: '8px 16px', borderRadius: '8px', fontSize: '14px', fontWeight: 600, color: '#333' }}>{m}</span>
              ))}
            </div>
            <p style={{ color: '#888', fontSize: '13px', marginTop: '16px' }}>All transactions encrypted. No payment required until you approve your expert.</p>
          </div>
        </section>

        {/* Add-Ons */}
        <section style={{ padding: '60px 24px', background: '#f8f9fa' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ textAlign: 'center', fontSize: '28px', fontWeight: 800, color: '#1a3a5c', marginBottom: '12px' }}>A La Carte Options</h2>
            <p style={{ textAlign: 'center', color: '#666', marginBottom: '32px' }}>Need just one thing handled? These standalone options have you covered.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
              {addOns.map(a => (
                <div key={a.name} style={{ padding: '24px', border: '2px solid #e8e8e8', borderRadius: '12px', background: 'white' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                    <h3 style={{ fontWeight: 700, color: '#1a3a5c', fontSize: '16px', margin: 0 }}>{a.name}</h3>
                    <span style={{ color: '#c9a84c', fontWeight: 800, fontSize: '15px', whiteSpace: 'nowrap', marginLeft: '12px' }}>{a.price}</span>
                  </div>
                  <p style={{ color: '#666', fontSize: '14px', margin: 0 }}>{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section style={{ padding: '60px 24px', background: 'white' }}>
          <div style={{ maxWidth: '720px', margin: '0 auto' }}>
            <h2 style={{ textAlign: 'center', fontSize: '28px', fontWeight: 800, color: '#1a3a5c', marginBottom: '36px' }}>Pricing FAQs</h2>
            {[
              { q: 'Do I pay upfront?', a: 'No. You get a free quote, approve the price, and only pay once you have agreed to proceed. We never charge without your approval.' },
              { q: 'What if I fail to get an A or B?', a: 'You get a 100% refund. Our guarantee is absolute. In 10+ years of operation, our refund rate is under 2%.' },
              { q: 'Can I pay in instalments?', a: 'Yes. For classes longer than 8 weeks we offer a weekly or bi-weekly payment schedule. Ask about this when you get your quote.' },
              { q: 'What payment methods do you accept?', a: 'All major credit and debit cards (Visa, Mastercard, Amex, Discover), Apple Pay, and PayPal.' },
              { q: 'Are there any hidden fees?', a: 'None. The price in your quote is the price you pay. No setup fees, no platform fees, no surprises.' },
            ].map(({ q, a }) => (
              <details key={q} style={{ marginBottom: '16px', background: '#f8f9fa', borderRadius: '10px', border: '1px solid #e0e0e0', overflow: 'hidden' }}>
                <summary style={{ padding: '20px 24px', fontWeight: 700, cursor: 'pointer', color: '#1a3a5c', fontSize: '16px', listStyle: 'none' }}>{q}</summary>
                <p style={{ padding: '0 24px 20px', color: '#555', lineHeight: 1.7, margin: 0 }}>{a}</p>
              </details>
            ))}
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  )
}
