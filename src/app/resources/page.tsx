import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Financial Planning Resources & Tools',
  description:
    'Access family wealth protection tools, living will vs trust comparisons, retirement planning roadmaps, and educational checklists from SecureVest Solutions.',
};

export default function ResourcesPage() {
  return (
    <>
      <section className="section section-bg-slate" style={{ paddingTop: '4rem', paddingBottom: '3.5rem' }}>
        <div className="container container-narrow" style={{ textAlign: 'center' }}>
          <span className="section-eyebrow">Client Resources &amp; Guides</span>
          <h1>Empowering Families with Financial Clarity</h1>
          <p className="lead">
            Empowering families with asset protection, insurance solutions, and strategic financial planning for lasting security. Explore comparison tools, checklists, and planning matrices.
          </p>
        </div>
      </section>

      {/* Core Pillars */}
      <section className="section" aria-labelledby="resources-pillars-heading">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Comprehensive Financial Solutions</span>
            <h2 id="resources-pillars-heading">Three Fundamental Pillars of Security</h2>
            <p>We help families secure assets, plan for retirement, and optimize tax savings effectively.</p>
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
                Tailored strategies to help you achieve your financial goals and secure your future through realistic budgeting, debt reduction, and net worth milestones.
              </p>
            </div>

            <div className="card service-card">
              <div className="service-icon-box">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3>Retirement Planning</h3>
              <p>
                Strategies designed to ensure a comfortable and secure retirement tailored to your needs, protecting your principal against market volatility and inflation.
              </p>
            </div>

            <div className="card service-card">
              <div className="service-icon-box">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h3>Risk Management &amp; Insurance</h3>
              <p>
                Comprehensive insurance solutions to manage risk and protect your family's financial security from unforeseen emergencies or loss of income.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Matrix: Living Will vs Trust */}
      <section className="section section-bg-slate" aria-labelledby="comparison-heading">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Estate Planning Matrix</span>
            <h2 id="comparison-heading">Living Will vs. Trust: Understanding the Difference</h2>
            <p>
              Many families wonder whether they need a Living Will, a Trust, or both. Here is how they protect different aspects of your life.
            </p>
          </div>

          <div className="table-responsive">
            <table className="comparison-table" aria-label="Comparison between Living Will and Trust">
              <thead>
                <tr>
                  <th scope="col" style={{ width: '25%' }}>Feature / Purpose</th>
                  <th scope="col" style={{ width: '37.5%' }}>Living Will (Healthcare Directive)</th>
                  <th scope="col" style={{ width: '37.5%' }}>Revocable Living Trust (Asset Protection)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Primary Purpose</th>
                  <td>Outlines your medical decisions &amp; life support wishes if incapacitated</td>
                  <td>Holds and manages your money, real estate, and financial assets</td>
                </tr>
                <tr>
                  <th scope="row">When Does It Take Effect?</th>
                  <td>While you are alive, if you are medically unable to speak for yourself</td>
                  <td>Active immediately while alive, continues seamlessly after passing</td>
                </tr>
                <tr>
                  <th scope="row">Avoids Probate Court?</th>
                  <td><span className="table-badge-no">N/A (Handles Medical Only)</span></td>
                  <td><span className="table-badge-yes">✓ Yes (Assets transfer directly to heirs)</span></td>
                </tr>
                <tr>
                  <th scope="row">Key Appointee</th>
                  <td>Healthcare Proxy / Power of Attorney</td>
                  <td>Trustee (manages and distributes trust assets)</td>
                </tr>
                <tr>
                  <th scope="row">Who Needs This?</th>
                  <td>Every adult with medical care preferences</td>
                  <td>Homeowners, families with savings, minor children, or investments</td>
                </tr>
                <tr>
                  <th scope="row">Recommendation</th>
                  <td colSpan={2} style={{ backgroundColor: 'var(--color-accent-50)', fontWeight: 500, color: 'var(--color-primary-900)' }}>
                    💡 <strong>Best Practice:</strong> Having both ensures your health choices are respected and your family receives your assets without probate delays or court fees.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
            <Link href="/blog-post1" className="btn btn-outline">
              Read Full Guide on Wills &amp; Trusts (20 FAQs) &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Life-Stage Financial Checklist */}
      <section className="section" aria-labelledby="checklist-heading">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Actionable Milestones</span>
            <h2 id="checklist-heading">Your Family Financial Health Checklist</h2>
            <p>Essential steps to verify that your family has complete protection in place.</p>
          </div>

          <div className="grid-3">
            <div className="card">
              <h3 style={{ fontSize: '1.2rem', color: 'var(--color-accent-600)', marginBottom: '0.5rem' }}>
                Phase 1: Protection Foundation
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-slate-500)', marginBottom: '1.25rem' }}>
                Establishing baseline security
              </p>
              <ul className="checklist">
                <li className="checklist-item">
                  <span className="checklist-icon"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span>
                  <span>3–6 months emergency cash reserve</span>
                </li>
                <li className="checklist-item">
                  <span className="checklist-icon"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span>
                  <span>10x annual income term life coverage</span>
                </li>
                <li className="checklist-item">
                  <span className="checklist-icon"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span>
                  <span>Primary beneficiary updates on all 401(k)s</span>
                </li>
              </ul>
            </div>

            <div className="card">
              <h3 style={{ fontSize: '1.2rem', color: 'var(--color-primary-600)', marginBottom: '0.5rem' }}>
                Phase 2: Wealth &amp; Education
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-slate-500)', marginBottom: '1.25rem' }}>
                Peak earning &amp; asset accumulation
              </p>
              <ul className="checklist">
                <li className="checklist-item">
                  <span className="checklist-icon"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span>
                  <span>Maximize tax-advantaged retirement accounts</span>
                </li>
                <li className="checklist-item">
                  <span className="checklist-icon"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span>
                  <span>Setup 529 College Savings for children</span>
                </li>
                <li className="checklist-item">
                  <span className="checklist-icon"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span>
                  <span>Tax diversification (Roth, Traditional &amp; Taxable)</span>
                </li>
              </ul>
            </div>

            <div className="card">
              <h3 style={{ fontSize: '1.2rem', color: 'var(--color-gold-600)', marginBottom: '0.5rem' }}>
                Phase 3: Legacy &amp; Distribution
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-slate-500)', marginBottom: '1.25rem' }}>
                Preserving wealth &amp; peace of mind
              </p>
              <ul className="checklist">
                <li className="checklist-item">
                  <span className="checklist-icon"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span>
                  <span>Living Will and Revocable Trust execution</span>
                </li>
                <li className="checklist-item">
                  <span className="checklist-icon"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span>
                  <span>RMD stress test and Social Security timing</span>
                </li>
                <li className="checklist-item">
                  <span className="checklist-icon"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span>
                  <span>Long-term care and healthcare contingency</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-sm">
        <div className="container">
          <div className="cta-banner">
            <div className="cta-banner-content">
              <span className="section-eyebrow" style={{ background: 'rgba(255,255,255,0.12)', color: 'var(--color-accent-300)', borderColor: 'rgba(255,255,255,0.2)' }}>
                Get Your Custom Assessment
              </span>
              <h2>Need Help Reviewing Your Plan?</h2>
              <p>
                Schedule a complimentary 20-minute audit with a SecureVest Solutions advisor. We'll identify gaps and optimize your coverage.
              </p>
              <div className="cta-banner-actions">
                <a
                  href="https://calendly.com/securevestsolutions/appointment"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-accent btn-lg"
                >
                  Book Free Assessment
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
