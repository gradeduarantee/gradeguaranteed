import SubjectPageTemplate from '@/components/SubjectPageTemplate'

export const metadata = {
  title: 'Take My Nursing Class For Me — A or B Guaranteed',
  description: 'Pay a registered nurse or DNP to take your online nursing class. BSN, MSN, ATI, NCLEX prep, and more. A or B grade guaranteed or 100% refund. $59/week.',
  alternates: { canonical: 'https://gradeguaranteed.com/take-my-nursing-class' },
}

export default function TakeMyNursingClass() {
  return (
    <SubjectPageTemplate
      subject="Nursing"
      slug="nursing"
      icon="🏥"
      headline="Take My Online Nursing Class For Me — Grade Guaranteed"
      metaDescription="Registered nurses and DNPs take your online nursing class. BSN, MSN, pharmacology, pathophysiology, and more. A or B guaranteed."
      intro="Online nursing programs are among the most demanding in higher education. Our team of registered nurses, nurse practitioners, and DNPs take your nursing class and guarantee an A or B — or you get a full refund."
      weeklyRate="$59–$79"
      topics={[
        'Fundamentals of Nursing', 'Medical-Surgical Nursing', 'Pharmacology',
        'Pathophysiology', 'Maternal-Newborn Nursing', 'Pediatric Nursing',
        'Mental Health Nursing', 'Community Health Nursing', 'Leadership & Management',
        'Evidence-Based Practice', 'Research in Nursing', 'Health Assessment',
        'Adult Health I & II', 'NCLEX Preparation', 'ATI TEAS',
        'Critical Care Nursing', 'Geriatric Nursing', 'Capstone Projects',
        'BSN Completion Programs', 'MSN Coursework',
      ]}
      tasks={[
        { task: 'Nursing Homework Help', href: '/take-my-nursing-class/homework' },
        { task: 'Take My Nursing Exam', href: '/take-my-nursing-class/exam' },
        { task: 'ATI Testing Help', href: '/take-my-nursing-class/ati' },
        { task: 'NCLEX Prep Help', href: '/take-my-nursing-class/nclex' },
        { task: 'Pharmacology Class', href: '/take-my-nursing-class/pharmacology' },
        { task: 'Pathophysiology Class', href: '/take-my-nursing-class/pathophysiology' },
        { task: 'Nursing Care Plans', href: '/take-my-nursing-class/care-plans' },
        { task: 'Nursing Discussion Posts', href: '/take-my-nursing-class/discussion-posts' },
      ]}
      universities={[
        'WGU (RN-BSN)', 'Chamberlain University', 'SNHU', 'Grand Canyon University',
        'University of Phoenix', 'Capella University (FlexPath)', 'Liberty University',
        'American Sentinel University', 'Aspen University', 'Walden University',
        'Herzing University', 'National University', 'Rasmussen University',
      ]}
      reviews={[
        { name: 'Tanya W.', school: 'Capella University', grade: 'A', text: 'FlexPath nursing is incredibly demanding. Most services don\'t understand it. These guys did. My expert completed the capstone assessments flawlessly. Got an A on all three.' },
        { name: 'Jessica L.', school: 'WGU', grade: 'B+', text: 'The RN-BSN program at WGU is no joke. My expert — a practicing RN — knew the ATI modules inside and out. Passed everything first attempt.' },
        { name: 'Michelle T.', school: 'Chamberlain University', grade: 'A', text: 'Pharmacology was destroying me. They assigned an expert who clearly had clinical experience — the drug classifications, dosage calculations, everything was done perfectly.' },
      ]}
      faqs={[
        { q: 'Do your nursing experts have actual nursing credentials?', a: 'Yes. Our nursing team consists of registered nurses (RNs), nurse practitioners (NPs), and doctoral-level nurses (DNPs). We match your class level to the appropriate credential.' },
        { q: 'Can you handle ATI proctored assessments?', a: 'We handle many ATI-related components. Contact us with the specific ATI module and proctoring setup and we\'ll advise on the approach.' },
        { q: 'Can you write nursing care plans?', a: 'Yes. Nursing care plans, SOAP notes, clinical reflections, evidence-based practice papers — all within our nursing team\'s expertise.' },
        { q: 'What about online nursing programs with clinical requirements?', a: 'Our service covers the academic/online components of your nursing program. Clinical placements (in-person rotations) are not something we handle. But theory classes, online modules, and online assessments are all covered.' },
        { q: 'Can you help with WGU\'s competency-based nursing program?', a: 'Yes. We have extensive experience with WGU\'s nursing programs including the RN-BSN completion track. Our experts know the OA format, the rubrics, and the evidence-based approach WGU requires.' },
      ]}
      relatedSubjects={[
        { label: 'Biology', href: '/take-my-biology-class' },
        { label: 'Psychology', href: '/take-my-psychology-class' },
        { label: 'Chemistry', href: '/take-my-chemistry-class' },
        { label: 'Statistics', href: '/take-my-statistics-class' },
      ]}
    />
  )
}
