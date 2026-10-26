'use client';

import React from 'react';

export interface SocialLinkItem {
  platform: 'instagram' | 'tiktok' | 'facebook' | 'x';
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
  { platform: 'instagram', label: 'Instagram', href: 'https://instagram.com/securevest' },
  { platform: 'tiktok', label: 'TikTok', href: 'https://tiktok.com/@securevest' },
  { platform: 'facebook', label: 'Facebook', href: 'https://facebook.com/securevest' },
  { platform: 'x', label: 'X (Twitter)', href: 'https://x.com/securevest' },
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
      case 'tiktok':
        return (
          <svg
            className="social-morph-svg"
            viewBox="0 0 24 24"
            width="18"
            height="18"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.89 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.43 0 .84.09 1.21.25V9.48a6.34 6.34 0 0 0-1.21-.12A6.34 6.34 0 0 0 3 15.69a6.34 6.34 0 0 0 6.34 6.31 6.34 6.34 0 0 0 6.34-6.31V8.67a8.28 8.28 0 0 0 3.91 1.02V6.69z" />
          </svg>
        );
      case 'facebook':
        return (
          <svg
            className="social-morph-svg"
            viewBox="0 0 24 24"
            width="18"
            height="18"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        );
      case 'x':
        return (
          <svg
            className="social-morph-svg"
            viewBox="0 0 24 24"
            width="17"
            height="17"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
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
