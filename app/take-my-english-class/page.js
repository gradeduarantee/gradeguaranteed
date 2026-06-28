import SubjectPageTemplate from '@/components/SubjectPageTemplate'

export const metadata = {
  title: 'Take My Online English Class For Me — A or B Guaranteed',
  description: 'Expert writers take your online English class. Composition, literature, creative writing, research papers. A or B grade guaranteed. $49/week.',
  alternates: { canonical: 'https://gradeguaranteed.com/take-my-english-class' },
}

export default function TakeMyEnglishClass() {
  return (
    <SubjectPageTemplate
      subject="English"
      slug="english"
      icon="📝"
      headline="Take My Online English Class For Me — Grade Guaranteed"
      metaDescription="Expert writers take your online English class. Composition, literature, creative writing, research papers. A or B grade guaranteed. $49/week."
      intro="Our team of MFA and PhD-holding writers take your online English class — composing essays, discussion posts, literary analyses, and research papers — and guarantee you an A or B grade."
      weeklyRate="$49–$55"
      topics={['English Composition I & II', 'College Writing', 'Research Writing', 'Literary Analysis', 'American Literature', 'British Literature', 'World Literature', 'Creative Writing', 'Technical Writing', 'Business Writing', 'Rhetoric & Argumentation', 'Grammar & Style', 'APA, MLA, Chicago formatting']}
      faqs={[{ q: 'Can you write essays that pass plagiarism checks like Turnitin?', a: 'Yes. Every essay is 100% original and written from scratch by our expert. We never use pre-written content. Turnitin, SafeAssign, and other tools will show clean results.' }, { q: 'Can you match my writing style so it doesn\'t look like someone else wrote it?', a: 'Yes. We ask for samples of your previous writing and tailor our style to match. We also don\'t dramatically change writing quality mid-semester, which would raise flags.' }, { q: 'Do you handle discussion posts and peer responses?', a: 'Yes. Discussion boards, peer responses, reading reflections — all covered.' }]}
      relatedSubjects={[{ label: 'History', href: '/take-my-history-class' }, { label: 'Psychology', href: '/take-my-psychology-class' }, { label: 'Sociology', href: '/take-my-sociology-class' }, { label: 'Philosophy', href: '/take-my-philosophy-class' }]}
    />
  )
}
