import React from 'react';
import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import FaqAccordion from '@/components/FaqAccordion';

export const metadata: Metadata = {
  title: 'Contact Us & Schedule Consultation',
  description:
    'Get in touch with SecureVest Solutions. Schedule a free consultation, call us at (740) 303-2525, or send an inquiry for tailored family wealth and insurance planning.',
};

export default function ContactPage() {
  const contactFaqs = [
    {
      question: 'Is the initial consultation really free of charge?',
      answer:
        'Yes, 100%. Our initial consultation is a zero-obligation discussion designed to understand your family’s current situation, answer questions regarding insurance or retirement, and determine if our services are the right fit for your goals.',
    },
    {
      question: 'What should I prepare before our appointment?',
      answer:
        'You don’t need to bring detailed paperwork to the first introductory call. If you have approximate numbers for monthly expenses, retirement savings, or current life insurance policies, that is helpful, but we’ll guide you step-by-step through whatever information is needed.',
    },
    {
      question: 'Do you work with clients virtually or only locally?',
      answer:
        'We work with clients both virtually via secure video conferences and phone calls, as well as in-person by appointment. Virtual meetings allow busy families to review plans comfortably from home.',
    },
    {
      question: 'How does SecureVest Solutions choose insurance and investment providers?',
      answer:
        'We analyze independent top-rated carriers across financial strength, customer claim satisfaction, underwriting flexibility, and cost competitiveness. Our recommendations are customized strictly for what benefits your family.',
    },
  ];

  return (
    <>
      <section className="section section-bg-slate" style={{ paddingTop: '4rem', paddingBottom: '3.5rem' }}>
        <div className="container container-narrow" style={{ textAlign: 'center' }}>
          <span className="section-eyebrow">Get In Touch</span>
          <h1>Contact SecureVest Solutions</h1>
          <p className="lead">
            Reach out for asset security and insurance solutions today. Secure your family's future with our expert planning and insurance solutions. We are here to assist you in every step.
          </p>
        </div>
      </section>

      {/* Contact & Consultation Hub */}
      <section className="section" aria-labelledby="contact-hub-heading">
        <div className="container contact-layout">
          {/* Left: Validated Form */}
          <div className="card" style={{ padding: 'clamp(2rem, 4vw, 3rem)' }}>
            <h2 id="contact-hub-heading" style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>
              Send Us a Message
            </h2>
            <p style={{ marginBottom: '2rem' }}>
              Fill out the form below and an advisor will review your goals and reply within one business day.
            </p>
            <ContactForm />
          </div>

          {/* Right: Contact Information & Direct Scheduling */}
          <div className="contact-card-info">
            <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Contact Information</h2>
            <p style={{ color: 'var(--color-slate-600)', marginBottom: '1.5rem' }}>
              Connect with us directly via phone, email, or schedule a free virtual or office consultation.
            </p>

            <div className="contact-info-list">
              {/* Phone */}
              <div className="contact-info-row">
                <div className="contact-info-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div className="contact-info-text">
                  <h4>Direct Phone</h4>
                  <a href="tel:7403032525">+1 (740) 303-2525</a>
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-slate-500)', marginTop: '0.25rem' }}>Call or leave a voicemail 24/7</p>
                </div>
              </div>

              {/* Email */}
              <div className="contact-info-row">
                <div className="contact-info-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div className="contact-info-text">
                  <h4>Email Address</h4>
                  <a href="mailto:contact@securevestsolutions.com">contact@securevestsolutions.com</a>
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-slate-500)', marginTop: '0.25rem' }}>Average response under 24 hours</p>
                </div>
              </div>

              {/* Office Hours */}
              <div className="contact-info-row">
                <div className="contact-info-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <div className="contact-info-text">
                  <h4>Business Hours</h4>
                  <p>Monday – Friday: 9:00 AM – 5:00 PM</p>
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-slate-500)', marginTop: '0.25rem' }}>Evening appointments available by request</p>
                </div>
              </div>

              {/* Consultations Location */}
              <div className="contact-info-row">
                <div className="contact-info-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div className="contact-info-text">
                  <h4>Advisory Consultations</h4>
                  <p>Virtual (Zoom / Phone) &amp; Office Appointments</p>
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-slate-500)', marginTop: '0.25rem' }}>Serving families across the United States</p>
                </div>
              </div>
            </div>

            {/* Calendly Booking Highlight Card */}
            <div className="booking-highlight-card">
              <h3>Want to Skip the Form?</h3>
              <p>
                Pick a convenient time directly on our live calendar for a 20-minute introductory strategy session.
              </p>
              <a
                href="https://calendly.com/securevestsolutions/appointment"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-accent btn-full"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                Open Online Calendar (Calendly)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section section-bg-slate" aria-labelledby="contact-faq-heading">
        <div className="container container-narrow">
          <div className="section-header">
            <span className="section-eyebrow">Frequently Asked Questions</span>
            <h2 id="contact-faq-heading">What to Expect During Your Consultation</h2>
            <p>Common questions from first-time clients seeking financial security.</p>
          </div>

          <FaqAccordion items={contactFaqs} />
        </div>
      </section>
    </>
  );
}
