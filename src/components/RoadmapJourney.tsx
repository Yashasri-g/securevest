'use client';

import React, { useState } from 'react';

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
    duration: 'Week 1 - 2',
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
    duration: 'Week 2 - 3',
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
    duration: 'Week 3 - 5',
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

export default function RoadmapJourney({ onOpenBooking }: RoadmapJourneyProps) {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = STEPS[activeStepIndex];

  return (
    <section className="roadmap-journey-section" aria-labelledby="roadmap-title">
      <div className="container">
        {/* Section Header */}
        <div className="section-head text-center">
          <div className="section-eyebrow">
            <span className="eyebrow-dot" aria-hidden="true"></span>
            Your Financial Journey
          </div>
          <h2 id="roadmap-title" className="section-display-title">
            Where Do You Want Your Financial <span className="highlight-text">Roadmap to Take You?</span>
          </h2>
          <p className="section-lead-text">
            We&apos;ll work with you to explore the choices you may have already heard about and determine which ones fit your individual strategy.
          </p>
        </div>

        {/* Step Selector Ribbon */}
        <div className="roadmap-nav-ribbon" role="tablist" aria-label="Roadmap Stages">
          {STEPS.map((step, idx) => (
            <button
              key={step.number}
              type="button"
              role="tab"
              aria-selected={activeStepIndex === idx}
              className={`roadmap-step-tab ${activeStepIndex === idx ? 'active' : ''}`}
              onClick={() => setActiveStepIndex(idx)}
            >
              <div className="tab-number-box">
                <span className="tab-num">{step.number}</span>
                {activeStepIndex === idx && <span className="active-pulse-ring" aria-hidden="true" />}
              </div>
              <div className="tab-meta">
                <span className="tab-tag">{step.tag}</span>
                <span className="tab-title">{step.title}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Active Stage Detailed Showcase Card */}
        <div className="roadmap-showcase-card" role="tabpanel">
          <div className="showcase-card-header">
            <div className="header-badge-row">
              <span className="stage-num-badge">Stage {activeStep.number}</span>
              <span className="stage-duration-badge">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                {activeStep.duration}
              </span>
            </div>
            <h3 className="stage-card-title">{activeStep.title}</h3>
            <p className="stage-card-summary">{activeStep.summary}</p>
          </div>

          <div className="showcase-content-grid">
            <div className="showcase-deliverables">
              <h4 className="deliverables-title">Advisor Milestones &amp; Actions:</h4>
              <ul className="stage-deliverables-list">
                {activeStep.deliverables.map((item, dIdx) => (
                  <li key={dIdx} className="stage-deliverable-item">
                    <span className="bullet-cyan">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="showcase-outcome-pane">
              <div className="outcome-box">
                <div className="outcome-icon cyan">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <div className="outcome-text-content">
                  <span className="outcome-label">The Deliverable to Your Family:</span>
                  <p className="outcome-quote">{activeStep.clientOutcome}</p>
                </div>
              </div>

              <div className="stage-action-trigger">
                {onOpenBooking ? (
                  <button
                    type="button"
                    className="btn btn-primary btn-md btn-full"
                    onClick={onOpenBooking}
                  >
                    Start Step 1: Complimentary Discovery
                  </button>
                ) : (
                  <a
                    href="https://calendly.com/securevestsolutions/appointment"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-md btn-full"
                  >
                    Start Step 1: Complimentary Discovery
                  </a>
                )}
                <span className="action-subtext">No obligations • 100% confidential discussion</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
