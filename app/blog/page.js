import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'Blog — Online Class Help Tips & Guides',
  description: 'Expert tips, guides, and advice for online students. How to succeed in online classes, manage your workload, and get the grades you need.',
  alternates: { canonical: 'https://gradeguaranteed.com/blog' },
}

const posts = [
  {
    slug: 'how-to-pass-online-class-when-behind',
    title: 'How to Pass Your Online Class When You\'re Already Behind',
    excerpt: 'Getting behind in an online class feels like a hole you can\'t dig out of. Here\'s a practical recovery plan — including when professional help makes sense.',
    date: 'June 15, 2025',
    readTime: '7 min read',
    category: 'Class Recovery',
    image: null,
  },
  {
    slug: 'take-my-online-class-safe',
    title: 'Is It Safe to Pay Someone to Take Your Online Class?',
    excerpt: 'A frank look at the risks, how to minimize them, and what separates reputable services from the scammers who will take your money and disappear.',
    date: 'June 8, 2025',
    readTime: '9 min read',
    category: 'Safety & Trust',
    image: null,
  },
  {
    slug: 'online-class-help-services-compared',
    title: '8 Online Class Help Services Compared (2025): Who Actually Delivers?',
    excerpt: 'We evaluated 8 major "take my online class" services on price, grade guarantees, expert quality, and transparency. Here\'s what we found.',
    date: 'June 1, 2025',
    readTime: '12 min read',
    category: 'Comparisons',
    image: null,
  },
  {
    slug: 'wgu-online-class-help',
    title: 'WGU Online Class Help: What You Need to Know Before Hiring Anyone',
    excerpt: 'WGU\'s competency-based model is unique — and most class help services don\'t understand it. Here\'s what makes WGU different and what to look for in a service.',
    date: 'May 25, 2025',
    readTime: '8 min read',
    category: 'University Guides',
    image: null,
  },
  {
    slug: 'snhu-online-class-tips',
    title: 'SNHU Online Class Tips: Survive and Thrive in Your Program',
    excerpt: 'Southern New Hampshire University has over 170,000 online students. Here\'s what works — and what doesn\'t — for getting through SNHU\'s accelerated 8-week courses.',
    date: 'May 18, 2025',
    readTime: '6 min read',
    category: 'University Guides',
    image: null,
  },
  {
    slug: 'nursing-class-too-hard',
    title: 'My Online Nursing Class Is Too Hard — What Are My Options?',
    excerpt: 'Nursing programs have some of the highest dropout rates in higher education. If you\'re struggling, you\'re not alone — and you have real options.',
    date: 'May 10, 2025',
    readTime: '7 min read',
    category: 'Subject Guides',
    image: null,
  },
]

const categories = ['All', 'Class Recovery', 'Safety & Trust', 'Comparisons', 'University Guides', 'Subject Guides']

export default function BlogPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-hero-gradient py-16 px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              The GradeGuaranteed Blog
            </h1>
            <p className="text-blue-200 text-lg">
              Expert guides, tips, and honest advice for online students navigating their coursework.
            </p>
          </div>
        </section>

        <section className="py-20 bg-white px-4">
          <div className="max-w-6xl mx-auto">
            {/* Category filter */}
            <div className="flex flex-wrap gap-3 mb-12 justify-center">
              {categories.map((cat) => (
                <button key={cat}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${cat === 'All' ? 'bg-navy-900 text-white' : 'bg-gray-100 text-gray-600 hover:bg-navy-100'}`}>
                  {cat}
                </button>
              ))}
            </div>

            {/* Posts grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`}
                  className="group card hover:shadow-xl border border-gray-100 transition-all">
                  {/* Placeholder image */}
                  <div className="bg-gradient-to-br from-navy-100 to-navy-200 rounded-xl h-44 mb-5 flex items-center justify-center">
                    <span className="text-navy-400 text-4xl">📚</span>
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-gold-100 text-gold-700 text-xs font-bold px-3 py-1 rounded-full">{post.category}</span>
                    <span className="text-gray-400 text-xs">{post.readTime}</span>
                  </div>
                  <h2 className="text-navy-900 font-bold text-lg mb-3 group-hover:text-navy-700 leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-gray-400 text-xs">{post.date}</span>
                    <span className="text-gold-500 text-sm font-semibold group-hover:text-gold-600">Read more →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
