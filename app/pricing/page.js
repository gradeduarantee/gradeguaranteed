import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CTASection from '@/components/CTASection'
import Link from 'next/link'

export const metadata = {
  title: 'Pricing — Online Class Help Starting at $49/Week',
  description: 'Transparent pricing for taking your online class. Starting at $49/week. Full class management, single assignments, exams. A or B guaranteed. No hidden fees.',
  alternates: { canonical: 'https://gradeguaranteed.com/pricing' },
}

const priceSchema = {
  '@context': 'https://schema.org',
  '@type': 'PriceSpecification',
  price: '49',
  priceCurrency: 'USD',
  unitText: 'WEEK',
  description: 'Online class management — A or B grade guaranteed',
}

const plans = [
  {
    name: 'Single Task',
    price: '$50–$150',
    per: 'per task',
    desc: 'One assignment, quiz, or discussion post handled by a PhD expert.',
    features: ['One assignment, quiz, or discussion', 'Delivered within 24–48 hours', 'Subject-matched expert', 'Unlimited revisions', 'Quality satisfaction guarantee'],
    cta: 'Get a Quote',
    popular: false,
    color: 'gray',
  },
  {
    name: 'Weekly Class Management',
    price: '$49',
    per: 'per week',
    desc: 'Our expert fully manages your class week-by-week. Grade guaranteed.',
    features: ['Full class management — all tasks', 'A or B grade guaranteed', 'PhD-level subject expert assigned', 'Weekly progress updates', 'WhatsApp & email support', '100% refund if grade missed'],
    cta: 'Get My Grade Guaranteed',
    popular: true,
    color: 'navy',
  },
  {
    name: 'Full Semester',
    price: '$800–$1,400',
    per: 'full semester',
    desc: 'Complete 16-week semester management — one upfront price.',
    features: ['Everything in Weekly plan', '16-week full semester coverage', 'Priority expert assignment', 'Dedicated account manager', 'All exams & assignments included', 'A or B grade guaranteed'],
    cta: 'Get Semester Quote',
    popular: false,
    color: 'gray',
  },
]

const factors = [
  { icon: '📚', label: 'Subject Complexity', desc: 'STEM subjects (Nursing, Math, Chemistry) require more advanced expertise and are priced slightly higher than humanities.' },
  { icon: '⏱️', label: 'Class Duration', desc: 'A 4-week mini-term costs less total than a 16-week semester, but the weekly rate remains the same.' },
  { icon: '🎓', label: 'Academic Level', desc: 'Undergraduate vs graduate/doctoral level classes affect pricing. Graduate classes require higher-level expertise.' },
  { icon: '🚨', label: 'Urgency', desc: 'Standard lead time is 24 hours. If you need us to start the same day, a rush fee of 15–20% may apply.' },
]

