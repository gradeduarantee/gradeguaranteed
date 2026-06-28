import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CTASection from '@/components/CTASection'
import Link from 'next/link'

export const metadata = {
  title: 'FAQ — Frequently Asked Questions',
  description: 'Answers to the most common questions about GradeGuaranteed.com — pricing, the grade guarantee, safety, how it works, and more.',
  alternates: { canonical: 'https://gradeguaranteed.com/faq' },
}

const faqCategories = [
  {
    category: 'The Grade Guarantee',
    faqs: [
      { q: 'What exactly is the grade guarantee?', a: 'We guarantee your final class grade will be an A (90%+) or B (80%+). If we fail to achieve this, we refund 100% of what you paid — no questions, no conditions, no deductions.' },
      { q: 'Are there any exceptions to the guarantee?', a: 'Yes, in rare cases we will inform you upfront before taking your payment that a guarantee cannot apply — for example, if you\'ve already accumulated so many failing marks that an A or B is mathematically impossible to achieve. In these cases, we still take the class and aim for the best possible outcome, but without the refund guarantee. We\'re always transparent about this before you pay.' },
      { q: 'What if I\'m not happy with a B and wanted an A?', a: 'Our guarantee covers "A or B." If you specify you need an A and we believe it\'s achievable, we\'ll target that. However, the guaranteed minimum is a B. If you need an A specifically due to GPA requirements, mention this in your quote request and we\'ll advise accordingly.' },
      { q: 'How long does a refund take?', a: 'Refunds are processed within 5 business days of confirming your final grade. The funds typically appear in 3–10 business days after processing, depending on your payment method.' },
    ],
  },
  {
    category: 'Safety & Confidentiality',
    faqs: [
      { q: 'Is it safe to have someone take my online class?', a: 'In 10+ years and 50,000+ completed classes, no student working with us has ever been flagged or disciplined by their university. We use best practices including VPN access from your region, normal login patterns, and we never discuss or disclose your class to anyone outside our internal team.' },
      { q: 'Will my school find out?', a: 'No. We log in using your credentials, from a VPN location matching your university\'s region, at normal hours, with normal usage patterns. Your university cannot detect that someone else is managing your class. We also permanently delete all credentials and personal data once your class is complete.' },
      { q: 'Who handles my login credentials?', a: 'Only your assigned expert and one account manager have access to your credentials. Credentials are stored in encrypted form and deleted immediately after your class ends.' },
      { q: 'Do you share my information with anyone?', a: 'Never. We don\'t use freelancer platforms or third-party contractors. All experts are in-house employees who sign strict NDAs. Your information stays within our internal team only.' },
    ],
  },
  {
    category: 'Pricing & Payment',
    faqs: [
      { q: 'How much does it cost to take my online class?', a: 'Our weekly class management starts at $49/week. Final pricing depends on the subject, academic level, and class duration. Get a personalized quote — it\'s free and we respond in under 2 hours.' },
      { q: 'Do I pay upfront or after the class?', a: 'Payment is made upfront before we begin managing your class. For full semester arrangements, we offer payment plans — ask about this in your quote request.' },
      { q: 'What payment methods do you accept?', a: 'We accept PayPal, major credit cards (Visa, Mastercard), and select cryptocurrencies. We do not accept bank transfers to personal accounts — be cautious of any service that asks for this.' },
      { q: 'Are there any hidden fees?', a: 'No. The price quoted is the price you pay. If anything unexpected arises mid-class that might change the scope, we contact you before making any adjustments.' },
    ],
  },
  {
    category: 'Process & Logistics',
    faqs: [
      { q: 'How quickly can you start taking my class?', a: 'We can typically start within 24 hours of receiving your class details and payment. For urgent situations (exam tomorrow, assignment due tonight), contact us directly on WhatsApp at +1 (763) 329-9406 and we\'ll do our best to accommodate.' },
      { q: 'What if I\'m already behind in my class?', a: 'We can absolutely help if you\'re behind. The earlier you contact us, the better our chance of recovering your grade. Depending on how far behind you are, we\'ll advise whether the full grade guarantee applies or whether we\'re working toward the best possible outcome.' },
      { q: 'Can you take exams, not just assignments?', a: 'Yes. We handle all components of your class — assignments, discussions, quizzes, midterms, finals, and proctored exams. For proctored exams with specific monitoring software, contact us to confirm compatibility first.' },
      { q: 'Which LMS platforms do you support?', a: 'All major platforms: Canvas, Blackboard, Brightspace/D2L, Moodle, Schoology, MyMathLab, ALEKS, McGraw-Hill Connect, WebAssign, Cengage MindTap, Pearson MyLab, and more. If you\'re unsure, just mention your LMS in your quote request.' },
      { q: 'Can you take multiple classes at the same time?', a: 'Yes. We regularly handle multiple concurrent classes for the same student. Each class gets its own dedicated expert. Mention all classes you need help with in your initial quote request.' },
      { q: 'Will I still be able to log into my class portal?', a: 'Yes. You retain full access to your class at all times. We simply also log in as needed to manage your coursework. Many students check in to see progress.' },
    ],
  },
  {
    category: 'Subjects & Experts',
    faqs: [
      { q: 'What subjects can you cover?', a: 'All undergraduate and graduate subjects — Math, Nursing, Accounting, Statistics, Biology, Psychology, Business, Chemistry, English, History, Computer Science, Finance, Criminal Justice, Sociology, Political Science, Philosophy, Marketing, Information Technology, Anatomy & Physiology, and more. We have 500+ experts across all academic disciplines.' },
      { q: 'What qualifications do your experts have?', a: 'All experts hold at minimum a Master\'s degree in their subject; most hold PhDs. They\'re hired after a rigorous interview and testing process. For nursing classes, our experts are registered nurses or nurse practitioners.' },
      { q: 'Can I request a specific expert?', a: 'If you\'ve worked with an expert before and would like to work with them again, mention this in your request and we\'ll do our best to assign the same person. For new students, we match you based on subject expertise and current availability.' },
    ],
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqCategories.flatMap(cat =>
    cat.faqs.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    }))
  ),
}

