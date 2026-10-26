'use client';

import React, { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import ThemeButton from '@/components/ThemeButton';

interface RoadmapJourneyProps {
  onOpenBooking?: () => void;
}

interface StepDetail {
  number: string;
  tag: string;
  title: string;
  summary: string;
  duration: string;
  deliverables: string[];
  clientOutcome: string;
}

const STEPS: StepDetail[] = [
  {
    number: '01',
    tag: 'Foundation & Analysis',
    title: 'Discovery & Family Asset Audit',
    duration: 'Week 1 – 2',
    summary:
      'We begin with an in-depth, confidential assessment of your assets, liabilities, insurance policies, retirement accounts, and personal estate objectives.',
    deliverables: [
      'Comprehensive Net Worth & Debt Structure Audit',
      'Term Life & Disability Coverage Gap Analysis',
      'Current Tax Drag & Investment Fee Evaluation',
      'Family Risk Tolerance & Horizon Questionnaire',
    ],
    clientOutcome: 'Complete visibility into where you stand and immediate identification of financial vulnerabilities.',
  },
  {
    number: '02',
    tag: 'Strategic Blueprint',
    title: 'Custom Strategy Architecture',
    duration: 'Week 2 – 3',
    summary:
      'Our senior advisors design a bespoke, holistic roadmap engineered to achieve your retirement lifestyle, protect family income, and optimize generational transfer.',
    deliverables: [
      'Tailored Income Replacement & Term Insurance Plan',
      'Tax-Advantaged Retirement Accumulation Roadmap',
      'Living Trust & Estate Titling Architecture',
      'College 529 Funding & Gifting Schedules',
    ],
    clientOutcome: 'A clear, jargon-free tactical blueprint showing exactly how each dollar will protect and grow your legacy.',
  },
  {
    number: '03',
    tag: 'Execution & Shielding',
    title: 'Implementation & Asset Shielding',
    duration: 'Week 3 – 5',
    summary:
      'We execute your strategy with precision, coordinating with top-rated insurance carriers, custodians, and estate attorneys to secure favorable terms.',
    deliverables: [
      'Direct Underwriting Coordination with Top-Tier Insurers',
      'Custodial Account Setup & Rollover Execution',
      'Trust Document Execution & Beneficiary Designation Updates',
      'Automated Savings & Dollar-Cost-Averaging Setup',
    ],
    clientOutcome: 'All insurance policies, trusts, and investment accounts are legally funded, locked in, and operational.',
  },
  {
    number: '04',
    tag: 'Lifelong Fiduciary Care',
    title: 'Ongoing Monitoring & Wealth Evolution',
    duration: 'Continuous Partnership',
    summary:
      'Life changes — new children, home purchases, promotions, and changing tax legislation. We conduct proactive annual reviews to keep your plan optimal.',
    deliverables: [
      'Annual Fiduciary Strategy Reviews & Tax Adjustments',
      'Periodic Life Insurance Re-evaluation & Conversion Checks',
      'Portfolio Rebalancing & Required Minimum Distribution (RMD) Planning',
      'Priority Advisor Phone & Video Access Year-Round',
    ],
    clientOutcome: 'Enduring peace of mind knowing your family’s financial fortress evolves alongside your life.',
  },
];

const EASE = [0.22, 1, 0.36, 1] as const;
const CALENDLY = 'https://calendly.com/securevestsolutions/appointment';

/* -------------------------------------------------------------------------
   Shared pieces
   ------------------------------------------------------------------------- */

function CheckMark({ drawn }: { drawn: boolean }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <motion.path
        d="M5 12.5l4.5 4.5L19 7.5"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={false}
        animate={{ pathLength: drawn ? 1 : 0, opacity: drawn ? 1 : 0 }}
        transition={{ duration: 0.45, ease: EASE }}
      />
    </svg>
  );
}

