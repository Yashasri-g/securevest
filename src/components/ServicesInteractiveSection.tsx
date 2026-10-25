'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface ServicesInteractiveSectionProps {
  onOpenBooking?: () => void;
}

interface ServiceItem {
  id: string;
  category: 'protection' | 'growth' | 'legacy';
  title: string;
  badge: string;
  image: string;
  description: string;
  deliverables: string[];
  link: string;
}

const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'estate-planning',
    category: 'legacy',
    title: 'Estate Planning & Trust Architecture',
    badge: 'Legacy Preservation',
    image: '/images/trust-legal.jpg',
    description:
      'Ensure your hard-earned assets pass seamlessly to your beneficiaries without the delays, expenses, and public scrutiny of probate court.',
    deliverables: [
      'Revocable & Irrevocable Living Trusts',
      'Last Will & Testament Drafting Guidance',
      'Asset Titling & Beneficiary Coordination',
      'Healthcare Directives & Durable Power of Attorney',
    ],
    link: '/financial-planning-services#estate-planning',
  },
  {
    id: 'investment-growth',
    category: 'growth',
    title: 'Strategic Investment Growth',
    badge: 'Wealth Expansion',
    image: '/images/growth-plant.jpg',
    description:
      'Disciplined, customized portfolio management aligned with your family risk profile, compounding horizon, and generational milestones.',
    deliverables: [
      'Asset Allocation & Modern Portfolio Theory',
      'Tax-Loss Harvesting & Capital Gains Efficiency',
      'Systematic Rebalancing & Risk Mitigation',
      'Continuous Fiduciary Performance Audits',
    ],
    link: '/financial-planning-services#investment-growth',
  },
  {
    id: 'retirement-planning',
    category: 'growth',
    title: 'Retirement Planning & Longevity',
    badge: 'Financial Independence',
    image: '/images/retirement-couple.jpg',
    description:
      'Transition confidently into retirement with sustainable withdrawal strategies, Social Security maximization, and healthcare cost forecasting.',
    deliverables: [
      '401(k), 403(b), & Traditional/Roth IRA Rollovers',
      'Tax-Efficient Withdrawal Sequence Mapping',
      'Social Security & Pension Timing Strategy',
      'Longevity & Long-Term Healthcare Risk Buffering',
    ],
    link: '/financial-planning-services#retirement-planning',
  },
  {
    id: 'peace-of-mind',
    category: 'protection',
    title: 'Financial Peace of Mind & Tax Strategies',
    badge: 'Holistic Security',
    image: '/images/advisor-desk.jpg',
    description:
      'Aligning every aspect of your financial life to eliminate stress, minimize tax exposure, and create a resilient family safety net.',
    deliverables: [
      'Comprehensive Household Cash Flow Analysis',
      'Strategic Tax-Bracket Management & Deductions',
      'Emergency Liquidity & Debt Elimination Framework',
      'Annual Fiduciary Strategy Reviews',
    ],
    link: '/financial-planning-services#peace-of-mind',
  },
  {
    id: 'educational-planning',
    category: 'legacy',
    title: 'Educational 529 Planning',
    badge: 'Future Generations',
    image: '/images/financial-planner.jpg',
    description:
      'Empower your children and grandchildren with tax-free college savings growth, flexible state plans, and generational educational trusts.',
    deliverables: [
      'Qualified State 529 College Savings Selection',
      'Tax-Free Investment Growth & Distribution Planning',
      'Coordination with Financial Aid & Scholarships',
      'Flexible Beneficiary Reallocation Options',
    ],
    link: '/financial-planning-services#educational-planning',
  },
  {
    id: 'term-insurance',
    category: 'protection',
    title: 'Comprehensive Life & Term Insurance',
    badge: 'Family Shield',
    image: '/images/term-insurance.jpg',
    description:
      'Safeguard your family against life’s uncertainties with cost-effective, high-coverage term insurance designed to replace income and clear obligations.',
    deliverables: [
      '10, 20, & 30-Year Level Term Policies',
      'Mortgage & Debt Clearance Protection',
      'Income Replacement for Surviving Dependents',
      'Guaranteed Level Premiums with Top-Rated Carriers',
    ],
    link: '/financial-planning-services#life-insurance',
  },
];

