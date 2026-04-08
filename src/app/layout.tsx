import type { Metadata } from 'next';
import { Inter_Tight, Geist_Mono } from 'next/font/google';
import { Header } from '@/components/navigation/Header';
import { Footer } from '@/components/navigation/Footer';
import './globals.css';

const interTight = Inter_Tight({
  variable: '--font-inter-tight',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  weight: ['400', '600'],
});

export const metadata: Metadata = {
  title: {
    default: 'CIMtech Green Energy — Precision Manufacturing Partner',
    template: '%s | CIMtech Green Energy',
  },
  description:
    'Precision manufacturing partner serving defense, commercial, consumer, and clean energy sectors. NPI prototyping to production scale from Vancouver, Canada.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${interTight.variable} ${geistMono.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
