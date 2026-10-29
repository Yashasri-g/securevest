import type { Metadata } from 'next';
import QuoteWizard from '@/components/QuoteWizard';
import { pageMetadata } from '@/lib/site';

export const metadata: Metadata = pageMetadata({
  title: 'Get a Free Quote',
  description:
    'Request a free, no-obligation quote for life and term insurance, retirement, estate, investment or education planning. An advisor responds within one business day.',
  path: '/quote',
});

export default function QuotePage() {
  return (
    <>
      <section className="page-hero-banner" aria-label="Free quote">
        <div className="page-hero-watermark" aria-hidden="true">QUOTE</div>
        <div className="container">
          <span className="page-hero-eyebrow">Free and No Obligation</span>
          <h1 className="page-hero-title">Get your free quote in under two minutes.</h1>
          <p className="page-hero-lead">Three quick steps. An advisor replies within one business day.</p>
        </div>
      </section>
      <QuoteWizard />
    </>
  );
}
