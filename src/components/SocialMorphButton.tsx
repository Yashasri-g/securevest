'use client';

import React from 'react';
import { INSTAGRAM_URL, WHATSAPP_URL } from '@/lib/site';

export interface SocialLinkItem {
  platform: 'instagram' | 'whatsapp';
  label: string;
  href: string;
}

export interface SocialMorphButtonProps {
  label?: string;
  links?: SocialLinkItem[];
  theme?: 'dark' | 'light';
  className?: string;
}

const DEFAULT_LINKS: SocialLinkItem[] = [
  { platform: 'instagram', label: 'Instagram', href: INSTAGRAM_URL },
  { platform: 'whatsapp', label: 'WhatsApp', href: WHATSAPP_URL },
];

export default function SocialMorphButton({
  label = 'Socials',
  links = DEFAULT_LINKS,
  theme = 'dark',
  className = '',
}: SocialMorphButtonProps) {
  const renderIcon = (platform: SocialLinkItem['platform']) => {
    switch (platform) {
      case 'instagram':
        return (
          <svg
            className="social-morph-svg"
            viewBox="0 0 24 24"
            width="19"
            height="19"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
          </svg>
        );
      case 'whatsapp':
        return (
          <svg className="social-morph-svg" viewBox="0 0 24 24" width="19" height="19" fill="currentColor" aria-hidden="true">
            <path d="M20.52 3.48A11.86 11.86 0 0 0 12.05 0C5.5 0 .17 5.33.17 11.88c0 2.1.55 4.14 1.6 5.95L0 24l6.34-1.66a11.86 11.86 0 0 0 5.7 1.45h.01c6.55 0 11.88-5.33 11.88-11.88 0-3.17-1.23-6.15-3.41-8.43ZM12.05 21.8h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.76.99 1-3.67-.24-.38a9.9 9.9 0 0 1-1.52-5.27c0-5.47 4.45-9.92 9.93-9.92 2.65 0 5.14 1.03 7.01 2.91a9.85 9.85 0 0 1 2.9 7.02c0 5.47-4.45 9.91-9.9 9.91Zm5.44-7.43c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35Z" />
          </svg>
        );
    }
  };

  return (
    <div className={`social-morph-wrapper ${theme} ${className}`}>
      <div className="social-morph-btn" role="group" aria-label="Social media channels">
        <span className="social-morph-label">
          <span className="social-morph-text">{label}</span>
        </span>
        <div className="social-morph-container">
          {links.map((item) => (
            <a
              key={item.platform}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`social-morph-icon-link ${item.platform}`}
              aria-label={item.label}
              title={item.label}
            >
              {renderIcon(item.platform)}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
