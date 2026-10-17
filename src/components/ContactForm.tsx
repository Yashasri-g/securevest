'use client';

import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'General Financial Planning',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (formData.name.trim().length < 2) {
      errs.name = 'Please enter your full name.';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }
    if (formData.phone.trim().length < 7) {
      errs.phone = 'Please enter a valid telephone number.';
    }
    if (formData.message.trim().length < 5) {
      errs.message = 'Please enter a brief message describing your goals.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    if (errors[id]) {
      setErrors((prev) => ({ ...prev, [id]: '' }));
    }
  };

  if (submitted) {
    return (
      <div className="form-alert success" role="alert" style={{ display: 'flex' }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
        <div>
          <strong>Thank you, {formData.name}!</strong><br />
          Your message has been received. A licensed SecureVest Solutions advisor will review your request and get in touch with you shortly.
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Client contact and inquiry form">
      <div className="grid-2" style={{ gap: '1.25rem' }}>
        <div className={`form-group ${errors.name ? 'has-error' : ''}`}>
          <label htmlFor="name" className="form-label">
            Your Full Name <span className="required-mark">*</span>
          </label>
          <input
            type="text"
            id="name"
            className="form-control"
            placeholder="e.g. John Doe"
            value={formData.name}
            onChange={handleChange}
            required
            autoComplete="name"
            aria-invalid={!!errors.name}
          />
          {errors.name && <div className="form-error">{errors.name}</div>}
        </div>

        <div className={`form-group ${errors.email ? 'has-error' : ''}`}>
          <label htmlFor="email" className="form-label">
            Email Address <span className="required-mark">*</span>
          </label>
          <input
            type="email"
            id="email"
            className="form-control"
            placeholder="name@example.com"
            value={formData.email}
            onChange={handleChange}
            required
            autoComplete="email"
            aria-invalid={!!errors.email}
          />
          {errors.email && <div className="form-error">{errors.email}</div>}
        </div>
      </div>

      <div className="grid-2" style={{ gap: '1.25rem' }}>
        <div className={`form-group ${errors.phone ? 'has-error' : ''}`}>
          <label htmlFor="phone" className="form-label">
            Phone Number <span className="required-mark">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            className="form-control"
            placeholder="(555) 000-0000"
            value={formData.phone}
            onChange={handleChange}
            required
            autoComplete="tel"
            aria-invalid={!!errors.phone}
          />
          {errors.phone && <div className="form-error">{errors.phone}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="service" className="form-label">Area of Interest</label>
          <select
            id="service"
            className="form-select"
            value={formData.service}
            onChange={handleChange}
          >
            <option value="General Financial Planning">General Financial Planning</option>
            <option value="Retirement Planning">Retirement Planning</option>
            <option value="Term & Life Insurance">Term &amp; Life Insurance</option>
            <option value="Estate Planning & Trusts">Estate Planning &amp; Trusts</option>
            <option value="College / Educational Savings">College / Educational Savings</option>
            <option value="Asset Protection & Tax Strategies">Asset Protection &amp; Tax Strategies</option>
          </select>
        </div>
      </div>

      <div className={`form-group ${errors.message ? 'has-error' : ''}`}>
        <label htmlFor="message" className="form-label">
          How Can We Help You? <span className="required-mark">*</span>
        </label>
        <textarea
          id="message"
          className="form-textarea"
          placeholder="Tell us about your family goals, timeline, or current questions..."
          value={formData.message}
          onChange={handleChange}
          required
          aria-invalid={!!errors.message}
        />
        {errors.message && <div className="form-error">{errors.message}</div>}
      </div>

      <button type="submit" className="btn btn-accent btn-lg btn-full">
        Send Inquiry Message
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <line x1="22" y1="2" x2="11" y2="13"></line>
          <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
        </svg>
      </button>
      <p style={{ fontSize: '0.8rem', color: 'var(--color-slate-500)', textAlign: 'center', marginTop: '1rem', marginBottom: 0 }}>
        🔒 Your information is completely confidential and never shared with third parties.
      </p>
    </form>
  );
}
