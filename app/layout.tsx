import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Providers from '@/app/providers';
import bgImg from '@/public/home.jpg';
import Hero from '@/components/hero';
import '@/app/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Nextjs Demo',
  description: 'It is a Nextjs Demo Project for Study',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Hero imgData={bgImg} imgAlt="home"></Hero>
          {children}
        </Providers>
      </body>
    </html>
  );
}
