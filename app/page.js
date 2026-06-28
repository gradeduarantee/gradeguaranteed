import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CTASection from '@/components/CTASection'

export const metadata = {
  title: 'Take My Online Class For Me — A or B Guaranteed | GradeGuaranteed.com',
  description: 'Pay someone to take your online class. 500+ in-house PhD experts. A or B grade guaranteed or 100% refund. $49/week. New York, USA. All subjects.',
  alternates: { canonical: 'https://gradeguaranteed.com' },
  openGraph: {
    title: 'Take My Online Class For Me — A or B Guaranteed',
    description: '500+ PhD experts take your online class. Grade guaranteed or your money back. $49/week.',
    url: 'https://gradeguaranteed.com',
  },
}

const subjects = [
  { name: 'Mathematics', icon: '📐', href: '/take-my-math-class', desc: 'Algebra, Calculus, Stats & more' },
  { name: 'Nursing', icon: '🏥', href: '/take-my-nursing-class', desc: 'BSN, MSN, ATI TEAS & more' },
  { name: 'Accounting', icon: '📊', href: '/take-my-accounting-class', desc: 'Financial & managerial accounting' },
  { name: 'Statistics', icon: '📉', href: '/take-my-statistics-class', desc: 'Stats, SPSS, R & more' },
  { name: 'Biology', icon: '🔬', href: '/take-my-biology-class', desc: 'Cell bio, genetics, ecology' },
  { name: 'Psychology', icon: '🧠', href: '/take-my-psychology-class', desc: 'General, abnormal, social psych' },
  { name: 'Business', icon: '💼', href: '/take-my-business-class', desc: 'Management, MBA, strategy' },
  { name: 'Chemistry', icon: '⚗️', href: '/take-my-chemistry-class', desc: 'General, organic, biochem' },
  { name: 'English', icon: '📝', href: '/take-my-english-class', desc: 'Composition, literature, writing' },
  { name: 'History', icon: '📜', href: '/take-my-history-class', desc: 'US, world, and cultural history' },
  { name: 'Economics', icon: '💰', href: '/take-my-economics-class', desc: 'Micro, macro, international econ' },
  { name: 'Finance', icon: '📈', href: '/take-my-finance-class', desc: 'Corporate finance, investments' },
  { name: 'Computer Science', icon: '💻', href: '/take-my-computer-science-class', desc: 'Coding, algorithms, databases' },
  { name: 'Sociology', icon: '👥', href: '/take-my-sociology-class', desc: 'Social theory & research' },
  { name: 'Criminal Justice', icon: '⚖️', href: '/take-my-criminal-justice-class', desc: 'Law, criminology, corrections' },
  { name: 'Marketing', icon: '📣', href: '/take-my-marketing-class', desc: 'Digital marketing, strategy' },
  { name: 'Political Science', icon: '🏛️', href: '/take-my-political-science-class', desc: 'Government, theory, policy' },
  { name: 'Philosophy', icon: '🤔', href: '/take-my-philosophy-class', desc: 'Ethics, logic, metaphysics' },
  { name: 'Anatomy & Physiology', icon: '🫀', href: '/take-my-anatomy-physiology-class', desc: 'A&P, human body systems' },
  { name: 'Information Technology', icon: '🖥️', href: '/take-my-information-technology-class', desc: 'IT, networking, cybersecurity' },
]

const steps = [
  { step: '01', title: 'Tell Us About Your Class', desc: 'Fill out our quick 2-minute form. Share your course details, deadline, and target grade. Completely confidential.' },
  { step: '02', title: 'We Match You With an Expert', desc: 'Within 2 hours, we assign one of our 500+ PhD-level experts who specialises in your exact subject.' },
  { step: '03', title: 'Your Expert Takes Over', desc: 'Your dedicated expert logs in, attends to your class, completes assignments, and takes exams — all on your behalf.' },
  { step: '04', title: 'You Get the Grade. Guaranteed.', desc: 'Receive an A or B. If we ever miss the target grade, you get a 100% refund. No questions asked.' },
]

const testimonials = [
  { name: 'Sarah M.', school: 'University of Phoenix', grade: 'A', subject: 'Accounting', text: 'I was working full-time and completely overwhelmed. GradeGuaranteed took over my accounting class and I got an A. The relief was indescribable. 100% worth every penny.', stars: 5 },
  { name: 'James T.', school: 'WGU', grade: 'B+', subject: 'Business Administration', text: 'I was skeptical at first but they delivered exactly what they promised. My expert knew WGU\'s competency-based system perfectly. Got a Competent on every assessment.', stars: 5 },
  { name: 'Priya K.', school: 'SNHU', grade: 'A', subject: 'Psychology', text: 'Three classes at once was killing me. They handled two of them simultaneously and I got A\'s in both. Customer service responds within minutes on WhatsApp.', stars: 5 },
  { name: 'Marcus D.', school: 'Liberty University', grade: 'A', subject: 'Criminal Justice', text: 'My professor was tough and the assignments were no joke. These guys handled everything professionally. Grade came in at 94%. Absolutely recommend.', stars: 5 },
  { name: 'Ashley R.', school: 'Strayer University', grade: 'B', subject: 'Math', text: 'Math has always been my weakness. I came to them with only 4 weeks left and behind on assignments. They caught up AND got me a B. Lifesavers.', stars: 5 },
]

