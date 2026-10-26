'use client';

import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const SUBMITTED_KEY = 'sv-lead-submitted';
const DELAY_MS = 7000;
const REASK_MS = 60000;

function hasSubmitted(): boolean {
  try {
    return localStorage.getItem(SUBMITTED_KEY) === '1';
  } catch {
    return false;
  }
}
function markSubmitted() {
  try {
    localStorage.setItem(SUBMITTED_KEY, '1');
  } catch {}
}

type Kind = 'email' | 'phone';

export default function LeadPopup() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [kind, setKind] = useState<Kind>('email');
  const [value, setValue] = useState('');
  const [honey, setHoney] = useState('');
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [toast, setToast] = useState<{ msg: string; tone: 'ok' | 'err' } | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Ask a few seconds after every visit until the visitor has submitted once.
  useEffect(() => {
    if (hasSubmitted()) return;
    const t = setTimeout(() => setOpen(true), DELAY_MS);
    return () => clearTimeout(t);
  }, []);

  // Dismissed without submitting: ask once more later in the same visit.
  useEffect(() => {
    if (open || !dismissed || hasSubmitted()) return;
    const t = setTimeout(() => setOpen(true), REASK_MS);
    return () => clearTimeout(t);
  }, [open, dismissed]);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 4500);
    return () => clearTimeout(t);
  }, [toast]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && close();
    window.addEventListener('keydown', onKey);
    inputRef.current?.focus();
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  function close() {
    setDismissed(true);
    setOpen(false);
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    const v = value.trim();
    const ok = kind === 'email' ? /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v) : v.replace(/\D/g, '').length >= 10;
    if (!ok) {
      setError(kind === 'email' ? 'Enter a valid email address' : 'Enter a valid 10-digit phone number');
      return;
    }
    setBusy(true);
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ [kind]: v, source: 'popup', website: honey, page: pathname }),
      });
      if (!res.ok) throw new Error();
      markSubmitted();
      setDismissed(false);
      setOpen(false);
      setValue('');
      setToast({ msg: "You're on the list. We'll be in touch soon.", tone: 'ok' });
    } catch {
      setError('Something went wrong. Please try again.');
      setToast({ msg: 'Could not save your details. Please try again.', tone: 'err' });
    } finally {
      setBusy(false);
    }
  }

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            className="lead-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.target === e.currentTarget && close()}
          >
            <motion.div
              className="lead-dialog"
              role="dialog"
              aria-modal="true"
              aria-labelledby="lead-title"
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.98 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <button type="button" className="lead-close" onClick={close} aria-label="Close">
                &times;
              </button>
              <span className="lead-kicker">Complimentary Family Audit</span>
              <h2 id="lead-title" className="lead-title">
                Get a <em>free</em> plan review.
              </h2>
              <p className="lead-sub">Leave your details and an advisor will reach out. No obligation.</p>

              <div className="lead-tabs" role="tablist" aria-label="Contact method">
                {(['email', 'phone'] as Kind[]).map((k) => (
                  <button
                    key={k}
                    type="button"
                    role="tab"
                    aria-selected={kind === k}
                    className={kind === k ? 'is-on' : ''}
                    onClick={() => {
                      setKind(k);
                      setValue('');
                      setError('');
                      setTimeout(() => inputRef.current?.focus(), 0);
                    }}
                  >
                    {k === 'email' ? 'Email' : 'Phone'}
                    {kind === k && <motion.i layoutId="lead-tab" className="lead-tab-pill" />}
                  </button>
                ))}
              </div>

              <form onSubmit={submit} noValidate className="lead-form">
                <input
                  ref={inputRef}
                  className="lead-input"
                  type={kind === 'email' ? 'email' : 'tel'}
                  inputMode={kind === 'email' ? 'email' : 'tel'}
                  autoComplete={kind === 'email' ? 'email' : 'tel'}
                  placeholder={kind === 'email' ? 'you@example.com' : '(740) 000-0000'}
                  value={value}
                  onChange={(e) => {
                    setValue(e.target.value);
                    setError('');
                  }}
                  aria-label={kind === 'email' ? 'Email address' : 'Phone number'}
                  aria-invalid={!!error}
                />
                {/* Honeypot */}
                <input
                  className="lead-honey"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  name="website"
                  value={honey}
                  onChange={(e) => setHoney(e.target.value)}
                />
                <button type="submit" className="lead-submit" disabled={busy}>
                  {busy ? 'Sending…' : 'Request My Review'}
                </button>
              </form>
              {error && <p className="lead-error" role="alert">{error}</p>}
              <p className="lead-fine">We only use this to contact you about your review.</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="sv-toast-region" aria-live="polite">
        <AnimatePresence>
          {toast && (
            <motion.div
              key={toast.msg}
              className={`sv-toast sv-toast-${toast.tone}`}
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="sv-toast-dot" />
              {toast.msg}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
