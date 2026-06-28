import SubjectPageTemplate from '@/components/SubjectPageTemplate'

export const metadata = {
  title: 'Take My Online Psychology Class For Me — A or B Guaranteed',
  description: 'Psychology PhD experts take your online psych class. General, abnormal, social, developmental psychology, research methods. A or B guaranteed. $49/week.',
  alternates: { canonical: 'https://gradeguaranteed.com/take-my-psychology-class' },
}

export default function TakeMyPsychologyClass() {
  return (
    <SubjectPageTemplate
      subject="Psychology"
      slug="psychology"
      icon="🧠"
      headline="Take My Online Psychology Class For Me — Grade Guaranteed"
      metaDescription="Psychology PhD experts take your online psych class. General, abnormal, social, developmental psychology, research methods. A or B guaranteed. $49/week."
      intro="Whether it's Introduction to Psychology or Advanced Abnormal Psych, our PhD psychologists handle your entire class — all assignments, discussions, and exams — with an A or B guaranteed."
      weeklyRate="$49–$59"
      topics={['Introduction to Psychology', 'Abnormal Psychology', 'Social Psychology', 'Developmental Psychology', 'Cognitive Psychology', 'Behavioral Psychology', 'Personality Theories', 'Research Methods in Psychology', 'Statistics for Psychology (SPSS)', 'Counseling Psychology', 'Industrial-Organizational Psychology', 'Neuropsychology', 'Forensic Psychology']}
      faqs={[{ q: 'Can you write psychology case studies and analyses?', a: 'Yes. Case studies, psychological assessments, DSM-5 diagnostic papers, theory application papers — our experts have extensive experience with all psych writing formats.' }, { q: 'Do you handle discussions that require APA formatting?', a: 'Absolutely. All our psychology experts are fluent in APA 7th edition formatting — in-text citations, reference lists, running heads, everything.' }, { q: 'Can you take a multiple choice psychology exam?', a: 'Yes. Our experts handle all exam formats including multiple choice tests, which are common in psychology courses.' }]}
      relatedSubjects={[{ label: 'Sociology', href: '/take-my-sociology-class' }, { label: 'English', href: '/take-my-english-class' }, { label: 'Biology', href: '/take-my-biology-class' }, { label: 'Criminal Justice', href: '/take-my-criminal-justice-class' }]}
    />
  )
}
