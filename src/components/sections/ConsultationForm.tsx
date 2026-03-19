'use client';

import { useState, type FormEvent } from 'react';
import { serviceOptions } from '@/data/content';

type ConsultationFormProps = {
  title: string;
  description: string;
};

export function ConsultationForm({ title, description }: ConsultationFormProps) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setStatus('idle');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error('Failed to submit');
      setStatus('success');
      setForm({ name: '', email: '', service: '', message: '' });
    } catch {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  }

  const inputClasses =
    'w-full bg-white/[0.08] border border-white/10 rounded-md px-4 py-3 text-white text-sm placeholder:text-[#64748B] focus:outline-none focus:border-accent transition-colors';

  return (
    <div className="relative bg-gradient-to-br from-[#1A1A2E] to-[#0f2a1a] rounded-2xl p-12 lg:p-16 overflow-hidden">
      {/* Dot grid overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
        aria-hidden="true"
      />
      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div>
          <h2 className="font-sans text-3xl font-bold text-white mb-3">
            {title}
          </h2>
          <p className="text-[#94A3B8]">{description}</p>
        </div>

        {/* Right */}
        <form
          onSubmit={handleSubmit}
          className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-4"
        >
          <input
            type="text"
            placeholder="Name"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className={inputClasses}
          />
          <input
            type="email"
            placeholder="Email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className={inputClasses}
          />
          <select
            required
            value={form.service}
            onChange={(e) => setForm({ ...form, service: e.target.value })}
            className={inputClasses}
          >
            <option value="" disabled>
              Service Required
            </option>
            {serviceOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          <textarea
            placeholder="Message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className={`${inputClasses} h-20 resize-none`}
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full inline-flex items-center justify-center font-semibold tracking-wide transition-all duration-200 rounded-md bg-accent text-white hover:bg-accent-hover active:bg-accent/90 px-5 py-3 text-sm disabled:opacity-50"
          >
            {loading ? 'Sending...' : 'Get a Quote'}
          </button>

          {status === 'success' && (
            <p className="text-sm text-accent text-center">
              Thank you! We will be in touch shortly.
            </p>
          )}
          {status === 'error' && (
            <p className="text-sm text-red-400 text-center">
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
