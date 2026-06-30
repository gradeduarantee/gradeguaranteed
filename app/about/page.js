import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'About Us | GradeGuaranteed.com — Expert Online Class Help',
  description: 'Learn about GradeGuaranteed.com. 500+ PhD-level experts, an A or B grade guarantee, and a mission to help busy students succeed in their online courses.',
  robots: { index: true, follow: true },
}

const stats = [
  { number: '500+', label: 'Expert Tutors' },
  { number: '10,000+', label: 'Classes Completed' },
  { number: '98%', label: 'Grade Guarantee Rate' },
  { number: '4.9/5', label: 'Average Rating' },
]

const values = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Results First',
    desc: 'We back everything with a real grade guarantee. If you don\'t get an A or B, you get a full refund. No excuses, no fine print.'
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: '100% Confidential',
    desc: 'Your identity and order details are protected with military-grade encryption. Every expert signs an NDA. We take privacy seriously.'
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Expert Network',
    desc: 'Our 500+ experts hold advanced degrees — Master\'s and PhDs — in their fields. Every expert is vetted, tested, and matched to your exact subject.'
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: '24/7 Support',
    desc: 'Our student success team is available around the clock. Questions at 2am? We\'re here. Updates during your lunch break? Done.'
  },
]

const expertTypes = [
  { subject: 'Mathematics & Statistics', credential: 'PhD Mathematics, MIT' },
  { subject: 'Nursing & Healthcare', credential: 'DNP, Registered Nurse, 12 yrs' },
  { subject: 'Business & Accounting', credential: 'MBA, CPA, 15 yrs industry' },
  { subject: 'Biology & Chemistry', credential: 'PhD Biochemistry, Stanford' },
  { subject: 'Psychology & Sociology', credential: 'PhD Psychology, Columbia' },
  { subject: 'English & Humanities', credential: 'MFA, Published Author' },
]

export default function AboutUs() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-navy-950 pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-10 w-72 h-72 bg-gold-500 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
          </div>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <div className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/20 rounded-full px-4 py-2 mb-6">
              <span className="text-gold-400 text-sm font-medium">Our Story</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              We Built the Online Class Help Service<br />
              <span className="text-gold-400">We Wish We Had in College</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              GradeGuaranteed.com was founded by educators and former students who understood the pressure of balancing online coursework with real life. We built a service we could stand behind — with a grade guarantee that puts our money where our mouth is.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-navy-900 py-12">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-4xl font-bold text-gold-400 mb-2">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="bg-white py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold text-navy-900 mb-6">Our Mission</h2>
                <p className="text-gray-600 leading-relaxed mb-5">
                  Millions of Americans are enrolled in online courses while working full-time jobs, raising families, and managing the demands of real life. Online education was designed to provide flexibility — but the reality is often overwhelming workloads with no additional support.
                </p>
                <p className="text-gray-600 leading-relaxed mb-5">
                  GradeGuaranteed.com connects students with expert academic support — people who have mastered their subjects and can provide the help needed to succeed. Our mission is simple: make sure no capable, hardworking student fails because life got in the way.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Every student who comes to us gets paired with an expert who is genuinely qualified in their subject area. And we back every engagement with our unconditional A/B grade guarantee.
                </p>
              </div>
              <div className="bg-navy-50 rounded-2xl p-8">
                <blockquote className="text-navy-800 text-lg leading-relaxed italic mb-6">
                  &ldquo;We believe every student deserves a fair shot at success, regardless of how busy life gets. That&apos;s why we put our guarantee in writing and back it with a full refund.&rdquo;
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-navy-900 rounded-full flex items-center justify-center">
                    <span className="text-gold-400 font-bold text-lg">GG</span>
                  </div>
                  <div>
                    <div className="font-semibold text-navy-900">GradeGuaranteed Team</div>
                    <div className="text-gray-500 text-sm">New York, NY</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-navy-900 text-center mb-12">What We Stand For</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((v, i) => (
                <div key={i} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                  <div className="w-12 h-12 bg-navy-900 text-gold-400 rounded-xl flex items-center justify-center mb-5">
                    {v.icon}
                  </div>
                  <h3 className="text-lg font-bold text-navy-900 mb-3">{v.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experts */}
        <section className="bg-white py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy-900 mb-4">Our Expert Network</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Every expert in our network holds at minimum a Master&apos;s degree in their field. Most hold PhDs. All are vetted, background-checked, and tested before being assigned to students.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {expertTypes.map((e, i) => (
                <div key={i} className="border border-gray-200 rounded-xl p-6 hover:border-gold-400 transition-colors">
                  <div className="w-10 h-10 bg-gold-50 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-5 h-5 text-gold-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-navy-900 mb-1">{e.subject}</h3>
                  <p className="text-gray-500 text-sm">{e.credential}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Location */}
        <section className="bg-navy-950 py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-gold-400 font-bold text-sm uppercase tracking-wide mb-2">Headquarters</div>
                <p className="text-gray-300">60 E 42nd St #4600<br />New York, NY 10165<br />United States</p>
              </div>
              <div>
                <div className="text-gold-400 font-bold text-sm uppercase tracking-wide mb-2">Support</div>
                <p className="text-gray-300">support@gradeguaranteed.com<br />+1 (765) 688-5315<br />Available 24/7</p>
              </div>
              <div>
                <div className="text-gold-400 font-bold text-sm uppercase tracking-wide mb-2">Founded</div>
                <p className="text-gray-300">New York, United States<br />Serving students<br />across all 50 states</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gold-500 py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-navy-950 mb-4">Ready to Get Your Grade Guaranteed?</h2>
            <p className="text-navy-800 mb-8">Join 10,000+ students who got their A or B. Risk-free, confidential, guaranteed.</p>
            <Link href="/get-a-quote" className="inline-flex items-center gap-2 bg-navy-950 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-navy-900 transition-colors">
              Get a Free Quote Today
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}