const faqs = [
  { q: 'Is it safe to pay someone to take my online class?', a: 'Yes. We maintain complete confidentiality — we never share your information, we log in using your credentials from your own IP location, and we have strict data security protocols. In 10+ years and 50,000+ classes, no student has ever been flagged.' },
  { q: 'What grade do you guarantee?', a: 'We guarantee an A or B in your online class, or we refund 100% of what you paid. The only exception is when we inform you upfront before starting that a grade guarantee is not applicable — for example, if a student has already lost too many points before engaging us.' },
  { q: 'How much does it cost to take my online class?', a: 'Our pricing starts at $49/week for standard class management. The total cost depends on your class duration and subject. Visit our pricing page for a full breakdown, or get a free personalised quote in under 2 hours.' },
  { q: 'How quickly can you start?', a: 'We can begin within 24 hours of receiving your class details. For urgent situations — if you\'re behind or have an exam coming up — contact us on WhatsApp for immediate assistance.' },
  { q: 'What subjects do you cover?', a: 'We cover all undergraduate and graduate subjects including Math, Nursing, Accounting, Statistics, Biology, Psychology, Business, Chemistry, English, History, Computer Science, Finance, and 8 more. Our 500+ PhD experts span every major academic discipline.' },
]

const homeSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Online Class Help — Take My Online Class For Me',
  provider: {
    '@type': 'Organization',
    name: 'GradeGuaranteed.com',
    url: 'https://gradeguaranteed.com',
  },
  serviceType: 'Online Class Assistance',
  areaServed: { '@type': 'Country', name: 'United States' },
  description: '500+ PhD experts take your online class and guarantee an A or B grade or full refund. $49/week.',
  offers: {
    '@type': 'Offer',
    price: '49',
    priceCurrency: 'USD',
    priceSpecification: { '@type': 'UnitPriceSpecification', price: '49', priceCurrency: 'USD', unitText: 'WEEK' },
  },
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '10000', bestRating: '5' },
}

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }} />
      <Header />
      <main>
        <section className="bg-hero-gradient relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 py-20 lg:py-28 relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
                  Take My Online<br />Class For Me.<br /><span className="text-gold-500">Grade Guaranteed.</span>
                </h1>
                <p className="text-blue-100 text-xl leading-relaxed mb-8 max-w-xl">
                  Our 500+ in-house PhD experts take your online class and guarantee you an <strong className="text-gold-400">A or B</strong> — from <strong className="text-gold-400">$49/week</strong>.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  <Link href="/get-a-quote" className="btn-gold text-lg px-10 py-4 rounded-xl text-center">Get My Free Quote →</Link>
                  <a href="https://wa.me/17633299406" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl transition-all text-lg">WhatsApp Us Now</a>
                </div>
              </div>
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                <h2 className="text-xl font-bold text-navy-900 mb-1">Get Your Free Quote</h2>
                <p className="text-gray-500 text-sm mb-6">Tell us about your class — we respond within 2 hours.</p>
                <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" className="space-y-4">
                  <div><label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label><input type="text" name="name" required placeholder="First name" className="w5 full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy-500" /></div>
                  <div><label className="block text-sm font-medium text-gray-700 mb-1">Email</label><input type="email" name="email" required placeholder="your@email.com" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy-500" /></div>
                  <div><label className="block text-sm font-medium text-gray-700 mb-1">Subject</label><input type="text" name="subject" required placeholder="e.g. Nursing, Math" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy-500" /></div>
                  <button type="submit" className="w5-full bg-navy-900 hover:bg-navy-800 text-white font-bold py-4 rounded-xl transition-all text-base shadow-lg">Get My Free Quote →</button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 bg-white px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="section-heading text-center mb-12">What Subject Is Your Class?</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {subjects.map(({ name, icon, href }) => (
                <Link key={href} href={href} className="card hover:border-gold-300 text-center p-5">
                  <div className="text-3xl mb-3">{icon}</div>
                  <h3 className="text-navy-900 font-bold text-sm">{name}</h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
        <section className="py-20 bg-navy-50 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="section-heading text-center mb-12">How It Works</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map(({ step, title, desc }) => (
                <div key={step} className="text-center">
                  <div className="w-16 h-16 bg-navy-900 text-gold-500 rounded-2xl flex items-center justify-center text-2xl font-extrabold mx-auto mb-5">{step}</div>
                  <h3 className="text-navy-900 font-bold text-lg mb-3">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-20 bg-white px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="section-heading text-center mb-12">What Students Say</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <div key={i} className="card border border-gray-100">
                  <p className="text-gray-600 text-sm leading-relaxed mb-5 italic">"{t.text}"</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-bold text-navy-900 text-sm">{t.name}</div>
                      <div className="text-gray-400 text-xs">{t.school}</div>
                    </div>
                    <div className="bg-green-100 text-green-700 font-extrabold text-lg px-3 py-1 rounded-lg">{t.grade}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-20 bg-white px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-heading text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map(({ q, a }, i) => (
                <details key={i} className="group card cursor-pointer border border-gray-100">
                  <summary className="flex justify-between items-center font-semibold text-navy-900 list-none py-1 cursor-pointer"><span>{q}</span></summary>
                  <p className="text-gray-600 text-sm leading-relaxed mt-4 pt-4 border-t border-gray-100">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
        <CTASection headline="Ready to Guarantee Your Grade?" subheadline="Join 10,000+ US students who got their online class handled by our PhD experts. A or B — or 100% refund." cta="Get My Grade Guaranteed Today" />
      </main>
      <Footer />
    </>
  )
}
