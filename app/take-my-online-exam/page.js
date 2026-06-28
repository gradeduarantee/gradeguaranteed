import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CTASection from '@/components/CTASection'
import Link from 'next/link'

export const metadata = {
  title: 'Take My Online Exam For Me — A or B Guaranteed',
  description: 'Pay a PhD expert to take your online exam. Timed tests, midterms, finals, quizzes — all subjects. A or B guaranteed or 100% refund. Fast response.',
  alternates: { canonical: 'https://gradeguaranteed.com/take-my-online-exam' },
}

export default function TakeMyOnlineExam() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-hero-gradient py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-gold-500/20 text-gold-400 text-sm font-bold px-4 py-2 rounded-full border border-gold-500/30 mb-6">
              📝 All Exam Types — All Subjects — Grade Guaranteed
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-5 leading-tight">
              Take My Online Exam For Me<br />
              <span className="text-gold-500">— Grade Guaranteed</span>
            </h1>
            <p className="text-blue-200 text-xl max-w-2xl mx-auto mb-8">
              Our PhD experts take your online exam — timed quizzes, midterms, finals, and comprehensive exams — across all subjects. A or B guaranteed or full refund.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/get-a-quote" className="btn-gold text-lg px-10 py-4 rounded-xl">Get My Exam Handled →</Link>
              <a href="https://wa.me/17633299406" className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl text-lg">
                💬 WhatsApp — Fast Response
              </a>
            </div>
          </div>
        </section>

        {/* Exam types */}
        <section className="py-20 bg-white px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="section-heading">Every Type of Online Exam Covered</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: '⏱️', title: 'Timed Exams', desc: 'Our expert takes your timed test in real time. Most platforms allow login from a different location — we advise on the best approach for your specific setup.' },
                { icon: '📋', title: 'Midterms & Finals', desc: 'High-stakes exams handled by the same PhD expert managing your full class. Full preparation and execution.' },
                { icon: '✍️', title: 'Essay Exams', desc: 'Open-response, short answer, and essay format exams. Our experts write structured, well-argued responses that score full marks.' },
                { icon: '🔢', title: 'Multiple Choice Tests', desc: 'Objective tests across all subjects — math, science, business, humanities. Our experts work fast and accurately.' },
                { icon: '📐', title: 'Problem-Based Exams', desc: 'Math, statistics, chemistry, physics — quantitative exams with full working shown where required.' },
                { icon: '🏥', title: 'ATI & HESI Exams', desc: 'Nursing-specific standardized assessments handled by our registered nurse experts.' },
              ].map(({ icon, title, desc }) => (
                <div key={title} className="card border border-gray-100 hover:border-gold-300 transition-colors">
                  <div className="text-3xl mb-3">{icon}</div>
                  <h3 className="font-bold text-navy-900 mb-2">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works for exams */}
        <section className="py-20 bg-navy-50 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="section-heading">How We Handle Your Online Exam</h2>
            </div>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              {[
                { num: '01', title: 'Share Exam Details', desc: 'Tell us the subject, exam date/time, platform, duration, and any notes about format.' },
                { num: '02', title: 'Expert Prepares', desc: 'Your assigned PhD expert reviews course material and prepares specifically for your exam.' },
                { num: '03', title: 'Expert Takes the Exam', desc: 'At exam time, your expert logs in and completes the exam with full focus and expertise.' },
                { num: '04', title: 'Grade Confirmed', desc: 'You receive your exam grade — A or B guaranteed, or full refund.' },
              ].map(({ num, title, desc }) => (
                <div key={num}>
                  <div className="w-14 h-14 bg-navy-900 text-gold-500 rounded-2xl flex items-center justify-center text-xl font-extrabold mx-auto mb-4">{num}</div>
                  <h3 className="font-bold text-navy-900 mb-2">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-white px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-heading text-center mb-10">Online Exam FAQ</h2>
            <div className="space-y-3">
              {[
                { q: 'What if my exam is timed and very fast?', a: 'Our experts are experienced with timed exams. They work quickly and accurately. For very short timed windows (e.g., 20 questions in 20 minutes), let us know and we\'ll confirm feasibility before you pay.' },
                { q: 'Can you handle an exam at any time of day?', a: 'Yes. We have experts available 24/7 — including late-night exams, early morning slots, and weekend exams.' },
                { q: 'What subjects can you cover for exams?', a: 'All subjects — Math, Nursing, Accounting, Statistics, Biology, Psychology, Business, Chemistry, English, History, Computer Science, Finance, and more.' },
                { q: 'Is there a risk of getting caught during an exam?', a: 'For non-proctored online exams, the risk is extremely low. We log in with your credentials from a normal browser. The platform logs show a normal login — nothing suspicious.' },
                { q: 'What if the exam requires an essay answer?', a: 'Our experts write complete, original essay responses in your academic voice. We provide full answers that read authentically for your level and course.' },
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
          headline="Need Your Online Exam Handled?"
          subheadline="Tell us your exam date and subject. We'll assign a PhD expert and guarantee your result."
          cta="Get My Exam Handled →"
        />
      </main>
      <Footer />
    </>
  )
}
