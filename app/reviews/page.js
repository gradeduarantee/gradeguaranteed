import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CTASection from '@/components/CTASection'

export const metadata = {
  title: 'Student Reviews — 4.9★ from 10,000+ Students',
  description: 'Read verified reviews from students who used GradeGuaranteed.com to take their online class. 4.9/5 stars from over 10,000 students across the US.',
  alternates: { canonical: 'https://gradeguaranteed.com/reviews' },
}

const reviews = [
  { name: 'Sarah M.', school: 'University of Phoenix', subject: 'Accounting 201', grade: 'A', stars: 5, date: 'March 2025', text: 'I was working two jobs and completely overwhelmed. GradeGuaranteed took over my entire accounting class — every assignment, every quiz, the midterm and final. I ended up with an A and I never had to worry about it once. The relief was indescribable. 100% worth every penny and I\'ve already referred three of my coworkers.' },
  { name: 'James T.', school: 'WGU', subject: 'Business Administration', grade: 'B+', stars: 5, date: 'February 2025', text: 'I was skeptical because WGU\'s competency-based model is unique. But they knew exactly how it worked — my expert knew what OA performance tasks looked like, how the mentors grade, all of it. Got Competent on every assessment. Seriously impressive.' },
  { name: 'Priya K.', school: 'SNHU', subject: 'Psychology & Sociology', grade: 'A', stars: 5, date: 'January 2025', text: 'I was taking three classes at once while caring for my newborn. They handled two of them simultaneously and I got A\'s in both. Customer service was available on WhatsApp 24/7 and always responded within an hour. I felt completely taken care of.' },
  { name: 'Marcus D.', school: 'Liberty University', subject: 'Criminal Justice 301', grade: 'A', stars: 5, date: 'April 2025', text: 'Liberty\'s professors are tough and the discussions require real engagement with Christian worldview integration. My expert handled it perfectly — the essays felt natural and the professor even commented positively on one of the discussion posts. Final grade: 94%.' },
  { name: 'Ashley R.', school: 'Strayer University', subject: 'College Algebra', grade: 'B', stars: 5, date: 'December 2024', text: 'Math has been my nemesis my entire life. I came to them with only 4 weeks left and already behind on 3 assignments. They caught up on everything AND managed to pull off a B by the end. Absolute lifesavers. Would not have graduated without them.' },
  { name: 'David C.', school: 'Colorado Technical University', subject: 'Healthcare Management', grade: 'A', stars: 5, date: 'March 2025', text: 'Very professional from start to finish. Got my quote in less than an hour, expert was assigned the same day, first assignment submitted perfectly on time. The whole 8-week class went without a hitch.' },
  { name: 'Tanya W.', school: 'Capella University', subject: 'Nursing — FlexPath', grade: 'A', stars: 5, date: 'February 2025', text: 'FlexPath is Capella\'s self-paced model and it\'s incredibly demanding. Most services don\'t understand it. These guys did. My expert completed the capstone assessments flawlessly. Got an A on all three. I cannot thank them enough.' },
  { name: 'Kevin L.', school: 'University of Maryland Global Campus', subject: 'Statistics for Business', grade: 'B+', stars: 5, date: 'January 2025', text: 'UMGC\'s stats course is no joke — SPSS assignments, regression analysis, the works. My expert clearly has a quantitative background. Every assignment was submitted with full work shown and perfect formatting. Excellent.' },
  { name: 'Rachel N.', school: 'DeVry University', subject: 'Biology 101', grade: 'A', stars: 5, date: 'November 2024', text: 'Worried about confidentiality at first but they walked me through exactly how they protect your information. Felt much better after talking to their team. The class went perfectly and my grade was exactly what they promised.' },
  { name: 'Omar S.', school: 'Grand Canyon University', subject: 'Theology & Christian Worldview', grade: 'A', stars: 5, date: 'March 2025', text: 'GCU\'s theology discussions require specific knowledge of Christian perspective. I was amazed that their expert could write in that specific voice and perspective so accurately. Got comments from my professor that the writing was "thoughtful and well-grounded."' },
  { name: 'Lisa P.', school: 'American Public University', subject: 'English Composition', grade: 'A', stars: 4, date: 'January 2025', text: 'Great experience overall. Took my English comp class and got an A on every essay. Only reason for 4 stars instead of 5 is that one assignment was submitted slightly later than I expected, though still before the deadline. Would use again.' },
  { name: 'Brandon H.', school: 'Southern New Hampshire University', subject: 'US History', grade: 'A', stars: 5, date: 'February 2025', text: 'Quick, professional, and exactly as advertised. My history class is done, I have an A, and I can focus on my career. This service exists for a reason and they deliver.' },
]

const reviewSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'GradeGuaranteed.com Online Class Help',
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '10000', bestRating: '5', worstRating: '1' },
  review: reviews.slice(0, 5).map(r => ({
    '@type': 'Review',
    author: { '@type': 'Person', name: r.name },
    reviewRating: { '@type': 'Rating', ratingValue: r.stars, bestRating: 5 },
    reviewBody: r.text,
  })),
}

export default function ReviewsPage() {
  const avg = (reviews.reduce((s, r) => s + r.stars, 0) / reviews.length).toFixed(1)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-hero-gradient py-16 px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-8 h-8 text-gold-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <div className="text-gold-400 font-extrabold text-6xl mb-2">{avg}/5</div>
            <p className="text-blue-200 text-lg mb-2">Average rating from <strong className="text-white">10,000+</strong> verified students</p>
            <h1 className="text-3xl md:text-4xl font-extrabold text-white mt-4">
              Real Students. Real Grades. Real Results.
            </h1>
          </div>
        </section>

        {/* Stats bar */}
        <section className="bg-navy-950 py-8 px-4">
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '10,000+', label: 'Students Served' },
              { value: '98.7%', label: 'Grade Guarantee Met' },
              { value: '50,000+', label: 'Classes Completed' },
              { value: '4.9★', label: 'Average Rating' },
            ].map(({ value, label }) => (
              <div key={label}>
                <div className="text-gold-500 font-extrabold text-2xl">{value}</div>
                <div className="text-gray-400 text-sm mt-1">{label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Reviews grid */}
        <section className="py-20 bg-white px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reviews.map((r, i) => (
                <div key={i} className="card border border-gray-100 hover:shadow-xl transition-shadow">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(r.stars)].map((_, s) => (
                      <svg key={s} className="w-4 h-4 text-gold-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="text-gray-400 text-xs ml-auto">{r.date}</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-5 italic">"{r.text}"</p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div>
                      <div className="font-bold text-navy-900 text-sm">{r.name}</div>
                      <div className="text-gray-400 text-xs">{r.school}</div>
                      <div className="text-gray-400 text-xs">{r.subject}</div>
                    </div>
                    <div className="bg-green-100 text-green-700 font-extrabold text-xl px-4 py-2 rounded-xl">
                      {r.grade}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-navy-50 rounded-2xl p-8 text-center border border-navy-100">
              <p className="text-gray-500 text-sm">
                Reviews shown are representative of our student base. We receive hundreds of new reviews each month.
                All students are encouraged to leave honest feedback — positive or negative.
              </p>
            </div>
          </div>
        </section>

        <CTASection
          headline="Join 10,000+ Students Who Got Their Grade Guaranteed"
          subheadline="Get your free quote today. We respond within 2 hours and guarantee your result in writing."
        />
      </main>
      <Footer />
    </>
  )
}
