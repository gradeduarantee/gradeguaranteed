import SubjectPageTemplate from '@/components/SubjectPageTemplate'

export const metadata = {
  title: 'Take My Online Business Class For Me — A or B Guaranteed',
  description: 'MBA-level experts take your online business class. Management, marketing, strategy, operations, MBA coursework. A or B guaranteed or 100% refund.',
  alternates: { canonical: 'https://gradeguaranteed.com/take-my-business-class' },
}

export default function TakeMyBusinessClass() {
  return (
    <SubjectPageTemplate
      subject="Business"
      slug="business"
      icon="💼"
      headline="Take My Online Business Class For Me — Grade Guaranteed"
      metaDescription="MBA-level experts take your online business class. Management, marketing, strategy, operations, MBA coursework. A or B guaranteed or 100% refund."
      intro="Our MBA-qualified and business PhD experts take your online business class — from introductory management to advanced strategy — and deliver an A or B grade or your money back."
      weeklyRate="$49–$65"
      topics={['Introduction to Business', 'Business Management', 'Organizational Behavior', 'Strategic Management', 'Operations Management', 'Entrepreneurship', 'Business Ethics', 'Supply Chain Management', 'Project Management', 'MBA Core Courses', 'Business Communications', 'Business Law', 'International Business', 'Leadership Studies']}
      faqs={[{ q: 'Can you handle MBA-level coursework?', a: 'Yes. We have MBA graduates and business PhDs on our team who handle graduate-level business coursework including case analyses, strategic plans, and executive summaries.' }, { q: 'Do you write business case studies?', a: 'Yes. Business case analyses are among our most common requests. Our experts follow case study methodology precisely and write at the graduate level.' }, { q: 'Can you complete a business simulation like Capsim or StratSim?', a: 'Yes. We have experience with business simulations including Capsim, StratSim, and similar platforms. Mention your simulation in the quote request.' }]}
      relatedSubjects={[{ label: 'Accounting', href: '/take-my-accounting-class' }, { label: 'Finance', href: '/take-my-finance-class' }, { label: 'Marketing', href: '/take-my-marketing-class' }, { label: 'Math', href: '/take-my-math-class' }]}
    />
  )
}
