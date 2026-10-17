import type { Metadata } from 'next';
import './globals.css';
import ClientShell from '@/components/ClientShell';

export const metadata: Metadata = {
  metadataBase: new URL('https://securevestsolutions.com'),
  title: {
    default: 'SecureVest Solutions | Protect Your Family with Wealth, Life & Retirement Strategies',
    template: '%s | SecureVest Solutions',
  },
  description:
    'At SecureVest Solutions, we specialize in helping families protect their assets through tailored insurance and investment strategies. Plan Today ! Protect Tomorrow !',
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
  authors: [{ name: 'SecureVest Solutions' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://securevestsolutions.com',
    siteName: 'SecureVest Solutions',
    title: 'SecureVest Solutions | Protect Your Family with Life and Term Insurance',
    description:
      'At SecureVest Solutions, we specialize in helping families protect their assets through tailored insurance and investment strategies.',
    images: [
      {
        url: '/images/logo.png',
        width: 768,
        height: 126,
        alt: 'SecureVest Solutions Logo',
      },
    ],
  },
  icons: {
    icon: '/images/logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: 'SecureVest Solutions',
    url: 'https://securevestsolutions.com',
    logo: 'https://securevestsolutions.com/images/logo.png',
    telephone: '+1-740-303-2525',
    email: 'contact@securevestsolutions.com',
    openingHours: 'Mo-Fr 09:00-17:00',
    description:
      'Comprehensive financial solutions for family asset security, term life insurance, retirement planning, and tax optimization.',
    slogan: 'Plan Today ! Protect Tomorrow !',
  };

  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}
