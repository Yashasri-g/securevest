import React from 'react';
import type { Metadata } from 'next';
import ArchitecturalHero from '@/components/ArchitecturalHero';
import ServicesInteractiveSection from '@/components/ServicesInteractiveSection';
import RoadmapJourney from '@/components/RoadmapJourney';
import TestimonialsLedger from '@/components/TestimonialsLedger';
import HomeBlogGrid from '@/components/HomeBlogGrid';
import ThemeButton from '@/components/ThemeButton';
import PillarsCanvasCards from '@/components/PillarsCanvasCards';
import PillarsBackdrop from '@/components/PillarsBackdrop';
import CallingAdvisorStage from '@/components/CallingAdvisorStage';
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
        <PillarsBackdrop />
        <div className="container">
          <div className="section-head text-center">
            <h2 id="pillars-title" className="section-display-title">
              Three Pillars of <span className="highlight-text">Family Protection</span>
            </h2>
            <p className="section-lead-text">
              Built on transparency, independence, and bespoke planning to ensure lifelong financial peace of mind.
            </p>
          </div>

          <PillarsCanvasCards />
        </div>
      </section>

      {/* =========================================================================
          SCENE 3: 6 CORE FINANCIAL PILLARS (INTERACTIVE SERVICES HUB)
          ========================================================================= */}
      <ServicesInteractiveSection />

      {/* =========================================================================
          SCENE 4: 4-STEP FAMILY WEALTH ROADMAP
          ========================================================================= */}
      <RoadmapJourney />

      {/* =========================================================================
          SCENE 5: VERIFIED CLIENT TESTIMONIALS LEDGER
          ========================================================================= */}
      <TestimonialsLedger />

      {/* =========================================================================
          SCENE 6: LATEST FINANCIAL EDUCATION & INSIGHTS
          ========================================================================= */}
      <section className="home-insights-section" aria-labelledby="insights-title">
        <div className="container">
          <div className="section-head-split">
            <div>
              <h2 id="insights-title" className="section-display-title">
                Latest Strategies &amp; <span className="highlight-text">Insights</span>
              </h2>
            </div>
            <ThemeButton href="/blog" variant="outline" size="md">
              View All Articles
            </ThemeButton>
          </div>

          <HomeBlogGrid posts={latestArticles} />
        </div>
      </section>

      {/* =========================================================================
          SCENE 7: THE SOVEREIGN FINAL CTA BANNER
          ========================================================================= */}
      <section className="sovereign-cta-section" aria-labelledby="cta-banner-title">
        <div className="cta-ambient-glow" aria-hidden="true" />
        <div className="container cta-call-layout">
          <div className="cta-call-copy">
            <span className="cta-eyebrow-badge">Plan Today ! Protect Tomorrow !</span>
            <h2 id="cta-banner-title" className="cta-main-title">
              Take the First Step Toward <span className="cta-title-accent">Lifelong Family Security</span>
            </h2>
            <p className="cta-body-desc">
              Schedule a complimentary, no-obligation strategy session with a SecureVest advisor. We will review your current coverage, calculate your numbers, and engineer a roadmap tailored to your family.
            </p>

            <div className="cta-action-buttons">
              <ThemeButton
                href="https://calendly.com/securevestsolutions/appointment"
                target="_blank"
                variant="gold"
                size="lg"
                icon={
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                }
              >
                Schedule Appointment (Calendly)
              </ThemeButton>

              <ThemeButton
                href="tel:7403032525"
                variant="outline-light"
                size="lg"
                icon={
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                }
              >
                Direct Call: (740) 303-2525
              </ThemeButton>
            </div>

            <ul className="cta-guarantee-strip">
              <li>100% Free Initial Strategy Audit</li>
              <li>Zero Sales Pressure</li>
              <li>Fully Confidential &amp; Fiduciary</li>
            </ul>
          </div>

          <CallingAdvisorStage />
        </div>
      </section>
    </>
  );
}
