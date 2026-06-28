export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
    ],
    sitemap: 'https://gradeguaranteed.com/sitemap.xml',
    host: 'https://gradeguaranteed.com',
  }
}
