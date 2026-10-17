import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { BLOG_POSTS } from '@/data/blogPosts';
import BlogSearchFilter from '@/components/BlogSearchFilter';

export const metadata: Metadata = {
  title: 'Financial Planning & Insurance Blog',
  description:
    'Explore expert articles, retirement benchmarks, estate planning guides, and life insurance tips from the SecureVest Solutions advisory team.',
};

export default function BlogHubPage() {
  const featuredPost = BLOG_POSTS[0]; // Wills and trusts

  return (
    <>
      <section className="section section-bg-slate" style={{ paddingTop: '4rem', paddingBottom: '3.5rem' }}>
        <div className="container container-narrow" style={{ textAlign: 'center' }}>
          <span className="section-eyebrow">Advisory Articles &amp; Insights</span>
          <h1>Financial Insights for Family Security</h1>
          <p className="lead">
            Actionable perspectives on retirement readiness, estate planning, term life insurance, and market resilience from SecureVest Solutions.
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="blog-hub-title">
        <div className="container">
          {/* Featured Article Hero Card */}
          <article className="featured-blog-card" data-category={featuredPost.category}>
            <div className="featured-blog-media">
              <img
                src={featuredPost.image}
                alt={featuredPost.imageAlt}
                width={600}
                height={380}
              />
            </div>
            <div className="featured-blog-content">
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '1rem' }}>
                <span className="badge badge-gold">Featured Guide</span>
                <span style={{ fontSize: '0.85rem', color: 'var(--color-slate-500)' }}>
                  {featuredPost.date} • {featuredPost.readTime}
                </span>
              </div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', marginBottom: '1rem' }}>
                <Link href={`/${featuredPost.slug}`} style={{ color: 'inherit' }}>
                  {featuredPost.title}
                </Link>
              </h2>
              <p style={{ color: 'var(--color-slate-600)', marginBottom: '1.5rem', lineHeight: 1.7 }}>
                {featuredPost.excerpt}
              </p>
              <div>
                <Link href={`/${featuredPost.slug}`} className="btn btn-primary">
                  Read Complete Guide &rarr;
                </Link>
              </div>
            </div>
          </article>

          <h2 id="blog-hub-title" className="sr-only">All Articles</h2>

          {/* Interactive Search & Category Filter */}
          <BlogSearchFilter posts={BLOG_POSTS} />
        </div>
      </section>

      {/* CTA Banner */}
      <section className="section section-sm">
        <div className="container">
          <div className="cta-banner">
            <div className="cta-banner-content">
              <span className="section-eyebrow" style={{ background: 'rgba(255,255,255,0.12)', color: 'var(--color-accent-300)', borderColor: 'rgba(255,255,255,0.2)' }}>
                Direct Advisory
              </span>
              <h2>Have Questions About Your Strategy?</h2>
              <p>
                Speak directly with an advisor who can apply these concepts directly to your household financial picture.
              </p>
              <div className="cta-banner-actions">
                <a
                  href="https://calendly.com/securevestsolutions/appointment"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-accent btn-lg"
                >
                  Book A Strategy Call
                </a>
                <a href="tel:7403032525" className="btn btn-outline-white btn-lg">
                  Call (740) 303-2525
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
