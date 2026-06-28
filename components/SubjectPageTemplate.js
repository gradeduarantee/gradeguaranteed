import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CTASection from '@/components/CTASection'
import Link from 'next/link'

export default function SubjectPageTemplate({
  subject,           // e.g. "Math"
  slug,              // e.g. "math"
  headline,          // full h1
  metaDescription,
  intro,
  icon,
  tasks,             // array of { task, href } sub-pages
  topics,            // array of topic strings covered
  faqs,              // array of { q, a }
  weeklyRate,        // e.g. "$49–$59"
  relatedSubjects,   // array of { label, href }
  universities,      // array of university names
  reviews,           // array of { name, grade, school, text }
}) {
  const canonical = `https://gradeguaranteed.com/take-my-${slug}-class`

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-hero-gradient py-16 md:py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-gold-500/20 text-gold-400 text-sm font-semibold px-4 py-2 rounded-full border border-gold-500/30 mb-6">
                  <span>{icon}</span> 500+ PhD Experts in {subject}
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-5">
                  {headline}
                </h1>
                <p className="text-blue-200 text-lg leading-relaxed mb-8 max-w-xl">
                  {intro}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link href="/get-a-quote" className="btn-gold text-base px-8 py-4 rounded-xl text-center">
                    Get My Grade Guaranteed →
                  </Link>
                  <a href="https://wa.me/17633299406" target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-7 py-4 rounded-xl transition-all text-base">
                    💬 WhatsApp Us Now
                  </a>
                </div>
                <div className="flex flex-wrap gap-4 text-sm text-blue-200">
                  <span>✅ A or B Guaranteed</span>
                  <span>✅ {weeklyRate}/week</span>
                  <span>✅ PhD Experts</span>
                  <span>✅ 100% Refund if Missed</span>
                </div>
              </div>

              {/* Quick quote mini-form */}
              <div className="bg-white rounded-2xl shadow-2xl p-7 border border-gray-100">
                <h2 className="text-xl font-bold text-navy-900 mb-1">Get a Free Quote — 2 Hours</h2>
                <p className="text-gray-500 text-sm mb-5">Tell us about your {subject} class.</p>
                <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" className="space-y-4">
                  <input type="hidden" name="subject" value={subject} />
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input type="text" name="name" required placeholder="Your first name"
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input type="email" name="email" required placeholder="your@email.com"
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Course Name</label>
                    <input type="text" name="course" required placeholder={`e.g. ${subject} 201`}
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Class Duration</label>
                    <select name="duration" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy-500">
                      <option value="">Select duration</option>
                      <option>4 weeks</option>
                      <option>8 weeks</option>
                      <option>12 weeks</option>
                      <option>16 weeks (semester)</option>
                      <option>Single exam/assignment</option>
                    </select>
                  </div>
                  <button type="submit" className="w-full bg-navy-900 hover:bg-navy-800 text-white font-bold py-3.5 rounded-xl transition-all text-sm shadow-lg">
                    Get My Free Quote →
                  </button>
                </form>
                <p className="text-center text-xs text-gray-400 mt-3">🔒 Confidential • Free • No obligation</p>
              </div>
            </div>
          </div>
        </section>

        {/* Trust bar */}
        <section className="bg-navy-950 border-y border-navy-800 py-4 px-4">
          <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-6 md:gap-10 text-center">
            {[
              { v: '500+', l: `${subject} PhD Experts` },
              { v: weeklyRate, l: 'Starting Weekly Rate' },
              { v: 'A or B', l: 'Guaranteed' },
              { v: '4.9★', l: 'Student Rating' },
              { v: '< 2 hrs', l: 'Quote Response' },
            ].map(({ v, l }) => (
              <div key={l}>
                <div className="text-gold-500 font-extrabold text-lg">{v}</div>
                <div className="text-gray-400 text-xs">{l}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Topics covered */}
        {topics && topics.length > 0 && (
          <section className="py-16 bg-white px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="section-heading">What We Cover in {subject}</h2>
                <p className="section-subheading">Every topic, every level — for experts have it handled.</p>
              </div>
              <div className="flex flex-wrap gap-3 justify-center">
                {topics.map((t) => (
                  <span key={t} className="bg-navy-50 text-navy-900 font-medium text-sm px-4 py-2 rounded-full border border-navy-200">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Related task pages */}
        {tasks && tasks.length > 0 && (
          <section className="py-16 bg-navy-50 px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="section-heading">Specific {subject} Help</h2>
                <p className="section-subheading">Need help with a specific part of your {subject} class?</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {tasks.map(({ task, href }) => (
                  <Link key={href} href={href}
                    className="bg-white rounded-xl p-4 text-center border border-gray-200 hover:border-gold-300 hover:shadow-md transition-all text-sm font-medium text-navy-900">
                    {task}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Why us for this subject */}
        <section className="py-16 bg-white px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="section-heading">Why Choose Us for {subject}?</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: '🎓', title: `PhD ${subject} Experts`, desc: `Our ${subject} experts hold advanced degrees specifically in ${subject}. Not generalists — subject-matter specialists.` },
                { icon: '🏆', title: 'A or B Guaranteed', desc: `We guarantee your ${subject} class grade will be an A or B — or you get a 100% refund. No other service does this.` },
                { icon: '💰', title: `Starting at ${weeklyRate}/week`, desc: 'Transparent pricing published upfront. No hidden fees, no bait-and-switch. Get an exact quote in 2 hours.' },
                { icon: '➡', title: 'Start Within 24 Hours', desc: 'Submit your class details today and your assigned expert starts tomorrow. Or even sooner for urgent cases.' },
                { icon: '🔒', title: '100% Confidential', desc: 'Your university will never know. We delete all your data after class completion.' },
                { icon: '🇺🇸', title: 'US-Registered Company', desc: 'New York, NY. A real American company with accountability — not an overseas operator.' },
              ].map(({ icon, title, desc }) => (
                <div key={title} className="card hover:shadow-xl">
                  <div className="text-3xl mb-3">{icon}</div>
                  <h3 className="text-navy-900 font-bold mb-2">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Universities */}
        {universities && universities.length > 0 && (
          <section className="py-12 bg-navy-50 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-navy-800 mb-6">We serve {subject} for</h2>
              <div className="flex flex-wrap gap-3 justify-center">
                {universities.map((u) => (
                  <span key={u} className="bg-white text-navy-700 text-sm px-4 py-2 rounded-full border border-gray-200 shadow-sm">
                    {u}
                  </span>
                ))}
                <span className="bg-yellow-50 text-yellow-800 text-sm font-semibold px-4 py-2 rounded-full border border-yellow-300">
                  + 500+ other universities
                </span>
              </div>
              <p className="text-navy-500 text-sm mt-4">Don&#39;t see your university? We cover all accredited US universities and community colleges.</p>
            </div>
          </section>
        )}

        {/* Reviews */}
        {reviews && reviews.length > 0 && (
          <section className="py-16 bg-white px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="section-heading">What Students Say About Our {subject} Help</h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {reviews.map((r, i) => (
                  <div key={i} className="card border border-gray-100">
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(5)].map((_, s) => (
                        <svg key={s} className="w4 h-4 text-gold-500" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 000.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-gray-600 text-sm italic leading-relaxed mb-4">"{r.text}"</p>
                    <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                      <div>
                        <div className="font-bold text-navy-900 text-sm">{r.name}</div>
                        <div className="text-gray-400 text-xs">{r.school}</div>
                      </div>
                      <div className="bg-green-100 text-green-700 font-extrabold text-lg px-3 py-1 rounded-lg">{r.grade}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FAQs */}
        {faqs && faqs.length > 0 && (
          <section className="py-16 bg-navy-50 px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="section-heading text-center mb-10">FAQ — Take My {subject} Class</h2>
              <div className="space-y-3">
                {faqs.map(({ q, a }, i) => (
                  <details key={i} className="group bg-white rounded-xl px-6 py-5 cursor-pointer border border-gray-200 shadow-sm">
                    <summary className="flex justify-between items-center font-semibold text-navy-900 list-none cursor-pointer">
                      <span className="pr-4">{q}</span>
                      <svg className="w5 h-5 text-gold-500 flex-shrink-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <p className="text-gray-600 text-sm leading-relaxed mt-4 pt-4 border-t border-gray-100">{a}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Related subjects */}
        {relatedSubjects && relatedSubjects.length > 0 && (
          <section className="py-10 bg-white px-4">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-gray-500 text-sm mb-4 font-medium">Need help with another subject?</p>
              <div className="flex flex-wrap justify-center gap-3">
                {relatedSubjects.map(({ label, href }) => (
                  <Link key={href} href={href} className="text-navy-900 border border-navy-200 rounded-full px-4 py-2 text-sm font-medium hover:bv-navy-900 hover:text-white transition-all">
                    Take My {label} Class
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <CTASection
          headline={`Ready to Guarantee Your ${subject} Grade?`}
          subheadline={`Get a free quote in under 2 hours. A PhD ${subject} expert will be assigned to your class and your grade guaranteed in writing.`}
          cta={`Get My ${subject} Grade Guaranteed →`}
        />
      </main>
      <Footer />
    </>
  )
}