function RoadmapCta({ onOpenBooking }: RoadmapJourneyProps) {
  return (
    <div className="rm-detail-cta">
      <ThemeButton
        variant="navy"
        size="md"
        {...(onOpenBooking
          ? { onClick: onOpenBooking }
          : { href: CALENDLY, target: '_blank', rel: 'noopener noreferrer' })}
      >
        Start Step 1: Complimentary Discovery
      </ThemeButton>
    </div>
  );
}

/* -------------------------------------------------------------------------
   Desktop: a rising wealth curve with scroll-driven progress
   ------------------------------------------------------------------------- */

const STAGE_H = 300;
// vertical position of each milestone on the curve (fraction of stage height; lower = higher)
const NODE_Y = [0.78, 0.58, 0.38, 0.17];

function buildGeometry(width: number) {
  const n = STEPS.length;
  const colW = width / n;
  const pts = STEPS.map((_, i) => ({ x: colW * (i + 0.5), y: STAGE_H * NODE_Y[i] }));
  const start = { x: 0, y: STAGE_H * 0.9 };
  const end = { x: width, y: STAGE_H * 0.06 };
  const all = [start, ...pts, end];
  // smooth cubic path with horizontal tangents between points (monotone-ish, no overshoot)
  let d = `M ${all[0].x} ${all[0].y}`;
  for (let i = 1; i < all.length; i++) {
    const p0 = all[i - 1];
    const p1 = all[i];
    const mx = (p0.x + p1.x) / 2;
    d += ` C ${mx} ${p0.y}, ${mx} ${p1.y}, ${p1.x} ${p1.y}`;
  }
  return { pts, d, width };
}

