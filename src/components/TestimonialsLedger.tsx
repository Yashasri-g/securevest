'use client';

import React from 'react';

interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatar: string;
}

const ROW_1: TestimonialItem[] = [
  {
    id: 't-1',
    name: 'Jerome Bell',
    role: 'Family Wealth Client • Columbus, OH',
    quote: "SecureVest's attention to detail and fiduciary standard made our planning truly enjoyable. The asset blueprint they delivered was impressive.",
    avatar: '/images/avatars/avatar-john.jpg',
  },
  {
    id: 't-2',
    name: 'Kathryn Murphy',
    role: 'Business Owner • Dublin, OH',
    quote: 'SecureVest is a fiduciary partner you can rely on. They grasped our family brief accurately and engineered custom asset protection.',
    avatar: '/images/avatars/avatar-jane.jpg',
  },
  {
    id: 't-3',
    name: 'Kristin Watson',
    role: 'Retirement Client • New Albany, OH',
    quote: 'Their retirement and income distribution expertise is unmatched. They understood our goals and delivered peace of mind that lasts.',
    avatar: '/images/avatars/avatar-elena.jpg',
  },
  {
    id: 't-4',
    name: 'Albert Flores',
    role: 'Family Trustee • Westerville, OH',
    quote: 'Navigating living trusts and asset titling seemed intimidating. The team explained every detail clearly so our home bypasses probate court.',
    avatar: '/images/avatars/avatar-david.jpg',
  },
  {
    id: 't-5',
    name: 'Sarah & Michael T.',
    role: 'Parents of 3 • Upper Arlington, OH',
    quote: 'SecureVest reviewed our life insurance and tailored a level term policy that locked in low rates and shielded our children’s future.',
    avatar: '/images/avatars/avatar-michael.jpg',
  },
];

const ROW_2: TestimonialItem[] = [
  {
    id: 't-6',
    name: 'David McKinney',
    role: 'Advisory Client • Powell, OH',
    quote: 'Working with this fiduciary team was an absolute pleasure. They took our goals and ran with them, delivering top-notch protection.',
    avatar: '/images/avatars/avatar-marcus.jpg',
  },
  {
    id: 't-7',
    name: 'Jennifer L.',
    role: 'Healthcare Executive • Gahanna, OH',
    quote: 'Their expertise in tax-advantaged wealth strategies made our rollover process smooth and beneficial. Truly grateful for their guidance!',
    avatar: '/images/avatars/avatar-jennifer.jpg',
  },
  {
    id: 't-8',
    name: 'Robert K.',
    role: 'Retired Educator • Bexley, OH',
    quote: 'We were worried about outliving our nest egg. SecureVest structured a tax-efficient withdrawal plan so our money lasts as long as we do.',
    avatar: '/images/avatars/avatar-robert.jpg',
  },
  {
    id: 't-9',
    name: 'Amelia P.',
    role: 'Entrepreneur • Worthington, OH',
    quote: 'Objective guidance without aggressive sales pressure. They analyzed our numbers thoroughly and provided recommendations that worked.',
    avatar: '/images/avatars/avatar-amelia.jpg',
  },
  {
    id: 't-10',
    name: 'Daniel & Priya K.',
    role: 'College Funding • Hilliard, OH',
    quote: 'They evaluated college savings vehicles and aligned our 529 allocations as our kids grew. Experienced advisors you can trust.',
    avatar: '/images/avatars/avatar-john.jpg',
  },
];

function TestimonialCard({ item }: { item: TestimonialItem }) {
  return (
    <div className="testimonial-simple-card">
      <div className="testimonial-card-author">
        <div className="testimonial-card-avatar">
          <img
            src={item.avatar}
            alt={item.name}
            width={44}
            height={44}
            loading="lazy"
          />
        </div>
        <div className="testimonial-card-meta">
          <span className="testimonial-card-name">{item.name}</span>
          <span className="testimonial-card-role">{item.role}</span>
        </div>
      </div>

      <p className="testimonial-card-quote">{item.quote}</p>

      <div className="testimonial-card-stars" aria-label="5 out of 5 stars">
        ★★★★★
      </div>
    </div>
  );
}

export default function TestimonialsLedger() {
  // Duplicate for seamless 0-to-50% infinite marquee loop
  const row1Items = [...ROW_1, ...ROW_1];
  const row2Items = [...ROW_2, ...ROW_2];

  return (
    <section className="testimonials-simple-section" aria-labelledby="testimonials-heading">
      {/* Animated Pastel / Aurora Ambient Background (Pure CSS - No Images) */}
      <div className="testimonials-ambient-bg" aria-hidden="true">
        <div className="testimonials-blob blob-azure" />
        <div className="testimonials-blob blob-amber" />
        <div className="testimonials-blob blob-gold" />
        <div className="testimonials-grid-pattern" />
      </div>

      <div className="container">
        {/* Simple & Clean Header */}
        <div className="testimonials-simple-header text-center">
          <h2 id="testimonials-heading" className="testimonials-simple-title">
            Customer said<br />
            about <span className="testimonials-brand-italic">SecureVest</span>
          </h2>
        </div>
      </div>

      {/* Row 1: Auto-scrolling Left */}
      <div className="testimonials-marquee-row" aria-label="Client feedback marquee row 1">
        <div className="testimonials-marquee-track testimonials-marquee-track-left">
          {row1Items.map((item, index) => (
            <TestimonialCard key={`row1-${item.id}-${index}`} item={item} />
          ))}
        </div>
      </div>

      {/* Row 2: Auto-scrolling Right */}
      <div className="testimonials-marquee-row" aria-label="Client feedback marquee row 2">
        <div className="testimonials-marquee-track testimonials-marquee-track-right">
          {row2Items.map((item, index) => (
            <TestimonialCard key={`row2-${item.id}-${index}`} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
