import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'UniCart — Universal Shopping Cart',
  description: 'Save and compare items from Zara and Uniqlo in one place.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
