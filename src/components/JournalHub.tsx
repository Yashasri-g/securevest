'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BlogPost } from '@/data/blogPosts';
import { useBookingModal } from './ClientShell';
import TiltSpotlightCard from './TiltSpotlightCard';

interface JournalHubProps {
  posts: BlogPost[];
}

export default function JournalHub({ posts }: JournalHubProps) {
  const { openBooking } = useBookingModal();
  const [newsletterName, setNewsletterName] = useState<string>('');
  const [newsletterEmail, setNewsletterEmail] = useState<string>('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState<boolean>(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setNewsletterSubscribed(true);
    }
  };

  // Staggered Container Variant for 6-card grid with 0.08s delay between cards
  const gridContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.12,
      },
    },
  };

  return (
    <div className="journal-page-wrapper">
      <div className="container journal-container">
        {/* =========================================================================
            1. MINIMALIST HERO CANVAS - EXACTLY ONE SINGLE SENTENCE
            Millimeter Graph Grid Paper Motif + Smooth Fade-in Reveal
            ========================================================================= */}
        <section className="journal-hero-canvas journal-hero-minimal" aria-labelledby="journal-heading">
          {/* Subtle Graph Paper Background Grid */}
          <div className="journal-grid-overlay" aria-hidden="true" />

          <div className="journal-hero-content">
            <motion.h1
              id="journal-heading"
              className="journal-hero-single-sentence"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
            >
              Explore our latest perspectives on family wealth preservation, retirement planning, and smart asset protection.
            </motion.h1>
          </div>
        </section>

        {/* =========================================================================
            2. ALL BLOGS GRID (ACETERNITY / LINEAR 3D TILT + CURSOR SPOTLIGHT + STAGGER REVEAL)
            Clean Images + Arrow Title Interactions + Tag Pills + Date & Reading Time
            ========================================================================= */}
        <section className="journal-grid-section" aria-label="Journal Articles">
          <motion.div
            className="journal-cards-grid"
            variants={gridContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            {posts.map((post, index) => (
              <TiltSpotlightCard key={post.slug} post={post} index={index} />
            ))}
          </motion.div>
        </section>

        {/* =========================================================================
            3. FIDUCIARY DISPATCH NEWSLETTER CANVAS
            Inspired by Modern Floating Card with Person + Crescent Frame + Watermark Background
            ========================================================================= */}
        <section className="inspo-newsletter-section" aria-labelledby="newsletter-title">
          {/* Dark backdrop with giant watermark text */}
          <div className="inspo-newsletter-backdrop">
            <div className="inspo-watermark-text" aria-hidden="true">
              S U B S C R I B E
            </div>

            {/* Decorative Floating Background Rings */}
            <div className="inspo-decor-ring inspo-ring-top-right-1" aria-hidden="true" />
            <div className="inspo-decor-ring inspo-ring-top-right-2" aria-hidden="true" />
            <div className="inspo-decor-ring inspo-ring-bottom-1" aria-hidden="true" />
            <div className="inspo-decor-ring inspo-ring-bottom-2" aria-hidden="true" />
            <div className="inspo-decor-ring inspo-ring-bottom-3" aria-hidden="true" />

            {/* Main Floating White Card */}
            <div className="inspo-newsletter-card">
              {/* Internal Decorative Rings */}
              <div className="card-decor-circle card-circle-1" aria-hidden="true" />
              <div className="card-decor-circle card-circle-2" aria-hidden="true" />
              <div className="card-decor-circle card-circle-3" aria-hidden="true" />
              <div className="card-decor-circle card-circle-4" aria-hidden="true" />
              <div className="card-decor-circle card-circle-5" aria-hidden="true" />

              <div className="inspo-card-grid">
                {/* Left Column: Person with Geometric Crescent Frame */}
                <div className="inspo-visual-col">
                  <div className="inspo-person-container">
                    <img
                      src="/images/newsletter-reader.png"
                      alt="Subscriber reading SecureVest financial updates"
                      className="inspo-person-img"
                    />
                    {/* Geometric Crescent Base Frame */}
                    <div className="inspo-crescent-base" aria-hidden="true">
                      <div className="crescent-arc crescent-arc-outer" />
                      <div className="crescent-arc crescent-arc-inner" />
                      <div className="crescent-accent-dot dot-1" />
                      <div className="crescent-accent-dot dot-2" />
                      <div className="crescent-accent-dot dot-3" />
                      <div className="crescent-accent-dot dot-4" />
                    </div>
                  </div>
                </div>

                {/* Right Column: Title, Description, and Form */}
                <div className="inspo-form-col">
                  <h2 id="newsletter-title" className="inspo-card-title">
                    <span className="inspo-title-bold">SUBSCRIBE</span> to Our Newsletter
                  </h2>

                  <p className="inspo-card-desc">
                    In this newsletter we provide the latest fiduciary insights about wealth preservation, smart asset protection, and retirement longevity. Hope you like it.
                  </p>

                  {newsletterSubscribed ? (
                    <div className="inspo-success-state" role="status">
                      <div className="inspo-success-icon">✓</div>
                      <div>
                        <h4 className="inspo-success-title">Thank you for subscribing!</h4>
                        <p className="inspo-success-desc">You are now on our monthly fiduciary dispatch list.</p>
                      </div>
                    </div>
                  ) : (
                    <form className="inspo-form" onSubmit={handleNewsletterSubmit}>
                      <div className="inspo-input-group">
                        <input
                          type="text"
                          placeholder="Enter Full Name"
                          value={newsletterName}
                          onChange={(e) => setNewsletterName(e.target.value)}
                          className="inspo-input"
                          aria-label="Full Name"
                        />
                      </div>

                      <div className="inspo-input-group">
                        <input
                          type="email"
                          required
                          placeholder="Enter Email"
                          value={newsletterEmail}
                          onChange={(e) => setNewsletterEmail(e.target.value)}
                          className="inspo-input"
                          aria-label="Email Address"
                        />
                      </div>

                      <button type="submit" className="inspo-submit-btn">
                        SUBSCRIBE!
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            4. DIRECT FIDUCIARY ADVISORY CONSULTATION BANNER
            Inspired by Contrarian Thinking: Simple, Clean, Punchy & Highly Effective
            ========================================================================= */}
        <section className="journal-advisory-cta" aria-labelledby="cta-heading">
          <div className="contrarian-cta-card">
            {/* Subtle Millimeter Grid Background */}
            <div className="contrarian-grid-bg" aria-hidden="true" />

            <div className="contrarian-cta-layout">
              {/* Left Column: Bold, punchy editorial copy */}
              <div className="contrarian-cta-left">
                <div className="contrarian-badge">
                  <span>DIRECT FIDUCIARY ADVISORY</span>
                </div>

                <h2 id="cta-heading" className="contrarian-title">
                  Have Questions About Applying These Strategies?
                </h2>

                <div className="contrarian-divider" aria-hidden="true" />

                <p className="contrarian-desc">
                  Speak directly with a SecureVest fiduciary planner. We will analyze your family&apos;s asset protection posture, retirement readiness, and estate safeguards at no cost.
                </p>

                <div className="contrarian-actions">
                  <button
                    type="button"
                    className="contrarian-btn"
                    onClick={openBooking}
                  >
                    Schedule Free Strategy Session &rarr;
                  </button>

                  <a href="tel:7403032525" className="contrarian-phone-link">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    <span>or call (740) 303-2525</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Angled Smartphone Mockup */}
              <div className="contrarian-cta-right">
                <div className="contrarian-phone-frame">
                  <div className="phone-screen">
                    {/* Phone Top Notch / Status */}
                    <div className="phone-top-bar">
                      <span className="phone-time">9:41</span>
                      <div className="phone-notch" />
                      <span className="phone-signal">5G</span>
                    </div>

                    {/* Phone Screen App Card */}
                    <div className="phone-app-content">
                      <div className="phone-brand-badge">SecureVest Solutions</div>
                      <div className="phone-session-title">Fiduciary Strategy Session</div>
                      <div className="phone-status-pill">100% Free • Fiduciary Duty</div>

                      <div className="phone-advisor-card">
                        <img src="/images/avatars/avatar-david.jpg" alt="Fiduciary Planner" className="phone-avatar" />
                        <div>
                          <div className="phone-advisor-name">Fiduciary Advisory Desk</div>
                          <div className="phone-advisor-location">Columbus, OH &amp; National</div>
                        </div>
                      </div>

                      <div className="phone-checklist">
                        <div className="phone-check-row">
                          <span className="phone-check-icon">✓</span>
                          <span>Asset Protection Posture</span>
                        </div>
                        <div className="phone-check-row">
                          <span className="phone-check-icon">✓</span>
                          <span>Retirement Cash-Flow Longevity</span>
                        </div>
                        <div className="phone-check-row">
                          <span className="phone-check-icon">✓</span>
                          <span>Living Will &amp; Trust Safeguards</span>
                        </div>
                      </div>

                      <button
                        type="button"
                        className="phone-action-btn"
                        onClick={openBooking}
                      >
                        Confirm Booking &rarr;
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
