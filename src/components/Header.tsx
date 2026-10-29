'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeButton from './ThemeButton';

interface HeaderProps {
  onOpenBooking: () => void;
}

export default function Header({ onOpenBooking }: HeaderProps) {
  const pathname = usePathname();
  const [hovered, setHovered] = useState<number | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route navigation (state adjusted during render, not in an effect)
  const [drawerPath, setDrawerPath] = useState(pathname);
  if (drawerPath !== pathname) {
    setDrawerPath(pathname);
    setIsMobileOpen(false);
  }

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/financial-planning-services' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* Aceternity UI: Simple Navbar with Hover Effects (Floating Pill Design) */}
      {/* Reference: https://ui.aceternity.com/live-preview/simple-navbar-with-hover-effects */}
      <div className={`aceternity-navbar-wrapper ${isScrolled ? 'is-scrolled' : ''}`}>
        {/* Desktop Floating Pill Navbar */}
        <div className="aceternity-navbar-desktop-container">
          <motion.header
            className="aceternity-navbar-desktop"
            initial={{ y: -16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            id="siteHeader"
          >
            {/* Brand Logo */}
            <Link href="/" className="aceternity-brand-link" aria-label="SecureVest Solutions Homepage">
              <img
                src="/images/logo-icon.png"
                alt="SecureVest Solutions Emblem"
                className="brand-logo-img"
                width={48}
                height={48}
              />
              <span className="brand-logo-text">
                <span className="brand-logo-name">SECUREVEST</span>
                <span className="brand-logo-tag">SOLUTIONS</span>
              </span>
            </Link>

            {/* Centered Navigation Links with Sliding Background Pill on Hover */}
            <nav
              className="aceternity-nav-links"
              onMouseLeave={() => setHovered(null)}
              aria-label="Primary Navigation"
            >
              {navItems.map((item, idx) => {
                const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onMouseEnter={() => setHovered(idx)}
                    className={`aceternity-nav-item ${isActive ? 'active' : ''}`}
                  >
                    {/* Aceternity Framer Motion Animated Gliding Pill */}
                    {hovered === idx && (
                      <motion.div
                        layoutId="aceternity-hover-pill"
                        className="aceternity-hover-pill"
                        transition={{
                          type: 'spring',
                          bounce: 0.22,
                          duration: 0.45,
                        }}
                      />
                    )}
                    <span className="aceternity-nav-text">
                      {item.label}
                      {isActive && <span className="aceternity-active-dot" aria-hidden="true" />}
                    </span>
                  </Link>
                );
              })}
            </nav>

            {/* Right Action Cluster: Direct Phone & Aceternity Style Pill Button */}
            <div className="aceternity-actions">
              <a href="tel:7403032525" className="aceternity-phone-link" aria-label="Call SecureVest at (740) 303-2525">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>(740) 303-2525</span>
              </a>

              <ThemeButton
                variant="gold"
                size="sm"
                onClick={onOpenBooking}
              >
                Book Appointment
              </ThemeButton>
            </div>
          </motion.header>
        </div>

        {/* Mobile Floating Pill Navbar (Aceternity Mobile Pattern) */}
        <div className="aceternity-navbar-mobile-container">
          <motion.div
            className="aceternity-navbar-mobile"
            animate={{ borderRadius: isMobileOpen ? '20px' : '9999px' }}
            transition={{ duration: 0.25 }}
          >
            <div className="aceternity-mobile-bar">
              <Link href="/" className="aceternity-brand-link" onClick={() => setIsMobileOpen(false)} aria-label="SecureVest Solutions Homepage">
                <img
                  src="/images/logo-icon.png"
                  alt="SecureVest Solutions Emblem"
                  className="brand-logo-img"
                  width={38}
                  height={38}
                />
                <span className="brand-logo-text">
                  <span className="brand-logo-name">SECUREVEST</span>
                  <span className="brand-logo-tag">SOLUTIONS</span>
                </span>
              </Link>

              <button
                type="button"
                className="aceternity-mobile-toggle"
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                aria-label={isMobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={isMobileOpen}
              >
                {isMobileOpen ? (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                ) : (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="4" y1="7" x2="20" y2="7" />
                    <line x1="4" y1="12" x2="20" y2="12" />
                    <line x1="4" y1="17" x2="20" y2="17" />
                  </svg>
                )}
              </button>
            </div>

            <AnimatePresence>
              {isMobileOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                  className="aceternity-mobile-menu"
                >
                  <div className="aceternity-mobile-links">
                    {navItems.map((item) => {
                      const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setIsMobileOpen(false)}
                          className={`aceternity-mobile-item ${isActive ? 'active' : ''}`}
                        >
                          <span>{item.label}</span>
                          {isActive && <span className="aceternity-mobile-active-badge">Active</span>}
                        </Link>
                      );
                    })}
                  </div>

                  <div className="aceternity-mobile-actions">
                    <ThemeButton
                      variant="gold"
                      size="md"
                      fullWidth
                      onClick={() => {
                        setIsMobileOpen(false);
                        onOpenBooking();
                      }}
                    >
                      Book Appointment
                    </ThemeButton>

                    <a
                      href="tel:7403032525"
                      className="aceternity-mobile-call-btn"
                      onClick={() => setIsMobileOpen(false)}
                    >
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                      Direct Call (740) 303-2525
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </>
  );
}
