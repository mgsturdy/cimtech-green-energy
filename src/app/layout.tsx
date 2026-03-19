import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Inter, Geist_Mono } from 'next/font/google';
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
    default: 'CIMtech Green Energy — Hydrogen Fuel Cell & Electrolyzer Manufacturing',
    template: '%s | CIMtech Green Energy',
  },
  description:
    'Award-winning hydrogen fuel cell and electrolyzer manufacturing company in Canada. Top 10 green energy manufacturer serving the USA, Canada & Europe.',
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
        <main>{children}</main>
      </body>
    </html>
  );
}
