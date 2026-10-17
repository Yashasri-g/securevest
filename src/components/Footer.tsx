'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setSubmitted(true);
    setEmail('');
  };

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Col 1: Brand */}
          <div className="footer-brand">
            <Link href="/" aria-label="SecureVest Solutions">
              <img
                src="/images/logo.png"
                alt="SecureVest Solutions"
                className="brand-logo-img"
                style={{ filter: 'brightness(0) invert(1)', height: '36px' }}
              />
            </Link>
            <p>
              Secure your family's future with our tailored asset protection, term insurance, retirement planning, and wealth management solutions.
            </p>
            <div style={{ marginTop: '1.25rem', fontWeight: 700, color: 'var(--color-accent-400)', fontSize: '0.95rem' }}>
              Plan Today ! Protect Tomorrow !
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="footer-col">
            <h4 className="footer-title">Navigation</h4>
            <ul className="footer-links">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/financial-planning-services">Services</Link></li>
              <li><Link href="/resources">Resources</Link></li>
              <li><Link href="/blog">Blog &amp; Insights</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="footer-col">
            <h4 className="footer-title">Services</h4>
            <ul className="footer-links">
              <li><Link href="/financial-planning-services">Goal Setting &amp; Planning</Link></li>
              <li><Link href="/financial-planning-services">Risk Management</Link></li>
              <li><Link href="/financial-planning-services">Retirement Planning</Link></li>
              <li><Link href="/financial-planning-services">Life &amp; Term Insurance</Link></li>
              <li><Link href="/financial-planning-services">Estate Planning &amp; Trusts</Link></li>
            </ul>
          </div>

          {/* Col 4: Contact & Newsletter */}
          <div className="footer-col">
            <h4 className="footer-title">Contact &amp; Connect</h4>
            <div className="footer-contact-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <a href="mailto:contact@securevestsolutions.com">contact@securevestsolutions.com</a>
            </div>
            <div className="footer-contact-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <a href="tel:7403032525">+1 (740) 303-2525</a>
            </div>
            <div className="footer-contact-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              <span>Mon – Fri: 9:00 AM – 5:00 PM</span>
            </div>

            <div className="newsletter-form-container" style={{ marginTop: '1.5rem' }}>
              <div style={{ fontSize: '0.85rem', color: 'var(--color-slate-300)', marginBottom: '0.5rem' }}>
                Subscribe to Financial Insights:
              </div>
              {submitted ? (
                <div style={{ color: 'var(--color-accent-400)', fontSize: '0.9rem', padding: '0.5rem 0' }}>
                  ✓ Thank you! You are subscribed to SecureVest updates.
                </div>
              ) : (
                <form className="footer-newsletter-form" onSubmit={handleSubscribe} aria-label="Subscribe to newsletter">
                  <input
                    type="email"
                    className="footer-newsletter-input"
                    placeholder="Enter your email"
                    aria-label="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button type="submit" className="btn btn-accent btn-sm">Subscribe</button>
                </form>
              )}
              {error && (
                <div style={{ color: 'var(--color-error)', fontSize: '0.8rem', marginTop: '0.35rem' }}>
                  {error}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div>&copy; 2024–2026 SecureVest Solutions. All rights reserved.</div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <Link href="/financial-planning-services">Services</Link>
            <Link href="/resources">Resources</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