function DesktopRoadmap({ onOpenBooking }: RoadmapJourneyProps) {
  const stageRef = useRef<HTMLDivElement>(null);
  const curveRef = useRef<SVGPathElement>(null);
  const progressPathRef = useRef<SVGPathElement>(null);
  const travelerRef = useRef<SVGGElement>(null);
  const clipRectRef = useRef<SVGRectElement>(null);

  const [width, setWidth] = useState(0);
  const [lit, setLit] = useState(0);
  const [active, setActive] = useState(0);
  const lastScrollIdx = useRef(0);
  const thresholds = useRef<number[]>([]);
  const totalLen = useRef(0);

  const geo = useMemo(() => (width > 0 ? buildGeometry(width) : null), [width]);

  useLayoutEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const measure = () => setWidth(el.clientWidth);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const { scrollYProgress } = useScroll({
    target: stageRef,
    offset: ['start 88%', 'end 42%'],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.6 });

  // measure the path once per geometry: total length and where each node sits on it
  useEffect(() => {
    const path = curveRef.current;
    if (!path || !geo) return;
    const total = path.getTotalLength();
    totalLen.current = total;
    thresholds.current = geo.pts.map((p) => {
      let lo = 0;
      let hi = total;
      for (let k = 0; k < 24; k++) {
        const mid = (lo + hi) / 2;
        if (path.getPointAtLength(mid).x < p.x) lo = mid;
        else hi = mid;
      }
      return lo / total;
    });
    if (progressPathRef.current) {
      progressPathRef.current.style.strokeDasharray = `${total}`;
    }
    apply(progress.get());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [geo]);

  const apply = useCallback(
    (v: number) => {
      const path = curveRef.current;
      const total = totalLen.current;
      if (!path || !total) return;
      const f = Math.min(Math.max(v, 0), 1);
      const pt = path.getPointAtLength(f * total);
      if (progressPathRef.current) progressPathRef.current.style.strokeDashoffset = `${total * (1 - f)}`;
      if (travelerRef.current) travelerRef.current.setAttribute('transform', `translate(${pt.x} ${pt.y})`);
      if (clipRectRef.current) clipRectRef.current.setAttribute('width', `${pt.x}`);

      const th = thresholds.current;
      let count = 0;
      for (let i = 0; i < th.length; i++) if (f >= th[i] - 0.004) count = i + 1;
      setLit((prev) => (prev === count ? prev : count));
      const idx = Math.max(0, count - 1);
      if (idx !== lastScrollIdx.current) {
        lastScrollIdx.current = idx;
        setActive(idx);
      }
    },
    []
  );

  useMotionValueEvent(progress, 'change', apply);

  return (
    <div className="rm-desktop">
      <div className="rm-stage" ref={stageRef} style={{ height: STAGE_H }}>
        {geo && (
          <>
            <svg
              className="rm-curve-svg"
              width={geo.width}
              height={STAGE_H}
              viewBox={`0 0 ${geo.width} ${STAGE_H}`}
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="rm-gold-stroke" x1="0" x2="1" y1="0" y2="0">
                  <stop offset="0" stopColor="#d8b773" />
                  <stop offset="1" stopColor="#b08c43" />
                </linearGradient>
                <linearGradient id="rm-gold-fill" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0" stopColor="#c5a059" stopOpacity="0.26" />
                  <stop offset="1" stopColor="#c5a059" stopOpacity="0" />
                </linearGradient>
                <clipPath id="rm-reveal">
                  <rect ref={clipRectRef} x="0" y="0" width="0" height={STAGE_H} />
                </clipPath>
              </defs>

              {/* chart gridlines */}
              {[0.2, 0.4, 0.6, 0.8].map((g) => (
                <line
                  key={g}
                  x1="0"
                  x2={geo.width}
                  y1={STAGE_H * g}
                  y2={STAGE_H * g}
                  className="rm-gridline"
                />
              ))}

              {/* fill beneath the curve, revealed up to the traveller */}
              <path
                d={`${geo.d} L ${geo.width} ${STAGE_H} L 0 ${STAGE_H} Z`}
                fill="url(#rm-gold-fill)"
                clipPath="url(#rm-reveal)"
              />

              {/* plumb lines from each milestone down to its text */}
              {geo.pts.map((p, i) => (
                <line
                  key={i}
                  x1={p.x}
                  x2={p.x}
                  y1={p.y + 22}
                  y2={STAGE_H}
                  className={`rm-plumb ${lit > i ? 'is-lit' : ''}`}
                />
              ))}

              {/* base hairline curve + gold progress curve */}
              <path ref={curveRef} d={geo.d} className="rm-curve-base" />
              <path ref={progressPathRef} d={geo.d} className="rm-curve-progress" />

              {/* traveller */}
              <g ref={travelerRef}>
                <circle r="16" className="rm-traveler-halo" />
                <circle r="5" className="rm-traveler-core" />
              </g>
            </svg>

            {geo.pts.map((p, i) => {
              const isLit = lit > i;
              const isActive = active === i;
              return (
                <button
                  key={STEPS[i].number}
                  type="button"
                  className={`rm-node ${isLit ? 'is-lit' : ''} ${isActive ? 'is-active' : ''}`}
                  style={{ left: p.x, top: p.y }}
                  onClick={() => setActive(i)}
                  aria-label={`Stage ${STEPS[i].number}: ${STEPS[i].title}`}
                  aria-pressed={isActive}
                >
                  <span className="rm-node-ring" aria-hidden="true" />
                  <span className="rm-node-core">
                    <CheckMark drawn={isLit} />
                  </span>
                </button>
              );
            })}
          </>
        )}
      </div>

      {/* step labels */}
      <ol className="rm-columns">
        {STEPS.map((step, i) => (
          <motion.li
            key={step.number}
            className={`rm-col ${active === i ? 'is-active' : ''} ${lit > i ? 'is-lit' : ''}`}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: i * 0.12, ease: EASE }}
          >
            <button type="button" className="rm-col-btn" onClick={() => setActive(i)}>
              <span className="rm-ghost-num" aria-hidden="true">
                {step.number}
              </span>
              <span className="rm-col-duration">{step.duration}</span>
              <span className="rm-col-title">{step.title}</span>
              <span className="rm-col-tag">{step.tag}</span>
            </button>
          </motion.li>
        ))}
      </ol>

      <RoadmapCta onOpenBooking={onOpenBooking} />
    </div>
  );
}

