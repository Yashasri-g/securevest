'use client';

import React from 'react';
import Link from 'next/link';
import { useBookingModal } from './ClientShell';

export default function ArchitecturalHero() {
  const { openBooking } = useBookingModal();

  return (
    <section className="arch-hero-section" aria-label="SecureVest Solutions Fiduciary Wealth Advisory">
      {/* Background Architectural Ambient Elements */}
      <div className="arch-hero-bg-grid" aria-hidden="true" />
      <div className="arch-hero-ambient-glow" aria-hidden="true" />

      <div className="container arch-hero-container">
        {/* Left-Right Hero Layout to Save Space */}
        <div className="arch-hero-split-grid">
          {/* Left Column: Narrative, Actions & Trust Badges */}
          <div className="arch-hero-left-content">
            {/* Eyebrow Badge */}
            <div className="arch-hero-eyebrow-wrapper">
              <span className="arch-hero-badge">
                <span className="arch-badge-pulse" aria-hidden="true" />
                Independent Family Fiduciary Advisory • Columbus, OH
              </span>
            </div>

            {/* Master Headline */}
            <h1 className="arch-hero-title">
              Secure Your Family&apos;s{' '}
              <span className="arch-serif-highlight">Financial Future</span>{' '}
              <span className="arch-title-now">Today</span>
            </h1>

            {/* Lead Paragraph */}
            <p className="arch-hero-lead">
              At SecureVest Solutions, we help families protect their assets and provide tailored insurance solutions for financial security and peace of mind. We specialize in goal setting, retirement planning, tax strategies, risk management, and estate planning to ensure your family&apos;s financial well-being.
            </p>

            {/* Action CTAs */}
            <div className="arch-hero-actions">
              <button
                type="button"
                className="btn btn-gold btn-xl arch-cta-btn"
                onClick={openBooking}
              >
                <span>Schedule Free Strategy Session</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>

              <a href="#estimator" className="btn btn-outline-arch btn-xl">
                <span>Model Your Numbers</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </a>
            </div>

            {/* Trust Badges Cluster */}
            <div className="arch-trust-strip">
              <div className="arch-trust-badge">
                <span className="arch-trust-check">✓</span>
                <span className="arch-trust-label">100% Objective Fiduciary Standard</span>
              </div>
              <div className="arch-trust-badge">
                <span className="arch-trust-check">✓</span>
                <span className="arch-trust-label">Zero Carrier Commission Bias</span>
              </div>
              <div className="arch-trust-badge">
                <span className="arch-trust-check">✓</span>
                <span className="arch-trust-label">Confidential Family Audit</span>
              </div>
            </div>
          </div>

          {/* Right Column: Cinematic Visual Legacy Frame */}
          <div className="arch-hero-right-visual">
            <div className="arch-hero-visual-card">
              <div className="visual-image-wrapper">
                <img
                  src="/images/hero-family.jpg"
                  alt="Protected family holding heart symbolizing generational security"
                  className="visual-photo"
                  width={680}
                  height={500}
                  fetchPriority="high"
                />
                <div className="visual-gradient-overlay" aria-hidden="true" />

                {/* Top Subtle Rating Chip */}
                <div className="visual-top-chip">
                  <span className="visual-chip-stars" aria-hidden="true">★★★★★</span>
                  <span className="visual-chip-text">5.0 Fiduciary Client Rating</span>
                </div>

                {/* Bottom Docked Advisory Quote Badge */}
                <div className="visual-docked-badge">
                  <span className="visual-quote-mark" aria-hidden="true">“</span>
                  <p className="visual-quote-text">
                    Our commitment is simple: your family’s security comes first, always.
                  </p>
                  <span className="visual-quote-author">— SecureVest Advisory Commitment</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
