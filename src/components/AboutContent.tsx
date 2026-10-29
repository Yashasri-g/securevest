'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, type Variants } from 'framer-motion';
import ThemeButton from './ThemeButton';

const EASE = [0.16, 1, 0.3, 1] as const;

const PRINCIPLES = [
  { title: 'Fiduciary First', body: 'Your interests come before ours. Every recommendation has to earn its place in your plan.' },
  { title: 'Independent by Design', body: 'We are not tied to a single carrier, so we compare options and recommend what actually fits.' },
  { title: 'Private and Unhurried', body: 'Conversations stay confidential, and you set the pace. No pressure, no jargon.' },
];

const STEPS = [
  { title: 'Tell us what matters', body: 'A short call or quote form so we understand your family, goals and concerns.' },
  { title: 'Get a tailored plan', body: 'We compare suitable options and walk you through clear, plain-language recommendations.' },
  { title: 'Stay protected', body: 'Regular reviews keep your plan aligned as life, markets and tax rules change.' },
];

/** Headline line that slides up out of a mask. */
function Line({ children, delay }: { children: React.ReactNode; delay: number }) {
  return (
    <span className="hero-mask">
      <motion.span className="hero-mask-inner" initial={{ y: '110%' }} animate={{ y: '0%' }} transition={{ duration: 1, delay, ease: EASE }}>
        {children}
      </motion.span>
    </span>
  );
}

function Rise({ children, className, delay = 0, x = 0 }: { children: React.ReactNode; className?: string; delay?: number; x?: number }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x, y: x ? 0 : 30 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{ duration: 0.95, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/* ---------- Oval sets: a fast, one-after-another sequence ---------- */

// Principles: each oval is "opened" upward from its base like a curtain, then its copy settles in.
const openUp: Variants = {
  hidden: { clipPath: 'inset(100% 0% 0% 0% round 50%)' },
  show: {
    clipPath: 'inset(0% 0% 0% 0% round 50%)',
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    // Drop the clip once open so hover shadows and lifts aren't cut off.
    transitionEnd: { clipPath: 'none' },
  },
};
const settle: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, delay: 0.45, ease: EASE } },
};

// Steps: each oval pops up from a point with a spring, its number drops in, then the connector draws on.
const popUp: Variants = {
  hidden: { opacity: 0, scale: 0.4, y: 120, clipPath: 'inset(100% 0% 0% 0% round 50%)' },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    clipPath: 'inset(0% 0% 0% 0% round 50%)',
    transition: { type: 'spring', stiffness: 150, damping: 18, mass: 0.8 },
    transitionEnd: { clipPath: 'none' },
  },
};

const stagger = (gap: number): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: gap, delayChildren: 0.1 } },
});

