'use client';

import React, { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { SITE_PHONE_DISPLAY, SITE_PHONE_TEL } from '@/lib/site';

const COVERAGE = [
  'Life & Term Insurance',
  'Retirement Planning',
  'Estate Planning',
  'Investment Growth',
  'Education Funding',
  'Not Sure Yet',
];
const HOUSEHOLD = ['Just me', 'Me and a partner', 'Family with children', 'Business owner'];
const TIMELINE = ['As soon as possible', 'Within 1 to 3 months', 'Just exploring'];
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function Choice({ options, value, onPick, label }: { options: string[]; value: string; onPick: (v: string) => void; label: string }) {
  return (
    <div className="qz-choices" role="radiogroup" aria-label={label}>
      {options.map((o) => (
        <button key={o} type="button" role="radio" aria-checked={value === o} className={`qz-choice${value === o ? ' is-on' : ''}`} onClick={() => onPick(o)}>
          {o}
        </button>
      ))}
    </div>
  );
}

export default function QuoteWizard() {
  const [step, setStep] = useState(0);
  const [coverage, setCoverage] = useState('');
  const [household, setHousehold] = useState('');
  const [timeline, setTimeline] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [honey, setHoney] = useState('');
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);
  const topRef = useRef<HTMLDivElement>(null);

  const go = (n: number) => {
    setError('');
    setStep(n);
    topRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const next = () => {
    if (step === 0 && !coverage) return setError('Please choose what you would like covered.');
    if (step === 1 && (!household || !timeline)) return setError('Please answer both questions.');
    go(step + 1);
  };

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    const emailOk = EMAIL_RE.test(email.trim());
    const phoneOk = phone.replace(/\D/g, '').length >= 10;
    if (!name.trim()) return setError('Please enter your name.');
    if (!emailOk && !phoneOk) return setError('Enter a valid email or a 10-digit phone number.');
    if ((email && !emailOk) || (phone && !phoneOk)) return setError('Please check your contact details.');

    setBusy(true);
    setError('');
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          source: 'quote',
          name,
          email,
          phone,
          interest: coverage,
          message: `Household: ${household}. Timeline: ${timeline}.`,
          website: honey,
          page: '/quote',
        }),
      });
      if (!res.ok) throw new Error();
      setDone(true);
      topRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } catch {
      setError(`We could not send your request. Please try again or call ${SITE_PHONE_DISPLAY}.`);
    } finally {
      setBusy(false);
    }
  }

  const titles = ['What would you like to protect?', 'A little about your situation', 'Where should we reach you?'];

  return (
    <section className="qz-section">
      <div className="container qz-wrap" ref={topRef}>
        {done ? (
          <motion.div className="qz-card qz-done" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="qz-done-mark" aria-hidden="true">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
            </span>
            <h2>Thank you, {name.split(' ')[0] || 'friend'}.</h2>
            <p>An advisor will review your request and contact you within one business day. Need it sooner? Call us any time during business hours.</p>
            <a className="qz-call" href={SITE_PHONE_TEL}>Call {SITE_PHONE_DISPLAY}</a>
          </motion.div>
        ) : (
          <form className="qz-card" onSubmit={submit} noValidate>
            <div className="qz-progress" aria-label={`Step ${step + 1} of 3`}>
              {[0, 1, 2].map((i) => (
                <span key={i} className={i <= step ? 'is-on' : ''} />
              ))}
            </div>
            <p className="qz-step-label">Step {step + 1} of 3</p>
            <h2 className="qz-title">{titles[step]}</h2>

            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                {step === 0 && <Choice label="Coverage type" options={COVERAGE} value={coverage} onPick={(v) => { setCoverage(v); setError(''); }} />}
                {step === 1 && (
                  <>
                    <p className="qz-q">Who are you planning for?</p>
                    <Choice label="Household" options={HOUSEHOLD} value={household} onPick={(v) => { setHousehold(v); setError(''); }} />
                    <p className="qz-q">When would you like to get started?</p>
                    <Choice label="Timeline" options={TIMELINE} value={timeline} onPick={(v) => { setTimeline(v); setError(''); }} />
                  </>
                )}
                {step === 2 && (
                  <div className="qz-fields">
                    <label>Full name<input value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" placeholder="Jane Smith" /></label>
                    <label>Email<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" placeholder="you@example.com" /></label>
                    <label>Phone<input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} autoComplete="tel" placeholder="(740) 000-0000" /></label>
                    <input className="lead-honey" tabIndex={-1} autoComplete="off" aria-hidden="true" name="website" value={honey} onChange={(e) => setHoney(e.target.value)} />
                    <p className="qz-fine">Email or phone is enough. We only use this to contact you about your quote. Please do not include sensitive IDs.</p>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {error && <p className="qz-error" role="alert">{error}</p>}

            <div className="qz-actions">
              {step > 0 ? (
                <button type="button" className="qz-back" onClick={() => go(step - 1)}>Back</button>
              ) : (
                <span />
              )}
              {step < 2 ? (
                <button type="button" className="qz-next" onClick={next}>Continue</button>
              ) : (
                <button type="submit" className="qz-next" disabled={busy}>{busy ? 'Sending…' : 'Get My Free Quote'}</button>
              )}
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
