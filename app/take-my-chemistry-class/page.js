import SubjectPageTemplate from '@/components/SubjectPageTemplate'

export const metadata = {
  title: 'Take My Online Chemistry Class For Me — A or B Guaranteed',
  description: 'PhD chemists take your online chemistry class. General, organic, biochemistry, lab reports. A or B grade guaranteed or 100% refund. $59/week.',
  alternates: { canonical: 'https://gradeguaranteed.com/take-my-chemistry-class' },
}

export default function TakeMyChemistryClass() {
  return (
    <SubjectPageTemplate
      subject="Chemistry"
      slug="chemistry"
      icon="⚗️"
      headline="Take My Online Chemistry Class For Me — Grade Guaranteed"
      metaDescription="PhD chemists take your online chemistry class. General, organic, biochemistry, lab reports. A or B grade guaranteed or 100% refund. $59/week."
      intro="Chemistry is one of the most challenging online science courses. Our PhD chemists and organic chemistry specialists handle every assignment, lab report, and exam — guaranteeing you an A or B."
      weeklyRate="$59–$75"
      topics={['General Chemistry I & II', 'Organic Chemistry I & II', 'Biochemistry', 'Analytical Chemistry', 'Physical Chemistry', 'Inorganic Chemistry', 'Chemistry Lab Reports', 'Stoichiometry', 'Thermodynamics', 'Electrochemistry', 'Molecular Structure', 'Chemical Kinetics', 'Nuclear Chemistry']}
      faqs={[{ q: 'Can you handle organic chemistry — the hardest chemistry class?', a: 'Organic chemistry is a specialty for several of our experts. Mechanisms, stereochemistry, synthesis problems, spectroscopy interpretation — all covered.' }, { q: 'Do you write chemistry lab reports?', a: 'Yes. Virtual lab reports, online lab write-ups, data analysis, and conclusion sections are all within our chemistry team's expertise.' }, { q: 'Can you use ChemDraw or other chemistry software?', a: 'Yes. Our chemistry experts use ChemDraw, Spartan, and other molecular modelling tools as required by your course.' }]}
      relatedSubjects={[{ label: 'Biology', href: '/take-my-biology-class' }, { label: 'Nursing', href: '/take-my-nursing-class' }, { label: 'Math', href: '/take-my-math-class' }, { label: 'Statistics', href: '/take-my-statistics-class' }]}
    />
  )
}
