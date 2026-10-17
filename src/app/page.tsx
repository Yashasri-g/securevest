import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import FinancialEstimator from '@/components/FinancialEstimator';
import { BLOG_POSTS } from '@/data/blogPosts';

export const metadata: Metadata = {
  title: "Secure Your Family's Financial Future Today | SecureVest Solutions",
  description:
    'Comprehensive solutions for asset security, retirement planning, life and term insurance, and tax savings tailored to your family goals.',
};

export default function HomePage() {
  const latestArticles = BLOG_POSTS.slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section" aria-labelledby="hero-heading">
        <div className="container hero-grid">
          <div className="hero-content">
            <div className="hero-tag">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
              Plan Today ! Protect Tomorrow !
            </div>
            <h1 id="hero-heading" className="hero-title">
              Secure Your Family's <span className="highlight">Financial Future</span> Today
            </h1>
            <p className="hero-subtitle">
              Comprehensive solutions for asset security, tailored life &amp; term insurance, retirement planning, and tax optimization to ensure lifelong peace of mind.
            </p>
            <div className="hero-actions">
              <a
                href="https://calendly.com/securevestsolutions/appointment"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-accent btn-lg"
              >
                Book Appointment
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
              <Link href="/contact" className="btn btn-outline btn-lg">
                Get Started
              </Link>
            </div>
            <div className="hero-trust-bar">
              <div className="hero-trust-item">
                <span className="hero-trust-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>
                <span className="hero-trust-text">Tailored Family<br />Protection Plans</span>
              </div>
              <div className="hero-trust-item">
                <span className="hero-trust-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>
                <span className="hero-trust-text">Tax-Advantaged<br />Strategies</span>
              </div>
              <div className="hero-trust-item">
                <span className="hero-trust-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>
                <span className="hero-trust-text">Complimentary<br />1-on-1 Consultation</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-image-wrapper">
              <img
                src="/images/hero-family.jpg"
                alt="Family holding papercut heart representing protected family legacy"
                className="hero-image"
                width={600}
                height={480}
              />
            </div>
            {/* Floating Credibility Badges */}
            <div className="hero-floating-badge top-left">
              <div className="badge-icon-box cyan">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <div className="floating-badge-text">
                <h4>Asset Protection</h4>
                <p>Shielding your wealth</p>
              </div>
            </div>
            <div className="hero-floating-badge bottom-right">
              <div className="badge-icon-box gold">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </div>
              <div className="floating-badge-text">
                <h4>Top Rated Guidance</h4>
                <p>5-Star client satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Pillars / Services Overview */}
      <section className="section section-bg-slate" aria-labelledby="pillars-heading">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Comprehensive Financial Solutions</span>
            <h2 id="pillars-heading">We Specialize in Securing Every Stage of Life</h2>
            <p>
              At SecureVest Solutions, we help families protect their assets and provide tailored insurance solutions for financial security and peace of mind.
            </p>
          </div>

          <div className="grid-3">
            <div className="card service-card">
              <div className="service-icon-box">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 14 14"></polyline>
                </svg>
              </div>
              <h3>Goal Setting &amp; Planning</h3>
              <p>
                Set and monitor financial goals, calculate net worth, review cash flow, track progress, and provide responsible, personalized advice for you and your family.
              </p>
              <Link href="/financial-planning-services" className="btn btn-outline btn-sm" style={{ marginTop: 'auto' }}>
                Learn More &rarr;
              </Link>
            </div>

            <div className="card service-card">
              <div className="service-icon-box">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h3>Risk Management &amp; Insurance</h3>
              <p>
                Analyze insurance needs, evaluate current policies, and provide comprehensive term life, disability, and long-term care insurance solutions to manage risk effectively.
              </p>
              <Link href="/financial-planning-services" className="btn btn-outline btn-sm" style={{ marginTop: 'auto' }}>
                Explore Coverage &rarr;
              </Link>
            </div>

            <div className="card service-card">
              <div className="service-icon-box">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
              </div>
              <h3>Estate Planning &amp; Legacy</h3>
              <p>
                Safeguard your legacy and provide for your heirs. Every plan should protect and pass your wealth efficiently, avoiding costly probate courts through living wills and trusts.
              </p>
              <Link href="/financial-planning-services" className="btn btn-outline btn-sm" style={{ marginTop: 'auto' }}>
                Protect Legacy &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment Split Section */}
      <section className="section" aria-labelledby="commitment-heading">
        <div className="container split-section">
          <div className="split-image-wrapper">
            <img
              src="/images/advisor-desk.jpg"
              alt="Financial advisor reviewing tailored retirement and asset strategy"
              width={540}
              height={420}
            />
          </div>
          <div>
            <span className="section-eyebrow">Our Commitment to You</span>
            <h2 id="commitment-heading">Dedicated to Your Family's Lifelong Well-Being</h2>
            <p>
              We specialize in goal setting, retirement planning, tax strategies, risk management, and estate planning to ensure your family's financial security for a prosperous future.
            </p>
            <ul className="checklist">
              <li className="checklist-item">
                <span className="checklist-icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>
                <span><strong>Tailored Strategies:</strong> Personalized plans built around your unique cash flow, family goals, and risk profile.</span>
              </li>
              <li className="checklist-item">
                <span className="checklist-icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>
                <span><strong>Tax-Smart Growth:</strong> Strategies designed to preserve more of what you earn and maximize intergenerational transfer.</span>
              </li>
              <li className="checklist-item">
                <span className="checklist-icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>
                <span><strong>Clear, Plain English Guidance:</strong> No intimidating jargon or high-pressure tactics. Clear answers every step of the way.</span>
              </li>
            </ul>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <a
                href="https://calendly.com/securevestsolutions/appointment"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Book Your Appointment
              </a>
              <a href="tel:7403032525" className="btn btn-outline">
                Call (740) 303-2525
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Estimator Section */}
      <section className="section section-bg-slate" id="estimator" aria-labelledby="calc-heading">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Interactive Estimator</span>
            <h2 id="calc-heading">Plan Your Protection &amp; Retirement Milestones</h2>
            <p>
              Use our interactive estimator to calculate recommended term life protection and determine your target monthly retirement income.
            </p>
          </div>

          <FinancialEstimator />
        </div>
      </section>

      {/* Roadmap & Direction Section */}
      <section className="section" aria-labelledby="roadmap-heading">
        <div className="container split-section reverse">
          <div className="split-image-wrapper">
            <img
              src="/images/retirement-couple.jpg"
              alt="Couple smiling together enjoying a secure retirement"
              width={540}
              height={420}
            />
          </div>
          <div>
            <span className="section-eyebrow">Financial Direction</span>
            <h2 id="roadmap-heading">Where do you want your financial roadmap to take you?</h2>
            <p>
              We'll work with you to explore the choices you may have already heard about and determine which ones fit your individual strategy.
            </p>
            <p>
              Whether you are starting a family, buying your first home, growing a business, or preparing for a worry-free retirement, our team provides the clarity and execution needed to navigate every milestone.
            </p>
            <div style={{ marginTop: '2rem' }}>
              <a
                href="https://calendly.com/securevestsolutions/appointment"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg"
              >
                Book Appointment
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="section section-bg-slate" aria-labelledby="testimonials-heading">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Client Experiences</span>
            <h2 id="testimonials-heading">Trusted by Families for Lasting Security</h2>
            <p>Hear how our personalized advisory and insurance planning have helped clients protect their assets and plan with confidence.</p>
          </div>

          <div className="grid-2">
            <div className="testimonial-card">
              <div>
                <div className="testimonial-stars" aria-label="5 out of 5 stars">★★★★★</div>
                <p className="testimonial-quote">
                  "SecureVest Solutions helped us plan our retirement effectively and secure our family's future. Highly recommended!"
                </p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar" aria-hidden="true">JS</div>
                <div className="author-info">
                  <h4>Jane Smith</h4>
                  <span>Retirement Planning Client</span>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div>
                <div className="testimonial-stars" aria-label="5 out of 5 stars">★★★★★</div>
                <p className="testimonial-quote">
                  "Their expertise in tax saving strategies made our investment process smooth and beneficial. Truly grateful for their help!"
                </p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar" aria-hidden="true">MS</div>
                <div className="author-info">
                  <h4>Mark &amp; Sarah T.</h4>
                  <span>Tax &amp; Asset Protection Client</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Insights Section */}
      <section className="section" aria-labelledby="insights-heading">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Financial Education &amp; Insights</span>
            <h2 id="insights-heading">Guidance on Protecting What Matters</h2>
            <p>Explore practical articles written by our advisory team to help you navigate retirement, trusts, and term life insurance.</p>
          </div>

          <div className="grid-3">
            {latestArticles.map((post) => (
              <article key={post.slug} className="blog-card" data-category={post.category}>
                <div className="blog-card-media">
                  <span className={`badge ${post.category === 'estate' ? 'badge-gold' : 'badge-cyan'} blog-card-badge`}>
                    {post.categoryLabel}
                  </span>
                  <img
                    src={post.image}
                    alt={post.imageAlt}
                    className="blog-card-img"
                    width={380}
                    height={220}
                  />
                </div>
                <div className="blog-card-content">
                  <div className="blog-card-meta">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="blog-card-title">
                    <Link href={`/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>
                  <p className="blog-card-excerpt">
                    {post.excerpt}
                  </p>
                  <div className="blog-card-footer">
                    <Link href={`/${post.slug}`} className="nav-link" style={{ padding: 0 }}>
                      Read Article &rarr;
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link href="/blog" className="btn btn-outline">
              View All Articles &amp; Insights
            </Link>
          </div>
        </div>
      </section>

      {/* High-Impact CTA Banner */}
      <section className="section section-sm">
        <div className="container">
          <div className="cta-banner">
            <div className="cta-banner-content">
              <span className="section-eyebrow" style={{ background: 'rgba(255,255,255,0.12)', color: 'var(--color-accent-300)', borderColor: 'rgba(255,255,255,0.2)' }}>
                Get Started Today
              </span>
              <h2>Protect What Matters Most to Your Family</h2>
              <p>
                Schedule a personalized consultation with a SecureVest Solutions advisor. We'll review your current coverage, answer your questions, and build a roadmap tailored to your needs.
              </p>
              <div className="cta-banner-actions">
                <a
                  href="https://calendly.com/securevestsolutions/appointment"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-accent btn-lg"
                >
                  Schedule Free Consultation
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
