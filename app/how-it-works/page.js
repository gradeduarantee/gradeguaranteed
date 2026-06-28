import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CTASection from '@/components/CTASection'
import Link from 'next/link'

export const metadata = {
  title: 'How It Works — Take My Online Class in 4 Steps',
  description: 'Learn exactly how GradeGuaranteed.com takes your online class. 4 simple steps: quote, expert match, class management, guaranteed grade. No risk.',
  alternates: { canonical: 'https://gradeguaranteed.com/how-it-works' },
}

const steps = [
  {
    num: '01',
    title: 'Submit Your Class Details',
    time: '5 minutes',
    icon: '📋',
    desc: 'Fill out our simple form with your class name, university, LMS (Canvas, Blackboard, etc.), current grade, and key deadlines. The more detail you give us, the faster we can match you.',
    details: ['Class name and subject', 'University and LMS platform', 'Current grade (if already started)', 'Assignment deadlines and exam dates', 'Your target grade'],
  },
  {
    num: '02',
    title: 'We Send You a Quote in Under 2 Hours',
    time: 'Under 2 hours',
    icon: '⚡',
    desc: 'Our team reviews your class details and sends you a personalized price quote. No automated response — a real person evaluates your class and confirms whether the grade guarantee applies.',
    details: ['Exact price (no ranges)', 'Named expert who will handle your class', 'Confirmation of grade guarantee eligibility', 'Payment options and process', 'Start date confirmed'],
  },
  {
    num: '03',
    title: 'Your Expert Takes Over Completely',
    time: 'Ongoing',
    icon: '🎓',
    desc: 'Once you confirm, your assigned PhD expert logs into your class portal using your credentials. They handle every aspect of your class — assignments, discussions, quizzes, exams, and participation.',
    details: ['All assignments submitted on time', 'Discussion boards handled', 'Quizzes and tests completed', 'Weekly progress updates sent to you', 'Any new surprises in the class managed immediately'],
  },
  {
    num: '04',
    title: 'You Receive Your Guaranteed Grade',
    time: 'End of class',
    icon: '🏆',
    desc: 'Your class ends with an A or B — guaranteed in writing. If for any reason the grade falls below B, you receive a 100% full refund. No hassle, no questions, no excuses.',
    details: ['A or B final grade', '100% refund if grade not achieved', 'Certificate of completion (if applicable)', 'Free consultation for next class', 'Ongoing support if needed'],
  },
]

export default function HowItWorksPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-hero-gradient py-16 px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <span className="text-gold-400 font-bold text-sm uppercase tracking-wider">Simple Process</span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-3 mb-5">
              How We Take Your<br /><span className="text-gold-500">Online Class For You</span>
            </h1>
            <p className="text-blue-200 text-lg leading-relaxed">
              From first contact to guaranteed grade in 4 straightforward steps. You're never in the dark — we keep you updated every step of the way.
            </p>
          </div>
        </section>

        {/* Steps */}
        <section className="py-20 bg-white px-4">
          <div className="max-w-5xl mx-auto">
            <div className="space-y-16">
              {steps.map(({ num, title, time, icon, desc, details }, i) => (
                <div key={num} className={`grid md:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? 'md:grid-flow-col-dense' : ''}`}>
                  <div className={i % 2 === 1 ? 'md:col-start-2' : ''}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 bg-navy-900 text-gold-500 rounded-2xl flex items-center justify-center text-2xl font-extrabold shadow-lg flex-shrink-0">
                        {num}
                      </div>
                      <div className="bg-gold-500/10 text-gold-600 text-xs font-bold px-3 py-1.5 rounded-full">
                        ⏱ {time}
                      </div>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-navy-900 mb-4">{title}</h2>
                    <p className="text-gray-600 leading-relaxed mb-6">{desc}</p>
                    <ul className="space-y-2">
                      {details.map((d) => (
                        <li key={d} className="flex items-center gap-2.5 text-sm text-gray-600">
                          <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`bg-navy-50 rounded-2xl p-10 text-center border border-navy-100 ${i % 2 === 1 ? 'md:col-start-1' : ''}`}>
                    <div className="text-8xl mb-4">{icon}</div>
                    <div className="text-navy-900 font-extrabold text-6xl opacity-10">0{i + 1}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security & confidentiality */}
        <section className="py-20 bg-navy-50 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="section-heading">Your Security & Privacy</h2>
              <p className="section-subheading max-w-2xl mx-auto">We take confidentiality as seriously as we take your grade. Here's exactly how we protect you.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: '🔐', title: 'Login Security', desc: 'We log into your LMS from a VPN location matching your university region, so your access pattern looks normal.' },
                { icon: '🗑️', title: 'Data Deletion', desc: 'Once your class is complete, all your credentials and personal data are permanently deleted from our systems.' },
                { icon: '🤫', title: 'Complete NDA', desc: 'Every expert signs an NDA before starting. Your class information never leaves our internal team.' },
                { icon: '💳', title: 'Secure Payments', desc: 'We accept PayPal, credit card, and cryptocurrency. No payment info is stored on our servers.' },
                { icon: '📵', title: 'Zero Third Parties', desc: 'We don\'t use freelancer platforms or outsource to third parties. Your class stays in-house.' },
                { icon: '👁️', title: 'No Records Kept', desc: 'We don\'t keep logs of your class activity, academic records, or personal information beyond what\'s needed.' },
              ].map(({ icon, title, desc }) => (
                <div key={title} className="card">
                  <div className="text-2xl mb-3">{icon}</div>
                  <h3 className="font-bold text-navy-900 mb-2">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* LMS platforms */}
        <section className="py-20 bg-white px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="section-heading mb-4">We Work With Every Major LMS</h2>
            <p className="section-subheading mb-10">Whatever system your university uses, we've worked with it.</p>
            <div className="flex flex-wrap justify-center gap-4">
              {['Canvas', 'Blackboard', 'Brightspace / D2L', 'Moodle', 'Schoology', 'Google Classroom', 'Sakai', 'MyMathLab', 'ALEKS', 'McGraw-Hill Connect', 'WebAssign', 'Cengage MindTap', 'Pearson MyLab'].map((lms) => (
                <span key={lms} className="bg-navy-50 text-navy-900 font-medium text-sm px-4 py-2 rounded-full border border-navy-200">
                  {lms}
                </span>
              ))}
            </div>
          </div>
        </section>

        <CTASection
          headline="Ready to Get Started?"
          subheadline="Get your free quote in under 2 hours. An expert will be assigned to your class by tomorrow."
          cta="Start My Grade Guarantee"
        />
      </main>
      <Footer />
    </>
  )
}
