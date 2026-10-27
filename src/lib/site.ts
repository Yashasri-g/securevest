import type { Metadata } from 'next';
import { BLOG_POSTS } from '@/data/blogPosts';

/** Production origin. Override with NEXT_PUBLIC_SITE_URL for previews/staging. */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://securevestsolutions.com').replace(/\/$/, '');
export const SITE_NAME = 'SecureVest Solutions';
export const SITE_PHONE = '+1-740-303-2525';
export const SITE_EMAIL = 'contact@securevestsolutions.com';
export const DEFAULT_OG_IMAGE = '/images/hero-family.jpg';

/** Blog dates are stored as m/d/yyyy; sitemaps and JSON-LD need ISO dates. */
export function toIsoDate(mdy: string): string {
  const [m, d, y] = mdy.split('/').map(Number);
  return new Date(Date.UTC(y, m - 1, d)).toISOString();
}

export const absoluteUrl = (path: string) => `${SITE_URL}${path === '/' ? '' : path}`;

interface PageMetaInput {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
}

/** Per-page metadata: canonical URL plus matching Open Graph and Twitter cards. */
export function pageMetadata({ title, description, path, image = DEFAULT_OG_IMAGE, type = 'website', publishedTime }: PageMetaInput): Metadata {
  const imageUrl = image.startsWith('http') ? image : `${SITE_URL}${image.startsWith('/') ? '' : '/'}${image}`;
  const canonicalUrl = absoluteUrl(path);

  return {
    title,
    description,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      type,
      siteName: SITE_NAME,
      locale: 'en_US',
      title,
      description,
      url: canonicalUrl,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      ...(type === 'article' && publishedTime ? { publishedTime } : {}),
    },
    twitter: { card: 'summary_large_image', title, description, images: [imageUrl] },
  };
}

/** Metadata for a blog post page, taking the image and date from the BLOG_POSTS data. */
export function postMetadata(slug: string, title: string, description: string): Metadata {
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  return pageMetadata({
    title,
    description,
    path: `/${slug}`,
    image: post?.image,
    type: 'article',
    publishedTime: post ? toIsoDate(post.date) : undefined,
  });
}
