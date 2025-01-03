import type { MetadataRoute } from 'next'
import { headers } from 'next/headers'

// This `robots.tsx` component dynamically generates a robots.txt configuration
// It uses Next.js headers to fetch the `host` from the incoming request to dynamically construct the sitemap URL.
// The generated rules allow all user agents to crawl all pages, and the sitemap is provided for SEO optimization.

export default async function robots(): Promise<MetadataRoute.Robots> {
  const headersList = headers()
  const host = headersList.get('host')
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `https://${host}/sitemap.xml`,
  }
}
