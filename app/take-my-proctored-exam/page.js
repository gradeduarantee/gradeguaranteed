import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CTASection from '@/components/CTASection'
import Link from 'next/link'

export const metadata = {
  title: 'Take My Proctored Exam For Me — Expert Help Available',
  description: 'Need help with a proctored online exam? Our experts assist with Respondus, ProctorU, Honorlock, and more. Contact us to discuss your specific setup.',
  alternates: { canonical: 'https://gradeguaranteed.com/take-my-proctored-exam' },
}

export default function TakeMyProctoredExam() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-hero-gradient py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-gold-500/20 text-gold-400 text-sm font-bold px-4 py-2 rounded-full border border-gold-500/30 mb-6">
              🔐 Proctored Exam Help — Contact Us First
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-5 leading-tight">
              Take My Proctored Exam<br />
              <span className="text-gold-500">— Expert Assistance</span>
            </h1>
            <p className="text-blue-200 text-xl max-w-2xl mx-auto mb-8">
              Struggling with an upcoming proctored exam? Our experts provide targeted preparation and real-time support. Contact us first — we'll assess your specific proctoring setup and advise on the best approach.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/17633299406" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-10 py-4 rounded-xl text-lg transition-all">
                💬 Discuss My Exam on WhatsApp
              </a>
              <Link href="/get-a-quote" className="btn-gold text-lg px-8 py-4 rounded-xl text-center">
                Submit Details →
              </Link>
            </div>
          </div>
        </section>

        {/* What we offer */}
        <section className="py-20 bg-white px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="section-heading">How We Help With Proctored Exams</h2>
              <p className="section-subheading max-w-2xl mx-auto">
                Proctored exams vary significantly in their monitoring requirements. We evaluate each situation individually and offer the most effective support possible.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: '📚',
                  title: 'Intensive Exam Preparation',
                  desc: 'Our PhD experts create customized study guides, practice tests, and targeted review sessions for your specific exam content. Students who use our prep services often improve by 20–30%.',
                  badge: 'Always available',
                  color: 'green',
                },
                {
                  icon: '🎯',
                  title: 'Real-Time Guidance (WhatsApp)',
                  desc: 'For many exam setups, our expert can provide real-time question guidance via WhatsApp as you take the exam. You read the question to us, we provide the answer — quickly and discreetly.',
                  badge: 'Available for most setups',
                  color: 'blue',
                },
                {
                  icon: '💻',
                  title: 'Technical Assessment',
                  desc: 'We review your specific proctoring software (Respondus, ProctorU, Honorlock, Proctorio) and advise on what approaches are feasible given your specific setup, browser, and device.',
                  badge: 'Case by case',
                  color: 'yellow',
                },
                {
                  icon: '📋',
                  title: 'Post-Exam Review & Appeals',
                  desc: 'If an exam result was unsatisfactory, we help you prepare for retakes, understand what went wrong, and optimize your approach for the next attempt.',
                  badge: 'Always available',
                  color: 'green',
                },
              ].map(({ icon, title, desc, badge, color }) => (
                <div key={title} className="card border border-gray-100 hover:shadow-xl">
                  <div className="flex items-start justify-between mb-3">
                    <div className="text-3xl">{icon}</div>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                      color === 'green' ? 'bg-green-100 text-green-700' :
                      color === 'blue' ? 'bg-blue-100 text-blue-700' :
                      'bg-amber-100 text-amber-700'
                    }`}>{badge}</span>
                  </div>
                  <h3 className="font-bold text-navy-900 text-lg mb-3">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Proctoring platforms */}
        <section className="py-16 bg-navy-50 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="section-heading">Proctoring Platforms We've Worked With</h2>
              <p className="text-gray-500 mt-2">Contact us with your specific platform — we'll advise on what support is possible.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                'Respondus LockDown Browser', 'ProctorU', 'Honorlock', 'Proctorio',
                'ExamSoft / Examplify', 'Smarter Proctoring', 'Meazure Learning', 'Kryterion',
                'ATI Testing', 'HESI', 'Pearson VUE', 'Castle Worldwide',
              ].map((p) => (
                <div key={p} className="bg-white rounded-lg p-4 text-center text-sm font-medium text-navy-900 border border-gray-200 shadow-sm">
                  {p}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why contact us first */}
        <section className="py-16 bg-amber-50 border-y border-amber-200 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-amber-600 font-bold text-sm uppercase tracking-wider">Important</span>
            <h2 className="text-2xl font-extrabold text-navy-900 mt-3 mb-5">Why We Always Assess First</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Proctored exams are not one-size-fits-all. A class using basic LockDown Browser is very different from one using AI-powered webcam monitoring with eye tracking. We assess your specific situation honestly and recommend only what's feasible.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We never take payment for proctored exam help if we don't believe we can deliver value. Our reputation depends on honesty — not overpromising.
            </p>
            <div className="mt-8">
              <a href="https://wa.me/17633299406" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl text-base transition-all">
                💬 Discuss My Specific Exam
              </a>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 bg-white px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-heading text-center mb-10">Proctored Exam FAQ</h2>
            <div className="space-y-3">
              {[
                { q: 'What\'s the difference between a proctored and non-proctored online exam?', a: 'A non-proctored exam is taken independently through your LMS with no live monitoring. A proctored exam uses software (Respondus, ProctorU, etc.) that monitors your screen, webcam, and browser activity during the exam.' },
                { q: 'Can you still help if I have a proctored exam?', a: 'It depends on the specific setup. Contact us via WhatsApp with your proctoring platform details. We\'ll assess and advise honestly on what support we can provide — whether that\'s real-time WhatsApp guidance, intensive prep, or another approach.' },
                { q: 'What about ATI or HESI nursing exams?', a: 'Our nursing experts have extensive experience helping students prepare for ATI and HESI exams. Contact us for assessment of your specific exam type.' },
                { q: 'Is it possible to take someone\'s place during a live proctored exam?', a: 'This varies significantly by platform. Some setups are more flexible than others. We assess this individually — contact us with your specific platform and we\'ll be straight with you about what\'s possible.' },
              ].map(({ q, a }, i) => (
                <details key={i} className="group card cursor-pointer border border-gray-100">
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
          headline="Have a Proctored Exam Coming Up?"
          subheadline="Contact us via WhatsApp — we respond immediately and assess your specific situation honestly."
          cta="Discuss My Exam →"
        />
      </main>
      <Footer />
    </>
  )
}
