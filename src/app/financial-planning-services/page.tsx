import React from 'react';
import type { Metadata } from 'next';
import ThemeButton from '@/components/ThemeButton';
import Reveal from '@/components/Reveal';
import JsonLd, { BreadcrumbJsonLd } from '@/components/JsonLd';
import { pageMetadata, absoluteUrl, SITE_URL } from '@/lib/site';

export const metadata: Metadata = pageMetadata({
  title: 'Financial Planning & Insurance Services',
  description:
    'Comprehensive financial planning for families and businesses: estate planning, investment growth, retirement security, life & term insurance, and educational funds.',
  path: '/financial-planning-services',
});

const CAL = 'https://calendly.com/securevestsolutions/appointment';

const SERVICES = [
  {
    id: 'estate-planning',
    kicker: 'Legacy Preservation',
    title: 'Estate Planning & Legacy Protection',
    image: '/images/trust-legal.jpg',
    body: 'Safeguard your legacy and provide for your heirs, minimizing taxes and avoiding lengthy probate.',
    points: ['Living wills & revocable trusts', 'Beneficiary audits & alignment', 'Intergenerational wealth transfer'],
    cta: 'Consult on Estate Planning',
  },
  {
    id: 'investment-growth',
    kicker: 'Wealth Expansion',
    title: 'Investment Expertise & Growth',
    image: '/images/growth-plant.jpg',
    body: 'A diversified portfolio built around your income and growth goals, with unnecessary market risk kept low.',
    points: ['Risk assessment & asset allocation', 'Tax-efficient accounts & vehicles', 'Ongoing rebalancing & tracking'],
    cta: 'Discuss Portfolio Options',
  },
  {
    id: 'retirement-planning',
    kicker: 'Financial Independence',
    title: 'Retirement Planning & Stress Testing',
    image: '/images/retirement-couple.jpg',
    body: 'Pensions, RMDs and Roth conversions, stress-tested against inflation and market downturns.',
    points: ['Social Security & pension optimization', 'Roth conversion & distribution planning', 'Longevity stress testing'],
    cta: 'Plan Your Retirement',
  },
  {
    id: 'peace-of-mind',
    kicker: 'Holistic Security',
    title: 'Financial Peace of Mind',
    image: '/images/advisor-desk.jpg',
    body: 'Strategies that make sure your money lasts as long as you do, for you and your loved ones.',
    points: ['Lifetime income floor strategies', 'Emergency fund & liquidity buffers', 'Annual reviews & progress updates'],
    cta: 'Build Your Peace of Mind',
  },
  {
    id: 'educational-planning',
    kicker: 'Future Generations',
    title: 'Educational Funding & College Savings',
    image: '/images/financial-planner.jpg',
    body: 'The right savings vehicles, tuned to your student\u2019s age, financial aid and changing tax law.',
    points: ['529 plan selection & tax credits', 'Age-based glide paths', 'FAFSA impact modeling'],
    cta: 'Start Educational Planning',
  },
  {
    id: 'life-insurance',
    kicker: 'Family Shield',
    title: 'Life & Term Insurance Solutions',
    image: '/images/term-insurance.jpg',
    body: 'Find your best-fit policy with adjustable coverage and transparent rates.',
    points: ['Term life for income replacement', 'Disability & long-term care audits', 'Independent carrier comparisons'],
    cta: 'Compare Policy Quotes',
  },
];

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          name: 'SecureVest Solutions financial services',
          itemListElement: SERVICES.map((s, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            item: {
              '@type': 'Service',
              name: s.title,
              description: s.body,
              url: absoluteUrl(`/financial-planning-services#${s.id}`),
              provider: { '@type': 'FinancialService', name: 'SecureVest Solutions' },
            },
          })),
        }}
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: SITE_URL },
          { name: 'Financial Planning Services', url: `${SITE_URL}/financial-planning-services` },
        ]}
      />
      {/* Hero / Header */}
      <section className="page-hero-banner" aria-label="Services Overview">
        <div className="page-hero-watermark" aria-hidden="true">SERVICES</div>
        <div className="container">
          <h1 className="page-hero-title">Secure Your Future With Comprehensive Planning</h1>
          <p className="page-hero-lead">
            Comprehensive planning for families and businesses to protect assets, preserve wealth, and maximize tax benefits through every stage of life.
          </p>
          <div className="page-hero-actions">
            <ThemeButton
              href="https://calendly.com/securevestsolutions/appointment"
              target="_blank"
              variant="gold"
              size="lg"
            >
              Schedule Free Consultation
            </ThemeButton>
            <ThemeButton
              href="/contact"
              variant="outline-light"
              size="lg"
            >
              Request Information
            </ThemeButton>
          </div>
        </div>
      </section>

      {/* Quick jump */}
      <nav className="svcp-jump" aria-label="Jump to a service">
        <div className="container svcp-jump-inner">
          {SERVICES.map((s, i) => (
            <a key={s.id} href={`#${s.id}`} className="svcp-jump-link">
              <span>{String(i + 1).padStart(2, '0')}</span>
              {s.title.split(' & ')[0]}
            </a>
          ))}
        </div>
      </nav>

      {/* Services: alternating editorial rows */}
      <section className="svcp-section" aria-label="Our services">
        <div className="container">
          {SERVICES.map((s, i) => (
            <article key={s.id} id={s.id} className={`svcp-row-inner${i % 2 ? ' is-flip' : ''}`}>
              {/* Image and copy enter from opposite sides, alternating per row */}
              <Reveal className="svcp-media-col" x={i % 2 ? 140 : -140}>
                <div className="svcp-media">
                  <img src={s.image} alt="" loading="lazy" />
                  <span className="svcp-num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                </div>
              </Reveal>
              <Reveal className="svcp-copy" x={i % 2 ? -140 : 140} delay={0.12}>
                <span className="svcp-kicker">{s.kicker}</span>
                <h2 className="svcp-title">{s.title}</h2>
                <p className="svcp-body">{s.body}</p>
                <ul className="svcp-points">
                  {s.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
                <a href={CAL} target="_blank" rel="noopener noreferrer" className="svcp-link">
                  {s.cta} <span aria-hidden="true">&rarr;</span>
                </a>
              </Reveal>
            </article>
          ))}
        </div>
      </section>



      {/* CTA Banner */}
      <section className="section section-sm">
        <div className="container">
          <div className="cta-banner">
            <div className="cta-banner-content">
              <span className="section-eyebrow" style={{ background: 'rgba(255,255,255,0.12)', color: 'var(--color-accent-300)', borderColor: 'rgba(255,255,255,0.2)' }}>
                Get Started
              </span>
              <h2>Ready to Build Your Tailored Strategy?</h2>
              <p>
                Book an appointment with our team today. We&apos;ll listen to your priorities and outline clear recommendations at zero cost or obligation.
              </p>
              <div className="cta-banner-actions">
                <ThemeButton
                  href="https://calendly.com/securevestsolutions/appointment"
                  target="_blank"
                  variant="gold"
                  size="lg"
                >
                  Book An Appointment
                </ThemeButton>
                <ThemeButton
                  href="tel:7403032525"
                  variant="outline-light"
                  size="lg"
                >
                  Call (740) 303-2525
                </ThemeButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
