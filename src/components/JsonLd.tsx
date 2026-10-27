import React from 'react';
import { BLOG_POSTS } from '@/data/blogPosts';
import { SITE_NAME, SITE_URL, absoluteUrl, toIsoDate } from '@/lib/site';

/** Renders a schema.org JSON-LD block. `<` is escaped so content can never close the script tag. */
export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  );
}

/** Article + breadcrumb structured data for a blog post, sourced from BLOG_POSTS. */
export function ArticleJsonLd({ slug }: { slug: string }) {
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return null;
  const url = absoluteUrl(`/${slug}`);
  const publisher = { '@type': 'Organization', name: SITE_NAME, logo: { '@type': 'ImageObject', url: `${SITE_URL}/images/logo.png` } };

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: post.title,
          description: post.excerpt,
          image: `${SITE_URL}${post.image}`,
          datePublished: toIsoDate(post.date),
          mainEntityOfPage: url,
          author: publisher,
          publisher,
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
            { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` },
            { '@type': 'ListItem', position: 3, name: post.title, item: url },
          ],
        }}
      />
    </>
  );
}

/** Reusable breadcrumb structured data component */
export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((it, idx) => ({
          '@type': 'ListItem',
          position: idx + 1,
          name: it.name,
          item: it.url,
        })),
      }}
    />
  );
}

/** FAQPage structured data for Answer Engine Optimization (AEO) & search snippets */
export function FaqJsonLd({
  faqs,
}: {
  faqs: { question: string; answer: string }[];
}) {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((f) => ({
          '@type': 'Question',
          name: f.question.replace(/^\d+[\.\)]\s*/, ''),
          acceptedAnswer: {
            '@type': 'Answer',
            text: f.answer,
          },
        })),
      }}
    />
  );
}
