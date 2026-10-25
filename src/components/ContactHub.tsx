'use client';

import React, { useState } from 'react';

export default function ContactHub() {
  const [formData, setFormData] = useState({
    firstName: '',
    phone: '',
    email: '',
    focusArea: 'Retirement & Wealth Strategy',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const planningFocusAreas = [
    'Retirement Planning',
    'Life & Term Insurance',
    'Estate & Living Trusts',
    'Tax & Wealth Strategy',
    'General Consultation',
  ];

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.firstName.trim()) {
      errs.firstName = 'Please enter your first name.';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Please enter your phone number.';
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleFocusSelect = (area: string) => {
    setFormData((prev) => ({ ...prev, focusArea: area }));
  };

  return (
    <div className="contact-compact-viewport">
      {/* =========================================================================
          AUTHENTIC FINANCIAL & FIDUCIARY ANIMATED BACKGROUND
          Features:
          1. Precision Compounding Yield Chart Vector & Ledger Lines
          2. Rotating Geometric Fiduciary Bank Seal Watermark
          3. Fiduciary Metric Badges with Monoline Vector Icons (No Emojis)
          ========================================================================= */}
      <div className="fin-animated-bg" aria-hidden="true">
        {/* Deep Fiduciary Navy Atmosphere */}
        <div className="fin-bg-gradient" />

        {/* Subtle Financial Ledger Grid Overlay */}
        <div className="fin-ledger-grid" />

        {/* SVG Compounding Wealth Growth Chart & Fiduciary Watermarks */}
        <svg className="fin-growth-chart-svg" viewBox="0 0 1440 900" preserveAspectRatio="none">
          <defs>
            <linearGradient id="finGoldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(197, 160, 89, 0.05)" />
              <stop offset="35%" stopColor="rgba(197, 160, 89, 0.4)" />
              <stop offset="70%" stopColor="rgba(212, 160, 23, 0.6)" />
              <stop offset="100%" stopColor="rgba(0, 180, 216, 0.5)" />
            </linearGradient>
            <linearGradient id="finChartFill" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(197, 160, 89, 0.08)" />
              <stop offset="100%" stopColor="rgba(197, 160, 89, 0)" />
            </linearGradient>
          </defs>

          {/* Horizontal Financial Value Ledger Lines */}
          <line x1="0" y1="260" x2="1440" y2="260" stroke="rgba(197, 160, 89, 0.07)" strokeWidth="1" strokeDasharray="4 6" />
          <line x1="0" y1="460" x2="1440" y2="460" stroke="rgba(197, 160, 89, 0.07)" strokeWidth="1" strokeDasharray="4 6" />
          <line x1="0" y1="660" x2="1440" y2="660" stroke="rgba(197, 160, 89, 0.07)" strokeWidth="1" strokeDasharray="4 6" />

          {/* Yield Scale Labels */}
          <text x="30" y="254" fill="rgba(197, 160, 89, 0.35)" fontSize="11" fontFamily="JetBrains Mono, monospace" letterSpacing="0.08em">$5.0M+ ASSET TARGET</text>
          <text x="30" y="454" fill="rgba(197, 160, 89, 0.35)" fontSize="11" fontFamily="JetBrains Mono, monospace" letterSpacing="0.08em">$2.5M COMPOUND GOAL</text>
          <text x="30" y="654" fill="rgba(197, 160, 89, 0.35)" fontSize="11" fontFamily="JetBrains Mono, monospace" letterSpacing="0.08em">$1.0M PRESERVATION BASE</text>

          {/* Compound Wealth Ascending Area Fill */}
          <path
            className="fin-chart-area"
            d="M -50 780 C 350 740, 650 560, 950 420 C 1200 300, 1380 200, 1500 160 L 1500 900 L -50 900 Z"
            fill="url(#finChartFill)"
          />

          {/* Primary Compounding Trajectory Line */}
          <path
            className="fin-chart-line line-main"
            d="M -50 780 C 350 740, 650 560, 950 420 C 1200 300, 1380 200, 1500 160"
            stroke="url(#finGoldGrad)"
            strokeWidth="2.5"
            fill="none"
          />

          {/* Secondary Fiduciary Conservative Trajectory Line */}
          <path
            className="fin-chart-line line-secondary"
            d="M -50 810 C 320 780, 680 630, 980 500 C 1220 400, 1380 320, 1500 290"
            stroke="rgba(0, 180, 216, 0.3)"
            strokeWidth="1.5"
            strokeDasharray="6 6"
            fill="none"
          />

          {/* Key Financial Milestones Nodes */}
          <g className="fin-chart-node-group node-group-1">
            <circle cx="650" cy="560" r="5" fill="#c5a059" className="fin-node-dot" />
            <circle cx="650" cy="560" r="14" fill="none" stroke="rgba(197, 160, 89, 0.3)" strokeWidth="1" className="fin-node-ring" />
            <text x="665" y="555" fill="rgba(245, 242, 235, 0.7)" fontSize="10" fontFamily="JetBrains Mono, monospace">YEAR 10: ACCELERATION</text>
          </g>

          <g className="fin-chart-node-group node-group-2">
            <circle cx="950" cy="420" r="5.5" fill="#d4a017" className="fin-node-dot" />
            <circle cx="950" cy="420" r="16" fill="none" stroke="rgba(212, 160, 23, 0.4)" strokeWidth="1" className="fin-node-ring" />
            <text x="965" y="415" fill="rgba(245, 242, 235, 0.85)" fontSize="10" fontFamily="JetBrains Mono, monospace">YEAR 20: TAX-EXEMPT RETIREMENT</text>
          </g>

          <g className="fin-chart-node-group node-group-3">
            <circle cx="1200" cy="300" r="6" fill="#00b4d8" className="fin-node-dot" />
            <circle cx="1200" cy="300" r="18" fill="none" stroke="rgba(0, 180, 216, 0.4)" strokeWidth="1" className="fin-node-ring" />
            <text x="1215" y="295" fill="rgba(245, 242, 235, 0.9)" fontSize="10" fontFamily="JetBrains Mono, monospace">GENERATIONAL LEGACY TRUST</text>
          </g>
        </svg>

        {/* Rotating Fiduciary Watermark Seal (Ultra-Prestigious Banking Rosette) */}
        <div className="fin-seal-container">
          <svg className="fin-seal-svg" viewBox="0 0 400 400" width="400" height="400">
            {/* Concentric Circles */}
            <circle cx="200" cy="200" r="190" stroke="rgba(197, 160, 89, 0.12)" strokeWidth="1" fill="none" />
            <circle cx="200" cy="200" r="175" stroke="rgba(197, 160, 89, 0.18)" strokeWidth="1" strokeDasharray="5 5" fill="none" />
            <circle cx="200" cy="200" r="130" stroke="rgba(197, 160, 89, 0.14)" strokeWidth="1" fill="none" />
            <circle cx="200" cy="200" r="85" stroke="rgba(197, 160, 89, 0.2)" strokeWidth="1" strokeDasharray="3 4" fill="none" />

            {/* Geometric Fiduciary Compass Stars */}
            <line x1="200" y1="10" x2="200" y2="390" stroke="rgba(197, 160, 89, 0.08)" strokeWidth="1" />
            <line x1="10" y1="200" x2="390" y2="200" stroke="rgba(197, 160, 89, 0.08)" strokeWidth="1" />
            <line x1="65" y1="65" x2="335" y2="335" stroke="rgba(197, 160, 89, 0.05)" strokeWidth="1" />
            <line x1="335" y1="65" x2="65" y2="335" stroke="rgba(197, 160, 89, 0.05)" strokeWidth="1" />

            {/* Inner Emblem Motif: Shield of Fiduciary Protection */}
            <path
              d="M 200 145 L 235 160 L 235 205 C 235 230, 200 248, 200 248 C 200 248, 165 230, 165 205 L 165 160 Z"
              stroke="rgba(197, 160, 89, 0.25)"
              strokeWidth="1.5"
              fill="rgba(197, 160, 89, 0.03)"
            />
          </svg>
        </div>

        {/* Floating Desktop Fiduciary Metric Cards (Clean Vector Icons, No Emojis) */}
        <div className="fin-desktop-metrics">
          {/* Left Metric 1: Fiduciary Standard */}
          <div className="fin-metric-badge badge-top-left">
            <div className="fin-badge-icon-box">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3v18"></path>
                <rect x="3" y="7" width="6" height="3" rx="1"></rect>
                <rect x="15" y="7" width="6" height="3" rx="1"></rect>
                <path d="M6 10v7a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-7"></path>
              </svg>
            </div>
            <div className="fin-badge-content">
              <span className="fin-badge-title">100% Fiduciary Standard</span>
              <span className="fin-badge-sub">Legally bound to your best interests</span>
            </div>
          </div>

          {/* Left Metric 2: Asset Defense */}
          <div className="fin-metric-badge badge-bottom-left">
            <div className="fin-badge-icon-box">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                <polyline points="9 12 11 14 15 10"></polyline>
              </svg>
            </div>
            <div className="fin-badge-content">
              <span className="fin-badge-title">Comprehensive Asset Defense</span>
              <span className="fin-badge-sub">Multi-generational trust & risk shielding</span>
            </div>
          </div>

          {/* Right Metric 1: Tax Efficiency */}
          <div className="fin-metric-badge badge-top-right">
            <div className="fin-badge-icon-box">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="20" x2="18" y2="10"></line>
                <line x1="12" y1="20" x2="12" y2="4"></line>
                <line x1="6" y1="20" x2="6" y2="14"></line>
                <polyline points="4 6 12 2 20 6"></polyline>
              </svg>
            </div>
            <div className="fin-badge-content">
              <span className="fin-badge-title">Tax-Advantaged Growth</span>
              <span className="fin-badge-sub">Maximizing net take-home retirement yield</span>
            </div>
          </div>

          {/* Right Metric 2: Zero Carrier Bias */}
          <div className="fin-metric-badge badge-bottom-right">
            <div className="fin-badge-icon-box">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>
            <div className="fin-badge-content">
              <span className="fin-badge-title">Zero Commission Bias</span>
              <span className="fin-badge-sub">Objective guidance across top-tier carriers</span>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          FOREGROUND FOCUSED FORM CANVAS
          ========================================================================= */}
      <div className="container contact-compact-container">
        {/* Header Section */}
        <div className="compact-header-block">
          <h1 className="compact-title">
            Contact <span className="arch-serif-highlight">SecureVest</span>
          </h1>
        </div>

        {/* Floating Focused Card */}
        <div className="compact-card-wrapper">
          <div className="compact-form-card">
            {isSubmitted ? (
              <div className="compact-success-view" role="alert">
                <div className="compact-success-badge">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <h2 className="compact-success-title">
                  Inquiry Received, {formData.firstName || 'Valued Client'}
                </h2>
                <p className="compact-success-desc">
                  Thank you for reaching out regarding <strong>{formData.focusArea}</strong>. An independent SecureVest fiduciary advisor will review your household requirements and contact you within one business day.
                </p>
                <button
                  type="button"
                  className="compact-reset-btn"
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      firstName: '',
                      phone: '',
                      email: '',
                      focusArea: 'Retirement & Wealth Strategy',
                      message: '',
                    });
                  }}
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="compact-form">

                {/* 2. First Name */}
                <div className={`compact-field-group ${errors.firstName ? 'has-error' : ''}`}>
                  <label htmlFor="firstName" className="compact-label">
                    Your First Name<span className="req-star">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="e.g. Eleanor"
                    className="compact-input"
                    autoComplete="given-name"
                  />
                  {errors.firstName && <span className="compact-error">{errors.firstName}</span>}
                </div>

                {/* 3. Two-Column Row for Phone & Email */}
                <div className="compact-row-split">
                  {/* Phone Number */}
                  <div className={`compact-field-group ${errors.phone ? 'has-error' : ''}`}>
                    <label htmlFor="phone" className="compact-label">
                      Phone Number<span className="req-star">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(740) 000-0000"
                      className="compact-input"
                      autoComplete="tel"
                    />
                    {errors.phone && <span className="compact-error">{errors.phone}</span>}
                  </div>

                  {/* Email Address */}
                  <div className={`compact-field-group ${errors.email ? 'has-error' : ''}`}>
                    <label htmlFor="email" className="compact-label">
                      Email Address<span className="req-star">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="client@domain.com"
                      className="compact-input"
                      autoComplete="email"
                    />
                    {errors.email && <span className="compact-error">{errors.email}</span>}
                  </div>
                </div>

                {/* 4. Your Message / Key Objectives */}
                <div className="compact-field-group">
                  <label htmlFor="message" className="compact-label">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Briefly describe your timeline, family protection goals, or current retirement horizon..."
                    className="compact-input compact-textarea"
                  />
                </div>

                {/* Centered Submit Button */}
                <div className="compact-btn-row">
                  <button type="submit" className="compact-submit-pill">
                    <span className="pill-shimmer" aria-hidden="true" />
                    <span className="pill-text">Submit Advisory Inquiry</span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
