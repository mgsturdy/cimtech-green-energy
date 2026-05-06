'use client';

import { useState, type ChangeEvent, type FormEvent } from 'react';

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';
const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? '';

type ConsultationFormProps = { title: string; description: string };

const inputBase =
  'w-full bg-transparent border-b border-[var(--color-border-strong)] py-4 text-[var(--color-foreground)] placeholder:text-[var(--color-subtle)] focus:outline-none focus:border-[var(--color-accent)] transition-colors';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export function ConsultationForm({ title, description }: ConsultationFormProps) {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState<string | null>(null);

  function update<K extends keyof typeof form>(key: K) {
    return (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (status === 'submitting') return;

    if (!ACCESS_KEY) {
      setError('Form is not configured yet — add NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY.');
      setStatus('error');
      return;
    }

    setError(null);
    setStatus('submitting');

    const data = new FormData();
    data.append('access_key', ACCESS_KEY);
    data.append('subject', `Quick inquiry — ${form.name}${form.company ? ` (${form.company})` : ''}`);
    data.append('from_name', form.name || 'CIMtech contact form');
    data.append('replyto', form.email);
    data.append('botcheck', '');
    data.append('Name', form.name);
    data.append('Email', form.email);
    if (form.company) data.append('Company', form.company);
    data.append('Message', form.message);

    try {
      const res = await fetch(WEB3FORMS_ENDPOINT, { method: 'POST', body: data });
      const json = (await res.json().catch(() => ({}))) as { success?: boolean; message?: string };
      if (!res.ok || !json.success) {
        throw new Error(json.message ?? 'Submission failed.');
      }
      setStatus('success');
      setForm({ name: '', email: '', company: '', message: '' });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Submission failed.');
      setStatus('error');
    }
  }

  return (
    <div className="grid grid-cols-12 gap-8 border border-[var(--color-border)] bg-[var(--color-surface)] p-6 md:p-16 corner-markers">
      <div className="col-span-12 md:col-span-5">
        <p className="mono-label text-[var(--color-accent)] mb-4">● RESPONDING WITHIN 24H</p>
        <h2 className="font-semibold text-[var(--text-h2)] leading-[1.05] mb-4">{title}</h2>
        <p className="text-[var(--color-muted)] max-w-sm">{description}</p>
      </div>
      <form className="col-span-12 md:col-span-7 flex flex-col gap-6" onSubmit={handleSubmit}>
        <input
          required
          className={inputBase}
          placeholder="FULL NAME"
          value={form.name}
          onChange={update('name')}
          autoComplete="name"
        />
        <input
          required
          type="email"
          className={inputBase}
          placeholder="EMAIL"
          value={form.email}
          onChange={update('email')}
          autoComplete="email"
        />
        <input
          className={inputBase}
          placeholder="COMPANY"
          value={form.company}
          onChange={update('company')}
          autoComplete="organization"
        />
        <textarea
          required
          rows={4}
          className={`${inputBase} resize-none`}
          placeholder="PROJECT BRIEF"
          value={form.message}
          onChange={update('message')}
        />
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="self-start mono-label bg-[var(--color-accent)] text-[var(--color-background)] px-6 py-4 hover:bg-[var(--color-accent-hover)] transition-colors disabled:opacity-50"
          >
            {status === 'submitting'
              ? 'TRANSMITTING…'
              : status === 'success'
                ? 'TRANSMISSION RECEIVED'
                : 'OPEN A LINE →'}
          </button>
          {status === 'success' && (
            <p className="mono-label text-[var(--color-accent)]">
              Thank you. We will respond within 24 hours.
            </p>
          )}
          {status === 'error' && error && <p className="mono-label text-red-400">{error}</p>}
        </div>
      </form>
    </div>
  );
}