export default function AboutContent() {
  const photoRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: photoRef, offset: ['start end', 'end start'] });
  const photoY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  return (
    <>
      <section className="page-hero-banner about-hero" aria-label="About SecureVest Solutions">
        <motion.div
          className="page-hero-watermark"
          aria-hidden="true"
          initial={{ opacity: 0, scale: 0.9, letterSpacing: '0.3em' }}
          animate={{ opacity: 1, scale: 1, letterSpacing: '0em' }}
          transition={{ duration: 1.8, ease: EASE }}
        >
          ABOUT
        </motion.div>
        <div className="container">
          <motion.span className="page-hero-eyebrow" initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            About SecureVest Solutions
          </motion.span>
          <h1 className="page-hero-title">
            <Line delay={0.15}>We work for your family,</Line>
            <Line delay={0.3}>not for an insurance company.</Line>
          </h1>
          <motion.p className="page-hero-lead" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.7, ease: EASE }}>
            Plan today, protect tomorrow. That is the idea behind everything we do.
          </motion.p>
          <motion.div className="page-hero-actions" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.85, ease: EASE }}>
            <ThemeButton href="/quote" variant="gold" size="lg">Get a Free Quote</ThemeButton>
            <ThemeButton href="/contact" variant="outline-light" size="lg">Talk to an Advisor</ThemeButton>
          </motion.div>
        </div>
      </section>

      {/* Our approach */}
      <section className="aboutp-story">
        <div className="container aboutp-story-grid">
          <Rise x={-120} className="aboutp-photo-wrap">
            <div className="aboutp-photo" ref={photoRef}>
              <motion.img style={{ y: photoY, scale: 1.18 }} src="/images/advisor-desk.jpg" alt="An advisor reviewing a family plan at a desk" loading="lazy" />
            </div>
          </Rise>
          <Rise x={120} delay={0.1} className="aboutp-copy">
            <span className="svcp-kicker">Our Approach</span>
            <h2 className="svcp-title">Financial protection, made personal.</h2>
            <p className="svcp-body">
              Most families juggle insurance, savings, retirement and estate documents separately. We bring them together
              into one plan built around your household, so nothing important falls through the gaps.
            </p>
            <p className="svcp-body">
              As an independent advisory, we compare options across carriers and explain every recommendation in plain
              language, so you always know why it is in your plan.
            </p>
            <ThemeButton href="/financial-planning-services" variant="navy" size="md">Explore Our Services</ThemeButton>
          </Rise>
        </div>
      </section>

      {/* Three principles: ovals that open upward, one after another */}
      <section className="aboutp-principles">
        <div className="container">
          <Rise className="aboutp-head">
            <span className="svcp-kicker">What We Stand For</span>
            <h2 className="svcp-title">Three principles, no exceptions.</h2>
          </Rise>
          <motion.div
            className="ov-grid"
            variants={stagger(0.16)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-15% 0px' }}
          >
            {PRINCIPLES.map((p, i) => (
              <motion.div key={p.title} className="ov ov-dark" variants={openUp}>
                <motion.div className="ov-body" variants={settle}>
                  <span className="ov-num">{String(i + 1).padStart(2, '0')}</span>
                  <h3>{p.title}</h3>
                  <p>{p.body}</p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Three steps: ovals that spring up in sequence and join with a drawn line */}
      <section className="aboutp-steps">
        <div className="container">
          <Rise className="aboutp-head">
            <span className="svcp-kicker">How It Works</span>
            <h2 className="svcp-title">Simple, in three steps.</h2>
          </Rise>
          <motion.div
            className="ov-grid ov-grid-steps"
            variants={stagger(0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-15% 0px' }}
          >
            {STEPS.map((s, i) => (
              <div key={s.title} className="ov-step">
                <motion.div className="ov ov-light" variants={popUp}>
                  <div className="ov-body">
                    <motion.span
                      className="ov-badge"
                      variants={{ hidden: { opacity: 0, y: -24, rotate: -90 }, show: { opacity: 1, y: 0, rotate: 0, transition: { duration: 0.6, delay: 0.25, ease: EASE } } }}
                    >
                      {i + 1}
                    </motion.span>
                    <h3>{s.title}</h3>
                    <p>{s.body}</p>
                  </div>
                </motion.div>
                {i < STEPS.length - 1 && (
                  <motion.span
                    className="ov-link"
                    aria-hidden="true"
                    variants={{ hidden: { scaleX: 0 }, show: { scaleX: 1, transition: { duration: 0.45, delay: 0.35, ease: 'easeOut' } } }}
                  />
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section section-sm">
        <div className="container">
          <Rise>
            <div className="cta-banner">
              <div className="cta-banner-content">
                <h2>Ready when you are.</h2>
                <p>Your first consultation and quote are free, with no obligation.</p>
                <div className="cta-banner-actions">
                  <ThemeButton href="/quote" variant="gold" size="lg">Get a Free Quote</ThemeButton>
                  <ThemeButton href="/faq" variant="outline-light" size="lg">Read the FAQ</ThemeButton>
                </div>
              </div>
            </div>
          </Rise>
        </div>
      </section>
    </>
  );
}
