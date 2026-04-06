import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Maroles Events | Event & Wedding Planning',
  description: 'Professional event and wedding planning services in Lagos, Nigeria. Creating unforgettable moments for your special occasions.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}