/* -------------------------------------------------------------------------
   Mobile: vertical rail that fills with gold as you scroll
   ------------------------------------------------------------------------- */

function MobileRoadmap({ onOpenBooking }: RoadmapJourneyProps) {
  const listRef = useRef<HTMLOListElement>(null);
  const [lit, setLit] = useState(0);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ['start 70%', 'end 60%'] });
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.6 });
  const fill = useTransform(progress, [0, 1], [0, 1]);

  useMotionValueEvent(progress, 'change', (v) => {
    const count = Math.min(STEPS.length, Math.floor(v * STEPS.length + 0.35) + (v > 0.02 ? 1 : 0));
    setLit((prev) => (prev === count ? prev : count));
  });

  return (
    <div className="rm-mobile">
      <ol className="rm-vlist" ref={listRef}>
        <span className="rm-vrail" aria-hidden="true">
          <motion.span className="rm-vrail-fill" style={{ scaleY: fill }} />
        </span>
        {STEPS.map((step, i) => (
          <motion.li
            key={step.number}
            className={`rm-vitem ${lit > i ? 'is-lit' : ''}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <span className="rm-vnode" aria-hidden="true">
              <CheckMark drawn={lit > i} />
            </span>
            <span className="rm-col-duration">
              {step.number} · {step.duration}
            </span>
            <h3 className="rm-vtitle">{step.title}</h3>
            <span className="rm-col-tag">{step.tag}</span>
          </motion.li>
        ))}
      </ol>
      <div className="rm-mobile-cta">
        <RoadmapCta onOpenBooking={onOpenBooking} />
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------
   Section
   ------------------------------------------------------------------------- */

const DUST = Array.from({ length: 14 }, (_, i) => ({
  left: `${(i * 37 + 11) % 100}%`,
  size: 2 + ((i * 5) % 4),
  delay: `${-((i * 1.7) % 14)}s`,
  duration: `${14 + ((i * 3) % 9)}s`,
}));

export default function RoadmapJourney({ onOpenBooking }: RoadmapJourneyProps) {
  const titleWords = 'Where Do You Want Your Financial'.split(' ');
  const goldWords = 'Roadmap to Take You?'.split(' ');

  return (
    <section className="rm-section" aria-labelledby="roadmap-title">
      <div className="rm-dust" aria-hidden="true">
        {DUST.map((d, i) => (
          <span
            key={i}
            style={{
              left: d.left,
              width: d.size,
              height: d.size,
              animationDelay: d.delay,
              animationDuration: d.duration,
            }}
          />
        ))}
      </div>

      <div className="container rm-container">
        <header className="rm-header">
          <motion.div
            className="rm-eyebrow"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <span className="rm-eyebrow-rule" aria-hidden="true" />
            Your Financial Journey
            <span className="rm-eyebrow-rule" aria-hidden="true" />
          </motion.div>

          <h2 id="roadmap-title" className="rm-title">
            {titleWords.map((w, i) => (
              <span className="rm-word-mask" key={`a${i}`}>
                <motion.span
                  className="rm-word"
                  initial={{ y: '110%' }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.1 + i * 0.07, ease: EASE }}
                >
                  {w}&nbsp;
                </motion.span>
              </span>
            ))}
            <br className="rm-title-break" />
            {goldWords.map((w, i) => (
              <span className="rm-word-mask" key={`b${i}`}>
                <motion.span
                  className="rm-word rm-word-gold"
                  initial={{ y: '110%' }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.1 + (titleWords.length + i) * 0.07, ease: EASE }}
                >
                  {w}
                  {i < goldWords.length - 1 ? ' ' : ''}
                </motion.span>
              </span>
            ))}
          </h2>

          <motion.p
            className="rm-lead"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.7, ease: EASE }}
          >
            We&apos;ll work with you to explore the choices you may have already heard about and determine which ones fit your individual strategy.
          </motion.p>
        </header>

        <DesktopRoadmap onOpenBooking={onOpenBooking} />
        <MobileRoadmap onOpenBooking={onOpenBooking} />
      </div>
    </section>
  );
}
