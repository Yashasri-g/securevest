import type { MetadataRoute } from 'next';
import { BLOG_POSTS } from '@/data/blogPosts';
import { SITE_URL, toIsoDate } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const pages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
      images: [`${SITE_URL}/images/hero-family.jpg`],
    },
    {
      url: `${SITE_URL}/financial-planning-services`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
      images: [`${SITE_URL}/images/advisor-desk.jpg`],
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
      images: [`${SITE_URL}/images/blogs/blog-market-resilience.jpg`],
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
      images: [`${SITE_URL}/images/logo-icon.png`],
    },
  ];

  const posts: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${SITE_URL}/${post.slug}`,
    lastModified: toIsoDate(post.date),
    changeFrequency: 'monthly',
    priority: 0.8,
    images: [`${SITE_URL}${post.image}`],
  }));

  return [...pages, ...posts];
}
