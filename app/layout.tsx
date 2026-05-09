import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ZeroOrigin Lab — From digital origin to physical reality',
  description:
    'ZeroOrigin is a public crypto experiment exploring whether a digital community can build something real from zero.',
  openGraph: {
    title: 'ZeroOrigin Lab',
    description: 'Can a digital community build something real?',
    siteName: 'ZeroOrigin Lab',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
