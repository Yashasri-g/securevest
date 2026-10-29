'use client';

import React from 'react';
import PushpinTearFooter from '@/components/ui/pushpin-tear-footer';
import SocialMorphButton from '@/components/SocialMorphButton';
import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from '@/lib/site';

export default function Footer() {
  return (
    <div className="w-full bg-[#080f1e] overflow-hidden" id="site-footer">
      <PushpinTearFooter
        brand="securevest."
        name="fiduciary wealth & protection"
        logoHref="/"
        logo={
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <img
              src="/images/logo-icon.png"
              alt="SecureVest Solutions"
              style={{
                height: '46px',
                width: '46px',
                display: 'block',
                objectFit: 'contain',
              }}
            />
            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.35rem', letterSpacing: '0.06em', color: '#ffffff' }}>
                SECUREVEST
              </span>
              <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.72rem', letterSpacing: '0.24em', color: 'var(--color-accent-400)', marginTop: '3px' }}>
                SOLUTIONS
              </span>
            </div>
          </div>
        }
        sheet="#080f1e"
        sheetInk="#ffffff"
        paper="#fbfaf8"
        paperInk="#080f1e"
        pinColor="#c5a059"
        seed={23}
        email="contact@securevestsolutions.com"
        newsletter={{
          label: "fiduciary wealth insights · delivered monthly",
          placeholder: "your@email.com",
        }}
        status={{
          label: "accepting household & business advisory clients",
          href: "/contact",
        }}
        customSocials={<SocialMorphButton label="Socials" theme="dark" />}
        columns={[
          {
            title: "services",
            links: [
              { label: "Goal Setting & Wealth", href: "/financial-planning-services" },
              { label: "Asset Protection", href: "/financial-planning-services" },
              { label: "Retirement Planning", href: "/financial-planning-services" },
              { label: "Life & Term Insurance", href: "/financial-planning-services" },
              { label: "Estate Planning & Trusts", href: "/financial-planning-services" },
            ],
            cta: { label: "plan.", href: "/financial-planning-services" },
          },
          {
            title: "navigation",
            links: [
              { label: "Home", href: "/" },
              { label: "About", href: "/about" },
              { label: "Services", href: "/financial-planning-services" },
              { label: "FAQ", href: "/faq" },
              { label: "Blog", href: "/blog" },
              { label: "Contact", href: "/contact" },
            ],
            cta: { label: "book appointment.", href: "/contact" },
          },
        ]}
        sideLinks={[]}
        chat={{ label: "schedule consultation", href: "/contact" }}
        copyright="© 2024–2026 SecureVest Solutions. All rights reserved."
        credit="plan today ! protect tomorrow !"
        handle={{ label: INSTAGRAM_HANDLE, href: INSTAGRAM_URL }}
      />
    </div>
  );
}
