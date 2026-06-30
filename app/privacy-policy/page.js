import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Privacy Policy | GradeGuaranteed.com',
  description: 'GradeGuaranteed.com Privacy Policy. Learn how we collect, use, and protect your personal information. GDPR and CCPA compliant.',
  robots: { index: true, follow: true },
}

const sections = [
  {
    title: '1. Information We Collect',
    content: [
      { sub: 'Information You Provide', text: 'When you use our Service, you may provide: name, email address, phone number, payment information, academic course details and login credentials (for service delivery), and any other information you choose to provide when contacting us or placing an order.' },
      { sub: 'Information Collected Automatically', text: 'We automatically collect certain information when you visit our website, including: IP address, browser type and version, pages visited and time spent, referring URLs, device information, and cookies and similar tracking technologies.' },
      { sub: 'Google Analytics', text: 'We use Google Analytics 4 to understand how visitors use our site. This collects anonymized usage data. You can opt out via Google\'s opt-out browser add-on at tools.google.com/dlpage/gaoptout.' },
    ]
  },
  {
    title: '2. How We Use Your Information',
    content: [
      { sub: 'Service Delivery', text: 'We use your information to provide, operate, and maintain our academic support services, including processing orders and communicating about your service.' },
      { sub: 'Communications', text: 'We may use your email to send order confirmations, service updates, and support messages. With your consent, we may also send promotional communications, which you can unsubscribe from at any time.' },
      { sub: 'Improvement', text: 'We use aggregated, anonymized data to analyze usage patterns and improve our Service, website, and customer experience.' },
      { sub: 'Legal Compliance', text: 'We may use your information to comply with applicable laws, regulations, legal processes, or governmental requests.' },
    ]
  },
  {
    title: '3. Information Sharing',
    content: [
      { sub: 'We Never Sell Your Data', text: 'We do not sell, trade, or rent your personal information to third parties for their marketing purposes.' },
      { sub: 'Service Providers', text: 'We share information with trusted third-party service providers who assist in operating our website and delivering our services (payment processors, email services). These parties are contractually obligated to keep your information confidential.' },
      { sub: 'Academic Experts', text: 'To deliver your service, we share necessary course information with our vetted academic experts. All experts sign confidentiality agreements and are prohibited from sharing your information.' },
      { sub: 'Legal Requirements', text: 'We may disclose your information if required to do so by law or in response to valid requests by public authorities.' },
    ]
  },
  {
    title: '4. Data Security',
    content: [
      { sub: 'Security Measures', text: 'We implement industry-standard security measures including SSL/TLS encryption, secure payment processing (we never store full card numbers), access controls, and regular security assessments to protect your personal information.' },
      { sub: 'Breach Notification', text: 'In the event of a data breach that affects your personal information, we will notify you as required by applicable law.' },
    ]
  },
  {
    title: '5. Cookies',
    content: [
      { sub: 'What We Use', text: 'We use essential cookies (required for the site to function), analytics cookies (Google Analytics — can be opted out), and preference cookies (to remember your settings).' },
      { sub: 'Your Control', text: 'You can control cookies through your browser settings. Disabling certain cookies may affect site functionality. We do not use advertising or third-party tracking cookies beyond Google Analytics.' },
    ]
  },
  {
    title: '6. Your Rights',
    content: [
      { sub: 'Access & Portability', text: 'You have the right to request a copy of the personal data we hold about you.' },
      { sub: 'Correction', text: 'You have the right to request correction of inaccurate personal data.' },
      { sub: 'Deletion', text: 'You have the right to request deletion of your personal data, subject to certain legal obligations.' },
      { sub: 'GDPR (EU/UK Users)', text: 'If you are located in the EU or UK, you have additional rights under GDPR including the right to object to processing and the right to lodge a complaint with your local supervisory authority.' },
      { sub: 'CCPA (California Users)', text: 'California residents have the right to know what personal information is collected, the right to delete personal information, and the right to opt out of the sale of personal information (we do not sell personal information).' },
    ]
  },
  {
    title: '7. Data Retention',
    content: [
      { sub: 'Retention Period', text: 'We retain your personal information for as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce our agreements. Order records are typically retained for 3 years. You may request deletion of your account and associated data at any time.' },
    ]
  },
  {
    title: '8. Children\'s Privacy',
    content: [
      { sub: 'Age Restriction', text: 'Our Service is not directed to individuals under 18 years of age. We do not knowingly collect personal information from children under 18. If we become aware that we have inadvertently collected such information, we will take steps to delete it promptly.' },
    ]
  },
  {
    title: '9. Changes to This Policy',
    content: [
      { sub: 'Updates', text: 'We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the new policy on this page with an updated date. Your continued use of the Service after changes constitutes acceptance of the new policy.' },
    ]
  },
  {
    title: '10. Contact Us',
    content: [
      { sub: 'Privacy Questions', text: 'For any privacy-related questions or to exercise your rights, contact us at: Email: support@gradeguaranteed.com | Phone: +1 (765) 688-5315 | Address: 60 E 42nd St #4600, New York, NY 10165, United States. We will respond to your request within 30 days.' },
    ]
  },
]

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-navy-950 pt-32 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/20 rounded-full px-4 py-2 mb-6">
              <span className="text-gold-400 text-sm font-medium">Legal</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Privacy Policy</h1>
            <p className="text-gray-400 text-lg">Last updated: June 1, 2025</p>
          </div>
        </section>

        {/* Content */}
        <section className="bg-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Intro */}
            <div className="bg-navy-50 border-l-4 border-gold-500 rounded-r-lg p-6 mb-10">
              <p className="text-navy-800 text-base leading-relaxed">
                At GradeGuaranteed.com, your privacy is our priority. This policy explains what information we collect, how we use it, and your rights. We are committed to protecting your data and maintaining your trust.
              </p>
            </div>

            {/* Sections */}
            <div className="space-y-10">
              {sections.map((s, i) => (
                <div key={i} id={`section-${i+1}`}>
                  <h2 className="text-xl font-bold text-navy-900 mb-4 pb-2 border-b border-gray-200">{s.title}</h2>
                  <div className="space-y-4">
                    {s.content.map((item, j) => (
                      <div key={j}>
                        <h3 className="font-semibold text-navy-800 mb-1">{item.sub}</h3>
                        <p className="text-gray-700 leading-relaxed text-sm">{item.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Footer note */}
            <div className="mt-16 pt-8 border-t border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <Link href="/terms-of-service" className="text-navy-600 hover:text-gold-600 font-medium transition-colors">Terms of Service</Link>
                <Link href="/refund-policy" className="text-navy-600 hover:text-gold-600 font-medium transition-colors">Refund Policy</Link>
                <Link href="/get-a-quote" className="text-navy-600 hover:text-gold-600 font-medium transition-colors">Contact Us</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}