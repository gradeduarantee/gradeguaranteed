import SubjectPageTemplate from '@/components/SubjectPageTemplate'

export const metadata = {
  title: 'Take My Online Biology Class For Me — A or B Guaranteed',
  description: 'PhD biologists take your online biology class. Cell biology, genetics, ecology, anatomy, and more. A or B guaranteed or 100% refund. $59/week.',
  alternates: { canonical: 'https://gradeguaranteed.com/take-my-biology-class' },
}

export default function TakeMyBiologyClass() {
  return (
    <SubjectPageTemplate
      subject="Biology"
      slug="biology"
      icon="🔬"
      headline="Take My Online Biology Class For Me — Grade Guaranteed"
      metaDescription="PhD biologists take your online biology class. Cell biology, genetics, ecology, anatomy, and more. A or B guaranteed or 100% refund. $59/week."
      intro="Biology courses are packed with complex concepts and detailed lab work. Our PhD biologists take your entire online biology class — from cell structure to genetics to ecology — and guarantee an A or B."
      weeklyRate="$59–$75"
      topics={['General Biology I & II', 'Cell Biology', 'Molecular Biology', 'Genetics', 'Ecology', 'Evolution', 'Microbiology', 'Marine Biology', 'Human Biology', 'Botany', 'Zoology', 'Anatomy & Physiology', 'Biochemistry', 'Lab Reports & Write-ups', 'Biology Research Papers']}
      faqs={[{ q: 'Can you help with online biology lab assignments?', a: 'Yes. Virtual labs, lab reports, data analysis, and lab write-ups are all covered. For platform-specific virtual labs (like Labster or HHMI BioInteractive), mention this in your quote.' }, { q: 'Do you handle genetics problems and punnett squares?', a: 'Absolutely. Genetics problems, punnett squares, probability calculations, and heredity analyses are standard for our biology experts.' }, { q: 'Can you take a proctored biology exam?', a: 'We handle many proctored exams. Share the details of your proctoring setup and we\'ll advise on our approach.' }]}
      relatedSubjects={[{ label: 'Chemistry', href: '/take-my-chemistry-class' }, { label: 'Nursing', href: '/take-my-nursing-class' }, { label: 'Statistics', href: '/take-my-statistics-class' }, { label: 'Psychology', href: '/take-my-psychology-class' }]}
    />
  )
}
