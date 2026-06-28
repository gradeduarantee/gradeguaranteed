import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Get a Free Quote — Online Class Help',
  description: 'Get a free, personalized quote to take your online class. We respond in under 2 hours. A or B grade guaranteed. 500+ PhD experts.',
  alternates: { canonical: 'https://gradeguaranteed.com/get-a-quote' },
}

export default function GetAQuotePage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-hero-gradient py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left: info */}
              <div className="text-white">
                <span className="text-gold-400 font-bold text-sm uppercase tracking-wider">Free, No Obligation</span>
                <h1 className="text-4xl md:text-5xl font-extrabold mt-3 mb-5 leading-tight">
                  Get Your Free<br />
                  <span className="text-gold-500">Personalized Quote</span>
                </h1>
                <p className="text-blue-200 text-lg leading-relaxed mb-8">
                  Tell us about your class and we'll send you an exact price within 2 hours — including confirmation of your grade guarantee eligibility.
                </p>

                <div className="space-y-5 mb-10">
                  {[
                    { icon: '⚡', title: 'Response in Under 2 Hours', desc: 'A real person reviews your class details and sends an exact quote — not an automated range.' },
                    { icon: '🏆', title: 'Grade Guarantee Confirmed', desc: 'We confirm whether an A or B guarantee applies to your specific class before you pay.' },
                    { icon: '🔒', title: '100% Confidential', desc: 'Your information is never shared and deleted after your class ends.' },
                    { icon: '💰', title: 'No Upfront Commitment', desc: 'Getting a quote is completely free. No payment required to receive your quote.' },
                  ].map(({ icon, title, desc }) => (
                    <div key={title} className="flex gap-4">
                      <span className="text-2xl flex-shrink-0">{icon}</span>
                      <div>
                        <h3 className="font-bold text-white mb-1">{title}</h3>
                        <p className="text-blue-200 text-sm leading-relaxed">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-navy-800/60 rounded-xl p-5 border border-navy-700">
                  <p className="text-blue-200 text-sm font-medium mb-3">Prefer to chat directly?</p>
                  <div className="flex flex-col gap-3">
                    <a href="https://wa.me/17633299406" className="flex items-center gap-2 text-green-400 font-semibold text-sm hover:text-green-300">
                      💬 WhatsApp: +1 (763) 329-9406
                    </a>
                    <a href="tel:+17656885315" className="flex items-center gap-2 text-gold-400 font-semibold text-sm hover:text-gold-300">
                      📞 Call/Text: +1 (765) 688-5315
                    </a>
                    <a href="mailto:support@gradeguaranteed.com" className="flex items-center gap-2 text-blue-300 font-semibold text-sm hover:text-blue-200">
                      ✉️ support@gradeguaranteed.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Right: form */}
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <h2 className="text-2xl font-bold text-navy-900 mb-1">Tell Us About Your Class</h2>
                <p className="text-gray-500 text-sm mb-6">The more detail you provide, the faster and more accurate your quote will be.</p>

                <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" className="space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
                      <input type="text" name="first_name" required placeholder="First name"
                        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy-500" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                      <input type="text" name="last_name" placeholder="Last name"
                        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy-500" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                    <input type="email" name="email" required placeholder="your@email.com"
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone / WhatsApp</label>
                    <input type="tel" name="phone" placeholder="+1 (555) 000-0000"
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">University / College *</label>
                    <input type="text" name="university" required placeholder="e.g. SNHU, WGU, Strayer"
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Course Name & Subject *</label>
                    <input type="text" name="course" required placeholder="e.g. NUR 201 — Pharmacology, ACCT 101"
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy-500" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Learning Platform *</label>
                      <select name="lms" required className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy-500">
                        <option value="">Select LMS</option>
                        <option>Canvas</option>
                        <option>Blackboard</option>
                        <option>Brightspace / D2L</option>
                        <option>Moodle</option>
                        <option>MyMathLab</option>
                        <option>ALEKS</option>
                        <option>McGraw-Hill Connect</option>
                        <option>WebAssign</option>
                        <option>Cengage MindTap</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Class Duration *</label>
                      <select name="duration" required className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy-500">
                        <option value="">Select duration</option>
                        <option>4 weeks (mini-term)</option>
                        <option>6 weeks</option>
                        <option>8 weeks</option>
                        <option>12 weeks</option>
                        <option>16 weeks (semester)</option>
                        <option>Single assignment / exam</option>
                        <option>Self-paced (WGU, Capella)</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Current Grade (if class has started)</label>
                    <select name="current_grade" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy-500">
                      <option value="">Not started yet</option>
                      <option>A (90%+)</option>
                      <option>B (80–89%)</option>
                      <option>C (70–79%)</option>
                      <option>D (60–69%)</option>
                      <option>F / Failing (below 60%)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Any upcoming deadlines or exams?</label>
                    <input type="text" name="deadlines" placeholder="e.g. Final exam on July 15th, assignment due tomorrow"
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Additional Details</label>
                    <textarea name="message" rows={3}
                      placeholder="Anything else we should know — professor notes, special requirements, multiple classes..."
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy-500 resize-none" />
                  </div>
                  <button type="submit"
                    className="w-full bg-navy-900 hover:bg-navy-800 text-white font-bold py-4 rounded-xl transition-all text-base shadow-lg">
                    Send My Quote Request →
                  </button>
                  <p className="text-center text-xs text-gray-400">
                    🔒 100% confidential • Free, no obligation • We respond in under 2 hours
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* After submit */}
        <section className="py-12 bg-navy-50 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-extrabold text-navy-900 mb-4">What Happens After You Submit?</h2>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              {[
                { num: '1', title: 'We Review Your Details', desc: 'A real team member reads your class details and evaluates the best expert match and pricing.' },
                { num: '2', title: 'You Receive an Exact Quote', desc: 'Within 2 hours, you get an exact price, expert profile, and grade guarantee confirmation.' },
                { num: '3', title: 'You Decide — No Pressure', desc: 'If you\'re happy with the quote, we proceed. If not, you owe us nothing.' },
              ].map(({ num, title, desc }) => (
                <div key={num} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <div className="w-10 h-10 bg-navy-900 text-gold-500 rounded-xl flex items-center justify-center font-extrabold mx-auto mb-3">{num}</div>
                  <h3 className="font-bold text-navy-900 mb-2">{title}</h3>
                  <p className="text-gray-500 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