export default function ServicesInteractiveSection({ onOpenBooking }: ServicesInteractiveSectionProps) {
  const [activeCategory, setActiveCategory] = useState<'all' | 'protection' | 'growth' | 'legacy'>('all');

  const filteredServices = activeCategory === 'all'
    ? SERVICES_DATA
    : SERVICES_DATA.filter((s) => s.category === activeCategory);

  return (
    <section className="services-hub-section" id="services" aria-labelledby="services-hub-title">
      <div className="container">
        {/* Section Header */}
        <div className="section-head text-center">
          <div className="section-eyebrow">
            <span className="eyebrow-dot" aria-hidden="true"></span>
            Comprehensive Financial Solutions
          </div>
          <h2 id="services-hub-title" className="section-display-title">
            Tailored Strategies to <span className="highlight-text">Secure Your Future</span>
          </h2>
          <p className="section-lead-text">
            We help families secure assets, plan for retirement, and optimize tax savings effectively. Explore our core advisory pillars below.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="services-filter-pills" role="tablist" aria-label="Filter Services By Objective">
          <button
            type="button"
            role="tab"
            aria-selected={activeCategory === 'all'}
            className={`filter-pill-btn ${activeCategory === 'all' ? 'active' : ''}`}
            onClick={() => setActiveCategory('all')}
          >
            All 6 Core Pillars
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeCategory === 'protection'}
            className={`filter-pill-btn ${activeCategory === 'protection' ? 'active' : ''}`}
            onClick={() => setActiveCategory('protection')}
          >
            <span className="pill-dot protection" aria-hidden="true" />
            Family Protection &amp; Shielding
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeCategory === 'growth'}
            className={`filter-pill-btn ${activeCategory === 'growth' ? 'active' : ''}`}
            onClick={() => setActiveCategory('growth')}
          >
            <span className="pill-dot growth" aria-hidden="true" />
            Wealth &amp; Retirement Growth
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeCategory === 'legacy'}
            className={`filter-pill-btn ${activeCategory === 'legacy' ? 'active' : ''}`}
            onClick={() => setActiveCategory('legacy')}
          >
            <span className="pill-dot legacy" aria-hidden="true" />
            Legacy, Estate &amp; Education
          </button>
        </div>

        {/* Interactive Services Grid */}
        <div className="services-card-grid">
          {filteredServices.map((service, index) => (
            <article key={service.id} className="service-feature-card">
              <div className="card-media-wrapper">
                <img
                  src={service.image}
                  alt={service.title}
                  className="card-media-photo"
                  loading="lazy"
                  width={420}
                  height={240}
                />
                <span className={`card-category-badge badge-${service.category}`}>
                  {service.badge}
                </span>
              </div>

              <div className="card-body">
                <h3 className="card-service-title">{service.title}</h3>
                <p className="card-service-desc">{service.description}</p>

                <div className="card-deliverables-box">
                  <h4 className="deliverables-heading">Key Fiduciary Deliverables:</h4>
                  <ul className="deliverables-list">
                    {service.deliverables.map((item, dIdx) => (
                      <li key={dIdx} className="deliverable-item">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="check-icon" aria-hidden="true">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="card-footer-actions">
                  <Link href={service.link} className="btn-link-arrow">
                    Full Service Breakdown
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </Link>

                  {onOpenBooking && (
                    <button
                      type="button"
                      className="btn-card-quick"
                      onClick={onOpenBooking}
                      aria-label={`Book consultation for ${service.title}`}
                    >
                      Book Review
                    </button>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Section Bottom Banner */}
        <div className="services-hub-banner">
          <div className="banner-content">
            <h3>Need a Custom Combination of Strategies?</h3>
            <p>Our advisors integrate insurance, investments, and trusts into one cohesive family blueprint.</p>
          </div>
          <div className="banner-actions">
            {onOpenBooking ? (
              <button
                type="button"
                className="btn btn-accent btn-lg"
                onClick={onOpenBooking}
              >
                Schedule Free Fiduciary Consultation
              </button>
            ) : (
              <a
                href="https://calendly.com/securevestsolutions/appointment"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-accent btn-lg"
              >
                Schedule Free Fiduciary Consultation
              </a>
            )}
            <Link href="/financial-planning-services" className="btn btn-outline-light btn-lg">
              Explore All Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
