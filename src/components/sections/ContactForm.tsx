'use client';

import { useRef, useState, type ChangeEvent, type DragEvent, type FormEvent } from 'react';

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';
const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? '';

const MAX_TOTAL_BYTES = 10 * 1024 * 1024;

const inputBase =
  'w-full bg-transparent border-b border-[var(--color-border-strong)] py-4 text-[var(--color-foreground)] placeholder:text-[var(--color-subtle)] focus:outline-none focus:border-[var(--color-accent)] transition-colors';

type Status = 'idle' | 'submitting' | 'success' | 'error';

function formatBytes(bytes: number): string {
  const units = ['B', 'KB', 'MB', 'GB'];
  let i = 0;
  let n = bytes;
  while (n >= 1024 && i < units.length - 1) {
    n /= 1024;
    i++;
  }
  return `${n.toFixed(n < 10 && i > 0 ? 1 : 0)} ${units[i]}`;
}

type ContactFormProps = {
  title: string;
  description: string;
};

export function ContactForm({ title, description }: ContactFormProps) {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [files, setFiles] = useState<File[]>([]);
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState<string | null>(null);
  const [dragOver, setDragOver] = useState(false);
  const fileInput = useRef<HTMLInputElement>(null);

  const totalBytes = files.reduce((sum, f) => sum + f.size, 0);
  const overLimit = totalBytes > MAX_TOTAL_BYTES;

  function update<K extends keyof typeof form>(key: K) {
    return (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));
  }

  function addFiles(incoming: FileList | File[]) {
    setError(null);
    const next = [...files, ...Array.from(incoming)];
    setFiles(next);
  }

  function onFileChange(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.files?.length) {
      addFiles(e.target.files);
      e.target.value = '';
    }
  }

  function onDrop(e: DragEvent<HTMLDivElement>) {
    e.preventDefault();
    setDragOver(false);
    if (e.dataTransfer.files?.length) addFiles(e.dataTransfer.files);
  }

  function removeFile(idx: number) {
    setFiles((prev) => prev.filter((_, i) => i !== idx));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (status === 'submitting') return;

    if (!ACCESS_KEY) {
      setError('Form is not configured yet — add NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY.');
      setStatus('error');
      return;
    }
    if (overLimit) {
      setError(`Total attachment size exceeds 10 MB. Email larger files separately.`);
      setStatus('error');
      return;
    }

    setError(null);
    setStatus('submitting');

    const fullName = `${form.firstName} ${form.lastName}`.trim();
    const data = new FormData();
    data.append('access_key', ACCESS_KEY);
    data.append('subject', `New inquiry — ${fullName}${form.company ? ` (${form.company})` : ''}`);
    data.append('from_name', fullName || 'CIMtech contact form');
    data.append('replyto', form.email);
    data.append('botcheck', '');
    data.append('Name', fullName);
    data.append('Email', form.email);
    if (form.phone) data.append('Phone', form.phone);
    if (form.company) data.append('Company', form.company);
    data.append('Message', form.message);
    files.forEach((file) => data.append('attachment', file, file.name));

    try {
      const res = await fetch(WEB3FORMS_ENDPOINT, { method: 'POST', body: data });
      const json = (await res.json().catch(() => ({}))) as { success?: boolean; message?: string };
      if (!res.ok || !json.success) {
        throw new Error(json.message ?? 'Submission failed.');
      }
      setStatus('success');
      setForm({ firstName: '', lastName: '', email: '', phone: '', company: '', message: '' });
      setFiles([]);
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
        <p className="mono-label text-[var(--color-subtle)] mt-8">
          Attach CAD files, 3D models (STEP, IGES, STL), PDFs, and supporting briefs. Up to 10 MB
          total — email larger files directly to <span className="text-[var(--color-foreground)]">info@cimtech.green</span>.
        </p>
      </div>

      <form
        className="col-span-12 md:col-span-7 flex flex-col gap-6"
        onSubmit={handleSubmit}
        noValidate
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <input
            required
            name="firstName"
            placeholder="FIRST NAME"
            className={inputBase}
            value={form.firstName}
            onChange={update('firstName')}
            autoComplete="given-name"
          />
          <input
            required
            name="lastName"
            placeholder="LAST NAME"
            className={inputBase}
            value={form.lastName}
            onChange={update('lastName')}
            autoComplete="family-name"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <input
            required
            type="email"
            name="email"
            placeholder="EMAIL"
            className={inputBase}
            value={form.email}
            onChange={update('email')}
            autoComplete="email"
          />
          <input
            type="tel"
            name="phone"
            placeholder="PHONE"
            className={inputBase}
            value={form.phone}
            onChange={update('phone')}
            autoComplete="tel"
          />
        </div>
        <input
          name="company"
          placeholder="COMPANY"
          className={inputBase}
          value={form.company}
          onChange={update('company')}
          autoComplete="organization"
        />
        <textarea
          required
          rows={4}
          name="message"
          placeholder="PROJECT BRIEF"
          className={`${inputBase} resize-none`}
          value={form.message}
          onChange={update('message')}
        />

        <div
          onDragOver={(e) => {
            e.preventDefault();
            setDragOver(true);
          }}
          onDragLeave={() => setDragOver(false)}
          onDrop={onDrop}
          className={`border border-dashed p-6 transition-colors ${
            dragOver
              ? 'border-[var(--color-accent)] bg-[rgba(41,179,75,0.05)]'
              : 'border-[var(--color-border-strong)]'
          }`}
        >
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="mono-label text-[var(--color-accent)] mb-1">+ ATTACHMENTS</p>
              <p className="text-sm text-[var(--color-muted)]">
                Drop CAD, STEP, IGES, STL, PDF, or supporting docs — or browse.
              </p>
            </div>
            <button
              type="button"
              onClick={() => fileInput.current?.click()}
              className="mono-label border border-[var(--color-border-strong)] px-4 py-2 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
            >
              BROWSE FILES
            </button>
            <input
              ref={fileInput}
              type="file"
              multiple
              hidden
              onChange={onFileChange}
              accept=".pdf,.zip,.step,.stp,.igs,.iges,.stl,.obj,.dwg,.dxf,.x_t,.x_b,.png,.jpg,.jpeg,.heic,.webp,.doc,.docx,.xls,.xlsx,.csv,.txt"
            />
          </div>

          {files.length > 0 && (
            <ul className="mt-4 space-y-2">
              {files.map((f, i) => (
                <li
                  key={`${f.name}-${i}`}
                  className="flex items-center justify-between gap-4 text-sm border-t border-[var(--color-border)] pt-2"
                >
                  <span className="truncate text-[var(--color-foreground)]">{f.name}</span>
                  <span className="mono-label text-[var(--color-subtle)] shrink-0">
                    {formatBytes(f.size)}
                  </span>
                  <button
                    type="button"
                    onClick={() => removeFile(i)}
                    className="mono-label text-[var(--color-subtle)] hover:text-[var(--color-accent)]"
                    aria-label={`Remove ${f.name}`}
                  >
                    REMOVE
                  </button>
                </li>
              ))}
            </ul>
          )}

          {files.length > 0 && (
            <p
              className={`mono-label mt-4 ${
                overLimit ? 'text-red-400' : 'text-[var(--color-subtle)]'
              }`}
            >
              TOTAL: {formatBytes(totalBytes)} / 10 MB
            </p>
          )}
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <button
            type="submit"
            disabled={status === 'submitting' || overLimit}
            className="mono-label bg-[var(--color-accent)] text-[var(--color-background)] px-6 py-4 hover:bg-[var(--color-accent-hover)] transition-colors disabled:opacity-50"
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
