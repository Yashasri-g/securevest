import React from 'react';
import type { Metadata } from 'next';
import { pageMetadata, SITE_URL, SITE_NAME, SITE_PHONE, SITE_EMAIL } from '@/lib/site';
import ContactHub from '@/components/ContactHub';
import JsonLd, { BreadcrumbJsonLd } from '@/components/JsonLd';

export const metadata: Metadata = pageMetadata({
  title: 'Contact Us',
  description:
    'Reach out for asset security and insurance solutions today. Connect directly with SecureVest Solutions.',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          name: `Contact ${SITE_NAME}`,
          url: `${SITE_URL}/contact`,
          mainEntity: {
            '@type': 'FinancialService',
            name: SITE_NAME,
            telephone: SITE_PHONE,
            email: SITE_EMAIL,
            url: SITE_URL,
          },
        }}
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: SITE_URL },
          { name: 'Contact', url: `${SITE_URL}/contact` },
        ]}
      />
      <ContactHub />
    </>
  );
}
