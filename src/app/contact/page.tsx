import React from 'react';
import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/site';
import ContactHub from '@/components/ContactHub';

export const metadata: Metadata = pageMetadata({
  title: 'Contact Us',
  description:
    'Reach out for asset security and insurance solutions today. Connect directly with SecureVest Solutions.',
  path: '/contact',
});

export default function ContactPage() {
  return <ContactHub />;
}
