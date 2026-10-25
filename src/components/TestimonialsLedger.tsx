'use client';

import React from 'react';

interface TestimonialCard {
  id: string;
  category: string;
  badgeColor: string;
  icon: React.ReactNode;
  quote: string;
  client: string;
  role: string;
  avatar: string;
}

const TESTIMONIALS_DATA: TestimonialCard[] = [
  {
    id: 't-john',
    category: 'Retirement Planning',
    badgeColor: '#059669', // Emerald
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
      </svg>
    ),
    quote: "SecureVest Solutions helped us plan our retirement effectively and secure our family's future. Highly recommended!",
    client: 'John Doe',
    role: 'Verified Client • Retirement Strategy',
    avatar: '/images/avatars/avatar-john.jpg',
  },
  {
    id: 't-jane',
    category: 'Tax Strategies',
    badgeColor: '#d97706', // Amber
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <line x1="19" y1="5" x2="5" y2="19"></line>
        <circle cx="6.5" cy="6.5" r="2.5"></circle>
        <circle cx="17.5" cy="17.5" r="2.5"></circle>
      </svg>
    ),
    quote: 'Their expertise in tax saving strategies made our investment process smooth and beneficial. Truly grateful for their help!',
    client: 'Jane Smith',
    role: 'Verified Client • Tax & Investment',
    avatar: '/images/avatars/avatar-jane.jpg',
  },
  {
    id: 't-david',
    category: 'Asset Protection',
    badgeColor: '#0284c7', // Sky / Cyan
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
      </svg>
    ),
    quote: 'They specialize in helping families protect their assets through tailored insurance and investment strategies. It gave our household lasting peace of mind.',
    client: 'David M.',
    role: 'Family Wealth Client • Asset Security',
    avatar: '/images/avatars/avatar-david.jpg',
  },
  {
    id: 't-michael',
    category: 'Term Life Insurance',
    badgeColor: '#e11d48', // Rose
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
      </svg>
    ),
    quote: 'SecureVest reviewed our coverage and tailored a level term policy that locked in low rates and gave our kids absolute financial protection.',
    client: 'Sarah & Michael T.',
    role: 'Term Policyholders • Family Income Shield',
    avatar: '/images/avatars/avatar-michael.jpg',
  },
  {
    id: 't-jennifer',
    category: 'Living Trusts & Estate',
    badgeColor: '#6366f1', // Indigo
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
        <line x1="16" y1="13" x2="8" y2="13"></line>
        <line x1="16" y1="17" x2="8" y2="17"></line>
      </svg>
    ),
    quote: 'Navigating living trusts and asset titling seemed intimidating. The team explained every detail in plain English to ensure our home bypasses probate court.',
    client: 'Jennifer L.',
    role: 'Estate Planning Client • Family Trustee',
    avatar: '/images/avatars/avatar-jennifer.jpg',
  },
  {
    id: 't-marcus',
    category: 'Goal Setting & Planning',
    badgeColor: '#10b981', // Emerald Green
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 14 14"></polyline>
      </svg>
    ),
    quote: 'They helped us calculate net worth, review household cash flow, and set clear milestones. Tailored strategies that fit our individual roadmap.',
    client: 'Marcus W.',
    role: 'Advisory Client • Financial Roadmap',
    avatar: '/images/avatars/avatar-marcus.jpg',
  },
  {
    id: 't-elena',
    category: 'Educational 529 Planning',
    badgeColor: '#2563eb', // Royal Blue
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
        <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
      </svg>
    ),
    quote: 'They evaluated college savings vehicles and aligned our 529 allocations as our children grew. Having experienced advisors on our side makes all the difference.',
    client: 'Elena R.',
    role: 'Parents of 2 • College Funding',
    avatar: '/images/avatars/avatar-elena.jpg',
  },
  {
    id: 't-robert',
    category: 'Financial Peace of Mind',
    badgeColor: '#00b4d8', // Cyan
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="4"></circle>
        <path d="M12 2v2"></path>
        <path d="M12 20v2"></path>
        <path d="m4.93 4.93 1.41 1.41"></path>
        <path d="m17.66 17.66 1.41 1.41"></path>
        <path d="M2 12h2"></path>
        <path d="M20 12h2"></path>
      </svg>
    ),
    quote: 'We were worried about outliving our savings. SecureVest structured a tax-efficient withdrawal strategy so our money lasts as long as we do.',
    client: 'Robert K.',
    role: 'Retired Educator • Longevity Strategy',
    avatar: '/images/avatars/avatar-robert.jpg',
  },
  {
    id: 't-amelia',
    category: 'Risk Management',
    badgeColor: '#8b5cf6', // Violet
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="m4.93 4.93 14.14 14.14"></path>
      </svg>
    ),
    quote: 'Comprehensive insurance guidance without aggressive sales pressure. They evaluated our existing policies and closed critical gaps in our family’s safety net.',
    client: 'Amelia P.',
    role: 'Business Owner • Risk Advisory',
    avatar: '/images/avatars/avatar-amelia.jpg',
  },
];

