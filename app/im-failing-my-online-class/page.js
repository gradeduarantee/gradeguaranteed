import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'I\'m Failing My Online Class — Emergency Help Available',
  description: 'Failing your online class? We can help recover your grade even if you\'re far behind. 500+ PhD experts available immediately. Free quote in under 2 hours.',
  alternates: { canonical: 'https://gradeguaranteed.com/im-failing-my-online-class' },
}

export default function FailingMyOnlineClass() {
  return (
    <>
      <Header />
      <main>
        {/* Urgent hero */}
        <section className="bg-gradient-to-br from-red-900 via-navy-900 to-navy-950 py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-red-500/20 text-red-300 text-sm font-bold px-4 py-2 rounded-full border border-red-500/30 mb-6">
              🚨 Emergency Class Help — We Start Within 24 Hours
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-5 leading-tight">
              Failing Your Online Class?<br />
              <span className="text-gold-500">We Can Still Save It.</span>
            </h1>
            <p className="text-blue-200 text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
              Even if you're behind on assignments, have a failing grade right now, or have missed weeks of class — our PhD experts can take over immediately and work to recover your grade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/get-a-quote" className="btn-gold text-lg px-10 py-4 rounded-xl">
                Get Emergency Help Now →
              </Link>
              <a href="https://wa.me/17633299406" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all">
                💬 WhatsApp — Instant Response
              </a>
            </div>
            <p className="text-blue-300 text-sm mt-5">⚡ Average response time: under 2 hours &nbsp;•&nbsp; Can start within 24 hours</p>
          </div>
        </section>

        {/* Situations we handle */}
        <section className="py-20 bg-white px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="section-heading">Whatever Your Situation — We've Seen It Before</h2>
              <p className="section-subheading max-w-2xl mx-auto">Tell us where you are. We'll be honest about what's achievable.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: '📉',
                  situation: 'You\'re far behind on assignments',
                  detail: 'Multiple missed assignments dragging your grade down? Our expert catches up on past-due work (where the platform allows late submissions) and takes over all remaining coursework.',
                  outcome: 'Best case: Full grade recovery. Realistic: Significant grade improvement.',
                },
                {
                  icon: '⏰',
                  situation: 'You\'ve just started failing and there\'s still time',
                  detail: 'If you\'re 4+ weeks from the end with a grade that can still be recovered, our guarantee typically applies. The earlier you contact us, the better.',
                  outcome: 'Best case: A or B final grade (with guarantee). Realistic: Grade recovery.',
                },
                {
                  icon: '🎓',
                  situation: 'You need to pass to keep financial aid',
                  detail: 'Failing affects Satisfactory Academic Progress (SAP). We prioritize getting you above the minimum passing threshold while targeting the highest achievable grade.',
                  outcome: 'Best case: A or B. Minimum target: C (passing for SAP purposes).',
                },
                {
                  icon: '📅',
                  situation: 'Big exam or assignment due very soon',
                  detail: 'Exam in 48 hours? Assignment due tomorrow? Contact us immediately via WhatsApp. We have experts available around the clock for urgent situations.',
                  outcome: 'Best case: Expert takes over exam/assignment immediately.',
                },
                {
                  icon: '💔',
                  situation: 'You\'ve completely checked out and missed weeks',
                  detail: 'Life happens. If you\'ve missed weeks of class, we assess what can still be submitted, calculate what grade is mathematically achievable, and take over from there.',
                  outcome: 'Best case: Grade recovery. We\'ll always be honest if a situation is too far gone.',
                },
                {
                  icon: '🔄',
                  situation: 'You\'re considering withdrawing',
                  detail: 'Before you W, talk to us. A W affects your transcript and GPA differently than a C or even a D. We may be able to save the class — and your record.',
                  outcome: 'Best case: No withdrawal needed. Grade recovered.',
                },
              ].map(({ icon, situation, detail, outcome }) => (
                <div key={situation} className="card border-l-4 border-gold-500 hover:shadow-xl">
                  <div className="text-3xl mb-3">{icon}</div>
                  <h3 className="font-bold text-navy-900 text-lg mb-2">{situation}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">{detail}</p>
                  <div className="bg-green-50 rounded-lg px-4 py-2 text-green-700 text-xs font-medium">
                    ✓ {outcome}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Honest section */}
        <section className="py-16 bg-amber-50 border-y border-amber-200 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-amber-600 font-bold text-sm uppercase tracking-wider">We'll Be Straight With You</span>
            <h2 className="text-3xl font-extrabold text-navy-900 mt-3 mb-5">We Won't Take Your Money If We Can't Help</h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-6">
              Some situations are too far gone for a grade guarantee. If your final grade is mathematically unrecoverable, we'll tell you that upfront — before you pay anything. We'd rather lose a sale than take money we can't earn.
            </p>
            <p className="text-gray-600 leading-relaxed">
              In those cases, we can still take over the class and do our absolute best — just without the formal guarantee. Many students still benefit significantly from having an expert handle remaining coursework, even in difficult situations.
            </p>
          </div>
        </section>

        {/* Process for emergencies */}
        <section className="py-20 bg-white px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="section-heading">Our Emergency Process</h2>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { num: '01', title: 'Contact Us NOW', desc: 'WhatsApp or form. Share your current grade, what\'s due, and when. Don\'t wait.' },
                { num: '02', title: 'Grade Assessment', desc: 'We calculate what\'s mathematically achievable given your current standing.' },
                { num: '03', title: 'Expert Assigned', desc: 'Within hours, your PhD expert is assigned and starts reviewing your class portal.' },
                { num: '04', title: 'Recovery Begins', desc: 'Late submissions filed, upcoming work completed, grade tracked weekly.' },
              ].map(({ num, title, desc }) => (
                <div key={num} className="text-center">
                  <div className="w-14 h-14 bg-red-700 text-white rounded-2xl flex items-center justify-center text-xl font-extrabold mx-auto mb-4 shadow-lg">{num}</div>
                  <h3 className="font-bold text-navy-900 mb-2">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-hero-gradient py-20 px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-extrabold text-white mb-4">Don't Wait — Every Day Matters</h2>
            <p className="text-blue-200 text-lg mb-8 max-w-2xl mx-auto">The sooner you contact us, the more we can do. Get help now — even if you think it's too late.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/get-a-quote" className="btn-gold text-lg px-10 py-4 rounded-xl">Get Emergency Help →</Link>
              <a href="https://wa.me/17633299406" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl text-lg">
                💬 WhatsApp Us Now
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
