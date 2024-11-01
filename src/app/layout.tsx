import BodyBackgroundSetter from '@components/BackgroundSetter';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Lucas Bresson | Developer portfolio',
  description:
    'I build engaging and accessible websites using modern technologies.',
  keywords: [
    'Lucas Bresson',
    'frontend engineer',
    'freelancer',
    'web development',
    'contractor',
    'berlin',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <BodyBackgroundSetter />
        {children}
      </body>
    </html>
  );
}