export default function FAQPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />
      <main>
        <section className="bg-hero-gradient py-16 px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-blue-200 text-lg">
              Everything you need to know about our online class help service, grade guarantee, pricing, and process.
            </p>
          </div>
        </section>

        <section className="py-20 bg-white px-4">
          <div className="max-w-3xl mx-auto">
            {faqCategories.map(({ category, faqs }) => (
              <div key={category} className="mb-14">
                <h2 className="text-xl font-extrabold text-navy-900 mb-6 pb-3 border-b-2 border-gold-500">
                  {category}
                </h2>
                <div className="space-y-3">
                  {faqs.map(({ q, a }, i) => (
                    <details key={i} className="group card cursor-pointer border border-gray-100 hover:border-gold-200 transition-colors">
                      <summary className="flex justify-between items-center font-semibold text-navy-900 list-none py-1 cursor-pointer">
                        <span className="pr-4">{q}</span>
                        <svg className="w-5 h-5 text-gold-500 flex-shrink-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </summary>
                      <p className="text-gray-600 text-sm leading-relaxed mt-4 pt-4 border-t border-gray-100">{a}</p>
                    </details>
                  ))}
                </div>
              </div>
            ))}

            <div className="bg-navy-50 rounded-2xl p-8 text-center border border-navy-100">
              <h3 className="font-extrabold text-navy-900 text-xl mb-3">Still Have Questions?</h3>
              <p className="text-gray-600 mb-6">Our team responds within 2 hours. Contact us by WhatsApp, phone, or email.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://wa.me/17633299406" className="btn-navy rounded-xl px-6 py-3">💬 WhatsApp Us</a>
                <a href="tel:+17656885315" className="btn-outline rounded-xl px-6 py-3">📞 Call Us</a>
                <a href="mailto:support@gradeguaranteed.com" className="btn-outline rounded-xl px-6 py-3">✉️ Email Us</a>
              </div>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  )
}
