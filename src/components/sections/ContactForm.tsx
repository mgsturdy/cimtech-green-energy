'use client';

import { useState, type FormEvent } from 'react';
import { contactInfo } from '@/data/navigation';

export function ContactForm() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
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
      setForm({ firstName: '', lastName: '', email: '', phone: '', address: '', message: '' });
    } catch {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  }

  const inputClasses =
    'w-full border border-border rounded-md px-4 py-3 text-sm bg-surface focus:outline-none focus:border-accent transition-colors';
  const labelClasses = 'text-sm font-medium text-foreground mb-1.5 block';

  const socialKeys = Object.keys(contactInfo.social) as Array<keyof typeof contactInfo.social>;
  const socialLabels: Record<string, string> = {
    facebook: 'fb',
    twitter: 'tw',
    linkedin: 'in',
    youtube: 'yt',
    instagram: 'ig',
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Left: Form */}
      <form onSubmit={handleSubmit} className="grid gap-4">
        {/* Row 1: First + Last Name */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className={labelClasses}>
              First Name
            </label>
            <input
              id="firstName"
              type="text"
              required
              value={form.firstName}
              onChange={(e) => setForm({ ...form, firstName: e.target.value })}
              className={inputClasses}
            />
          </div>
          <div>
            <label htmlFor="lastName" className={labelClasses}>
              Last Name
            </label>
            <input
              id="lastName"
              type="text"
              required
              value={form.lastName}
              onChange={(e) => setForm({ ...form, lastName: e.target.value })}
              className={inputClasses}
            />
          </div>
        </div>

        {/* Row 2: Email + Phone */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className={labelClasses}>
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className={inputClasses}
            />
          </div>
          <div>
            <label htmlFor="phone" className={labelClasses}>
              Phone
            </label>
            <input
              id="phone"
              type="tel"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className={inputClasses}
            />
          </div>
        </div>

        {/* Row 3: Address */}
        <div>
          <label htmlFor="address" className={labelClasses}>
            Address
          </label>
          <input
            id="address"
            type="text"
            value={form.address}
            onChange={(e) => setForm({ ...form, address: e.target.value })}
            className={inputClasses}
          />
        </div>

        {/* Row 4: Message */}
        <div>
          <label htmlFor="message" className={labelClasses}>
            Message
          </label>
          <textarea
            id="message"
            required
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className={`${inputClasses} h-32 resize-none`}
          />
        </div>

        {/* Row 5: Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full inline-flex items-center justify-center font-semibold tracking-wide transition-all duration-200 rounded-md bg-accent text-white hover:bg-accent-hover active:bg-accent/90 px-5 py-3 text-sm disabled:opacity-50"
        >
          {loading ? 'Transmitting...' : 'Transmit'}
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

      {/* Right: Contact Info */}
      <div className="bg-surface-elevated rounded-xl p-8">
        <h2 className="font-sans text-xl font-bold mb-6">Contact Information</h2>

        <div className="flex gap-3 mb-4">
          <span className="text-sm font-medium text-foreground w-16 shrink-0">Address</span>
          <span className="text-sm text-muted">{contactInfo.address}</span>
        </div>
        <div className="flex gap-3 mb-4">
          <span className="text-sm font-medium text-foreground w-16 shrink-0">Phone</span>
          <span className="text-sm text-muted">{contactInfo.phone}</span>
        </div>
        <div className="flex gap-3 mb-4">
          <span className="text-sm font-medium text-foreground w-16 shrink-0">Email</span>
          <span className="text-sm text-muted">{contactInfo.email}</span>
        </div>
        <div className="flex gap-3 mb-4">
          <span className="text-sm font-medium text-foreground w-16 shrink-0">Hours</span>
          <span className="text-sm text-muted">{contactInfo.hours}</span>
        </div>

        {/* Social links */}
        <div className="flex gap-2 mt-6">
          {socialKeys.map((key) => (
            <a
              key={key}
              href={contactInfo.social[key]}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={key}
              className="w-9 h-9 border border-border rounded-md flex items-center justify-center text-xs text-muted hover:border-accent hover:text-accent transition-colors"
            >
              {socialLabels[key] ?? key.slice(0, 2)}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
