import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
export const metadata: Metadata = { title: 'ZeroOrigin Lab', description: 'A public crypto experiment exploring how digital community can lead to physical reality.' };
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="en" className={inter.variable}><body className="noise font-sans antialiased">{children}</body></html>; }
