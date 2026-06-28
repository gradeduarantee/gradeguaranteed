import SubjectPageTemplate from '@/components/SubjectPageTemplate'

export const metadata = {
  title: 'Take My Online Accounting Class For Me — A or B Guaranteed',
  description: 'Pay a CPA or accounting PhD to take your online accounting class. Financial accounting, managerial accounting, tax, auditing. A or B guaranteed or 100% refund.',
  alternates: { canonical: 'https://gradeguaranteed.com/take-my-accounting-class' },
}

export default function TakeMyAccountingClass() {
  return (
    <SubjectPageTemplate
      subject="Accounting"
      slug="accounting"
      icon="📊"
      headline="Take My Online Accounting Class For Me — Grade Guaranteed"
      metaDescription="Pay a CPA or accounting PhD to take your online accounting class. Financial accounting, managerial accounting, tax, auditing. A or B guaranteed or 100% refund."
      intro="Accounting is one of the most demanding business subjects online. Our team of CPAs and accounting PhDs take over your accounting class completely — every journal entry, every case study, every exam — and guarantee an A or B."
      weeklyRate="$49–$65"
      topics={['Financial Accounting', 'Managerial Accounting', 'Cost Accounting', 'Tax Accounting', 'Auditing', 'Governmental Accounting', 'Intermediate Accounting I & II', 'Advanced Accounting', 'Forensic Accounting', 'Accounting Information Systems', 'QuickBooks', 'Excel for Accounting']}
      faqs={[{ q: 'Can you complete QuickBooks or accounting software assignments?', a: 'Yes. Our accounting experts are proficient in QuickBooks, Excel, SAP, and all major accounting software used in online courses.' }, { q: 'Do you handle tax accounting classes?', a: 'Yes — individual tax, corporate tax, partnership tax, and international tax. Our experts hold CPA credentials and understand both the theory and practical application.' }, { q: 'Can you take an accounting exam with multiple choice and calculations?', a: 'Absolutely. We handle all exam formats — multiple choice, problem sets, case studies, simulations, and essay questions.' }]}
      relatedSubjects={[{ label: 'Math', href: '/take-my-math-class' }, { label: 'Finance', href: '/take-my-finance-class' }, { label: 'Business', href: '/take-my-business-class' }, { label: 'Statistics', href: '/take-my-statistics-class' }]}
    />
  )
}
