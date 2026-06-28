import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Take My Online Class For Me — A or B Guaranteed | GradeGuaranteed.com',
  description: 'Pay someone to take your online class. 500+ PhD experts, A or B grade guaranteed or 100% refund. From $37/week. 10+ years experience. All subjects covered.',
}

const subjects = [
  { icon: '📐', name: 'Mathematics', href: '/take-my-math-class' },
  { icon: '🏥', name: 'Nursing', href: '/take-my-nursing-class' },
  { icon: '📊', name: 'Accounting', href: '/take-my-accounting-class' },
  { icon: '📉', name: 'Statistics', href: '/take-my-statistics-class' },
  { icon: '🔬', name: 'Biology', href: '/take-my-biology-class' },
  { icon: '🧠', name: 'Psychology', href: '/take-my-psychology-class' },
  { icon: '💼', name: 'Business', href: '/take-my-business-class' },
  { icon: '⚗️', name: 'Chemistry', href: '/take-my-chemistry-class' },
  { icon: '📝', name: 'English', href: '/take-my-english-class' },
  { icon: '📜', name: 'History', href: '/take-my-history-class' },
  { icon: '💰', name: 'Economics', href: '/take-my-math-class' },
  { icon: '📈', name: 'Finance', href: '/take-my-accounting-class' },
  { icon: '💻', name: 'Computer Science', href: '/take-my-business-class' },
  { icon: '👥', name: 'Sociology', href: '/take-my-psychology-class' },
  { icon: '⚖️', name: 'Criminal Justice', href: '/take-my-history-class' },
  { icon: '📣', name: 'Marketing', href: '/take-my-business-class' },
  { icon: '🏛️', name: 'Political Science', href: '/take-my-history-class' },
  { icon: '🤔', name: 'Philosophy', href: '/take-my-history-class' },
  { icon: '🫀', name: 'Anatomy', href: '/take-my-nursing-class' },
  { icon: '🖥️', name: 'Information Technology', href: '/take-my-business-class' },
]

const steps = [
  { num: '01', title: 'Tell Us About Your Class', desc: 'Fill out our 2-minute form. Share your course details, deadline, and target grade. Completely confidential.' },
  { num: '02', title: 'We Match You With an Expert', desc: 'Within 2 hours we assign one of our 500+ PhD-level experts who specialises in your exact subject.' },
  { num: '03', title: 'Your Expert Takes Over', desc: 'Your dedicated expert logs in, completes assignments, and takes exams — all on your behalf.' },
  { num: '04', title: 'You Get the Grade. Guaranteed.', desc: 'Receive an A or B. If we miss the target, you get a 100% refund. No questions asked.' },
]

const reviews = [
  { text: "I was working full-time and completely overwhelmed. GradeGuaranteed took over my accounting class and I got an A. The relief was indescribable. 100% worth every penny.", name: "Sarah M.", school: "University of Phoenix", grade: "A" },
  { text: "I was skeptical at first but they delivered. My expert knew WGU's competency-based system perfectly. Got Competent on every assessment.", name: "James T.", school: "WGU", grade: "B+" },
  { text: "Three classes at once was killing me. They handled two simultaneously and I got A's in both. Support responds within minutes on WhatsApp.", name: "Priya K.", school: "SNHU", grade: "A" },
  { text: "My professor was tough. These guys handled everything professionally. Grade came in at 94%. Absolutely recommend.", name: "Marcus D.", school: "Liberty University", grade: "A" },
  { text: "Math has always been my weakness. I came with only 4 weeks left and behind on assignments. They caught up AND got me a B. Lifesavers.", name: "Ashley R.", school: "Strayer University", grade: "B" },
]

