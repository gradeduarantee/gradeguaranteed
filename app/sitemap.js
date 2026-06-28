export default function sitemap() {
  const baseUrl = 'https://gradeguaranteed.com'
  const now = new Date().toISOString()

  const staticPages = [
    '', '/grade-guarantee', '/pricing', '/how-it-works', '/reviews',
    '/faq', '/get-a-quote', '/blog',
    '/take-my-math-class', '/take-my-nursing-class', '/take-my-accounting-class',
    '/take-my-statistics-class', '/take-my-biology-class', '/take-my-chemistry-class',
    '/take-my-psychology-class', '/take-my-english-class', '/take-my-history-class',
    '/take-my-business-class',
    '/take-my-online-exam', '/take-my-proctored-exam', '/im-failing-my-online-class',
  ].map(path => ({
    url: baseUrl + path,
    lastModified: now,
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1.0 : path.includes('get-a-quote') ? 0.9 : 0.7,
  }))

  const blogPosts = [
    'nursing-class-too-hard',
    'snhu-online-class-tips',
    'wgu-online-class-help',
  ].map(slug => ({
    url: baseUrl + '/blog/' + slug,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  return [...staticPages, ...blogPosts]
}
