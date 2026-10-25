import React from 'react';
import type { Metadata } from 'next';
import { BLOG_POSTS } from '@/data/blogPosts';
import JournalHub from '@/components/JournalHub';

export const metadata: Metadata = {
  title: 'The SecureVest Wealth Journal & Interviews | Fiduciary Insights',
  description:
    'Explore carefully curated wealth preservation perspectives, retirement benchmarks, living trust blueprints, and life insurance strategies from SecureVest Solutions.',
};

export default function BlogHubPage() {
  return <JournalHub posts={BLOG_POSTS} />;
}
