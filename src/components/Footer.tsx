'use client';

import React from 'react';
import PushpinTearFooter from '@/components/ui/pushpin-tear-footer';
import SocialMorphButton from '@/components/SocialMorphButton';

export default function Footer() {
  return (
    <div className="w-full bg-[#080f1e] overflow-hidden" id="site-footer">
      <PushpinTearFooter
        brand="securevest."
        name="fiduciary wealth & protection"
        logoHref="/"
        logo={
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <img
              src="/images/logo.png"
              alt="SecureVest Solutions"
              style={{
                filter: 'brightness(0) invert(1)',
                height: '28px',
                width: 'auto',
                display: 'block',
              }}
            />
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
              { label: "Services", href: "/financial-planning-services" },
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
        handle={{ label: "@securevest.solutions", href: "/contact" }}
      />
    </div>
  );
}
