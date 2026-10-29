import type { Metadata } from 'next';
import ThemeButton from '@/components/ThemeButton';
import FaqAccordion from '@/components/FaqAccordion';
import JsonLd from '@/components/JsonLd';
import { FAQ_GROUPS, FAQ_DISCLAIMER } from '@/data/faqs';
import { pageMetadata, SITE_PHONE_DISPLAY, SITE_PHONE_TEL } from '@/lib/site';

export const metadata: Metadata = pageMetadata({
  title: 'Frequently Asked Questions',
  description:
    'Answers to common questions about free quotes, fiduciary advice, life and term insurance, retirement and estate planning with SecureVest Solutions.',
  path: '/faq',
});

export default function FaqPage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: FAQ_GROUPS.flatMap((g) => g.items).map((f) => ({
            '@type': 'Question',
            name: f.question,
            acceptedAnswer: { '@type': 'Answer', text: f.answer },
          })),
        }}
      />

      <section className="page-hero-banner" aria-label="FAQ">
        <div className="page-hero-watermark" aria-hidden="true">FAQ</div>
        <div className="container">
          <span className="page-hero-eyebrow">Answers, Plainly</span>
          <h1 className="page-hero-title">Frequently Asked Questions</h1>
          <p className="page-hero-lead">Everything you might want to know before your first conversation with us.</p>
        </div>
      </section>

      <section className="faqp-section">
        <div className="container faqp-layout">
          <nav className="faqp-nav" aria-label="FAQ topics">
            {FAQ_GROUPS.map((g, i) => (
              <a key={g.title} href={`#faq-${i}`}>
                <span>{String(i + 1).padStart(2, '0')}</span>
                {g.title}
              </a>
            ))}
          </nav>

          <div className="faqp-groups">
            {FAQ_GROUPS.map((g, i) => (
              <div key={g.title} id={`faq-${i}`} className="faqp-group">
                <h2 className="faqp-group-title">{g.title}</h2>
                <FaqAccordion items={g.items} allowMultiple={false} />
              </div>
            ))}
            <p className="faqp-disclaimer">{FAQ_DISCLAIMER}</p>
          </div>
        </div>
      </section>

      <section className="section section-sm">
        <div className="container">
          <div className="cta-banner">
            <div className="cta-banner-content">
              <h2>Still have a question?</h2>
              <p>Ask an advisor directly. It is free and there is no obligation.</p>
              <div className="cta-banner-actions">
                <ThemeButton href="/quote" variant="gold" size="lg">Get a Free Quote</ThemeButton>
                <ThemeButton href={SITE_PHONE_TEL} variant="outline-light" size="lg">Call {SITE_PHONE_DISPLAY}</ThemeButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
