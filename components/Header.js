'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const navLinks = [
  {
    label: 'Services',
    href: '#',
    dropdown: [
      { label: 'Take My Online Class', href: '/' },
      { label: 'Grade Guarantee', href: '/grade-guarantee' },
      { label: 'Take My Online Exam', href: '/take-my-online-exam' },
      { label: 'Take My Proctored Exam', href: '/take-my-proctored-exam' },
      { label: 'Failing My Class?', href: '/im-failing-my-online-class' },
    ],
  },
  {
    label: 'Subjects',
    href: '#',
    dropdown: [
      { label: 'Math', href: '/take-my-math-class' },
      { label: 'Nursing', href: '/take-my-nursing-class' },
      { label: 'Accounting', href: '/take-my-accounting-class' },
      { label: 'Statistics', href: '/take-my-statistics-class' },
      { label: 'Biology', href: '/take-my-biology-class' },
      { label: 'Business', href: '/take-my-business-class' },
      { label: 'English', href: '/take-my-english-class' },
      { label: 'Psychology', href: '/take-my-psychology-class' },
      { label: 'Chemistry', href: '/take-my-chemistry-class' },
      { label: 'History', href: '/take-my-history-class' },
    ],
  },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'Blog', href: '/blog' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)

  return (
    <header className="bg-navy-900 sticky top-0 z-50 shadow-lg">
      {/* Top bar */}
      <div className="bg-navy-950 text-gold-500 text-xs py-1.5 text-center font-medium">
        🇺🇸 New York, USA &nbsp;|&nbsp; 500+ PhD Experts &nbsp;|&nbsp; A or B Guaranteed or 100% Refund &nbsp;|&nbsp;
        <a href="tel:+17656885315" className="underline hover:text-gold-400">+1 (765) 688-5315</a>
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <img src="/logo-white.svg" alt="GradeGuaranteed.com" className="h-10 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <div key={link.label} className="relative group">
                {link.dropdown ? (
                  <>
                    <button className="text-gray-200 hover:text-gold-500 font-medium text-sm flex items-center gap-1 py-5 transition-colors">
                      {link.label}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div className="absolute top-full left-0 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-navy-50 hover:text-navy-900 font-medium transition-colors"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className="text-gray-200 hover:text-gold-500 font-medium text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+17656885315"
              className="text-gray-300 hover:text-gold-400 text-sm font-medium flex items-center gap-1.5"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              +1 (765) 688-5315
            </a>
            <Link
              href="/get-a-quote"
              className="bg-gold-500 hover:bg-gold-400 text-navy-900 font-bold px-5 py-2.5 rounded-lg text-sm transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Get Free Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-gray-200 hover:text-gold-500 p-2"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-navy-800 pb-4">
            {navLinks.map((link) => (
              <div key={link.label}>
                {link.dropdown ? (
                  <>
                    <button
                      onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                      className="w-full text-left text-gray-200 hover:text-gold-500 font-medium py-3 px-2 flex justify-between items-center"
                    >
                      {link.label}
                      <svg className={`w-4 h-4 transition-transform ${openDropdown === link.label ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {openDropdown === link.label && (
                      <div className="pl-4 border-l border-navy-700 ml-2 mb-2">
                        {link.dropdown.map((item) => (
                          <Link key={item.href} href={item.href} className="block text-gray-300 hover:text-gold-400 py-2 text-sm" onClick={() => setMobileOpen(false)}>
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link href={link.href} className="block text-gray-200 hover:text-gold-500 font-medium py-3 px-2" onClick={() => setMobileOpen(false)}>
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-3 border-t border-navy-800 mt-2 flex flex-col gap-3 px-2">
              <a href="tel:+17656885315" className="text-gray-300 text-sm font-medium">📞 +1 (765) 688-5315</a>
              <a href="https://wa.me/17633299406" className="text-green-400 text-sm font-medium">💬 WhatsApp Us</a>
              <Link href="/get-a-quote" className="bg-gold-500 text-navy-900 font-bold px-5 py-3 rounded-lg text-center" onClick={() => setMobileOpen(false)}>
                Get Free Quote →
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
