import type { Metadata } from 'next';
import AboutContent from '@/components/AboutContent';
import JsonLd from '@/components/JsonLd';
import { pageMetadata, absoluteUrl, SITE_NAME } from '@/lib/site';

export const metadata: Metadata = pageMetadata({
  title: 'About Us',
  description:
    'SecureVest Solutions is an independent, fiduciary-minded advisory helping families protect their wealth with insurance, retirement, estate and investment planning.',
  path: '/about',
  image: '/images/advisor-desk.jpg',
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          name: `About ${SITE_NAME}`,
          url: absoluteUrl('/about'),
        }}
      />
      <AboutContent />
    </>
  );
}