export default function TestimonialsLedger() {
  return (
    <section className="testimonials-ledger-section" aria-labelledby="testimonials-ledger-title">
      <div className="container">
        {/* Section Header Matching the Reference Style */}
        <div className="testimonials-bento-header text-center">
          <h2 id="testimonials-ledger-title" className="testimonials-bento-title">
            Families that plan together,<br />
            stay protected.
          </h2>
          <p className="testimonials-bento-subtitle">
            Short notes and verified feedback from families guided by SecureVest Solutions.
          </p>
        </div>

        {/* Master Bento Container (Single Rounded Island) */}
        <div className="testimonials-bento-canvas">
          <div className="testimonials-bento-grid">
            {TESTIMONIALS_DATA.map((item) => (
              <div key={item.id} className="bento-testimonial-card">
                {/* Top Badge Row */}
                <div className="bento-card-top">
                  <div className="bento-service-badge" style={{ color: item.badgeColor }}>
                    <span className="bento-badge-icon" style={{ color: item.badgeColor }}>
                      {item.icon}
                    </span>
                    <span className="bento-badge-text">{item.category}</span>
                  </div>
                </div>

                {/* Subtle Large Quotation Mark */}
                <div className="bento-quote-symbol" aria-hidden="true">
                  “
                </div>

                {/* Testimonial Quote Text */}
                <blockquote className="bento-quote-text">
                  {item.quote}
                </blockquote>

                {/* Bottom Avatar Author Block */}
                <div className="bento-author-row">
                  <div className="bento-avatar-frame">
                    <img
                      src={item.avatar}
                      alt={item.client}
                      className="bento-avatar-img"
                      width={44}
                      height={44}
                      loading="lazy"
                    />
                  </div>
                  <div className="bento-author-meta">
                    <span className="bento-author-name">{item.client}</span>
                    <span className="bento-author-role">{item.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Trust Metric Bar */}
        <div className="testimonials-trust-footer">
          <div className="trust-footer-item">
            <span className="trust-footer-stars">★★★★★</span>
            <span className="trust-footer-text"><strong>5.0 Out of 5</strong> Unanimous Rating</span>
          </div>
          <div className="trust-footer-divider" aria-hidden="true">•</div>
          <div className="trust-footer-item">
            <span className="trust-footer-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </span>
            <span className="trust-footer-text"><strong>100% Independent</strong> Fiduciary Advice</span>
          </div>
          <div className="trust-footer-divider" aria-hidden="true">•</div>
          <div className="trust-footer-item">
            <span className="trust-footer-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </span>
            <a href="tel:7403032525" className="trust-footer-link">
              Direct Advisory Line: <strong>(740) 303-2525</strong>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
