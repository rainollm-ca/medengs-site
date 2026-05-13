import { NextResponse } from 'next/server';

type ContactPayload = {
  name?: string;
  clinic?: string;
  email?: string;
  phone?: string;
  equipment?: string;
  urgency?: string;
  message?: string;
  token?: string;
};

const TURNSTILE_VERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';

function clean(value: unknown) {
  return typeof value === 'string' ? value.trim().slice(0, 2000) : '';
}

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as ContactPayload | null;
  if (!body) return NextResponse.json({ ok: false, error: 'Invalid request.' }, { status: 400 });

  const name = clean(body.name);
  const email = clean(body.email);
  const phone = clean(body.phone);
  const message = clean(body.message);
  const token = clean(body.token);

  if (!name || !email || !phone || !message) {
    return NextResponse.json({ ok: false, error: 'Please complete all required fields.' }, { status: 400 });
  }

  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (secret) {
    if (!token) return NextResponse.json({ ok: false, error: 'Captcha verification is required.' }, { status: 400 });
    const verify = await fetch(TURNSTILE_VERIFY_URL, {
      method: 'POST',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ secret, response: token }),
    }).then((r) => r.json()).catch(() => ({ success: false }));
    if (!verify.success) return NextResponse.json({ ok: false, error: 'Captcha verification failed.' }, { status: 400 });
  }

  const payload = {
    name,
    clinic: clean(body.clinic),
    email,
    phone,
    equipment: clean(body.equipment),
    urgency: clean(body.urgency),
    message,
    source: 'medengs.rainomotion.com',
    submittedAt: new Date().toISOString(),
  };

  if (process.env.CONTACT_WEBHOOK_URL) {
    await fetch(process.env.CONTACT_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(payload),
    }).catch(() => null);
  }

  return NextResponse.json({ ok: true, message: 'Request received. MedEngs will follow up shortly.' });
}
