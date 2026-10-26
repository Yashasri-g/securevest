import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import ThemeButton from '@/components/ThemeButton';

export const metadata: Metadata = {
  title: 'Financial Planning & Insurance Services',
  description:
    'Comprehensive financial planning for families and businesses: estate planning, investment growth, retirement security, life & term insurance, and educational funds.',
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero / Header */}
      <section className="page-hero-banner" aria-label="Services Overview">
        <div className="page-hero-watermark" aria-hidden="true">SERVICES</div>
        <div className="container">
          <span className="page-hero-eyebrow">Our Fiduciary Advisory Services</span>
          <h1 className="page-hero-title">Secure Your Future With Comprehensive Planning</h1>
          <p className="page-hero-lead">
            Comprehensive planning for families and businesses to protect assets, preserve wealth, and maximize tax benefits through every stage of life.
          </p>
          <div className="page-hero-actions">
            <ThemeButton
              href="https://calendly.com/securevestsolutions/appointment"
              target="_blank"
              variant="gold"
              size="lg"
            >
              Schedule Free Consultation
            </ThemeButton>
            <ThemeButton
              href="/contact"
              variant="outline-light"
              size="lg"
            >
              Request Information
            </ThemeButton>
          </div>
        </div>
      </section>

      {/* 6 Core Services Grid */}
      <section className="section" aria-labelledby="services-list-heading">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">What We Offer</span>
            <h2 id="services-list-heading">Tailored Strategies Designed for Your Goals</h2>
            <p>
              From wealth building and college funding to term life coverage and multi-generational trust structures, we tailor every strategy to fit your individual financial roadmap.
            </p>
          </div>

          <div className="grid-2">
            
            {/* Service 1: Estate Planning */}
            <div className="card service-card">
              <div className="service-icon-box">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
              <h3>Estate Planning &amp; Legacy Protection</h3>
              <p>
                Safeguard your legacy and provide for your heirs. Every plan should protect and pass your wealth efficiently, minimizing taxes and avoiding lengthy probate proceedings.
              </p>
              <ul className="checklist" style={{ marginTop: '1rem', marginBottom: '1.5rem' }}>
                <li className="checklist-item">
                  <span className="checklist-icon"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span>
                  <span>Living Wills &amp; Revocable Trusts coordination</span>
                </li>
                <li className="checklist-item">
                  <span className="checklist-icon"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span>
                  <span>Beneficiary designation auditing &amp; alignment</span>
                </li>
                <li className="checklist-item">
                  <span className="checklist-icon"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span>
                  <span>Intergenerational wealth transfer strategies</span>
                </li>
              </ul>
              <div style={{ marginTop: 'auto' }}>
                <a
                  href="https://calendly.com/securevestsolutions/appointment"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-sm"
                >
                  Consult on Estate Planning &rarr;
                </a>
              </div>
            </div>

            {/* Service 2: Investment Expertise */}
            <div className="card service-card">
              <div className="service-icon-box">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="18" y1="20" x2="18" y2="10"></line>
                  <line x1="12" y1="20" x2="12" y2="4"></line>
                  <line x1="6" y1="20" x2="6" y2="14"></line>
                </svg>
              </div>
              <h3>Investment Expertise &amp; Growth</h3>
              <p>
                Our team of investment professionals will help you create a diversified portfolio designed to meet your income and growth objectives while minimizing unnecessary market risk.
              </p>
              <ul className="checklist" style={{ marginTop: '1rem', marginBottom: '1.5rem' }}>
                <li className="checklist-item">
                  <span className="checklist-icon"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span>
                  <span>Risk tolerance assessment &amp; asset allocation</span>
                </li>
                <li className="checklist-item">
                  <span className="checklist-icon"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span>
                  <span>Tax-efficient investment vehicles &amp; accounts</span>
                </li>
                <li className="checklist-item">
                  <span className="checklist-icon"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span>
                  <span>Ongoing portfolio rebalancing &amp; progress tracking</span>
                </li>
              </ul>
              <div style={{ marginTop: 'auto' }}>
                <a
                  href="https://calendly.com/securevestsolutions/appointment"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-sm"
                >
                  Discuss Portfolio Options &rarr;
                </a>
              </div>
            </div>

            {/* Service 3: Retirement Planning & Stress Testing */}
            <div className="card service-card">
              <div className="service-icon-box">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3>Retirement Planning &amp; Stress Testing</h3>
              <p>
                Analyze pension plans, retirement benefits, RMDs (Required Minimum Distributions), Roth IRA conversions; educate on retirement timing, update projections, and run stress tests against inflation and market downturns.
              </p>
              <ul className="checklist" style={{ marginTop: '1rem', marginBottom: '1.5rem' }}>
                <li className="checklist-item">
                  <span className="checklist-icon"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span>
                  <span>Social Security claiming &amp; pension optimization</span>
                </li>
                <li className="checklist-item">
                  <span className="checklist-icon"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span>
                  <span>Roth IRA conversion &amp; distribution planning</span>
                </li>
                <li className="checklist-item">
                  <span className="checklist-icon"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span>
                  <span>Longevity stress testing to guarantee income lasts</span>
                </li>
              </ul>
              <div style={{ marginTop: 'auto' }}>
                <a
                  href="https://calendly.com/securevestsolutions/appointment"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-sm"
                >
                  Plan Your Retirement &rarr;
                </a>
              </div>
            </div>

            {/* Service 4: Financial Peace of Mind */}
            <div className="card service-card">
              <div className="service-icon-box">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                  <line x1="9" y1="9" x2="9.01" y2="9"></line>
                  <line x1="15" y1="9" x2="15.01" y2="9"></line>
                </svg>
              </div>
              <h3>Financial Peace of Mind</h3>
              <p>
                Worried about running out of money in retirement? With SecureVest Solutions, you'll gain confidence in your financial future. Our strategies ensure your money lasts as long as you do, providing security for you and your loved ones.
              </p>
              <ul className="checklist" style={{ marginTop: '1rem', marginBottom: '1.5rem' }}>
                <li className="checklist-item">
                  <span className="checklist-icon"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span>
                  <span>Guaranteed lifetime income floor strategies</span>
                </li>
                <li className="checklist-item">
                  <span className="checklist-icon"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span>
                  <span>Emergency fund &amp; liquidity buffers</span>
                </li>
                <li className="checklist-item">
                  <span className="checklist-icon"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span>
                  <span>Regular annual reviews and progress updates</span>
                </li>
              </ul>
              <div style={{ marginTop: 'auto' }}>
                <a
                  href="https://calendly.com/securevestsolutions/appointment"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-sm"
                >
                  Build Your Peace of Mind &rarr;
                </a>
              </div>
            </div>

            {/* Service 5: Educational Planning */}
            <div className="card service-card">
              <div className="service-icon-box">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                </svg>
              </div>
              <h3>Educational Funding &amp; College Savings</h3>
              <p>
                Evaluate and select educational savings vehicles (such as 529 plans), monitor student age for asset allocation adjustments, advise on financial aid qualifications, and stay ahead of tax law changes.
              </p>
              <ul className="checklist" style={{ marginTop: '1rem', marginBottom: '1.5rem' }}>
                <li className="checklist-item">
                  <span className="checklist-icon"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span>
                  <span>529 Plan selection and state tax credit review</span>
                </li>
                <li className="checklist-item">
                  <span className="checklist-icon"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span>
                  <span>Age-based glide paths to preserve tuition principal</span>
                </li>
                <li className="checklist-item">
                  <span className="checklist-icon"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span>
                  <span>FAFSA financial aid impact modeling</span>
                </li>
              </ul>
              <div style={{ marginTop: 'auto' }}>
                <a
                  href="https://calendly.com/securevestsolutions/appointment"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-sm"
                >
                  Start Educational Planning &rarr;
                </a>
              </div>
            </div>

            {/* Service 6: Life & Term Insurance */}
            <div className="card service-card">
              <div className="service-icon-box">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h3>Life &amp; Term Insurance Solutions</h3>
              <p>
                Planning for the future can feel complex, but you don't have to do it alone. Find your best fit policy with adjustable coverage and transparent rates from SecureVest Solutions.
              </p>
              <ul className="checklist" style={{ marginTop: '1rem', marginBottom: '1.5rem' }}>
                <li className="checklist-item">
                  <span className="checklist-icon"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span>
                  <span>Term life insurance for affordable family income replacement</span>
                </li>
                <li className="checklist-item">
                  <span className="checklist-icon"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span>
                  <span>Disability income &amp; long-term care policy audits</span>
                </li>
                <li className="checklist-item">
                  <span className="checklist-icon"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span>
                  <span>Independent carrier comparisons to secure the best rates</span>
                </li>
              </ul>
              <div style={{ marginTop: 'auto' }}>
                <a
                  href="https://calendly.com/securevestsolutions/appointment"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-sm"
                >
                  Compare Policy Quotes &rarr;
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section section-bg-slate" aria-labelledby="services-reviews-heading">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Client Feedback</span>
            <h2 id="services-reviews-heading">Real Results for Real Families</h2>
            <p>Our commitment to clear advice and tailored execution delivers measurable confidence.</p>
          </div>

          <div className="grid-2">
            <div className="testimonial-card">
              <div>
                <div className="testimonial-stars" aria-label="5 stars">★★★★★</div>
                <p className="testimonial-quote">
                  "SecureVest Solutions helped us plan our retirement effectively and secure our family's future. Highly recommended!"
                </p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">JS</div>
                <div className="author-info">
                  <h4>Jane Smith</h4>
                  <span>Retirement Strategy Client</span>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div>
                <div className="testimonial-stars" aria-label="5 stars">★★★★★</div>
                <p className="testimonial-quote">
                  "Their expertise in tax saving strategies made our investment process smooth and beneficial. Truly grateful for their help!"
                </p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">MS</div>
                <div className="author-info">
                  <h4>Mark &amp; Sarah T.</h4>
                  <span>Asset Protection &amp; Tax Strategy</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="section section-sm">
        <div className="container">
          <div className="cta-banner">
            <div className="cta-banner-content">
              <span className="section-eyebrow" style={{ background: 'rgba(255,255,255,0.12)', color: 'var(--color-accent-300)', borderColor: 'rgba(255,255,255,0.2)' }}>
                Get Started
              </span>
              <h2>Ready to Build Your Tailored Strategy?</h2>
              <p>
                Book an appointment with our team today. We'll listen to your priorities and outline clear recommendations at zero cost or obligation.
              </p>
              <div className="cta-banner-actions">
                <ThemeButton
                  href="https://calendly.com/securevestsolutions/appointment"
                  target="_blank"
                  variant="gold"
                  size="lg"
                >
                  Book An Appointment
                </ThemeButton>
                <ThemeButton
                  href="tel:7403032525"
                  variant="outline-light"
                  size="lg"
                >
                  Call (740) 303-2525
                </ThemeButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
