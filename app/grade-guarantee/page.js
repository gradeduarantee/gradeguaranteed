import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CTASection from '@/components/CTASection'
import Link from 'next/link'

export const metadata = {
  title: 'Grade Guarantee — A or B or 100% Refund',
  description: 'GradeGuaranteed.com is the only online class help service that backs every class with a written A or B grade guarantee. Miss the grade, get a full refund.',
  alternates: { canonical: 'https://gradeguaranteed.com/grade-guarantee' },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What does the grade guarantee cover?', acceptedAnswer: { '@type': 'Answer', text: 'Our grade guarantee covers A or B on every online class we manage. If we miss the target grade, you receive a 100% full refund of what you paid — no questions asked.' } },
    { '@type': 'Question', name: 'Are there any exceptions to the grade guarantee?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, in specific cases we will inform you upfront before starting that a grade guarantee cannot apply — for example, if the student has already failed too many assignments, or if the class is more than halfway complete with a failing standing.' } },
    { '@type': 'Question', name: 'How do I claim the guarantee?', acceptedAnswer: { '@type': 'Answer', text: 'Contact us at support@gradeguaranteed.com or via WhatsApp. We process refunds within 5 business days after the final grade posts.' } },
  ],
}

export default function GradeGuaranteePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-hero-gradient py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-24 h-24 bg-gold-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-5xl">🏆</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-5 leading-tight">
              The GradeGuaranteed Promise:<br />
              <span className="text-gold-500">A or B — or 100% Back</span>
            </h1>
            <p className="text-blue-200 text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
              We are so confident in our 500+ PhD experts that we put it in writing. Every class we manage comes with a binding grade guarantee. Miss it, and you pay nothing.
            </p>
            <Link href="/get-a-quote" className="btn-gold text-lg px-10 py-4 rounded-xl">
              Get My Grade Guaranteed →
            </Link>
          </div>
        </section>

        {/* What the guarantee means */}
        <section className="py-20 bg-white px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="section-heading">What the Guarantee Means — Exactly</h2>
              <p className="section-subheading max-w-2xl mx-auto">No fine print designed to trap you. Here's precisely what we promise.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: '🎓', title: 'A or B Grade', desc: 'Your class final grade will be either an A (90%+) or a B (80%+). If the final grade is below B, the guarantee kicks in automatically.' },
                { icon: '💯', title: '100% Full Refund', desc: 'Not a partial refund. Not a credit. The full amount you paid, returned to your original payment method within 5 business days.' },
                { icon: '🤝', title: 'No Questions Asked', desc: 'We don\'t dispute, stall, or make you prove anything. If the grade isn\'t A or B, we refund. Simple as that.' },
              ].map(({ icon, title, desc }) => (
                <div key={title} className="card text-center border-2 border-gray-100 hover:border-gold-300 transition-colors">
                  <div className="text-4xl mb-4">{icon}</div>
                  <h3 className="text-navy-900 font-bold text-xl mb-3">{title}</h3>
                  <p className="text-gray-500 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Exceptions — honest transparency */}
        <section className="py-20 bg-amber-50 border-y border-amber-100 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-amber-600 font-bold text-sm uppercase tracking-wider">Honest Transparency</span>
              <h2 className="text-3xl font-extrabold text-navy-900 mt-2 mb-4">When the Guarantee Doesn't Apply</h2>
              <p className="text-gray-600 leading-relaxed">We believe in radical honesty. In rare situations, a grade guarantee is not possible — and we always tell you upfront, before you pay a cent.</p>
            </div>
            <div className="space-y-4">
              {[
                { scenario: 'Class is already mostly failed', detail: 'If a student comes to us with 3 weeks left and a 40% average, recovering to a B in that time is mathematically impossible. We\'ll tell you this upfront, take the class anyway at a reduced rate, and aim for the best possible outcome — without a guarantee.' },
                { scenario: 'Proctored exams with severe restrictions', detail: 'A very small number of university proctoring systems detect third-party access. For these specific platforms, we\'ll advise you beforehand and adjust the scope of our guarantee accordingly.' },
                { scenario: 'Student overrides our work', detail: 'If a student logs in and modifies work, submits their own assignments, or otherwise interferes with what our expert has done, the guarantee becomes void on those specific elements.' },
              ].map(({ scenario, detail }) => (
                <div key={scenario} className="bg-white rounded-xl p-6 border border-amber-200">
                  <h3 className="font-bold text-navy-900 mb-2 flex items-center gap-2">
                    <span className="text-amber-500">⚠️</span> {scenario}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{detail}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-500 text-sm mt-8">
              In all exception cases, <strong>we tell you upfront</strong> before taking your payment. No surprises.
            </p>
          </div>
        </section>

        {/* Why we can offer this */}
        <section className="py-20 bg-white px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="section-heading">Why We Can Offer What No One Else Will</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                {[
                  { icon: '🎓', title: '500+ In-House PhD Experts', desc: 'Not freelancers — our experts are employed by us. We know exactly who is handling your class, their success rates, and their subject-matter expertise. This control is why we can guarantee.' },
                  { icon: '🔬', title: 'Subject-Matter Matching', desc: 'We match each student with an expert whose PhD is in the exact subject. A nursing class goes to a registered nurse with an MSN or DNP. A finance class goes to a CFA or PhD economist.' },
                  { icon: '📊', title: 'Performance Tracking', desc: 'We monitor every class weekly. If an expert is falling behind, we escalate internally and reassign if needed — all before you ever see a bad grade.' },
                  { icon: '💰', title: 'We Back It With Money', desc: 'A guarantee only means something when there\'s money behind it. Ours is backed by a full refund. We\'ve paid refunds before and we will again — that\'s what makes the promise real.' },
                ].map(({ icon, title, desc }) => (
                  <div key={title} className="flex gap-4">
                    <div className="text-2xl flex-shrink-0 mt-1">{icon}</div>
                    <div>
                      <h3 className="font-bold text-navy-900 mb-1">{title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-navy-900 rounded-2xl p-8 text-center">
                <div className="text-6xl mb-4">📋</div>
                <h3 className="text-white font-extrabold text-2xl mb-3">The Guarantee in Plain English</h3>
                <div className="text-left space-y-3 mb-6">
                  {[
                    'You hire us to take your online class.',
                    'We assign a PhD expert in your subject.',
                    'Your class ends with an A or B.',
                    'If it doesn\'t — we refund 100%.',
                    'If an exception applies — we tell you BEFORE you pay.',
                  ].map((line, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="text-gold-500 font-bold flex-shrink-0">{i + 1}.</span>
                      <span className="text-blue-200 text-sm">{line}</span>
                    </div>
                  ))}
                </div>
                <Link href="/get-a-quote" className="btn-gold inline-block w-full text-center">
                  Get Started →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-navy-50 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-heading text-center mb-12">Guarantee FAQ</h2>
            <div className="space-y-4">
              {[
                { q: 'How do I know the guarantee is real?', a: 'We\'ve been processing refunds since we started. We\'re a New York-registered US company (60 E 42nd St, NY 10165) with real accountability. You can verify our registration. Our business depends on our reputation — we cannot afford to not honor refunds.' },
                { q: 'What if I disagree with the final grade I receive?', a: 'Contact us within 7 days of your final grade posting. If the grade posted is below B and we managed the class, we process a full refund. We review the grade portal together to confirm, then issue the refund.' },
                { q: 'Does the guarantee apply to individual assignments or only full classes?', a: 'The A or B grade guarantee applies to full class management (where we handle the entire class). Individual assignment help comes with a quality satisfaction guarantee but not a final-grade guarantee since we cannot control other factors in your overall grade.' },
                { q: 'How long does a refund take?', a: 'Refunds are processed within 5 business days of confirming the final grade. Depending on your payment method, funds appear in 3–10 business days after processing.' },
                { q: 'Do you guarantee graduate-level classes?', a: 'Yes. Our guarantee applies at all levels — undergraduate, graduate, and professional. We have PhD-level experts for graduate coursework across all major subjects.' },
              ].map(({ q, a }, i) => (
                <details key={i} className="group card cursor-pointer border border-gray-200">
                  <summary className="flex justify-between items-center font-semibold text-navy-900 list-none py-1 cursor-pointer">
                    <span>{q}</span>
                    <svg className="w-5 h-5 text-gold-500 flex-shrink-0 ml-4 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className="text-gray-600 text-sm leading-relaxed mt-4 pt-4 border-t border-gray-100">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <CTASection
          headline="Ready to Get Your Grade Guaranteed?"
          subheadline="Start with a free quote. We'll match you with an expert and guarantee your grade in writing before you pay."
        />
      </main>
      <Footer />
    </>
  )
}