export default function PricingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(priceSchema) }} />
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-hero-gradient py-16 px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <span className="text-gold-400 font-bold text-sm uppercase tracking-wider">Transparent Pricing</span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-3 mb-5 leading-tight">
              We're the Only Service<br />
              <span className="text-gold-500">That Publishes Its Prices</span>
            </h1>
            <p className="text-blue-200 text-lg leading-relaxed">
              Every competitor makes you fill out a form before revealing what they charge. We believe you deserve to know upfront. Starting at <strong className="text-gold-400">$49/week</strong>. No hidden fees. No bait-and-switch.
            </p>
          </div>
        </section>

        {/* Plans */}
        <section className="py-20 bg-white px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 items-start">
              {plans.map((plan) => (
                <div key={plan.name} className={`rounded-2xl p-8 border-2 relative ${plan.popular ? 'bg-navy-900 border-gold-500 shadow-2xl scale-105' : 'bg-white border-gray-200 shadow-md'}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold-500 text-navy-900 text-xs font-bold px-5 py-2 rounded-full whitespace-nowrap">
                      Most Popular — Grade Guaranteed
                    </div>
                  )}
                  <h2 className={`font-bold text-lg mb-1 ${plan.popular ? 'text-gold-400' : 'text-navy-900'}`}>{plan.name}</h2>
                  <div className={`text-5xl font-extrabold mb-1 ${plan.popular ? 'text-white' : 'text-navy-900'}`}>{plan.price}</div>
                  <div className={`text-sm mb-4 ${plan.popular ? 'text-blue-300' : 'text-gray-400'}`}>{plan.per}</div>
                  <p className={`text-sm mb-6 leading-relaxed ${plan.popular ? 'text-blue-200' : 'text-gray-500'}`}>{plan.desc}</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <svg className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.popular ? 'text-gold-500' : 'text-green-500'}`} fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className={`text-sm ${plan.popular ? 'text-blue-100' : 'text-gray-600'}`}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/get-a-quote"
                    className={`block text-center font-bold py-3.5 rounded-xl transition-all text-sm ${plan.popular ? 'bg-gold-500 text-navy-900 hover:bg-gold-400' : 'bg-navy-900 text-white hover:bg-navy-800'}`}>
                    {plan.cta} →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Subject pricing table */}
        <section className="py-20 bg-navy-50 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="section-heading">Typical Price by Subject</h2>
              <p className="section-subheading">Weekly rates for full class management. Final pricing confirmed in your free quote.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
              <table className="w-full">
                <thead className="bg-navy-900 text-white">
                  <tr>
                    <th className="text-left px-6 py-4 font-bold text-sm">Subject</th>
                    <th className="text-center px-6 py-4 font-bold text-sm">Weekly Rate</th>
                    <th className="text-center px-6 py-4 font-bold text-sm">8-Week Total</th>
                    <th className="text-center px-6 py-4 font-bold text-sm">16-Week Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    ['Math / Statistics', '$49–$59', '$392–$472', '$784–$944'],
                    ['Nursing / Healthcare', '$59–$79', '$472–$632', '$944–$1,264'],
                    ['Accounting / Finance', '$49–$65', '$392–$520', '$784–$1,040'],
                    ['Business / Management', '$49–$59', '$392–$472', '$784–$944'],
                    ['English / Humanities', '$49–$55', '$392–$440', '$784–$880'],
                    ['Biology / Chemistry', '$59–$75', '$472–$600', '$944–$1,200'],
                    ['Psychology / Sociology', '$49–$59', '$392–$472', '$784–$944'],
                    ['Computer Science / IT', '$59–$79', '$472–$632', '$944–$1,264'],
                    ['History / Political Science', '$49–$55', '$392–$440', '$784–$880'],
                    ['Criminal Justice', '$49–$59', '$392–$472', '$784–$944'],
                  ].map(([subject, weekly, eight, sixteen], i) => (
                    <tr key={subject} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-6 py-4 font-medium text-navy-900 text-sm">{subject}</td>
                      <td className="px-6 py-4 text-center text-gold-600 font-bold text-sm">{weekly}</td>
                      <td className="px-6 py-4 text-center text-gray-600 text-sm">{eight}</td>
                      <td className="px-6 py-4 text-center text-gray-600 text-sm">{sixteen}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-center text-gray-500 text-sm mt-4">All prices include the A or B grade guarantee. Get your exact price in a free quote — no obligation.</p>
          </div>
        </section>

        {/* What affects price */}
        <section className="py-20 bg-white px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="section-heading">What Affects Your Final Price?</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {factors.map(({ icon, label, desc }) => (
                <div key={label} className="card flex gap-4">
                  <div className="text-3xl flex-shrink-0">{icon}</div>
                  <div>
                    <h3 className="font-bold text-navy-900 mb-2">{label}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compare to competitors */}
        <section className="py-20 bg-navy-50 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="section-heading">How We Compare to Other Services</h2>
            </div>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
              <table className="w-full">
                <thead className="bg-navy-900 text-white">
                  <tr>
                    <th className="text-left px-6 py-4 font-bold text-sm">Feature</th>
                    <th className="text-center px-6 py-4 font-bold text-sm text-gold-400">GradeGuaranteed</th>
                    <th className="text-center px-6 py-4 font-bold text-sm">BoostMyGrade</th>
                    <th className="text-center px-6 py-4 font-bold text-sm">TakeYourClass</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-sm">
                  {[
                    ['Published pricing', '✅ Yes — $49/week', '❌ Hidden', '❌ Hidden'],
                    ['Grade guarantee', '✅ A or B + full refund', '⚠️ Partial', '⚠️ Partial'],
                    ['In-house experts', '✅ 500+ PhD staff', '⚠️ ~150 freelancers', '❌ Freelancers'],
                    ['US company', '✅ New York, NY', '❌ Offshore', '❌ Offshore'],
                    ['WhatsApp support', '✅ 24/7', '❌ No', '❌ No'],
                    ['Response time', '✅ Under 2 hours', '⚠️ 4–8 hours', '⚠️ 4–8 hours'],
                  ].map(([feature, gg, boost, take], i) => (
                    <tr key={feature} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-6 py-4 font-medium text-navy-900">{feature}</td>
                      <td className="px-6 py-4 text-center text-green-700 font-medium">{gg}</td>
                      <td className="px-6 py-4 text-center text-gray-500">{boost}</td>
                      <td className="px-6 py-4 text-center text-gray-500">{take}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <CTASection
          headline="Know What It'll Cost Before You Decide"
          subheadline="Get your personalized quote in under 2 hours. Free, no obligation, no pressure."
          cta="Get My Free Quote Now"
        />
      </main>
      <Footer />
    </>
  )
}
