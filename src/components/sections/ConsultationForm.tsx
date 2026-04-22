'use client';

import { useState } from 'react';

type ConsultationFormProps = { title: string; description: string };

const inputBase =
  'w-full bg-transparent border-b border-[var(--color-border-strong)] py-4 text-[var(--color-foreground)] placeholder:text-[var(--color-subtle)] focus:outline-none focus:border-[var(--color-accent)] transition-colors';

export function ConsultationForm({ title, description }: ConsultationFormProps) {
  const [sent, setSent] = useState(false);
  return (
    <div className="grid grid-cols-12 gap-8 border border-[var(--color-border)] bg-[var(--color-surface)] p-6 md:p-16 corner-markers">
      <div className="col-span-12 md:col-span-5">
        <p className="mono-label text-[var(--color-accent)] mb-4">● RESPONDING WITHIN 24H</p>
        <h2 className="font-semibold text-[var(--text-h2)] leading-[1.05] mb-4">{title}</h2>
        <p className="text-[var(--color-muted)] max-w-sm">{description}</p>
      </div>
      <form
        className="col-span-12 md:col-span-7 flex flex-col gap-6"
        onSubmit={(e) => {
          e.preventDefault();
          setSent(true);
        }}
      >
        <input required className={inputBase} placeholder="FULL NAME" />
        <input required type="email" className={inputBase} placeholder="EMAIL" />
        <input className={inputBase} placeholder="COMPANY" />
        <textarea rows={4} className={`${inputBase} resize-none`} placeholder="PROJECT BRIEF" />
        <button
          type="submit"
          className="self-start mono-label bg-[var(--color-accent)] text-[var(--color-background)] px-6 py-4 hover:bg-[var(--color-accent-hover)] transition-colors"
        >
          {sent ? 'TRANSMISSION RECEIVED' : 'OPEN A LINE →'}
        </button>
      </form>
    </div>
  );
}
