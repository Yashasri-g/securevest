'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';

interface ServiceItem {
  id: string;
  title: string;
  kicker: string;
  blurb: string;
  image: string;
  link: string;
}

const SERVICES: ServiceItem[] = [
  {
    id: 'estate-planning',
    title: 'Estate Planning',
    kicker: 'Legacy Preservation',
    blurb: 'Safeguard your legacy and provide for your heirs.',
    image: '/images/trust-legal.jpg',
    link: '/financial-planning-services#estate-planning',
  },
  {
    id: 'investment-growth',
    title: 'Investment Expertise',
    kicker: 'Wealth Expansion',
    blurb: 'A diversified portfolio built around your income and growth goals.',
    image: '/images/growth-plant.jpg',
    link: '/financial-planning-services#investment-growth',
  },
  {
    id: 'peace-of-mind',
    title: 'Financial Peace of Mind',
    kicker: 'Holistic Security',
    blurb: 'Confidence that your money lasts as long as you do.',
    image: '/images/advisor-desk.jpg',
    link: '/financial-planning-services#peace-of-mind',
  },
  {
    id: 'retirement-planning',
    title: 'Retirement Planning',
    kicker: 'Financial Independence',
    blurb: 'Pensions, RMDs and Roth conversions, planned with care.',
    image: '/images/retirement-couple.jpg',
    link: '/financial-planning-services#retirement-planning',
  },
  {
    id: 'educational-planning',
    title: 'Educational Planning',
    kicker: 'Future Generations',
    blurb: 'Smart savings vehicles for every stage of schooling.',
    image: '/images/financial-planner.jpg',
    link: '/financial-planning-services#educational-planning',
  },
  {
    id: 'term-insurance',
    title: 'Life Insurance',
    kicker: 'Family Shield',
    blurb: 'Find your best-fit plan with adjustable coverage.',
    image: '/images/term-insurance.jpg',
    link: '/financial-planning-services#life-insurance',
  },
];

const EASE = [0.22, 1, 0.36, 1] as const;

export default function ServicesInteractiveSection() {
  const [active, setActive] = useState(0);
  const current = SERVICES[active];

  return (
    <section className="svc-section" id="services" aria-labelledby="services-hub-title">
      <div className="container">
        <header className="svc-header">
          <motion.h2
            id="services-hub-title"
            className="svc-title"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            Tailored Strategies to <em>Secure Your Future</em>
          </motion.h2>
          <motion.div
            className="svc-header-side"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
          >
            <p>Six advisory pillars that protect, grow and pass on your family’s wealth.</p>
            <Link href="/financial-planning-services" className="svc-viewall">
              View all services
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </motion.div>
        </header>

        <div className="svc-layout">
          {/* sticky image stage (desktop) */}
          <div className="svc-stage" aria-hidden="true">
            <AnimatePresence mode="sync">
              <motion.img
                key={current.id}
                src={current.image}
                alt=""
                className="svc-stage-img"
                initial={{ opacity: 0, scale: 1.08 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.9, ease: EASE }}
              />
            </AnimatePresence>
            <div className="svc-stage-shade" />
            <div className="svc-stage-caption">
              <span className="svc-stage-num">0{active + 1}</span>
              <span className="svc-stage-kicker">{current.kicker}</span>
            </div>
          </div>

          {/* editorial index */}
          <ol className="svc-list">
            {SERVICES.map((s, i) => (
              <motion.li
                key={s.id}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.7, delay: i * 0.07, ease: EASE }}
              >
                <Link
                  href={s.link}
                  className={`svc-row ${active === i ? 'is-active' : ''}`}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                >
                  <span className="svc-row-num">0{i + 1}</span>
                  <img src={s.image} alt="" className="svc-row-thumb" loading="lazy" width={72} height={72} />
                  <span className="svc-row-text">
                    <span className="svc-row-title">{s.title}</span>
                    <span className="svc-row-blurb">{s.blurb}</span>
                  </span>
                  <span className="svc-row-arrow" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="8 7 17 7 17 16" />
                    </svg>
                  </span>
                </Link>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
