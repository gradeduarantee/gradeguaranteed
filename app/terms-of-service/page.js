import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Terms of Service | GradeGuaranteed.com',
  description: 'Read the Terms of Service for GradeGuaranteed.com. Understand our academic support service terms, payment policies, and user responsibilities.',
  robots: { index: true, follow: true },
}

const sections = [
  {
    title: '1. Acceptance of Terms',
    content: `By accessing or using GradeGuaranteed.com ("the Service," "we," "us," or "our"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to all of these Terms, you may not use the Service. These Terms apply to all visitors, users, and others who access or use the Service.`
  },
  {
    title: '2. Description of Service',
    content: `GradeGuaranteed.com provides academic support and tutoring services. Our experts assist students with understanding course material, completing assignments, reviewing work, and supporting them through their online coursework. All services are intended to serve as educational reference and support tools. It is the sole responsibility of each user to ensure that their use of our services complies with their academic institution's policies.`
  },
  {
    title: '3. User Responsibilities',
    content: `By using our Service, you represent and warrant that: (a) you are at least 18 years of age or have parental consent; (b) all information you provide is accurate and complete; (c) you will use our services in compliance with all applicable laws and regulations; (d) you understand and accept responsibility for how you use the support materials we provide. GradeGuaranteed.com does not condone academic dishonesty and is not responsible for how users choose to use the educational support we provide.`
  },
  {
    title: '4. Payment Terms',
    content: `All payments are due in full before work commences unless otherwise agreed upon in writing. We accept major credit cards, debit cards, and other payment methods as listed on our platform. Prices are listed in USD. By providing payment information, you authorize us to charge the agreed-upon amount. All transactions are processed securely through our payment processor.`
  },
  {
    title: '5. Grade Guarantee Policy',
    content: `Our Grade Guarantee covers a final course grade of A or B. If the guaranteed grade is not achieved despite our expert completing all assigned work, you are entitled to a full refund or free re-service, subject to the conditions outlined in our Refund Policy. The guarantee is void if: (a) you provide incomplete or inaccurate course login information; (b) you or any third party accesses the course account during the service period without our knowledge; (c) your academic institution requires identity verification that prevents completion; (d) you request a chargeback or dispute before allowing us to resolve any issue.`
  },
  {
    title: '6. Confidentiality',
    content: `We treat all customer information as strictly confidential. We will not share your personal information, order details, or any identifying data with third parties except as required by law. All our experts sign confidentiality agreements. Your privacy is a core commitment of our Service. See our Privacy Policy for full details.`
  },
  {
    title: '7. Intellectual Property',
    content: `All content, branding, logos, and materials on GradeGuaranteed.com are the intellectual property of GradeGuaranteed.com and are protected by applicable copyright, trademark, and other intellectual property laws. Work product delivered to customers becomes their property upon full payment. You may not reproduce, distribute, or create derivative works from our site content without express written permission.`
  },
  {
    title: '8. Prohibited Uses',
    content: `You may not use the Service: (a) in any way that violates applicable laws or regulations; (b) to transmit unsolicited commercial communications; (c) to impersonate any person or entity; (d) to engage in fraudulent activity or provide false information; (e) to interfere with or disrupt the Service or servers connected to the Service; (f) to attempt to gain unauthorized access to any portion of the Service.`
  },
  {
    title: '9. Limitation of Liability',
    content: `To the maximum extent permitted by law, GradeGuaranteed.com shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or goodwill, arising out of or in connection with your use of the Service. Our total liability to you for any claim arising from or related to the Service shall not exceed the amount you paid us in the 90 days prior to the claim.`
  },
  {
    title: '10. Disclaimer of Warranties',
    content: `The Service is provided on an "as is" and "as available" basis without warranties of any kind, either express or implied. We do not warrant that the Service will be uninterrupted, error-free, or completely secure. We do not guarantee specific academic outcomes beyond those explicitly stated in our Grade Guarantee Policy.`
  },
  {
    title: '11. Termination',
    content: `We reserve the right to suspend or terminate your access to the Service at our sole discretion, with or without notice, for conduct that we believe violates these Terms or is harmful to other users, third parties, or the interests of GradeGuaranteed.com. Upon termination, all provisions of these Terms which by their nature should survive will survive.`
  },
  {
    title: '12. Governing Law',
    content: `These Terms shall be governed by and construed in accordance with the laws of the State of New York, United States, without regard to its conflict of law provisions. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts located in New York County, New York.`
  },
  {
    title: '13. Changes to Terms',
    content: `We reserve the right to modify these Terms at any time. Changes will be posted on this page with an updated effective date. Your continued use of the Service after any changes constitutes your acceptance of the new Terms. We encourage you to review these Terms periodically.`
  },
  {
    title: '14. Contact Us',
    content: `If you have any questions about these Terms of Service, please contact us at: Email: support@gradeguaranteed.com | Phone: +1 (765) 688-5315 | Address: 60 E 42nd St #4600, New York, NY 10165, United States`
  },
]

export default function TermsOfService() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Terms of Service</h1>
            <p className="text-gray-400 text-lg">Last updated: June 1, 2025</p>
          </div>
        </section>

        {/* Content */}
        <section className="bg-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Intro */}
            <div className="bg-navy-50 border-l-4 border-gold-500 rounded-r-lg p-6 mb-10">
              <p className="text-navy-800 text-base leading-relaxed">
                Please read these Terms of Service carefully before using GradeGuaranteed.com. These terms govern your use of our academic support services and outline both your rights and responsibilities as a user.
              </p>
            </div>

            {/* Quick nav */}
            <div className="bg-gray-50 rounded-xl p-6 mb-10">
              <h2 className="text-navy-900 font-semibold mb-4">Quick Navigation</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {sections.map((s, i) => (
                  <a key={i} href={`#section-${i+1}`} className="text-navy-600 hover:text-gold-600 text-sm transition-colors">
                    {s.title}
                  </a>
                ))}
              </div>
            </div>

            {/* Sections */}
            <div className="space-y-10">
              {sections.map((s, i) => (
                <div key={i} id={`section-${i+1}`} className="scroll-mt-24">
                  <h2 className="text-xl font-bold text-navy-900 mb-3 pb-2 border-b border-gray-200">{s.title}</h2>
                  <p className="text-gray-700 leading-relaxed">{s.content}</p>
                </div>
              ))}
            </div>

            {/* Footer note */}
            <div className="mt-16 pt-8 border-t border-gray-200 text-center">
              <p className="text-gray-500 text-sm mb-4">Have questions about our terms?</p>
              <Link href="/get-a-quote" className="inline-flex items-center gap-2 bg-navy-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-navy-800 transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}