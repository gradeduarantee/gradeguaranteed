import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CTASection from '@/components/CTASection'

const posts = {
  'nursing-class-too-hard': {
    title: 'My Nursing Class Is Too Hard — Here\'s What Actually Works',
    date: 'June 2025',
    readTime: '7 min read',
    category: 'Nursing',
    description: 'Struggling with your online nursing class? You\'re not alone. Here are real strategies that work — and what to do when they don\'t.',
    content: `
      <h2>Why Nursing Classes Feel Impossible Online</h2>
      <p>Online nursing programs are notoriously demanding. Between pharmacology, pathophysiology, clinical documentation, and evidence-based practice papers — the workload is relentless. And unlike a classroom, you don't have professors you can stay after to ask questions.</p>
      <p>If you're reading this, you're probably hitting a wall. Maybe you're working full-time. Maybe you have kids. Maybe you just underestimated how brutal SNHU or Chamberlain online nursing really is. That's okay — let's talk about what actually helps.</p>
      
      <h2>Strategy 1: Triage Your Assignments by Grade Weight</h2>
      <p>Not all assignments are equal. Before you spend three hours on a discussion post worth 5 points, check your syllabus. Focus energy on proctored exams and major papers that carry 20–30% of your grade. Drop your standards slightly on low-stakes work.</p>
      
      <h2>Strategy 2: Use NCLEX Resources for Concept Mastery</h2>
      <p>Even if your class isn't the NCLEX, NCLEX prep materials (Saunders, UWorld) explain nursing concepts clearly and include the clinical reasoning you need for exams. Many students find these more helpful than their assigned textbooks.</p>
      
      <h2>Strategy 3: Form a Virtual Study Group</h2>
      <p>Facebook groups and Reddit communities for your specific program (r/nursing, SNHU nursing groups) are invaluable. Find classmates in your cohort — you'll often discover someone who already figured out what the professor actually wants.</p>
      
      <h2>Strategy 4: Talk to Your Academic Advisor Immediately</h2>
      <p>If you're already behind, don't wait. Advisors can arrange Incomplete grades, late withdrawals, or connect you with tutoring resources. But they can only help if you reach out before the deadline passes.</p>
      
      <h2>When None of That Is Enough</h2>
      <p>Sometimes the reality is that you're stretched too thin. A job, family obligations, and a demanding nursing program genuinely cannot all run at 100% simultaneously. If you're at risk of failing — which can affect your financial aid, program standing, and career timeline — it may be time to consider getting professional help.</p>
      <p>At GradeGuaranteed, we have RN-credentialed experts who specialize in online nursing programs including Chamberlain, Walden, SNHU, and WGU. We handle assignments, exams, and discussion posts while you manage the rest of your life. Grade guaranteed.</p>
    `,
  },
  'snhu-online-class-tips': {
    title: '7 SNHU Online Class Tips That Actually Help You Pass',
    date: 'June 2025',
    readTime: '6 min read',
    category: 'Online Learning',
    description: 'Southern New Hampshire University has a unique online format. These tips are specifically tailored to how SNHU structures its courses — and how to stay ahead.',
    content: `
      <h2>Understanding How SNHU Online Works</h2>
      <p>SNHU runs on 8-week accelerated terms, not traditional semesters. That means the pace is nearly double a regular class. Miss one week and you're genuinely behind — not metaphorically, actually behind.</p>
      
      <h2>Tip 1: Read the Rubric Before the Assignment, Not After</h2>
      <p>SNHU professors grade heavily against their rubrics. Before you write a single word, download the rubric and structure your response to hit every criterion. Students who do this routinely score 5–10 points higher on discussions and papers.</p>
      
      <h2>Tip 2: Submit Early to Use the Draft Feedback Tool</h2>
      <p>SNHU's online platform lets professors (and sometimes Smarthinking tutors) leave feedback on drafts. Submit early, get feedback, revise. This alone can turn a B paper into an A.</p>
      
      <h2>Tip 3: Treat Discussion Posts Like Mini Essays</h2>
      <p>SNHU discussion posts are graded for substance, not just participation. Aim for 200–300 words with at least one cited source. Reply to peers with substantive comments, not just "great point!"</p>
      
      <h2>Tip 4: Use the SNHU Library, Not Just Google</h2>
      <p>Your SNHU credentials give you access to EBSCO, ProQuest, and dozens of academic databases. Professors can tell when citations come from Google vs. peer-reviewed journals. Use the library.</p>
      
      <h2>Tip 5: Block-Schedule Your Study Time</h2>
      <p>Because SNHU releases all coursework at the start of the week, it's tempting to procrastinate. Instead, block-schedule specific days for specific tasks: Monday = read module, Tuesday = draft discussion, Thursday = reply to peers, Saturday = work on paper.</p>
      
      <h2>Tip 6: Contact Your Professor in Week 1</h2>
      <p>A brief introduction email in week 1 establishes you as an engaged student. Professors remember students who communicate — and that can make the difference when you need an extension or extra feedback.</p>
      
      <h2>Tip 7: Know When to Get Help</h2>
      <p>SNHU's accelerated format leaves no room for falling behind. If you miss the first week or start drowning in week 3, catching up is genuinely difficult. If you're juggling work and family, consider professional class help to protect your GPA and financial aid standing.</p>
    `,
  },
  'wgu-online-class-help': {
    title: 'WGU Online Class Help — Navigating Competency-Based Education',
    date: 'June 2025',
    readTime: '8 min read',
    category: 'WGU',
    description: "WGU's competency-based model is unlike any traditional online class. Here's a clear guide to how it works and how to succeed — or get help when you need it.",
    content: `
      <h2>How WGU Actually Works (Most Students Are Confused)</h2>
      <p>Western Governors University doesn't use traditional grades — you either demonstrate Competency or you don't. There are no letter grades, no GPA in the traditional sense. You progress by passing assessments that prove you've mastered each competency.</p>
      <p>This model is great for self-directed learners but brutal for anyone who doesn't understand what's expected — or who doesn't have time to study deeply.</p>
      
      <h2>Understanding OA vs. PA</h2>
      <p>WGU has two main assessment types: Performance Assessments (PAs) are written projects you submit for evaluation by WGU's assessment team. Objective Assessments (OAs) are proctored exams. Both require you to demonstrate specific competencies, not just recall facts.</p>
      
      <h2>How to Pass Performance Assessments</h2>
      <p>PAs are graded against a detailed rubric. Read every single rubric row before you start writing. Each row has a "Competent" and "Not Yet Competent" description — write directly to the Competent description for every row. Students who do this pass on first submission significantly more often.</p>
      
      <h2>How to Pass Objective Assessments</h2>
      <p>WGU's OAs are adaptive — they adjust difficulty based on your responses. The passing threshold is typically around 70%, but because the test adapts, you need consistent mastery, not lucky guesses. Use Sophia.org, Study Hall, and WGU's own Course Tips for each subject.</p>
      
      <h2>When You Can Retake vs. When You're Stuck</h2>
      <p>OAs can be retaken after a 3-day waiting period. PAs can be resubmitted after addressing evaluator feedback. However, each resubmission takes time — and if you're close to your term end date, you may run out of time and have to pay for another term.</p>
      
      <h2>Getting Help With WGU Classes</h2>
      <p>WGU's student mentors and course instructors are available but often stretched thin. If you need deep subject-matter help, outside tutoring is often faster. For students who are genuinely overwhelmed — working full-time, dealing with family situations, or struggling with a specific program — professional class help services like GradeGuaranteed have WGU-certified experts who understand exactly how the competency system works and can handle PAs and OAs on your behalf.</p>
    `,
  },
}

export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }) {
  const post = posts[params.slug]
  if (!post) return {}
  return {
    title: post.title,
    description: post.description,
  }
}

export default function BlogPost({ params }) {
  const post = posts[params.slug]
  if (!post) notFound()

  return (
    <>
      <Header />
      <main>
        <article style={{ maxWidth: '800px', margin: '0 auto', padding: '60px 24px' }}>
          <div style={{ marginBottom: '24px' }}>
            <span style={{ background: '#e8f0fe', color: '#1a3a5c', padding: '4px 12px', borderRadius: '20px', fontSize: '13px', fontWeight: 600 }}>{post.category}</span>
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 900, color: '#1a3a5c', marginBottom: '16px', lineHeight: 1.2 }}>{post.title}</h1>
          <div style={{ display: 'flex', gap: '16px', color: '#888', fontSize: '14px', marginBottom: '40px' }}>
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
          <div
            style={{ lineHeight: 1.8, color: '#333', fontSize: '17px' }}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
