import Link from 'next/link'

const subjects = [
  ['Math', '/take-my-math-class'],
  ['Nursing', '/take-my-nursing-class'],
  ['Accounting', '/take-my-accounting-class'],
  ['Statistics', '/take-my-statistics-class'],
  ['Biology', '/take-my-biology-class'],
  ['Psychology', '/take-my-psychology-class'],
  ['Business', '/take-my-business-class'],
  ['Chemistry', '/take-my-chemistry-class'],
  ['English', '/take-my-english-class'],
  ['History', '/take-my-history-class'],
]

const services = [
  ['Grade Guarantee', '/grade-guarantee'],
  ['How It Works', '/how-it-works'],
  ['Pricing', '/pricing'],
  ['Take My Online Exam', '/take-my-online-exam'],
  ['Take My Proctored Exam', '/take-my-proctored-exam'],
  ['Failing My Class?', '/im-failing-my-online-class'],
  ['Reviews', '/reviews'],
  ['FAQ', '/faq'],
  ['Blog', '/blog'],
  ['About Us', '/about'],
]

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-gray-300">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <img src="/logo-white.svg" alt="GradeGuaranteed.com" className="h-10 w-auto mb-4" />
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              US-based online class help. 500+ in-house PhD experts. A or B grade guaranteed — or you don't pay. Serving US college students since day one.
            </p>
            {/* Stars */}
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-gold-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="text-gold-500 font-bold text-sm ml-1">4.9/5</span>
              <span className="text-gray-500 text-sm ml-1">�� 10,000+ students</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Services</h3>
            <ul className="space-y-2.5">
              {services.map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-gray-400 hover:text-gold-400 text-sm transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Subjects */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Subjects</h3>
            <ul className="space-y-2.5">
              {subjects.map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-gray-400 hover:text-gold-400 text-sm transition-colors">
                    Take My {label} Class
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-400">60 E 42nd St #4600<br />New York, NY 10165<br />United States</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-gold-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <a href="tel:+17656885315" className="text-gray-400 hover:text-gold-400 transition-colors">+1 (765) 688-5315</a>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.116 1.523 5.843L.057 24l6.304-1.654A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.793 9.793 0 01-5.001-1.373l-.359-.213-3.722.976.993-3.63-.234-.372A9.792 9.792 0 012.182 12C2.182 6.565 6.565 2.182 12 2.182S21.818 6.565 21.818 12 17.435 21.818 12 21.818z"/>
                </svg>
                <a href="https://wa.me/17633299406" className="text-gray-400 hover:text-green-400 transition-colors">WhatsApp: +1 (763) 329-9406</a>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-gold-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a href="mailto:support@gradeguaranteed.com" className="text-gray-400 hover:text-gold-400 transition-colors">support@gradeguaranteed.com</a>
              </li>
            </ul>

            {/* Guarantee badge */}
            <div className="mt-6 bg-navy-900 rounded-xl p-4 border border-gold-500/30">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-2xl">���</span>
                <span className="text-gold-500 font-bold text-sm">The Grade Promise</span>
              </div>
              <p className="text-gray-400 text-xs leading-relaxed">A or B guaranteed on every class — or we refund 100% of what you paid. No questions asked.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} GradeGuaranteed.com. All rights reserved. New York, NY, USA.</p>
          <div className="flex items-center gap-4">
            <Link href="/grade-guarantee" className="hover:text-gold-400 transition-colors">Grade Guarantee</Link>
            <Link href="/pricing" className="hover:text-gold-400 transition-colors">Pricing</Link>
            <Link href="/faq" className="hover:text-gold-400 transition-colors">FAQ</Link>
            <Link href="/about" className="hover:text-gold-400 transition-colors">About</Link>
            <Link href="/terms-of-service" className="hover:text-gold-400 transition-colors">Terms</Link>
            <Link href="/privacy-policy" className="hover:text-gold-400 transition-colors">Privacy</Link>
            <Link href="/refund-policy" className="hover:text-gold-400 transition-colors">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
