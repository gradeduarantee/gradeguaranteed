import SubjectPageTemplate from '@/components/SubjectPageTemplate'

export const metadata = {
  title: 'Take My Math Class For Me — A or B Guaranteed',
  description: 'Pay someone to take your online math class. PhD mathematicians handle algebra, calculus, statistics, and more. A or B grade guaranteed or 100% refund. $49/week.',
  alternates: { canonical: 'https://gradeguaranteed.com/take-my-math-class' },
}

export default function TakeMyMathClass() {
  return (
    <SubjectPageTemplate
      subject="Math"
      slug="math"
      icon="📐"
      headline="Take My Online Math Class For Me — Grade Guaranteed"
      metaDescription="PhD mathematicians take your online math class. Algebra, calculus, stats, and more. A or B guaranteed or 100% refund."
      intro="Struggling with your online math class? Our PhD mathematicians take over completely — handling every assignment, quiz, and exam so you get an A or B. Guaranteed or 100% refund."
      weeklyRate="$49–$59"
      topics={[
        'College Algebra', 'Pre-Calculus', 'Calculus I & II', 'Multivariable Calculus',
        'Linear Algebra', 'Differential Equations', 'Discrete Mathematics',
        'Statistics & Probability', 'Business Mathematics', 'Trigonometry',
        'Number Theory', 'Abstract Algebra', 'Real Analysis', 'Finite Mathematics',
        'Applied Mathematics', 'MyMathLab', 'ALEKS', 'WebAssign',
      ]}
      tasks={[
        { task: 'Do My Math Homework', href: '/take-my-math-class/homework' },
        { task: 'Take My Math Exam', href: '/take-my-math-class/exam' },
        { task: 'Do My Math Quiz', href: '/take-my-math-class/quiz' },
        { task: 'MyMathLab Help', href: '/take-my-math-class/mymathlab' },
        { task: 'ALEKS Help', href: '/take-my-math-class/aleks' },
        { task: 'Calculus Help', href: '/take-my-math-class/calculus' },
        { task: 'Algebra Help', href: '/take-my-math-class/algebra' },
        { task: 'Statistics Help', href: '/take-my-math-class/statistics' },
      ]}
      universities={[
        'SNHU', 'WGU', 'Strayer University', 'University of Phoenix', 'Liberty University',
        'Capella University', 'DeVry University', 'Colorado Technical University',
        'Ashford University', 'American Public University', 'Grand Canyon University',
        'Regent University', 'Walden University', 'Excelsior University',
      ]}
      reviews={[
        { name: 'Ashley R.', school: 'Strayer University', grade: 'B', text: 'Math has been my nemesis my whole life. They took over my College Algebra class with 4 weeks left and I was failing. Got a B by the end. Absolute lifesavers.' },
        { name: 'Kevin L.', school: 'UMGC', grade: 'B+', text: 'SPSS assignments, regression analysis — my stats expert clearly had a quantitative background. Every assignment submitted with full work shown.' },
        { name: 'Diane M.', school: 'WGU', grade: 'A', text: 'WGU\'s math assessments are brutal. My expert knew the format perfectly and I passed every OA on the first attempt.' },
      ]}
      faqs={[
        { q: 'Can you take my MyMathLab class?', a: 'Yes. We work with MyMathLab, ALEKS, WebAssign, and all major math platforms. Your expert logs into your account and completes all assignments and homework sets.' },
        { q: 'My math class has timed quizzes — can you handle those?', a: 'Absolutely. We handle timed quizzes and exams. For synchronous (live) timed tests, you\'ll share your screen with our expert in real time via WhatsApp or Zoom, and they guide you through or handle it directly.' },
        { q: 'Can you take a proctored math exam?', a: 'We handle many proctored exams. Contact us with details about your proctoring software (Respondus, ProctorU, Honorlock) and we\'ll advise on the best approach.' },
        { q: 'How do you handle math homework that requires showing work?', a: 'Our experts provide complete, formatted solutions with all steps shown — exactly as an instructor would expect. No shortcuts that would look suspicious.' },
        { q: 'Can you start my math class immediately?', a: 'Yes. We can start your math class within 24 hours. For urgent situations (exam tomorrow), contact us directly on WhatsApp and we\'ll prioritize you.' },
      ]}
      relatedSubjects={[
        { label: 'Statistics', href: '/take-my-statistics-class' },
        { label: 'Accounting', href: '/take-my-accounting-class' },
        { label: 'Business', href: '/take-my-business-class' },
        { label: 'Chemistry', href: '/take-my-chemistry-class' },
        { label: 'Physics', href: '/take-my-physics-class' },
      ]}
    />
  )
}
