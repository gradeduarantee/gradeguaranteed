export default function sitemap() {
  const base = 'https://gradeguaranteed.com'
  const now = new Date().toISOString()

  const corePages = [
    { url: base, priority: 1.0, changeFrequency: 'weekly' },
    { url: `${base}/grade-guarantee`, priority: 0.9, changeFrequency: 'monthly' },
    { url: `${base}/pricing`, priority: 0.9, changeFrequency: 'monthly' },
    { url: `${base}/how-it-works`, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${base}/reviews`, priority: 0.8, changeFrequency: 'weekly' },
    { url: `${base}/faq`, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${base}/get-a-quote`, priority: 0.9, changeFrequency: 'monthly' },
    { url: `${base}/blog`, priority: 0.7, changeFrequency: 'weekly' },
  ]

  const subjectPages = [
    'math', 'nursing', 'accounting', 'statistics', 'english',
    'biology', 'psychology', 'business', 'chemistry', 'history',
    'economics', 'finance', 'computer-science', 'sociology',
    'criminal-justice', 'marketing', 'political-science', 'philosophy',
    'anatomy-physiology', 'information-technology',
  ].map((slug) => ({
    url: `${base}/take-my-${slug}-class`,
    priority: 0.85,
    changeFrequency: 'monthly',
  }))

  const emergencyPages = [
    'im-failing-my-online-class',
    'take-my-online-exam',
    'take-my-proctored-exam',
  ].map((slug) => ({
    url: `${base}/${slug}`,
    priority: 0.8,
    changeFrequency: 'monthly',
  }))

  const blogPosts = [
    'how-to-pass-online-class-when-behind',
    'take-my-online-class-safe',
    'online-class-help-services-compared',
    'wgu-online-class-help',
    'snhu-online-class-tips',
    'nursing-class-too-hard',
  ].map((slug) => ({
    url: `${base}/blog/${slug}`,
    priority: 0.6,
    changeFrequency: 'monthly',
  }))

  const allPages = [...corePages, ...subjectPages, ...emergencyPages, ...blogPosts]

  return allPages.map(({ url, priority, changeFrequency }) => ({
    url,
    lastModified: now,
    changeFrequency,
    priority,
  }))
}
