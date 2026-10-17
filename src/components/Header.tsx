'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface HeaderProps {
  onOpenBooking: () => void;
}

export default function Header({ onOpenBooking }: HeaderProps) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close drawer on path change
  useEffect(() => {
    setIsDrawerOpen(false);
  }, [pathname]);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/financial-planning-services' },
    { label: 'Resources', href: '/resources' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <header className={`site-header ${isScrolled ? 'scrolled' : ''}`} id="siteHeader">
        <div className="container header-container">
          <Link href="/" className="brand-wrapper" aria-label="SecureVest Solutions Homepage">
            <img
              src="/images/logo.png"
              alt="SecureVest Solutions Logo"
              className="brand-logo-img"
              width={220}
              height={38}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="nav-desktop-wrapper" aria-label="Primary Navigation">
            <ul className="nav-desktop">
              {navItems.map((item) => {
                const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`nav-link ${isActive ? 'active' : ''}`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Header Actions */}
          <div className="header-actions">
            <a href="tel:7403032525" className="phone-quick-call" aria-label="Call SecureVest at 740-303-2525">
              <span className="phone-icon-pulse">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </span>
              (740) 303-2525
            </a>
            <button
              type="button"
              className="btn btn-primary btn-sm"
              onClick={onOpenBooking}
            >
              Book Appointment
            </button>
            <button
              type="button"
              className="mobile-toggle-btn"
              id="mobileMenuToggle"
              aria-label="Open menu"
              aria-expanded={isDrawerOpen}
              aria-controls="mobileDrawer"
              onClick={() => setIsDrawerOpen(true)}
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Backdrop */}
      <div
        className={`drawer-backdrop ${isDrawerOpen ? 'open' : ''}`}
        id="drawerBackdrop"
        aria-hidden={!isDrawerOpen}
        onClick={() => setIsDrawerOpen(false)}
      />

      {/* Mobile Drawer */}
      <aside
        className={`mobile-drawer ${isDrawerOpen ? 'open' : ''}`}
        id="mobileDrawer"
        aria-hidden={!isDrawerOpen}
        aria-label="Mobile Navigation"
      >
        <div className="drawer-header">
          <img src="/images/logo.png" alt="SecureVest Solutions" className="brand-logo-img" style={{ height: '32px' }} />
          <button
            type="button"
            className="drawer-close-btn"
            id="drawerCloseBtn"
            aria-label="Close menu"
            onClick={() => setIsDrawerOpen(false)}
          >
            &times;
          </button>
        </div>
        <ul className="drawer-nav">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={isActive ? 'active' : ''}
                  onClick={() => setIsDrawerOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="drawer-footer">
          <a href="tel:7403032525" className="btn btn-outline btn-full">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            Call (740) 303-2525
          </a>
          <button
            type="button"
            className="btn btn-accent btn-full"
            onClick={() => {
              setIsDrawerOpen(false);
              onOpenBooking();
            }}
          >
            Book Appointment
          </button>
        </div>
      </aside>
    </>
  );
}