const faqs = [
  { q: "Is it safe to pay someone to take my online class?", a: "Yes. We use bank-level encryption for all data. We never store your login credentials beyond the class duration. In 10+ years of operation, we have maintained a 100% confidentiality record." },
  { q: "What grade do you guarantee?", a: "We guarantee an A or B grade for every class we handle. If we fall short, you receive a full 100% refund — no questions, no hassle, no delays." },
  { q: "How much does it cost?", a: "Short classes (up to 8 weeks) start at $49/week. Standard 12-week classes are $40/week. Full 16-week semesters are $37/week. Single tasks from $30. Get a free quote in 2 minutes." },
  { q: "How quickly can you start?", a: "In most cases your expert is assigned and working within 2–4 hours of approving your quote. Urgent same-day start also available." },
  { q: "What subjects do you cover?", a: "All subjects — nursing, math, accounting, statistics, psychology, English, history, biology, chemistry, business, and dozens more." },
]

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <section style={{ background: 'linear-gradient(135deg, #1a3a5c 0%, #0d2340 100%)', color: 'white', padding: '80px 24px 60px' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(201,168,76,0.15)', border: '1px solid rgba(201,168,76,0.4)', padding: '6px 14px', borderRadius: '20px', marginBottom: '24px' }}>
                <span style={{ color: '#c9a84c', fontSize: '13px', fontWeight: 700 }}>⭐ Trusted for 10+ Years · 10,000+ Students Helped</span>
              </div>
              <h1 style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 900, lineHeight: 1.1, marginBottom: '20px' }}>
                Take My Online<br />
                <span style={{ color: '#c9a84c' }}>Class For Me.</span><br />
                Grade Guaranteed.
              </h1>
              <p style={{ fontSize: '18px', opacity: 0.9, lineHeight: 1.7, marginBottom: '32px' }}>
                Our 500+ in-house PhD experts take your online class and guarantee you an A or B — from $37/week.
              </p>
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '32px' }}>
                <Link href="/get-a-quote" style={{ background: '#c9a84c', color: 'white', padding: '16px 32px', borderRadius: '8px', fontWeight: 800, textDecoration: 'none', fontSize: '16px' }}>
                  Get My Free Quote →
                </Link>
                <a href="https://wa.me/15551234567" target="_blank" rel="noopener noreferrer" style={{ background: '#25D366', color: 'white', padding: '16px 24px', borderRadius: '8px', fontWeight: 700, textDecoration: 'none', fontSize: '15px' }}>
                  💬 WhatsApp Now
                </a>
              </div>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
                <span style={{ fontSize: '12px', opacity: 0.6, marginRight: '4px' }}>Pay with:</span>
                {['💳 Card', '🍎 Apple Pay', '🅿️ PayPal'].map(m => (
                  <span key={m} style={{ background: 'rgba(255,255,255,0.1)', padding: '4px 10px', borderRadius: '6px', fontSize: '12px', fontWeight: 600 }}>{m}</span>
                ))}
              </div>
            </div>

            <div style={{ background: 'white', borderRadius: '16px', padding: '36px', boxShadow: '0 20px 60px rgba(0,0,0,0.3)' }}>
              <h2 style={{ color: '#1a3a5c', fontSize: '20px', fontWeight: 800, marginBottom: '6px' }}>Get Your Free Quote</h2>
              <p style={{ color: '#666', fontSize: '14px', marginBottom: '24px' }}>We respond within 2 hours.</p>
              <form action="https://formsubmit.co/icarus.dtd@hotmail.com" method="POST" style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <input type="hidden" name="_subject" value="New Quote Request — GradeGuaranteed" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="https://gradeguaranteed.com/thank-you" />
                <input type="text" name="name" placeholder="Your Name" required style={{ padding: '13px 16px', borderRadius: '8px', border: '2px solid #e0e0e0', fontSize: '15px' }} />
                <input type="email" name="email" placeholder="Email Address" required style={{ padding: '13px 16px', borderRadius: '8px', border: '2px solid #e0e0e0', fontSize: '15px' }} />
                <input type="tel" name="phone" placeholder="Phone Number (optional)" style={{ padding: '13px 16px', borderRadius: '8px', border: '2px solid #e0e0e0', fontSize: '15px' }} />
                <input type="text" name="subject" placeholder="Subject (e.g. Nursing, Math)" style={{ padding: '13px 16px', borderRadius: '8px', border: '2px solid #e0e0e0', fontSize: '15px' }} />
                <button type="submit" style={{ background: '#1a3a5c', color: 'white', padding: '15px', borderRadius: '8px', fontWeight: 800, fontSize: '16px', border: 'none', cursor: 'pointer' }}>
                  Get My Free Quote →
                </button>
              </form>
            </div>
          </div>
        </section>

        <section style={{ background: '#c9a84c', padding: '28px 24px' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '16px' }}>
            {[
              { num: '10+', label: 'Years in Operation' },
              { num: '10,000+', label: 'Students Helped' },
              { num: '500+', label: 'PhD Experts' },
              { num: '98%', label: 'Grade Guarantee Rate' },
              { num: '< 2h', label: 'Avg Response Time' },
            ].map(s => (
              <div key={s.label} style={{ textAlign: 'center', color: 'white' }}>
                <div style={{ fontSize: '28px', fontWeight: 900 }}>{s.num}</div>
                <div style={{ fontSize: '13px', opacity: 0.85 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ padding: '80px 24px', background: 'white' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <h2 style={{ textAlign: 'center', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 800, color: '#1a3a5c', marginBottom: '12px' }}>What Subject Is Your Class?</h2>
            <p style={{ textAlign: 'center', color: '#666', marginBottom: '40px' }}>We cover every subject taught at US universities.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '12px' }}>
              {subjects.map(s => (
                <Link key={s.name} href={s.href} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', padding: '20px 12px', background: '#f8f9fa', borderRadius: '12px', textDecoration: 'none' }}>
                  <span style={{ fontSize: '28px' }}>{s.icon}</span>
                  <span style={{ fontSize: '13px', fontWeight: 600, color: '#333', textAlign: 'center' }}>{s.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section style={{ padding: '80px 24px', background: '#f8f9fa' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2 style={{ textAlign: 'center', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 800, color: '#1a3a5c', marginBottom: '48px' }}>How It Works</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '32px' }}>
              {steps.map(step => (
                <div key={step.num} style={{ textAlign: 'center' }}>
                  <div style={{ width: '56px', height: '56px', background: '#c9a84c', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', color: 'white', fontWeight: 900, fontSize: '18px' }}>{step.num}</div>
                  <h3 style={{ fontWeight: 700, color: '#1a3a5c', marginBottom: '10px', fontSize: '16px' }}>{step.title}</h3>
                  <p style={{ color: '#666', fontSize: '14px', lineHeight: 1.6 }}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ padding: '80px 24px', background: 'white' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <h2 style={{ textAlign: 'center', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 800, color: '#1a3a5c', marginBottom: '8px' }}>What Students Say</h2>
            <p style={{ textAlign: 'center', color: '#888', fontSize: '13px', marginBottom: '40px', fontStyle: 'italic' }}>
              All reviews are from verified students. Names changed to protect student privacy. Published with permission.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
              {reviews.map(r => (
                <div key={r.name} style={{ background: '#f8f9fa', padding: '28px', borderRadius: '12px', border: '1px solid #eee' }}>
                  <div style={{ color: '#c9a84c', fontSize: '20px', marginBottom: '12px' }}>★★★★★</div>
                  <p style={{ color: '#333', lineHeight: 1.7, marginBottom: '16px', fontSize: '15px' }}>&ldquo;{r.text}&rdquo;</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <div style={{ fontWeight: 700, color: '#1a3a5c', fontSize: '14px' }}>{r.name}</div>
                      <div style={{ color: '#888', fontSize: '13px' }}>{r.school}</div>
                    </div>
                    <div style={{ background: '#1a3a5c', color: 'white', width: '36px', height: '36px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '14px' }}>{r.grade}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ padding: '80px 24px', background: '#f8f9fa' }}>
          <div style={{ maxWidth: '720px', margin: '0 auto' }}>
            <h2 style={{ textAlign: 'center', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 800, color: '#1a3a5c', marginBottom: '40px' }}>Frequently Asked Questions</h2>
            {faqs.map(({ q, a }) => (
              <details key={q} style={{ marginBottom: '16px', background: 'white', borderRadius: '10px', border: '1px solid #e0e0e0', overflow: 'hidden' }}>
                <summary style={{ padding: '20px 24px', fontWeight: 700, cursor: 'pointer', color: '#1a3a5c', fontSize: '16px', listStyle: 'none' }}>{q}</summary>
                <p style={{ padding: '0 24px 20px', color: '#555', lineHeight: 1.7, margin: 0 }}>{a}</p>
              </details>
            ))}
          </div>
        </section>

        <section style={{ padding: '80px 24px', background: '#1a3a5c', color: 'white', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, marginBottom: '16px' }}>Ready to Guarantee Your Grade?</h2>
          <p style={{ fontSize: '18px', opacity: 0.9, marginBottom: '36px', maxWidth: '560px', margin: '0 auto 36px', lineHeight: 1.7 }}>
            Join 10,000+ US students who got their online class handled by our PhD experts. A or B — or 100% refund.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/get-a-quote" style={{ background: '#c9a84c', color: 'white', padding: '18px 40px', borderRadius: '8px', fontWeight: 800, textDecoration: 'none', fontSize: '17px' }}>
              Get My Grade Guaranteed Today →
            </Link>
            <a href="https://wa.me/15551234567" target="_blank" rel="noopener noreferrer" style={{ background: '#25D366', color: 'white', padding: '18px 32px', borderRadius: '8px', fontWeight: 700, textDecoration: 'none', fontSize: '16px' }}>
              💬 Chat on WhatsApp
            </a>
          </div>
          <p style={{ marginTop: '24px', opacity: 0.6, fontSize: '14px' }}>
            ⚡ Under 2-hour response · 100% confidential · No upfront payment
          </p>
        </section>
      </main>
      <Footer />
    </>
  )
}
