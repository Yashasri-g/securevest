import React from 'react';
import type { Metadata } from 'next';
import { pageMetadata, SITE_URL } from '@/lib/site';
import { BLOG_POSTS } from '@/data/blogPosts';
import JournalHub from '@/components/JournalHub';
import { BreadcrumbJsonLd } from '@/components/JsonLd';

export const metadata: Metadata = pageMetadata({
  title: 'The SecureVest Wealth Journal & Fiduciary Insights',
  description:
    'Explore carefully curated wealth preservation perspectives, retirement benchmarks, living trust blueprints, and life insurance strategies from SecureVest Solutions.',
  path: '/blog',
});

export default function BlogHubPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: SITE_URL },
          { name: 'Blog', url: `${SITE_URL}/blog` },
        ]}
      />
      <JournalHub posts={BLOG_POSTS} />
    </>
  );
}
