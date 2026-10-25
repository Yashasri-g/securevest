import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import ArchitecturalHero from '@/components/ArchitecturalHero';
import FinancialEstimator from '@/components/FinancialEstimator';
import ServicesInteractiveSection from '@/components/ServicesInteractiveSection';
import RoadmapJourney from '@/components/RoadmapJourney';
import TestimonialsLedger from '@/components/TestimonialsLedger';
import HomeBlogGrid from '@/components/HomeBlogGrid';
import { BLOG_POSTS } from '@/data/blogPosts';

export const metadata: Metadata = {
  title: "Secure Your Family's Financial Future Today | SecureVest Solutions",
  description:
    'Independent fiduciary wealth advisory, tailored family asset security, term life insurance, retirement income strategies, and living trusts.',
};

export default function HomePage() {
  const latestArticles = BLOG_POSTS.slice(0, 3);

  return (
    <>
      {/* =========================================================================
          SCENE 1: ARCHITECTURAL EDITORIAL HERO CANVAS
          Inspired by Varsity.vc, Zenarate, Relevo & Vinco, and Roof Studio
          ========================================================================= */}
      <ArchitecturalHero />

      {/* =========================================================================
          SCENE 2: 3 CORE FIDUCIARY PILLARS (CLEAN ARCHITECTURAL GRID)
          ========================================================================= */}
      <section className="fiduciary-pillars-section" aria-labelledby="pillars-title">
        <div className="container">
          <div className="section-head text-center">
            <div className="section-eyebrow">
              <span className="eyebrow-dot" aria-hidden="true"></span>
              Our Fiduciary Commitment
            </div>
            <h2 id="pillars-title" className="section-display-title">
              Three Pillars of <span className="highlight-text">Family Protection</span>
            </h2>
            <p className="section-lead-text">
              Built on transparency, independence, and bespoke planning to ensure lifelong financial peace of mind.
            </p>
          </div>

          <div className="pillars-cards-grid">
            <div className="pillar-card">
              <div className="pillar-card-num">01</div>
              <h3 className="pillar-card-title">Tailored Strategies, Not Cookie-Cutter Formulas</h3>
              <p className="pillar-card-desc">
                Every recommendation is built from scratch around your specific cash flow, tax bracket, and family legacy timeline.
              </p>
            </div>

            <div className="pillar-card">
              <div className="pillar-card-num">02</div>
              <h3 className="pillar-card-title">Objective Fiduciary Perspective</h3>
              <p className="pillar-card-desc">
                We work exclusively for your household, recommending top-tier insurance carriers and low-drag investment vehicles without sales pressure.
              </p>
            </div>

            <div className="pillar-card">
              <div className="pillar-card-num">03</div>
              <h3 className="pillar-card-title">Accessible, Transparent Guidance</h3>
              <p className="pillar-card-desc">
                No convoluted financial jargon. We communicate every step clearly so you are completely confident in every decision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SCENE 3: INTERACTIVE STRATEGY COCKPIT (FINANCIAL ESTIMATOR)
          ========================================================================= */}
      <section className="estimator-section" id="estimator" aria-labelledby="estimator-title">
        <div className="container">
          <div className="section-head text-center">
            <div className="section-eyebrow">
              <span className="eyebrow-dot" aria-hidden="true"></span>
              Real-Time Projection Engine
            </div>
            <h2 id="estimator-title" className="section-display-title">
              Retirement &amp; Family Protection <span className="highlight-text">Estimator</span>
            </h2>
            <p className="section-lead-text">
              Test different scenarios to estimate the exact term life coverage and retirement nest egg required to keep your household secure.
            </p>
          </div>

          <FinancialEstimator />
        </div>
      </section>

      {/* =========================================================================
          SCENE 4: 6 CORE FINANCIAL PILLARS (INTERACTIVE SERVICES HUB)
          ========================================================================= */}
      <ServicesInteractiveSection />

      {/* =========================================================================
          SCENE 5: 4-STEP FAMILY WEALTH ROADMAP
          ========================================================================= */}
      <RoadmapJourney />

      {/* =========================================================================
          SCENE 6: VERIFIED CLIENT TESTIMONIALS LEDGER
          ========================================================================= */}
      <TestimonialsLedger />

      {/* =========================================================================
          SCENE 7: LATEST FINANCIAL EDUCATION & INSIGHTS
          ========================================================================= */}
      <section className="home-insights-section" aria-labelledby="insights-title">
        <div className="container">
          <div className="section-head-split">
            <div>
              <h2 id="insights-title" className="section-display-title">
                Latest Strategies &amp; <span className="highlight-text">Insights</span>
              </h2>
            </div>
            <Link href="/blog" className="btn btn-outline btn-md">
              View All Articles
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
          </div>

          <HomeBlogGrid posts={latestArticles} />
        </div>
      </section>

      {/* =========================================================================
          SCENE 8: THE SOVEREIGN FINAL CTA BANNER
          ========================================================================= */}
      <section className="sovereign-cta-section" aria-labelledby="cta-banner-title">
        <div className="cta-ambient-glow" aria-hidden="true" />
        <div className="container">
          <div className="cta-box-card">
            <div className="cta-content-wrapper text-center">
              <span className="cta-eyebrow-badge">Plan Today ! Protect Tomorrow !</span>
              <h2 id="cta-banner-title" className="cta-main-title">
                Take the First Step Toward Lifelong Family Security
              </h2>
              <p className="cta-body-desc">
                Schedule a complimentary, no-obligation strategy session with a SecureVest advisor. We will review your current coverage, calculate your numbers, and engineer a roadmap tailored to your family.
              </p>

              <div className="cta-action-buttons">
                <a
                  href="https://calendly.com/securevestsolutions/appointment"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-accent btn-lg cta-primary-btn"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  Schedule Appointment (Calendly)
                </a>

                <a href="tel:7403032525" className="btn btn-outline-light btn-lg cta-phone-btn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  Direct Call: (740) 303-2525
                </a>
              </div>

              <div className="cta-guarantee-strip">
                <span>✓ 100% Free Initial Strategy Audit</span>
                <span>✓ Zero Sales Pressure</span>
                <span>✓ Fully Confidential &amp; Fiduciary</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
