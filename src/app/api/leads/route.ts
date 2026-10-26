import { NextResponse } from 'next/server';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const MAX_BODY_BYTES = 10_000;
const RATE_LIMIT = 5; // submissions per IP per window
const RATE_WINDOW_MS = 60_000;

// Best-effort, per-instance limiter. Use an edge/WAF limit in production for real protection.
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > RATE_LIMIT;
}

const clean = (v: unknown, max: number) => (typeof v === 'string' ? v.trim().slice(0, max) : '');

export async function POST(request: Request) {
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
  if (rateLimited(ip)) {
    return NextResponse.json({ ok: false, error: 'Too many requests' }, { status: 429 });
  }

  const raw = await request.text();
  if (raw.length > MAX_BODY_BYTES) {
    return NextResponse.json({ ok: false, error: 'Payload too large' }, { status: 413 });
  }

  let body: Record<string, unknown>;
  try {
    body = JSON.parse(raw);
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid request' }, { status: 400 });
  }

  // Honeypot: real visitors never fill this in.
  if (clean(body.website, 50)) return NextResponse.json({ ok: true });

  const email = clean(body.email, 120);
  const phone = clean(body.phone, 40);
  const emailOk = EMAIL_RE.test(email);
  const phoneOk = phone.replace(/\D/g, '').length >= 10;

  // A lead needs at least one working way to reach the person.
  if (!emailOk && !phoneOk) {
    return NextResponse.json({ ok: false, error: 'A valid email or phone number is required' }, { status: 422 });
  }
  if ((email && !emailOk) || (phone && !phoneOk)) {
    return NextResponse.json({ ok: false, error: 'Please check your contact details' }, { status: 422 });
  }

  const lead = {
    source: clean(body.source, 30) || 'unknown',
    name: clean(body.name, 80),
    email,
    phone,
    interest: clean(body.interest, 80),
    message: clean(body.message, 2000),
    page: clean(body.page, 200) || '/',
    at: new Date().toISOString(),
  };

  // Forward to your CRM / Zapier / Slack / Sheets webhook when configured.
  const hook = process.env.LEAD_WEBHOOK_URL;
  if (!hook) {
    console.log('[leads] new lead (set LEAD_WEBHOOK_URL to forward)', lead);
    return NextResponse.json({ ok: true });
  }

  try {
    const res = await fetch(hook, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(lead),
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[leads] webhook failed', err);
    return NextResponse.json({ ok: false, error: 'Could not save right now' }, { status: 502 });
  }
}
