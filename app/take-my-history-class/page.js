import SubjectPageTemplate from '@/components/SubjectPageTemplate'

export const metadata = {
  title: 'Take My Online History Class For Me — A or B Guaranteed',
  description: 'History PhD experts take your online history class. US history, world history, cultural history. Essays, discussions, exams. A or B guaranteed. $49/week.',
  alternates: { canonical: 'https://gradeguaranteed.com/take-my-history-class' },
}

export default function TakeMyHistoryClass() {
  return (
    <SubjectPageTemplate
      subject="History"
      slug="history"
      icon="📜"
      headline="Take My Online History Class For Me — Grade Guaranteed"
      metaDescription="History PhD experts take your online history class. US history, world history, cultural history. Essays, discussions, exams. A or B guaranteed. $49/week."
      intro="History classes demand extensive reading, analytical writing, and strong essay skills. Our history PhDs take your online history class — from US history to world civilizations — and guarantee an A or B."
      weeklyRate="$49–$55"
      topics={['American History I & II', 'World History I & II', 'Ancient History', 'Medieval History', 'Modern European History', 'African American History', 'Civil War & Reconstruction', '20th Century US History', 'History of Science & Technology', 'Cultural History', 'Military History', 'History Essays & Research Papers', 'Primary Source Analysis', 'Historical Documentaries']}
      faqs={[{ q: 'Can you write history essays and research papers?', a: 'Yes. Historical essays, research papers, primary source analyses, and argumentative papers are core strengths of our history team. All properly cited in Chicago, Turabian, or whatever style your class requires.' }, { q: 'Do you handle discussions that require APA formatting?', a: 'Absolutely. All our psychology experts are fluent in APA 7th edition formatting — in-text citations, reference lists, running heads, everything.' }, { q: 'Can you take a history exam with essay questions?', a: 'Absolutely. Our history experts are experienced at in-class essay exams, short answer questions, and multiple choice formats.' }]}
      relatedSubjects={[{ label: 'English', href: '/take-my-english-class' }, { label: 'Political Science', href: '/take-my-political-science-class' }, { label: 'Sociology', href: '/take-my-sociology-class' }, { label: 'Psychology', href: '/take-my-psychology-class' }]}
    />
  )
}
