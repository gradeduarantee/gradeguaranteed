import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-navy-950 flex flex-col items-center justify-center px-4 text-center">
      {/* Logo */}
      <Link href="/" className="mb-12 flex items-center gap-3">
        <div className="w-10 h-10 bg-gold-500 rounded-lg flex items-center justify-center font-bold text-navy-950 text-lg">GG</div>
        <span className="text-white font-bold text-xl">GradeGuaranteed<span className="text-gold-400">.com</span></span>
      </Link>

      {/* 404 */}
      <div className="mb-6">
        <div className="text-8xl font-bold text-gold-400 leading-none mb-2">404</div>
        <div className="text-2xl font-bold text-white mb-4">Page Not Found</div>
        <p className="text-gray-400 max-w-md mx-auto leading-relaxed">
          Looks like this page took the wrong class. Let us help you get back on track — with a grade guarantee.
        </p>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mb-16">
        <Link href="/" className="inline-flex items-center gap-2 bg-gold-500 text-navy-950 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gold-400 transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          Back to Home
        </Link>
        <Link href="/get-a-quote" className="inline-flex items-center gap-2 bg-navy-800 text-white border border-navy-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-navy-700 transition-colors">
          Get a Free Quote
        </Link>
      </div>

      {/* Quick Links */}
      <div className="text-gray-500 text-sm">
        <p className="mb-3">Popular pages:</p>
        <div className="flex flex-wrap justify-center gap-4">
          {[
            ['How It Works', '/how-it-works'],
            ['Pricing', '/pricing'],
            ['Grade Guarantee', '/grade-guarantee'],
            ['FAQ', '/faq'],
            ['Reviews', '/reviews'],
          ].map(([label, href]) => (
            <Link key={href} href={href} className="text-gray-400 hover:text-gold-400 transition-colors">{label}</Link>
          ))}
        </div>
      </div>
    </div>
  )
}