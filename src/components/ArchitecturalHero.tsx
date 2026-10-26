'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from 'framer-motion';
import { useBookingModal } from './ClientShell';
import ThemeButton from './ThemeButton';

const ROTATING_WORDS = ['Family', 'Legacy', 'Wealth', 'Future'];
const MARQUEE = ['Estate Planning', 'Retirement', 'Investment', 'Education', 'Life Insurance'];
const EASE = [0.16, 1, 0.3, 1] as const;

/** One headline line that slides up out of a mask. */
function MaskLine({ children, delay }: { children: React.ReactNode; delay: number }) {
  return (
    <span className="hero-mask">
      <motion.span
        className="hero-mask-inner"
        initial={{ y: '110%' }}
        animate={{ y: '0%' }}
        transition={{ duration: 1.05, delay, ease: EASE }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export default function ArchitecturalHero() {
  const { openBooking } = useBookingModal();
  const [wordIndex, setWordIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setInterval(() => setWordIndex((p) => (p + 1) % ROTATING_WORDS.length), 2800);
    return () => clearInterval(timer);
  }, []);

  // Scroll: the arch drifts slower than the page while its video counter-moves.
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] });
  const archY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const videoY = useTransform(scrollYProgress, [0, 1], ['0%', '-8%']);
  const copyY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  // Pointer: a soft gold light follows the cursor.
  const mx = useMotionValue(0.7);
  const my = useMotionValue(0.35);
  const lx = useSpring(mx, { stiffness: 60, damping: 20, mass: 0.6 });
  const ly = useSpring(my, { stiffness: 60, damping: 20, mass: 0.6 });
  const lightX = useTransform(lx, (v) => `${v * 100}%`);
  const lightY = useTransform(ly, (v) => `${v * 100}%`);

  const onMove = (e: React.PointerEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width);
    my.set((e.clientY - r.top) / r.height);
  };

  return (
    <section
      ref={sectionRef}
      className="arch-hero-section"
      aria-label="SecureVest Solutions Fiduciary Wealth Advisory"
      onPointerMove={onMove}
    >
      <div className="arch-hero-bg-grid" aria-hidden="true" />
      <motion.div className="hero-light" aria-hidden="true" style={{ left: lightX, top: lightY }} />

      <div className="container arch-hero-container">
        <div className="arch-hero-split-grid">
          {/* Copy: a headline, two actions. Nothing else. */}
          <motion.div className="arch-hero-left-content" style={{ y: copyY, opacity: copyOpacity }}>
            <h1 className="arch-hero-title">
              <MaskLine delay={0.15}>Plan Today.</MaskLine>
              <MaskLine delay={0.3}>
                <span className="hero-line-row">
                  Protect Your&nbsp;
                  <span className="hero-word-slot">
                    <AnimatePresence mode="wait" initial={false}>
                      <motion.span
                        key={ROTATING_WORDS[wordIndex]}
                        className="arch-dynamic-word"
                        initial={{ y: '120%' }}
                        animate={{ y: '0%' }}
                        exit={{ y: '-120%' }}
                        transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
                      >
                        {ROTATING_WORDS[wordIndex]}.
                      </motion.span>
                    </AnimatePresence>
                  </span>
                </span>
              </MaskLine>
            </h1>

            <motion.div
              className="arch-hero-actions"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.85, ease: EASE }}
            >
              <ThemeButton variant="gold" size="xl" onClick={openBooking}>
                Schedule Strategy Session
              </ThemeButton>
              <ThemeButton href="#services" variant="outline-light" size="xl">
                Explore Solutions
              </ThemeButton>
            </motion.div>

            <motion.div
              className="hero-scroll-cue"
              aria-hidden="true"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.4 }}
            >
              <span className="hero-scroll-line" />
              <span className="hero-scroll-label">Scroll</span>
            </motion.div>
          </motion.div>

          {/* Visual: the family inside a gold-lined arch that opens on load. */}
          <motion.div className="arch-hero-right-visual" style={{ y: archY }}>
            <div className="hero-arch">
              <div className="hero-arch-orbit" aria-hidden="true" />
              <div className="hero-arch-orbit hero-arch-orbit-b" aria-hidden="true" />
              <span className="hero-spark hero-spark-1" aria-hidden="true" />
              <span className="hero-spark hero-spark-2" aria-hidden="true" />
              <span className="hero-spark hero-spark-3" aria-hidden="true" />

              <motion.div
                className="hero-arch-window"
                initial={{ clipPath: 'inset(100% 0% 0% 0% round 999px 999px 24px 24px)' }}
                animate={{ clipPath: 'inset(0% 0% 0% 0% round 999px 999px 24px 24px)' }}
                transition={{ duration: 1.4, delay: 0.25, ease: [0.76, 0, 0.24, 1] }}
              >
                <motion.div
                  className="hero-arch-media"
                  style={{ y: videoY }}
                  initial={{ scale: 1.25 }}
                  animate={{ scale: 1.06 }}
                  transition={{ duration: 2.2, delay: 0.25, ease: EASE }}
                >
                  <video
                    src="/videos/securevestsolutions.mp4"
                    poster="/videos/hero-poster.png"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="visual-video-element"
                    aria-label="A family protected inside a shield"
                  />
                </motion.div>
              </motion.div>

              <svg className="hero-arch-outline" viewBox="0 0 432 552" fill="none" aria-hidden="true">
                <motion.path
                  d="M16 216 A200 200 0 0 1 416 216 V512 a24 24 0 0 1 -24 24 H40 a24 24 0 0 1 -24 -24 Z"
                  stroke="url(#heroGold)"
                  strokeWidth="1.25"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2.2, delay: 0.5, ease: [0.65, 0, 0.35, 1] }}
                />
                <defs>
                  <linearGradient id="heroGold" x1="0" y1="0" x2="432" y2="552" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#f0d79a" />
                    <stop offset="0.5" stopColor="#c5a059" stopOpacity="0.55" />
                    <stop offset="1" stopColor="#f0d79a" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Quiet ticker: gives the base of the hero rhythm without adding copy. */}
      <motion.div
        className="hero-ticker"
        aria-hidden="true"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.3, ease: EASE }}
      >
        <div className="hero-ticker-track">
          {[0, 1].map((n) => (
            <div className="hero-ticker-group" key={n}>
              {MARQUEE.map((w) => (
                <span className="hero-ticker-item" key={w + n}>
                  {w}
                  <i />
                </span>
              ))}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
