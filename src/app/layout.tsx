import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Inter, Geist_Mono } from 'next/font/google';
import { Header } from '@/components/navigation/Header';
import { Footer } from '@/components/navigation/Footer';
import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: '--font-plus-jakarta-sans',
  subsets: ['latin'],
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'CIMtech Green Energy — Precision Manufacturing Partner',
    template: '%s | CIMtech Green Energy',
  },
  description:
    'Precision manufacturing partner serving defense, commercial, consumer, and clean energy sectors. NPI prototyping to production scale from Vancouver, Canada.',
};

// Note: font-sub (Inter) is the body default, deliberately inverted from Rise Hydrogen
// which uses font-sans on body. CIMtech uses Inter (body-friendly) as default,
// with font-sans (Plus Jakarta Sans) applied explicitly on headings.
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${plusJakartaSans.variable} ${inter.variable} ${geistMono.variable} font-sub antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
