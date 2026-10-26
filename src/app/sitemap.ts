import type { MetadataRoute } from 'next';
import { BLOG_POSTS } from '@/data/blogPosts';
import { SITE_URL, toIsoDate } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = [
    { url: SITE_URL, changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE_URL}/financial-planning-services`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/blog`, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE_URL}/contact`, changeFrequency: 'yearly', priority: 0.6 },
  ];

  const posts: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${SITE_URL}/${post.slug}`,
    lastModified: toIsoDate(post.date),
    changeFrequency: 'yearly',
    priority: 0.7,
    images: [`${SITE_URL}${post.image}`],
  }));

  return [...pages, ...posts];
}
