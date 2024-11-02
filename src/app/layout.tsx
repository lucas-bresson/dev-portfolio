import BodyBackgroundSetter from '@components/BackgroundSetter';
import type { Metadata } from 'next';
import Script from 'next/script';
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
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
    `,
        }}
      />
      <body>
        <BodyBackgroundSetter />
        {children}
      </body>
    </html>
  );
}
