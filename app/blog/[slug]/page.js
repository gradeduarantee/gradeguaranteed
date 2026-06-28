import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CTASection from '@/components/CTASection'
import Link from 'next/link'
import { notFound } from 'next/navigation'

const posts = {
  'how-to-pass-online-class-when-behind': {
    title: "How to Pass Your Online Class When You're Already Behind",
    date: 'June 15, 2025',
    readTime: '7 min read',
    category: 'Class Recovery',
    description: "Getting behind in an online class feels like a hole you can't dig out of. Here's a practical recovery plan — including when professional help makes sense.",
    content: `
      <p>You missed a week. Then two. Now you have four overdue assignments, a quiz you didn't take, and a midterm coming up that you haven't studied for. The grade portal shows something you don't want to look at.</p>

      <p>This is one of the most common situations online students face — and it's more recoverable than you think, if you act quickly and strategically.</p>

      <h2>Step 1: Do the Math Before You Panic</h2>
      <p>Before you do anything, calculate what grade you can realistically still achieve. Here's how:</p>
      <ul>
        <li>Open your syllabus and find the grade breakdown (assignments = 30%, quizzes = 20%, midterm = 25%, final = 25%, etc.).</li>
        <li>Note which components you've already failed or missed.</li>
        <li>Calculate: if you got 100% on every remaining item, what would your final grade be?</li>
      </ul>
      <p>If that number is above 80%, you can still get a B. If it's above 70%, you can still pass. Knowing this number tells you what's actually achievable — and prevents you from working hard toward something that's already mathematically impossible.</p>

      <h2>Step 2: Contact Your Professor</h2>
      <p>This sounds counterintuitive, but professors often have more flexibility than students assume — especially if you're proactive rather than silent. A single email explaining your situation ( health issues, work crisis) can sometimes unlock:</p>
      <ul>
        <li>Late submission windows for missed assignments</li>
        <li>An Incomplete grade giving you time to finish the work next term</li>
        <li>Extra credit opportunities</li>
      </ul>

      <h2>Step 3: Triage Remaining Work by Point Value</h2>
      <p>Not all assignments are equal. If you have limited time and energy, spend it where it counts most.</p>

      <h2>Step 4: Consider Professional Help</h2>
      <p>If you're significantly behind and overwhelmed, services like GradeGuaranteed.com can take over and ensure you finish strong.</p>
    `,
  },
  'take-my-online-class-safe': {
    title: "Is It Safe to Pay Someone to Take Your Online Class?",
    date: 'June 8, 2025',
    readTime: '9 min read',
    category: 'Safety & Trust',
    description: "A frank look at the risks and what separates reputable services from scammers.",
    content: `
      <p>Paying someone to take your online class carries some risk — but that risk varies dramatically based on who you use.</p>
      <h2>6 Signs of a Reputable Service</h2>
      <p>Published pricing, US business registration, real refund guarantee, in-house experts, fast response, and honesty about limitations.</p>
    `,
  },
  'online-class-help-services-compared': {
    title: "8 Online Class Help Services Compared (2025)",
    date: 'June 1, 2025',
    readTime: '12 min read',
    category: 'Comparisons',
    description: "We evaluated 8 major services on price, grade guarantees, expert quality, and transparency.",
    content: `
      <p>The "take my online class" industry has exploded. We evaluated 8 services on pricing transparency, grade guarantee quality, expert credentials, and company accountability. GradeGuaranteed.com topped the list as the only service that checks all four boxes.</p>
    `,
  },
}

export async function generateMetadata({ params }) {
  const post = posts[params.slug]
  if (!post) return {}
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `https://gradeguaranteed.com/blog/${params.slug}` },
  }
}

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }))
}

export default function BlogPost({ params }) {
  const post = posts[params.slug]
  if (!post) notFound()

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    author: { '@type': 'Organization', name: 'GradeGuaranteed.com' },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Header />
      <main>
        <section className="bg-hero-gradient py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-5">
              <span className="bg-gold-500/20 text-gold-400 text-xs font-bold px-3 py-1.5 rounded-full border border-gold-500/30">{post.category}</span>
              <span className="text-blue-300 text-sm">{post.date} • {post.readTime}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">{post.title}</h1>
          </div>
        </section>
        <section className="py-16 bg-white px-4">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
            <div className="mt-12">
              <h3 className="font-bold text-navy-900 text-xl mb-6">More From Our Blog</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {Object.entries(posts).filter(([s]) => s !== params.slug).slice(0, 2).map(([slug, p]) => (
                  <Link key={slug} href={`/blog/${slug}`} className="card border border-gray-100 hover:border-gold-300 transition-all">
                    <span className="text-xs font-bold text-gold-600 uppercase">{p.category}</span>
                    <h4 className="font-bold text-navy-900 mt-2 mb-2">{p.title}</h4>
                    <span className="text-gold-500 text-sm font-medium">Read article →</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
