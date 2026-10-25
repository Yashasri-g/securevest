import React from 'react';
import type { Metadata } from 'next';
import ContactHub from '@/components/ContactHub';

export const metadata: Metadata = {
  title: 'Contact Us | SecureVest Solutions',
  description:
    'Reach out for asset security and insurance solutions today. Connect directly with SecureVest Solutions.',
};

export default function ContactPage() {
  return <ContactHub />;
}
