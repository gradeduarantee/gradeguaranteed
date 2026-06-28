import SubjectPageTemplate from '@/components/SubjectPageTemplate'

export const metadata = {
  title: 'Take My Online Statistics Class For Me — A or B Guaranteed',
  description: 'PhD statisticians take your online stats class. SPSS, R, Excel, probability, hypothesis testing, regression. A or B grade guaranteed or 100% refund.',
  alternates: { canonical: 'https://gradeguaranteed.com/take-my-statistics-class' },
}

export default function TakeMyStatisticsClass() {
  return (
    <SubjectPageTemplate
      subject="Statistics"
      slug="statistics"
      icon="📉"
      headline="Take My Online Statistics Class For Me — Grade Guaranteed"
      metaDescription="PhD statisticians take your online stats class. SPSS, R, Excel, probability, hypothesis testing, regression. A or B grade guaranteed or 100% refund."
      intro="Statistics is one of the most feared online classes. Our PhD statisticians and data scientists handle every concept — from basic probability to advanced regression analysis — and guarantee you an A or B."
      weeklyRate="$49–$59"
      topics={['Descriptive Statistics', 'Probability Theory', 'Hypothesis Testing', 't-Tests & ANOVA', 'Regression Analysis', 'Chi-Square Tests', 'Confidence Intervals', 'Sampling Methods', 'SPSS', 'R Programming', 'Excel Statistics', 'Minitab', 'SAS Basics', 'Business Statistics', 'Biostatistics', 'Research Methods']}
      faqs={[{ q: 'Can you use SPSS for my statistics class?', a: 'Yes. We use SPSS, R, Excel, Minitab, and SAS — whatever your class requires. Our statisticians are proficient in all major statistical software.' }, { q: 'Can you handle both the math and the interpretation parts?', a: 'Yes. We write complete solutions including all calculations, software output, and written interpretation — exactly what your professor expects.' }, { q: 'What if my stats class uses MyStatLab or StatCrunch?', a: 'We work with MyStatLab, StatCrunch, SPSS, R, and all major statistics platforms.' }]}
      relatedSubjects={[{ label: 'Math', href: '/take-my-math-class' }, { label: 'Accounting', href: '/take-my-accounting-class' }, { label: 'Psychology', href: '/take-my-psychology-class' }, { label: 'Biology', href: '/take-my-biology-class' }]}
    />
  )
}
