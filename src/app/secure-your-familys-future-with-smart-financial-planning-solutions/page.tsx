import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { postMetadata } from '@/lib/site';
import { ArticleJsonLd } from '@/components/JsonLd';
import ThemeButton from '@/components/ThemeButton';

export const metadata: Metadata = postMetadata(
  'secure-your-familys-future-with-smart-financial-planning-solutions',
  "Secure Your Family's Future with Smart Financial Planning Solutions",
  'Discover how our integrated approach to goal setting, educational funding, risk management, and estate planning delivers robust multi-generational wealth.',
);

export default function ArticleSmartFinancialPlanning() {
  return (
    <article className="container" style={{ paddingBottom: '5rem' }}>
      <ArticleJsonLd slug="secure-your-familys-future-with-smart-financial-planning-solutions" />
      <header className="article-header">
        <ul className="breadcrumbs" style={{ justifyContent: 'center' }}>
          <li><Link href="/">Home</Link></li>
          <li className="breadcrumbs-separator">/</li>
          <li><Link href="/blog">Blog</Link></li>
          <li className="breadcrumbs-separator">/</li>
          <li className="breadcrumbs-current">Smart Financial Planning</li>
        </ul>
        <span className="badge badge-cyan" style={{ marginBottom: '1rem' }}>Financial Planning</span>
        <h1>Secure Your Family&apos;s Future with Smart Financial Planning Solutions</h1>
        <div className="article-meta-bar">
          <span>Published on May 8, 2024</span>
          <span>•</span>
          <span>1 min read</span>
          <span>•</span>
          <span>By SecureVest Advisory Team</span>
        </div>
      </header>

      <div className="article-hero-image">
        <img
          src="/images/blogs/blog-smart-planning.jpg"
          alt="Financial advisor presenting customized financial roadmap to couple in modern executive conference room"
          width={980}
          height={480}
        />
        <p style={{ textAlign: 'center', marginTop: '0.75rem', fontSize: '0.9rem', color: 'var(--color-slate-500)', fontStyle: 'italic' }}>
          Secure your future
        </p>
      </div>

      <div className="article-content">
        <p className="lead">
          At <strong>SecureVest Solutions</strong>, we specialize in asset protection, insurance, and tax-saving strategies. Our comprehensive services include goal setting, retirement planning, educational funding, risk management, and estate planning to ensure your family&apos;s financial security and peace of mind for the future. Let us help you achieve your financial goals.
        </p>

        <h2>Strategic Roadmaps for Growing Families</h2>
        <p>
          Effective financial planning is not a static document; it is a dynamic roadmap that adapts to your changing priorities. As children grow, careers progress, and economic conditions fluctuate, having an experienced advisory partner ensures that every financial decision moves you closer to long-term independence.
        </p>

        <h2>Integrated Family Financial Services</h2>
        <ul className="checklist">
          <li className="checklist-item">
            <span className="checklist-icon"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span>
            <span><strong>Goal Setting &amp; Cash Flow Optimization:</strong> Calculating net worth, evaluating liquidity buffers, and systematically eliminating high-interest liabilities.</span>
          </li>
          <li className="checklist-item">
            <span className="checklist-icon"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span>
            <span><strong>Educational Funding:</strong> Evaluating 529 savings plans and college financial aid strategies to prepare children for tomorrow.</span>
          </li>
          <li className="checklist-item">
            <span className="checklist-icon"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span>
            <span><strong>Risk Management &amp; Insurance:</strong> Stress-testing policies to guarantee income replacement if health or economic shocks occur.</span>
          </li>
        </ul>

        <div className="article-callout">
          <h4>Plan Today ! Protect Tomorrow !</h4>
          <p>
            You don&apos;t have to navigate these decisions alone. Schedule a consultation with our licensed advisory team to review your financial goals and establish a personalized strategy today.
          </p>
        </div>

        {/* Author Box */}
        <div className="article-author-card">
          <div className="author-large-avatar" aria-hidden="true">SV</div>
          <div>
            <h4 style={{ margin: '0 0 0.25rem 0' }}>SecureVest Solutions Advisory Team</h4>
            <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--color-slate-600)' }}>
              Dedicated to tailored family wealth protection, term life insurance, and retirement preservation.
            </p>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
          <ThemeButton
            href="https://calendly.com/securevestsolutions/appointment"
            target="_blank"
            variant="gold"
            size="lg"
          >
            Start Your Financial Plan
          </ThemeButton>
        </div>
      </div>
    </article>
  );
}
