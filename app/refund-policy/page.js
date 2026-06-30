import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Refund Policy & Grade Guarantee | GradeGuaranteed.com',
  description: 'Our A or B Grade Guarantee — get a full refund if we don\'t deliver. Clear, simple refund policy with no hidden conditions. 100% money-back guarantee.',
  robots: { index: true, follow: true },
}

const steps = [
  { step: '01', title: 'Place Your Order', desc: 'Submit your course details and complete payment. Your grade guarantee starts immediately.' },
  { step: '02', title: 'Expert Takes Your Class', desc: 'Your assigned PhD expert handles all coursework, assignments, discussions, and exams.' },
  { step: '03', title: 'Grade Delivered', desc: 'We deliver an A or B in your course, or your refund is automatically processed — no questions asked.' },
]

const faqs = [
  { q: 'How long does a refund take?', a: 'Refunds are processed within 3–5 business days to your original payment method once approved. Bank processing may add an additional 2–3 business days depending on your financial institution.' },
  { q: 'What if my course is still in progress?', a: 'If you feel the course is not going well before completion, contact us immediately at support@gradeguaranteed.com. We will reassign a new expert and take corrective action before issuing any refund.' },
  { q: 'Can I get a partial refund?', a: 'Yes. If we complete part of the course and then cannot continue due to circumstances outside our control, we will issue a pro-rated refund for the uncompleted portion.' },
  { q: 'What if my school uses identity verification?', a: 'Proctored exams and identity-verified sessions must be disclosed at the time of order. If you disclose these upfront, we factor them into our guarantee. Undisclosed verification requirements may void the guarantee for those specific assessments only.' },
  { q: 'Does the guarantee cover all subjects?', a: 'Yes. Our A/B guarantee applies to all subjects we accept. Some highly specialized courses may have different terms — this will be disclosed before you complete payment.' },
  { q: 'What if I want to cancel before the course starts?', a: 'If you cancel before our expert begins any work, you receive a 100% refund. If work has begun, a partial refund is issued based on the percentage of work remaining.' },
]

export default function RefundPolicy() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-navy-950 pt-32 pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/20 rounded-full px-4 py-2 mb-6">
              <span className="text-gold-400 text-sm font-medium">Our Promise</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Refund Policy &amp; Grade Guarantee</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Simple, clear, and unconditional. If we don&apos;t get you an A or B — you get every dollar back.
            </p>
            <div className="mt-8 inline-flex items-center gap-3 bg-green-500/10 border border-green-500/30 rounded-xl px-6 py-4">
              <svg className="w-8 h-8 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="text-green-300 font-semibold text-lg">100% Money-Back Guarantee — No Questions Asked</span>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-navy-900 text-center mb-12">How the Guarantee Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {steps.map((s) => (
                <div key={s.step} className="text-center">
                  <div className="w-16 h-16 bg-navy-900 text-gold-400 rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-4">{s.step}</div>
                  <h3 className="text-lg font-bold text-navy-900 mb-2">{s.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Policy Details */}
        <section className="bg-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-navy-900 mb-10 text-center">Full Refund Policy</h2>

            <div className="space-y-8">
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-green-800 mb-3">✓ You Qualify for a Full Refund If:</h3>
                <ul className="space-y-2 text-green-700">
                  <li className="flex items-start gap-2"><span className="mt-1 w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></span>The final course grade is lower than a B</li>
                  <li className="flex items-start gap-2"><span className="mt-1 w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></span>Our expert fails to complete the agreed-upon coursework</li>
                  <li className="flex items-start gap-2"><span className="mt-1 w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></span>We are unable to assign a qualified expert to your course</li>
                  <li className="flex items-start gap-2"><span className="mt-1 w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></span>You cancel before any work has been started</li>
                </ul>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-amber-800 mb-3">⚠ Conditions That May Affect the Guarantee:</h3>
                <ul className="space-y-2 text-amber-700">
                  <li className="flex items-start gap-2"><span className="mt-1 w-2 h-2 bg-amber-500 rounded-full flex-shrink-0"></span>Inaccurate or incomplete course login credentials provided at order time</li>
                  <li className="flex items-start gap-2"><span className="mt-1 w-2 h-2 bg-amber-500 rounded-full flex-shrink-0"></span>Unauthorized access to the course account by you or others during the service</li>
                  <li className="flex items-start gap-2"><span className="mt-1 w-2 h-2 bg-amber-500 rounded-full flex-shrink-0"></span>Identity-verified exams not disclosed at the time of order</li>
                  <li className="flex items-start gap-2"><span className="mt-1 w-2 h-2 bg-amber-500 rounded-full flex-shrink-0"></span>Initiating a chargeback before allowing us to resolve the issue</li>
                  <li className="flex items-start gap-2"><span className="mt-1 w-2 h-2 bg-amber-500 rounded-full flex-shrink-0"></span>Academic institution requires live, in-person attendance not disclosed upfront</li>
                </ul>
              </div>

              <div className="bg-navy-50 border border-navy-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-navy-800 mb-3">📋 How to Request a Refund</h3>
                <ol className="space-y-3 text-navy-700">
                  <li className="flex items-start gap-3"><span className="font-bold text-gold-600">1.</span>Email us at <strong>support@gradeguaranteed.com</strong> with your order number and the reason for your refund request.</li>
                  <li className="flex items-start gap-3"><span className="font-bold text-gold-600">2.</span>Our team will review your request within <strong>24 hours</strong> and respond with a decision.</li>
                  <li className="flex items-start gap-3"><span className="font-bold text-gold-600">3.</span>Approved refunds are processed within <strong>3–5 business days</strong> to your original payment method.</li>
                </ol>
              </div>
            </div>

            {/* FAQ */}
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-navy-900 mb-8 text-center">Refund FAQ</h2>
              <div className="space-y-4">
                {faqs.map((faq, i) => (
                  <div key={i} className="border border-gray-200 rounded-xl p-6">
                    <h3 className="font-bold text-navy-900 mb-2">{faq.q}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-16 bg-navy-950 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-3">Ready to Get Started Risk-Free?</h3>
              <p className="text-gray-400 mb-6">Join thousands of students who got their A or B — guaranteed.</p>
              <Link href="/get-a-quote" className="inline-flex items-center gap-2 bg-gold-500 text-navy-950 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gold-400 transition-colors">
                Get a Free Quote
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}