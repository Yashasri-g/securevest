import type { Metadata, Viewport } from 'next';
import './globals.css';
import ClientShell from '@/components/ClientShell';
import JsonLd from '@/components/JsonLd';
import { DEFAULT_OG_IMAGE, SITE_EMAIL, SITE_NAME, SITE_PHONE, SITE_URL } from '@/lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'SecureVest Solutions | Protect Your Family with Wealth, Life & Retirement Strategies',
    template: `%s | ${SITE_NAME}`,
  },
  description:
    'At SecureVest Solutions, we specialize in helping families protect their assets through tailored insurance and investment strategies. Plan Today ! Protect Tomorrow !',
  applicationName: SITE_NAME,
  keywords: [
    'financial planning',
    'life insurance',
    'term insurance',
    'retirement planning',
    'estate planning',
    'living trust',
    'wealth management',
    'asset protection',
    'SecureVest Solutions',
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  formatDetection: { telephone: true, email: true, address: false },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
  },
  // Pages set their own canonical, Open Graph and Twitter cards via pageMetadata().
  openGraph: { type: 'website', locale: 'en_US', siteName: SITE_NAME },
  icons: { icon: '/images/logo.png', apple: '/images/logo.png' },
};

export const viewport: Viewport = {
  themeColor: '#070e1c',
  width: 'device-width',
  initialScale: 1,
};

const ORGANIZATION_JSON_LD = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'FinancialService',
      '@id': `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/images/logo.png`,
      image: `${SITE_URL}${DEFAULT_OG_IMAGE}`,
      telephone: SITE_PHONE,
      email: SITE_EMAIL,
      openingHours: 'Mo-Fr 09:00-17:00',
      description:
        'Comprehensive financial solutions for family asset security, term life insurance, retirement planning, and tax optimization.',
      slogan: 'Plan Today ! Protect Tomorrow !',
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      publisher: { '@id': `${SITE_URL}/#organization` },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <JsonLd data={ORGANIZATION_JSON_LD} />
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}
